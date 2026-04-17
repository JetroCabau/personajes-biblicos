// ═══════════════════════════════════════════════════
// Personajes Bíblicos — Application Logic
// ═══════════════════════════════════════════════════

/* ─── Images ─── */
// IMAGES loaded from data/characters.js

function col2rgba(c,a){c=c.trim();if(c.startsWith('#')&&c.length===4)c='#'+c[1]+c[1]+c[2]+c[2]+c[3]+c[3];if(c.startsWith('#')&&c.length===7){const r=parseInt(c.slice(1,3),16),g=parseInt(c.slice(3,5),16),b=parseInt(c.slice(5,7),16);return`rgba(${r},${g},${b},${a})`;}return c;}

const DIFF_CLS=['d5','d4','d3','d2','d1'];
const DIFF_LBL=['Muy difícil','Difícil','Medio','Fácil','Muy fácil'];
const PTS=[50,40,30,20,10];
const RAR={legendaria:'Legendaria',epica:'Épica',rara:'Rara',comun:'Común'};
const PALS={legendaria:['#e8a832','#f0c040','#d49020','#f5d060'],epica:['#c39bd3','#9b59b6','#d4a8e8'],rara:['#7fb3d3','#2980b9','#5da0cc'],comun:['#8b8b8b','#aaaaaa','#666']};



let activePacks=new Set(['at']);
let S={pool:[],order:[],idx:0,score:0,streak:0,cluesShown:1,answered:false,correct:false,unlocked:new Set()};
try{const v=JSON.parse(localStorage.getItem('pb4')||'{}');if(v.u)S.unlocked=new Set(v.u);if(v.s)S.score=v.s;}catch(e){}
try{const imgs=JSON.parse(localStorage.getItem('pb4_imgs')||'{}');Object.assign(IMAGES,imgs);}catch(e){}
function save(){try{localStorage.setItem('pb4',JSON.stringify({u:[...S.unlocked],s:S.score}));}catch(e){}}
function saveImgs(){try{const t={};Object.entries(IMAGES).forEach(([k,v])=>{if(v&&v.startsWith('data:'))t[k]=v;});localStorage.setItem('pb4_imgs',JSON.stringify(t));}catch(e){console.warn('Images too large');}}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function current(){return S.pool[S.order[S.idx]];}

function togglePack(id){const el=document.getElementById('pack-'+id);if(!el||el.classList.contains('locked'))return;activePacks.has(id)?activePacks.delete(id):activePacks.add(id);el.classList.toggle('sel',activePacks.has(id));document.getElementById('start-btn').disabled=activePacks.size===0;}

function startGame(){
  S.pool=CHARS;S.order=shuffle([...Array(S.pool.length).keys()]);
  S.idx=0;S.cluesShown=1;S.answered=false;S.correct=false;
  const sp=document.getElementById('splash');sp.classList.add('out');
  setTimeout(()=>{sp.style.display='none';renderQuiz();},500);
}

function switchTab(t){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('on'));
  document.querySelectorAll('nav button').forEach(b=>b.classList.remove('on'));
  document.getElementById('view-'+t).classList.add('on');
  document.getElementById('nav-'+t).classList.add('on');
  if(t==='col')renderCollection();
}

function renderQuiz(){
  if(!S.pool.length)return;
  const ch=current();
  const pct=Math.round(S.unlocked.size/CHARS.length*100);
  document.getElementById('prog').style.width=pct+'%';
  document.getElementById('sc').textContent=S.score.toLocaleString();
  document.getElementById('chnum').textContent=(S.idx+1)+'/'+S.pool.length;
  const stk=document.getElementById('stk');if(stk){stk.textContent=S.streak;}

  // Difficulty chip
  const di=S.cluesShown-1;
  const chip=document.getElementById('diff-chip');
  chip.className='diff-chip '+DIFF_CLS[di];
  document.getElementById('diff-label').textContent=DIFF_LBL[di]+' · Pista '+S.cluesShown+' de 5';

  // Clues
  const wrap=document.getElementById('clues');wrap.innerHTML='';
  ch.clues.forEach((cl,i)=>{
    if(i<S.cluesShown){
      const row=document.createElement('div');
      row.className='clue-item'+(i===S.cluesShown-1&&!S.answered?' newest':'');
      row.innerHTML=`<div class="clue-index">${i+1}</div><div class="clue-text">${cl.txt}</div>`;
      wrap.appendChild(row);
    }
  });

  // Reveal button — right after last revealed clue
  if(!S.answered && S.cluesShown<5){
    const cost=PTS[S.cluesShown-1]-(PTS[S.cluesShown]||10);
    const rb=document.createElement('button');
    rb.className='reveal-btn';
    rb.innerHTML=`<span>Revelar siguiente pista</span><span class="reveal-cost">−${cost} pts</span>`;
    rb.onclick=revealClue;
    wrap.appendChild(rb);
  } else if(!S.answered && S.cluesShown>=5){
    // All clues shown — no button needed, just a subtle note
  }

  const inp=document.getElementById('ans-input'),btn=document.getElementById('ans-btn'),skip=document.getElementById('skip-btn');
  inp.value='';inp.className='answer-input';inp.disabled=S.answered;btn.disabled=S.answered;
  if(skip)skip.style.display=S.answered?'none':'block';
  if(!S.answered)setTimeout(()=>inp.focus(),200);
  document.getElementById('result-wrap').innerHTML='';
  if(S.answered)renderResult(ch);
}

function renderResult(ch){
  const earned=PTS[S.cluesShown-1]||10;
  const d=document.createElement('div');d.className='result '+(S.correct?'ok':'ko');
  if(S.correct){
    d.innerHTML=`<div class="result-inner">
      <div class="result-tag">Correcto</div>
      <div class="result-name">${ch.name}</div>
      <div class="result-pts">+${earned} pts · con ${S.cluesShown} pista${S.cluesShown>1?'s':''}</div>
      <div class="result-verse">"${ch.verse}"<div class="result-ref">${ch.ref}</div></div>
      <button class="next-btn" onclick="nextChar()">Siguiente personaje</button>
    </div>`;
  } else {
    d.innerHTML=`<div class="result-inner">
      <div class="result-tag">Era…</div>
      <div class="result-name">${ch.name}</div>
      <div class="result-pts">+0 pts · racha perdida</div>
      <div class="result-verse">"${ch.clues[ch.clues.length-1].txt}"</div>
      <button class="next-btn" onclick="nextChar()">Siguiente personaje</button>
    </div>`;
  }
  document.getElementById('result-wrap').appendChild(d);
}

function revealClue(){if(S.cluesShown<5){S.cluesShown++;renderQuiz();}}
function norm(s){return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9 ]/g,'').trim();}
function checkAnswer(){
  const inp=document.getElementById('ans-input');if(!inp||S.answered)return;
  const val=inp.value.trim();if(!val)return;
  const ch=current();
  const ok=norm(val)===norm(ch.name)||(norm(ch.name).includes(norm(val))&&norm(val).length>2);
  S.answered=true;inp.classList.add(ok?'ok':'ko');
  if(ok){S.correct=true;S.score+=PTS[S.cluesShown-1]||10;S.streak++;S.unlocked.add(ch.name);save();if(S.streak>=3)spawnParticles('legendaria');snd(true);setTimeout(()=>{renderQuiz();setTimeout(()=>showReveal(ch),350);},400);}
  else{S.correct=false;S.streak=0;save();snd(false);setTimeout(renderQuiz,400);}
}
function skipChar(){if(S.answered)return;S.answered=true;S.correct=false;S.streak=0;save();snd(false);setTimeout(renderQuiz,400);}
function nextChar(){S.idx++;if(S.idx>=S.pool.length){S.idx=0;S.order=shuffle([...Array(S.pool.length).keys()]);}S.cluesShown=1;S.answered=false;S.correct=false;document.getElementById('view-quiz').scrollTop=0;renderQuiz();}

function showReveal(ch){
  document.getElementById('ov-rarity').textContent=RAR[ch.rarity];
  document.getElementById('ov-rarity').className='ov-rarity '+ch.rarity;
  const slot=document.getElementById('ov-slot');slot.innerHTML='';slot.appendChild(buildCard(ch,true));
  document.getElementById('card-overlay').classList.add('show');
  spawnParticles(ch.rarity);sndChord(ch.rarity);
}
function closeOverlay(){
  const ov=document.getElementById('card-overlay');
  ov.classList.remove('show','with-clues');
  document.getElementById('pts').innerHTML='';
  document.getElementById('ov-clues').innerHTML='';
  document.getElementById('ov-tag').textContent='Nueva carta desbloqueada';
  ov.scrollTop=0;
}
document.getElementById('card-overlay').addEventListener('click',e=>{if(e.target===document.getElementById('card-overlay'))closeOverlay();});

function buildCard(ch,unlocked){
  const wrap=document.createElement('div');wrap.className='card-wrap';
  const card=document.createElement('div');card.className='card '+ch.rarity;
  if(unlocked){
    const img=document.createElement('div');img.className='card-img';
    const src=IMAGES[ch.name];
    if(src){img.style.backgroundImage=`url('${src}')`;}
    else{const fb={legendaria:'linear-gradient(160deg,#1a0d30,#2a1060)',epica:'linear-gradient(160deg,#120018,#1e0035)',rara:'linear-gradient(160deg,#080e18,#0c1e35)',comun:'linear-gradient(160deg,#0e0e10,#1a1a1e)'};img.style.background=fb[ch.rarity]||fb.comun;img.style.cssText+='display:flex;align-items:center;justify-content:center;';const ini=document.createElement('div');ini.style.cssText='font-size:64px;font-weight:700;color:rgba(255,255,255,.06)';ini.textContent=ch.name[0];img.appendChild(ini);}
    card.appendChild(img);
    const grad=document.createElement('div');grad.className='card-grad';card.appendChild(grad);
    const body=document.createElement('div');body.className='card-body';
    body.innerHTML=`<div class="card-name">${ch.name}</div><div class="card-title">${ch.title}</div><div class="card-divider"></div><div class="card-ref">${ch.ref}</div><div class="card-verse">${ch.verse}</div>`;
    card.appendChild(body);
    const cvs=document.createElement('canvas');cvs.className='card-ptc';cvs.width=260;cvs.height=364;card.appendChild(cvs);setTimeout(()=>startPtc(cvs,ch.rarity),80);
  } else {
    card.appendChild(Object.assign(document.createElement('div'),{className:'card-locked-bg'}));
    const lo=document.createElement('div');lo.className='card-lock';
    lo.innerHTML=`<div class="card-lock-icon"><svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg></div><div class="card-lock-txt">Adivina el personaje para desbloquear</div>`;
    card.appendChild(lo);
  }
  const h=document.createElement('div');h.className='card-holo';card.appendChild(h);
  const s=document.createElement('div');s.className='card-shine';card.appendChild(s);
  wrap.appendChild(card);if(unlocked)attachHolo(wrap,card);return wrap;
}

function attachHolo(wrap,card){
  let raf;const h=card.querySelector('.card-holo'),s=card.querySelector('.card-shine');
  const set=(cx,cy)=>{h.style.setProperty('--mx',cx*100+'%');h.style.setProperty('--my',cy*100+'%');h.style.setProperty('--rot',cx*360);s.style.setProperty('--mx',cx*100+'%');s.style.setProperty('--my',cy*100+'%');};
  const move=(x,y)=>{const r=wrap.getBoundingClientRect(),cx=(x-r.left)/r.width,cy=(y-r.top)/r.height;card.style.transform=`perspective(700px) rotateY(${(cx-.5)*20}deg) rotateX(${-(cy-.5)*20}deg) scale(1.04)`;card.style.transition='transform .1s ease-out';set(cx,cy);wrap.classList.add('on');};
  const reset=()=>{card.style.transition='transform .5s ease';card.style.transform='';wrap.classList.remove('on');setTimeout(()=>card.style.transition='',500);};
  wrap.addEventListener('mousemove',e=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(()=>move(e.clientX,e.clientY));});
  wrap.addEventListener('mouseleave',reset);
  wrap.addEventListener('touchmove',e=>{e.preventDefault();cancelAnimationFrame(raf);raf=requestAnimationFrame(()=>move(e.touches[0].clientX,e.touches[0].clientY));},{passive:false});
  wrap.addEventListener('touchend',reset);
}

function startPtc(canvas,rarity){
  const ctx=canvas.getContext('2d');const pal=PALS[rarity]||PALS.comun;
  const N={legendaria:16,epica:10,rara:7,comun:4}[rarity]||4;
  const pts=[];for(let i=0;i<N;i++)pts.push(mk(canvas.width,canvas.height,pal,true));
  let last=performance.now();
  (function tick(now){const dt=(now-last)/1000;last=now;ctx.clearRect(0,0,canvas.width,canvas.height);
    pts.forEach((p,i)=>{p.life+=dt;if(p.life>p.max){pts[i]=mk(canvas.width,canvas.height,pal);return;}
      p.w+=p.ws*dt;p.x+=p.vx+Math.sin(p.w)*.2;p.y+=p.vy;
      const a=p.life/p.max,al=a<.15?a/.15:a>.7?1-(a-.7)/.3:1;
      ctx.beginPath();ctx.arc(p.x,p.y,p.sz,0,Math.PI*2);ctx.fillStyle=p.col;ctx.globalAlpha=al*.5;ctx.fill();
      const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.sz*2);
      g.addColorStop(0,col2rgba(p.col,.3));g.addColorStop(1,'rgba(0,0,0,0)');
      ctx.beginPath();ctx.arc(p.x,p.y,p.sz*2,0,Math.PI*2);ctx.fillStyle=g;ctx.globalAlpha=al*.18;ctx.fill();ctx.globalAlpha=1;
    });requestAnimationFrame(tick);})(performance.now());
}
function mk(w,h,pal,sc=false){const max=3+Math.random()*4;return{x:Math.random()*w,y:sc?Math.random()*h:h+8,vx:(Math.random()-.5)*.25,vy:-(0.18+Math.random()*.4),life:sc?Math.random()*max:0,max,sz:.8+Math.random()*1.8,col:pal[Math.floor(Math.random()*pal.length)],w:Math.random()*Math.PI*2,ws:.6+Math.random()*.5};}

function renderCollection(){
  const grid=document.getElementById('col-grid');grid.innerHTML='';let uc=0;
  CHARS.forEach(ch=>{
    const ul=S.unlocked.has(ch.name);if(ul)uc++;
    const cell=document.createElement('div');cell.className='col-cell';
    const wrap=buildCard(ch,ul);
    if(ul)wrap.addEventListener('click',()=>viewCard(ch));
    cell.appendChild(wrap);
    grid.appendChild(cell);
  });
  document.getElementById('col-count').textContent=uc+' / '+CHARS.length;
}

function viewCard(ch){
  document.getElementById('ov-tag').textContent=ch.name;
  document.getElementById('ov-rarity').textContent=RAR[ch.rarity];
  document.getElementById('ov-rarity').className='ov-rarity '+ch.rarity;
  const slot=document.getElementById('ov-slot');slot.innerHTML='';slot.appendChild(buildCard(ch,true));
  const cluesEl=document.getElementById('ov-clues');cluesEl.innerHTML='';
  ch.clues.forEach((cl,i)=>{
    const item=document.createElement('div');item.className='ov-clue-item';
    item.innerHTML=`<div class="ov-clue-num">${i+1}</div><div class="ov-clue-txt">${cl.txt}</div>`;
    cluesEl.appendChild(item);
  });
  document.getElementById('card-overlay').classList.add('show','with-clues');
}

function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200);}

function spawnParticles(rarity){
  const con=document.getElementById('pts');con.innerHTML='';
  const pal=PALS[rarity]||PALS.comun;
  const cx=window.innerWidth/2,cy=window.innerHeight*.4;
  for(let i=0;i<50;i++){
    const p=document.createElement('div');p.className='pt';
    const a=Math.random()*Math.PI*2,d=70+Math.random()*200,sz=2+Math.random()*7;
    const dur=(0.5+Math.random()*.7).toFixed(2),del=(Math.random()*.4).toFixed(2);
    const c=pal[Math.floor(Math.random()*pal.length)];
    p.style.cssText=`left:${cx}px;top:${cy}px;width:${sz}px;height:${sz}px;background:${c};box-shadow:0 0 ${sz*2}px ${c};--tx:${(Math.cos(a)*d).toFixed(1)}px;--ty:${(Math.sin(a)*d).toFixed(1)}px;--d2:${dur}s;--dl:${del}s`;
    con.appendChild(p);
  }
  setTimeout(()=>con.innerHTML='',1800);
}

let _ac=null;
function ac(){if(!_ac)_ac=new(window.AudioContext||window.webkitAudioContext)();return _ac;}
function snd(ok){try{const c=ac();if(ok){[523.25,659.25,783.99].forEach((f,i)=>{const o=c.createOscillator(),g=c.createGain();o.type='triangle';o.frequency.value=f;g.gain.setValueAtTime(0,c.currentTime+i*.08);g.gain.linearRampToValueAtTime(.06,c.currentTime+i*.08+.03);g.gain.exponentialRampToValueAtTime(.001,c.currentTime+i*.08+.5);o.connect(g);g.connect(c.destination);o.start(c.currentTime+i*.08);o.stop(c.currentTime+i*.08+.5);});}else{const o=c.createOscillator(),g=c.createGain();o.type='sawtooth';o.frequency.setValueAtTime(180,c.currentTime);o.frequency.exponentialRampToValueAtTime(70,c.currentTime+.22);g.gain.setValueAtTime(.07,c.currentTime);g.gain.exponentialRampToValueAtTime(.001,c.currentTime+.22);o.connect(g);g.connect(c.destination);o.start();o.stop(c.currentTime+.22);}}catch(e){}}
function sndChord(r){try{const c=ac();const cs={legendaria:[523.25,659.25,783.99,1046.5],epica:[440,523.25,659.25,880],rara:[392,493.88,587.33],comun:[349.23,440,523.25]};(cs[r]||cs.comun).forEach((f,i)=>setTimeout(()=>{const o=c.createOscillator(),g=c.createGain();o.type='triangle';o.frequency.value=f;g.gain.setValueAtTime(0,c.currentTime);g.gain.linearRampToValueAtTime(.05,c.currentTime+.04);g.gain.setValueAtTime(.05,c.currentTime+.4);g.gain.exponentialRampToValueAtTime(.001,c.currentTime+2.2);o.connect(g);g.connect(c.destination);o.start();o.stop(c.currentTime+2.2);},i*70));}catch(e){}}

document.getElementById('ans-input').addEventListener('keydown',e=>{if(e.key==='Enter')checkAnswer();});
