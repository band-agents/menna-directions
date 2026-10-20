/* Shared behaviour for the six directions: photo viewer, detail sheet, brief bag, carousels.
   Each page styles everything through these CSS variables:
   --k-bg --k-fg --k-mut --k-acc --k-line --k-disp --k-ui --k-r (radius) */
(function(){
const D=window.MD,I=D.I;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const img=(n,a,c,e)=>`<img src="${I(n)}" alt="${esc(a||'Menna El Sonny')}"${c?` class="${c}"`:''} loading="${e?'eager':'lazy'}" decoding="async">`;
const T=window.KT||{};const t=(k,d)=>T[k]||d;
const css=`
.k-sheet{position:fixed;inset:0;z-index:200;background:var(--k-bg);color:var(--k-fg);transform:translateY(102%);transition:transform .6s cubic-bezier(.7,0,.2,1);overflow-y:auto;overscroll-behavior:contain}
.k-sheet.open{transform:none}
.k-logo{display:block;width:min(240px,50%);height:64px;margin-bottom:22px;background:var(--k-fg);-webkit-mask:var(--lg) left center/contain no-repeat;mask:var(--lg) left center/contain no-repeat}
.k-none{padding:40px 24px;border:1px dashed var(--k-line);border-radius:var(--k-r);color:var(--k-mut);text-align:center}
.k-sheet .k-x{position:fixed;top:calc(env(safe-area-inset-top,0px) + 14px);inset-inline-end:14px;z-index:3;width:48px;height:48px;border-radius:50%;border:1px solid var(--k-line);background:var(--k-bg);color:var(--k-fg);cursor:pointer;font-size:24px;line-height:1}
.k-in{max-width:1300px;margin:0 auto;padding:calc(env(safe-area-inset-top,0px) + 80px) clamp(16px,4vw,56px) 80px}
.k-in h2{margin:0;font:400 clamp(52px,8vw,128px)/.9 var(--k-disp);letter-spacing:-.02em}
.k-lab{display:block;font:600 11px/1.5 var(--k-ui);letter-spacing:.2em;text-transform:uppercase;color:var(--k-mut)}
.k-big{font:400 clamp(80px,9vw,140px)/.9 var(--k-disp);color:var(--k-acc)}
.k-grid{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:clamp(24px,5vw,70px);margin-top:30px;align-items:start}
@media(max-width:860px){.k-grid{grid-template-columns:1fr}}
.k-gal{display:grid;grid-auto-flow:column;grid-auto-columns:min(78%,360px);gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none}
.k-gal::-webkit-scrollbar{display:none}
.k-gal button,.k-mas button{border:0;padding:0;background:none;cursor:zoom-in;border-radius:var(--k-r);overflow:hidden;scroll-snap-align:start}
.k-gal img{width:100%;aspect-ratio:3/4.1;object-fit:cover;display:block}
.k-mas{columns:4 210px;column-gap:12px;margin-top:30px}.k-mas button{display:block;width:100%;margin:0 0 12px;break-inside:avoid}.k-mas img{width:100%;display:block}
.k-btn{display:inline-flex;align-items:center;justify-content:center;min-height:46px;padding:0 22px;border-radius:999px;border:1px solid var(--k-fg);background:var(--k-fg);color:var(--k-bg);text-decoration:none;font:600 12px var(--k-ui);letter-spacing:.1em;text-transform:uppercase;cursor:pointer}
.k-btn.o{background:transparent;color:var(--k-fg)}
.k-lb{position:fixed;inset:0;z-index:300;background:rgba(10,6,8,.95);display:grid;grid-template-columns:56px minmax(0,1fr) 56px;align-items:center;padding:calc(env(safe-area-inset-top,0px) + 16px) 8px calc(env(safe-area-inset-bottom,0px) + 16px)}
.k-lb[hidden]{display:none!important}
.k-lb img{max-height:86vh;max-width:100%;margin:auto;border-radius:8px}
.k-lb button{width:46px;height:46px;border-radius:50%;border:1px solid rgba(255,255,255,.35);background:transparent;color:#fff;cursor:pointer;font-size:24px;display:grid;place-items:center}
.k-lb .k-c{position:absolute;top:calc(env(safe-area-inset-top,0px) + 14px);right:14px}
.k-lb .k-n{position:absolute;left:0;right:0;bottom:calc(env(safe-area-inset-bottom,0px) + 10px);text-align:center;color:#ddd;font:13px/1 system-ui,sans-serif;letter-spacing:.2em}
@media(max-width:640px){.k-lb{grid-template-columns:40px minmax(0,1fr) 40px}.k-lb button{width:38px;height:38px}}
`;
const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

/* lightbox */
const lb=document.createElement('div');lb.className='k-lb';lb.hidden=true;lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');lb.setAttribute('aria-label','Photo viewer');lb.dir='ltr';
lb.innerHTML='<button class="k-p" aria-label="Previous photo">‹</button><img alt=""><button class="k-nx" aria-label="Next photo">›</button><button class="k-c" aria-label="Close">×</button><div class="k-n"></div>';
document.body.appendChild(lb);
let ls=[],li=0,lf=null;const lbi=lb.querySelector('img'),lbn=lb.querySelector('.k-n');
const show=()=>{lbi.src=I(ls[li]);lbi.alt='Menna El Sonny, photo '+(li+1);lbn.textContent=(li+1)+' / '+ls.length};
function openLB(s,i){ls=s;li=i;lf=document.activeElement;show();lb.hidden=false;lb.querySelector('.k-c').focus()}
function closeLB(){lb.hidden=true;if(lf)lf.focus()}
lb.querySelector('.k-nx').onclick=()=>{li=(li+1)%ls.length;show()};
lb.querySelector('.k-p').onclick=()=>{li=(li-1+ls.length)%ls.length;show()};
lb.querySelector('.k-c').onclick=closeLB;lb.addEventListener('click',e=>{if(e.target===lb)closeLB()});
lb.addEventListener('keydown',e=>{if(e.key==='Escape')closeLB();if(e.key==='ArrowRight')lb.querySelector('.k-nx').click();if(e.key==='ArrowLeft')lb.querySelector('.k-p').click()});
let tx=0;lb.addEventListener('touchstart',e=>tx=e.touches[0].clientX,{passive:true});lb.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50)lb.querySelector(d<0?'.k-nx':'.k-p').click()});

/* sheet */
const sh=document.createElement('div');sh.className='k-sheet';sh.setAttribute('role','dialog');sh.setAttribute('aria-modal','true');sh.setAttribute('aria-label','Details');
sh.innerHTML='<button class="k-x" aria-label="Close">×</button><div class="k-in"></div>';document.body.appendChild(sh);
const sin=sh.querySelector('.k-in');let sf=null;const SETS={};
function openSheet(html){sf=document.activeElement;sin.innerHTML=html;sh.classList.add('open');sh.scrollTop=0;document.body.style.overflow='hidden';sync();setTimeout(()=>sh.querySelector('.k-x').focus(),80)}
function closeSheet(){if(!sh.classList.contains('open'))return;sh.classList.remove('open');document.body.style.overflow='';if(sf)sf.focus()}
sh.querySelector('.k-x').onclick=closeSheet;sh.addEventListener('keydown',e=>{if(e.key==='Escape')closeSheet()});
function camp(id){const c=D.camp(id);if(!c)return;SETS.s=c.imgs;const sv=D.SERV.filter(s=>s.ex.includes(c.id));
  openSheet(`${c.logo&&(window.LOGO||{})[c.logo]?`<span class="k-logo" style="--lg:url(logos/${(window.LOGO||{})[c.logo]||c.logo+'.svg'})" role="img" aria-label="${esc(c.brand)} logo"></span>`:''}<span class="k-lab">${esc(t('cat_'+c.cat,c.cat))} · ${esc(c.plat)}</span><h2>${esc(c.brand)}</h2><div class="k-grid"><div><div class="k-big">${esc(c.stat)}</div><span class="k-lab">${esc(t('sl_'+c.id,c.sl))}</span><p style="font:400 24px/1.4 var(--k-disp);margin:22px 0">${esc(t('cd_'+c.id,c.d))}</p>${sv.length?`<span class="k-lab">${t('format','Format')}</span><p style="margin:6px 0 18px">${sv.map(s=>esc(t('st_'+s.id,s.t))).join(', ')}</p>`:''}<div style="display:flex;gap:10px;flex-wrap:wrap">${c.links.map(l=>`<a class="k-btn" href="${l[1]}" target="_blank" rel="noopener">${esc(l[0])}</a>`).join('')}</div></div>${c.imgs.length?'':`<div class="k-none">Photos from this partnership live on TikTok and in her stories.</div>`}<div class="k-gal">${c.imgs.map((n,i)=>`<button data-lb="s" data-i="${i}" aria-label="Open photo ${i+1}">${img(n,c.brand)}</button>`).join('')}</div></div>`)}
function gallery(title,sub,list){SETS.s=list;openSheet(`<span class="k-lab">${list.length} ${t('photos','photos')}</span><h2>${title}</h2><p style="max-width:56ch;opacity:.75">${esc(sub||'')}</p><div class="k-mas">${list.map((n,i)=>`<button data-lb="s" data-i="${i}" aria-label="Open photo ${i+1}">${img(n,'Menna El Sonny')}</button>`).join('')}</div>`)}
function world(id){const w=D.WORLDS.find(x=>x.id===id);if(w)gallery(esc(t('w_'+w.id,w.t)),t('wd_'+w.id,w.d),D.W[w.id])}

/* brief bag */
let bag=[];const key='muse-bag';
try{bag=JSON.parse(localStorage.getItem(key)||'[]').filter(id=>D.serv(id))}catch(e){}
function sync(){try{localStorage.setItem(key,JSON.stringify(bag))}catch(e){}
  document.querySelectorAll('[data-bagcount]').forEach(e=>e.textContent=bag.length);
  document.querySelectorAll('[data-add]').forEach(b=>{const on=bag.includes(b.dataset.add);b.setAttribute('aria-pressed',on);if(b.dataset.on)b.textContent=on?b.dataset.on:b.dataset.off});
  document.querySelectorAll('[data-baglist]').forEach(el=>{el.innerHTML=bag.length?bag.map(id=>`<span class="k-chip">${esc(t('st_'+id,D.serv(id).t))}<button type="button" data-add="${id}" aria-label="Remove">×</button></span>`).join(''):`<span style="opacity:.6">${t('empty','Nothing added yet. Tap “add” on any service.')}</span>`})}
function toggle(id){bag=bag.includes(id)?bag.filter(x=>x!==id):[...bag,id];sync()}
function form(){return `<form class="k-form" novalidate>
  <div data-baglist></div>
  <label for="k-name">${t('f_name','Your name')}</label><input id="k-name" autocomplete="name">
  <label for="k-brand">${t('f_brand','Brand')}</label><input id="k-brand">
  <label for="k-mail">${t('f_mail','Email')}</label><input id="k-mail" type="email" autocomplete="email">
  <label for="k-idea">${t('f_idea','The idea and dates')}</label><textarea id="k-idea" rows="3"></textarea>
  <button class="k-submit" type="submit">${t('f_go','Prepare my brief')}</button><div class="k-out" hidden></div></form>`}
function copy(text,b){const o=b.textContent;try{navigator.clipboard.writeText(text).then(()=>{b.textContent=t('copied','Copied');setTimeout(()=>b.textContent=o,1500)},()=>{b.textContent=t('sel','Select the text to copy')})}catch(e){b.textContent=t('sel','Select the text to copy')}}

document.addEventListener('submit',e=>{const f=e.target.closest('.k-form');if(!f)return;e.preventDefault();const v=id=>(f.querySelector('#'+id)||{value:''}).value.trim();const out=f.querySelector('.k-out');out.hidden=false;
  if(!v('k-name')||!v('k-brand')){out.textContent=t('need','Add your name and brand so Menna knows who is writing.');return}
  const brief=`Hi Menna,\n\nI'm ${v('k-name')} from ${v('k-brand')}${v('k-mail')?' ('+v('k-mail')+')':''}.\nServices: ${bag.map(id=>D.serv(id).t).join(', ')||'open to ideas'}\n\n${v('k-idea')}`;
  out.innerHTML=`<strong>${t('ready','Your brief is ready.')}</strong> ${t('sendto','Send it to')} ${D.EMAIL}.<pre style="white-space:pre-wrap;font:inherit;font-size:14px;direction:ltr;text-align:left">${esc(brief)}</pre><button type="button" class="k-submit" data-copy="${esc(brief)}">${t('copyb','Copy brief')}</button>`});
document.addEventListener('click',e=>{const x=e.target;
  const a=x.closest('[data-add]');if(a){e.preventDefault();toggle(a.dataset.add);return}
  const c=x.closest('[data-camp]');if(c){e.preventDefault();camp(c.dataset.camp);return}
  const w=x.closest('[data-world]');if(w){e.preventDefault();world(w.dataset.world);return}
  const l=x.closest('[data-lb]');if(l){const s=SETS[l.dataset.lb]||(window.KSETS||{})[l.dataset.lb];if(s){openLB(s,+l.dataset.i);return}}
  const cp=x.closest('[data-copy]');if(cp){copy(cp.dataset.copy,cp);return}
  const g=x.closest('a[href^="#"]');if(g&&sh.classList.contains('open'))closeSheet();
  const dir=x.closest('[data-dir]');if(dir){const tr=dir.closest('.k-car').querySelector('.k-track');const f=tr.firstElementChild;const step=f?f.getBoundingClientRect().width+16:300;const rtl=getComputedStyle(tr).direction==='rtl';tr.scrollBy({left:step*+dir.dataset.dir*(rtl?-1:1),behavior:'smooth'})}
});
window.K={img,esc,camp,world,gallery,openLB,form,sync,toggle,SETS,t,get bag(){return bag}};
document.addEventListener('DOMContentLoaded',sync);setTimeout(sync,0);
})();
