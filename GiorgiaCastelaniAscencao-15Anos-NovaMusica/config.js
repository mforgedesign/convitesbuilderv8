window.config = {
  "evento": {
    "tipo": "Debutante",
    "nome": "Giorgia Castelani Ascenção",
    "idade": 15,
    "data": "2026-11-27",
    "hora": "19:40",
    "horaTermino": "",
    "endereco": "Rua Brigadeiro Jordão, 528 – Bairro Ipiranga, São Paulo",
    "frase1": "",
    "frase2": "",
    "frase3": ""
  },
  "convite": {
    "paletaCores": "Azul, rosa/pink e branco",
    "tema": "Floral Mamma Mia",
    "musica": "assets/music_1784427498710.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "GiorgiaCastelaniAscencao-15Anos-NovaMusica",
    "seo": {
      "pageTitle": "Giorgia Castelani Ascenção - 15 anos",
      "ogTitle": "Você recebeu um convite especial!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1784427498710.png",
    "cartao": "assets/cartao_gen_1784427498710.jpg",
    "aberturaSlides": [
      "assets/slide1_1784427498710.mp4",
      "assets/slide2_1784427498710.mp4",
      "assets/slide3_1784427498710.mp4",
      "assets/slide4_1784427498710.mp4",
      "assets/slide5_1784427498710.mp4"
    ],
    "aberturaSlidesMeta": [
      {
        "filePath": "assets/slide1_1784427498710.mp4",
        "label": "Abertura (Vídeo)",
        "type": "video"
      },
      {
        "filePath": "assets/slide2_1784427498710.mp4",
        "label": "Slide 1",
        "type": "video"
      },
      {
        "filePath": "assets/slide3_1784427498710.mp4",
        "label": "Slide 2",
        "type": "video"
      },
      {
        "filePath": "assets/slide4_1784427498710.mp4",
        "label": "Slide 3",
        "type": "video"
      },
      {
        "filePath": "assets/slide5_1784427498710.mp4",
        "label": "Slide 4",
        "type": "video"
      }
    ],
    "folhaVazia": "assets/folha_vazia_1784427498710.png",
    "folhaPreenchida": "assets/folha_1784427498710.jpg",
    "musica": "assets/music_1784427498710.mp3",
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
      "conteudo": "https://maps.app.goo.gl/AgJBDZXcmaTFFJ1A8"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5511980216354",
      "rsvpConfig": {
        "exibirNome": true,
        "exibirWhatsapp": false,
        "exibirAcompanhantes": false
      }
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap\" rel=\"stylesheet\">\n\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.mc-wrap {\n  position: relative;\n  padding: 32px 18px 36px;\n  overflow: hidden;\n  font-family: 'Cormorant Garamond', serif;\n  background: linear-gradient(\n    160deg,\n    hsl(334, 20%, 98%) 0%,\n    hsl(334, 25%, 95%) 40%,\n    hsl(334, 20%, 98%) 100%\n  );\n}\n\n.mc-header {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  margin-bottom: 10px;\n}\n\n.mc-crown {\n  display: block;\n  margin-bottom: 6px;\n  font-size: 26px;\n  animation: crownFloat 4s ease-in-out infinite;\n}\n\n@keyframes crownFloat {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n\n  50% {\n    transform: translateY(-5px);\n  }\n}\n\n.mc-header h2 {\n  margin-bottom: 5px;\n  font-family: 'Cinzel', serif;\n  font-size: 22px;\n  color: hsl(334, 64%, 45%);\n  letter-spacing: 0.15em;\n}\n\n.mc-header p {\n  color: hsl(334, 74%, 70%);\n  font-size: 14.5px;\n  font-style: italic;\n}\n\n.mc-sub {\n  position: relative;\n  z-index: 2;\n  margin-bottom: 24px;\n  text-align: center;\n  font-family: 'Cinzel', serif;\n  font-size: 13px;\n  color: hsl(334, 74%, 70%);\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n\n.mc-sub::before,\n.mc-sub::after {\n  content: '';\n  display: inline-block;\n  width: 40px;\n  height: 0.5px;\n  margin: 0 10px;\n  vertical-align: middle;\n  background: linear-gradient(\n    to right,\n    transparent,\n    rgba(100, 160, 220, 0.4)\n  );\n}\n\n.mc-sub::after {\n  background: linear-gradient(\n    to left,\n    transparent,\n    rgba(100, 160, 220, 0.4)\n  );\n}\n\n.mc-grid {\n  position: relative;\n  z-index: 2;\n  display: grid;\n  gap: 12px;\n}\n\n.mc-card {\n  overflow: hidden;\n  border: 1px solid rgba(100, 160, 220, 0.2);\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.82);\n  box-shadow: 0 2px 16px rgba(60, 120, 200, 0.07);\n  animation: mcFade 0.6s ease both;\n}\n\n@keyframes mcFade {\n  from {\n    opacity: 0;\n    transform: translateY(11px);\n  }\n\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.mc-top {\n  display: flex;\n  align-items: center;\n  gap: 13px;\n  padding: 15px;\n}\n\n.mc-icon {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n  width: 46px;\n  height: 46px;\n  border-radius: 14px;\n  background: linear-gradient(\n    145deg,\n    hsl(334, 74%, 70%),\n    hsl(334, 64%, 45%)\n  );\n  color: #ffffff;\n  font-size: 18px;\n  box-shadow: 0 2px 10px rgba(80, 140, 220, 0.22);\n}\n\n.mc-title {\n  margin-bottom: 3px;\n  font-family: 'Cinzel', serif;\n  font-size: 11.5px;\n  color: hsl(334, 74%, 70%);\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n\n.mc-text {\n  color: hsl(334, 54%, 40%);\n  font-size: 15px;\n  line-height: 1.6;\n}\n\n.mc-highlight {\n  color: hsl(334, 64%, 45%);\n  font-weight: 600;\n}\n\n.mc-divider {\n  height: 0.5px;\n  margin: 0 15px;\n  background: linear-gradient(\n    to right,\n    transparent,\n    rgba(100, 160, 220, 0.22),\n    transparent\n  );\n}\n\n.mc-body {\n  padding: 11px 15px 15px;\n}\n\n.mc-confirm {\n  position: relative;\n  z-index: 2;\n  margin-top: 14px;\n  padding: 16px 16px 15px;\n  border: 1px solid rgba(100, 160, 220, 0.28);\n  border-radius: 20px;\n  background: linear-gradient(\n    145deg,\n    rgba(255, 255, 255, 0.9),\n    rgba(210, 235, 255, 0.55)\n  );\n  box-shadow: 0 2px 18px rgba(60, 120, 200, 0.1);\n  animation: mcFade 0.6s 0.25s ease both;\n}\n\n.mc-confirm-top {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 11px;\n}\n\n.mc-confirm-icon {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n  width: 46px;\n  height: 46px;\n  border-radius: 14px;\n  background: linear-gradient(\n    145deg,\n    hsl(334, 74%, 70%),\n    hsl(334, 64%, 45%)\n  );\n  color: #ffffff;\n  font-size: 18px;\n  box-shadow: 0 2px 12px rgba(30, 90, 180, 0.28);\n}\n\n.mc-confirm-title {\n  margin-bottom: 2px;\n  font-family: 'Cinzel', serif;\n  font-size: 12px;\n  color: hsl(334, 64%, 45%);\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n\n.mc-confirm-sub {\n  color: hsl(334, 74%, 70%);\n  font-size: 13px;\n  font-style: italic;\n}\n\n.mc-date-badge {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 11px 14px;\n  border: 1px solid rgba(100, 160, 220, 0.3);\n  border-radius: 14px;\n  background: linear-gradient(\n    145deg,\n    hsl(334, 25%, 95%),\n    hsl(334, 74%, 70%)\n  );\n  color: hsl(334, 64%, 45%);\n  font-family: 'Cinzel', serif;\n  font-size: 15px;\n  letter-spacing: 0.1em;\n  text-align: center;\n  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.4);\n}\n\n.mc-date-badge i {\n  color: hsl(334, 64%, 45%);\n  font-size: 16px;\n}\n\n.mc-confirm-note {\n  margin-top: 10px;\n  color: hsl(334, 54%, 40%);\n  font-size: 13.5px;\n  font-style: italic;\n  line-height: 1.55;\n  text-align: center;\n}\n\n.lp-star {\n  position: absolute;\n  z-index: 1;\n  color: rgba(120, 170, 230, 0.5);\n  font-size: 11px;\n  pointer-events: none;\n  animation: starAnim 3s ease-in-out infinite;\n}\n\n@keyframes starAnim {\n  0%,\n  100% {\n    opacity: 0;\n    transform: scale(0);\n  }\n\n  50% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n</style>\n\n<div class=\"mc-wrap\">\n\n  <!-- Flor decorativa superior -->\n  <svg\n    style=\"position:absolute;top:-14px;left:-14px;width:168px;height:168px;opacity:.13;pointer-events:none;z-index:1;\"\n    viewBox=\"0 0 168 168\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <g>\n      <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(334, 74%, 70%)\" transform=\"rotate(0 84 84)\"/>\n      <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(334, 74%, 70%)\" transform=\"rotate(45 84 84)\"/>\n      <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(334, 74%, 70%)\" transform=\"rotate(90 84 84)\"/>\n      <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(334, 74%, 70%)\" transform=\"rotate(135 84 84)\"/>\n      <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(334, 74%, 70%)\" transform=\"rotate(180 84 84)\"/>\n      <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(334, 74%, 70%)\" transform=\"rotate(225 84 84)\"/>\n      <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(334, 74%, 70%)\" transform=\"rotate(270 84 84)\"/>\n      <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(334, 74%, 70%)\" transform=\"rotate(315 84 84)\"/>\n      <circle cx=\"84\" cy=\"84\" r=\"13\" fill=\"hsl(334, 25%, 95%)\"/>\n    </g>\n  </svg>\n\n  <!-- Flor decorativa inferior -->\n  <svg\n    style=\"position:absolute;bottom:-10px;right:-10px;width:128px;height:128px;opacity:.11;pointer-events:none;z-index:1;\"\n    viewBox=\"0 0 128 128\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <g>\n      <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(334, 74%, 70%)\" transform=\"rotate(0 64 64)\"/>\n      <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(334, 25%, 95%)\" transform=\"rotate(60 64 64)\"/>\n      <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(334, 74%, 70%)\" transform=\"rotate(120 64 64)\"/>\n      <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(334, 25%, 95%)\" transform=\"rotate(180 64 64)\"/>\n      <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(334, 74%, 70%)\" transform=\"rotate(240 64 64)\"/>\n      <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(334, 25%, 95%)\" transform=\"rotate(300 64 64)\"/>\n      <circle cx=\"64\" cy=\"64\" r=\"10\" fill=\"hsl(334, 20%, 98%)\"/>\n    </g>\n  </svg>\n\n  <!-- Flor decorativa lateral -->\n  <svg\n    style=\"position:absolute;top:44%;left:-6px;width:70px;height:70px;opacity:.10;pointer-events:none;z-index:1;\"\n    viewBox=\"0 0 70 70\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <g>\n      <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(334, 74%, 70%)\" transform=\"rotate(0 35 35)\"/>\n      <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(334, 74%, 70%)\" transform=\"rotate(72 35 35)\"/>\n      <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(334, 74%, 70%)\" transform=\"rotate(144 35 35)\"/>\n      <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(334, 74%, 70%)\" transform=\"rotate(216 35 35)\"/>\n      <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(334, 74%, 70%)\" transform=\"rotate(288 35 35)\"/>\n      <circle cx=\"35\" cy=\"35\" r=\"6\" fill=\"hsl(334, 25%, 95%)\"/>\n    </g>\n  </svg>\n\n  <!-- Estrelas decorativas -->\n  <i class=\"lp-star\" style=\"top:9%;left:8%;animation-delay:0s;\">✦</i>\n  <i class=\"lp-star\" style=\"top:17%;right:13%;animation-delay:1.1s;\">✧</i>\n  <i class=\"lp-star\" style=\"bottom:14%;left:14%;animation-delay:2s;\">✦</i>\n  <i class=\"lp-star\" style=\"bottom:7%;right:11%;animation-delay:.6s;\">✧</i>\n  <i class=\"lp-star\" style=\"top:38%;right:7%;animation-delay:1.6s;\">✦</i>\n\n  <div class=\"mc-header\">\n    <span class=\"mc-crown\">🎀</span>\n\n    <h2>Manual do Convidado</h2>\n\n    <p>\n      Uma celebração delicada, romântica e inesquecível para a Gigi\n    </p>\n  </div>\n\n  <div class=\"mc-sub\">\n    ✦ &nbsp; com carinho &nbsp; ✦\n  </div>\n\n  <div class=\"mc-grid\">\n\n    <!-- Boas-vindas -->\n    <div class=\"mc-card\" style=\"animation-delay:.04s;\">\n      <div class=\"mc-top\">\n\n        <div class=\"mc-icon\">\n          <i class=\"fa-solid fa-heart\"></i>\n        </div>\n\n        <div>\n          <div class=\"mc-title\">\n            Bem-vindo(a)\n          </div>\n\n          <div class=\"mc-text\">\n            Cada detalhe desta noite foi pensado com muito\n            <span class=\"mc-highlight\">amor, delicadeza e alegria</span>\n            para que você viva momentos inesquecíveis ao lado da aniversariante.\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <!-- Pontualidade -->\n    <div class=\"mc-card\" style=\"animation-delay:.10s;\">\n      <div class=\"mc-top\">\n\n        <div\n          class=\"mc-icon\"\n          style=\"background:linear-gradient(145deg,#f3b2d0,#8fc4ff);\"\n        >\n          <i class=\"fa-solid fa-clock\"></i>\n        </div>\n\n        <div>\n          <div class=\"mc-title\">\n            Pontualidade\n          </div>\n\n          <div class=\"mc-text\">\n            Sua chegada no horário é muito importante ✨\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"mc-divider\"></div>\n\n      <div class=\"mc-body\">\n        <div class=\"mc-text\">\n          Para não perder nenhum dos\n          <span class=\"mc-highlight\">momentos mágicos</span>\n          desta celebração, pedimos que você esteja presente desde o início da festa.\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <!-- Confirmação de presença -->\n  <div class=\"mc-confirm\">\n\n    <div class=\"mc-confirm-top\">\n\n      <div class=\"mc-confirm-icon\">\n        <i class=\"fa-solid fa-calendar-check\"></i>\n      </div>\n\n      <div>\n        <div class=\"mc-confirm-title\">\n          Confirme sua Presença\n        </div>\n\n        <div class=\"mc-confirm-sub\">\n          Aguardamos o seu retorno com carinho 💗\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"mc-date-badge\">\n      <i class=\"fa-solid fa-calendar-days\"></i>\n\n      <span>\n        Até o dia <strong>20/10/2026</strong>\n      </span>\n    </div>\n\n    <div class=\"mc-confirm-note\">\n      Sua confirmação é essencial para que possamos preparar tudo com carinho\n      e garantir o seu lugar nesta celebração.\n    </div>\n\n  </div>\n\n</div>"
    }
  ],
  "upsell": {
    "galeriaFotos": true,
    "saveTheDate": false,
    "lembrete": false
  },
  "config": {
    "exibirMarcaDagua": false,
    "cronometro": false,
    "buttonColor": "#d94f8b",
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
