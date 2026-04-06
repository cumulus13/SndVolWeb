# SndVolWeb — Real Windows Volume Mixer Web App

A web-based replica of **sndvol.exe** that controls **REAL Windows audio** —
your actual speakers and every running app's audio session (Chrome, Spotify,
Discord, VLC, etc.) — using the Windows Core Audio (WASAPI/MMDevice) API
through **NAudio**.

---

[![Screenshot](https://raw.githubusercontent.com/cumulus13/sndvolweb/master/screenshot.png)](https://raw.githubusercontent.com/cumulus13/sndvolweb/master/screenshot.png)

--

## How it works

```
Browser UI  ←──────────────→  ASP.NET Core API  ←──→  Windows MMDevice API
(your browser at localhost:5050)   (runs on your PC)        (real audio)
```

The backend uses **NAudio** (a .NET wrapper for Windows Core Audio COM APIs):
- `MMDeviceEnumerator` → lists real audio endpoints
- `AudioEndpointVolume` → master device volume & mute
- `AudioSessionManager2` → per-app audio sessions
- `ISimpleAudioVolume` → per-app volume & mute
- `Process.GetProcessById` → resolves PID → app name/icon

---

## Prerequisites

| Requirement | Version | Link |
|-------------|---------|------|
| .NET 8 SDK  | 8.0+    | https://dotnet.microsoft.com/download |
| Windows     | 10 / 11 | (required — uses Windows Core Audio) |

Check if .NET is installed:
```powershell
dotnet --version
# Must print 8.x.x
```

---

## Setup & Run (Step by Step)

### Step 1 — Extract the project

Unzip `SndVolWeb.zip` to any folder, e.g. `C:\SndVolWeb\`

### Step 2 — Open a terminal in the project folder

```powershell
cd C:\SndVolWeb
```

### Step 3 — Restore packages (downloads NAudio from NuGet)

```powershell
dotnet restore
```

You'll see it download:
```
  Restored ... NAudio (2.2.1)
  Restored ... NAudio.Wasapi (2.2.1)
```

### Step 4 — Run

```powershell
dotnet run
```

Output:
```
info: Now listening on: http://localhost:5050
```

**Your browser opens automatically** at `http://localhost:5050`

You'll see your real speakers and every app currently playing audio!

---

## What you'll see

| Channel | What it is |
|---------|------------|
| **Speakers** | Your default audio device — drag to change master volume |
| **System Sounds** | Windows notification sounds (PID 0) |
| **Chrome / Edge** | Any browser tab playing audio |
| **Spotify** | Spotify app if it's open |
| **Discord** | Discord voice/sounds |
| **Any other app** | Anything registered with Windows audio mixer |

> 🔄 The UI **auto-refreshes every 4 seconds** to detect new/closed app sessions,
> just like the real sndvol.exe.

---

## Build as a standalone .exe (no .NET install needed)

```powershell
dotnet publish -c Release -r win-x64 --self-contained true -o .\publish
```

Then just run:
```powershell
.\publish\SndVolWeb.exe
```

It opens your browser automatically!

---

## Troubleshooting

**"No audio device found"**
→ Make sure your PC has an audio device and it's enabled in Windows Device Manager.

**"No active app audio sessions"**
→ Open an app that plays sound (Chrome with a YouTube tab, Spotify, etc.) then
click **↻ Refresh** or wait 4 seconds.

**"Cannot reach the audio API"**
→ The `dotnet run` server isn't running. Start it first, then open the browser.

**Firewall prompt**
→ Click "Allow" — it only listens on localhost (127.0.0.1), not accessible from other computers.

**"Access denied" errors**
→ Run the terminal as **Administrator** if NAudio can't access audio sessions.

---

## API Reference

| Method | URL | Body | Description |
|--------|-----|------|-------------|
| GET | `/api/volume` | — | All real channels |
| PATCH | `/api/volume/{id}/volume` | `{"value":75}` | Set volume 0–100 |
| PATCH | `/api/volume/{id}/mute` | `{"muted":true}` | Mute/unmute |

IDs look like:
- Device: `device:{windows-device-guid}`
- App: `session:{pid}:{appname}`

---

## Add more app icons

In `wwwroot/js/app.js`, add to the `ICONS` object:

```js
myapp: () => `<svg>...</svg>`,
```

In `WindowsAudioService.cs`, add to `_iconMap`:

```csharp
["myapp"] = "myapp",
```

---

## License

MIT — free to use, modify, and distribute.

## 👤 Author
        
[Hadi Cahyadi](mailto:cumulus13@gmail.com)
    

[![Buy Me a Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/cumulus13)

[![Donate via Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/cumulus13)
 
[Support me on Patreon](https://www.patreon.com/cumulus13)
