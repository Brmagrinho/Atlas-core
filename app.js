const drawer=document.getElementById('drawer');
const shade=document.getElementById('shade');
const openMenu=()=>{drawer.classList.add('open');shade.classList.add('open');drawer.setAttribute('aria-hidden','false')};
const closeMenu=()=>{drawer.classList.remove('open');shade.classList.remove('open');drawer.setAttribute('aria-hidden','true')};
document.getElementById('openMenu').addEventListener('click',openMenu);
document.querySelector('.h-inventario').addEventListener('click',openMenu);
document.getElementById('closeMenu').addEventListener('click',closeMenu);
shade.addEventListener('click',closeMenu);
window.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));}
