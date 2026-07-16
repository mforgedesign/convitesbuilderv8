window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Leticia",
    "idade": 16,
    "data": "2026-08-29",
    "hora": "19:00",
    "horaTermino": "",
    "endereco": "Sítio Luiza R. Carmelino de Jesus, 650 - Bairro do Peninha, Arujá",
    "frase1": "",
    "frase2": "",
    "frase3": ""
  },
  "convite": {
    "paletaCores": "",
    "tema": "",
    "musica": "assets/music_1784166987045.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Leticia16Anos",
    "seo": {
      "pageTitle": "Convite Especial",
      "ogTitle": "Você recebeu um convite especial!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1784166987045.jpg",
    "cartao": "",
    "aberturaSlides": [
      "assets/slide1_1784166987045.mp4"
    ],
    "aberturaSlidesMeta": [
      {
        "filePath": "assets/slide1_1784166987045.mp4",
        "label": "Slide 1",
        "type": "video"
      }
    ],
    "folhaVazia": "assets/folha_vazia_1784166987045.jpg",
    "folhaPreenchida": "assets/folha_1784166987045.png",
    "musica": "assets/music_1784166987045.mp3",
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
      "conteudo": "https://maps.app.goo.gl/VUvMSFpXDncVKx7KA"
    },
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Sugestão de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "https://sites.google.com/view/site-de-lista-de-presente/in%C3%ADcio"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap\" rel=\"stylesheet\">\n\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n*{\n  box-sizing:border-box;\n  margin:0;\n  padding:0;\n}\n\n.mc-wrap{\n  position:relative;\n  padding:34px 18px 38px;\n  overflow:hidden;\n  font-family:'Cormorant Garamond',serif;\n  background:\n    radial-gradient(circle at top left,rgba(255,179,207,.28),transparent 34%),\n    radial-gradient(circle at bottom right,rgba(209,66,125,.15),transparent 36%),\n    linear-gradient(\n      160deg,\n      #fffafd 0%,\n      #fce7f0 45%,\n      #fff8fb 100%\n    );\n}\n\n.mc-header{\n  position:relative;\n  z-index:2;\n  text-align:center;\n  margin-bottom:10px;\n}\n\n.mc-crown{\n  color:#d94e88;\n  font-size:25px;\n  margin-bottom:7px;\n  display:block;\n  animation:crownFloat 4s ease-in-out infinite;\n}\n\n@keyframes crownFloat{\n  0%,100%{\n    transform:translateY(0);\n  }\n\n  50%{\n    transform:translateY(-5px);\n  }\n}\n\n.mc-header h2{\n  font-family:'Cinzel',serif;\n  font-size:22px;\n  color:#801d4b;\n  letter-spacing:.14em;\n  margin-bottom:5px;\n}\n\n.mc-header p{\n  color:#bb4779;\n  font-size:15px;\n  font-style:italic;\n  line-height:1.4;\n}\n\n.mc-sub{\n  position:relative;\n  z-index:2;\n  text-align:center;\n  margin-bottom:24px;\n  font-size:12px;\n  color:#ce5e8e;\n  font-family:'Cinzel',serif;\n  letter-spacing:.12em;\n  text-transform:uppercase;\n}\n\n.mc-sub::before,\n.mc-sub::after{\n  content:'';\n  display:inline-block;\n  width:38px;\n  height:1px;\n  vertical-align:middle;\n  margin:0 9px;\n}\n\n.mc-sub::before{\n  background:linear-gradient(\n    to right,\n    transparent,\n    rgba(206,94,142,.55)\n  );\n}\n\n.mc-sub::after{\n  background:linear-gradient(\n    to left,\n    transparent,\n    rgba(206,94,142,.55)\n  );\n}\n\n.mc-grid{\n  display:grid;\n  gap:12px;\n  position:relative;\n  z-index:2;\n}\n\n.mc-card{\n  border-radius:20px;\n  background:rgba(255,255,255,.84);\n  border:1px solid rgba(210,85,139,.20);\n  box-shadow:0 5px 20px rgba(136,35,80,.08);\n  overflow:hidden;\n  animation:mcFade .6s ease both;\n  backdrop-filter:blur(5px);\n  -webkit-backdrop-filter:blur(5px);\n}\n\n@keyframes mcFade{\n  from{\n    opacity:0;\n    transform:translateY(11px);\n  }\n\n  to{\n    opacity:1;\n    transform:translateY(0);\n  }\n}\n\n.mc-top{\n  display:flex;\n  align-items:center;\n  gap:13px;\n  padding:15px 15px 13px;\n}\n\n.mc-icon{\n  width:46px;\n  height:46px;\n  border-radius:14px;\n  flex-shrink:0;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  background:linear-gradient(145deg,#ef86b3,#bd3d75);\n  color:#fff;\n  font-size:18px;\n  box-shadow:0 4px 12px rgba(184,54,111,.24);\n}\n\n.mc-title{\n  font-family:'Cinzel',serif;\n  font-size:11.5px;\n  letter-spacing:.14em;\n  text-transform:uppercase;\n  color:#c64a81;\n  margin-bottom:3px;\n}\n\n.mc-text{\n  font-size:15.5px;\n  line-height:1.55;\n  color:#4e2034;\n}\n\n.mc-highlight{\n  color:#861d4c;\n  font-weight:600;\n}\n\n.mc-divider{\n  height:1px;\n  margin:0 15px;\n  background:linear-gradient(\n    to right,\n    transparent,\n    rgba(203,79,132,.25),\n    transparent\n  );\n}\n\n.mc-body{\n  padding:11px 15px 15px;\n}\n\n.mc-alert{\n  position:relative;\n  z-index:2;\n  margin-top:14px;\n  border-radius:20px;\n  background:linear-gradient(\n    145deg,\n    rgba(255,255,255,.94),\n    rgba(249,209,226,.72)\n  );\n  border:1px solid rgba(190,55,112,.30);\n  padding:16px;\n  box-shadow:0 5px 22px rgba(140,35,81,.11);\n  animation:mcFade .6s .18s ease both;\n}\n\n.mc-alert-top{\n  display:flex;\n  align-items:center;\n  gap:12px;\n  margin-bottom:11px;\n}\n\n.mc-alert-icon{\n  width:46px;\n  height:46px;\n  border-radius:14px;\n  flex-shrink:0;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  background:linear-gradient(145deg,#de6598,#841f4d);\n  color:#fff;\n  font-size:18px;\n  box-shadow:0 4px 13px rgba(132,31,77,.28);\n}\n\n.mc-alert-title{\n  font-family:'Cinzel',serif;\n  font-size:12px;\n  letter-spacing:.13em;\n  text-transform:uppercase;\n  color:#801d4b;\n  margin-bottom:2px;\n}\n\n.mc-alert-sub{\n  font-size:13.5px;\n  color:#bb4779;\n  font-style:italic;\n}\n\n.mc-alert-badge{\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  gap:10px;\n  text-align:center;\n  background:linear-gradient(145deg,#fff7fa,#eda2c2);\n  border:1px solid rgba(190,55,112,.27);\n  border-radius:14px;\n  padding:12px 14px;\n  font-family:'Cinzel',serif;\n  font-size:13px;\n  line-height:1.45;\n  color:#741a43;\n  letter-spacing:.07em;\n  box-shadow:inset 0 0 11px rgba(255,255,255,.50);\n}\n\n.mc-alert-badge i{\n  color:#a92e63;\n  font-size:17px;\n  flex-shrink:0;\n}\n\n.mc-alert-note{\n  margin-top:10px;\n  font-size:13.8px;\n  color:#532037;\n  font-style:italic;\n  line-height:1.55;\n  text-align:center;\n}\n\n.lp-star{\n  position:absolute;\n  color:rgba(198,74,129,.48);\n  font-size:11px;\n  animation:starAnim 3s ease-in-out infinite;\n  pointer-events:none;\n}\n\n@keyframes starAnim{\n  0%,100%{\n    opacity:0;\n    transform:scale(0);\n  }\n\n  50%{\n    opacity:1;\n    transform:scale(1);\n  }\n}\n\n@media(max-width:480px){\n  .mc-wrap{\n    padding:30px 14px 34px;\n  }\n\n  .mc-header h2{\n    font-size:19px;\n  }\n\n  .mc-sub::before,\n  .mc-sub::after{\n    width:24px;\n    margin:0 6px;\n  }\n\n  .mc-text{\n    font-size:15px;\n  }\n\n  .mc-alert-badge{\n    font-size:12px;\n  }\n}\n</style>\n\n<div class=\"mc-wrap\">\n\n  <svg\n    style=\"position:absolute;top:-20px;left:-20px;width:175px;height:175px;opacity:.12;pointer-events:none;z-index:1;\"\n    viewBox=\"0 0 168 168\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    aria-hidden=\"true\"\n  >\n    <g>\n      <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"#df78a4\" transform=\"rotate(0 84 84)\"/>\n      <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"#df78a4\" transform=\"rotate(45 84 84)\"/>\n      <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"#df78a4\" transform=\"rotate(90 84 84)\"/>\n      <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"#df78a4\" transform=\"rotate(135 84 84)\"/>\n      <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"#df78a4\" transform=\"rotate(180 84 84)\"/>\n      <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"#df78a4\" transform=\"rotate(225 84 84)\"/>\n      <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"#df78a4\" transform=\"rotate(270 84 84)\"/>\n      <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"#df78a4\" transform=\"rotate(315 84 84)\"/>\n      <circle cx=\"84\" cy=\"84\" r=\"13\" fill=\"#fff5f9\"/>\n    </g>\n  </svg>\n\n  <svg\n    style=\"position:absolute;bottom:-15px;right:-15px;width:135px;height:135px;opacity:.10;pointer-events:none;z-index:1;\"\n    viewBox=\"0 0 128 128\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    aria-hidden=\"true\"\n  >\n    <g>\n      <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"#c64a81\" transform=\"rotate(0 64 64)\"/>\n      <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"#f6bfd6\" transform=\"rotate(60 64 64)\"/>\n      <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"#c64a81\" transform=\"rotate(120 64 64)\"/>\n      <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"#f6bfd6\" transform=\"rotate(180 64 64)\"/>\n      <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"#c64a81\" transform=\"rotate(240 64 64)\"/>\n      <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"#f6bfd6\" transform=\"rotate(300 64 64)\"/>\n      <circle cx=\"64\" cy=\"64\" r=\"10\" fill=\"#fff8fb\"/>\n    </g>\n  </svg>\n\n  <i class=\"lp-star\" style=\"top:8%;left:8%;animation-delay:0s;\">✦</i>\n  <i class=\"lp-star\" style=\"top:17%;right:12%;animation-delay:1.1s;\">✧</i>\n  <i class=\"lp-star\" style=\"bottom:15%;left:13%;animation-delay:2s;\">✦</i>\n  <i class=\"lp-star\" style=\"bottom:7%;right:11%;animation-delay:.6s;\">✧</i>\n  <i class=\"lp-star\" style=\"top:43%;right:7%;animation-delay:1.6s;\">✦</i>\n\n  <div class=\"mc-header\">\n    <span class=\"mc-crown\">\n      <i class=\"fa-solid fa-gem\"></i>\n    </span>\n\n    <h2>Dress Code</h2>\n\n    <p>\n      Uma orientação especial para compor a elegância desta celebração\n    </p>\n  </div>\n\n  <div class=\"mc-sub\">\n    Sport Chique\n  </div>\n\n  <div class=\"mc-grid\">\n\n    <div class=\"mc-card\" style=\"animation-delay:.04s;\">\n      <div class=\"mc-top\">\n\n        <div class=\"mc-icon\">\n          <i class=\"fa-solid fa-shirt\"></i>\n        </div>\n\n        <div>\n          <div class=\"mc-title\">\n            Traje da celebração\n          </div>\n\n          <div class=\"mc-text\">\n            O dress code escolhido para este momento é\n            <span class=\"mc-highlight\">Sport Chique</span>.\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"mc-divider\"></div>\n\n      <div class=\"mc-body\">\n        <div class=\"mc-text\">\n          A proposta une conforto, bom gosto e elegância, sem exigir a\n          formalidade de um traje social completo.\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"mc-alert\">\n\n    <div class=\"mc-alert-top\">\n\n      <div class=\"mc-alert-icon\">\n        <i class=\"fa-solid fa-palette\"></i>\n      </div>\n\n      <div>\n        <div class=\"mc-alert-title\">\n          Orientação de cor\n        </div>\n\n        <div class=\"mc-alert-sub\">\n          Um pedido especial aos nossos convidados\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"mc-alert-badge\">\n\n      <i class=\"fa-solid fa-heart-circle-exclamation\"></i>\n\n      <span>\n        Para manter a harmonia visual da celebração, pedimos que,\n        preferencialmente, não utilizem roupas na cor rosa.\n      </span>\n\n    </div>\n\n    <div class=\"mc-alert-note\">\n      Agradecemos o carinho e a compreensão ao escolher uma cor diferente\n      para compor o seu look.\n    </div>\n\n  </div>\n\n</div>"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5511956078909",
      "rsvpConfig": {
        "exibirNome": true,
        "exibirWhatsapp": false,
        "exibirAcompanhantes": false
      }
    }
  ],
  "upsell": {
    "galeriaFotos": false,
    "saveTheDate": false,
    "lembrete": false
  },
  "config": {
    "exibirMarcaDagua": false,
    "cronometro": false,
    "buttonColor": "#f0a3ba",
    "buttonSize": 1,
    "isButtonFilled": true,
    "shadowStyle": "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
    "brilhos": {
      "esquerdo": true,
      "direito": true,
      "centro": true
    }
  }
};
