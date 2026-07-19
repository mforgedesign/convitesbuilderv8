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
    "musica": "assets/music_1784467626915.mp3",
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
    "capa": "assets/cover_1784467626915.png",
    "cartao": "assets/cartao_gen_1784467626915.jpg",
    "aberturaSlides": [
      "assets/slide1_1784467626915.mp4",
      "assets/slide2_1784467626915.mp4",
      "assets/slide3_1784467626915.mp4",
      "assets/slide4_1784467626915.mp4",
      "assets/slide5_1784467626915.mp4"
    ],
    "aberturaSlidesMeta": [
      {
        "filePath": "assets/slide1_1784467626915.mp4",
        "label": "Abertura (Vídeo)",
        "type": "video"
      },
      {
        "filePath": "assets/slide2_1784467626915.mp4",
        "label": "Slide 1",
        "type": "video"
      },
      {
        "filePath": "assets/slide3_1784467626915.mp4",
        "label": "Slide 2",
        "type": "video"
      },
      {
        "filePath": "assets/slide4_1784467626915.mp4",
        "label": "Slide 3",
        "type": "video"
      },
      {
        "filePath": "assets/slide5_1784467626915.mp4",
        "label": "Slide 4",
        "type": "video"
      }
    ],
    "folhaVazia": "assets/folha_vazia_1784467626915.png",
    "folhaPreenchida": "assets/folha_1784467626915.jpg",
    "musica": "assets/music_1784467626915.mp3",
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
    "popupImagensPorBotao": {
      "3": "assets/popup_presentes_premium_referencia_1784467626915.jpg"
    }
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
      "titulo": "Guia dos Convidados",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<div class=\"lp-manual\">\n  <style>\n    .lp-manual{\n      position:relative;\n      overflow:hidden;\n      padding:28px 18px;\n      border-radius:28px;\n      background:\n        radial-gradient(circle at top left, rgba(255,255,255,.95) 0%, rgba(255,255,255,.78) 22%, rgba(255,255,255,.18) 100%),\n        linear-gradient(135deg,#f7c7dc 0%, #d7e9fb 42%, #ffffff 100%);\n      box-shadow:0 22px 60px rgba(42,96,176,.18);\n      color:#2a3b5f;\n      font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;\n    }\n    .lp-manual:before,\n    .lp-manual:after{\n      content:\"\";\n      position:absolute;\n      inset:auto;\n      border-radius:999px;\n      pointer-events:none;\n      filter:blur(2px);\n      opacity:.55;\n    }\n    .lp-manual:before{\n      width:220px;height:220px;left:-70px;top:-70px;\n      background:radial-gradient(circle, rgba(255,255,255,.95) 0%, rgba(255,255,255,0) 72%);\n    }\n    .lp-manual:after{\n      width:260px;height:260px;right:-110px;bottom:-120px;\n      background:radial-gradient(circle, rgba(255,255,255,.9) 0%, rgba(255,255,255,0) 70%);\n    }\n    .lp-star{\n      position:absolute;\n      z-index:0;\n      width:12px;height:12px;\n      color:#fff;\n      opacity:.9;\n      text-shadow:0 0 12px rgba(255,255,255,.95), 0 0 22px rgba(255,255,255,.8);\n      animation:lpTwinkle 2.8s ease-in-out infinite;\n      user-select:none;\n    }\n    .lp-star:before{content:\"✦\";font-size:12px;display:block;line-height:1;}\n    @keyframes lpTwinkle{\n      0%,100%{transform:scale(.85) rotate(0deg);opacity:.55}\n      50%{transform:scale(1.15) rotate(18deg);opacity:1}\n    }\n    .mc-wrap{\n      position:relative;\n      z-index:1;\n      max-width:920px;\n      margin:0 auto;\n      padding:18px;\n      border-radius:24px;\n      background:linear-gradient(180deg, rgba(255,255,255,.82), rgba(255,255,255,.68));\n      border:1px solid rgba(255,255,255,.72);\n      backdrop-filter:blur(10px);\n      box-shadow:inset 0 1px 0 rgba(255,255,255,.7);\n    }\n    .mc-header{\n      text-align:center;\n      padding:10px 10px 18px;\n    }\n    .mc-crown{\n      display:inline-flex;\n      align-items:center;\n      justify-content:center;\n      gap:8px;\n      padding:8px 14px;\n      border-radius:999px;\n      background:linear-gradient(135deg,#f7d3e3,#dbeafe);\n      color:#8a3f6e;\n      font-size:12px;\n      font-weight:800;\n      letter-spacing:.14em;\n      text-transform:uppercase;\n      box-shadow:0 10px 24px rgba(138,63,110,.12);\n    }\n    .mc-crown:before{content:\"✦\";color:#2a60b0}\n    .mc-header h2{\n      margin:14px 0 8px;\n      font-size:clamp(24px,4vw,38px);\n      line-height:1.05;\n      color:#21406f;\n      letter-spacing:-.03em;\n    }\n    .mc-header p{\n      margin:0 auto;\n      max-width:760px;\n      font-size:15px;\n      line-height:1.7;\n      color:#5f6f8f;\n    }\n    .mc-sub{\n      margin:0 auto 18px;\n      max-width:820px;\n      text-align:center;\n      padding:14px 16px;\n      border-radius:18px;\n      background:linear-gradient(135deg, rgba(247,211,227,.72), rgba(215,233,251,.72));\n      border:1px solid rgba(255,255,255,.8);\n      color:#6d3c5a;\n      font-weight:700;\n      line-height:1.6;\n      box-shadow:0 10px 24px rgba(42,96,176,.08);\n    }\n    .mc-grid{\n      display:grid;\n      grid-template-columns:1fr;\n      gap:14px;\n    }\n    .mc-card,.mc-confirm{\n      border-radius:22px;\n      background:linear-gradient(180deg, rgba(255,255,255,.92), rgba(255,255,255,.78));\n      border:1px solid rgba(255,255,255,.9);\n      box-shadow:0 14px 30px rgba(42,96,176,.10);\n      overflow:hidden;\n    }\n    .mc-card{\n      padding:16px 16px 14px;\n      animation:lpRise .7s ease both;\n    }\n    @keyframes lpRise{\n      from{transform:translateY(10px);opacity:0}\n      to{transform:translateY(0);opacity:1}\n    }\n    .mc-top{\n      display:flex;\n      gap:14px;\n      align-items:flex-start;\n    }\n    .mc-icon,.mc-confirm-icon{\n      flex:0 0 auto;\n      width:46px;height:46px;\n      border-radius:16px;\n      display:grid;\n      place-items:center;\n      color:#fff;\n      background:linear-gradient(145deg,#f7b8d1,#7ab0e8);\n      box-shadow:0 10px 18px rgba(42,96,176,.16);\n    }\n    .mc-icon i,.mc-confirm-icon i{font-size:18px}\n    .mc-title,.mc-confirm-title{\n      font-size:18px;\n      font-weight:900;\n      color:#21406f;\n      margin:2px 0 6px;\n      letter-spacing:-.02em;\n    }\n    .mc-text,.mc-confirm-sub,.mc-confirm-note{\n      font-size:14px;\n      line-height:1.7;\n      color:#5d6d8b;\n    }\n    .mc-highlight{\n      display:inline-block;\n      padding:2px 8px;\n      margin:0 4px;\n      border-radius:999px;\n      background:linear-gradient(135deg,#f7d3e3,#dbeafe);\n      color:#8a3f6e;\n      font-weight:800;\n      white-space:nowrap;\n    }\n    .mc-divider{\n      height:1px;\n      margin:14px 0;\n      background:linear-gradient(90deg, rgba(122,176,232,0), rgba(122,176,232,.35), rgba(247,184,209,.35), rgba(247,184,209,0));\n    }\n    .mc-body{padding-left:60px}\n    .mc-tag-row{\n      display:flex;\n      flex-wrap:wrap;\n      gap:8px;\n      margin-top:10px;\n    }\n    .mc-tag{\n      display:inline-flex;\n      align-items:center;\n      gap:6px;\n      padding:8px 11px;\n      border-radius:999px;\n      font-size:12px;\n      font-weight:800;\n      line-height:1;\n      border:1px solid transparent;\n    }\n    .mc-tag-ok{\n      background:linear-gradient(135deg,#e8f4ff,#f7dff0);\n      color:#2a60b0;\n      border-color:rgba(42,96,176,.12);\n    }\n    .mc-tag-no{\n      background:linear-gradient(135deg,#fff2f7,#eef5ff);\n      color:#8a3f6e;\n      border-color:rgba(138,63,110,.12);\n    }\n    .mc-tag-white{\n      background:#fff;\n      color:#5d6d8b;\n      border-color:rgba(122,176,232,.18);\n    }\n    .mc-section-label{\n      margin-top:10px;\n      font-size:12px;\n      font-weight:900;\n      letter-spacing:.12em;\n      text-transform:uppercase;\n      color:#8a3f6e;\n    }\n    .mc-note{\n      margin-top:12px;\n      padding:12px 14px;\n      border-radius:16px;\n      background:linear-gradient(135deg, rgba(247,211,227,.55), rgba(215,233,251,.55));\n      color:#6d3c5a;\n      font-size:13px;\n      line-height:1.65;\n      border:1px solid rgba(255,255,255,.8);\n    }\n    .mc-confirm{\n      margin-top:16px;\n      padding:16px;\n      background:linear-gradient(135deg, rgba(255,255,255,.94), rgba(247,211,227,.55));\n    }\n    .mc-confirm-top{\n      display:flex;\n      gap:14px;\n      align-items:flex-start;\n    }\n    .mc-date-badge{\n      margin-top:14px;\n      display:inline-flex;\n      align-items:center;\n      gap:8px;\n      flex-wrap:wrap;\n      padding:10px 14px;\n      border-radius:999px;\n      background:linear-gradient(135deg,#dbeafe,#f7d3e3);\n      color:#21406f;\n      font-weight:800;\n      box-shadow:0 10px 18px rgba(42,96,176,.10);\n    }\n    .mc-date-badge i{color:#8a3f6e}\n    .mc-date-badge strong{color:#8a3f6e}\n    @media (min-width:760px){\n      .mc-grid{grid-template-columns:1fr 1fr}\n      .mc-card:last-child{grid-column:1 / -1}\n    }\n  </style>\n\n  <i class=\"lp-star\" style=\"top:9%;left:8%;animation-delay:0s;\"></i>\n  <i class=\"lp-star\" style=\"top:17%;right:13%;animation-delay:1.1s;\"></i>\n  <i class=\"lp-star\" style=\"bottom:14%;left:14%;animation-delay:2s;\"></i>\n  <i class=\"lp-star\" style=\"bottom:7%;right:11%;animation-delay:.6s;\"></i>\n  <i class=\"lp-star\" style=\"top:38%;right:7%;animation-delay:1.6s;\"></i>\n\n  <div class=\"mc-wrap\">\n    <div class=\"mc-header\">\n      <span class=\"mc-crown\">Manual do Convidado</span>\n      <h2>Guia dos Convidados</h2>\n      <p>Chegue com antecedência, registre os momentos pelo QR e confirme sua presença no prazo informado.</p>\n    </div>\n\n    <div class=\"mc-sub\">Chegar com antecedência para aproveitar a festa. Tirem muitas fotos e compartilhem nossos momentos pelo QR. Confirmar presença até o dia 25/10/2026.</div>\n\n    <div class=\"mc-grid\">\n      <div class=\"mc-card\" style=\"animation-delay:.04s\">\n        <div class=\"mc-top\">\n          <div class=\"mc-icon\"><i class=\"fa-solid fa-clock\"></i></div>\n          <div>\n            <div class=\"mc-title\">Pontualidade</div>\n            <div class=\"mc-text\">Chegar com antecedência para aproveitar a festa.</div>\n          </div>\n        </div>\n      </div>\n\n      \n\n      <div class=\"mc-card\" style=\"animation-delay:.09s\">\n        <div class=\"mc-top\">\n          <div class=\"mc-icon\" style=\"background:linear-gradient(145deg,#f7b8d1,#7ab0e8);\"><i class=\"fa-solid fa-camera-retro\"></i></div>\n          <div>\n            <div class=\"mc-title\">Fotos e QR</div>\n            <div class=\"mc-text\">Tirem muitas fotos e compartilhem nossos momentos pelo QR.</div>\n          </div>\n        </div>\n        <div class=\"mc-divider\"></div>\n        <div class=\"mc-body\">\n          <div class=\"mc-text\">Registre os melhores momentos com carinho e deixe a festa ainda mais inesquecível.</div>\n        </div>\n      </div>\n\n      \n\n      <div class=\"mc-card\" style=\"animation-delay:.19s\">\n        <div class=\"mc-top\">\n          <div class=\"mc-icon\" style=\"background:linear-gradient(145deg,#d7e9fb,#f7b8d1);\"><i class=\"fa-solid fa-calendar-check\"></i></div>\n          <div>\n            <div class=\"mc-title\">Confirmação de presença</div>\n            <div class=\"mc-text\">Confirmar presença até o dia 25/10/2026.</div>\n          </div>\n        </div>\n        <div class=\"mc-divider\"></div>\n        <div class=\"mc-body\">\n          <div class=\"mc-text\">Sua confirmação ajuda a organizar tudo com muito carinho para receber cada convidado da melhor forma.</div>\n        </div>\n      </div>\n    \n    </div>\n\n    <div class=\"mc-confirm\">\n      <div class=\"mc-confirm-top\">\n        <div class=\"mc-confirm-icon\"><i class=\"fa-solid fa-heart\"></i></div>\n        <div>\n          <div class=\"mc-confirm-title\">Confirmação de presença</div>\n          <div class=\"mc-confirm-sub\">Confirmar presença até o dia 25/10/2026.</div>\n        </div>\n      </div>\n      <div class=\"mc-date-badge\">\n        <i class=\"fa-solid fa-calendar-days\"></i>\n        Confirmar presença até\n        <strong>25/10/2026</strong>\n      </div>\n      <div class=\"mc-confirm-note\">Tirem muitas fotos e compartilhem nossos momentos pelo QR.</div>\n    </div>\n  </div>\n</div>"
    },
    {
      "tipoAcao": "PopupImagem",
      "tipoVisual": "css",
      "titulo": "Sugestões de Presentes",
      "icone": "fa-solid fa-gift",
      "conteudo": "assets/popup_presentes_premium_referencia_1784467626915.jpg"
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
