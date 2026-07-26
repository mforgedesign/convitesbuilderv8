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
    "musica": "assets/music_1785089848513.mp3",
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
    "capa": "assets/cover_1785089848513.png",
    "cartao": "assets/eccb2552_f8cc_4628_b5ea_c6f68cac7b05_1785089848513.png",
    "aberturaSlides": [
      "assets/slide1_1785089848513.mp4",
      "assets/slide2_1785089848513.jpg",
      "assets/slide3_1785089848513.mp4",
      "assets/slide4_1785089848513.jpg"
    ],
    "aberturaSlidesMeta": [
      {
        "filePath": "assets/slide1_1785089848513.mp4",
        "label": "Abertura (Vídeo)",
        "type": "video"
      },
      {
        "filePath": "assets/slide2_1785089848513.jpg",
        "label": "Convite Especial",
        "type": "image"
      },
      {
        "filePath": "assets/slide3_1785089848513.mp4",
        "label": "Cena Tematica",
        "type": "video"
      },
      {
        "filePath": "assets/slide4_1785089848513.jpg",
        "label": "Prepare-se",
        "type": "image"
      }
    ],
    "folhaVazia": "assets/folha_vazia_1785089848513.png",
    "folhaPreenchida": "assets/folha_1785089848513.png",
    "musica": "assets/music_1785089848513.mp3",
    "musicStartSec": 0,
    "musicEndSec": null,
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
    "fotos": [
      "assets/foto1_1785089848513.jpg",
      "assets/foto2_1785089848513.jpg",
      "assets/foto3_1785089848513.jpg"
    ],
    "popupImagensPorBotao": {}
  },
  "botoes": [
    {
      "id": "btn_eff95903-128a-4882-a32d-db265fb1082c",
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/XDFMNA7ujyfnr2oTA"
    },
    {
      "id": "btn_ecff1da1-a973-4069-b181-05d08bd96b10",
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
      "id": "btn_aa17a97b-a82c-499c-96b4-5ef4d4ead622",
      "tipoAcao": "Galeria",
      "tipoVisual": "css",
      "titulo": "Galeria de Fotos",
      "icone": "fa-solid fa-images",
      "conteudo": [
        "assets/foto1_1785089848513.jpg",
        "assets/foto2_1785089848513.jpg",
        "assets/foto3_1785089848513.jpg"
      ]
    },
    {
      "id": "btn_514fa79d-2100-4f63-9f41-00d3035f9eb7",
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n\n.mc-wrap{\n  position:relative;\n  padding:32px 18px 36px;\n  overflow:hidden;\n  font-family:'Cormorant Garamond',serif;\n  background:linear-gradient(\n    160deg,\n    hsl(330, 100%, 98%) 0%,\n    hsl(330, 75%, 95%) 40%,\n    hsl(330, 100%, 98%) 100%\n  );\n}\n\n.mc-header{\n  position:relative;\n  z-index:2;\n  text-align:center;\n  margin-bottom:10px;\n}\n\n.mc-crown{\n  font-size:26px;\n  margin-bottom:6px;\n  display:block;\n  animation:crownFloat 4s ease-in-out infinite;\n}\n\n@keyframes crownFloat{\n  0%,100%{transform:translateY(0);}\n  50%{transform:translateY(-5px);}\n}\n\n.mc-header h2{\n  font-family:'Cinzel',serif;\n  font-size:22px;\n  color:hsl(330, 88%, 44%);\n  letter-spacing:.15em;\n  margin-bottom:5px;\n}\n\n.mc-header p{\n  color:hsl(330, 100%, 68%);\n  font-size:14.5px;\n  font-style:italic;\n}\n\n.mc-sub{\n  position:relative;\n  z-index:2;\n  text-align:center;\n  margin-bottom:24px;\n  font-size:13px;\n  color:hsl(330, 100%, 68%);\n  font-family:'Cinzel',serif;\n  letter-spacing:.12em;\n  text-transform:uppercase;\n}\n\n.mc-sub::before,\n.mc-sub::after{\n  content:'';\n  display:inline-block;\n  width:40px;\n  height:.5px;\n  background:linear-gradient(to right,transparent,rgba(100,160,220,.40));\n  vertical-align:middle;\n  margin:0 10px;\n}\n\n.mc-sub::after{\n  background:linear-gradient(to left,transparent,rgba(100,160,220,.40));\n}\n\n.mc-grid{\n  display:grid;\n  gap:12px;\n  position:relative;\n  z-index:2;\n}\n\n.mc-card{\n  border-radius:20px;\n  background:rgba(255,255,255,.82);\n  border:1px solid rgba(100,160,220,.20);\n  box-shadow:0 2px 16px rgba(60,120,200,.07);\n  overflow:hidden;\n  animation:mcFade .6s ease both;\n}\n\n@keyframes mcFade{\n  from{\n    opacity:0;\n    transform:translateY(11px);\n  }\n  to{\n    opacity:1;\n    transform:translateY(0);\n  }\n}\n\n.mc-top{\n  display:flex;\n  align-items:center;\n  gap:13px;\n  padding:15px 15px 13px;\n}\n\n.mc-icon{\n  width:46px;\n  height:46px;\n  border-radius:14px;\n  flex-shrink:0;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  background:linear-gradient(\n    145deg,\n    hsl(330, 100%, 68%),\n    hsl(330, 100%, 68%)\n  );\n  color:#fff;\n  font-size:18px;\n  box-shadow:0 2px 10px rgba(80,140,220,.22);\n}\n\n.mc-title{\n  font-family:'Cinzel',serif;\n  font-size:11.5px;\n  letter-spacing:.14em;\n  text-transform:uppercase;\n  color:hsl(330, 100%, 68%);\n  margin-bottom:3px;\n}\n\n.mc-text{\n  font-size:15px;\n  line-height:1.6;\n  color:hsl(330, 60%, 24%);\n}\n\n.mc-divider{\n  height:.5px;\n  margin:0 15px;\n  background:linear-gradient(\n    to right,\n    transparent,\n    rgba(100,160,220,.22),\n    transparent\n  );\n}\n\n.mc-body{\n  padding:11px 15px 15px;\n}\n\n.mc-highlight{\n  color:hsl(330, 88%, 44%);\n  font-weight:600;\n}\n\n.mc-tag-row{\n  display:flex;\n  flex-wrap:wrap;\n  gap:7px;\n  margin-top:9px;\n}\n\n.mc-tag{\n  display:inline-flex;\n  align-items:center;\n  gap:5px;\n  padding:4px 11px;\n  border-radius:30px;\n  font-size:12.5px;\n  font-style:italic;\n}\n\n.mc-tag-ok{\n  background:rgba(200,230,255,.55);\n  border:1px solid rgba(80,150,220,.22);\n  color:hsl(330, 88%, 44%);\n}\n\n.mc-tag-no{\n  background:rgba(220,238,255,.55);\n  border:1px solid rgba(80,140,210,.25);\n  color:hsl(330, 88%, 44%);\n}\n\n.mc-tag-white{\n  background:rgba(235,235,240,.70);\n  border:1px solid rgba(160,170,190,.30);\n  color:#3a4a5a;\n}\n\n.mc-section-label{\n  font-family:'Cinzel',serif;\n  font-size:10.5px;\n  letter-spacing:.12em;\n  text-transform:uppercase;\n  color:hsl(330, 100%, 68%);\n  margin:12px 0 6px;\n}\n\n.mc-note{\n  margin-top:11px;\n  padding:10px 13px;\n  border-radius:14px;\n  background:rgba(180,215,250,.18);\n  border:1px solid rgba(100,160,220,.22);\n  font-size:13.5px;\n  color:hsl(330, 88%, 44%);\n  font-style:italic;\n  line-height:1.55;\n}\n\n.mc-confirm{\n  position:relative;\n  z-index:2;\n  margin-top:14px;\n  border-radius:20px;\n  background:linear-gradient(\n    145deg,\n    rgba(255,255,255,.90),\n    rgba(210,235,255,.55)\n  );\n  border:1px solid rgba(100,160,220,.28);\n  padding:16px 16px 15px;\n  box-shadow:0 2px 18px rgba(60,120,200,.10);\n  animation:mcFade .6s .38s ease both;\n}\n\n.mc-confirm-top{\n  display:flex;\n  align-items:center;\n  gap:12px;\n  margin-bottom:11px;\n}\n\n.mc-confirm-icon{\n  width:46px;\n  height:46px;\n  border-radius:14px;\n  flex-shrink:0;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  background:linear-gradient(\n    145deg,\n    hsl(330, 100%, 68%),\n    hsl(330, 88%, 44%)\n  );\n  color:#fff;\n  font-size:18px;\n  box-shadow:0 2px 12px rgba(30,90,180,.28);\n}\n\n.mc-confirm-title{\n  font-family:'Cinzel',serif;\n  font-size:12px;\n  letter-spacing:.13em;\n  text-transform:uppercase;\n  color:hsl(330, 88%, 44%);\n  margin-bottom:2px;\n}\n\n.mc-confirm-sub{\n  font-size:13px;\n  color:hsl(330, 100%, 68%);\n  font-style:italic;\n}\n\n.mc-date-badge{\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  gap:10px;\n  background:linear-gradient(\n    145deg,\n    hsl(330, 75%, 95%),\n    hsl(330, 100%, 68%)\n  );\n  border:1px solid rgba(100,160,220,.30);\n  border-radius:14px;\n  padding:11px 14px;\n  font-family:'Cinzel',serif;\n  font-size:15px;\n  color:hsl(330, 88%, 44%);\n  letter-spacing:.10em;\n  box-shadow:inset 0 0 10px rgba(255,255,255,.40);\n}\n\n.mc-date-badge i{\n  color:hsl(330, 100%, 68%);\n  font-size:16px;\n}\n\n.mc-confirm-note{\n  margin-top:10px;\n  font-size:13.5px;\n  color:hsl(330, 60%, 24%);\n  font-style:italic;\n  line-height:1.55;\n  text-align:center;\n}\n\n.lp-star{\n  position:absolute;\n  color:rgba(120,170,230,.50);\n  font-size:11px;\n  animation:starAnim 3s ease-in-out infinite;\n  pointer-events:none;\n}\n\n@keyframes starAnim{\n  0%,100%{\n    opacity:0;\n    transform:scale(0);\n  }\n  50%{\n    opacity:1;\n    transform:scale(1);\n  }\n}\n</style>\n\n<svg\n  style=\"position:absolute;top:-14px;left:-14px;width:168px;height:168px;opacity:.13;pointer-events:none;z-index:1;\"\n  viewBox=\"0 0 168 168\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n>\n  <g>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(330, 100%, 68%)\" transform=\"rotate(0 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(330, 100%, 68%)\" transform=\"rotate(45 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(330, 100%, 68%)\" transform=\"rotate(90 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(330, 100%, 68%)\" transform=\"rotate(135 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(330, 100%, 68%)\" transform=\"rotate(180 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(330, 100%, 68%)\" transform=\"rotate(225 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(330, 100%, 68%)\" transform=\"rotate(270 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(330, 100%, 68%)\" transform=\"rotate(315 84 84)\"/>\n    <circle cx=\"84\" cy=\"84\" r=\"13\" fill=\"hsl(330, 75%, 95%)\"/>\n  </g>\n</svg>\n\n<svg\n  style=\"position:absolute;bottom:-10px;right:-10px;width:128px;height:128px;opacity:.11;pointer-events:none;z-index:1;\"\n  viewBox=\"0 0 128 128\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n>\n  <g>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(330, 100%, 68%)\" transform=\"rotate(0 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(330, 75%, 95%)\" transform=\"rotate(60 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(330, 100%, 68%)\" transform=\"rotate(120 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(330, 75%, 95%)\" transform=\"rotate(180 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(330, 100%, 68%)\" transform=\"rotate(240 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(330, 75%, 95%)\" transform=\"rotate(300 64 64)\"/>\n    <circle cx=\"64\" cy=\"64\" r=\"10\" fill=\"hsl(330, 100%, 98%)\"/>\n  </g>\n</svg>\n\n<svg\n  style=\"position:absolute;top:44%;left:-6px;width:70px;height:70px;opacity:.10;pointer-events:none;z-index:1;\"\n  viewBox=\"0 0 70 70\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n>\n  <g>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(330, 100%, 68%)\" transform=\"rotate(0 35 35)\"/>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(330, 100%, 68%)\" transform=\"rotate(72 35 35)\"/>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(330, 100%, 68%)\" transform=\"rotate(144 35 35)\"/>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(330, 100%, 68%)\" transform=\"rotate(216 35 35)\"/>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(330, 100%, 68%)\" transform=\"rotate(288 35 35)\"/>\n    <circle cx=\"35\" cy=\"35\" r=\"6\" fill=\"hsl(330, 75%, 95%)\"/>\n  </g>\n</svg>\n\n<i class=\"lp-star\" style=\"top:9%;left:8%;animation-delay:0s;\">✦</i>\n<i class=\"lp-star\" style=\"top:17%;right:13%;animation-delay:1.1s;\">✦</i>\n<i class=\"lp-star\" style=\"bottom:14%;left:14%;animation-delay:2s;\">✦</i>\n<i class=\"lp-star\" style=\"bottom:7%;right:11%;animation-delay:.6s;\">✦</i>\n<i class=\"lp-star\" style=\"top:38%;right:7%;animation-delay:1.6s;\">✦</i>\n\n<div class=\"mc-wrap\">\n  <div class=\"mc-header\">\n    <span class=\"mc-crown\">✧</span>\n\n    <h2>Manual do Convidado</h2>\n\n    <p>\n      Uma noite para florescer com sofisticação, elegância e delicadeza\n    </p>\n  </div>\n\n  <div class=\"mc-sub\">\n    Celebração de 15 anos de Laura\n  </div>\n\n  <div class=\"mc-grid\">\n    <div class=\"mc-card\" style=\"animation-delay:.04s\">\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\">\n          <i class=\"fa-solid fa-heart\"></i>\n        </div>\n\n        <div>\n          <div class=\"mc-title\">\n            Uma noite especial\n          </div>\n\n          <div class=\"mc-text\">\n            Laura celebra seus\n            <span class=\"mc-highlight\">15 anos</span>\n            em uma noite inspirada no tema\n            <span class=\"mc-highlight\">Florescer</span>.\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"mc-card\" style=\"animation-delay:.09s\">\n      <div class=\"mc-top\">\n        <div\n          class=\"mc-icon\"\n          style=\"background:linear-gradient(145deg,#f3d8dc,#e04f91);\"\n        >\n          <i class=\"fa-solid fa-user-tie\"></i>\n        </div>\n\n        <div>\n          <div class=\"mc-title\">\n            Dress Code\n          </div>\n\n          <div class=\"mc-text\">\n            <span class=\"mc-highlight\">Traje fino</span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"mc-divider\"></div>\n\n      <div class=\"mc-body\">\n        <div class=\"mc-text\">\n          Vista-se com elegância para acompanhar o encanto desta celebração.\n        </div>\n\n        <div class=\"mc-section-label\">\n          Paleta proibida\n        </div>\n\n        <div class=\"mc-tag-row\">\n          <span class=\"mc-tag mc-tag-no\">\n            <i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i>\n            Rose\n          </span>\n\n          <span class=\"mc-tag mc-tag-no\">\n            <i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i>\n            Dourado\n          </span>\n\n          <span class=\"mc-tag mc-tag-no\">\n            <i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i>\n            Fúcsia\n          </span>\n\n          <span class=\"mc-tag mc-tag-no\">\n            <i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i>\n            Bege\n          </span>\n\n          <span class=\"mc-tag mc-tag-no\">\n            <i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i>\n            Rosa\n          </span>\n\n          <span class=\"mc-tag mc-tag-no\">\n            <i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i>\n            Pink\n          </span>\n        </div>\n\n        <div class=\"mc-note\" style=\"margin-top:12px;\">\n          As cores Rose, dourado e detalhes em pink fazem parte da identidade\n          visual da festa. Por isso, não use essas tonalidades no traje.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"mc-card\" style=\"animation-delay:.14s\">\n      <div class=\"mc-top\">\n        <div\n          class=\"mc-icon\"\n          style=\"background:linear-gradient(145deg,#f4cbd3,#d88399);\"\n        >\n          <i class=\"fa-solid fa-palette\"></i>\n        </div>\n\n        <div>\n          <div class=\"mc-title\">\n            Cores da celebração\n          </div>\n\n          <div class=\"mc-text\">\n            A decoração seguirá uma paleta\n            <span class=\"mc-highlight\">Rose e dourada</span>,\n            com\n            <span class=\"mc-highlight\">poucos detalhes em pink</span>.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"mc-divider\"></div>\n\n      <div class=\"mc-body\">\n        <div class=\"mc-text\">\n          Escolha seu traje respeitando a paleta reservada para a identidade\n          visual da debutante.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"mc-card\" style=\"animation-delay:.19s\">\n      <div class=\"mc-top\">\n        <div\n          class=\"mc-icon\"\n          style=\"background:linear-gradient(145deg,#f1d9dc,#e66aa5);\"\n        >\n          <i class=\"fa-solid fa-clock\"></i>\n        </div>\n\n        <div>\n          <div class=\"mc-title\">\n            Pontualidade\n          </div>\n\n          <div class=\"mc-text\">\n            O início da celebração será às\n            <span class=\"mc-highlight\">18:30</span>.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"mc-divider\"></div>\n\n      <div class=\"mc-body\">\n        <div class=\"mc-text\">\n          Programe-se para chegar no horário e aproveitar cada momento da\n          noite de Laura.\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"
    },
    {
      "id": "btn_c48a3c5c-b21c-45d9-9056-d0da51b4e723",
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Lista de Presentes",
      "icone": "fa-solid fa-gift",
      "conteudo": "https://presentes.mforge.com.br/laura-15anos-presentes/"
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
    "buttonColor": "#d9315b",
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
