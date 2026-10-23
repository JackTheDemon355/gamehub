// ── GAME HUB AUTH MODULE ────────────────────────────────────────────
// Include this on game pages that need save/load functionality
// <script src="auth.js"></script>

const SUPABASE_URL = 'https://rxdkdylcfspmiljicwdd.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4ZGtkeWxjZnNwbWlsamljd2RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAzNjQxMDAsImV4cCI6MjEwNTk0MDEwMH0.ifhyyUye28DlGEOcScRDz5lpFW_1soXjzPaS1PrMxmU';

// Load Supabase if not already loaded
(function() {
  if (window.supabase) return;
  const s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js';
  s.onload = () => window._sbReady && window._sbReady();
  document.head.appendChild(s);
})();

const GHAuth = (function() {
  const GUEST_SAVE_LIMIT = 4;
  let _sb = null;
  let _session = null;
  let _profile = null;
  let _ready = false;
  let _readyCbs = [];

  function getSB() {
    if (!_sb) _sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    return _sb;
  }

  async function init() {
    const sb = getSB();
    const { data: { session } } = await sb.auth.getSession();
    _session = session;
    if (session) {
      const { data } = await sb.from('profiles')
        .select('is_pro, display_name, avatar_url, email')
        .eq('id', session.user.id)
        .maybeSingle();
      _profile = data;
    }
    _ready = true;
    _readyCbs.forEach(cb => cb());
    _readyCbs = [];
    sb.auth.onAuthStateChange(async (event, session) => {
      _session = session;
      if (session) {
        const { data } = await sb.from('profiles')
          .select('is_pro, display_name, avatar_url, email')
          .eq('id', session.user.id)
          .maybeSingle();
        _profile = data;
      } else {
        _profile = null;
      }
    });
  }

  function onReady(cb) {
    if (_ready) cb(); else _readyCbs.push(cb);
  }

  function getUser() { return _session?.user || null; }
  function getProfile() { return _profile; }
  function isPro() { return _profile?.is_pro === true; }
  function isLoggedIn() { return !!_session; }
  function getDisplayName() {
    return _profile?.display_name || _session?.user?.email?.split('@')[0] || 'Guest';
  }

  // ── SAVE SYSTEM ──────────────────────────────────────────────────
  // Saves go to Supabase if logged in, localStorage as fallback
  // Key = game_slug (e.g. 'neonrunner', 'snake')
  async function saveGame(slug, data) {
    const payload = JSON.stringify({ slug, data, saved_at: new Date().toISOString() });
    if (isLoggedIn()) {
      // Upsert to game_saves table
      const sb = getSB();
      const { error } = await sb.from('game_saves').upsert({
        user_id: _session.user.id,
        game: slug,
        save_data: data,
        saved_at: new Date().toISOString()
      }, { onConflict: 'user_id,game' });
      if (error) {
        console.warn('Cloud save failed, using localStorage:', error.message);
        try { localStorage.setItem('gh_save_' + slug, payload); } catch(e) {}
      }
      // Also keep local copy for fast load
      try { localStorage.setItem('gh_save_' + slug, payload); } catch(e) {}
      return !error;
    } else {
      // Guest: check limit
      const savedKeys = Object.keys(localStorage).filter(k => k.startsWith('gh_save_'));
      const alreadySaved = savedKeys.includes('gh_save_' + slug);
      if (!alreadySaved && savedKeys.length >= GUEST_SAVE_LIMIT) {
        return { error: 'limit', message: 'Guests can only save ' + GUEST_SAVE_LIMIT + ' games. Sign in for unlimited saves!' };
      }
      try { localStorage.setItem('gh_save_' + slug, payload); return true; } catch(e) { return false; }
    }
  }

  async function loadGame(slug) {
    // Try localStorage first (fastest)
    try {
      const local = localStorage.getItem('gh_save_' + slug);
      if (local) {
        const parsed = JSON.parse(local);
        return parsed.data;
      }
    } catch(e) {}
    // Try Supabase
    if (isLoggedIn()) {
      const sb = getSB();
      const { data } = await sb.from('game_saves')
        .select('save_data')
        .eq('user_id', _session.user.id)
        .eq('game', slug)
        .maybeSingle();
      if (data?.save_data) {
        try { localStorage.setItem('gh_save_' + slug, JSON.stringify({ slug, data: data.save_data })); } catch(e) {}
        return data.save_data;
      }
    }
    return null;
  }

  async function deleteGame(slug) {
    try { localStorage.removeItem('gh_save_' + slug); } catch(e) {}
    if (isLoggedIn()) {
      const sb = getSB();
      await sb.from('game_saves').delete()
        .eq('user_id', _session.user.id).eq('game', slug);
    }
  }

  function canSave(slug) {
    if (isLoggedIn()) return true;
    const savedKeys = Object.keys(localStorage).filter(k => k.startsWith('gh_save_'));
    return savedKeys.includes('gh_save_' + slug) || savedKeys.length < GUEST_SAVE_LIMIT;
  }

  // ── AUTH BADGE (inject into pages) ───────────────────────────────
  function injectBadge() {
    onReady(() => {
      let badge = document.getElementById('ghAuthBadge');
      if (!badge) {
        badge = document.createElement('div');
        badge.id = 'ghAuthBadge';
        badge.style.cssText = 'position:fixed;top:12px;right:56px;z-index:100;display:flex;align-items:center;gap:8px;font-family:Consolas,monospace;font-size:10px;letter-spacing:1px;';
        document.body.appendChild(badge);
      }
      if (isLoggedIn()) {
        const proTag = isPro() ? ' <span style="color:#ffd700;font-size:9px">⭐ PRO</span>' : '';
        badge.innerHTML = '<a href="pro.html" style="color:#ffd700;text-decoration:none;opacity:.8">' + getDisplayName() + proTag + '</a>';
      } else {
        badge.innerHTML = '<a href="login.html" style="color:rgba(0,255,242,.6);text-decoration:none;font-size:9px;letter-spacing:2px;border:1px solid rgba(0,255,242,.25);padding:4px 8px;border-radius:3px;">SIGN IN</a>';
      }
    });
  }

  // Init on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      if (window.supabase) init(); else { window._sbReady = init; }
    });
  } else {
    if (window.supabase) init(); else { window._sbReady = init; }
  }

  return { onReady, getUser, getProfile, isPro, isLoggedIn, getDisplayName, saveGame, loadGame, deleteGame, canSave, injectBadge };
})();

window.GHAuth = GHAuth;
