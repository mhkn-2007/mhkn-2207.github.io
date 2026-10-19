(function(){
var root=document.documentElement,L='en';
var W={en:['Junior Backend Developer','Python &amp; FastAPI Developer','Always in Learning Mode'],fa:['Junior Backend Developer','Python &amp; FastAPI Developer','Always Learning']};
W.en[1]='Python & FastAPI Developer';W.fa[1]='Python & FastAPI Developer';
var nodes=[].slice.call(document.querySelectorAll('[data-fa]'));
nodes.forEach(function(n){n.setAttribute('data-en',n.innerHTML)});
var T={en:document.title,fa:'محمدحسن کمالی‌نیکو — برنامه‌نویس بک‌اند'};
function setLang(l){L=l;root.lang=l;root.dir=l==='fa'?'rtl':'ltr';
nodes.forEach(function(n){n.innerHTML=n.getAttribute(l==='fa'?'data-fa':'data-en')});
document.title=T[l];document.getElementById('ll').textContent=l==='fa'?'EN':'فارسی';
W.fa=l==='fa'?['برنامه‌نویس بک‌اند جونیور','توسعه‌دهنده‌ی Python و FastAPI','همیشه در حال یادگیری']:W.en;
try{localStorage.setItem('lang',l)}catch(e){}fit()}
function fit(){var h=document.querySelector('h1'),n=h.querySelector('.nmw');h.style.fontSize='';var s=parseFloat(getComputedStyle(h).fontSize),m=h.clientWidth,i=0;while(n.getBoundingClientRect().width>m&&s>14&&i++<60){s-=1;h.style.fontSize=s+'px'}}
function icon(){var d=root.getAttribute('data-theme')?root.getAttribute('data-theme')==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
document.getElementById('ti').setAttribute('href',d?'#i-sun':'#i-moon')}
try{var t=localStorage.getItem('theme');if(t)root.setAttribute('data-theme',t)}catch(e){}
icon();
document.getElementById('theme').addEventListener('click',function(){
var dark=root.getAttribute('data-theme')?root.getAttribute('data-theme')==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
var n=dark?'light':'dark';root.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}icon()});
document.getElementById('lang').addEventListener('click',function(){setLang(L==='en'?'fa':'en')});
try{if(localStorage.getItem('lang')==='fa')setLang('fa')}catch(e){}
window.addEventListener('resize',fit);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit);fit();
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
var w=0,c=0,del=false,el=document.getElementById('typed');
(function tick(){var s=W[L][w%3];if(c>s.length)c=s.length;c+=del?-1:1;el.textContent=s.slice(0,c);var d=del?35:75;
if(!del&&c===s.length){del=true;d=1600}else if(del&&c<=0){del=false;c=0;w=(w+1)%3;d=350}setTimeout(tick,d)})();
})();
