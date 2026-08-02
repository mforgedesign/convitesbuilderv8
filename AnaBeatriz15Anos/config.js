window.config = {
  "evento": {
    "tipo": "Debutante",
    "nome": "Ana Beatriz",
    "idade": 15,
    "data": "2026-10-09",
    "hora": "19:00",
    "horaTermino": "",
    "endereco": "Buffet Sabor Arte & Amor, Av. Prestes Maia, 1310, Diadema",
    "frase1": "",
    "frase2": "",
    "frase3": ""
  },
  "convite": {
    "paletaCores": "Azul com Prata",
    "tema": "baile inverno",
    "musica": "assets/music_1785675542602.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "AnaBeatriz15Anos",
    "seo": {
      "pageTitle": "Convite Especial",
      "ogTitle": "Você recebeu um convite especial!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1785675542602.jpg",
    "cartao": "assets/cartao_chatgpt_1785675542602.jpg",
    "aberturaSlides": [
      "assets/slide1_1785675542602.mp4",
      "assets/slide2_1785675542602.jpg",
      "assets/slide3_1785675542602.mp4",
      "assets/slide4_1785675542602.jpg"
    ],
    "aberturaSlidesMeta": [
      {
        "filePath": "assets/slide1_1785675542602.mp4",
        "label": "Abertura (Vídeo)",
        "type": "video"
      },
      {
        "filePath": "assets/slide2_1785675542602.jpg",
        "label": "Convite Especial",
        "type": "image"
      },
      {
        "filePath": "assets/slide3_1785675542602.mp4",
        "label": "Cena Temática",
        "type": "video"
      },
      {
        "filePath": "assets/slide4_1785675542602.jpg",
        "label": "Prepare-se",
        "type": "image"
      }
    ],
    "folhaVazia": "assets/folha_vazia_1785675542602.jpg",
    "folhaPreenchida": "assets/folha_1785675542602.jpg",
    "musica": "assets/music_1785675542602.mp3",
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
    "fotos": [],
    "popupImagensPorBotao": {}
  },
  "botoes": [
    {
      "id": "btn_acd393cc-3bb9-472f-bdae-d605a6b3908c",
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://www.google.com/maps/search/?api=1&query=Buffet+Sabor+Arte+%26+Amor,+Av.+Prestes+Maia,+1310,+Diadema"
    },
    {
      "id": "btn_5f7f06210730ccc1",
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n.mc-wrap,\n.mc-wrap *,\n.mc-wrap *::before,\n.mc-wrap *::after{\n  box-sizing:border-box;\n  margin:0;\n  padding:0;\n}\n\n.mc-wrap{\n  position:relative;\n  padding:32px 18px 36px;\n  overflow:hidden;\n  font-family:'Cormorant Garamond',serif;\n  background:linear-gradient(\n    160deg,\n    #f7f7f8 0%,\n    #e8edf3 45%,\n    #f4f5f7 100%\n  );\n}\n\n.mc-header{\n  position:relative;\n  z-index:2;\n  text-align:center;\n  margin-bottom:10px;\n}\n\n.mc-crown{\n  font-size:26px;\n  margin-bottom:6px;\n  display:block;\n  animation:crownFloat 4s ease-in-out infinite;\n}\n\n@keyframes crownFloat{\n  0%,100%{transform:translateY(0)}\n  50%{transform:translateY(-5px)}\n}\n\n.mc-header h2{\n  font-family:'Cinzel',serif;\n  font-size:22px;\n  color:#193b63;\n  letter-spacing:.15em;\n  margin-bottom:5px;\n}\n\n.mc-header p{\n  color:#607d9d;\n  font-size:14.5px;\n  font-style:italic;\n}\n\n.mc-sub{\n  position:relative;\n  z-index:2;\n  text-align:center;\n  margin-bottom:24px;\n  font-size:13px;\n  color:#71859c;\n  font-family:'Cinzel',serif;\n  letter-spacing:.12em;\n  text-transform:uppercase;\n}\n\n.mc-sub::before,\n.mc-sub::after{\n  content:'';\n  display:inline-block;\n  width:40px;\n  height:.5px;\n  background:linear-gradient(\n    to right,\n    transparent,\n    rgba(120,135,155,.5)\n  );\n  vertical-align:middle;\n  margin:0 10px;\n}\n\n.mc-sub::after{\n  background:linear-gradient(\n    to left,\n    transparent,\n    rgba(120,135,155,.5)\n  );\n}\n\n.mc-grid{\n  display:grid;\n  gap:12px;\n  position:relative;\n  z-index:2;\n}\n\n.mc-card{\n  border-radius:20px;\n  background:rgba(255,255,255,.86);\n  border:1px solid rgba(120,135,155,.25);\n  box-shadow:0 2px 16px rgba(45,65,90,.09);\n  overflow:hidden;\n  animation:mcFade .6s ease both;\n}\n\n@keyframes mcFade{\n  from{\n    opacity:0;\n    transform:translateY(11px);\n  }\n  to{\n    opacity:1;\n    transform:translateY(0);\n  }\n}\n\n.mc-top{\n  display:flex;\n  align-items:center;\n  gap:13px;\n  padding:15px;\n}\n\n.mc-icon{\n  width:46px;\n  height:46px;\n  border-radius:14px;\n  flex-shrink:0;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  background:linear-gradient(145deg,#b9c4d1,#718096);\n  color:#fff;\n  font-size:18px;\n  box-shadow:0 2px 10px rgba(70,85,105,.22);\n}\n\n.mc-title{\n  font-family:'Cinzel',serif;\n  font-size:11.5px;\n  letter-spacing:.14em;\n  text-transform:uppercase;\n  color:#607d9d;\n  margin-bottom:3px;\n}\n\n.mc-text{\n  font-size:15px;\n  line-height:1.6;\n  color:#233b57;\n}\n\n.mc-highlight{\n  color:#193b63;\n  font-weight:600;\n}\n\n/* Seção especial das cores */\n\n.mc-colors{\n  position:relative;\n  z-index:2;\n  margin-top:16px;\n  padding:20px 16px 18px;\n  border-radius:22px;\n  text-align:center;\n  overflow:hidden;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(20,65,112,.96) 0%,\n      rgba(52,93,137,.95) 48%,\n      rgba(183,192,204,.96) 100%\n    );\n  border:1px solid rgba(255,255,255,.45);\n  box-shadow:\n    0 8px 24px rgba(25,59,99,.18),\n    inset 0 1px 0 rgba(255,255,255,.4);\n  animation:mcFade .7s .25s ease both;\n}\n\n.mc-colors::before{\n  content:'';\n  position:absolute;\n  width:150px;\n  height:150px;\n  top:-95px;\n  right:-55px;\n  border-radius:50%;\n  background:rgba(255,255,255,.12);\n}\n\n.mc-colors::after{\n  content:'';\n  position:absolute;\n  width:100px;\n  height:100px;\n  bottom:-65px;\n  left:-35px;\n  border-radius:50%;\n  background:rgba(255,255,255,.09);\n}\n\n.mc-colors-content{\n  position:relative;\n  z-index:2;\n}\n\n.mc-colors-icon{\n  width:44px;\n  height:44px;\n  margin:0 auto 9px;\n  border-radius:50%;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  color:#193b63;\n  font-size:17px;\n  background:linear-gradient(145deg,#ffffff,#c8d0da);\n  box-shadow:0 3px 12px rgba(17,45,76,.2);\n}\n\n.mc-colors-title{\n  font-family:'Cinzel',serif;\n  font-size:12px;\n  letter-spacing:.16em;\n  text-transform:uppercase;\n  color:#fff;\n  margin-bottom:7px;\n}\n\n.mc-colors-text{\n  max-width:430px;\n  margin:0 auto;\n  color:rgba(255,255,255,.95);\n  font-size:15px;\n  line-height:1.55;\n}\n\n.mc-colors-text strong{\n  color:#fff;\n  font-weight:600;\n}\n\n.mc-swatches{\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  gap:9px;\n  margin-top:13px;\n}\n\n.mc-swatch{\n  display:flex;\n  align-items:center;\n  gap:7px;\n  padding:6px 11px 6px 7px;\n  border-radius:30px;\n  color:#fff;\n  font-family:'Cinzel',serif;\n  font-size:9.5px;\n  letter-spacing:.1em;\n  text-transform:uppercase;\n  background:rgba(255,255,255,.14);\n  border:1px solid rgba(255,255,255,.25);\n  backdrop-filter:blur(4px);\n  -webkit-backdrop-filter:blur(4px);\n}\n\n.mc-swatch-circle{\n  width:18px;\n  height:18px;\n  border-radius:50%;\n  flex-shrink:0;\n  border:1px solid rgba(255,255,255,.55);\n  box-shadow:0 2px 6px rgba(18,40,65,.2);\n}\n\n.mc-swatch-blue{\n  background:linear-gradient(145deg,#2f70ae,#123d69);\n}\n\n.mc-swatch-silver{\n  background:linear-gradient(145deg,#f7f8fa,#9da8b6);\n}\n\n.mc-colors-note{\n  margin-top:12px;\n  color:rgba(255,255,255,.82);\n  font-size:13px;\n  line-height:1.45;\n  font-style:italic;\n}\n\n.lp-star{\n  position:absolute;\n  z-index:1;\n  color:rgba(110,125,145,.55);\n  font-size:11px;\n  animation:starAnim 3s ease-in-out infinite;\n  pointer-events:none;\n}\n\n@keyframes starAnim{\n  0%,100%{\n    opacity:0;\n    transform:scale(0);\n  }\n  50%{\n    opacity:1;\n    transform:scale(1);\n  }\n}\n\n@media(max-width:380px){\n  .mc-header h2{\n    font-size:19px;\n  }\n\n  .mc-sub::before,\n  .mc-sub::after{\n    width:25px;\n    margin:0 6px;\n  }\n\n  .mc-swatches{\n    flex-wrap:wrap;\n  }\n}\n</style>\n\n<div class=\"mc-wrap\">\n\n  <i class=\"lp-star\" style=\"top:9%;left:8%;animation-delay:0s\">✦</i>\n  <i class=\"lp-star\" style=\"top:17%;right:13%;animation-delay:1.1s\">✧</i>\n  <i class=\"lp-star\" style=\"bottom:14%;left:14%;animation-delay:2s\">✦</i>\n  <i class=\"lp-star\" style=\"bottom:7%;right:11%;animation-delay:.6s\">✧</i>\n  <i class=\"lp-star\" style=\"top:38%;right:7%;animation-delay:1.6s\">✦</i>\n\n  <div class=\"mc-header\">\n    <span class=\"mc-crown\">❄️</span>\n    <h2>Manual do Convidado</h2>\n    <p>15 Anos da Ana Beatriz</p>\n  </div>\n\n  <div class=\"mc-sub\">✦ &nbsp; com carinho &nbsp; ✦</div>\n\n  <div class=\"mc-grid\">\n\n    <div class=\"mc-card\" style=\"animation-delay:.04s\">\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\">\n          <i class=\"fa-solid fa-heart\"></i>\n        </div>\n\n        <div>\n          <div class=\"mc-title\">Sua presença</div>\n\n          <div class=\"mc-text\">\n            Sua presença é muito\n            <span class=\"mc-highlight\">importante para mim</span>.\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"mc-card\" style=\"animation-delay:.09s\">\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\">\n          <i class=\"fa-solid fa-face-smile\"></i>\n        </div>\n\n        <div>\n          <div class=\"mc-title\">Para aproveitar</div>\n\n          <div class=\"mc-text\">\n            Traga seu\n            <span class=\"mc-highlight\">melhor sorriso</span>\n            e muita animação.\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"mc-card\" style=\"animation-delay:.14s\">\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\">\n          <i class=\"fa-solid fa-music\"></i>\n        </div>\n\n        <div>\n          <div class=\"mc-title\">Divirta-se</div>\n\n          <div class=\"mc-text\">\n            Dance, tire fotos e\n            <span class=\"mc-highlight\">divirta-se</span>!\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"mc-card\" style=\"animation-delay:.19s\">\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\">\n          <i class=\"fa-solid fa-star\"></i>\n        </div>\n\n        <div>\n          <div class=\"mc-title\">Uma noite especial</div>\n\n          <div class=\"mc-text\">\n            Esqueça a dieta por uma noite e\n            <span class=\"mc-highlight\">aproveite</span>!\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"mc-colors\">\n    <div class=\"mc-colors-content\">\n\n      <div class=\"mc-colors-icon\">\n        <i class=\"fa-solid fa-gem\"></i>\n      </div>\n\n      <div class=\"mc-colors-title\">\n        Cores exclusivas da debutante\n      </div>\n\n      <div class=\"mc-colors-text\">\n        As cores <strong>azul e prata</strong> foram escolhidas\n        especialmente para a debutante.\n      </div>\n\n      <div class=\"mc-swatches\">\n\n        <div class=\"mc-swatch\">\n          <span class=\"mc-swatch-circle mc-swatch-blue\"></span>\n          Azul\n        </div>\n\n        <div class=\"mc-swatch\">\n          <span class=\"mc-swatch-circle mc-swatch-silver\"></span>\n          Prata\n        </div>\n\n      </div>\n\n      <div class=\"mc-colors-note\">\n        Pedimos, com carinho, que os convidados evitem trajes\n        predominantemente nessas cores.\n      </div>\n\n    </div>\n  </div>\n\n</div>"
    },
    {
      "id": "btn_885c6380b5de3fa5",
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap\" rel=\"stylesheet\">\n\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n.lp-root,\n.lp-root *,\n.lp-root *::before,\n.lp-root *::after {\n    color-scheme: light only;\n    forced-color-adjust: none;\n    -webkit-font-smoothing: antialiased;\n    box-sizing: border-box;\n}\n\n.lp-root {\n    background: #f0f4fc;\n    color: #1a3a6b;\n    margin: 0;\n    padding: 0;\n}\n\n.lp-wrap {\n    position: relative;\n    padding: 30px 18px 36px;\n    overflow: hidden;\n    font-family: 'Cormorant Garamond', serif;\n    background: linear-gradient(\n        160deg,\n        #f5f8ff 0%,\n        #eaf0fb 50%,\n        #f8faff 100%\n    );\n}\n\n.snow {\n    position: absolute;\n    pointer-events: none;\n    z-index: 1;\n    color: rgba(160, 190, 240, .55);\n    font-size: 13px;\n    animation: snowfall linear infinite;\n}\n\n@keyframes snowfall {\n    0% {\n        transform: translateY(-20px) rotate(0deg);\n        opacity: 0;\n    }\n\n    10% {\n        opacity: 1;\n    }\n\n    90% {\n        opacity: .6;\n    }\n\n    100% {\n        transform: translateY(700px) rotate(360deg);\n        opacity: 0;\n    }\n}\n\n.lp-header {\n    position: relative;\n    z-index: 2;\n    text-align: center;\n    margin-bottom: 22px;\n}\n\n.lp-header h2 {\n    font-family: 'Cinzel', serif;\n    font-size: 22px;\n    color: #1a3a6b;\n    letter-spacing: .13em;\n    margin-bottom: 4px;\n}\n\n.lp-header .sub {\n    color: #5a7ab8;\n    font-size: 14px;\n    font-style: italic;\n    margin-bottom: 2px;\n}\n\n.lp-header .badge {\n    display: inline-block;\n    margin-top: 6px;\n    font-family: 'Cinzel', serif;\n    font-size: 10px;\n    letter-spacing: .18em;\n    text-transform: uppercase;\n    background: linear-gradient(135deg, #c8d8f0, #e8eef8);\n    border: 1px solid rgba(160, 190, 230, .5);\n    border-radius: 30px;\n    padding: 3px 14px;\n    color: #3a5a90;\n}\n\n.lp-grid {\n    display: grid;\n    gap: 10px;\n    position: relative;\n    z-index: 2;\n}\n\n.lp-card {\n    display: flex;\n    gap: 13px;\n    align-items: center;\n    padding: 13px 15px;\n    border-radius: 20px;\n    background: rgba(255, 255, 255, .93);\n    border: 1px solid rgba(180, 210, 240, .35);\n    box-shadow: 0 2px 14px rgba(60, 100, 200, .07);\n    animation: lpFade .5s ease both;\n}\n\n.lp-card:nth-child(2) {\n    animation-delay: .08s;\n}\n\n.lp-card:nth-child(3) {\n    animation-delay: .16s;\n}\n\n.lp-card:nth-child(4) {\n    animation-delay: .24s;\n}\n\n@keyframes lpFade {\n    from {\n        opacity: 0;\n        transform: translateY(10px);\n    }\n\n    to {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n.lp-icon {\n    width: 44px;\n    height: 44px;\n    border-radius: 14px;\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 17px;\n    color: #fff;\n    background: #7aa4f0;\n    box-shadow: 0 2px 10px rgba(80, 120, 220, .22);\n}\n\n.icon-blue {\n    background: linear-gradient(145deg, #7aa4f0, #2a5cc8);\n}\n\n.icon-silver {\n    background: linear-gradient(145deg, #b0c4e0, #7090b8);\n}\n\n.icon-light {\n    background: linear-gradient(145deg, #a8c8f8, #5a90e0);\n}\n\n.icon-deep {\n    background: linear-gradient(145deg, #3a6ad8, #1a3a8c);\n}\n\n.icon-ice {\n    background: linear-gradient(145deg, #c8dcf4, #6a9acc);\n}\n\n.lp-title {\n    font-family: 'Cinzel', serif;\n    font-size: 11px;\n    letter-spacing: .14em;\n    text-transform: uppercase;\n    color: #5a7ab8;\n    margin-bottom: 2px;\n}\n\n.lp-name {\n    font-size: 15.5px;\n    font-weight: 600;\n    color: #1a3a6b;\n    line-height: 1.3;\n}\n\n.lp-tip {\n    display: inline-block;\n    margin-top: 4px;\n    font-size: 12px;\n    color: #3a5a9a;\n    background: rgba(160, 190, 240, .22);\n    border: 1px solid rgba(120, 160, 230, .28);\n    border-radius: 30px;\n    padding: 2px 10px;\n    font-style: italic;\n}\n\n.lp-divider {\n    text-align: center;\n    position: relative;\n    z-index: 2;\n    margin: 20px 0 14px;\n    font-family: 'Cinzel', serif;\n    font-size: 10px;\n    letter-spacing: .22em;\n    color: #6a8ab8;\n}\n\n.lp-divider::before,\n.lp-divider::after {\n    content: '';\n    display: inline-block;\n    width: 44px;\n    height: .5px;\n    background: linear-gradient(\n        to right,\n        transparent,\n        rgba(100, 150, 210, .4)\n    );\n    vertical-align: middle;\n    margin: 0 10px;\n}\n\n.lp-divider::after {\n    background: linear-gradient(\n        to left,\n        transparent,\n        rgba(100, 150, 210, .4)\n    );\n}\n\n.pix-box {\n    position: relative;\n    z-index: 2;\n    border-radius: 20px;\n    background: rgba(255, 255, 255, .94);\n    border: 1px solid rgba(140, 180, 230, .30);\n    padding: 16px 15px 14px;\n    box-shadow: 0 2px 16px rgba(60, 100, 200, .08);\n}\n\n.pix-row {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    margin-bottom: 11px;\n}\n\n.pix-icon-wrap {\n    width: 44px;\n    height: 44px;\n    border-radius: 14px;\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: linear-gradient(145deg, #7aa4f0, #2a5cc8);\n    color: #fff;\n    font-size: 19px;\n    box-shadow: 0 2px 12px rgba(60, 100, 200, .28);\n}\n\n.pix-label {\n    font-family: 'Cinzel', serif;\n    font-size: 12px;\n    letter-spacing: .12em;\n    text-transform: uppercase;\n    color: #1a3a6b;\n    margin-bottom: 2px;\n}\n\n.pix-sub {\n    font-size: 13px;\n    color: #5a7ab8;\n    font-style: italic;\n}\n\n.pix-key-wrap {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    background: rgba(235, 242, 255, .90);\n    border: 1px solid rgba(140, 180, 230, .28);\n    border-radius: 14px;\n    padding: 10px 13px;\n    margin-bottom: 9px;\n}\n\n.pix-key {\n    flex: 1;\n    font-family: 'Cinzel', serif;\n    font-size: 12px;\n    color: #1a3a6b;\n    letter-spacing: .02em;\n    word-break: break-all;\n}\n\n.pix-copy-btn {\n    flex-shrink: 0;\n    cursor: pointer;\n    border: none;\n    outline: none;\n    border-radius: 10px;\n    padding: 7px 13px;\n    background: linear-gradient(145deg, #7aa4f0, #2a5cc8);\n    color: #fff;\n    font-family: 'Cinzel', serif;\n    font-size: 11px;\n    letter-spacing: .10em;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n    appearance: none;\n    touch-action: manipulation;\n}\n\n.pix-copied {\n    text-align: center;\n    font-size: 13px;\n    color: #2a5cc8;\n    font-style: italic;\n    min-height: 20px;\n    opacity: 0;\n    transition: opacity .3s;\n}\n\n.lp-footer {\n    position: relative;\n    z-index: 2;\n    margin-top: 18px;\n    border-radius: 20px;\n    background: linear-gradient(\n        145deg,\n        rgba(255, 255, 255, .95),\n        rgba(220, 235, 255, .75)\n    );\n    border: 1px solid rgba(120, 170, 230, .30);\n    padding: 16px;\n    text-align: center;\n}\n\n.lp-footer-text {\n    font-size: 15px;\n    color: #2a4a7a;\n    line-height: 1.7;\n    font-style: italic;\n}\n\n.lp-footer-accent {\n    color: #2a5cc8;\n    font-weight: 600;\n    font-family: 'Cinzel', serif;\n    font-size: 12px;\n    letter-spacing: .08em;\n    display: block;\n    margin-top: 6px;\n}\n\n@media (max-width: 480px) {\n    .pix-key-wrap {\n        align-items: stretch;\n        flex-direction: column;\n    }\n\n    .pix-copy-btn {\n        width: 100%;\n        min-height: 42px;\n    }\n}\n</style>\n\n<div class=\"lp-root\">\n\n    <span class=\"snow\" style=\"left:8%; animation-duration:6s;\">❄</span>\n\n    <span class=\"snow\" style=\"left:22%; animation-duration:8s; animation-delay:1.2s; font-size:9px;\">❅</span>\n\n    <span class=\"snow\" style=\"left:38%; animation-duration:7s; animation-delay:2.5s;\">❆</span>\n\n    <span class=\"snow\" style=\"left:55%; animation-duration:9s; animation-delay:.8s; font-size:9px;\">❄</span>\n\n    <span class=\"snow\" style=\"left:70%; animation-duration:6.5s; animation-delay:3s;\">❅</span>\n\n    <span class=\"snow\" style=\"left:85%; animation-duration:8.5s; animation-delay:1.8s; font-size:10px;\">❆</span>\n\n    <div class=\"lp-wrap\">\n\n        <div class=\"lp-header\">\n            <h2>Lista de Presentes</h2>\n            <p class=\"sub\">Com muito carinho e gratidão ✨</p>\n            <span class=\"badge\">❄ Baile de Inverno ❄</span>\n        </div>\n\n        <div class=\"lp-grid\">\n\n            <div class=\"lp-card\">\n                <div class=\"lp-icon icon-blue\">\n                    <i class=\"fa-solid fa-spray-can-sparkles\"></i>\n                </div>\n\n                <div>\n                    <div class=\"lp-title\">Presente</div>\n                    <div class=\"lp-name\">Perfume</div>\n                </div>\n            </div>\n\n            <div class=\"lp-card\">\n                <div class=\"lp-icon icon-light\">\n                    <i class=\"fa-solid fa-palette\"></i>\n                </div>\n\n                <div>\n                    <div class=\"lp-title\">Beleza</div>\n                    <div class=\"lp-name\">Maquiagem</div>\n                </div>\n            </div>\n\n            <div class=\"lp-card\">\n                <div class=\"lp-icon icon-silver\">\n                    <i class=\"fa-solid fa-gem\"></i>\n                </div>\n\n                <div>\n                    <div class=\"lp-title\">Vale-presente</div>\n                    <div class=\"lp-name\">Vivara</div>\n                </div>\n            </div>\n\n            <div class=\"lp-card\">\n                <div class=\"lp-icon icon-deep\">\n                    <i class=\"fa-solid fa-gift\"></i>\n                </div>\n\n                <div>\n                    <div class=\"lp-title\">Vale-presente</div>\n                    <div class=\"lp-name\">Kiko Milano</div>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"lp-divider\">✦ pix ✦</div>\n\n        <div class=\"pix-box\">\n\n            <div class=\"pix-row\">\n\n                <div class=\"pix-icon-wrap\">\n                    <i class=\"fa-solid fa-qrcode\"></i>\n                </div>\n\n                <div>\n                    <div class=\"pix-label\">Chave Pix</div>\n                    <div class=\"pix-sub\">CPF · copie a chave abaixo</div>\n                </div>\n\n            </div>\n\n            <div class=\"pix-key-wrap\">\n\n                <span class=\"pix-key\">541.301.928-92</span>\n\n                <button\n                    class=\"pix-copy-btn\"\n                    type=\"button\"\n                    aria-label=\"Copiar chave Pix\"\n                    onclick=\"\n                        var box = this.closest('.pix-box'),\n                            btn = this,\n                            keyEl = box && box.querySelector('.pix-key'),\n                            msg = box && box.querySelector('.pix-copied');\n\n                        if (!box || !keyEl || !msg) return;\n\n                        var key = keyEl.textContent.trim();\n\n                        if (!btn.dataset.pixCopyOriginal) {\n                            btn.dataset.pixCopyOriginal = btn.innerHTML;\n                        }\n\n                        var copied = function () {\n                            btn.textContent = '✓ Pix copiado';\n                            btn.classList.add('copied');\n\n                            msg.textContent = 'Chave Pix copiada para a área de transferência.';\n                            msg.style.opacity = '1';\n\n                            clearTimeout(btn._pixCopyTimer);\n\n                            btn._pixCopyTimer = setTimeout(function () {\n                                btn.innerHTML = btn.dataset.pixCopyOriginal;\n                                btn.classList.remove('copied');\n                                msg.textContent = '';\n                                msg.style.opacity = '0';\n                            }, 2500);\n                        };\n\n                        var manual = function () {\n                            var ta = null;\n\n                            try {\n                                ta = document.createElement('textarea');\n                                ta.value = key;\n                                ta.setAttribute('readonly', '');\n                                ta.style.position = 'fixed';\n                                ta.style.opacity = '0';\n\n                                document.body.appendChild(ta);\n\n                                ta.select();\n                                ta.setSelectionRange(0, ta.value.length);\n\n                                var didCopy = document.execCommand('copy');\n\n                                if (!didCopy) {\n                                    throw new Error('copy');\n                                }\n\n                                copied();\n\n                            } catch (error) {\n                                msg.textContent = 'Não foi possível copiar automaticamente. Copie a chave: ' + key;\n                                msg.style.opacity = '1';\n\n                            } finally {\n                                if (ta && ta.parentNode) {\n                                    ta.parentNode.removeChild(ta);\n                                }\n                            }\n                        };\n\n                        if (navigator.clipboard && window.isSecureContext) {\n                            navigator.clipboard\n                                .writeText(key)\n                                .then(copied)\n                                .catch(manual);\n                        } else {\n                            manual();\n                        }\n                    \"\n                >\n                    <i class=\"fa-solid fa-copy\" style=\"font-size:12px;\"></i>\n                    Copiar\n                </button>\n\n            </div>\n\n            <p\n                class=\"pix-copied\"\n                role=\"status\"\n                aria-live=\"polite\"\n                aria-atomic=\"true\"\n            ></p>\n\n        </div>\n\n        <div class=\"lp-footer\">\n            <div class=\"lp-footer-text\">\n                Sua presença já é o maior presente desta noite especial.\n            </div>\n\n            <span class=\"lp-footer-accent\">\n                Obrigada por fazer parte desse momento ❄✨\n            </span>\n        </div>\n\n    </div>\n\n</div>"
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
    "buttonGradientColor": "#ec4899",
    "buttonGradientEnabled": false,
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
    "text": "• Nome(s) — Ana Beatriz \n\n• Se aniversário, Idade — 15 anos \n\n• Paleta de CORES — azuis e prata \n\n• TEMA do Convite — baile inverno \n\n• DATA do evento — 09/10/26\n\n• HORA do evento — 19:00 hs \n\n• Música do convite — I wanna be yours- violino\n\n• Endereço do Evento — Buffet Sabor arte & amor av: prestes maia,1310 Diadema \n\n\n\n• Quer Botão Confirmação de Presença? — sim \n\n• Quer Botão Dicas de Presente? — sim \nPresentes : \nperfume \nCalçado : 37 \nRoupa : M\nPix: 541.301.928-92 cpf\n\n• Quer Botão Manual do Convidado? — sim \nManual do convidados : as paletas azuis e prata e exclusiva da debutante \nSeja pontual para não perdemos nada da noite congelante ❄️ \nMissão da Noite:\n* Comer bem. ✅\n* Dançar muito. ✅\n* Tirar muitas fotos. ✅\n* Criar memórias inesquecíveis…",
    "usedAt": "2026-07-28T21:29:10.841Z",
    "source": "fill-fields",
    "completionMode": "complete",
    "buttonDecisions": {
      "manualComConteudo": true,
      "presentesComConteudo": true,
      "manualPremium": false,
      "presentesPremium": false,
      "manualResumo": "As paletas azuis e prata são exclusivas da debutante. Seja pontual para não perdermos nada da noite congelante. Missão da noite: comer bem, dançar muito, tirar muitas fotos e criar memórias inesquecíveis.",
      "presentesResumo": "Perfume. Calçado: 37. Roupa: M. Pix: 541.301.928-92 (CPF)."
    },
    "optionalFeatures": {
      "saveTheDate": {
        "mentioned": false,
        "enabled": false,
        "evidence": "",
        "reason": "not_mentioned"
      },
      "lembrete": {
        "mentioned": false,
        "enabled": false,
        "evidence": "",
        "reason": "not_mentioned"
      },
      "galeriaFotos": {
        "mentioned": false,
        "enabled": false,
        "evidence": "",
        "reason": "not_mentioned"
      },
      "cronometro": {
        "mentioned": false,
        "enabled": false,
        "evidence": "",
        "reason": "not_mentioned"
      }
    },
    "musicPolicy": {
      "mentioned": true,
      "mode": "template",
      "query": "",
      "preserveTemplate": true,
      "hasInheritedMusic": false,
      "evidence": "• Música do convite — I wanna be yours- violino"
    },
    "rsvpPolicy": {
      "mode": "none",
      "whatsapp": ""
    },
    "workflow": {
      "runId": "1785274133946",
      "initiatedBy": "user",
      "publicationAuthorized": true,
      "startedAt": "2026-07-28T21:29:10.855Z"
    },
    "modelUpdate": {
      "requestedMode": false,
      "resolved": false,
      "compatible": false,
      "reasons": [
        "theme_mismatch"
      ],
      "themeCompatible": false,
      "paletteCompatible": true,
      "missingColors": [],
      "sourceTheme": "Baile de Inverno",
      "sourcePalette": "Prata, Azul e Branco",
      "targetTheme": "baile inverno",
      "targetPalette": "Azul com Prata"
    },
    "assetDecisions": {
      "cover": {
        "inherited": true,
        "reused": true,
        "reuseApproved": true
      },
      "opening": {
        "inherited": true,
        "reused": true,
        "reuseApproved": true,
        "requestedType": "longa"
      }
    },
    "musicResolution": {
      "mode": "downloaded",
      "detail": "Música localizada e aplicada.",
      "query": "I wanna be yours- violino",
      "resolvedAt": "2026-07-28T21:29:30.312Z"
    }
  }
};
