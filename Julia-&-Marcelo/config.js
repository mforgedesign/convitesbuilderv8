window.config = {
  "evento": {
    "tipo": "Casamento",
    "nome": "Júlia e Marcelo",
    "idade": 0,
    "data": "2027-05-15",
    "hora": "13:00",
    "horaTermino": "20:30",
    "endereco": "Recanto Verde - Av Rio Nortista 1594",
    "frase1": "",
    "frase2": "",
    "frase3": ""
  },
  "convite": {
    "paletaCores": "Prata",
    "tema": "Elegante",
    "musica": "assets/music_1784817551837.mp3",
    "tipoAbertura": "curta",
    "particulasAbertura": true,
    "slug": "Julia-&-Marcelo",
    "seo": {
      "pageTitle": "Casamento Júlia e Marcelo",
      "ogTitle": "Você recebeu um convite especial!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1784817551837.jpg",
    "cartao": "assets/cartao_chatgpt_1784817551837.jpg",
    "aberturaSlides": [
      "assets/slide1_1784817551837.mp4"
    ],
    "aberturaSlidesMeta": [
      {
        "filePath": "assets/slide1_1784817551837.mp4",
        "label": "Abertura (Vídeo)",
        "type": "video"
      }
    ],
    "folhaVazia": "assets/folha_vazia_1784817551837.jpg",
    "folhaPreenchida": "assets/folha_1784817551837.png",
    "musica": "assets/music_1784817551837.mp3",
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
      "conteudo": "https://www.google.com/maps/search/?api=1&query=Recanto+Verde+-+Av+Rio+Nortista+1594"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5511917146712",
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
      "conteudo": "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css\">\n<style>\n:root{--silver:#c0c0c0;--silver-dark:#777;--silver-light:#f4f4f4;--ink:#303030}\n*{box-sizing:border-box}.mc-wrap{max-width:900px;margin:auto;padding:34px 22px;font-family:Georgia,serif;color:var(--ink);background:linear-gradient(135deg,#fff,#e7e7e7,#fff);border:1px solid #bbb;border-radius:24px;box-shadow:0 16px 45px #7775;position:relative;overflow:hidden}.mc-header{text-align:center}.mc-crown{font-size:28px;color:#888}.mc-header h2{margin:8px 0 4px;font-size:34px;color:#555}.mc-header p{margin:0;color:#777;font-style:italic}.mc-sub{text-align:center;margin:22px 0;color:#666;font-size:14px}.mc-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.mc-card,.mc-confirm{background:#ffffffcc;border:1px solid #c5c5c5;border-radius:18px;padding:18px;box-shadow:0 7px 18px #7772}.mc-top{display:flex;gap:14px;align-items:flex-start}.mc-icon,.mc-confirm-icon{width:44px;height:44px;flex:0 0 44px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(145deg,#eee,#999);color:white}.mc-title{font-weight:bold;color:#555;font-size:18px;margin-bottom:6px}.mc-text{font-size:14px;line-height:1.55;color:#666}.mc-highlight{color:#444;font-weight:bold}.mc-divider{height:1px;background:#ccc;margin:16px 0}.mc-body{margin-left:58px}.mc-section-label{font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#777;margin:8px 0}.mc-tag-row{display:flex;flex-wrap:wrap;gap:7px}.mc-tag{padding:6px 9px;border-radius:20px;font:12px Arial,sans-serif}.mc-tag-ok{background:#e5e5e5;color:#555}.mc-tag-no{background:#d2d2d2;color:#555}.mc-tag-white{background:#fff;border:1px solid #bbb;color:#666}.mc-note{padding:10px;border-left:3px solid #999;background:#eee;color:#555;font-size:13px;line-height:1.45}.mc-confirm{margin-top:18px;background:linear-gradient(135deg,#fafafa,#d8d8d8)}.mc-confirm-top{display:flex;gap:14px;align-items:center}.mc-confirm-title{font-size:20px;font-weight:bold;color:#555}.mc-confirm-sub{font-size:13px;color:#666}.mc-date-badge{margin-top:15px;padding:12px 14px;border-radius:12px;background:#777;color:white;display:flex;gap:9px;align-items:center;font-family:Arial,sans-serif;font-size:13px}.mc-date-badge strong{font-size:15px}.mc-confirm-note{margin-top:12px;font-size:13px;color:#555}.lp-star{position:absolute;color:#aaa;font-style:normal;font-size:18px;animation:shine 2.8s infinite}.lp-star:after{content:'✦'}@keyframes shine{50%{opacity:.25;transform:scale(.8)}}\n@media(max-width:680px){.mc-grid{grid-template-columns:1fr}.mc-wrap{padding:26px 14px}.mc-header h2{font-size:27px}.mc-body{margin-left:0;margin-top:12px}.lp-star{font-size:14px}}\n</style>\n<i class=\"lp-star\" style=\"top:9%;left:8%;animation-delay:0s;\"></i><i class=\"lp-star\" style=\"top:17%;right:13%;animation-delay:1.1s;\"></i><i class=\"lp-star\" style=\"bottom:14%;left:14%;animation-delay:2s;\"></i><i class=\"lp-star\" style=\"bottom:7%;right:11%;animation-delay:.6s;\"></i><i class=\"lp-star\" style=\"top:38%;right:7%;animation-delay:1.6s;\"></i>\n<div class=\"mc-wrap\"><div class=\"mc-header\"><span class=\"mc-crown\">✧</span><h2>Manual do Convidado</h2><p>Júlia e Marcelo · Bodas de Prata</p></div><div class=\"mc-sub\">Para celebrarmos juntos com carinho e tranquilidade</div><div class=\"mc-grid\"><div class=\"mc-card\"><div class=\"mc-top\"><div class=\"mc-icon\"><i class=\"fa-solid fa-heart\"></i></div><div><div class=\"mc-title\">Regras gerais</div><div class=\"mc-text\">Convidado não convida!<br>Se você consome bebida alcoólica traga uma caixinha. Gelada.<br>Tudo que você precisar pessa ao garçom.</div></div></div></div><div class=\"mc-card\"><div class=\"mc-top\"><div class=\"mc-icon\" style=\"background:linear-gradient(145deg,#d9d9d9,#888);\"><i class=\"fa-solid fa-palette\"></i></div><div><div class=\"mc-title\">Cores da festa</div><div class=\"mc-text\">Nossa celebração terá como inspiração as <span class=\"mc-highlight\">Bodas de Prata</span>, com uma elegante paleta em tons de prata.</div></div></div><div class=\"mc-divider\"></div><div class=\"mc-body\"><div class=\"mc-text\">Para manter a harmonia visual da celebração, considere a paleta prata ao escolher seu traje.</div></div></div><div class=\"mc-card\"><div class=\"mc-top\"><div class=\"mc-icon\" style=\"background:linear-gradient(145deg,#d0d0d0,#777);\"><i class=\"fa-solid fa-user-tie\"></i></div><div><div class=\"mc-title\">Traje</div><div class=\"mc-text\">Vista-se para uma ocasião especial, valorizando uma produção elegante em sintonia com a proposta de <span class=\"mc-highlight\">Bodas de Prata</span>.</div></div></div></div><div class=\"mc-card\"><div class=\"mc-top\"><div class=\"mc-icon\" style=\"background:linear-gradient(145deg,#e5e5e5,#999);\"><i class=\"fa-solid fa-clock\"></i></div><div><div class=\"mc-title\">Chegue no horário</div><div class=\"mc-text\">Sua presença pontual é muito importante para nós.</div></div></div><div class=\"mc-divider\"></div><div class=\"mc-body\"><div class=\"mc-text\">A celebração começa às <span class=\"mc-highlight\">13:00</span> e termina às <span class=\"mc-highlight\">20:30</span>.</div></div></div></div><div class=\"mc-confirm\"><div class=\"mc-confirm-top\"><div class=\"mc-confirm-icon\"><i class=\"fa-solid fa-calendar-check\"></i></div><div><div class=\"mc-confirm-title\">Celebre cada instante</div><div class=\"mc-confirm-sub\">Estamos ansiosos para viver este momento especial com você.</div></div></div><div class=\"mc-date-badge\"><i class=\"fa-solid fa-calendar-days\"></i><strong>15 de maio de 2027</strong><span>· Recanto Verde</span></div><div class=\"mc-confirm-note\">Os doces e o bolo serão servidos depois dos parabéns; portanto, não mexa na mesa. Divirta-se bastante! Não vá embora sem nos dar um abraço e comer um pedaço do bolo.</div></div></div>"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\"> <style>\n.lp-root, .lp-root *, .lp-root *::before, .lp-root *::after {\n  color-scheme: light only; forced-color-adjust: none;\n  -webkit-font-smoothing: antialiased; box-sizing: border-box;\n}\n.lp-root { background: hsl(220, 9%, 98%); color: hsl(220, 9%, 45%); margin: 0; padding: 0; }\n.lp-wrap {\n  position: relative; padding: 30px 18px 36px; overflow: hidden;\n  font-family: 'Cormorant Garamond', serif;\n  background: linear-gradient(160deg, hsl(220, 9%, 98%) 0%, hsl(220, 9%, 95%) 50%, hsl(220, 9%, 98%) 100%);\n}\n\n.snow { position: absolute; pointer-events: none; z-index: 1; color: rgba(160,190,240,.55); font-size: 13px; animation: snowfall linear infinite; }\n@keyframes snowfall { 0%{transform:translateY(-20px) rotate(0deg);opacity:0;} 10%{opacity:1;} 90%{opacity:.6;} 100%{transform:translateY(700px) rotate(360deg);opacity:0;} }\n\n.lp-header { position: relative; z-index: 2; text-align: center; margin-bottom: 22px; }\n.lp-header h2 { font-family: 'Cinzel', serif; font-size: 22px; color: hsl(220, 9%, 45%); letter-spacing: .13em; margin-bottom: 4px; }\n.lp-header .sub { color: hsl(220, 50%, 70%); font-size: 14px; font-style: italic; margin-bottom: 2px; }\n.lp-header .badge {\n  display: inline-block; margin-top: 6px; font-family: 'Cinzel', serif;\n  font-size: 10px; letter-spacing: .18em; text-transform: uppercase;\n  background: linear-gradient(135deg, #c8d8f0, #e8eef8);\n  border: 1px solid rgba(160,190,230,.5); border-radius: 30px;\n  padding: 3px 14px; color: #3a5a90;\n}\n\n.lp-grid { display: grid; gap: 10px; position: relative; z-index: 2; }\n.lp-card {\n  display: flex; gap: 13px; align-items: center;\n  padding: 13px 15px; border-radius: 20px;\n  background: rgba(255,255,255,.93);\n  border: 1px solid rgba(180,210,240,.35);\n  box-shadow: 0 2px 14px rgba(60,100,200,.07);\n  animation: lpFade .5s ease both;\n}\n@keyframes lpFade { from{opacity:0;transform:translateY(10px);} to{opacity:1;transform:translateY(0);} }\n\n.lp-icon {\n  width: 44px; height: 44px; border-radius: 14px; flex-shrink: 0;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 17px; color: #fff;\n  background: hsl(220, 50%, 70%); /* fallback background if specific color class is missing */\n  box-shadow: 0 2px 10px rgba(80,120,220,.22);\n}\n.icon-blue   { background: linear-gradient(145deg, hsl(220, 50%, 70%), hsl(220, 9%, 45%)); }\n.icon-silver { background: linear-gradient(145deg, #b0c4e0, #7090b8); }\n.icon-light  { background: linear-gradient(145deg, hsl(220, 50%, 70%), hsl(220, 50%, 70%)); }\n.icon-deep   { background: linear-gradient(145deg, hsl(220, 9%, 45%), hsl(220, 10%, 28%)); }\n.icon-ice    { background: linear-gradient(145deg, hsl(220, 50%, 70%), hsl(220, 50%, 70%)); }\n\n.lp-title { font-family: 'Cinzel', serif; font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: hsl(220, 50%, 70%); margin-bottom: 2px; }\n.lp-name  { font-size: 15.5px; font-weight: 600; color: hsl(220, 9%, 45%); line-height: 1.3; }\n.lp-tip {\n  display: inline-block; margin-top: 4px; font-size: 12px; color: #3a5a9a;\n  background: rgba(160,190,240,.22); border: 1px solid rgba(120,160,230,.28);\n  border-radius: 30px; padding: 2px 10px; font-style: italic;\n}\n\n.lp-divider {\n  text-align: center; position: relative; z-index: 2; margin: 20px 0 14px;\n  font-family: 'Cinzel', serif; font-size: 10px; letter-spacing: .22em; color: hsl(220, 50%, 70%);\n}\n.lp-divider::before, .lp-divider::after {\n  content: ''; display: inline-block; width: 44px; height: 0.5px;\n  background: linear-gradient(to right, transparent, rgba(100,150,210,.4));\n  vertical-align: middle; margin: 0 10px;\n}\n.lp-divider::after { background: linear-gradient(to left, transparent, rgba(100,150,210,.4)); }\n\n.pix-box {\n  position: relative; z-index: 2; border-radius: 20px;\n  background: rgba(255,255,255,.94);\n  border: 1px solid rgba(140,180,230,.30);\n  padding: 16px 15px 14px;\n  box-shadow: 0 2px 16px rgba(60,100,200,.08);\n}\n.pix-row { display: flex; align-items: center; gap: 10px; margin-bottom: 11px; }\n.pix-icon-wrap {\n  width: 44px; height: 44px; border-radius: 14px; flex-shrink: 0;\n  display: flex; align-items: center; justify-content: center;\n  background: linear-gradient(145deg, hsl(220, 50%, 70%), hsl(220, 9%, 45%));\n  color: #fff; font-size: 19px; box-shadow: 0 2px 12px rgba(60,100,200,.28);\n}\n.pix-label { font-family: 'Cinzel', serif; font-size: 12px; letter-spacing: .12em; text-transform: uppercase; color: hsl(220, 9%, 45%); margin-bottom: 2px; }\n.pix-sub   { font-size: 13px; color: hsl(220, 50%, 70%); font-style: italic; }\n.pix-key-wrap {\n  display: flex; align-items: center; gap: 10px;\n  background: rgba(235,242,255,.90);\n  border: 1px solid rgba(140,180,230,.28); border-radius: 14px;\n  padding: 10px 13px; margin-bottom: 9px;\n}\n.pix-key {\n  flex: 1; font-family: 'Cinzel', serif; font-size: 12px;\n  color: hsl(220, 9%, 45%); letter-spacing: .02em; word-break: break-all;\n}\n.pix-copy-btn {\n  flex-shrink: 0; cursor: pointer; border: none; outline: none;\n  border-radius: 10px; padding: 7px 13px;\n  background: linear-gradient(145deg, hsl(220, 50%, 70%), hsl(220, 9%, 45%));\n  color: #fff; font-family: 'Cinzel', serif;\n  font-size: 11px; letter-spacing: .10em;\n  box-shadow: 0 2px 10px rgba(60,100,200,.28);\n  transition: transform .15s; display: flex; align-items: center; gap: 5px;\n}\n.pix-copy-btn:hover  { transform: scale(1.04); }\n.pix-copy-btn:active { transform: scale(.97); }\n.pix-copied { text-align: center; font-size: 13px; color: hsl(220, 9%, 45%); font-style: italic; height: 20px; transition: opacity .3s; }\n\n.lp-footer {\n  position: relative; z-index: 2; margin-top: 18px; border-radius: 20px;\n  background: linear-gradient(145deg, rgba(255,255,255,.95), rgba(220,235,255,.75));\n  border: 1px solid rgba(120,170,230,.30); padding: 16px;\n  text-align: center;\n}\n.lp-footer-text   { font-size: 15px; color: hsl(220, 10%, 28%); line-height: 1.7; font-style: italic; }\n.lp-footer-accent { color: hsl(220, 9%, 45%); font-weight: 600; font-family: 'Cinzel', serif; font-size: 12px; letter-spacing: .08em; display: block; margin-top: 6px; }\n\n.lp-star { position: absolute; color: rgba(140,170,230,.5); font-size: 11px; animation: lsStar 3s ease-in-out infinite; z-index: 1; }\n@keyframes lsStar { 0%,100%{opacity:0;transform:scale(0);}50%{opacity:1;transform:scale(1);} }\n</style> <div class=\"lp-root\"> <span class=\"snow\" style=\"left:8%;animation-duration:6s;animation-delay:0s;\">✦</span> <span class=\"snow\" style=\"left:22%;animation-duration:8s;animation-delay:1.2s;font-size:9px;\">✧</span> <span class=\"snow\" style=\"left:38%;animation-duration:7s;animation-delay:2.5s;\">✦</span> <span class=\"snow\" style=\"left:55%;animation-duration:9s;animation-delay:.8s;font-size:9px;\">✧</span> <span class=\"snow\" style=\"left:70%;animation-duration:6.5s;animation-delay:3s;\">✦</span> <span class=\"snow\" style=\"left:85%;animation-duration:8.5s;animation-delay:1.8s;font-size:10px;\">✧</span> <svg style=\"position:absolute;top:-14px;left:-14px;width:150px;height:150px;opacity:.10;pointer-events:none;z-index:1;\" viewBox=\"0 0 160 160\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(220, 50%, 70%)\" transform=\"rotate(0 80 80)\"/>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(220, 50%, 70%)\" transform=\"rotate(45 80 80)\"/>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(220, 50%, 70%)\" transform=\"rotate(90 80 80)\"/>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(220, 50%, 70%)\" transform=\"rotate(135 80 80)\"/>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(220, 50%, 70%)\" transform=\"rotate(180 80 80)\"/>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(220, 50%, 70%)\" transform=\"rotate(225 80 80)\"/>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(220, 50%, 70%)\" transform=\"rotate(270 80 80)\"/>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(220, 50%, 70%)\" transform=\"rotate(315 80 80)\"/>\n    <circle cx=\"80\" cy=\"80\" r=\"12\" fill=\"#dce9fc\"/>\n  </g>\n</svg> <svg style=\"position:absolute;bottom:-8px;right:-8px;width:115px;height:115px;opacity:.10;pointer-events:none;z-index:1;\" viewBox=\"0 0 120 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g>\n    <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#a8c0e8\" transform=\"rotate(0 60 60)\"/>\n    <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#d0e0f8\" transform=\"rotate(60 60 60)\"/>\n    <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#a8c0e8\" transform=\"rotate(120 60 60)\"/>\n    <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#d0e0f8\" transform=\"rotate(180 60 60)\"/>\n    <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#a8c0e8\" transform=\"rotate(240 60 60)\"/>\n    <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#d0e0f8\" transform=\"rotate(300 60 60)\"/>\n    <circle cx=\"60\" cy=\"60\" r=\"9\" fill=\"#eaf0fc\"/>\n  </g>\n</svg> <i class=\"lp-star\" style=\"top:9%;left:7%;animation-delay:0s;\">✦</i> <i class=\"lp-star\" style=\"top:20%;right:13%;animation-delay:1s;\">✧</i> <i class=\"lp-star\" style=\"bottom:22%;left:12%;animation-delay:2s;\">✦</i> <i class=\"lp-star\" style=\"bottom:10%;right:9%;animation-delay:.5s;\">✧</i> <div class=\"lp-wrap\"> <div class=\"lp-header\"> <h2>Lista de Presentes</h2> <p class=\"sub\">Júlia e Marcelo</p> <span class=\"badge\">Bodas de Prata</span> </div> <div class=\"lp-grid\"> <div class=\"lp-card\" style=\"animation-delay:.05s\"> <div class=\"lp-icon icon-blue\"><i class=\"fa-solid fa-shoe-prints\"></i></div> <div> <div class=\"lp-title\">Calçados</div> <div class=\"lp-name\">Sandália sem salto ou tênis slip-on — tamanho 39</div> </div> </div> <div class=\"lp-card\" style=\"animation-delay:.10s\"> <div class=\"lp-icon icon-silver\"><i class=\"fa-solid fa-bag-shopping\"></i></div> <div> <div class=\"lp-title\">Bolsas</div> <div class=\"lp-name\">Bolsas pequenas ou médias</div> </div> </div> <div class=\"lp-card\" style=\"animation-delay:.15s\"> <div class=\"lp-icon icon-light\"><i class=\"fa-solid fa-spa\"></i></div> <div> <div class=\"lp-title\">Cuidados corporais</div> <div class=\"lp-name\">Hidratante, óleo de banho ou Bud Splash</div> </div> </div> <div class=\"lp-card\" style=\"animation-delay:.20s\"> <div class=\"lp-icon icon-deep\"><i class=\"fa-solid fa-palette\"></i></div> <div> <div class=\"lp-title\">Maquiagem</div> <div class=\"lp-name\">Itens de maquiagem</div> </div> </div> <div class=\"lp-card\" style=\"animation-delay:.25s\"> <div class=\"lp-icon icon-blue\"><i class=\"fa-solid fa-shirt\"></i></div> <div> <div class=\"lp-title\">Roupas de dormir</div> <div class=\"lp-name\">Tamanho plus size G2</div> </div> </div> <div class=\"lp-card\" style=\"animation-delay:.30s\"> <div class=\"lp-icon icon-ice\"><i class=\"fa-solid fa-spray-can-sparkles\"></i></div> <div> <div class=\"lp-title\">Perfumes</div> <div class=\"lp-name\">Doces, florais ou cítricos suaves</div> </div> </div> </div> <div class=\"lp-divider\">Com carinho, Júlia e Marcelo</div> <div class=\"pix-box\"> <div class=\"pix-row\"> <div class=\"pix-icon-wrap\"><i class=\"fa-solid fa-qrcode\"></i></div> <div> <div class=\"pix-label\">Presente em Pix</div> <div class=\"pix-sub\">A chave Pix não foi informada</div> </div> </div> <div class=\"pix-key-wrap\"> <span class=\"pix-key\" id=\"pixKey\">Chave Pix não informada</span> <button class=\"pix-copy-btn\" onclick=\"var key = document.getElementById('pixKey').textContent.trim(); if (navigator.clipboard) { navigator.clipboard.writeText(key).then(function() { var el = document.getElementById('copiedMsg'); el.style.opacity = '1'; setTimeout(function(){ el.style.opacity = '0'; }, 2000); }); } else { var ta = document.createElement('textarea'); ta.value = key; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); var el = document.getElementById('copiedMsg'); el.style.opacity = '1'; setTimeout(function(){ el.style.opacity = '0'; }, 2000); }\"> <i class=\"fa-solid fa-copy\" style=\"font-size:12px;\"></i>Copiar</button> </div> <div class=\"pix-copied\" id=\"copiedMsg\" style=\"opacity:0;\">Chave copiada!</div> </div> <div class=\"lp-footer\"> <div class=\"lp-footer-text\">Sugestões simples para celebrar nosso amor</div> <span class=\"lp-footer-accent\">Júlia &amp; Marcelo</span> </div> </div> </div> <script>\nfunction copyPix() {\n  var key = document.getElementById('pixKey').textContent.trim();\n  if (navigator.clipboard) {\n    navigator.clipboard.writeText(key).then(showCopied);\n  } else {\n    var ta = document.createElement('textarea');\n    ta.value = key; document.body.appendChild(ta);\n    ta.select(); document.execCommand('copy');\n    document.body.removeChild(ta); showCopied();\n  }\n}\nfunction showCopied() {\n  var el = document.getElementById('copiedMsg');\n  el.style.opacity = '1';\n  setTimeout(function(){ el.style.opacity = '0'; }, 2500);\n}\n</script>"
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
    "buttonColor": "#6b7280",
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
    "text": "🎉 *DADOS DO EVENTO*\n- Tipo de evento: Casamento\n- Nome: Júlia e Marcelo\n- Data: 2027-05-15\n- Horário de início: 13:00\n- Horário de término: 20:30\n- Local: Recanto Verde - Av Rio Nortista 1594\n- Tema e paleta: Bodas de Prata\n\n✨ *ESCOLHAS DO CONVITE*\n- Tipo de abertura: Abertura Curta\n- Confirmação de presença: Direto no WhatsApp (+5511917146712)\n- Música: Tocando em frente\nAlmir Sartre\n- Presentes: Sugestões Simples\n- Manual do Convidado: Manual Simples\n- Cronômetro: Sim\n\n🎁 *SUGESTÕES DE PRESENTES*\nSandalia sem salto ou tênis slip-on 39\nBolsas pequenas ou médias \nProdutos cuidados corporais (hidratante, óleo banho, Bud Splash)\nMaquiagem\nRoupas de dormir tamanho plus size G2\nPerfumes Doce, floral ou cítricos (suave)\n\n📖 *MANUAL DO CONVIDADO*\nExemplo de Manual:\nChegue no horário: Sua presença pontual é muito importante para nós.\nConfirme sua presença: Por favor, confirme presença pelo menos 15 dias antes do evento.\nConvidado não convida!\nSe você consome bebida alcoólica traga uma caixinha. Gelada.\nTudo que você precisar pessa ao garçom.\nOs doces e o bolo será servido depois dos parabéns portanto não mexer na mesa.\nDivirta-se bastante! Estamos ansiosos para celebrar este momento especial com você.\nNão vá embora sem me dar um abraço e comer um pedaço do bolo. Queremos compartilhar cada instante com você.",
    "usedAt": "2026-07-23T14:24:09.124Z",
    "source": "fill-fields",
    "buttonDecisions": {
      "manualComConteudo": true,
      "presentesComConteudo": true,
      "manualPremium": false,
      "presentesPremium": false,
      "manualResumo": "Chegue no horário: Sua presença pontual é muito importante para nós. Confirme sua presença pelo menos 15 dias antes do evento. Convidado não convida! Se você consome bebida alcoólica, traga uma caixinha gelada. Tudo o que você precisar, peça ao garçom. Os doces e o bolo serão servidos depois dos parabéns; portanto, não mexa na mesa. Divirta-se bastante! Estamos ansiosos para celebrar este momento especial com você. Não vá embora sem me dar um abraço e comer um pedaço do bolo. Queremos compartilhar cada instante com você.",
      "presentesResumo": "Sandália sem salto ou tênis slip-on, tamanho 39. Bolsas pequenas ou médias. Produtos para cuidados corporais (hidratante, óleo de banho e body splash). Maquiagem. Roupas de dormir, tamanho plus size G2. Perfumes doces, florais ou cítricos suaves."
    }
  }
};
