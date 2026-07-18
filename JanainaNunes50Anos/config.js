window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Janaina Nunes",
    "idade": 50,
    "data": "2027-01-20",
    "hora": "13:00",
    "horaTermino": "",
    "endereco": "Av Rio Pequeno 1594",
    "frase1": "",
    "frase2": "",
    "frase3": ""
  },
  "convite": {
    "paletaCores": "Cores variadas",
    "tema": "Pool Party",
    "musica": "assets/music_1784405572025.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "JanainaNunes50Anos",
    "seo": {
      "pageTitle": "Aniversário de Janaina Nunes",
      "ogTitle": "Você recebeu um convite especial!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1784405572025.jpg",
    "cartao": "assets/cartao_gen_1784405572025.jpg",
    "aberturaSlides": [
      "assets/slide1_1784405572025.mp4",
      "assets/slide2_1784405572025.jpg",
      "assets/slide3_1784405572025.mp4",
      "assets/slide4_1784405572025.jpg"
    ],
    "aberturaSlidesMeta": [
      {
        "filePath": "assets/slide1_1784405572025.mp4",
        "label": "Abertura (Video)",
        "type": "video"
      },
      {
        "filePath": "assets/slide2_1784405572025.jpg",
        "label": "Convite Especial",
        "type": "image"
      },
      {
        "filePath": "assets/slide3_1784405572025.mp4",
        "label": "Cena Tematica",
        "type": "video"
      },
      {
        "filePath": "assets/slide4_1784405572025.jpg",
        "label": "Prepare-se",
        "type": "image"
      }
    ],
    "folhaVazia": "assets/folha_vazia_1784405572025.jpg",
    "folhaPreenchida": "assets/folha_1784405572025.jpg",
    "musica": "assets/music_1784405572025.mp3",
    "fabric": {
      "saveTheDate": {
        "referencia": "",
        "resultado": "",
        "musicaPersonalizada": "",
        "musicSource": "convite",
        "hasMusic": true,
        "musicStartSec": 0,
        "durationSec": 20
      },
      "lembrete": {
        "referencia": "",
        "resultado": "",
        "musicaPersonalizada": "",
        "musicSource": "convite",
        "hasMusic": true,
        "musicStartSec": 0,
        "durationSec": 20
      }
    },
    "fotos": [],
    "popupImagensPorBotao": {}
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://www.google.com/maps/search/?api=1&query=Av+Rio+Pequeno+1594"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5511988509403",
      "rsvpConfig": {
        "exibirNome": true,
        "exibirWhatsapp": false,
        "exibirAcompanhantes": false
      }
    },
    {
      "tipoAcao": "PopupImagem",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "assets/popup_manual_premium_1784405572025.jpg"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n<style>\n.lp-root, .lp-root *, .lp-root *::before, .lp-root *::after {\n  color-scheme: light only; forced-color-adjust: none;\n  -webkit-font-smoothing: antialiased; box-sizing: border-box;\n}\n.lp-root { background: hsl(222, 20%, 98%); color: hsl(222, 81%, 25%); margin: 0; padding: 0; }\n.lp-wrap {\n  position: relative; padding: 30px 18px 36px; overflow: hidden;\n  font-family: 'Cormorant Garamond', serif;\n  background: linear-gradient(160deg, hsl(222, 20%, 98%) 0%, hsl(222, 25%, 95%) 50%, hsl(222, 20%, 98%) 100%);\n}\n\n.snow { position: absolute; pointer-events: none; z-index: 1; color: rgba(160,190,240,.55); font-size: 13px; animation: snowfall linear infinite; }\n@keyframes snowfall { 0%{transform:translateY(-20px) rotate(0deg);opacity:0;} 10%{opacity:1;} 90%{opacity:.6;} 100%{transform:translateY(700px) rotate(360deg);opacity:0;} }\n\n.lp-header { position: relative; z-index: 2; text-align: center; margin-bottom: 22px; }\n.lp-header h2 { font-family: 'Cinzel', serif; font-size: 22px; color: hsl(222, 81%, 25%); letter-spacing: .13em; margin-bottom: 4px; }\n.lp-header .sub { color: hsl(222, 91%, 70%); font-size: 14px; font-style: italic; margin-bottom: 2px; }\n.lp-header .badge {\n  display: inline-block; margin-top: 6px; font-family: 'Cinzel', serif;\n  font-size: 10px; letter-spacing: .18em; text-transform: uppercase;\n  background: linear-gradient(135deg, #c8d8f0, #e8eef8);\n  border: 1px solid rgba(160,190,230,.5); border-radius: 30px;\n  padding: 3px 14px; color: #3a5a90;\n}\n\n.lp-grid { display: grid; gap: 10px; position: relative; z-index: 2; }\n.lp-card {\n  display: flex; gap: 13px; align-items: center;\n  padding: 13px 15px; border-radius: 20px;\n  background: rgba(255,255,255,.93);\n  border: 1px solid rgba(180,210,240,.35);\n  box-shadow: 0 2px 14px rgba(60,100,200,.07);\n  animation: lpFade .5s ease both;\n}\n@keyframes lpFade { from{opacity:0;transform:translateY(10px);} to{opacity:1;transform:translateY(0);} }\n\n.lp-icon {\n  width: 44px; height: 44px; border-radius: 14px; flex-shrink: 0;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 17px; color: #fff;\n  background: hsl(222, 91%, 70%); /* fallback background if specific color class is missing */\n  box-shadow: 0 2px 10px rgba(80,120,220,.22);\n}\n.icon-blue   { background: linear-gradient(145deg, hsl(222, 91%, 70%), hsl(222, 81%, 25%)); }\n.icon-silver { background: linear-gradient(145deg, #b0c4e0, #7090b8); }\n.icon-light  { background: linear-gradient(145deg, hsl(222, 91%, 70%), hsl(222, 91%, 70%)); }\n.icon-deep   { background: linear-gradient(145deg, hsl(222, 81%, 25%), hsl(222, 71%, 12%)); }\n.icon-ice    { background: linear-gradient(145deg, hsl(222, 91%, 70%), hsl(222, 91%, 70%)); }\n\n.lp-title { font-family: 'Cinzel', serif; font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: hsl(222, 91%, 70%); margin-bottom: 2px; }\n.lp-name  { font-size: 15.5px; font-weight: 600; color: hsl(222, 81%, 25%); line-height: 1.3; }\n.lp-tip {\n  display: inline-block; margin-top: 4px; font-size: 12px; color: #3a5a9a;\n  background: rgba(160,190,240,.22); border: 1px solid rgba(120,160,230,.28);\n  border-radius: 30px; padding: 2px 10px; font-style: italic;\n}\n\n.lp-divider {\n  text-align: center; position: relative; z-index: 2; margin: 20px 0 14px;\n  font-family: 'Cinzel', serif; font-size: 10px; letter-spacing: .22em; color: hsl(222, 91%, 70%);\n}\n.lp-divider::before, .lp-divider::after {\n  content: ''; display: inline-block; width: 44px; height: 0.5px;\n  background: linear-gradient(to right, transparent, rgba(100,150,210,.4));\n  vertical-align: middle; margin: 0 10px;\n}\n.lp-divider::after { background: linear-gradient(to left, transparent, rgba(100,150,210,.4)); }\n\n.pix-box {\n  position: relative; z-index: 2; border-radius: 20px;\n  background: rgba(255,255,255,.94);\n  border: 1px solid rgba(140,180,230,.30);\n  padding: 16px 15px 14px;\n  box-shadow: 0 2px 16px rgba(60,100,200,.08);\n}\n.pix-row { display: flex; align-items: center; gap: 10px; margin-bottom: 11px; }\n.pix-icon-wrap {\n  width: 44px; height: 44px; border-radius: 14px; flex-shrink: 0;\n  display: flex; align-items: center; justify-content: center;\n  background: linear-gradient(145deg, hsl(222, 91%, 70%), hsl(222, 81%, 25%));\n  color: #fff; font-size: 19px; box-shadow: 0 2px 12px rgba(60,100,200,.28);\n}\n.pix-label { font-family: 'Cinzel', serif; font-size: 12px; letter-spacing: .12em; text-transform: uppercase; color: hsl(222, 81%, 25%); margin-bottom: 2px; }\n.pix-sub   { font-size: 13px; color: hsl(222, 91%, 70%); font-style: italic; }\n.pix-key-wrap {\n  display: flex; align-items: center; gap: 10px;\n  background: rgba(235,242,255,.90);\n  border: 1px solid rgba(140,180,230,.28); border-radius: 14px;\n  padding: 10px 13px; margin-bottom: 9px;\n}\n.pix-key {\n  flex: 1; font-family: 'Cinzel', serif; font-size: 12px;\n  color: hsl(222, 81%, 25%); letter-spacing: .02em; word-break: break-all;\n}\n.pix-copy-btn {\n  flex-shrink: 0; cursor: pointer; border: none; outline: none;\n  border-radius: 10px; padding: 7px 13px;\n  background: linear-gradient(145deg, hsl(222, 91%, 70%), hsl(222, 81%, 25%));\n  color: #fff; font-family: 'Cinzel', serif;\n  font-size: 11px; letter-spacing: .10em;\n  box-shadow: 0 2px 10px rgba(60,100,200,.28);\n  transition: transform .15s; display: flex; align-items: center; gap: 5px;\n}\n.pix-copy-btn:hover  { transform: scale(1.04); }\n.pix-copy-btn:active { transform: scale(.97); }\n.pix-copied { text-align: center; font-size: 13px; color: hsl(222, 81%, 25%); font-style: italic; height: 20px; transition: opacity .3s; }\n\n.lp-footer {\n  position: relative; z-index: 2; margin-top: 18px; border-radius: 20px;\n  background: linear-gradient(145deg, rgba(255,255,255,.95), rgba(220,235,255,.75));\n  border: 1px solid rgba(120,170,230,.30); padding: 16px;\n  text-align: center;\n}\n.lp-footer-text   { font-size: 15px; color: hsl(222, 71%, 12%); line-height: 1.7; font-style: italic; }\n.lp-footer-accent { color: hsl(222, 81%, 25%); font-weight: 600; font-family: 'Cinzel', serif; font-size: 12px; letter-spacing: .08em; display: block; margin-top: 6px; }\n\n.lp-star { position: absolute; color: rgba(140,170,230,.5); font-size: 11px; animation: lsStar 3s ease-in-out infinite; z-index: 1; }\n@keyframes lsStar { 0%,100%{opacity:0;transform:scale(0);}50%{opacity:1;transform:scale(1);} }\n</style>\n<div class=\"lp-root\">\n  <span class=\"snow\" style=\"left:8%;animation-duration:6s;animation-delay:0s;\">•</span>\n  <span class=\"snow\" style=\"left:22%;animation-duration:8s;animation-delay:1.2s;font-size:9px;\">•</span>\n  <span class=\"snow\" style=\"left:38%;animation-duration:7s;animation-delay:2.5s;\">•</span>\n  <span class=\"snow\" style=\"left:55%;animation-duration:9s;animation-delay:.8s;font-size:9px;\">•</span>\n  <span class=\"snow\" style=\"left:70%;animation-duration:6.5s;animation-delay:3s;\">•</span>\n  <span class=\"snow\" style=\"left:85%;animation-duration:8.5s;animation-delay:1.8s;font-size:10px;\">•</span>\n\n  <svg style=\"position:absolute;top:-14px;left:-14px;width:150px;height:150px;opacity:.10;pointer-events:none;z-index:1;\" viewBox=\"0 0 160 160\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(0 80 80)\"/>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(45 80 80)\"/>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(90 80 80)\"/>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(135 80 80)\"/>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(180 80 80)\"/>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(225 80 80)\"/>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(270 80 80)\"/>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(315 80 80)\"/>\n    <circle cx=\"80\" cy=\"80\" r=\"12\" fill=\"#dce9fc\"/>\n  </g>\n</svg>\n  <svg style=\"position:absolute;bottom:-8px;right:-8px;width:115px;height:115px;opacity:.10;pointer-events:none;z-index:1;\" viewBox=\"0 0 120 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g>\n    <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#a8c0e8\" transform=\"rotate(0 60 60)\"/>\n    <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#d0e0f8\" transform=\"rotate(60 60 60)\"/>\n    <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#a8c0e8\" transform=\"rotate(120 60 60)\"/>\n    <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#d0e0f8\" transform=\"rotate(180 60 60)\"/>\n    <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#a8c0e8\" transform=\"rotate(240 60 60)\"/>\n    <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#d0e0f8\" transform=\"rotate(300 60 60)\"/>\n    <circle cx=\"60\" cy=\"60\" r=\"9\" fill=\"#eaf0fc\"/>\n  </g>\n</svg>\n\n  <i class=\"lp-star\" style=\"top:9%;left:7%;animation-delay:0s;\">✦</i>\n  <i class=\"lp-star\" style=\"top:20%;right:13%;animation-delay:1s;\">✦</i>\n  <i class=\"lp-star\" style=\"bottom:22%;left:12%;animation-delay:2s;\">✦</i>\n  <i class=\"lp-star\" style=\"bottom:10%;right:9%;animation-delay:.5s;\">✦</i>\n\n  <div class=\"lp-wrap\">\n    <div class=\"lp-header\">\n      <h2>Lista de Presentes</h2>\n      <p class=\"sub\">Sugestões especiais para celebrar os 50 anos de Janaina Nunes</p>\n      <span class=\"badge\">Aniversário • Pool Party • Cores variadas</span>\n    </div>\n\n    <div class=\"lp-grid\">\n      <div class=\"lp-card\" style=\"animation-delay:.05s\">\n        <div class=\"lp-icon icon-blue\"><i class=\"fa-solid fa-shoe-prints\"></i></div>\n        <div>\n          <div class=\"lp-title\">Calçados</div>\n          <div class=\"lp-name\">Sandália sem salto ou tênis slip-on, tamanho 39</div>\n        </div>\n      </div>\n\n      <div class=\"lp-card\" style=\"animation-delay:.10s\">\n        <div class=\"lp-icon icon-silver\"><i class=\"fa-solid fa-bag-shopping\"></i></div>\n        <div>\n          <div class=\"lp-title\">Bolsas</div>\n          <div class=\"lp-name\">Bolsas pequenas ou médias</div>\n        </div>\n      </div>\n\n      <div class=\"lp-card\" style=\"animation-delay:.15s\">\n        <div class=\"lp-icon icon-light\"><i class=\"fa-solid fa-spa\"></i></div>\n        <div>\n          <div class=\"lp-title\">Cuidados corporais</div>\n          <div class=\"lp-name\">Hidratante, óleo de banho e body splash</div>\n        </div>\n      </div>\n\n      <div class=\"lp-card\" style=\"animation-delay:.20s\">\n        <div class=\"lp-icon icon-deep\"><i class=\"fa-solid fa-palette\"></i></div>\n        <div>\n          <div class=\"lp-title\">Maquiagem</div>\n          <div class=\"lp-name\">Itens de maquiagem</div>\n        </div>\n      </div>\n\n      <div class=\"lp-card\" style=\"animation-delay:.25s\">\n        <div class=\"lp-icon icon-blue\"><i class=\"fa-solid fa-shirt\"></i></div>\n        <div>\n          <div class=\"lp-title\">Roupas de dormir</div>\n          <div class=\"lp-name\">Plus size G2</div>\n          <span class=\"lp-tip\">Tamanho informado: G2</span>\n        </div>\n      </div>\n\n      <div class=\"lp-card\" style=\"animation-delay:.30s\">\n        <div class=\"lp-icon icon-ice\"><i class=\"fa-solid fa-spray-can-sparkles\"></i></div>\n        <div>\n          <div class=\"lp-title\">Perfumes</div>\n          <div class=\"lp-name\">Doces, florais ou cítricos suaves</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"lp-divider\">Pix e contribuições para presentes</div>\n\n    <div class=\"pix-box\">\n      <div class=\"pix-row\">\n        <div class=\"pix-icon-wrap\"><i class=\"fa-solid fa-qrcode\"></i></div>\n        <div>\n          <div class=\"pix-label\">Chave Pix</div>\n          <div class=\"pix-sub\">Use a chave abaixo para contribuir com o presente</div>\n        </div>\n      </div>\n\n      <div class=\"pix-key-wrap\">\n        <span class=\"pix-key\" id=\"pixKey\">PIX NÃO INFORMADO</span>\n        <button class=\"pix-copy-btn\" onclick=\"var key = document.getElementById('pixKey').textContent.trim(); if (navigator.clipboard) { navigator.clipboard.writeText(key).then(function() { var el = document.getElementById('copiedMsg'); el.style.opacity = '1'; setTimeout(function(){ el.style.opacity = '0'; }, 2000); }); } else { var ta = document.createElement('textarea'); ta.value = key; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); var el = document.getElementById('copiedMsg'); el.style.opacity = '1'; setTimeout(function(){ el.style.opacity = '0'; }, 2000); }\">\n          <i class=\"fa-solid fa-copy\" style=\"font-size:12px;\"></i> Copiar chave\n        </button>\n      </div>\n\n      <div class=\"pix-copied\" id=\"copiedMsg\" style=\"opacity:0;\">Chave copiada</div>\n    </div>\n\n    <div class=\"lp-footer\">\n      <div class=\"lp-footer-text\">Sua presença e carinho já são o melhor presente</div>\n      <span class=\"lp-footer-accent\">Sugestões simples para celebrar com amor</span>\n    </div>\n  </div>\n</div>\n<script>\nfunction copyPix() {\n  var key = document.getElementById('pixKey').textContent.trim();\n  if (navigator.clipboard) {\n    navigator.clipboard.writeText(key).then(showCopied);\n  } else {\n    var ta = document.createElement('textarea');\n    ta.value = key; document.body.appendChild(ta);\n    ta.select(); document.execCommand('copy');\n    document.body.removeChild(ta); showCopied();\n  }\n}\nfunction showCopied() {\n  var el = document.getElementById('copiedMsg');\n  el.style.opacity = '1';\n  setTimeout(function(){ el.style.opacity = '0'; }, 2500);\n}\n</script>"
    }
  ],
  "upsell": {
    "galeriaFotos": false,
    "saveTheDate": false,
    "lembrete": false
  },
  "config": {
    "exibirMarcaDagua": false,
    "cronometro": true,
    "buttonColor": "#0c2b71",
    "buttonSize": 1,
    "isButtonFilled": true,
    "shadowStyle": "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
    "brilhos": {
      "esquerdo": true,
      "direito": true,
      "centro": true
    }
  },
  "briefing": {
    "text": "DADOS DO EVENTO\nTipo de evento: Aniversário\nNome: Janaina Nunes\nIdade: 50\nData: 2027-01-20\nHorário de início: 13:00\nHorário de término: 20:30\nLocal: Av Rio Pequeno 1594\nTema: Pool Party\nPaleta: Cores variadas\n\nESCOLHAS DO CONVITE\nTipo de abertura: Abertura Longa\nConfirmação de presença: Formulário Inteligente\nMúsica: Happy - Pharrell Williams\nPresentes: Sugestões Simples\nManual do Convidado: Manual Premium\nCronômetro: Sim\n\nSUGESTÕES DE PRESENTES\n- Sandália sem salto ou tênis slip-on, tamanho 39\n- Bolsas pequenas ou médias\n- Produtos para cuidados corporais: hidratante, óleo de banho e body splash\n- Maquiagem\n- Roupas de dormir plus size G2\n- Perfumes doces, florais ou cítricos suaves\n\nMANUAL DO CONVIDADO\n- Chegue no horário: sua presença pontual é muito importante para nós.\n- Confirme sua presença pelo menos 15 dias antes do evento.\n- Convidado não convida.\n- Se você consome bebida alcoólica, traga uma caixinha gelada.\n- Tudo que você precisar, peça ao garçom.\n- Os doces e o bolo serão servidos depois dos parabéns; portanto, não mexa na mesa.\n- Divirta-se bastante! Estamos ansiosos para celebrar este momento especial com você.\n- Não vá embora sem me dar um abraço e comer um pedaço do bolo. Queremos compartilhar cada instante com você.",
    "usedAt": "2026-07-18T19:59:13.644Z",
    "source": "fill-fields",
    "buttonDecisions": {
      "manualComConteudo": true,
      "presentesComConteudo": true,
      "manualPremium": true,
      "presentesPremium": false,
      "manualResumo": "Chegue no horário: sua presença pontual é muito importante para nós. Confirme sua presença pelo menos 15 dias antes do evento. Convidado não convida. Se você consome bebida alcoólica, traga uma caixinha gelada. Tudo que você precisar, peça ao garçom. Os doces e o bolo serão servidos depois dos parabéns; portanto, não mexa na mesa. Divirta-se bastante! Estamos ansiosos para celebrar este momento especial com você. Não vá embora sem me dar um abraço e comer um pedaço do bolo. Queremos compartilhar cada instante com você.",
      "presentesResumo": "Sandália sem salto ou tênis slip-on, tamanho 39. Bolsas pequenas ou médias. Produtos para cuidados corporais: hidratante, óleo de banho e body splash. Maquiagem. Roupas de dormir plus size G2. Perfumes doces, florais ou cítricos suaves."
    }
  }
};
