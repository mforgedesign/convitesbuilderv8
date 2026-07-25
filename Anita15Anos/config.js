window.config = {
  "evento": {
    "tipo": "Debutante",
    "nome": "Anita",
    "idade": 15,
    "data": "2026-10-24",
    "hora": "19:00",
    "horaTermino": "02:00",
    "endereco": "Winners Gastronomia, R. Vagner Luis Boscardin, 4591 - Piraquara - PR",
    "frase1": "",
    "frase2": "",
    "frase3": ""
  },
  "convite": {
    "paletaCores": "Rosa, Lilás e Azul com Madeira",
    "tema": "Jardim",
    "musica": "assets/music_1784998760502.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Anita15Anos",
    "seo": {
      "pageTitle": "Convite de 15 Anos da Anita",
      "ogTitle": "Você recebeu um convite especial!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1784998760502.png",
    "cartao": "assets/cartao_chatgpt_1784998760502.jpg",
    "aberturaSlides": [
      "assets/slide1_1784998760502.mp4",
      "assets/slide2_1784998760502.jpg",
      "assets/slide3_1784998760502.mp4",
      "assets/slide4_1784998760502.jpg"
    ],
    "aberturaSlidesMeta": [
      {
        "filePath": "assets/slide1_1784998760502.mp4",
        "label": "Abertura (Vídeo)",
        "type": "video"
      },
      {
        "filePath": "assets/slide2_1784998760502.jpg",
        "label": "Convite Especial",
        "type": "image"
      },
      {
        "filePath": "assets/slide3_1784998760502.mp4",
        "label": "Cena Temática",
        "type": "video"
      },
      {
        "filePath": "assets/slide4_1784998760502.jpg",
        "label": "Prepare-se",
        "type": "image"
      }
    ],
    "folhaVazia": "assets/folha_vazia_1784998760502.png",
    "folhaPreenchida": "assets/folha_1784998760502.png",
    "musica": "assets/music_1784998760502.mp3",
    "musicStartSec": 33,
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
    "fotos": [],
    "popupImagensPorBotao": {}
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://www.google.com/maps/search/?api=1&query=Winners+Gastronomia,+R.+Vagner+Luis+Boscardin,+4591+-+Piraquara+-+PR"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5511988509403",
      "rsvpConfig": {
        "exibirNome": true,
        "exibirWhatsapp": true,
        "exibirAcompanhantes": false
      }
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n.mc-wrap{\n  position:relative;padding:32px 18px 36px;overflow:hidden;\n  font-family:'Cormorant Garamond',serif;\n  background:linear-gradient(160deg,hsl(285, 20%, 98%) 0%,hsl(285, 25%, 95%) 40%,hsl(285, 20%, 98%) 100%);\n}\n.mc-header{position:relative;z-index:2;text-align:center;margin-bottom:10px;}\n.mc-crown{font-size:26px;margin-bottom:6px;display:block;animation:crownFloat 4s ease-in-out infinite;}\n@keyframes crownFloat{0%,100%{transform:translateY(0);}50%{transform:translateY(-5px);}}\n.mc-header h2{font-family:'Cinzel',serif;font-size:22px;color:hsl(285, 33%, 45%);letter-spacing:.15em;margin-bottom:5px;}\n.mc-header p{color:hsl(285, 50%, 70%);font-size:14.5px;font-style:italic;}\n.mc-sub{\n  position:relative;z-index:2;text-align:center;margin-bottom:24px;\n  font-size:13px;color:hsl(285, 50%, 70%);font-family:'Cinzel',serif;letter-spacing:.12em;text-transform:uppercase;\n}\n.mc-sub::before,.mc-sub::after{\n  content:'';display:inline-block;width:40px;height:.5px;\n  background:linear-gradient(to right,transparent,rgba(100,160,220,.40));\n  vertical-align:middle;margin:0 10px;\n}\n.mc-sub::after{background:linear-gradient(to left,transparent,rgba(100,160,220,.40));}\n.mc-grid{display:grid;gap:12px;position:relative;z-index:2;}\n.mc-card{\n  border-radius:20px;background:rgba(255,255,255,.82);\n  border:1px solid rgba(100,160,220,.20);\n  box-shadow:0 2px 16px rgba(60,120,200,.07);\n  overflow:hidden;animation:mcFade .6s ease both;\n}\n@keyframes mcFade{from{opacity:0;transform:translateY(11px);}to{opacity:1;transform:translateY(0);}}\n.mc-top{display:flex;align-items:center;gap:13px;padding:15px 15px 13px;}\n.mc-icon{\n  width:46px;height:46px;border-radius:14px;flex-shrink:0;\n  display:flex;align-items:center;justify-content:center;\n  background:linear-gradient(145deg,hsl(285, 50%, 70%),hsl(285, 50%, 70%));\n  color:#fff;font-size:18px;box-shadow:0 2px 10px rgba(80,140,220,.22);\n}\n.mc-title{font-family:'Cinzel',serif;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:hsl(285, 50%, 70%);margin-bottom:3px;}\n.mc-text{font-size:15px;line-height:1.6;color:hsl(285, 23%, 28%);}\n.mc-divider{height:.5px;margin:0 15px;background:linear-gradient(to right,transparent,rgba(100,160,220,.22),transparent);}\n.mc-body{padding:11px 15px 15px;}\n.mc-highlight{color:hsl(285, 33%, 45%);font-weight:600;}\n.mc-tag-row{display:flex;flex-wrap:wrap;gap:7px;margin-top:9px;}\n.mc-tag{display:inline-flex;align-items:center;gap:5px;padding:4px 11px;border-radius:30px;font-size:12.5px;font-style:italic;}\n.mc-tag-ok{background:rgba(200,230,255,.55);border:1px solid rgba(80,150,220,.22);color:hsl(285, 33%, 45%);}\n.mc-tag-no{background:rgba(220,238,255,.55);border:1px solid rgba(80,140,210,.25);color:hsl(285, 33%, 45%);}\n.mc-tag-white{background:rgba(235,235,240,.70);border:1px solid rgba(160,170,190,.30);color:#3a4a5a;}\n.mc-section-label{\n  font-family:'Cinzel',serif;font-size:10.5px;letter-spacing:.12em;\n  text-transform:uppercase;color:hsl(285, 50%, 70%);margin:12px 0 6px;\n}\n.mc-note{\n  margin-top:11px;padding:10px 13px;border-radius:14px;\n  background:rgba(180,215,250,.18);border:1px solid rgba(100,160,220,.22);\n  font-size:13.5px;color:hsl(285, 33%, 45%);font-style:italic;line-height:1.55;\n}\n.mc-confirm{\n  position:relative;z-index:2;margin-top:14px;\n  border-radius:20px;\n  background:linear-gradient(145deg,rgba(255,255,255,.90),rgba(210,235,255,.55));\n  border:1px solid rgba(100,160,220,.28);\n  padding:16px 16px 15px;\n  box-shadow:0 2px 18px rgba(60,120,200,.10);\n  animation:mcFade .6s .38s ease both;\n}\n.mc-confirm-top{display:flex;align-items:center;gap:12px;margin-bottom:11px;}\n.mc-confirm-icon{\n  width:46px;height:46px;border-radius:14px;flex-shrink:0;\n  display:flex;align-items:center;justify-content:center;\n  background:linear-gradient(145deg,hsl(285, 50%, 70%),hsl(285, 33%, 45%));\n  color:#fff;font-size:18px;box-shadow:0 2px 12px rgba(30,90,180,.28);\n}\n.mc-confirm-title{font-family:'Cinzel',serif;font-size:12px;letter-spacing:.13em;text-transform:uppercase;color:hsl(285, 33%, 45%);margin-bottom:2px;}\n.mc-confirm-sub{font-size:13px;color:hsl(285, 50%, 70%);font-style:italic;}\n.mc-date-badge{\n  display:flex;align-items:center;justify-content:center;gap:10px;\n  background:linear-gradient(145deg,hsl(285, 25%, 95%),hsl(285, 50%, 70%));\n  border:1px solid rgba(100,160,220,.30);\n  border-radius:14px;padding:11px 14px;\n  font-family:'Cinzel',serif;font-size:15px;\n  color:hsl(285, 33%, 45%);letter-spacing:.10em;\n  box-shadow:inset 0 0 10px rgba(255,255,255,.40);\n}\n.mc-date-badge i{color:hsl(285, 50%, 70%);font-size:16px;}\n.mc-confirm-note{\n  margin-top:10px;font-size:13.5px;color:hsl(285, 23%, 28%);\n  font-style:italic;line-height:1.55;text-align:center;\n}\n.lp-star{position:absolute;color:rgba(120,170,230,.50);font-size:11px;animation:starAnim 3s ease-in-out infinite;pointer-events:none;}\n@keyframes starAnim{0%,100%{opacity:0;transform:scale(0);}50%{opacity:1;transform:scale(1);}}\n</style>\n<svg style=\"position:absolute;top:-14px;left:-14px;width:168px;height:168px;opacity:.13;pointer-events:none;z-index:1;\" viewBox=\"0 0 168 168\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(285, 50%, 70%)\" transform=\"rotate(0 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(285, 50%, 70%)\" transform=\"rotate(45 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(285, 50%, 70%)\" transform=\"rotate(90 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(285, 50%, 70%)\" transform=\"rotate(135 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(285, 50%, 70%)\" transform=\"rotate(180 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(285, 50%, 70%)\" transform=\"rotate(225 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(285, 50%, 70%)\" transform=\"rotate(270 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(285, 50%, 70%)\" transform=\"rotate(315 84 84)\"/>\n    <circle cx=\"84\" cy=\"84\" r=\"13\" fill=\"hsl(285, 25%, 95%)\"/>\n  </g>\n</svg>\n<svg style=\"position:absolute;bottom:-10px;right:-10px;width:128px;height:128px;opacity:.11;pointer-events:none;z-index:1;\" viewBox=\"0 0 128 128\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(285, 50%, 70%)\" transform=\"rotate(0 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(285, 25%, 95%)\" transform=\"rotate(60 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(285, 50%, 70%)\" transform=\"rotate(120 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(285, 25%, 95%)\" transform=\"rotate(180 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(285, 50%, 70%)\" transform=\"rotate(240 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(285, 25%, 95%)\" transform=\"rotate(300 64 64)\"/>\n    <circle cx=\"64\" cy=\"64\" r=\"10\" fill=\"hsl(285, 20%, 98%)\"/>\n  </g>\n</svg>\n<svg style=\"position:absolute;top:44%;left:-6px;width:70px;height:70px;opacity:.10;pointer-events:none;z-index:1;\" viewBox=\"0 0 70 70\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(285, 50%, 70%)\" transform=\"rotate(0 35 35)\"/>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(285, 50%, 70%)\" transform=\"rotate(72 35 35)\"/>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(285, 50%, 70%)\" transform=\"rotate(144 35 35)\"/>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(285, 50%, 70%)\" transform=\"rotate(216 35 35)\"/>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(285, 50%, 70%)\" transform=\"rotate(288 35 35)\"/>\n    <circle cx=\"35\" cy=\"35\" r=\"6\" fill=\"hsl(285, 25%, 95%)\"/>\n  </g>\n</svg>\n<i class=\"lp-star\" style=\"top:9%;left:8%;animation-delay:0s;\"></i>\n<i class=\"lp-star\" style=\"top:17%;right:13%;animation-delay:1.1s;\"></i>\n<i class=\"lp-star\" style=\"bottom:14%;left:14%;animation-delay:2s;\"></i>\n<i class=\"lp-star\" style=\"bottom:7%;right:11%;animation-delay:.6s;\"></i>\n<i class=\"lp-star\" style=\"top:38%;right:7%;animation-delay:1.6s;\"></i>\n<div class=\"mc-wrap\">\n  <div class=\"mc-header\">\n    <span class=\"mc-crown\"><i class=\"fa-solid fa-crown\"></i></span>\n    <h2>Manual do Convidado</h2>\n    <p>Anita • 15 Anos</p>\n  </div>\n  <div class=\"mc-sub\">Jardim de cerejeiras e borboletas</div>\n  <div class=\"mc-grid\">\n    <div class=\"mc-card\" style=\"animation-delay:.04s\">\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\"><i class=\"fa-solid fa-heart\"></i></div>\n        <div>\n          <div class=\"mc-title\">Seja bem-vindo</div>\n          <div class=\"mc-text\">Esperamos você para celebrar os <span class=\"mc-highlight\">15 anos da Anita</span> em uma noite especial.</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"mc-card\" style=\"animation-delay:.09s\">\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\" style=\"background:linear-gradient(145deg,#c8e0f8,#5a90d0);\"><i class=\"fa-solid fa-user-tie\"></i></div>\n        <div>\n          <div class=\"mc-title\">Dress Code</div>\n          <div class=\"mc-text\"><span class=\"mc-highlight\">Traje social</span></div>\n        </div>\n      </div>\n      <div class=\"mc-divider\"></div>\n      <div class=\"mc-body\">\n        <div class=\"mc-text\">Escolha um visual elegante para harmonizar com a celebração.</div>\n        <div class=\"mc-tag-row\">\n          <span class=\"mc-tag mc-tag-ok\"><i class=\"fa-solid fa-check\" style=\"font-size:10px;\"></i>Traje social</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"mc-card\" style=\"animation-delay:.14s\">\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\" style=\"background:linear-gradient(145deg,#7ab0e8,#2a60b0);\"><i class=\"fa-solid fa-palette\"></i></div>\n        <div>\n          <div class=\"mc-title\">Cores da festa</div>\n          <div class=\"mc-text\">A paleta da celebração traz <span class=\"mc-highlight\">rosa, lilás e azul</span> com madeira.</div>\n        </div>\n      </div>\n      <div class=\"mc-divider\"></div>\n      <div class=\"mc-body\">\n        <div class=\"mc-text\">Pedimos que não utilizem as cores:</div>\n        <div class=\"mc-section-label\">Cor não informada</div>\n        <div class=\"mc-note\" style=\"margin-top:12px;\">A imagem mencionada não foi disponibilizada.</div>\n      </div>\n    </div>\n    <div class=\"mc-card\" style=\"animation-delay:.19s\">\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\" style=\"background:linear-gradient(145deg,#d0e8f8,#7ab0e8);\"><i class=\"fa-solid fa-clock\"></i></div>\n        <div>\n          <div class=\"mc-title\">Pontualidade</div>\n          <div class=\"mc-text\">A celebração acontecerá das <span class=\"mc-highlight\">19:00 às 02:00</span>.</div>\n        </div>\n      </div>\n      <div class=\"mc-divider\"></div>\n      <div class=\"mc-body\">\n        <div class=\"mc-text\">Chegue no horário para aproveitar todos os momentos da noite.</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"mc-confirm\">\n    <div class=\"mc-confirm-top\">\n      <div class=\"mc-confirm-icon\"><i class=\"fa-solid fa-calendar-check\"></i></div>\n      <div>\n        <div class=\"mc-confirm-title\">Confirmação de presença</div>\n        <div class=\"mc-confirm-sub\">Nossa cerimonial entrará em contato.</div>\n      </div>\n    </div>\n    <div class=\"mc-date-badge\"><i class=\"fa-solid fa-calendar-days\"></i>24.10.26<strong>19h00</strong></div>\n    <div class=\"mc-confirm-note\">Desde já, agradecemos seu carinho e atenção.</div>\n  </div>\n</div>"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<style>\n  @keyframes shimmerPastel {\n    0% { background-position: 200% center; }\n    100% { background-position: -200% center; }\n  }\n\n  @keyframes floatIcon {\n    0%, 100% { transform: translateY(0); }\n    50% { transform: translateY(-4px); }\n  }\n\n  @keyframes fadeUp {\n    from {\n      opacity: 0;\n      transform: translateY(8px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n\n  @keyframes particleDrift {\n    0% {\n      transform: translateY(0) translateX(0) scale(1);\n      opacity: .35;\n    }\n    40% {\n      transform: translateY(-14px) translateX(6px) scale(1.3);\n      opacity: .8;\n    }\n    70% {\n      transform: translateY(-6px) translateX(-4px) scale(.7);\n      opacity: .25;\n    }\n    100% {\n      transform: translateY(0) translateX(0) scale(1);\n      opacity: .35;\n    }\n  }\n\n  .gift-wrap {\n    background:\n      radial-gradient(circle at 15% 10%, rgba(255, 183, 220, .28), transparent 35%),\n      radial-gradient(circle at 90% 18%, rgba(174, 216, 255, .30), transparent 38%),\n      radial-gradient(circle at 50% 100%, rgba(205, 178, 255, .26), transparent 45%),\n      linear-gradient(160deg, #fff7fc 0%, #f7f1ff 48%, #edf8ff 100%);\n    border: 1px solid rgba(202, 159, 224, .35);\n    border-radius: 24px;\n    padding: 32px 20px 30px;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n    box-shadow:\n      0 15px 40px rgba(155, 115, 186, .14),\n      inset 0 1px 0 rgba(255, 255, 255, .9);\n    position: relative;\n    overflow: hidden;\n  }\n\n  .gift-wrap::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 2px;\n    background: linear-gradient(\n      90deg,\n      transparent,\n      #f39bc8,\n      #c29bea,\n      #8dcdf2,\n      #f39bc8,\n      transparent\n    );\n    background-size: 200% auto;\n    animation: shimmerPastel 4s linear infinite;\n  }\n\n  .gift-wrap::after {\n    content: \"\";\n    position: absolute;\n    inset: 8px;\n    border: 1px solid rgba(255, 255, 255, .75);\n    border-radius: 18px;\n    pointer-events: none;\n  }\n\n  .gift-particles {\n    position: absolute;\n    inset: 0;\n    overflow: hidden;\n    pointer-events: none;\n  }\n\n  .gift-particle {\n    position: absolute;\n    border-radius: 50%;\n    box-shadow: 0 0 8px currentColor;\n    animation: particleDrift linear infinite;\n  }\n\n  .gift-eyebrow {\n    color: #9678ad;\n    font-size: 9px;\n    letter-spacing: 4px;\n    line-height: 1.6;\n    margin: 0 0 9px;\n    text-align: center;\n    text-transform: uppercase;\n    animation: fadeUp .6s ease both;\n    position: relative;\n    z-index: 1;\n  }\n\n  .gift-title {\n    background: linear-gradient(\n      90deg,\n      #d46aab 0%,\n      #ae7dda 28%,\n      #799fd9 50%,\n      #79bee7 70%,\n      #d46aab 100%\n    );\n    background-size: 200% auto;\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    color: transparent;\n    font-size: 22px;\n    font-weight: 500;\n    letter-spacing: 2.5px;\n    margin: 0 0 7px;\n    text-align: center;\n    text-transform: uppercase;\n    animation:\n      shimmerPastel 5s linear infinite,\n      fadeUp .6s ease .1s both;\n    position: relative;\n    z-index: 1;\n  }\n\n  .gift-subtitle {\n    color: #91a3c2;\n    font-size: 10px;\n    letter-spacing: 3px;\n    margin: 0 0 27px;\n    text-align: center;\n    animation: fadeUp .6s ease .15s both;\n    position: relative;\n    z-index: 1;\n  }\n\n  .gift-divider {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    margin: 0 0 23px;\n    opacity: .75;\n    position: relative;\n    z-index: 1;\n  }\n\n  .gift-divider-line {\n    flex: 1;\n    height: 1px;\n    background: linear-gradient(\n      to right,\n      transparent,\n      #dba4d6,\n      #a8cbe9,\n      transparent\n    );\n  }\n\n  .gift-divider-dot {\n    width: 4px;\n    height: 4px;\n    background: #bd91da;\n    border-radius: 50%;\n    box-shadow: 0 0 6px rgba(189, 145, 218, .55);\n  }\n\n  .gift-items {\n    display: flex;\n    flex-direction: column;\n    gap: 7px;\n    animation: fadeUp .6s ease .2s both;\n    position: relative;\n    z-index: 1;\n  }\n\n  .gift-item {\n    display: flex;\n    align-items: flex-start;\n    gap: 14px;\n    padding: 14px 16px;\n    background: rgba(255, 255, 255, .58);\n    border: 1px solid rgba(195, 157, 222, .22);\n    border-radius: 14px;\n    box-shadow: 0 5px 14px rgba(145, 117, 173, .06);\n    backdrop-filter: blur(4px);\n    transition:\n      transform .3s ease,\n      border-color .3s ease,\n      box-shadow .3s ease;\n  }\n\n  .gift-item:hover {\n    transform: translateY(-2px);\n    border-color: rgba(188, 133, 215, .48);\n    box-shadow: 0 8px 20px rgba(145, 117, 173, .12);\n  }\n\n  .gift-icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 32px;\n    height: 32px;\n    background: linear-gradient(\n      145deg,\n      rgba(255, 211, 234, .85),\n      rgba(223, 210, 255, .85),\n      rgba(205, 235, 255, .85)\n    );\n    border: 1px solid rgba(255, 255, 255, .9);\n    border-radius: 50%;\n    box-shadow: 0 4px 10px rgba(164, 129, 188, .13);\n    font-size: 17px;\n    flex-shrink: 0;\n    animation: floatIcon 4s ease-in-out infinite;\n  }\n\n  .gift-item:nth-child(2) .gift-icon {\n    animation-delay: .5s;\n  }\n\n  .gift-item:nth-child(3) .gift-icon {\n    animation-delay: 1s;\n  }\n\n  .gift-item:nth-child(4) .gift-icon {\n    animation-delay: 1.5s;\n  }\n\n  .gift-item:nth-child(5) .gift-icon {\n    animation-delay: 2s;\n  }\n\n  .gift-content {\n    flex: 1;\n    min-width: 0;\n  }\n\n  .gift-name {\n    color: #65506f;\n    font-size: 13px;\n    font-weight: 600;\n    letter-spacing: .4px;\n    margin: 0 0 4px;\n  }\n\n  .gift-detail {\n    color: #8791ae;\n    font-size: 11px;\n    letter-spacing: .2px;\n    line-height: 1.6;\n    margin: 0;\n  }\n\n  .gift-highlight {\n    color: #b267a1;\n    font-weight: 600;\n  }\n\n  .gift-tags {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 6px;\n    margin-top: 7px;\n  }\n\n  .gift-tag {\n    color: #986bb8;\n    font-size: 10px;\n    font-weight: 500;\n    letter-spacing: .3px;\n    padding: 5px 11px;\n    background: linear-gradient(\n      120deg,\n      rgba(255, 221, 239, .65),\n      rgba(228, 218, 255, .65),\n      rgba(215, 240, 255, .65)\n    );\n    border: 1px solid rgba(183, 139, 212, .28);\n    border-radius: 20px;\n  }\n\n  .pix-box {\n    display: inline-flex;\n    flex-direction: column;\n    gap: 3px;\n    margin-top: 7px;\n    padding: 8px 13px;\n    background: linear-gradient(\n      120deg,\n      rgba(255, 217, 237, .62),\n      rgba(222, 214, 255, .62),\n      rgba(205, 237, 255, .62)\n    );\n    border: 1px dashed rgba(174, 117, 202, .45);\n    border-radius: 10px;\n  }\n\n  .pix-label {\n    color: #9b78b0;\n    font-size: 8px;\n    font-weight: 600;\n    letter-spacing: 1.5px;\n    text-transform: uppercase;\n  }\n\n  .pix-key {\n    color: #765785;\n    font-size: 14px;\n    font-weight: 700;\n    letter-spacing: 1px;\n    user-select: all;\n  }\n\n  @media (max-width: 480px) {\n    .gift-wrap {\n      padding: 29px 14px 24px;\n    }\n\n    .gift-title {\n      font-size: 19px;\n      letter-spacing: 2px;\n    }\n\n    .gift-item {\n      padding: 13px;\n    }\n\n    .pix-key {\n      font-size: 13px;\n    }\n  }\n</style>\n\n<div class=\"gift-wrap\">\n\n  <div class=\"gift-particles\">\n    <span\n      class=\"gift-particle\"\n      style=\"width:3px;height:3px;background:#ed9bc8;color:#ed9bc8;left:8%;top:8%;animation-duration:7s;\">\n    </span>\n\n    <span\n      class=\"gift-particle\"\n      style=\"width:3px;height:3px;background:#9ed7f4;color:#9ed7f4;left:91%;top:15%;animation-duration:8.4s;animation-delay:1s;\">\n    </span>\n\n    <span\n      class=\"gift-particle\"\n      style=\"width:2px;height:2px;background:#c39be4;color:#c39be4;left:52%;top:4%;animation-duration:6.6s;animation-delay:2.2s;\">\n    </span>\n\n    <span\n      class=\"gift-particle\"\n      style=\"width:3px;height:3px;background:#f1aad0;color:#f1aad0;left:22%;top:88%;animation-duration:9.1s;animation-delay:1.6s;\">\n    </span>\n\n    <span\n      class=\"gift-particle\"\n      style=\"width:2px;height:2px;background:#91cbed;color:#91cbed;left:80%;top:75%;animation-duration:7.8s;animation-delay:3.4s;\">\n    </span>\n  </div>\n\n  <p class=\"gift-eyebrow\">algumas sugestões escolhidas com carinho</p>\n\n  <h2 class=\"gift-title\">Dicas de Presente</h2>\n\n  <p class=\"gift-subtitle\">✦ para tornar este momento ainda mais especial ✦</p>\n\n  <div class=\"gift-divider\">\n    <div class=\"gift-divider-line\"></div>\n    <div class=\"gift-divider-dot\"></div>\n    <div class=\"gift-divider-dot\" style=\"opacity:.5;\"></div>\n    <div class=\"gift-divider-dot\"></div>\n    <div class=\"gift-divider-line\"></div>\n  </div>\n\n  <div class=\"gift-items\">\n\n    <div class=\"gift-item\">\n      <div class=\"gift-icon\">✨</div>\n\n      <div class=\"gift-content\">\n        <p class=\"gift-name\">Acessórios</p>\n\n        <p class=\"gift-detail\">\n          Acessórios em\n          <span class=\"gift-highlight\">prata ou dourado</span>.\n        </p>\n      </div>\n    </div>\n\n    <div class=\"gift-item\">\n      <div class=\"gift-icon\">👗</div>\n\n      <div class=\"gift-content\">\n        <p class=\"gift-name\">Roupas</p>\n\n        <p class=\"gift-detail\">\n          Calça tamanho\n          <span class=\"gift-highlight\">38</span>\n          &nbsp;·&nbsp;\n          Blusa tamanho\n          <span class=\"gift-highlight\">P</span>\n        </p>\n      </div>\n    </div>\n\n    <div class=\"gift-item\">\n      <div class=\"gift-icon\">💄</div>\n\n      <div class=\"gift-content\">\n        <p class=\"gift-name\">Maquiagem</p>\n\n        <p class=\"gift-detail\">\n          Produtos de maquiagem também serão recebidos com muito carinho.\n        </p>\n      </div>\n    </div>\n\n    <div class=\"gift-item\">\n      <div class=\"gift-icon\">🎁</div>\n\n      <div class=\"gift-content\">\n        <p class=\"gift-name\">Vale-presente</p>\n\n        <div class=\"gift-tags\">\n          <span class=\"gift-tag\">O Boticário</span>\n          <span class=\"gift-tag\">Sephora</span>\n          <span class=\"gift-tag\">PopMe</span>\n          <span class=\"gift-tag\">Renner</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"gift-item\">\n      <div class=\"gift-icon\">💗</div>\n\n      <div class=\"gift-content\">\n        <p class=\"gift-name\">Presente via Pix</p>\n\n        <p class=\"gift-detail\">\n          Se preferir, você também pode presentear via Pix.\n        </p>\n\n        <div class=\"pix-box\">\n          <span class=\"pix-label\">Chave Pix</span>\n          <span class=\"pix-key\">41991965608</span>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>"
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
    "buttonColor": "#8a4f9e",
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
    "text": "* Anita\n* 15 Anos\n* Cores rosa, lilás e azul com madeira\n* Tema jardim com cerejeira e borboletas \n* data do evento: 24.10.26\n* Horário: às 19h00\n* música : one direction-perfect\n* Local: Winners Gastronomia \nR. Vagner Luis Boscardin, 4591 - Piraquara - PR\n* vou querer 3 botões: local, dicas de presente e manual do convidado\n\nDicas de presente:\n\n* Acessórios em prata ou dourado \n* Roupas (calça 38 Blusa P)\n* Maquiagem\n* Vale Presente: Boticário, Sephora, PopMe, Renner\n* Se preferir, presenteie via Pix\n41991965608\n\nManual do convidado: \n\n* Dress Code \n* Traje: Social \n* Pedimos que não utilizem as cores:\nImagem \n* Horário:\n19:00 as 02:00\n* Confirmação de presença\nNossa cerimonial entrará em contato para confirmar sua presença. Desde já, agradecemos seu carinho e atenção.",
    "usedAt": "2026-07-25T12:59:15.717Z",
    "source": "fill-fields",
    "buttonDecisions": {
      "manualComConteudo": true,
      "presentesComConteudo": true,
      "manualPremium": false,
      "presentesPremium": false,
      "manualResumo": "Dress code: traje social. Pedimos que não utilizem as cores indicadas na imagem. Horário: das 19:00 às 02:00. A cerimonial entrará em contato para confirmar sua presença. Desde já, agradecemos seu carinho e atenção.",
      "presentesResumo": "Acessórios em prata ou dourado; roupas: calça 38 e blusa P; maquiagem; vale-presente de O Boticário, Sephora, PopMe ou Renner; ou presente via Pix: 41991965608."
    }
  }
};
