window.config = {
  "evento": {
    "tipo": "Debutante",
    "nome": "Ana Clara",
    "idade": 15,
    "data": "2026-09-18",
    "hora": "21:00",
    "horaTermino": "",
    "endereco": "R. Barão de Indaiá, 1434 - Flores, Maison Myrla eventos",
    "frase1": "",
    "frase2": "",
    "frase3": ""
  },
  "convite": {
    "paletaCores": "Verde com Dourado",
    "tema": "Princesa e o Sapo",
    "musica": "assets/music_1785190896879.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "AnaClara-15Anos",
    "seo": {
      "pageTitle": "",
      "ogTitle": "Você recebeu um convite especial!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1785190896879.jpg",
    "cartao": "",
    "aberturaSlides": [
      "assets/slide1_1785190896879.mp4",
      "assets/slide2_1785190896879.jpg",
      "assets/slide3_1785190896879.mp4",
      "assets/slide4_1785190896879.jpg"
    ],
    "aberturaSlidesMeta": [
      {
        "filePath": "assets/slide1_1785190896879.mp4",
        "label": "Abertura (Vídeo)",
        "type": "video"
      },
      {
        "filePath": "assets/slide2_1785190896879.jpg",
        "label": "Convite Especial",
        "type": "image"
      },
      {
        "filePath": "assets/slide3_1785190896879.mp4",
        "label": "Cena Temática",
        "type": "video"
      },
      {
        "filePath": "assets/slide4_1785190896879.jpg",
        "label": "Prepare-se",
        "type": "image"
      }
    ],
    "folhaVazia": "assets/folha_vazia_1785190896879.png",
    "folhaPreenchida": "assets/folha_1785190896879.jpg",
    "musica": "assets/music_1785190896879.mp3",
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
      "id": "btn_f0ee7d62-f165-4973-98eb-3364bb8e20ff",
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/YeMXWs3ZmQX9kHc36"
    },
    {
      "id": "btn_63a9d5c8-54d8-4615-b844-6acc33aad63a",
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "559281251018",
      "rsvpConfig": {
        "exibirNome": true,
        "exibirWhatsapp": false,
        "exibirAcompanhantes": false
      }
    },
    {
      "id": "btn_ba7f2942-0bdc-4088-af89-256331eb2663",
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<link\n  href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap\"\n  rel=\"stylesheet\"\n>\n\n<link\n  rel=\"stylesheet\"\n  href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\"\n>\n\n<style>\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.mc-wrap {\n  --verde-escuro: #123d2b;\n  --verde-medio: #286348;\n  --verde-fundo: #eaf3ed;\n\n  --dourado-escuro: #805b16;\n  --dourado: #c89a35;\n  --dourado-claro: #f4d878;\n\n  position: relative;\n  isolation: isolate;\n  overflow: hidden;\n\n  width: 100%;\n  padding: 36px 18px 40px;\n\n  font-family: \"Cormorant Garamond\", serif;\n\n  background-color: #eaf3ed !important;\n  background-image: linear-gradient(\n    160deg,\n    #f8fcf9 0%,\n    #e3efe7 48%,\n    #f2f8f4 100%\n  ) !important;\n}\n\n/* Moldura externa dourada metalizada */\n.mc-wrap::before {\n  content: \"\";\n  position: absolute;\n  inset: 8px;\n  z-index: 0;\n\n  padding: 2px;\n  border-radius: 28px;\n  pointer-events: none;\n\n  background: linear-gradient(\n    120deg,\n    #6f4b0c 0%,\n    #c8952f 16%,\n    #fff0a2 32%,\n    #a16f18 48%,\n    #f1ce6b 68%,\n    #7a5310 84%,\n    #d8aa47 100%\n  );\n\n  -webkit-mask:\n    linear-gradient(#ffffff 0 0) content-box,\n    linear-gradient(#ffffff 0 0);\n\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n\n  filter: drop-shadow(0 1px 2px rgba(100, 70, 10, 0.25));\n}\n\n/* Cabeçalho */\n.mc-header {\n  position: relative;\n  z-index: 3;\n  margin-bottom: 10px;\n  text-align: center;\n}\n\n.mc-crown {\n  display: block;\n  margin-bottom: 7px;\n\n  color: var(--dourado);\n  font-size: 25px;\n\n  text-shadow:\n    0 1px 0 #fff0a5,\n    0 2px 3px rgba(100, 70, 15, 0.3);\n\n  animation: crownFloat 4s ease-in-out infinite;\n}\n\n@keyframes crownFloat {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n\n  50% {\n    transform: translateY(-5px);\n  }\n}\n\n.mc-header h2 {\n  margin-bottom: 5px;\n\n  color: var(--verde-escuro);\n  font-family: \"Cinzel\", serif;\n  font-size: 22px;\n  font-weight: 600;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n\n.mc-header p {\n  color: var(--verde-medio);\n  font-size: 14.5px;\n  font-style: italic;\n}\n\n.mc-sub {\n  position: relative;\n  z-index: 3;\n\n  margin-bottom: 24px;\n\n  color: var(--dourado-escuro);\n  font-family: \"Cinzel\", serif;\n  font-size: 11px;\n  letter-spacing: 0.12em;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.mc-sub::before,\n.mc-sub::after {\n  content: \"\";\n  display: inline-block;\n\n  width: 36px;\n  height: 1px;\n  margin: 0 9px;\n\n  vertical-align: middle;\n}\n\n.mc-sub::before {\n  background: linear-gradient(\n    to right,\n    transparent,\n    var(--dourado)\n  );\n}\n\n.mc-sub::after {\n  background: linear-gradient(\n    to left,\n    transparent,\n    var(--dourado)\n  );\n}\n\n/* Lista */\n.mc-grid {\n  position: relative;\n  z-index: 3;\n\n  display: grid;\n  gap: 13px;\n}\n\n/* Cards */\n.mc-card {\n  position: relative;\n  overflow: hidden;\n\n  border-radius: 20px;\n\n  background-color: #ffffff !important;\n  background-image: linear-gradient(\n    145deg,\n    #ffffff 0%,\n    #f9fcfa 100%\n  ) !important;\n\n  box-shadow:\n    0 4px 17px rgba(18, 61, 43, 0.09),\n    inset 0 0 8px rgba(18, 61, 43, 0.025);\n\n  animation: mcFade 0.6s ease both;\n}\n\n/* Contorno dourado dos cards */\n.mc-card::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n\n  padding: 1.5px;\n  border-radius: 20px;\n  pointer-events: none;\n\n  background: linear-gradient(\n    125deg,\n    #73500f 0%,\n    #d4a33e 18%,\n    #fff0a1 34%,\n    #926516 50%,\n    #ebc65e 70%,\n    #795310 88%,\n    #d4a33e 100%\n  );\n\n  -webkit-mask:\n    linear-gradient(#ffffff 0 0) content-box,\n    linear-gradient(#ffffff 0 0);\n\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n}\n\n/* Reflexo suave */\n.mc-card::after {\n  content: \"\";\n  position: absolute;\n  top: -80%;\n  left: -55%;\n  z-index: 1;\n\n  width: 25%;\n  height: 250%;\n\n  opacity: 0.18;\n  pointer-events: none;\n  transform: rotate(25deg);\n\n  background: linear-gradient(\n    to right,\n    transparent,\n    rgba(255, 255, 255, 0.9),\n    transparent\n  );\n\n  animation: goldShine 7s ease-in-out infinite;\n}\n\n@keyframes goldShine {\n  0%,\n  65% {\n    left: -55%;\n  }\n\n  85%,\n  100% {\n    left: 125%;\n  }\n}\n\n@keyframes mcFade {\n  from {\n    opacity: 0;\n    transform: translateY(11px);\n  }\n\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.mc-top {\n  position: relative;\n  z-index: 2;\n\n  display: flex;\n  align-items: center;\n  gap: 13px;\n\n  padding: 15px;\n}\n\n.mc-icon {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n\n  width: 46px;\n  height: 46px;\n\n  border: 1px solid rgba(228, 185, 78, 0.75);\n  border-radius: 14px;\n\n  background: linear-gradient(\n    145deg,\n    #0e3524 0%,\n    #28694a 52%,\n    #123d2b 100%\n  );\n\n  color: #f3d578;\n  font-size: 18px;\n\n  box-shadow:\n    0 3px 11px rgba(18, 61, 43, 0.23),\n    inset 0 1px 2px rgba(255, 245, 190, 0.18);\n}\n\n.mc-title {\n  margin-bottom: 4px;\n\n  color: var(--dourado-escuro);\n  font-family: \"Cinzel\", serif;\n  font-size: 11.5px;\n  font-weight: 600;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n\n.mc-text {\n  color: #26372f;\n  font-size: 15px;\n  line-height: 1.55;\n}\n\n.mc-text strong {\n  color: var(--verde-escuro);\n  font-weight: 600;\n}\n\n.mc-size {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n\n  margin-top: 5px;\n  padding: 3px 10px;\n\n  border: 1px solid rgba(40, 99, 72, 0.2);\n  border-radius: 30px;\n\n  background: rgba(227, 239, 231, 0.7);\n\n  color: var(--verde-escuro);\n  font-size: 12.5px;\n  font-style: italic;\n}\n\n/* Card de observação */\n.mc-note {\n  position: relative;\n  z-index: 3;\n\n  margin-top: 14px;\n  padding: 14px 16px;\n\n  border: 1px solid rgba(200, 154, 53, 0.45);\n  border-radius: 18px;\n\n  background: linear-gradient(\n    145deg,\n    #f5faf7,\n    #e6f0e9\n  );\n\n  color: var(--verde-escuro);\n  font-size: 13.5px;\n  font-style: italic;\n  line-height: 1.55;\n  text-align: center;\n\n  box-shadow: 0 3px 14px rgba(18, 61, 43, 0.07);\n}\n\n/* Decorações de fundo */\n.mc-flower {\n  position: absolute;\n  z-index: 1;\n\n  color: rgba(18, 61, 43, 0.065);\n  pointer-events: none;\n}\n\n.mc-flower-one {\n  top: -32px;\n  left: -30px;\n\n  font-size: 150px;\n  transform: rotate(-15deg);\n}\n\n.mc-flower-two {\n  right: -24px;\n  bottom: -30px;\n\n  font-size: 125px;\n  transform: rotate(20deg);\n}\n\n.mc-leaf {\n  position: absolute;\n  z-index: 1;\n\n  color: rgba(18, 61, 43, 0.07);\n  font-size: 90px;\n  pointer-events: none;\n}\n\n.mc-leaf-one {\n  top: 43%;\n  left: -25px;\n\n  transform: rotate(-30deg);\n}\n\n.mc-star {\n  position: absolute;\n  z-index: 2;\n\n  color: rgba(172, 123, 28, 0.5);\n  font-size: 11px;\n\n  pointer-events: none;\n  animation: starAnim 3s ease-in-out infinite;\n}\n\n@keyframes starAnim {\n  0%,\n  100% {\n    opacity: 0;\n    transform: scale(0);\n  }\n\n  50% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n@media (max-width: 420px) {\n  .mc-wrap {\n    padding: 31px 14px 35px;\n  }\n\n  .mc-header h2 {\n    font-size: 19px;\n    letter-spacing: 0.1em;\n  }\n\n  .mc-header p {\n    font-size: 13.5px;\n  }\n\n  .mc-sub {\n    font-size: 9.5px;\n  }\n\n  .mc-sub::before,\n  .mc-sub::after {\n    width: 22px;\n    margin: 0 5px;\n  }\n\n  .mc-top {\n    gap: 11px;\n    padding: 14px;\n  }\n\n  .mc-icon {\n    width: 43px;\n    height: 43px;\n  }\n\n  .mc-text {\n    font-size: 14.5px;\n  }\n}\n</style>\n\n<div class=\"mc-wrap\">\n\n  <!-- Decorações -->\n  <i class=\"fa-regular fa-sun mc-flower mc-flower-one\"></i>\n  <i class=\"fa-regular fa-sun mc-flower mc-flower-two\"></i>\n  <i class=\"fa-solid fa-leaf mc-leaf mc-leaf-one\"></i>\n\n  <span\n    class=\"mc-star\"\n    style=\"top: 8%; left: 9%; animation-delay: 0s;\"\n  >\n    ✦\n  </span>\n\n  <span\n    class=\"mc-star\"\n    style=\"top: 16%; right: 12%; animation-delay: 1.1s;\"\n  >\n    ✧\n  </span>\n\n  <span\n    class=\"mc-star\"\n    style=\"top: 39%; right: 7%; animation-delay: 1.6s;\"\n  >\n    ✦\n  </span>\n\n  <span\n    class=\"mc-star\"\n    style=\"bottom: 14%; left: 12%; animation-delay: 2s;\"\n  >\n    ✧\n  </span>\n\n  <span\n    class=\"mc-star\"\n    style=\"bottom: 6%; right: 11%; animation-delay: 0.6s;\"\n  >\n    ✦\n  </span>\n\n  <!-- Cabeçalho -->\n  <div class=\"mc-header\">\n    <span class=\"mc-crown\">\n      <i class=\"fa-solid fa-gift\"></i>\n    </span>\n\n    <h2>Lista de Presentes</h2>\n\n    <p>\n      Algumas sugestões escolhidas com muito carinho\n    </p>\n  </div>\n\n  <div class=\"mc-sub\">\n    sugestões de presentes\n  </div>\n\n  <!-- Lista de presentes -->\n  <div class=\"mc-grid\">\n\n    <!-- Flamengo -->\n    <div\n      class=\"mc-card\"\n      style=\"animation-delay: 0.04s;\"\n    >\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\">\n          <i class=\"fa-solid fa-shirt\"></i>\n        </div>\n\n        <div>\n          <div class=\"mc-title\">\n            Camisa do Flamengo\n          </div>\n\n          <div class=\"mc-text\">\n            Camisa oficial e original do Flamengo.\n          </div>\n\n          <div class=\"mc-size\">\n            <i class=\"fa-solid fa-ruler\"></i>\n            Tamanho M\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Pijama Puket -->\n    <div\n      class=\"mc-card\"\n      style=\"animation-delay: 0.08s;\"\n    >\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\">\n          <i class=\"fa-solid fa-moon\"></i>\n        </div>\n\n        <div>\n          <div class=\"mc-title\">\n            Pijama Puket\n          </div>\n\n          <div class=\"mc-text\">\n            Pijama da Puket, podendo ser com short ou com calça.\n          </div>\n\n          <div class=\"mc-size\">\n            <i class=\"fa-solid fa-ruler\"></i>\n            M com short • G com calça\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Wepink -->\n    <div\n      class=\"mc-card\"\n      style=\"animation-delay: 0.12s;\"\n    >\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\">\n          <i class=\"fa-solid fa-spray-can-sparkles\"></i>\n        </div>\n\n        <div>\n          <div class=\"mc-title\">\n            Wepink\n          </div>\n\n          <div class=\"mc-text\">\n            Body splash ou perfume da Wepink.\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- O Boticário -->\n    <div\n      class=\"mc-card\"\n      style=\"animation-delay: 0.16s;\"\n    >\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\">\n          <i class=\"fa-solid fa-spa\"></i>\n        </div>\n\n        <div>\n          <div class=\"mc-title\">\n            O Boticário\n          </div>\n\n          <div class=\"mc-text\">\n            Kits das linhas Lily, Glamour, entre outras opções.\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Melissa -->\n    <div\n      class=\"mc-card\"\n      style=\"animation-delay: 0.20s;\"\n    >\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\">\n          <i class=\"fa-solid fa-shoe-prints\"></i>\n        </div>\n\n        <div>\n          <div class=\"mc-title\">\n            Melissa\n          </div>\n\n          <div class=\"mc-text\">\n            Calçados da marca Melissa.\n          </div>\n\n          <div class=\"mc-size\">\n            <i class=\"fa-solid fa-ruler\"></i>\n            Tamanho 38/39\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Santa Lolla -->\n    <div\n      class=\"mc-card\"\n      style=\"animation-delay: 0.24s;\"\n    >\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\">\n          <i class=\"fa-solid fa-bag-shopping\"></i>\n        </div>\n\n        <div>\n          <div class=\"mc-title\">\n            Santa Lolla\n          </div>\n\n          <div class=\"mc-text\">\n            Bolsas ou tênis da Santa Lolla.\n          </div>\n\n          <div class=\"mc-size\">\n            <i class=\"fa-solid fa-ruler\"></i>\n            Tênis tamanho 38/39\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- FARM -->\n    <div\n      class=\"mc-card\"\n      style=\"animation-delay: 0.28s;\"\n    >\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\">\n          <i class=\"fa-solid fa-person-dress\"></i>\n        </div>\n\n        <div>\n          <div class=\"mc-title\">\n            Vestidos FARM\n          </div>\n\n          <div class=\"mc-text\">\n            Vestidos da FARM, disponíveis no Amazonas Shopping.\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Sapatinho de Luxo -->\n    <div\n      class=\"mc-card\"\n      style=\"animation-delay: 0.32s;\"\n    >\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\">\n          <i class=\"fa-solid fa-gem\"></i>\n        </div>\n\n        <div>\n          <div class=\"mc-title\">\n            Sapatinho de Luxo\n          </div>\n\n          <div class=\"mc-text\">\n            Calçados da loja Sapatinho de Luxo.\n          </div>\n\n          <div class=\"mc-size\">\n            <i class=\"fa-solid fa-ruler\"></i>\n            Tamanho 38/39\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"mc-note\">\n    <i class=\"fa-solid fa-heart\"></i>\n    Estas são apenas sugestões. O mais importante é poder\n    compartilhar este momento especial com você!\n  </div>\n\n</div>"
    },
    {
      "id": "btn_1d3697f2-c52b-41c1-a9f1-c432c730a2a1",
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<link\n  href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap\"\n  rel=\"stylesheet\"\n>\n\n<link\n  rel=\"stylesheet\"\n  href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\"\n>\n\n<style>\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.mc-wrap {\n  --verde-escuro: #123d2b;\n  --verde-medio: #286348;\n  --verde-fundo: #eaf3ed;\n\n  --dourado-escuro: #805b16;\n  --dourado: #c89a35;\n  --dourado-claro: #f4d878;\n\n  position: relative;\n  isolation: isolate;\n  overflow: hidden;\n\n  width: 100%;\n  padding: 36px 18px 40px;\n\n  font-family: \"Cormorant Garamond\", serif;\n\n  /* Fundo totalmente verde, sem dourado */\n  background-color: #eaf3ed !important;\n  background-image: linear-gradient(\n    160deg,\n    #f8fcf9 0%,\n    #e3efe7 48%,\n    #f2f8f4 100%\n  ) !important;\n}\n\n/* Moldura metalizada: somente o contorno */\n.mc-wrap::before {\n  content: \"\";\n  position: absolute;\n  inset: 8px;\n  z-index: 0;\n\n  padding: 2px;\n  border-radius: 28px;\n  pointer-events: none;\n\n  background: linear-gradient(\n    120deg,\n    #6f4b0c 0%,\n    #c8952f 16%,\n    #fff0a2 32%,\n    #a16f18 48%,\n    #f1ce6b 68%,\n    #7a5310 84%,\n    #d8aa47 100%\n  );\n\n  -webkit-mask:\n    linear-gradient(#ffffff 0 0) content-box,\n    linear-gradient(#ffffff 0 0);\n\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n\n  filter: drop-shadow(0 1px 2px rgba(100, 70, 10, 0.25));\n}\n\n/* Cabeçalho */\n.mc-header {\n  position: relative;\n  z-index: 3;\n  margin-bottom: 10px;\n  text-align: center;\n}\n\n.mc-crown {\n  display: block;\n  margin-bottom: 7px;\n\n  color: var(--dourado);\n  font-size: 25px;\n\n  text-shadow:\n    0 1px 0 #fff0a5,\n    0 2px 3px rgba(100, 70, 15, 0.3);\n\n  animation: crownFloat 4s ease-in-out infinite;\n}\n\n@keyframes crownFloat {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n\n  50% {\n    transform: translateY(-5px);\n  }\n}\n\n.mc-header h2 {\n  margin-bottom: 5px;\n\n  color: var(--verde-escuro);\n  font-family: \"Cinzel\", serif;\n  font-size: 22px;\n  font-weight: 600;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n}\n\n.mc-header p {\n  color: var(--verde-medio);\n  font-size: 14.5px;\n  font-style: italic;\n}\n\n.mc-sub {\n  position: relative;\n  z-index: 3;\n\n  margin-bottom: 24px;\n\n  color: var(--dourado-escuro);\n  font-family: \"Cinzel\", serif;\n  font-size: 11px;\n  letter-spacing: 0.12em;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.mc-sub::before,\n.mc-sub::after {\n  content: \"\";\n  display: inline-block;\n\n  width: 36px;\n  height: 1px;\n  margin: 0 9px;\n\n  vertical-align: middle;\n}\n\n.mc-sub::before {\n  background: linear-gradient(\n    to right,\n    transparent,\n    var(--dourado)\n  );\n}\n\n.mc-sub::after {\n  background: linear-gradient(\n    to left,\n    transparent,\n    var(--dourado)\n  );\n}\n\n/* Cards */\n.mc-grid {\n  position: relative;\n  z-index: 3;\n\n  display: grid;\n  gap: 13px;\n}\n\n.mc-card {\n  position: relative;\n  overflow: hidden;\n\n  border-radius: 20px;\n\n  /* Interior totalmente branco, sem transparência */\n  background-color: #ffffff !important;\n  background-image: linear-gradient(\n    145deg,\n    #ffffff 0%,\n    #f9fcfa 100%\n  ) !important;\n\n  box-shadow:\n    0 4px 17px rgba(18, 61, 43, 0.09),\n    inset 0 0 8px rgba(18, 61, 43, 0.025);\n\n  animation: mcFade 0.6s ease both;\n}\n\n/* Contorno dourado dos cards sem preencher o interior */\n.mc-card::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n\n  padding: 1.5px;\n  border-radius: 20px;\n  pointer-events: none;\n\n  background: linear-gradient(\n    125deg,\n    #73500f 0%,\n    #d4a33e 18%,\n    #fff0a1 34%,\n    #926516 50%,\n    #ebc65e 70%,\n    #795310 88%,\n    #d4a33e 100%\n  );\n\n  -webkit-mask:\n    linear-gradient(#ffffff 0 0) content-box,\n    linear-gradient(#ffffff 0 0);\n\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n}\n\n/* Reflexo passando somente sobre o card */\n.mc-card::after {\n  content: \"\";\n  position: absolute;\n  top: -80%;\n  left: -55%;\n  z-index: 1;\n\n  width: 25%;\n  height: 250%;\n\n  opacity: 0.18;\n  pointer-events: none;\n  transform: rotate(25deg);\n\n  background: linear-gradient(\n    to right,\n    transparent,\n    rgba(255, 255, 255, 0.9),\n    transparent\n  );\n\n  animation: goldShine 7s ease-in-out infinite;\n}\n\n@keyframes goldShine {\n  0%,\n  65% {\n    left: -55%;\n  }\n\n  85%,\n  100% {\n    left: 125%;\n  }\n}\n\n@keyframes mcFade {\n  from {\n    opacity: 0;\n    transform: translateY(11px);\n  }\n\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.mc-top {\n  position: relative;\n  z-index: 2;\n\n  display: flex;\n  align-items: flex-start;\n  gap: 13px;\n\n  padding: 15px;\n}\n\n.mc-icon {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n\n  width: 46px;\n  height: 46px;\n\n  border: 1px solid rgba(228, 185, 78, 0.75);\n  border-radius: 14px;\n\n  background: linear-gradient(\n    145deg,\n    #0e3524 0%,\n    #28694a 52%,\n    #123d2b 100%\n  );\n\n  color: #f3d578;\n  font-size: 18px;\n\n  box-shadow:\n    0 3px 11px rgba(18, 61, 43, 0.23),\n    inset 0 1px 2px rgba(255, 245, 190, 0.18);\n}\n\n.mc-title {\n  margin-bottom: 4px;\n\n  color: var(--dourado-escuro);\n  font-family: \"Cinzel\", serif;\n  font-size: 11.5px;\n  font-weight: 600;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n\n.mc-text {\n  color: #26372f;\n  font-size: 15px;\n  line-height: 1.55;\n}\n\n.mc-text strong {\n  color: var(--verde-escuro);\n  font-weight: 600;\n}\n\n.mc-divider {\n  position: relative;\n  z-index: 2;\n\n  height: 1px;\n  margin: 0 15px;\n\n  background: linear-gradient(\n    to right,\n    transparent,\n    rgba(185, 137, 38, 0.45),\n    transparent\n  );\n}\n\n.mc-body {\n  position: relative;\n  z-index: 2;\n\n  padding: 11px 15px 15px;\n}\n\n/* Card de destaque */\n.mc-card-important {\n  background-color: #f2f8f4 !important;\n  background-image: linear-gradient(\n    145deg,\n    #f8fcf9 0%,\n    #e8f2eb 100%\n  ) !important;\n}\n\n.mc-card-important .mc-top {\n  align-items: center;\n}\n\n.mc-card-important .mc-title {\n  margin-bottom: 0;\n\n  color: var(--verde-escuro);\n  font-size: 13px;\n}\n\n.mc-card-important .mc-icon {\n  background: linear-gradient(\n    145deg,\n    #0d3323,\n    #28694a,\n    #123d2b\n  );\n\n  color: #f3d578;\n}\n\n/* Decorações verdes no fundo */\n.mc-flower {\n  position: absolute;\n  z-index: 1;\n\n  color: rgba(18, 61, 43, 0.065);\n  pointer-events: none;\n}\n\n.mc-flower-one {\n  top: -32px;\n  left: -30px;\n\n  font-size: 150px;\n  transform: rotate(-15deg);\n}\n\n.mc-flower-two {\n  right: -24px;\n  bottom: -30px;\n\n  font-size: 125px;\n  transform: rotate(20deg);\n}\n\n.mc-leaf {\n  position: absolute;\n  z-index: 1;\n\n  color: rgba(18, 61, 43, 0.07);\n  font-size: 90px;\n  pointer-events: none;\n}\n\n.mc-leaf-one {\n  top: 43%;\n  left: -25px;\n\n  transform: rotate(-30deg);\n}\n\n.mc-star {\n  position: absolute;\n  z-index: 2;\n\n  color: rgba(172, 123, 28, 0.5);\n  font-size: 11px;\n\n  pointer-events: none;\n  animation: starAnim 3s ease-in-out infinite;\n}\n\n@keyframes starAnim {\n  0%,\n  100% {\n    opacity: 0;\n    transform: scale(0);\n  }\n\n  50% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n@media (max-width: 420px) {\n  .mc-wrap {\n    padding: 31px 14px 35px;\n  }\n\n  .mc-header h2 {\n    font-size: 19px;\n    letter-spacing: 0.11em;\n  }\n\n  .mc-header p {\n    font-size: 13.5px;\n  }\n\n  .mc-sub {\n    font-size: 9.5px;\n  }\n\n  .mc-sub::before,\n  .mc-sub::after {\n    width: 22px;\n    margin: 0 5px;\n  }\n\n  .mc-top {\n    gap: 11px;\n    padding: 14px;\n  }\n\n  .mc-icon {\n    width: 43px;\n    height: 43px;\n  }\n\n  .mc-text {\n    font-size: 14.5px;\n  }\n}\n</style>\n\n<div class=\"mc-wrap\">\n\n  <!-- Decorações -->\n  <i class=\"fa-regular fa-sun mc-flower mc-flower-one\"></i>\n  <i class=\"fa-regular fa-sun mc-flower mc-flower-two\"></i>\n  <i class=\"fa-solid fa-leaf mc-leaf mc-leaf-one\"></i>\n\n  <span\n    class=\"mc-star\"\n    style=\"top: 8%; left: 9%; animation-delay: 0s;\"\n  >\n    ✦\n  </span>\n\n  <span\n    class=\"mc-star\"\n    style=\"top: 16%; right: 12%; animation-delay: 1.1s;\"\n  >\n    ✧\n  </span>\n\n  <span\n    class=\"mc-star\"\n    style=\"top: 39%; right: 7%; animation-delay: 1.6s;\"\n  >\n    ✦\n  </span>\n\n  <span\n    class=\"mc-star\"\n    style=\"bottom: 14%; left: 12%; animation-delay: 2s;\"\n  >\n    ✧\n  </span>\n\n  <span\n    class=\"mc-star\"\n    style=\"bottom: 6%; right: 11%; animation-delay: 0.6s;\"\n  >\n    ✦\n  </span>\n\n  <!-- Cabeçalho -->\n  <div class=\"mc-header\">\n    <span class=\"mc-crown\">\n      <i class=\"fa-solid fa-crown\"></i>\n    </span>\n\n    <h2>Manual do Convidado</h2>\n\n    <p>\n      Orientações importantes para celebrarmos juntos\n      este momento especial\n    </p>\n  </div>\n\n  <div class=\"mc-sub\">\n    informações importantes\n  </div>\n\n  <div class=\"mc-grid\">\n\n    <!-- Horário -->\n    <div\n      class=\"mc-card\"\n      style=\"animation-delay: 0.04s;\"\n    >\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\">\n          <i class=\"fa-solid fa-clock\"></i>\n        </div>\n\n        <div>\n          <div class=\"mc-title\">\n            Chegue no horário\n          </div>\n\n          <div class=\"mc-text\">\n            Sua presença pontual é muito importante para nós.\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Confirmação -->\n    <div\n      class=\"mc-card\"\n      style=\"animation-delay: 0.09s;\"\n    >\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\">\n          <i class=\"fa-solid fa-calendar-check\"></i>\n        </div>\n\n        <div>\n          <div class=\"mc-title\">\n            Confirme sua presença\n          </div>\n\n          <div class=\"mc-text\">\n            Por favor, confirme sua presença pelo menos\n            <strong>15 dias antes do evento.</strong>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"mc-divider\"></div>\n\n      <div class=\"mc-body\">\n        <div class=\"mc-text\">\n          Depois desse prazo, você não conseguirá participar\n          da festa.\n        </div>\n      </div>\n    </div>\n\n    <!-- Convidado não convida -->\n    <div\n      class=\"mc-card mc-card-important\"\n      style=\"animation-delay: 0.14s;\"\n    >\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\">\n          <i class=\"fa-solid fa-user-lock\"></i>\n        </div>\n\n        <div>\n          <div class=\"mc-title\">\n            Convidado não convida!\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Divirta-se -->\n    <div\n      class=\"mc-card\"\n      style=\"animation-delay: 0.19s;\"\n    >\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\">\n          <i class=\"fa-solid fa-champagne-glasses\"></i>\n        </div>\n\n        <div>\n          <div class=\"mc-title\">\n            Divirta-se bastante\n          </div>\n\n          <div class=\"mc-text\">\n            Estamos ansiosos para celebrar este momento\n            especial com você.\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Abraço e bolo -->\n    <div\n      class=\"mc-card\"\n      style=\"animation-delay: 0.24s;\"\n    >\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\">\n          <i class=\"fa-solid fa-cake-candles\"></i>\n        </div>\n\n        <div>\n          <div class=\"mc-title\">\n            Não vá embora sem se despedir\n          </div>\n\n          <div class=\"mc-text\">\n            Não vá embora sem me dar um abraço e comer\n            um pedaço do bolo.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"mc-divider\"></div>\n\n      <div class=\"mc-body\">\n        <div class=\"mc-text\">\n          Queremos compartilhar cada instante com você.\n        </div>\n      </div>\n    </div>\n\n    <!-- Cerimonial -->\n    <div\n      class=\"mc-card\"\n      style=\"animation-delay: 0.29s;\"\n    >\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\">\n          <i class=\"fa-solid fa-volume-low\"></i>\n        </div>\n\n        <div>\n          <div class=\"mc-title\">\n            Durante o cerimonial\n          </div>\n\n          <div class=\"mc-text\">\n            Por favor, preste atenção e não faça barulho.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"mc-divider\"></div>\n\n      <div class=\"mc-body\">\n        <div class=\"mc-text\">\n          É um momento muito importante e especial para nós.\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"
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
    "buttonColor": "#2f6b2f",
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
    "text": "*• Nome(s)* — Ana Clara \n\n*• Se aniversário, Idade* — 15\n\n*• Paleta de CORES* — Verde e Dourado/ Convidados proibido ir de verde \n\n*• TEMA do Convite* — Princesa Tiana (A princesa e o Sapo)\n\n*• DATA do evento* — 18.09.2026\n\n*• HORA do evento* — 21 horas as 2 da manhã \n\n*• Música do convite* — \nQuase lá. Filme princesa e o sapo \n*• Endereço do Evento* — R. Barão de Indaiá, 1434 - Flores \nMaison Myrla eventos \n\n*• Quer Botão Confirmação de Presença?* — Sim\n\n*• Quer Botão Dicas de Presente?* — Sim \n\n\n\n*• Quer Botão Manual do Convidado?* — Sim",
    "usedAt": "2026-07-27T21:50:59.384Z",
    "source": "fill-fields",
    "completionMode": "complete",
    "buttonDecisions": {
      "manualComConteudo": false,
      "presentesComConteudo": false,
      "manualPremium": false,
      "presentesPremium": false,
      "manualResumo": "",
      "presentesResumo": ""
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
      "hasInheritedMusic": true,
      "evidence": "*• Música do convite* —"
    },
    "rsvpPolicy": {
      "mode": "none",
      "whatsapp": ""
    },
    "workflow": {
      "runId": "1785189048548",
      "initiatedBy": "user",
      "publicationAuthorized": true,
      "startedAt": "2026-07-27T21:50:59.401Z"
    },
    "musicResolution": {
      "mode": "template",
      "detail": "Briefing pediu explicitamente a música da origem.",
      "query": "",
      "resolvedAt": "2026-07-27T21:50:59.406Z"
    },
    "assetDecisions": {
      "cover": {
        "inherited": true,
        "reused": false,
        "reuseApproved": false
      },
      "opening": {
        "inherited": true,
        "reused": false,
        "reuseApproved": false,
        "requestedType": "longa"
      }
    }
  }
};
