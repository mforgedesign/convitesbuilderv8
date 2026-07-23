window.config = {
  "evento": {
    "tipo": "Debutante",
    "nome": "Laura",
    "idade": 15,
    "data": "2026-11-01",
    "hora": "18:30",
    "horaTermino": "",
    "endereco": "Comedoria escritório",
    "frase1": "",
    "frase2": "",
    "frase3": ""
  },
  "convite": {
    "paletaCores": "Rose com Dourado e detalhes em Pink",
    "tema": "Floral",
    "musica": "assets/music_1784753524090.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Laura15Anos",
    "seo": {
      "pageTitle": "Convite de 15 anos da Laura",
      "ogTitle": "Você recebeu um convite especial!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1784753524090.png",
    "cartao": "assets/cartao_chatgpt_1784753524090.jpg",
    "aberturaSlides": [
      "assets/slide1_1784753524090.mp4",
      "assets/slide2_1784753524090.jpg",
      "assets/slide3_1784753524090.mp4",
      "assets/slide4_1784753524090.jpg"
    ],
    "aberturaSlidesMeta": [
      {
        "filePath": "assets/slide1_1784753524090.mp4",
        "label": "Abertura (Video)",
        "type": "video"
      },
      {
        "filePath": "assets/slide2_1784753524090.jpg",
        "label": "Convite Especial",
        "type": "image"
      },
      {
        "filePath": "assets/slide3_1784753524090.mp4",
        "label": "Cena Tematica",
        "type": "video"
      },
      {
        "filePath": "assets/slide4_1784753524090.jpg",
        "label": "Prepare-se",
        "type": "image"
      }
    ],
    "folhaVazia": "assets/folha_vazia_1784753524090.png",
    "folhaPreenchida": "assets/folha_1784753524090.jpg",
    "musica": "assets/music_1784753524090.mp3",
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
      "conteudo": "https://www.google.com/maps/search/?api=1&query=Comedoria+escrit%C3%B3rio"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5582999573874",
      "rsvpConfig": {
        "exibirNome": true,
        "exibirWhatsapp": false,
        "exibirAcompanhantes": false
      }
    },
    {
      "tipoAcao": "Galeria",
      "tipoVisual": "css",
      "titulo": "Galeria de Fotos",
      "icone": "fa-solid fa-images",
      "conteudo": []
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n.mc-wrap{\n  position:relative;padding:32px 18px 36px;overflow:hidden;\n  font-family:'Cormorant Garamond',serif;\n  background:linear-gradient(160deg,hsl(43, 20%, 98%) 0%,hsl(43, 25%, 95%) 40%,hsl(43, 20%, 98%) 100%);\n}\n.mc-header{position:relative;z-index:2;text-align:center;margin-bottom:10px;}\n.mc-crown{font-size:26px;margin-bottom:6px;display:block;animation:crownFloat 4s ease-in-out infinite;}\n@keyframes crownFloat{0%,100%{transform:translateY(0);}50%{transform:translateY(-5px);}}\n.mc-header h2{font-family:'Cinzel',serif;font-size:22px;color:hsl(43, 89%, 38%);letter-spacing:.15em;margin-bottom:5px;}\n.mc-header p{color:hsl(43, 99%, 70%);font-size:14.5px;font-style:italic;}\n.mc-sub{\n  position:relative;z-index:2;text-align:center;margin-bottom:24px;\n  font-size:13px;color:hsl(43, 99%, 70%);font-family:'Cinzel',serif;letter-spacing:.12em;text-transform:uppercase;\n}\n.mc-sub::before,.mc-sub::after{\n  content:'';display:inline-block;width:40px;height:.5px;\n  background:linear-gradient(to right,transparent,rgba(100,160,220,.40));\n  vertical-align:middle;margin:0 10px;\n}\n.mc-sub::after{background:linear-gradient(to left,transparent,rgba(100,160,220,.40));}\n.mc-grid{display:grid;gap:12px;position:relative;z-index:2;}\n.mc-card{\n  border-radius:20px;background:rgba(255,255,255,.82);\n  border:1px solid rgba(100,160,220,.20);\n  box-shadow:0 2px 16px rgba(60,120,200,.07);\n  overflow:hidden;animation:mcFade .6s ease both;\n}\n@keyframes mcFade{from{opacity:0;transform:translateY(11px);}to{opacity:1;transform:translateY(0);}}\n.mc-top{display:flex;align-items:center;gap:13px;padding:15px 15px 13px;}\n.mc-icon{\n  width:46px;height:46px;border-radius:14px;flex-shrink:0;\n  display:flex;align-items:center;justify-content:center;\n  background:linear-gradient(145deg,hsl(43, 99%, 70%),hsl(43, 99%, 70%));\n  color:#fff;font-size:18px;box-shadow:0 2px 10px rgba(80,140,220,.22);\n}\n.mc-title{font-family:'Cinzel',serif;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:hsl(43, 99%, 70%);margin-bottom:3px;}\n.mc-text{font-size:15px;line-height:1.6;color:hsl(43, 79%, 20%);}\n.mc-divider{height:.5px;margin:0 15px;background:linear-gradient(to right,transparent,rgba(100,160,220,.22),transparent);}\n.mc-body{padding:11px 15px 15px;}\n.mc-highlight{color:hsl(43, 89%, 38%);font-weight:600;}\n.mc-tag-row{display:flex;flex-wrap:wrap;gap:7px;margin-top:9px;}\n.mc-tag{display:inline-flex;align-items:center;gap:5px;padding:4px 11px;border-radius:30px;font-size:12.5px;font-style:italic;}\n.mc-tag-ok{background:rgba(200,230,255,.55);border:1px solid rgba(80,150,220,.22);color:hsl(43, 89%, 38%);}\n.mc-tag-no{background:rgba(220,238,255,.55);border:1px solid rgba(80,140,210,.25);color:hsl(43, 89%, 38%);}\n.mc-tag-white{background:rgba(235,235,240,.70);border:1px solid rgba(160,170,190,.30);color:#3a4a5a;}\n.mc-section-label{\n  font-family:'Cinzel',serif;font-size:10.5px;letter-spacing:.12em;\n  text-transform:uppercase;color:hsl(43, 99%, 70%);margin:12px 0 6px;\n}\n.mc-note{\n  margin-top:11px;padding:10px 13px;border-radius:14px;\n  background:rgba(180,215,250,.18);border:1px solid rgba(100,160,220,.22);\n  font-size:13.5px;color:hsl(43, 89%, 38%);font-style:italic;line-height:1.55;\n}\n.mc-confirm{\n  position:relative;z-index:2;margin-top:14px;\n  border-radius:20px;\n  background:linear-gradient(145deg,rgba(255,255,255,.90),rgba(210,235,255,.55));\n  border:1px solid rgba(100,160,220,.28);\n  padding:16px 16px 15px;\n  box-shadow:0 2px 18px rgba(60,120,200,.10);\n  animation:mcFade .6s .38s ease both;\n}\n.mc-confirm-top{display:flex;align-items:center;gap:12px;margin-bottom:11px;}\n.mc-confirm-icon{\n  width:46px;height:46px;border-radius:14px;flex-shrink:0;\n  display:flex;align-items:center;justify-content:center;\n  background:linear-gradient(145deg,hsl(43, 99%, 70%),hsl(43, 89%, 38%));\n  color:#fff;font-size:18px;box-shadow:0 2px 12px rgba(30,90,180,.28);\n}\n.mc-confirm-title{font-family:'Cinzel',serif;font-size:12px;letter-spacing:.13em;text-transform:uppercase;color:hsl(43, 89%, 38%);margin-bottom:2px;}\n.mc-confirm-sub{font-size:13px;color:hsl(43, 99%, 70%);font-style:italic;}\n.mc-date-badge{\n  display:flex;align-items:center;justify-content:center;gap:10px;\n  background:linear-gradient(145deg,hsl(43, 25%, 95%),hsl(43, 99%, 70%));\n  border:1px solid rgba(100,160,220,.30);\n  border-radius:14px;padding:11px 14px;\n  font-family:'Cinzel',serif;font-size:15px;\n  color:hsl(43, 89%, 38%);letter-spacing:.10em;\n  box-shadow:inset 0 0 10px rgba(255,255,255,.40);\n}\n.mc-date-badge i{color:hsl(43, 99%, 70%);font-size:16px;}\n.mc-confirm-note{\n  margin-top:10px;font-size:13.5px;color:hsl(43, 79%, 20%);\n  font-style:italic;line-height:1.55;text-align:center;\n}\n.lp-star{position:absolute;color:rgba(120,170,230,.50);font-size:11px;animation:starAnim 3s ease-in-out infinite;pointer-events:none;}\n@keyframes starAnim{0%,100%{opacity:0;transform:scale(0);}50%{opacity:1;transform:scale(1);}}\n</style>\n<svg style=\"position:absolute;top:-14px;left:-14px;width:168px;height:168px;opacity:.13;pointer-events:none;z-index:1;\" viewBox=\"0 0 168 168\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(43, 99%, 70%)\" transform=\"rotate(0 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(43, 99%, 70%)\" transform=\"rotate(45 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(43, 99%, 70%)\" transform=\"rotate(90 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(43, 99%, 70%)\" transform=\"rotate(135 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(43, 99%, 70%)\" transform=\"rotate(180 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(43, 99%, 70%)\" transform=\"rotate(225 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(43, 99%, 70%)\" transform=\"rotate(270 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(43, 99%, 70%)\" transform=\"rotate(315 84 84)\"/>\n    <circle cx=\"84\" cy=\"84\" r=\"13\" fill=\"hsl(43, 25%, 95%)\"/>\n  </g>\n</svg>\n<svg style=\"position:absolute;bottom:-10px;right:-10px;width:128px;height:128px;opacity:.11;pointer-events:none;z-index:1;\" viewBox=\"0 0 128 128\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(43, 99%, 70%)\" transform=\"rotate(0 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(43, 25%, 95%)\" transform=\"rotate(60 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(43, 99%, 70%)\" transform=\"rotate(120 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(43, 25%, 95%)\" transform=\"rotate(180 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(43, 99%, 70%)\" transform=\"rotate(240 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(43, 25%, 95%)\" transform=\"rotate(300 64 64)\"/>\n    <circle cx=\"64\" cy=\"64\" r=\"10\" fill=\"hsl(43, 20%, 98%)\"/>\n  </g>\n</svg>\n<svg style=\"position:absolute;top:44%;left:-6px;width:70px;height:70px;opacity:.10;pointer-events:none;z-index:1;\" viewBox=\"0 0 70 70\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(43, 99%, 70%)\" transform=\"rotate(0 35 35)\"/>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(43, 99%, 70%)\" transform=\"rotate(72 35 35)\"/>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(43, 99%, 70%)\" transform=\"rotate(144 35 35)\"/>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(43, 99%, 70%)\" transform=\"rotate(216 35 35)\"/>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(43, 99%, 70%)\" transform=\"rotate(288 35 35)\"/>\n    <circle cx=\"35\" cy=\"35\" r=\"6\" fill=\"hsl(43, 25%, 95%)\"/>\n  </g>\n</svg>\n<i class=\"lp-star\" style=\"top:9%;left:8%;animation-delay:0s;\">✦</i>\n<i class=\"lp-star\" style=\"top:17%;right:13%;animation-delay:1.1s;\">✦</i>\n<i class=\"lp-star\" style=\"bottom:14%;left:14%;animation-delay:2s;\">✦</i>\n<i class=\"lp-star\" style=\"bottom:7%;right:11%;animation-delay:.6s;\">✦</i>\n<i class=\"lp-star\" style=\"top:38%;right:7%;animation-delay:1.6s;\">✦</i>\n<div class=\"mc-wrap\">\n  <div class=\"mc-header\">\n    <span class=\"mc-crown\">✧</span>\n    <h2>Manual da Convidada</h2>\n    <p>Uma noite para florescer com sofisticação, elegância e delicadeza</p>\n  </div>\n  <div class=\"mc-sub\">Celebração de 15 anos de Laura</div>\n  <div class=\"mc-grid\">\n    <div class=\"mc-card\" style=\"animation-delay:.04s\">\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\"><i class=\"fa-solid fa-heart\"></i></div>\n        <div>\n          <div class=\"mc-title\">Uma noite especial</div>\n          <div class=\"mc-text\">Laura celebra seus <span class=\"mc-highlight\">15 anos</span> em uma noite inspirada no tema <span class=\"mc-highlight\">Florescer</span>.</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"mc-card\" style=\"animation-delay:.09s\">\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\" style=\"background:linear-gradient(145deg,#f3d8dc,#c79a62);\"><i class=\"fa-solid fa-user-tie\"></i></div>\n        <div>\n          <div class=\"mc-title\">Dress Code</div>\n          <div class=\"mc-text\"><span class=\"mc-highlight\">Traje fino</span></div>\n        </div>\n      </div>\n      <div class=\"mc-divider\"></div>\n      <div class=\"mc-body\">\n        <div class=\"mc-text\">Vista-se com elegância para acompanhar o encanto desta celebração.</div>\n        <div class=\"mc-section-label\">Paleta proibida</div>\n        <div class=\"mc-tag-row\">\n          <span class=\"mc-tag mc-tag-no\"><i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i>Rose</span>\n          <span class=\"mc-tag mc-tag-no\"><i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i>Dourado</span>\n          <span class=\"mc-tag mc-tag-no\"><i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i>Fúcsia</span>\n          <span class=\"mc-tag mc-tag-no\"><i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i>Bege</span>\n          <span class=\"mc-tag mc-tag-no\"><i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i>Rosa</span>\n          <span class=\"mc-tag mc-tag-no\"><i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i>Pink</span>\n        </div>\n        <div class=\"mc-note\" style=\"margin-top:12px;\">As cores Rose, dourado e detalhes em pink fazem parte da identidade visual da festa. Por isso, não use essas tonalidades no traje.</div>\n      </div>\n    </div>\n    <div class=\"mc-card\" style=\"animation-delay:.14s\">\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\" style=\"background:linear-gradient(145deg,#f4cbd3,#d88399);\"><i class=\"fa-solid fa-palette\"></i></div>\n        <div>\n          <div class=\"mc-title\">Cores da celebração</div>\n          <div class=\"mc-text\">A decoração seguirá uma paleta <span class=\"mc-highlight\">Rose e dourada</span>, com <span class=\"mc-highlight\">poucos detalhes em pink</span>.</div>\n        </div>\n      </div>\n      <div class=\"mc-divider\"></div>\n      <div class=\"mc-body\">\n        <div class=\"mc-text\">Escolha seu traje respeitando a paleta reservada para a identidade visual da debutante.</div>\n      </div>\n    </div>\n    <div class=\"mc-card\" style=\"animation-delay:.19s\">\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\" style=\"background:linear-gradient(145deg,#f1d9dc,#d3ae73);\"><i class=\"fa-solid fa-clock\"></i></div>\n        <div>\n          <div class=\"mc-title\">Pontualidade</div>\n          <div class=\"mc-text\">O início da celebração será às <span class=\"mc-highlight\">18:30</span>.</div>\n        </div>\n      </div>\n      <div class=\"mc-divider\"></div>\n      <div class=\"mc-body\">\n        <div class=\"mc-text\">Programe-se para chegar no horário e aproveitar cada momento da noite de Laura.</div>\n      </div>\n    </div>\n  </div>\n</div>"
    }
  ],
  "upsell": {
    "galeriaFotos": true,
    "saveTheDate": false,
    "lembrete": false
  },
  "config": {
    "exibirMarcaDagua": false,
    "cronometro": true,
    "buttonColor": "#b8860b",
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
    "text": "- Personalização: Rose é dourado detalhes pouco no pink\n\n🎉 *DADOS DO EVENTO*\n- Tipo de evento: 15 anos\n- Nome: Laura\n- Idade: 15\n- Data: 2026-11-01\n- Horário de início: 18:30\n- Local: Comedoria escritório\n- Tema: florescer  \n- Cores: Rose é dourado detalhes pouco no pink\nFrase: Salmos 92:12.13\n\n✨ *ESCOLHAS DO CONVITE*\n- Tipo de abertura: Abertura Longa\n- Foto na abertura: Sim\n- Música: Usar música do modelo\n- Confirmação de presença: Direto no WhatsApp (+5582999573874)\n- Presentes: Lista Inteligente\n- Cronômetro: Sim\n- Galeria de Fotos: Sim\n\nManual do Convidado: Dress Code trajes fino paleta proibida Rose, dourado, fúcsia, bege, rosa e pink\n\n📝 *OBSERVAÇÕES*\nMuita sofisticação e elegância sem perder a delicadeza",
    "usedAt": "2026-07-22T17:06:14.256Z",
    "source": "fill-fields",
    "buttonDecisions": {
      "manualComConteudo": true,
      "presentesComConteudo": false,
      "manualPremium": false,
      "presentesPremium": false,
      "manualResumo": "Dress code: trajes finos. Paleta proibida: rose, dourado, fúcsia, bege, rosa e pink.",
      "presentesResumo": ""
    }
  }
};
