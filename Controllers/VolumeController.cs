using Microsoft.AspNetCore.Mvc;
using SndVolWeb;

namespace SndVolWeb.Controllers;

[ApiController]
[Route("api/[controller]")]
public class VolumeController : ControllerBase
{
    // Instantiate fresh each request so we always read live state from Windows
    private WindowsAudioService NewSvc() => new WindowsAudioService();

    // GET /api/volume  — returns all real devices + app sessions
    [HttpGet]
    public IActionResult GetAll()
    {
        using var svc = NewSvc();
        return Ok(svc.GetAll());
    }

    // PATCH /api/volume/setvolume   body: { "id": "session:1234:Spotify", "value": 75 }
    [HttpPatch("setvolume")]
    public IActionResult SetVolume([FromBody] VolumeRequest req)
    {
        using var svc = NewSvc();
        bool ok = req.Id.StartsWith("device:")
            ? svc.SetDeviceVolume(req.Value)
            : svc.SetSessionVolume(req.Id, req.Value);

        if (!ok) return NotFound(new { error = $"Channel '{req.Id}' not found" });
        return Ok(svc.GetById(req.Id));
    }

    // PATCH /api/volume/setmute   body: { "id": "session:1234:Spotify", "muted": true }
    [HttpPatch("setmute")]
    public IActionResult SetMute([FromBody] MuteRequest req)
    {
        using var svc = NewSvc();
        bool ok = req.Id.StartsWith("device:")
            ? svc.SetDeviceMute(req.Muted)
            : svc.SetSessionMute(req.Id, req.Muted);

        if (!ok) return NotFound(new { error = $"Channel '{req.Id}' not found" });
        return Ok(svc.GetById(req.Id));
    }
}

public record VolumeRequest(string Id, int Value);
public record MuteRequest(string Id, bool Muted);
