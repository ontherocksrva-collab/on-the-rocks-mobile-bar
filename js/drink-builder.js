
/* ARMÁ TU BEBIDA (builder interactivo) */
function obPick(k,el){
  el.parentElement.querySelectorAll('.ob-chip').forEach(function(c){c.classList.remove('on')});
  el.classList.add('on'); obRender();
}
function obSel(id){var e=document.querySelector('#'+id+' .ob-chip.on');return e?e.textContent.trim():'';}
function obRender(){
  var nm=document.getElementById('ob-name'); if(!nm) return;
  var base=obSel('ob-base'), flavor=obSel('ob-flavor'), rim=obSel('ob-rim');
  nm.textContent=(flavor+' '+base).trim();
  var es=(typeof currentLang!=='undefined'?currentLang:'es')==='es';
  var noRim=(rim==='Sin borde'||rim==='No rim');
  var desc, msg;
  if(es){ desc=noRim?'Sin borde.':'Con borde de '+rim+'.'; msg='Hola On The Rocks, en mi evento quiero armar mi propia bebida: '+(flavor+' '+base)+(noRim?'':' con borde de '+rim)+'. ¿Me cuentan más?'; }
  else { desc=noRim?'No rim.':'With a '+rim+' rim.'; msg='Hi On The Rocks, at my event I want to build my own drink: '+(flavor+' '+base)+(noRim?'':' with a '+rim+' rim')+'. Tell me more?'; }
  document.getElementById('ob-desc').textContent=desc;
  document.getElementById('ob-cta').href='https://wa.me/18045026837?text='+encodeURIComponent(msg);
}
function toggleMenuFull(){
  var f=document.getElementById('menu-full'); if(!f) return;
  var open=f.classList.toggle('open');
  var a=document.getElementById('menu-toggle-arrow'); if(a) a.textContent=open?'▴':'▾';
}
obRender();
