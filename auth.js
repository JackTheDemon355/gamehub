// ── GAME HUB AUTH + SAVE GATING ──────────────────────────
// Include after Supabase CDN script. Usage: GHAuth.init('gameName')
const SUPABASE_URL='https://rxdkdylcfspmiljicwdd.supabase.co';
const SUPABASE_ANON='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4ZGtkeWxjZnNwbWlsamljd2RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAzNjQxMDAsImV4cCI6MjEwNTk0MDEwMH0.ifhyyUye28DlGEOcScRDz5lpFW_1soXjzPaS1PrMxmU';

const GHAuth=(function(){
  let _sb=null,_user=null,_isPro=false,_gameName='';
  const FREE_SAVE_LIMIT=4;
  const ALL_GAMES=['neonrunner','galaxia','snake','brickbreaker','blockfall','pong',
    'asteroids','memorymatch','wordjump','strangerthingsclicker','towerdefense','zombie','hoopshot'];

  function _getSB(){
    if(!_sb&&window.supabase)_sb=window.supabase.createClient(SUPABASE_URL,SUPABASE_ANON);
    return _sb;
  }

  function _countSavedGames(){
    return ALL_GAMES.filter(g=>localStorage.getItem('save_'+g)!==null).length;
  }

  function _canSave(){
    if(!_gameName)return true; // no restriction if unnamed
    if(_user&&_isPro)return true; // pro = unlimited
    if(_user)return true; // signed-in free = all saves (no limit for signed-in)
    // Guest: max 4 games
    const alreadySaved=localStorage.getItem('save_'+_gameName)!==null;
    if(alreadySaved)return true; // this game already counted
    return _countSavedGames()<FREE_SAVE_LIMIT;
  }

  function _showGate(){
    // Show a non-blocking banner prompting sign-up
    if(document.getElementById('gh-gate'))return;
    const el=document.createElement('div');
    el.id='gh-gate';
    el.style.cssText='position:fixed;bottom:0;left:0;right:0;background:rgba(5,5,20,.97);border-top:2px solid rgba(0,255,242,.3);padding:14px 20px;display:flex;align-items:center;justify-content:space-between;z-index:8888;font-family:Consolas,monospace;flex-wrap:wrap;gap:10px;';
    el.innerHTML='<div style="font-size:12px;letter-spacing:2px;color:#b9c4cc;"><span style="color:#ffe600;font-weight:bold;">SAVE LIMIT REACHED</span> — You\'ve used all 4 free save slots. <a href="login.html" style="color:#00fff2;text-decoration:none;">Sign up free</a> to save all games.</div>'
      +'<div style="display:flex;gap:8px;"><a href="login.html" style="background:#00fff2;color:#000;padding:8px 16px;font-family:Consolas,monospace;font-size:12px;letter-spacing:2px;border-radius:4px;text-decoration:none;font-weight:bold;">▶ SIGN UP FREE</a><button onclick="document.getElementById(\'gh-gate\').remove()" style="background:transparent;border:1px solid #445;color:#667;padding:8px 12px;font-family:Consolas,monospace;font-size:11px;border-radius:4px;cursor:pointer;">✕</button></div>';
    document.body.appendChild(el);
  }

  // Public API
  return{
    init:async function(gameName){
      _gameName=gameName||'';
      const sb=_getSB();
      if(!sb)return;
      try{
        const{data:{session}}=await sb.auth.getSession();
        if(session?.user){
          _user=session.user;
          try{
            const{data}=await sb.from('profiles').select('is_pro').eq('id',_user.id).single();
            _isPro=data?.is_pro===true;
          }catch(e){}
          // Update localStorage user cache
          const name=_user.user_metadata?.display_name||_user.user_metadata?.full_name||_user.email.split('@')[0];
          localStorage.setItem('gh_user',JSON.stringify({id:_user.id,name,email:_user.email,isPro:_isPro}));
        }
      }catch(e){}
      return{user:_user,isPro:_isPro};
    },

    canSave:_canSave,

    // Call before saving game state
    saveState:function(key,data){
      if(!_canSave()){_showGate();return false;}
      try{
        const saveKey='save_'+(_gameName||key);
        localStorage.setItem(saveKey,JSON.stringify(data));
        return true;
      }catch(e){return false;}
    },

    loadState:function(key){
      try{return JSON.parse(localStorage.getItem('save_'+(_gameName||key)));}catch(e){return null;}
    },

    getUser:function(){return _user;},
    isPro:function(){return _isPro;},

    // Show a small user badge in-game (top-right corner)
    showBadge:function(){
      if(document.getElementById('gh-badge'))return;
      let cached=null;
      try{cached=JSON.parse(localStorage.getItem('gh_user'));}catch(e){}
      const el=document.createElement('a');
      el.id='gh-badge';
      el.href='login.html';
      el.style.cssText='position:fixed;top:10px;right:10px;z-index:8000;background:rgba(5,5,20,.85);border:1px solid rgba(0,255,242,.2);border-radius:20px;padding:5px 10px 5px 7px;display:flex;align-items:center;gap:6px;text-decoration:none;font-family:Consolas,monospace;font-size:10px;letter-spacing:1px;color:#b9c4cc;cursor:pointer;';
      if(cached&&cached.name){
        el.innerHTML=(cached.isPro?'<span style="color:#9d4edd">⭐</span>':'<span>👤</span>')+'<span style="color:#00fff2">'+cached.name.toUpperCase().slice(0,12)+'</span>';
      }else{
        el.innerHTML='<span>👤</span><span style="color:#445">SIGN IN</span>';
      }
      document.body.appendChild(el);
    }
  };
})();
// ── END AUTH ──────────────────────────────────────────────
