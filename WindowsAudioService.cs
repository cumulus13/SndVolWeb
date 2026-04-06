// File: WindowsAudioService.cs
// Author: Hadi Cahyadi <cumulus13@gmail.com>
// Date: 2026-04-06
// Description: 
// License: MIT

using NAudio.CoreAudioApi;
using NAudio.CoreAudioApi.Interfaces;
using System.Diagnostics;
using System.Runtime.InteropServices;

namespace SndVolWeb;

// ── Data models ───────────────────────────────────────────────────────────────

public class AudioChannel
{
    public string Id        { get; set; } = "";
    public string Name      { get; set; } = "";
    public string Icon      { get; set; } = "";   // key used by frontend
    public int    Volume    { get; set; }          // 0–100
    public bool   Muted     { get; set; }
    public bool   IsDevice  { get; set; }
    public int    Pid       { get; set; }          // 0 for devices
    public string ExePath   { get; set; } = "";
}

// ── Service ───────────────────────────────────────────────────────────────────

/// <summary>
/// Wraps Windows MMDevice API (via NAudio) to expose REAL audio devices
/// and REAL per-application audio sessions — exactly like sndvol.exe.
/// </summary>
public class WindowsAudioService : IDisposable
{
    private readonly MMDeviceEnumerator _enumerator = new();

    // ── Enumerate everything ─────────────────────────────────────────────────

    public List<AudioChannel> GetAll()
    {
        var result = new List<AudioChannel>();

        // 1. Default playback device (master volume)
        try
        {
            var device = _enumerator.GetDefaultAudioEndpoint(DataFlow.Render, Role.Multimedia);
            result.Add(DeviceChannel(device));
        }
        catch { /* no audio device available */ }

        // 2. Per-app audio sessions on the default device
        try
        {
            var device = _enumerator.GetDefaultAudioEndpoint(DataFlow.Render, Role.Multimedia);
            var mgr    = device.AudioSessionManager;
            var sessions = mgr.Sessions;

            for (int i = 0; i < sessions.Count; i++)
            {
                var session = sessions[i];
                var ch = SessionChannel(session);
                if (ch != null) result.Add(ch);
            }
        }
        catch { }

        return result;
    }

    // ── Get a single channel ─────────────────────────────────────────────────

    public AudioChannel? GetById(string id)
        => GetAll().FirstOrDefault(c => c.Id == id);

    // ── Set master device volume ─────────────────────────────────────────────

    public bool SetDeviceVolume(int volume)
    {
        try
        {
            var device = _enumerator.GetDefaultAudioEndpoint(DataFlow.Render, Role.Multimedia);
            device.AudioEndpointVolume.MasterVolumeLevelScalar = volume / 100f;
            return true;
        }
        catch { return false; }
    }

    public bool SetDeviceMute(bool muted)
    {
        try
        {
            var device = _enumerator.GetDefaultAudioEndpoint(DataFlow.Render, Role.Multimedia);
            device.AudioEndpointVolume.Mute = muted;
            return true;
        }
        catch { return false; }
    }

    // ── Set per-app session volume ────────────────────────────────────────────

    public bool SetSessionVolume(string id, int volume)
    {
        var session = FindSession(id);
        if (session == null) return false;
        session.SimpleAudioVolume.Volume = volume / 100f;
        return true;
    }

    public bool SetSessionMute(string id, bool muted)
    {
        var session = FindSession(id);
        if (session == null) return false;
        session.SimpleAudioVolume.Mute = muted;
        return true;
    }

    // ── Helpers ───────────────────────────────────────────────────────────────

    private AudioChannel DeviceChannel(MMDevice device)
    {
        var vol  = (int)Math.Round(device.AudioEndpointVolume.MasterVolumeLevelScalar * 100);
        var mute = device.AudioEndpointVolume.Mute;
        var name = device.FriendlyName;
        // Shorten long device names like "Speakers (Realtek High Definition Audio)"
        if (name.Contains('(')) name = name[..name.IndexOf('(')].Trim();

        return new AudioChannel
        {
            Id       = "device:" + device.ID,
            Name     = name,
            Icon     = "speaker",
            Volume   = vol,
            Muted    = mute,
            IsDevice = true,
        };
    }

    private AudioChannel? SessionChannel(AudioSessionControl session)
    {
        try
        {
            // Skip sessions that are expired or not active
            var state = session.State;
            if (state == AudioSessionState.AudioSessionStateExpired) return null;

            uint pid = session.GetProcessID;

            // PID 0 = System Sounds (special)
            string name, iconKey, exePath = "";
            if (pid == 0)
            {
                name    = "System Sounds";
                iconKey = "windows";
            }
            else
            {
                try
                {
                    var proc = Process.GetProcessById((int)pid);
                    exePath  = proc.MainModule?.FileName ?? "";
                    name     = FriendlyAppName(proc, session);
                    iconKey  = IconKeyFromExe(exePath, proc.ProcessName);
                }
                catch
                {
                    // process may have exited between GetProcessID and here
                    return null;
                }
            }

            var vol  = (int)Math.Round(session.SimpleAudioVolume.Volume * 100);
            var mute = session.SimpleAudioVolume.Mute;

            return new AudioChannel
            {
                Id      = $"session:{pid}:{name}",
                Name    = name,
                Icon    = iconKey,
                Volume  = vol,
                Muted   = mute,
                Pid     = (int)pid,
                ExePath = exePath,
            };
        }
        catch { return null; }
    }

    private AudioSessionControl? FindSession(string id)
    {
        try
        {
            var device   = _enumerator.GetDefaultAudioEndpoint(DataFlow.Render, Role.Multimedia);
            var sessions = device.AudioSessionManager.Sessions;
            for (int i = 0; i < sessions.Count; i++)
            {
                var s   = sessions[i];
                uint pid = s.GetProcessID;
                if (pid == 0 && id.StartsWith("session:0:")) return s;
                try
                {
                    var proc = Process.GetProcessById((int)pid);
                    var name = FriendlyAppName(proc, s);
                    if (id == $"session:{pid}:{name}") return s;
                }
                catch { }
            }
        }
        catch { }
        return null;
    }

    // ── Name resolution ───────────────────────────────────────────────────────

    private static string FriendlyAppName(Process proc, AudioSessionControl session)
    {
        // Try session display name first (set by the app itself)
        var dispName = session.DisplayName;
        if (!string.IsNullOrWhiteSpace(dispName) && dispName != proc.ProcessName)
            return CleanName(dispName);

        // Then try FileVersionInfo product name
        try
        {
            var fvi = proc.MainModule?.FileVersionInfo;
            if (fvi != null)
            {
                if (!string.IsNullOrWhiteSpace(fvi.ProductName))
                    return CleanName(fvi.ProductName);
                if (!string.IsNullOrWhiteSpace(fvi.FileDescription))
                    return CleanName(fvi.FileDescription);
            }
        }
        catch { }

        // Fallback: process name
        return ToTitleCase(proc.ProcessName);
    }

    private static string CleanName(string s)
    {
        // Remove junk suffixes like "(R)", "(TM)", etc.
        s = s.Replace("(R)", "").Replace("®", "").Replace("™", "").Replace("(TM)", "").Trim();
        return s.Length > 30 ? s[..30] : s;
    }

    private static string ToTitleCase(string s)
    {
        if (string.IsNullOrEmpty(s)) return s;
        return char.ToUpper(s[0]) + s[1..].ToLower();
    }

    // ── Icon key mapping ──────────────────────────────────────────────────────

    private static readonly Dictionary<string, string> _iconMap = new(StringComparer.OrdinalIgnoreCase)
    {
        ["chrome"]        = "chrome",
        ["msedge"]        = "edge",
        ["firefox"]       = "firefox",
        ["opera"]         = "opera",
        ["brave"]         = "brave",
        ["spotify"]       = "spotify",
        ["discord"]       = "discord",
        ["vlc"]           = "vlc",
        ["wmplayer"]      = "wmp",
        ["groove"]        = "groove",
        ["ms-windows-store"] = "store",
        ["mspaint"]       = "mspaint",
        ["teams"]         = "teams",
        ["slack"]         = "slack",
        ["zoom"]          = "zoom",
        ["skype"]         = "skype",
        ["itunes"]        = "itunes",
        ["winamp"]        = "winamp",
        ["steam"]         = "steam",
        ["epicgameslauncher"] = "epic",
        ["battle.net"]    = "battlenet",
        ["explorer"]      = "explorer",
    };

    private static string IconKeyFromExe(string exePath, string processName)
    {
        var name = processName.ToLower();
        foreach (var kv in _iconMap)
            if (name.Contains(kv.Key)) return kv.Value;

        // Try matching exe filename too
        var file = Path.GetFileNameWithoutExtension(exePath).ToLower();
        foreach (var kv in _iconMap)
            if (file.Contains(kv.Key)) return kv.Value;

        return "app"; // generic fallback
    }

    public void Dispose() => _enumerator.Dispose();
}
