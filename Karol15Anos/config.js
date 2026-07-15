window.config = {
  "evento": {
    "tipo": "Debutante",
    "nome": "Karol",
    "idade": 15,
    "data": "2026-10-23",
    "hora": "21:00",
    "horaTermino": "",
    "endereco": "Mansâo Isadora Cortez \nR. Fernando Falcão, 475 - Parque da Mooca, São Paulo - SP, 03180-000",
    "frase1": "",
    "frase2": "",
    "frase3": ""
  },
  "convite": {
    "paletaCores": "Marsala vinho com pink",
    "tema": "Elegante",
    "musica": "assets/music_1784138594256.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Karol15Anos",
    "seo": {
      "pageTitle": "Convite Especial",
      "ogTitle": "Você recebeu um convite especial!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1784138594256.jpg",
    "cartao": "assets/cartao_gen_1784138594256.jpg",
    "aberturaSlides": [
      "assets/slide1_1784138594256.mp4",
      "assets/slide2_1784138594256.jpg",
      "assets/slide3_1784138594256.mp4",
      "assets/slide4_1784138594256.jpg"
    ],
    "aberturaSlidesMeta": [
      {
        "filePath": "assets/slide1_1784138594256.mp4",
        "label": "Abertura (Video)",
        "type": "video"
      },
      {
        "filePath": "assets/slide2_1784138594256.jpg",
        "label": "Convite Especial",
        "type": "image"
      },
      {
        "filePath": "assets/slide3_1784138594256.mp4",
        "label": "Cena Tematica",
        "type": "video"
      },
      {
        "filePath": "assets/slide4_1784138594256.jpg",
        "label": "Prepare-se",
        "type": "image"
      }
    ],
    "folhaVazia": "assets/folha_vazia_1784138594256.jpg",
    "folhaPreenchida": "assets/folha_1784138594256.jpg",
    "musica": "assets/music_1784138594256.mp3",
    "fabric": {
      "saveTheDate": {
        "referencia": "assets/fabric_save_the_date_ref_1784138594256.jpg",
        "resultado": "assets/save_the_date_1784066548244_1784138594256.mp4",
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
      "conteudo": "https://maps.app.goo.gl/6joig6hFwTHoPktM8"
    },
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "conteudo": "https://fantastic-empanada-493beb.netlify.app/"
    },
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Dress Code",
      "icone": "fa-solid fa-shirt",
      "conteudo": "<style>\n  .dress-code-root,\n  .dress-code-root *,\n  .dress-code-root *::before,\n  .dress-code-root *::after {\n    box-sizing: border-box;\n    color-scheme: light only;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  .dress-code-root {\n    --dc-marsala: #7b263d;\n    --dc-wine: #4e1226;\n    --dc-deep-wine: #310916;\n    --dc-pink: #df4f82;\n    --dc-soft-pink: #f3a6bf;\n    --dc-blush: #fce8ef;\n    --dc-cream: #fff8fa;\n    --dc-white: #ffffff;\n    --dc-text: #4c1c2b;\n    --dc-muted: #8a5b69;\n    --dc-line: rgba(123, 38, 61, 0.16);\n\n    width: 100%;\n    margin: 0;\n    color: var(--dc-text);\n    font-family: Georgia, \"Times New Roman\", serif;\n  }\n\n  .dress-code-wrap {\n    position: relative;\n    isolation: isolate;\n    overflow: hidden;\n    width: 100%;\n    padding: 48px 20px 40px;\n    background:\n      radial-gradient(\n        circle at 10% 5%,\n        rgba(223, 79, 130, 0.16),\n        transparent 38%\n      ),\n      radial-gradient(\n        circle at 95% 95%,\n        rgba(123, 38, 61, 0.15),\n        transparent 42%\n      ),\n      linear-gradient(\n        150deg,\n        var(--dc-cream) 0%,\n        var(--dc-blush) 52%,\n        #fff4f7 100%\n      );\n  }\n\n  .dress-code-wrap::before,\n  .dress-code-wrap::after {\n    content: \"\";\n    position: absolute;\n    z-index: -1;\n    pointer-events: none;\n    width: 220px;\n    height: 220px;\n    border: 1px solid rgba(223, 79, 130, 0.12);\n    transform: rotate(45deg);\n  }\n\n  .dress-code-wrap::before {\n    top: -145px;\n    left: -125px;\n  }\n\n  .dress-code-wrap::after {\n    right: -145px;\n    bottom: -135px;\n    border-color: rgba(123, 38, 61, 0.13);\n  }\n\n  .dress-code-panel {\n    position: relative;\n    width: 100%;\n    max-width: 620px;\n    margin: 0 auto;\n    padding: 34px 24px 26px;\n    overflow: hidden;\n    background: rgba(255, 255, 255, 0.82);\n    border: 1px solid rgba(123, 38, 61, 0.14);\n    border-radius: 28px;\n    box-shadow:\n      0 24px 55px -36px rgba(78, 18, 38, 0.58),\n      inset 0 1px 0 rgba(255, 255, 255, 0.9);\n    backdrop-filter: blur(8px);\n  }\n\n  .dress-code-panel::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 15%;\n    right: 15%;\n    height: 3px;\n    background: linear-gradient(\n      90deg,\n      transparent,\n      var(--dc-pink),\n      var(--dc-marsala),\n      transparent\n    );\n  }\n\n  .dress-code-header {\n    text-align: center;\n    margin-bottom: 27px;\n  }\n\n  .dress-code-symbol {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 62px;\n    height: 62px;\n    margin-bottom: 17px;\n    color: var(--dc-white);\n    background: linear-gradient(\n      145deg,\n      var(--dc-pink),\n      var(--dc-marsala) 65%,\n      var(--dc-wine)\n    );\n    border: 1px solid rgba(78, 18, 38, 0.16);\n    border-radius: 18px;\n    box-shadow: 0 10px 25px -14px rgba(78, 18, 38, 0.8);\n  }\n\n  .dress-code-symbol svg {\n    width: 29px;\n    height: 29px;\n    fill: none;\n    stroke: currentColor;\n    stroke-width: 1.7;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n  }\n\n  .dress-code-eyebrow {\n    margin: 0 0 8px;\n    color: var(--dc-pink);\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 10px;\n    font-weight: 700;\n    letter-spacing: 0.28em;\n    text-transform: uppercase;\n  }\n\n  .dress-code-title {\n    margin: 0;\n    color: var(--dc-wine);\n    font-size: clamp(31px, 8vw, 43px);\n    font-style: italic;\n    font-weight: 500;\n    line-height: 1.08;\n  }\n\n  .dress-code-subtitle {\n    max-width: 390px;\n    margin: 12px auto 0;\n    color: var(--dc-muted);\n    font-size: 15px;\n    font-style: italic;\n    line-height: 1.55;\n  }\n\n  .dress-code-divider {\n    display: flex;\n    align-items: center;\n    gap: 13px;\n    margin: 26px 0 20px;\n    color: var(--dc-marsala);\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 9px;\n    font-weight: 700;\n    letter-spacing: 0.23em;\n    text-transform: uppercase;\n  }\n\n  .dress-code-divider::before,\n  .dress-code-divider::after {\n    content: \"\";\n    flex: 1;\n    height: 1px;\n    background: linear-gradient(\n      90deg,\n      transparent,\n      rgba(123, 38, 61, 0.32)\n    );\n  }\n\n  .dress-code-divider::after {\n    background: linear-gradient(\n      90deg,\n      rgba(123, 38, 61, 0.32),\n      transparent\n    );\n  }\n\n  .dress-code-main {\n    position: relative;\n    overflow: hidden;\n    padding: 25px 20px;\n    text-align: center;\n    background: linear-gradient(\n      145deg,\n      var(--dc-wine),\n      var(--dc-marsala) 72%,\n      #922f51\n    );\n    border-radius: 21px;\n    box-shadow: 0 16px 35px -24px rgba(49, 9, 22, 0.9);\n  }\n\n  .dress-code-main::before {\n    content: \"\";\n    position: absolute;\n    inset: 8px;\n    pointer-events: none;\n    border: 1px solid rgba(255, 255, 255, 0.15);\n    border-radius: 15px;\n  }\n\n  .dress-code-main-label {\n    position: relative;\n    z-index: 1;\n    display: block;\n    margin-bottom: 7px;\n    color: var(--dc-soft-pink);\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 9px;\n    font-weight: 700;\n    letter-spacing: 0.25em;\n    text-transform: uppercase;\n  }\n\n  .dress-code-main-title {\n    position: relative;\n    z-index: 1;\n    margin: 0;\n    color: var(--dc-white);\n    font-size: clamp(27px, 7vw, 36px);\n    font-weight: 500;\n    line-height: 1.15;\n  }\n\n  .dress-code-grid {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 12px;\n    margin-top: 13px;\n  }\n\n  .dress-code-card {\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    min-height: 94px;\n    padding: 17px;\n    background: linear-gradient(\n      150deg,\n      var(--dc-white),\n      rgba(252, 232, 239, 0.82)\n    );\n    border: 1px solid var(--dc-line);\n    border-radius: 18px;\n    box-shadow: 0 11px 25px -22px rgba(78, 18, 38, 0.9);\n  }\n\n  .dress-code-card-icon {\n    display: flex;\n    flex: 0 0 48px;\n    align-items: center;\n    justify-content: center;\n    width: 48px;\n    height: 48px;\n    color: var(--dc-white);\n    background: var(--dc-marsala);\n    border-radius: 14px;\n    box-shadow: 0 8px 18px -12px rgba(78, 18, 38, 0.85);\n  }\n\n  .dress-code-card.color-card .dress-code-card-icon {\n    background: var(--dc-pink);\n  }\n\n  .dress-code-card-icon svg {\n    width: 23px;\n    height: 23px;\n    fill: none;\n    stroke: currentColor;\n    stroke-width: 1.8;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n  }\n\n  .dress-code-card-content {\n    min-width: 0;\n  }\n\n  .dress-code-card-label {\n    margin-bottom: 5px;\n    color: var(--dc-pink);\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 9px;\n    font-weight: 700;\n    letter-spacing: 0.18em;\n    text-transform: uppercase;\n  }\n\n  .dress-code-card-text {\n    margin: 0;\n    color: var(--dc-wine);\n    font-size: 17px;\n    font-weight: 600;\n    line-height: 1.42;\n  }\n\n  .dress-code-card-note {\n    display: block;\n    margin-top: 4px;\n    color: var(--dc-muted);\n    font-size: 13px;\n    font-style: italic;\n    font-weight: 400;\n    line-height: 1.45;\n  }\n\n  .dress-code-footer {\n    margin-top: 22px;\n    padding-top: 20px;\n    text-align: center;\n    border-top: 1px solid rgba(123, 38, 61, 0.13);\n  }\n\n  .dress-code-footer p {\n    max-width: 440px;\n    margin: 0 auto;\n    color: var(--dc-muted);\n    font-size: 14px;\n    font-style: italic;\n    line-height: 1.6;\n  }\n\n  .dress-code-footer strong {\n    display: block;\n    margin-top: 8px;\n    color: var(--dc-marsala);\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 9px;\n    font-style: normal;\n    letter-spacing: 0.18em;\n    text-transform: uppercase;\n  }\n\n  @media (min-width: 560px) {\n    .dress-code-wrap {\n      padding: 58px 28px 50px;\n    }\n\n    .dress-code-panel {\n      padding: 40px 34px 31px;\n    }\n\n    .dress-code-grid {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n\n    .dress-code-card {\n      align-items: flex-start;\n    }\n  }\n\n  @media (prefers-reduced-motion: no-preference) {\n    .dress-code-panel {\n      animation: dressCodeAppear 0.65s ease both;\n    }\n\n    .dress-code-main,\n    .dress-code-card {\n      animation: dressCodeRise 0.65s ease both;\n    }\n\n    .dress-code-card:nth-child(1) {\n      animation-delay: 0.08s;\n    }\n\n    .dress-code-card:nth-child(2) {\n      animation-delay: 0.16s;\n    }\n  }\n\n  @keyframes dressCodeAppear {\n    from {\n      opacity: 0;\n      transform: translateY(12px);\n    }\n\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n\n  @keyframes dressCodeRise {\n    from {\n      opacity: 0;\n      transform: translateY(8px);\n    }\n\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n</style>\n\n<div class=\"dress-code-root\">\n  <section class=\"dress-code-wrap\">\n    <div class=\"dress-code-panel\">\n\n      <header class=\"dress-code-header\">\n        <div class=\"dress-code-symbol\" aria-hidden=\"true\">\n          <svg viewBox=\"0 0 32 32\">\n            <path d=\"M16 8.5c0-2 1.1-3.4 3-3.4 1.7 0 2.9 1.1 2.9 2.7 0 2.8-3.5 3.1-5 5.5\"></path>\n            <path d=\"M16.9 13.3 5.2 22.4c-1.2.9-.5 2.8 1 2.8h19.6c1.5 0 2.2-1.9 1-2.8l-9.9-7.7\"></path>\n          </svg>\n        </div>\n\n        <p class=\"dress-code-eyebrow\">Orientação aos convidados</p>\n        <h2 class=\"dress-code-title\">Dress Code</h2>\n        <p class=\"dress-code-subtitle\">\n          Para que todos estejam em harmonia com a proposta desta celebração,\n          preparamos algumas orientações especiais.\n        </p>\n      </header>\n\n      <div class=\"dress-code-divider\">Traje indicado</div>\n\n      <div class=\"dress-code-main\">\n        <span class=\"dress-code-main-label\">Código de vestimenta</span>\n        <h3 class=\"dress-code-main-title\">Traje Social</h3>\n      </div>\n\n      <div class=\"dress-code-grid\">\n\n        <article class=\"dress-code-card\">\n          <div class=\"dress-code-card-icon\" aria-hidden=\"true\">\n            <svg viewBox=\"0 0 24 24\">\n              <path d=\"M12 3 2.8 19a1.4 1.4 0 0 0 1.2 2h16a1.4 1.4 0 0 0 1.2-2L12 3Z\"></path>\n              <path d=\"M12 9v5\"></path>\n              <path d=\"M12 17.5h.01\"></path>\n            </svg>\n          </div>\n\n          <div class=\"dress-code-card-content\">\n            <div class=\"dress-code-card-label\">Não permitido</div>\n            <p class=\"dress-code-card-text\">\n              Proibido bermuda e boné\n              <span class=\"dress-code-card-note\">\n                Pedimos a gentileza de respeitar o traje social.\n              </span>\n            </p>\n          </div>\n        </article>\n\n        <article class=\"dress-code-card color-card\">\n          <div class=\"dress-code-card-icon\" aria-hidden=\"true\">\n            <svg viewBox=\"0 0 24 24\">\n              <path d=\"M12 21s7-4.7 7-11A4 4 0 0 0 12 7a4 4 0 0 0-7 3c0 6.3 7 11 7 11Z\"></path>\n            </svg>\n          </div>\n\n          <div class=\"dress-code-card-content\">\n            <div class=\"dress-code-card-label\">Cores reservadas</div>\n            <p class=\"dress-code-card-text\">\n              Preferencialmente, não usar pink e marsala\n              <span class=\"dress-code-card-note\">\n                Essas cores fazem parte da paleta especial da celebração.\n              </span>\n            </p>\n          </div>\n        </article>\n\n      </div>\n\n      <footer class=\"dress-code-footer\">\n        <p>\n          Agradecemos o carinho e a compreensão de todos para tornar este\n          momento ainda mais elegante e especial.\n        </p>\n        <strong>Esperamos você para celebrar conosco</strong>\n      </footer>\n\n    </div>\n  </section>\n</div>"
    }
  ],
  "upsell": {
    "galeriaFotos": false,
    "saveTheDate": true,
    "lembrete": false
  },
  "config": {
    "exibirMarcaDagua": false,
    "cronometro": true,
    "buttonColor": "#8b1e3f",
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
