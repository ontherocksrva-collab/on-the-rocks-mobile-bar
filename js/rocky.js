
(function(){
  var OTR_WORKER="https://otr-chatbot.ontherocksrva.workers.dev", WA="18045026837";
  var OTR_FORM="https://docs.google.com/forms/d/e/1FAIpQLScaoDZYt8TCsI0G3oP9Zzrzr2NLlTLBfJlhAIEiiGjNagGqwQ/formResponse";
  var FE={nombre:"entry.434087601",tel:"entry.1238588240",email:"entry.3159525",tipo:"entry.77124267",fecha:"entry.1658740120",personas:"entry.1460868803",origen:"entry.1840468613"};
  function otrLogToSheet(d){
    try{
      var p=new URLSearchParams();
      if(d.nombre)p.append(FE.nombre,d.nombre);
      if(d.tel)p.append(FE.tel,d.tel);
      if(d.email)p.append(FE.email,d.email);
      if(d.tipo)p.append(FE.tipo,d.tipo);
      if(d.fecha)p.append(FE.fecha,d.fecha);
      if(d.personas)p.append(FE.personas,d.personas);
      if(d.origen)p.append(FE.origen,d.origen);
      fetch(OTR_FORM,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:p.toString()});
    }catch(e){}
  }
  var otrMsgs=[], otrOpened=false;
  function isEs(){return (typeof currentLang!=='undefined'?currentLang:'es')==='es';}
  function bodyEl(){return document.getElementById('otr-ch-body');}
  function scroll(){var b=bodyEl();b.scrollTop=b.scrollHeight;}
  function add(cls,txt){var d=document.createElement('div');d.className='otr-msg '+cls;d.textContent=txt;bodyEl().appendChild(d);scroll();return d;}
  function esc(t){return String(t).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c];});}
  function money(n){return "$"+Number(n).toLocaleString("en-US");}
  function quoteCard(q){
    try{
      var es=isEs();
      var rows=(q.lines||[]).map(function(l){return '<div class="otr-q-row"><span>'+esc(l.label)+'</span><span>'+money(l.amount)+'</span></div>';}).join("");
      var c=document.createElement("div");c.className="otr-quote-card";
      c.innerHTML='<div class="otr-q-head">'+(es?"Estimado":"Estimate")+' · '+esc(q.package)+'</div>'
        +'<div class="otr-q-total">'+money(q.low)+' – '+money(q.high)+'</div>'+rows
        +'<div class="otr-q-note">'+(es?"Estimado; Gio confirma la cotización final personalizada.":"Estimate; Gio confirms the final personalized quote.")+'</div>';
      bodyEl().appendChild(c);scroll();
    }catch(e){}
  }
  window.otrToggleChat=function(){
    var p=document.getElementById('otr-chat-panel');p.classList.toggle('open');
    if(p.classList.contains('open')&&!otrOpened){otrOpened=true;
      add('bot',isEs()?"Hola, soy Rocky de On The Rocks Mobile Bar. ¿En qué puedo ayudarte? Puedo contarte de cócteles, paquetes, o armarte un estimado para tu evento.":"Hi, I'm Rocky from On The Rocks Mobile Bar. How can I help? I can tell you about cocktails, packages, or put together an estimate for your event.");}
  };
  function leadCTA(){
    var es=isEs();
    var summary=otrMsgs.map(function(m){return (m.role==='user'?(es?'Cliente: ':'Customer: '):'Rocky: ')+m.content;}).join('\n').slice(-1200);
    var text=(es?"Hola On The Rocks! Vengo del chat de la web y quiero cotizar.\n\n":"Hi On The Rocks! I'm coming from the website chat and want a quote.\n\n")+summary;
    var a=document.createElement('a');a.className='otr-lead-cta';a.target='_blank';
    a.href="https://wa.me/"+WA+"?text="+encodeURIComponent(text);
    a.textContent=es?"Enviar mis datos por WhatsApp":"Send my details on WhatsApp";
    bodyEl().appendChild(a);scroll();
  }
  window.otrSendChat=async function(){
    var inp=document.getElementById('otr-ch-input');var txt=(inp.value||'').trim();if(!txt)return;
    inp.value='';add('user',txt);otrMsgs.push({role:'user',content:txt});
    var typing=add('bot typing','…');
    try{
      var r=await fetch(OTR_WORKER,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({messages:otrMsgs})});
      var j=await r.json();typing.remove();
      var reply=(j&&j.reply)?j.reply:'...';
      var hadLead=/\[LEAD_FORM\]/.test(reply);
      reply=reply.replace(/\[LEAD_FORM\]/g,'').trim();
      if(j&&j.quote){reply=reply.replace(/\n*— (Estimado aproximado|Estimated range)[\s\S]*$/,'').trim();}
      add('bot',reply);otrMsgs.push({role:'assistant',content:reply});
      if(j&&j.quote)quoteCard(j.quote);
      if(hadLead){leadCTA();
        try{var tr=otrMsgs.map(function(mm){return (mm.role==="user"?"C: ":"R: ")+mm.content;}).join(" | ").slice(-450);otrLogToSheet({origen:"Chat Rocky — "+tr});}catch(e){}
      }
    }catch(e){typing.remove();add('bot',isEs()?'Ups, hubo un problema de conexión. Escríbenos por WhatsApp al 804-502-6837.':'Oops, a connection issue. Reach us on WhatsApp at 804-502-6837.');}
  };
  // ----- Form "Solicita tu cotización" -> WhatsApp prellenado -----
  window.otrSendLead=function(){
    var g=function(id){var e=document.getElementById(id);return e?(e.value||'').trim():'';};
    var name=g('lead-name'),type=g('lead-type'),guests=g('lead-guests'),date=g('lead-date'),msg=g('lead-msg');
    var es=isEs();
    if(!name && !guests){alert(es?'Por favor escribe al menos tu nombre y el número de personas.':'Please enter at least your name and number of guests.');return;}
    var text=(es?"Hola On The Rocks! Quiero una cotización.\n\n":"Hi On The Rocks! I'd like a quote.\n\n")
      +(es?"Nombre: ":"Name: ")+name+"\n"
      +(es?"Evento: ":"Event: ")+type+"\n"
      +(es?"Personas: ":"Guests: ")+guests+"\n"
      +(es?"Fecha: ":"Date: ")+date+"\n"
      +(es?"Mensaje: ":"Message: ")+msg;
    otrLogToSheet({nombre:name,tipo:type,fecha:date,personas:guests,origen:"Formulario web"+(msg?" — "+msg:"")});
    window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(text),'_blank');
  };
  setTimeout(function(){
    var gb=document.getElementById('otr-greet-bubble');
    var gp=document.getElementById('otr-chat-panel');
    if(gb && gp && !gp.classList.contains('open')){
      var gt=document.getElementById('otr-greet-text');
      if(gt) gt.textContent = isEs() ? "Bienvenido a On The Rocks. ¿Te ayudo a planear tu evento?" : "Welcome to On The Rocks. May I help with your event?";
      gb.classList.add('show');
    }
  }, 3000);
})();
