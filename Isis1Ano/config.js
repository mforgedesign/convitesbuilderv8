window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Isis",
    "idade": 1,
    "data": "2026-08-22",
    "hora": "16:00",
    "horaTermino": "",
    "endereco": "Rua santo amando n 258 Campo Grande",
    "frase1": "(Instrução: Escreva \"Ano\" não \"Anos\")",
    "frase2": "",
    "frase3": ""
  },
  "convite": {
    "paletaCores": "Vermelho e Azul",
    "tema": "Branca de Neve",
    "musica": "assets/music_1784061843564.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Isis1Ano",
    "seo": {
      "pageTitle": "Convite de Aniversário de Isis",
      "ogTitle": "Você recebeu um convite especial!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1784061843564.jpg",
    "cartao": "assets/chatgpt_image_14_de_jul_de_2026_17_20_06_1784061843564.png",
    "aberturaSlides": [
      "assets/slide1_1784061843564.mp4"
    ],
    "aberturaSlidesMeta": [
      {
        "filePath": "assets/slide1_1784061843564.mp4",
        "label": "Abertura (Vídeo)",
        "type": "video"
      }
    ],
    "folhaVazia": "assets/folha_vazia_1784061843564.jpg",
    "folhaPreenchida": "assets/folha_1784061843564.png",
    "musica": "assets/music_1784061843564.mp3",
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
      "conteudo": "https://maps.app.goo.gl/gUWXRmh7jmKC4VTk7"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5521986439558",
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
      "conteudo": "<!DOCTYPE html>\n<html lang=\"pt-BR\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n  <style>\n    * {\n      box-sizing: border-box;\n      margin: 0;\n      padding: 0;\n    }\n\n    .confirmacao-wrap {\n      position: relative;\n      width: 100%;\n      padding: 30px 18px;\n      overflow: hidden;\n      font-family: Georgia, \"Times New Roman\", serif;\n      background: linear-gradient(\n        160deg,\n        #f8f9fc 0%,\n        #edf2f8 45%,\n        #fafbfe 100%\n      );\n    }\n\n    .confirmacao-card {\n      position: relative;\n      z-index: 2;\n      width: min(100%, 520px);\n      margin: 0 auto;\n      padding: 28px 20px;\n      overflow: hidden;\n      text-align: center;\n      border: 1px solid rgba(77, 137, 214, 0.28);\n      border-radius: 24px;\n      background: linear-gradient(\n        145deg,\n        rgba(255, 255, 255, 0.96),\n        rgba(213, 234, 255, 0.72)\n      );\n      box-shadow: 0 14px 40px rgba(32, 76, 145, 0.14);\n      animation: surgir 0.7s ease both;\n    }\n\n    .confirmacao-card::before,\n    .confirmacao-card::after {\n      content: \"✦\";\n      position: absolute;\n      color: rgba(69, 131, 211, 0.35);\n      font-size: 22px;\n      animation: brilho 3s ease-in-out infinite;\n    }\n\n    .confirmacao-card::before {\n      top: 16px;\n      left: 20px;\n    }\n\n    .confirmacao-card::after {\n      right: 22px;\n      bottom: 16px;\n      animation-delay: 1.2s;\n    }\n\n    .confirmacao-icone {\n      width: 64px;\n      height: 64px;\n      display: grid;\n      place-items: center;\n      margin: 0 auto 16px;\n      border-radius: 18px;\n      color: #ffffff;\n      background: linear-gradient(145deg, #78b1f0, #173f82);\n      box-shadow: 0 8px 22px rgba(29, 75, 145, 0.26);\n    }\n\n    .confirmacao-icone svg {\n      width: 30px;\n      height: 30px;\n      fill: currentColor;\n    }\n\n    .confirmacao-titulo {\n      margin-bottom: 7px;\n      color: #173f82;\n      font-size: clamp(20px, 5vw, 27px);\n      letter-spacing: 0.1em;\n      text-transform: uppercase;\n    }\n\n    .confirmacao-subtitulo {\n      margin-bottom: 18px;\n      color: #568fd4;\n      font-size: 16px;\n      font-style: italic;\n    }\n\n    .confirmacao-prazo {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 7px;\n      padding: 14px 16px;\n      border: 1px solid rgba(65, 129, 207, 0.3);\n      border-radius: 15px;\n      color: #173f82;\n      background: linear-gradient(145deg, #eef4fb, #a8cef5);\n      box-shadow: inset 0 0 12px rgba(255, 255, 255, 0.55);\n      font-size: clamp(17px, 4.5vw, 21px);\n      letter-spacing: 0.04em;\n    }\n\n    .confirmacao-prazo strong {\n      white-space: nowrap;\n    }\n\n    .confirmacao-texto {\n      max-width: 410px;\n      margin: 15px auto 0;\n      color: #17243a;\n      font-size: 15px;\n      font-style: italic;\n      line-height: 1.55;\n    }\n\n    @keyframes surgir {\n      from {\n        opacity: 0;\n        transform: translateY(14px);\n      }\n\n      to {\n        opacity: 1;\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes brilho {\n      0%,\n      100% {\n        opacity: 0.25;\n        transform: scale(0.8) rotate(0deg);\n      }\n\n      50% {\n        opacity: 1;\n        transform: scale(1.2) rotate(20deg);\n      }\n    }\n  </style>\n</head>\n\n<body>\n  <section class=\"confirmacao-wrap\">\n    <div class=\"confirmacao-card\">\n\n      <div class=\"confirmacao-icone\" aria-hidden=\"true\">\n        <svg viewBox=\"0 0 24 24\">\n          <path d=\"M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 1-1Zm12 9H5v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8Zm-3.3 2.3a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.4l1.3 1.3 3.3-3.3a1 1 0 0 1 1.4 0Z\"/>\n        </svg>\n      </div>\n\n      <h2 class=\"confirmacao-titulo\">\n        Confirme sua presença\n      </h2>\n\n      <p class=\"confirmacao-subtitulo\">\n        Aguardamos seu retorno com carinho\n      </p>\n\n      <div class=\"confirmacao-prazo\">\n        Confirmação até <strong>10/08</strong>\n      </div>\n\n      <p class=\"confirmacao-texto\">\n        Sua confirmação é essencial para prepararmos tudo com carinho e garantirmos o seu lugar na celebração.\n      </p>\n\n    </div>\n  </section>\n</body>\n</html>"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\"> <style>\n.lp-root, .lp-root *, .lp-root *::before, .lp-root *::after {\n  color-scheme: light only; forced-color-adjust: none;\n  -webkit-font-smoothing: antialiased; box-sizing: border-box;\n}\n.lp-root { background: hsl(222, 20%, 98%); color: hsl(222, 81%, 25%); margin: 0; padding: 0; }\n.lp-wrap {\n  position: relative; padding: 30px 18px 36px; overflow: hidden;\n  font-family: 'Cormorant Garamond', serif;\n  background: linear-gradient(160deg, hsl(222, 20%, 98%) 0%, hsl(222, 25%, 95%) 50%, hsl(222, 20%, 98%) 100%);\n}\n\n.snow { position: absolute; pointer-events: none; z-index: 1; color: rgba(160,190,240,.55); font-size: 13px; animation: snowfall linear infinite; }\n@keyframes snowfall { 0%{transform:translateY(-20px) rotate(0deg);opacity:0;} 10%{opacity:1;} 90%{opacity:.6;} 100%{transform:translateY(700px) rotate(360deg);opacity:0;} }\n\n.lp-header { position: relative; z-index: 2; text-align: center; margin-bottom: 22px; }\n.lp-header h2 { font-family: 'Cinzel', serif; font-size: 22px; color: hsl(222, 81%, 25%); letter-spacing: .13em; margin-bottom: 4px; }\n.lp-header .sub { color: hsl(222, 91%, 70%); font-size: 14px; font-style: italic; margin-bottom: 2px; }\n.lp-header .badge {\n  display: inline-block; margin-top: 6px; font-family: 'Cinzel', serif;\n  font-size: 10px; letter-spacing: .18em; text-transform: uppercase;\n  background: linear-gradient(135deg, #c8d8f0, #e8eef8);\n  border: 1px solid rgba(160,190,230,.5); border-radius: 30px;\n  padding: 3px 14px; color: #3a5a90;\n}\n\n.lp-grid { display: grid; gap: 10px; position: relative; z-index: 2; }\n.lp-card {\n  display: flex; gap: 13px; align-items: center;\n  padding: 13px 15px; border-radius: 20px;\n  background: rgba(255,255,255,.93);\n  border: 1px solid rgba(180,210,240,.35);\n  box-shadow: 0 2px 14px rgba(60,100,200,.07);\n  animation: lpFade .5s ease both;\n}\n@keyframes lpFade { from{opacity:0;transform:translateY(10px);} to{opacity:1;transform:translateY(0);} }\n\n.lp-icon {\n  width: 44px; height: 44px; border-radius: 14px; flex-shrink: 0;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 17px; color: #fff;\n  background: hsl(222, 91%, 70%); /* fallback background if specific color class is missing */\n  box-shadow: 0 2px 10px rgba(80,120,220,.22);\n}\n.icon-blue   { background: linear-gradient(145deg, hsl(222, 91%, 70%), hsl(222, 81%, 25%)); }\n.icon-silver { background: linear-gradient(145deg, #b0c4e0, #7090b8); }\n.icon-light  { background: linear-gradient(145deg, hsl(222, 91%, 70%), hsl(222, 91%, 70%)); }\n.icon-deep   { background: linear-gradient(145deg, hsl(222, 81%, 25%), hsl(222, 71%, 12%)); }\n.icon-ice    { background: linear-gradient(145deg, hsl(222, 91%, 70%), hsl(222, 91%, 70%)); }\n\n.lp-title { font-family: 'Cinzel', serif; font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: hsl(222, 91%, 70%); margin-bottom: 2px; }\n.lp-name  { font-size: 15.5px; font-weight: 600; color: hsl(222, 81%, 25%); line-height: 1.3; }\n.lp-tip {\n  display: inline-block; margin-top: 4px; font-size: 12px; color: #3a5a9a;\n  background: rgba(160,190,240,.22); border: 1px solid rgba(120,160,230,.28);\n  border-radius: 30px; padding: 2px 10px; font-style: italic;\n}\n\n\n.lp-footer {\n  position: relative; z-index: 2; margin-top: 18px; border-radius: 20px;\n  background: linear-gradient(145deg, rgba(255,255,255,.95), rgba(220,235,255,.75));\n  border: 1px solid rgba(120,170,230,.30); padding: 16px;\n  text-align: center;\n}\n.lp-footer-text   { font-size: 15px; color: hsl(222, 71%, 12%); line-height: 1.7; font-style: italic; }\n.lp-footer-accent { color: hsl(222, 81%, 25%); font-weight: 600; font-family: 'Cinzel', serif; font-size: 12px; letter-spacing: .08em; display: block; margin-top: 6px; }\n\n.lp-star { position: absolute; color: rgba(140,170,230,.5); font-size: 11px; animation: lsStar 3s ease-in-out infinite; z-index: 1; }\n@keyframes lsStar { 0%,100%{opacity:0;transform:scale(0);}50%{opacity:1;transform:scale(1);} }\n</style> <div class=\"lp-root\"> <span class=\"snow\" style=\"left:8%;animation-duration:6s;animation-delay:0s;\">❄</span> <span class=\"snow\" style=\"left:22%;animation-duration:8s;animation-delay:1.2s;font-size:9px;\">❅</span> <span class=\"snow\" style=\"left:38%;animation-duration:7s;animation-delay:2.5s;\">❆</span> <span class=\"snow\" style=\"left:55%;animation-duration:9s;animation-delay:.8s;font-size:9px;\">❄</span> <span class=\"snow\" style=\"left:70%;animation-duration:6.5s;animation-delay:3s;\">❅</span> <span class=\"snow\" style=\"left:85%;animation-duration:8.5s;animation-delay:1.8s;font-size:10px;\">❆</span> <svg style=\"position:absolute;top:-14px;left:-14px;width:150px;height:150px;opacity:.10;pointer-events:none;z-index:1;\" viewBox=\"0 0 160 160\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(0 80 80)\"/>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(45 80 80)\"/>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(90 80 80)\"/>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(135 80 80)\"/>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(180 80 80)\"/>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(225 80 80)\"/>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(270 80 80)\"/>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(315 80 80)\"/>\n    <circle cx=\"80\" cy=\"80\" r=\"12\" fill=\"#dce9fc\"/>\n  </g>\n</svg> <svg style=\"position:absolute;bottom:-8px;right:-8px;width:115px;height:115px;opacity:.10;pointer-events:none;z-index:1;\" viewBox=\"0 0 120 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g>\n    <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#a8c0e8\" transform=\"rotate(0 60 60)\"/>\n    <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#d0e0f8\" transform=\"rotate(60 60 60)\"/>\n    <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#a8c0e8\" transform=\"rotate(120 60 60)\"/>\n    <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#d0e0f8\" transform=\"rotate(180 60 60)\"/>\n    <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#a8c0e8\" transform=\"rotate(240 60 60)\"/>\n    <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#d0e0f8\" transform=\"rotate(300 60 60)\"/>\n    <circle cx=\"60\" cy=\"60\" r=\"9\" fill=\"#eaf0fc\"/>\n  </g>\n</svg> <i class=\"lp-star\" style=\"top:9%;left:7%;animation-delay:0s;\">✦</i> <i class=\"lp-star\" style=\"top:20%;right:13%;animation-delay:1s;\">✧</i> <i class=\"lp-star\" style=\"bottom:22%;left:12%;animation-delay:2s;\">✦</i> <i class=\"lp-star\" style=\"bottom:10%;right:9%;animation-delay:.5s;\">✧</i> <div class=\"lp-wrap\"> <div class=\"lp-header\"> <h2>Lista de Presentes</h2> <p class=\"sub\">Com muito carinho e gratidão ✨</p> <span class=\"badge\">❄ Branca de Neve ❄</span> </div> <div class=\"lp-grid\"> <div class=\"lp-card\" style=\"animation-delay:.05s\"> <div class=\"lp-icon icon-blue\"><i class=\"fa-solid fa-puzzle-piece\"></i></div> <div> <div class=\"lp-title\">Presente</div> <div class=\"lp-name\">Brinquedos educativos</div> </div> </div> <div class=\"lp-card\" style=\"animation-delay:.10s\"> <div class=\"lp-icon icon-silver\"><i class=\"fa-solid fa-shirt\"></i></div> <div> <div class=\"lp-title\">Presente</div> <div class=\"lp-name\">Roupa 1 ano</div> <span class=\"lp-tip\">✦ Tamanho 1 ano</span> </div> </div> <div class=\"lp-card\" style=\"animation-delay:.15s\"> <div class=\"lp-icon icon-light\"><i class=\"fa-solid fa-shoe-prints\"></i></div> <div> <div class=\"lp-title\">Presente</div> <div class=\"lp-name\">Sapato</div> <span class=\"lp-tip\">✦ Número 18</span> </div> </div> <div class=\"lp-card\" style=\"animation-delay:.20s\"> <div class=\"lp-icon icon-deep\"><i class=\"fa-solid fa-gift\"></i></div> <div> <div class=\"lp-title\">Presente</div> <div class=\"lp-name\">Itens infantis</div> </div> </div> <div class=\"lp-card\" style=\"animation-delay:.25s\"> <div class=\"lp-icon icon-blue\"><i class=\"fa-solid fa-baby\"></i></div> <div> <div class=\"lp-title\">Presente</div> <div class=\"lp-name\">Acessórios de bebê</div> </div> </div> <div class=\"lp-card\" style=\"animation-delay:.30s\"> <div class=\"lp-icon icon-ice\"><i class=\"fa-solid fa-cubes\"></i></div> <div> <div class=\"lp-title\">Presente</div> <div class=\"lp-name\">Brinquedos lúdicos</div> </div> </div> </div> <div class=\"lp-footer\"> <div class=\"lp-footer-text\">Sua presença já é o maior presente desta noite especial.</div> <span class=\"lp-footer-accent\">Obrigada por fazer parte desse momento ❄✨</span> </div> </div> </div>"
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
    "buttonColor": "#0c2b71",
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
