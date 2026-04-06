// ── SVG icon library (keyed to WindowsAudioService icon keys) ──────────────────
const ICONS = {
  speaker: (color='#0078d7') => `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="11" width="6" height="10" rx="1" fill="${color}"/>
    <path d="M9 11 L17 5 L17 27 L9 21Z" fill="${color}"/>
    <path d="M20 10Q25.5 16 20 22" stroke="${color}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <path d="M22.5 7Q30 16 22.5 25" stroke="${color}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  </svg>`,

  speaker_muted: () => `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="11" width="6" height="10" rx="1" fill="#c0392b"/>
    <path d="M9 11 L17 5 L17 27 L9 21Z" fill="#c0392b"/>
    <line x1="20" y1="11" x2="27" y2="21" stroke="#c0392b" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="27" y1="11" x2="20" y2="21" stroke="#c0392b" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  windows: () => `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="11" height="11" rx="1" fill="#f35325"/>
    <rect x="17" y="4" width="11" height="11" rx="1" fill="#81bc06"/>
    <rect x="4" y="17" width="11" height="11" rx="1" fill="#05a6f0"/>
    <rect x="17" y="17" width="11" height="11" rx="1" fill="#ffba08"/>
  </svg>`,

  chrome: () => `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="13" fill="#fff"/>
    <path d="M16 3 A13 13 0 0 1 28.3 9.5 H16 A6.5 6.5 0 0 0 9.7 9.5Z" fill="#ea4335"/>
    <path d="M28.3 9.5 A13 13 0 0 1 28.3 22.5 L22 16 A6.5 6.5 0 0 0 22 9.5Z" fill="#fbbc05"/>
    <path d="M28.3 22.5 A13 13 0 0 1 3.7 22.5 L10 16 A6.5 6.5 0 0 0 22 16Z" fill="#34a853"/>
    <circle cx="16" cy="16" r="4.5" fill="#4285f4"/>
    <circle cx="16" cy="16" r="3" fill="#fff"/>
  </svg>`,

  edge: () => `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M26 18c0 5.5-4.5 9-10 9-5 0-9-3-10-7.5 1.5 2 4 3.5 7 3.5 5 0 8-3 8-7.5C21 12 18 9 13.5 9c-1 0-2 .2-3 .6C13 7 16 5 20 5c3.5 0 6 2.5 6 5z" fill="#0078d7"/>
    <path d="M6 19.5C7.5 21.5 10 23 13 23c5 0 8-3 8-7.5C21 12 18 9 13.5 9c-1 0-2 .2-3 .6C8 11 6 14 6 17.5v2z" fill="#1ba1e2"/>
  </svg>`,

  firefox: () => `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="12" fill="#ff9400"/>
    <path d="M16 4c-2 0-4 .5-5.7 1.4 2.2-.3 4.5.5 6 2 2 2 2 5 .5 7.5-1 1.8-3 3-5 3.5-2.5.5-5-.5-6.3-2.7A12 12 0 0 0 28 16c0-6.6-5.4-12-12-12z" fill="#ff6611"/>
    <circle cx="16" cy="16" r="6" fill="#fff"/>
    <circle cx="16" cy="16" r="4" fill="#0078d7"/>
  </svg>`,

  spotify: () => `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="14" fill="#1db954"/>
    <path d="M9 12.5Q16 10 23.5 13.5" stroke="white" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <path d="M10 17Q16 15 22.5 18" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M11 21Q16 19.5 21.5 21.5" stroke="white" stroke-width="1.7" fill="none" stroke-linecap="round"/>
  </svg>`,

  discord: () => `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#5865F2"/>
    <ellipse cx="12.5" cy="17" rx="2.2" ry="2.5" fill="white"/>
    <ellipse cx="19.5" cy="17" rx="2.2" ry="2.5" fill="white"/>
    <path d="M10 12.5C11.5 11 14 10.5 16 10.5S20.5 11 22 12.5M10 21.5C11 22.5 13 23 16 23s5-0.5 6-1.5" stroke="white" stroke-width="1.3" fill="none" stroke-linecap="round"/>
  </svg>`,

  vlc: () => `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <polygon points="16,2 30,29 2,29" fill="#f90"/>
    <polygon points="16,8 27.5,29 4.5,29" fill="#e67e00"/>
    <rect x="11" y="22" width="10" height="4" rx="2" fill="white"/>
    <rect x="13" y="18.5" width="6" height="4" rx="1.2" fill="white"/>
    <rect x="14.5" y="15" width="3" height="4" rx="1" fill="white"/>
  </svg>`,

  teams: () => `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="8" width="26" height="20" rx="3" fill="#4b53bc"/>
    <circle cx="11" cy="11" r="3" fill="#fff"/>
    <circle cx="21" cy="11" r="3" fill="#fff"/>
    <rect x="7" y="16" width="8" height="9" rx="2" fill="#fff"/>
    <rect x="17" y="16" width="8" height="9" rx="2" fill="#9ea4d4"/>
  </svg>`,

  zoom: () => `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="8" width="28" height="16" rx="4" fill="#2d8cff"/>
    <rect x="4" y="10" width="17" height="12" rx="2" fill="white"/>
    <path d="M21 14 L28 10 L28 22 L21 18Z" fill="white"/>
  </svg>`,

  slack: () => `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="12" width="5" height="9" rx="2.5" fill="#e01e5a" transform="rotate(-90,8,17)"/>
    <rect x="14" y="4" width="5" height="9" rx="2.5" fill="#e01e5a"/>
    <rect x="4" y="14" width="5" height="9" rx="2.5" fill="#36c5f0" transform="rotate(-90,8,19)"/>
    <rect x="14" y="19" width="5" height="9" rx="2.5" fill="#36c5f0"/>
    <rect x="19" y="12" width="5" height="9" rx="2.5" fill="#2eb67d" transform="rotate(-90,22,17)"/>
    <rect x="23" y="4" width="5" height="9" rx="2.5" fill="#ecb22e"/>
    <rect x="19" y="14" width="5" height="9" rx="2.5" fill="#ecb22e" transform="rotate(-90,22,19)"/>
    <rect x="23" y="19" width="5" height="9" rx="2.5" fill="#2eb67d"/>
  </svg>`,

  steam: () => `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="13" fill="#1b2838"/>
    <circle cx="16" cy="16" r="5" fill="none" stroke="#c6d4df" stroke-width="2"/>
    <circle cx="16" cy="16" r="2.5" fill="#c6d4df"/>
    <path d="M4 20 Q10 26 16 24" stroke="#c6d4df" stroke-width="2" fill="none"/>
  </svg>`,

  wmp: () => `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="14" fill="#0078d7"/>
    <circle cx="16" cy="16" r="10" fill="#005a9e"/>
    <polygon points="13,11 13,21 22,16" fill="#fff"/>
  </svg>`,

  groove: () => `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill="#e74856"/>
    <circle cx="16" cy="17" r="7" fill="none" stroke="white" stroke-width="2.5"/>
    <circle cx="16" cy="17" r="2.5" fill="white"/>
    <rect x="14.5" y="6" width="3" height="7" rx="1.5" fill="white"/>
  </svg>`,

  itunes: () => `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="7" fill="url(#itg)"/>
    <defs><linearGradient id="itg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fc5c7d"/><stop offset="100%" stop-color="#6a82fb"/></linearGradient></defs>
    <circle cx="16" cy="18" r="5.5" fill="none" stroke="white" stroke-width="2"/>
    <circle cx="16" cy="18" r="2" fill="white"/>
    <rect x="14.5" y="7" width="3" height="8" rx="1.5" fill="white"/>
    <rect x="19" y="8" width="3" height="6" rx="1.5" fill="white"/>
  </svg>`,

  opera: () => `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="13" fill="#ff1b2d"/>
    <ellipse cx="16" cy="16" rx="6" ry="9" fill="none" stroke="white" stroke-width="2.5"/>
  </svg>`,

  brave: () => `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill="#fb542b"/>
    <path d="M16 5L26 9 23 24 16 28 9 24 6 9Z" fill="none" stroke="white" stroke-width="2"/>
    <path d="M16 10v12M12 15h8" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  app: () => `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="24" height="24" rx="4" fill="#888"/>
    <rect x="8" y="8" width="16" height="10" rx="2" fill="#bbb"/>
    <rect x="8" y="20" width="7" height="5" rx="1.5" fill="#bbb"/>
    <rect x="17" y="20" width="7" height="5" rx="1.5" fill="#bbb"/>
  </svg>`,
};

function getIcon(key, muted=false) {
  if (key === 'speaker') return muted ? ICONS.speaker_muted() : ICONS.speaker();
  return (ICONS[key] || ICONS.app)();
}

// Mute button SVGs
const MUTE_ON  = (color) => `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1.5" y="7" width="4" height="6" rx=".7" fill="${color}"/>
  <path d="M5.5 7 L11 3 L11 21 L5.5 17Z" fill="${color}"/>
  <path d="M14 8Q17.5 12 14 16" stroke="${color}" stroke-width="1.6" fill="none" stroke-linecap="round"/>
  <path d="M16 6Q21.5 12 16 18" stroke="${color}" stroke-width="1.6" fill="none" stroke-linecap="round"/>
</svg>`;

const MUTE_OFF = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1.5" y="7" width="4" height="6" rx=".7" fill="#c0392b"/>
  <path d="M5.5 7 L11 3 L11 21 L5.5 17Z" fill="#c0392b"/>
  <line x1="15" y1="8" x2="21" y2="16" stroke="#c0392b" stroke-width="2" stroke-linecap="round"/>
  <line x1="21" y1="8" x2="15" y2="16" stroke="#c0392b" stroke-width="2" stroke-linecap="round"/>
</svg>`;

// ── Tick marks ───────────────────────────────────────────────────────────────
function buildTicks(n=11) {
  return `<div class="ch-ticks">${Array.from({length:n},(_,i)=>
    `<div class="ch-tick${i===0||i===5||i===10?' major':''}"></div>`
  ).join('')}</div>`;
}

// ── Render a single channel ───────────────────────────────────────────────────
function renderChannel(ch) {
  const iconHtml = getIcon(ch.icon, ch.muted);
  const muteColor = ch.muted ? '#c0392b' : (ch.isDevice ? '#0078d7' : '#555');
  const muteHtml  = ch.muted ? MUTE_OFF : MUTE_ON(muteColor);

  return `
  <div class="channel${ch.isDevice?' is-device':''}${ch.muted?' is-muted':''}"
       id="ch-${CSS.escape(ch.id)}">
    <div class="ch-icon" id="icon-${CSS.escape(ch.id)}">${iconHtml}</div>
    <div class="ch-volnum" id="num-${CSS.escape(ch.id)}">${ch.volume}</div>
    <div class="ch-slider-wrap">
      ${buildTicks()}
      <input type="range" class="ch-slider"
             id="slider-${CSS.escape(ch.id)}"
             min="0" max="100" value="${ch.volume}"
             orient="vertical"
             aria-label="${ch.name} volume" />
    </div>
    <button class="ch-mute" id="mute-${CSS.escape(ch.id)}"
            title="${ch.muted?'Unmute':'Mute'}"
            style="color:${muteColor}">${muteHtml}</button>
    <div class="ch-label" title="${ch.name}">${ch.name}</div>
  </div>`;
}

// ── API calls ─────────────────────────────────────────────────────────────────
async function apiGet()       { const r = await fetch('/api/volume'); return r.json(); }
async function apiVol(id, v)  { return fetch('/api/volume/setvolume', {method:'PATCH', headers:{'Content-Type':'application/json'}, body:JSON.stringify({id, value:v})}); }
async function apiMute(id, m) { return fetch('/api/volume/setmute',   {method:'PATCH', headers:{'Content-Type':'application/json'}, body:JSON.stringify({id, muted:m})}); }

// ── State ─────────────────────────────────────────────────────────────────────
// Map of id → {ch, dragging, debounce}
const live = new Map();
let initialised = false;
let refreshTimer = null;

function status(msg) {
  document.getElementById('statusbar').textContent = msg;
}

// ── CSS transition helper ─────────────────────────────────────────────────────
// Smoothly animate a slider to a new value without triggering 'input'
function animateSlider(slider, target) {
  const start   = parseFloat(slider.value);
  const delta   = target - start;
  if (Math.abs(delta) < 0.5) return;
  const dur     = 300; // ms
  const t0      = performance.now();
  function step(now) {
    const p = Math.min((now - t0) / dur, 1);
    // ease-out cubic
    const ease = 1 - Math.pow(1 - p, 3);
    slider.value = start + delta * ease;
    if (p < 1) requestAnimationFrame(step);
    else slider.value = target;
  }
  requestAnimationFrame(step);
}

// ── Bind events for a freshly-created channel element ────────────────────────
function bindChannel(ch) {
  const eid     = CSS.escape(ch.id);
  const slider  = document.getElementById(`slider-${eid}`);
  const numEl   = document.getElementById(`num-${eid}`);
  const muteBtn = document.getElementById(`mute-${eid}`);
  const iconEl  = document.getElementById(`icon-${eid}`);
  const chEl    = document.getElementById(`ch-${eid}`);

  const state = { ch, dragging: false, debounce: null };
  live.set(ch.id, state);

  slider.addEventListener('mousedown', () => { state.dragging = true; });
  slider.addEventListener('touchstart', () => { state.dragging = true; }, {passive:true});
  window.addEventListener('mouseup',  () => { state.dragging = false; }, {passive:true});
  window.addEventListener('touchend', () => { state.dragging = false; }, {passive:true});

  slider.addEventListener('input', () => {
    const v = parseInt(slider.value);
    ch.volume = v;
    numEl.textContent = v;
    clearTimeout(state.debounce);
    state.debounce = setTimeout(async () => {
      status(`${ch.name}: ${v}%`);
      await apiVol(ch.id, v);
    }, 80);
  });

  muteBtn.addEventListener('click', async () => {
    ch.muted = !ch.muted;
    applyMuteUI(ch, chEl, muteBtn, iconEl);
    status(`${ch.name} ${ch.muted ? 'muted' : 'unmuted'}`);
    await apiMute(ch.id, ch.muted);
  });
}

function applyMuteUI(ch, chEl, muteBtn, iconEl) {
  const color = ch.muted ? '#c0392b' : (ch.isDevice ? '#0078d7' : '#555');
  muteBtn.innerHTML = ch.muted ? MUTE_OFF : MUTE_ON(color);
  muteBtn.title = ch.muted ? 'Unmute' : 'Mute';
  muteBtn.style.color = color;
  chEl.classList.toggle('is-muted', ch.muted);
  iconEl.innerHTML = getIcon(ch.icon, ch.muted);
}

// ── Smart diff-patch: update existing channels, add new, remove gone ──────────
function patch(fresh) {
  const deviceRow = document.getElementById('device-row');
  const appsRow   = document.getElementById('apps-row');

  const freshMap  = new Map(fresh.map(c => [c.id, c]));
  const existIds  = new Set(live.keys());

  // 1. Remove channels that disappeared — fade them out
  for (const id of existIds) {
    if (!freshMap.has(id)) {
      const eid = CSS.escape(id);
      const el  = document.getElementById(`ch-${eid}`);
      if (el) {
        el.style.transition = 'opacity .3s, transform .3s';
        el.style.opacity    = '0';
        el.style.transform  = 'scaleY(0.85)';
        setTimeout(() => el.remove(), 310);
      }
      live.delete(id);
    }
  }

  // 2. Update existing channels that the user isn't currently dragging
  for (const [id, state] of live) {
    const f = freshMap.get(id);
    if (!f) continue;
    const eid     = CSS.escape(id);
    const slider  = document.getElementById(`slider-${eid}`);
    const numEl   = document.getElementById(`num-${eid}`);
    const muteBtn = document.getElementById(`mute-${eid}`);
    const iconEl  = document.getElementById(`icon-${eid}`);
    const chEl    = document.getElementById(`ch-${eid}`);

    // Only sync volume if user isn't dragging this slider right now
    if (!state.dragging && slider && Math.abs(parseInt(slider.value) - f.volume) > 0) {
      animateSlider(slider, f.volume);
      if (numEl) numEl.textContent = f.volume;
    }

    // Sync mute state if it changed externally
    if (state.ch.muted !== f.muted) {
      state.ch.muted = f.muted;
      if (chEl && muteBtn && iconEl) applyMuteUI(f, chEl, muteBtn, iconEl);
    }

    // Keep our local state in sync
    state.ch.volume = f.volume;
  }

  // 3. Add brand-new channels — fade them in
  for (const f of fresh) {
    if (live.has(f.id)) continue;
    const row = f.isDevice ? deviceRow : appsRow;

    // Remove "empty" placeholder if present
    const placeholder = row.querySelector('.empty-msg, .loading-msg');
    if (placeholder) placeholder.remove();

    const wrapper = document.createElement('div');
    wrapper.innerHTML = renderChannel(f);
    const el = wrapper.firstElementChild;
    el.style.opacity   = '0';
    el.style.transform = 'scaleY(0.85)';
    row.appendChild(el);

    // Trigger reflow then animate in
    requestAnimationFrame(() => {
      el.style.transition = 'opacity .35s, transform .35s';
      el.style.opacity    = '1';
      el.style.transform  = 'scaleY(1)';
    });

    bindChannel(f);

    // Update toolbar device name
    if (f.isDevice) {
      document.getElementById('device-name-toolbar').textContent = f.name;
    }
  }

  // 4. Show empty states if rows are empty
  if (!fresh.some(c => c.isDevice) && !deviceRow.querySelector('.channel')) {
    deviceRow.innerHTML = `<div class="empty-msg">No audio device found</div>`;
  }
  if (!fresh.some(c => !c.isDevice) && !appsRow.querySelector('.channel')) {
    appsRow.innerHTML = `<div class="empty-msg">No active app audio sessions</div>`;
  }

  const devCount = fresh.filter(c => c.isDevice).length;
  const appCount = fresh.filter(c => !c.isDevice).length;
  status(`${devCount} device · ${appCount} app${appCount !== 1 ? 's' : ''} — ${new Date().toLocaleTimeString()}`);
}

// ── Full initial load (first time only — shows spinner) ───────────────────────
async function initialLoad() {
  const deviceRow = document.getElementById('device-row');
  const appsRow   = document.getElementById('apps-row');
  deviceRow.innerHTML = `<div class="loading-msg"><div class="spinner"></div>Reading Windows audio…</div>`;
  appsRow.innerHTML   = '';
  status('Connecting to Windows audio service…');

  let fresh;
  try {
    fresh = await apiGet();
  } catch(e) {
    deviceRow.innerHTML = `<div class="empty-msg">⚠ Cannot reach the audio API.<br>Make sure the server is running.</div>`;
    status('Error: Could not connect to audio API');
    return;
  }

  deviceRow.innerHTML = '';
  appsRow.innerHTML   = '';
  patch(fresh);
  initialised = true;
}

// ── Silent background refresh (no spinner, no flicker) ────────────────────────
async function silentRefresh() {
  let fresh;
  try {
    fresh = await apiGet();
  } catch(e) {
    return; // silently skip — don't disrupt the UI
  }
  patch(fresh);
}

// ── Kick off ──────────────────────────────────────────────────────────────────
document.getElementById('btn-refresh').addEventListener('click', () => {
  live.clear();
  initialLoad();
});

initialLoad().then(() => {
  // After first load, poll every 2s — silently
  refreshTimer = setInterval(silentRefresh, 2000);
});
