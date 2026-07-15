
function filterMenu(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('filter-active'));
  btn.classList.add('filter-active');
  document.querySelectorAll('.menu-item').forEach(item => {
    if (cat === 'all' || item.dataset.cat.includes(cat)) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
}
function openDrink(name, ingredients, desc, tags, imgSrc) {
  document.getElementById('modal-name').textContent = name;
  document.getElementById('modal-ingredients').textContent = '' + ingredients;
  document.getElementById('modal-desc').textContent = desc;
  document.getElementById('modal-img').src = imgSrc;
  const tagsEl = document.getElementById('modal-tags');
  tagsEl.innerHTML = tags.map(t => `<span style="font-size:0.62rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#F08100;border:1px solid rgba(240,129,0,0.35);padding:0.25rem 0.6rem;">${t}</span>`).join('');
  document.getElementById('drink-modal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
function closeModal(e) {
  if (!e || e.target === document.getElementById('drink-modal')) {
    document.getElementById('drink-modal').style.display = 'none';
    document.body.style.overflow = '';
  }
}
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

;

/* MENU HAMBURGUESA */
function toggleMenu(){
  var h=document.getElementById('hamburger');
  var o=document.getElementById('menuOverlay');
  var open=o.classList.toggle('open');
  h.classList.toggle('open');
  h.setAttribute('aria-expanded', open?'true':'false');
  document.body.style.overflow = open?'hidden':'';
}
function closeMenu(){
  var h=document.getElementById('hamburger');
  var o=document.getElementById('menuOverlay');
  o.classList.remove('open');
  h.classList.remove('open');
  h.setAttribute('aria-expanded','false');
  document.body.style.overflow='';
}
document.addEventListener('keydown',function(e){ if(e.key==='Escape') closeMenu(); });

;

let currentLang = 'es';
const t = {
  es: {
    'customers-eyebrow':'Nuestros aliados','customers-title':'Confían en nosotros',
    'contact-btn-sms':'Mensaje de texto',
    'zona-eyebrow':'¿Llegamos a vos?','zona-t1':'NUESTRA ZONA','zona-t2':'DE SERVICIO','zona-sub':'Con base en Richmond, VA — viajamos hasta Virginia Beach, Washington DC y Carolina del Norte. Mirá hasta dónde llegamos.','zona-t-1':'0–20 millas','zona-t-6':'110+ mi / fuera del estado','zona-p-6':'Cotización','zona-p-1':'GRATIS','zona-cta':'Reservá tu fecha','zona-note':'Tarifa de viaje según distancia desde Richmond, VA. ¿Fuera del rango? Escribinos.',
    'switch-lang':'Cambiar idioma','tipos-eyebrow':'Tipos de evento','tipos-title':'Para cada celebración','tipos-sub':'Bodas, quinceañeras y eventos corporativos — llevamos la barra premium a donde estés.','tipos-boda':'Bodas','tipos-quince':'Quinceañeras','tipos-corp':'Corporativos','hb-label':'Head Bartender','hb-sub':'10+ años · Richmond, VA','menu-eyebrow':'Explora todo','menu-title-a':'El menú','menu-title-b':'completo.','menu-click':'Haz click en cualquier bebida para ver los detalles','filter-all':'Todo','filter-more':'Más','gallery-eyebrow':'Galería','gallery-title':'Momentos On The Rocks','accion-eyebrow':'En acción','accion-title':'Así se vive On The Rocks','accion-sub':'Cócteles artesanales, barra montada y el mejor ambiente para tu evento.','tap-explore':'Toca para ver →','pkg-sub-1':'Quinceañeras','pkg-sub-2':'Brunch & Baby Showers','pkg-sub-3':'Bodas & Aniversarios','pkg-sub-4':'Eventos Corporativos','pkg-sub-5':'Baby Showers','pkg-sub-6':'Solo el profesional',
    'nav-about':'Nosotros','nav-services':'Servicios','nav-menu':'Menú','nav-packages':'Paquetes','nav-mixo':'Mixología','nav-calc':'Calculadora','nav-experience':'Experiencia','nav-cta':'Cotizar',
    'calc-eye':'Herramienta gratis','calc-title':'¿Cuánto alcohol comprar para tu evento?','calc-sub':'Calculá botellas, mixers, hielo y vasos en segundos.','calc-btn':'Abrir calculadora →','build-eye':'Experiencia interactiva','build-title':'Armá tu propia bebida','build-sub':'Elegí tu base, tu sabor y tu toque — y en tu evento la preparás vos con nosotros.','build-base':'Base','build-flavor':'Sabor','build-rim':'El toque','build-your':'Tu creación','build-cta':'La quiero en mi evento','menu-see':'Ver el menú completo',
    'ob-margarita':'Margarita','ob-paloma':'Paloma','ob-mojito':'Mojito','ob-frozen':'Frozen','ob-cantarito':'Cantarito','ob-mango':'Mango','ob-fresa':'Fresa','ob-sandia':'Sandía','ob-pina':'Piña','ob-coco':'Coco','ob-maracuya':'Maracuyá','ob-jamaica':'Jamaica','ob-tajin':'Tajín','ob-chamoy':'Chamoy','ob-sal':'Sal','ob-flor':'Flor comestible','ob-sinborde':'Sin borde',
    'hero-eyebrow':'Richmond, Virginia','hero-line1':"Let's drink",'hero-line2':'about it.',
    'hero-sub':'Barra móvil premium · Cócteles artesanales · Eventos únicos',
    'hero-btn1':'Cotiza tu evento','hero-btn2':'Ver menú','hero-btn3':'Diseña tu experiencia',
    'about-label':'Sobre nosotros','about-title1':'Somos más que','about-title2':'una barra.',
    'about-p1':'On The Rocks es un servicio premium de barras móviles que ofrece experiencias únicas en eventos a través de cócteles personalizados y mixología profesional.',
    'about-p2':'Creemos que cada evento merece una barra que no solo sirva bebidas, sino que cree momentos memorables. Somos exclusivos, profesionales, auténticos, creativos y cercanos.',
    'stat-label1':'Eventos realizados','stat-label2':'Cócteles servidos','stat-label3':'5.0 · Calificación','stat-label4':'Richmond, Virginia',
    'services-label':'Lo que ofrecemos','services-title1':'Nuestros','services-title2':'servicios.',
    'service1-title':'Barra Móvil Completa','service1-desc':'Setup completo con luces LED, cristalería premium, decoración y un bartender profesional. Solo dinos el lugar y nosotros llevamos el resto.',
    'service2-title':'Bartender Profesional','service2-desc':'Solo necesitas el bartender? Te mandamos a nuestro equipo profesional con sus herramientas para complementar tu evento con estilo.',
    'menu-label':'Carta de bebidas','menu-title1':'Nuestro','menu-title2':'menú.',
    'menu-note':'Todas las bebidas disponibles como Cocktail o Mocktail ',
    'mocktail-title':'¡Todas disponibles como Mocktail!','mocktail-desc':'Cada bebida puede prepararse sin alcohol. Inclusión total — todos disfrutan en tu evento.',
    'gallery-label':'Nuestras creaciones','gallery-title1':'Así se ve','gallery-title2':'On The Rocks.',
    'gallery-cta-text':'¿Quieres esto en tu evento?','gallery-cta-btn':'Cotiza ahora',
    'packages-label':'Experiencias personalizadas','packages-title1':'Paquetes para','packages-title2':'cada evento.',
    'contact-label':'Hablemos','contact-title1':'Cotiza tu','contact-title2':'evento hoy.',
    'contact-p':'Cuéntanos sobre tu evento y te preparamos una propuesta personalizada. Atendemos Richmond, Virginia y alrededores.',
    'contact-btn':'WhatsApp directo','form-title':'Solicita tu cotización',
    'form-name-label':'Tu nombre','form-type-label':'Tipo de evento','form-guests-label':'Número de personas',
    'form-date-label':'Fecha del evento','form-msg-label':'Mensaje','form-btn':'Enviar por WhatsApp',
  },
  en: {
    'customers-eyebrow':'Our partners','customers-title':'They trust us',
    'contact-btn-sms':'Text message',
    'zona-eyebrow':'Do we reach you?','zona-t1':'OUR SERVICE','zona-t2':'AREA','zona-sub':'Based in Richmond, VA — we travel to Virginia Beach, Washington DC and North Carolina. See how far we go.','zona-t-1':'0–20 miles','zona-t-6':'110+ mi / out of state','zona-p-6':'Custom quote','zona-p-1':'FREE','zona-cta':'Book your date','zona-note':'Travel fee based on distance from Richmond, VA. Outside the range? Reach out.',
    'switch-lang':'Switch language','tipos-eyebrow':'Event Types','tipos-title':'For Every Celebration','tipos-sub':'Weddings, quinceañeras and corporate events — we bring the premium bar wherever you are.','tipos-boda':'Weddings','tipos-quince':'Sweet 15s','tipos-corp':'Corporate','hb-label':'Head Bartender','hb-sub':'10+ years · Richmond, VA','menu-eyebrow':'Explore it all','menu-title-a':'The full','menu-title-b':'menu.','menu-click':'Click any drink to see the details','filter-all':'All','filter-more':'More','gallery-eyebrow':'Gallery','gallery-title':'On The Rocks Moments','accion-eyebrow':'In Action','accion-title':'This is On The Rocks','accion-sub':'Craft cocktails, full bar setup and the best vibe for your event.','tap-explore':'Tap to explore →','pkg-sub-1':'Sweet 15s','pkg-sub-2':'Brunch & Baby Showers','pkg-sub-3':'Weddings & Anniversaries','pkg-sub-4':'Corporate Events','pkg-sub-5':'Baby Showers','pkg-sub-6':'Just the Pro',
    'nav-about':'About','nav-services':'Services','nav-menu':'Menu','nav-packages':'Packages','nav-mixo':'Mixology','nav-calc':'Calculator','nav-experience':'Experience','nav-cta':'Book Now',
    'calc-eye':'Free tool','calc-title':'How much alcohol to buy for your event?','calc-sub':'Calculate bottles, mixers, ice and cups in seconds.','calc-btn':'Open calculator →','build-eye':'Interactive experience','build-title':'Build your own drink','build-sub':'Pick your base, your flavor and your finishing touch — and at your event you build it with us.','build-base':'Base','build-flavor':'Flavor','build-rim':'The touch','build-your':'Your creation','build-cta':'I want this at my event','menu-see':'See the full menu',
    'ob-margarita':'Margarita','ob-paloma':'Paloma','ob-mojito':'Mojito','ob-frozen':'Frozen','ob-cantarito':'Cantarito','ob-mango':'Mango','ob-fresa':'Strawberry','ob-sandia':'Watermelon','ob-pina':'Pineapple','ob-coco':'Coconut','ob-maracuya':'Passion fruit','ob-jamaica':'Hibiscus','ob-tajin':'Tajín','ob-chamoy':'Chamoy','ob-sal':'Salt','ob-flor':'Edible flower','ob-sinborde':'No rim',
    'hero-eyebrow':'Richmond, Virginia','hero-line1':"Let's drink",'hero-line2':'about it.',
    'hero-sub':'Premium mobile bar · Craft cocktails · Unforgettable events',
    'hero-btn1':'Get a Quote','hero-btn2':'View Menu','hero-btn3':'Design Your Drink',
    'about-label':'About Us','about-title1':'We are more than','about-title2':'a bar.',
    'about-p1':'On The Rocks is a premium mobile bar service offering unique event experiences through personalized cocktails and professional mixology. We bring the party to you.',
    'about-p2':"We believe every event deserves a bar that doesn't just serve drinks, but creates unforgettable moments. We are exclusive, professional, authentic, creative and personal.",
    'stat-label1':'Events completed','stat-label2':'Cocktails served','stat-label3':'5.0 · Rating','stat-label4':'Richmond, Virginia',
    'services-label':'What we offer','services-title1':'Our','services-title2':'services.',
    'service1-title':'Full Mobile Bar','service1-desc':'Complete setup with LED lights, premium glassware, decor and a professional bartender. Just tell us the location and we bring everything else.',
    'service2-title':'Professional Bartender','service2-desc':'Just need a bartender? We send our professional team with all their tools to complement your event with style.',
    'menu-label':'Drink menu','menu-title1':'Our','menu-title2':'menu.',
    'menu-note':'All drinks available as Cocktail or Mocktail ',
    'mocktail-title':'All available as Mocktail!','mocktail-desc':'Every drink can be made non-alcoholic. Full inclusion — everyone enjoys your event.',
    'gallery-label':'Our creations','gallery-title1':'This is','gallery-title2':'On The Rocks.',
    'gallery-cta-text':'Want this at your event?','gallery-cta-btn':'Get a Quote',
    'packages-label':'Personalized experiences','packages-title1':'Packages for','packages-title2':'every event.',
    'contact-label':"Let's talk",'contact-title1':'Get your','contact-title2':'quote today.',
    'contact-p':'Tell us about your event and we will prepare a personalized proposal. Serving Richmond, Virginia and surrounding areas.',
    'contact-btn':'WhatsApp us','form-title':'Request a Quote',
    'form-name-label':'Your name','form-type-label':'Event type','form-guests-label':'Number of guests',
    'form-date-label':'Event date','form-msg-label':'Message','form-btn':'Send via WhatsApp',
  }
};
function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[lang][key]) el.textContent = t[lang][key];
  });
  var btnEs = document.getElementById('btn-es');
  var btnEn = document.getElementById('btn-en');
  if (btnEs) btnEs.className = 'lang-btn' + (lang==='es'?' active':'');
  if (btnEn) btnEn.className = 'lang-btn' + (lang==='en'?' active':'');
  document.documentElement.lang = lang;
  localStorage.setItem('otr-lang', lang);
  if (typeof obRender === 'function') obRender();
}
// Auto-detect saved language on load
document.addEventListener('DOMContentLoaded', function() {
  var saved = localStorage.getItem('otr-lang');
  if (saved && saved !== 'es') setLang(saved);
});
function showTab(id, btn) {
  ['margaritas','frozen','palomas','mojitos','more'].forEach(p => {
    const el = document.getElementById(p);
    if (el) { el.classList.remove('active'); el.style.display = 'none'; }
  });
  const active = document.getElementById(id);
  if (active) { active.classList.add('active'); active.style.display = 'grid'; }
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

;

/* OTR: pausa videos de galeria fuera de pantalla para ahorrar recursos */
(function(){try{var vs=document.querySelectorAll('video.otr-gv');if(!('IntersectionObserver'in window))return;var io=new IntersectionObserver(function(es){es.forEach(function(e){var v=e.target;if(e.isIntersecting){var p=v.play();if(p&&p.catch)p.catch(function(){});}else{v.pause();}});},{threshold:0.25});vs.forEach(function(v){io.observe(v);});}catch(e){}})();

;

function otrToggleContact(){
  var c=document.getElementById('otr-contact'); if(!c) return;
  var open=c.classList.toggle('open');
  var b=document.getElementById('otr-co-bubble'); if(b) b.setAttribute('aria-expanded',open?'true':'false');
}
document.addEventListener('click',function(e){
  var c=document.getElementById('otr-contact');
  if(c&&c.classList.contains('open')&&!c.contains(e.target)) c.classList.remove('open');
});

;

(function(){
  var a=document.getElementById('otr-bgm'), b=document.getElementById('otr-music-btn'), ic=document.getElementById('otr-music-ic'), playing=false;
  var prevBtn=document.getElementById('otr-prev'), nextBtn=document.getElementById('otr-next');
  var ON='<path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/>';
  var OFF='<path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/><line x1="3" y1="3" x2="21" y2="21" stroke="#fff" stroke-width="2"/>';
  /* === PLAYLIST OTR (pink pool primero, luego rotan) === */
  var playlist=['otr-vibe-3-sunset.mp3','otr-vibe-4-vacation.mp3','otr-vibe-5-peru.mp3'];
  var idx=0; a.src=playlist[0];
  function skips(s){ prevBtn.style.display=s?'flex':'none'; nextBtn.style.display=s?'flex':'none'; }
  function playNow(){ a.volume=0.45; a.play().then(function(){ playing=true; ic.innerHTML=ON; b.style.background='#EB5C0B'; b.style.animation='otrPulse 2s infinite'; skips(true); }).catch(function(){}); }
  a.addEventListener('ended',function(){ idx=(idx+1)%playlist.length; a.src=playlist[idx]; if(playing){ a.play().catch(function(){}); } });
  window.otrNext=function(){ idx=(idx+1)%playlist.length; a.src=playlist[idx]; playNow(); };
  window.otrPrev=function(){ idx=(idx-1+playlist.length)%playlist.length; a.src=playlist[idx]; playNow(); };
  window.otrToggleMusic=function(){
    if(playing){ a.pause(); playing=false; ic.innerHTML=OFF; b.style.background='#555'; b.style.animation='none'; skips(false); }
    else { playNow(); }
  };
})();

;

(function(){
  /* === AJUSTABLE: números base de OTR === */
  var ANCLA = new Date('2026-06-30');   // fecha de referencia
  var EVENTOS_HOY = 150;                 // eventos a esta fecha
  var DIAS_POR_EVENTO = 5;               // sube 1 evento cada ~4 días
  var COCTELES_POR_EVENTO = 90;          // promedio de cócteles por evento
  var dias = Math.max(0,(Date.now()-ANCLA.getTime())/86400000);
  var eventos = EVENTOS_HOY + Math.floor(dias/DIAS_POR_EVENTO);
  var cocteles = eventos*COCTELES_POR_EVENTO;
  function animar(el,destino,suf){
    if(!el) return; var ini=0,t0=null,dur=1800;
    function step(ts){ if(!t0)t0=ts; var p=Math.min((ts-t0)/dur,1);
      var val=Math.floor((1-Math.pow(1-p,3))*destino);
      el.textContent=val.toLocaleString('en-US')+(suf||''); if(p<1)requestAnimationFrame(step); }
    requestAnimationFrame(step);
  }
  var done=false, sec=document.getElementById('otr-stats');
  if(sec){ var io=new IntersectionObserver(function(en){ en.forEach(function(e){
    if(e.isIntersecting && !done){ done=true;
      animar(document.getElementById('st-eventos'),eventos,'+');
      animar(document.getElementById('st-cocteles'),cocteles,'+'); }
  }); },{threshold:.4}); io.observe(sec); }
})();

;

(function(){
  var hv=document.getElementById('heroVid');
  if(!hv) return;
  var hp=['videos/wedding_loop.mp4','videos/evento-boda.mp4','videos/ambiente_loop.mp4','videos/evento-quince.mp4'];
  var hi=0;
  function load(){ hv.src=hp[hi]; hv.play().catch(function(){}); }
  hv.addEventListener('ended',function(){ hi=(hi+1)%hp.length; load(); });
  load();
})();

;

/* Galería: reproducir videos solo cuando están en pantalla (rendimiento) */
(function(){
  var vids = document.querySelectorAll('#otrVids video');
  if(!vids.length || !('IntersectionObserver' in window)) {
    vids.forEach(function(v){ v.setAttribute('autoplay',''); v.play().catch(function(){}); });
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      var v = e.target;
      if(e.isIntersecting){ v.play().catch(function(){}); }
      else { v.pause(); }
    });
  }, { threshold:0.25 });
  vids.forEach(function(v){ io.observe(v); });
})();

;

/* ===== MAPA DE ZONA DE SERVICIO (Leaflet) ===== */
(function(){
  var tries=0;
  function initZMap(){
    var el=document.getElementById('otr-zmap');
    if(!el) return;
    if(typeof L==='undefined'){ if(tries++<25){ return setTimeout(initZMap,300); } return; }
    if(el._leaflet_id){ return; }
    var RVA=[37.5407,-77.4360]; // Richmond, VA
    var MI=1609.34;
    var map=L.map(el,{ scrollWheelZoom:false, zoomControl:true, attributionControl:true }).setView(RVA,7);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',{
      subdomains:'abcd', maxZoom:19,
      attribution:'&copy; OpenStreetMap &copy; CARTO'
    }).addTo(map);
    // anillos: de mayor a menor para que el relleno chico quede encima
    var tiers=[
      {mi:110, color:'#A91821', label:'76–110 mi · $200'},
      {mi:75,  color:'#9c2060', label:'51–75 mi · $150'},
      {mi:50,  color:'#EB5C0B', label:'36–50 mi · $100'},
      {mi:35,  color:'#F08100', label:'21–35 mi · $75'},
      {mi:20,  color:'#21d07a', label:'0–20 mi · GRATIS'}
    ];
    var outer;
    tiers.forEach(function(t){
      var c=L.circle(RVA,{ radius:t.mi*MI, color:t.color, weight:2, opacity:.9, dashArray:'4 6',
        fillColor:t.color, fillOpacity:.08 }).addTo(map);
      c.bindTooltip(t.label,{sticky:true});
      if(t.mi===110) outer=c;
    });
    // marcador Richmond
    var dot=L.divIcon({className:'', html:'<div style="width:16px;height:16px;border-radius:50%;background:#F08100;box-shadow:0 0 0 4px rgba(240,129,0,.35),0 0 14px rgba(240,129,0,.8);"></div>', iconSize:[16,16], iconAnchor:[8,8]});
    L.marker(RVA,{icon:dot}).addTo(map).bindTooltip('Richmond, VA · Base',{permanent:false,direction:'top'});
    if(outer){ map.fitBounds(outer.getBounds(),{padding:[20,20]}); }
    setTimeout(function(){ map.invalidateSize(); },250);
  }
  if(document.readyState==='loading'){ document.addEventListener('DOMContentLoaded',initZMap); }
  else { initZMap(); }
})();
