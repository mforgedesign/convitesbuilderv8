window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Ana Laís",
    "idade": 15,
    "data": "2026-10-31",
    "hora": "20:00",
    "horaTermino": "01:45",
    "endereco": "Tênis Clube de Indaiatuba\nAlameda José Boldrini, 3800, Indaiatuba - SP",
    "frase1": "",
    "frase2": "",
    "frase3": ""
  },
  "convite": {
    "paletaCores": "Rosê, dourado e preto",
    "tema": "Elegante",
    "musica": "assets/music_1784830231021.mp3",
    "tipoAbertura": "curta",
    "particulasAbertura": true,
    "slug": "Ana-Lais",
    "seo": {
      "pageTitle": "Aniversário de Lívia Sthepanny",
      "ogTitle": "Você recebeu um convite especial!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1784830231021.png",
    "cartao": "assets/0c644f91_e1e6_4f4c_8b87_3cd8751f13be_1784830231021.png",
    "aberturaSlides": [
      "assets/slide1_1784830231021.mp4"
    ],
    "aberturaSlidesMeta": [
      {
        "filePath": "assets/slide1_1784830231021.mp4",
        "label": "Abertura (Vídeo)",
        "type": "video"
      }
    ],
    "folhaVazia": "assets/folha_vazia_1784830231021.jpg",
    "folhaPreenchida": "assets/folha_1784830231021.png",
    "musica": "assets/music_1784830231021.mp3",
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
      "conteudo": "https://maps.app.goo.gl/Q2Z6NUS5MV1skFyV9"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5511983322044",
      "rsvpConfig": {
        "exibirNome": true,
        "exibirWhatsapp": false,
        "exibirAcompanhantes": false
      }
    },
    {
      "tipoAcao": "PopupImagem",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "assets/388f5e2d_251e_4146_b659_a0e04015033f_1784830231021.png"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\"> <style>\n.lp-root, .lp-root *, .lp-root *::before, .lp-root *::after {\n  color-scheme: light only; forced-color-adjust: none;\n  -webkit-font-smoothing: antialiased; box-sizing: border-box;\n}\n.lp-root { background: hsl(36, 20%, 98%); color: hsl(36, 36%, 45%); margin: 0; padding: 0; }\n.lp-wrap {\n  position: relative; padding: 30px 18px 36px; overflow: hidden;\n  font-family: 'Cormorant Garamond', serif;\n  background: linear-gradient(160deg, hsl(36, 20%, 98%) 0%, hsl(36, 25%, 95%) 50%, hsl(36, 20%, 98%) 100%);\n}\n\n.snow { position: absolute; pointer-events: none; z-index: 1; color: rgba(160,190,240,.55); font-size: 13px; animation: snowfall linear infinite; }\n@keyframes snowfall { 0%{transform:translateY(-20px) rotate(0deg);opacity:0;} 10%{opacity:1;} 90%{opacity:.6;} 100%{transform:translateY(700px) rotate(360deg);opacity:0;} }\n\n.lp-header { position: relative; z-index: 2; text-align: center; margin-bottom: 22px; }\n.lp-header h2 { font-family: 'Cinzel', serif; font-size: 22px; color: hsl(36, 36%, 45%); letter-spacing: .13em; margin-bottom: 4px; }\n.lp-header .sub { color: hsl(36, 50%, 70%); font-size: 14px; font-style: italic; margin-bottom: 2px; }\n.lp-header .badge {\n  display: inline-block; margin-top: 6px; font-family: 'Cinzel', serif;\n  font-size: 10px; letter-spacing: .18em; text-transform: uppercase;\n  background: linear-gradient(135deg, #c8d8f0, #e8eef8);\n  border: 1px solid rgba(160,190,230,.5); border-radius: 30px;\n  padding: 3px 14px; color: #3a5a90;\n}\n\n.lp-grid { display: grid; gap: 10px; position: relative; z-index: 2; }\n.lp-card {\n  display: flex; gap: 13px; align-items: center;\n  padding: 13px 15px; border-radius: 20px;\n  background: rgba(255,255,255,.93);\n  border: 1px solid rgba(180,210,240,.35);\n  box-shadow: 0 2px 14px rgba(60,100,200,.07);\n  animation: lpFade .5s ease both;\n}\n@keyframes lpFade { from{opacity:0;transform:translateY(10px);} to{opacity:1;transform:translateY(0);} }\n\n.lp-icon {\n  width: 44px; height: 44px; border-radius: 14px; flex-shrink: 0;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 17px; color: #fff;\n  background: hsl(36, 50%, 70%); /* fallback background if specific color class is missing */\n  box-shadow: 0 2px 10px rgba(80,120,220,.22);\n}\n.icon-blue   { background: linear-gradient(145deg, hsl(36, 50%, 70%), hsl(36, 36%, 45%)); }\n.icon-silver { background: linear-gradient(145deg, #b0c4e0, #7090b8); }\n.icon-light  { background: linear-gradient(145deg, hsl(36, 50%, 70%), hsl(36, 50%, 70%)); }\n.icon-deep   { background: linear-gradient(145deg, hsl(36, 36%, 45%), hsl(36, 26%, 34%)); }\n.icon-ice    { background: linear-gradient(145deg, hsl(36, 50%, 70%), hsl(36, 50%, 70%)); }\n\n.lp-title { font-family: 'Cinzel', serif; font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: hsl(36, 50%, 70%); margin-bottom: 2px; }\n.lp-name  { font-size: 15.5px; font-weight: 600; color: hsl(36, 36%, 45%); line-height: 1.3; }\n.lp-tip {\n  display: inline-block; margin-top: 4px; font-size: 12px; color: #3a5a9a;\n  background: rgba(160,190,240,.22); border: 1px solid rgba(120,160,230,.28);\n  border-radius: 30px; padding: 2px 10px; font-style: italic;\n}\n\n.lp-divider {\n  text-align: center; position: relative; z-index: 2; margin: 20px 0 14px;\n  font-family: 'Cinzel', serif; font-size: 10px; letter-spacing: .22em; color: hsl(36, 50%, 70%);\n}\n.lp-divider::before, .lp-divider::after {\n  content: ''; display: inline-block; width: 44px; height: 0.5px;\n  background: linear-gradient(to right, transparent, rgba(100,150,210,.4));\n  vertical-align: middle; margin: 0 10px;\n}\n.lp-divider::after { background: linear-gradient(to left, transparent, rgba(100,150,210,.4)); }\n\n.pix-box {\n  position: relative; z-index: 2; border-radius: 20px;\n  background: rgba(255,255,255,.94);\n  border: 1px solid rgba(140,180,230,.30);\n  padding: 16px 15px 14px;\n  box-shadow: 0 2px 16px rgba(60,100,200,.08);\n}\n.pix-row { display: flex; align-items: center; gap: 10px; margin-bottom: 11px; }\n.pix-icon-wrap {\n  width: 44px; height: 44px; border-radius: 14px; flex-shrink: 0;\n  display: flex; align-items: center; justify-content: center;\n  background: linear-gradient(145deg, hsl(36, 50%, 70%), hsl(36, 36%, 45%));\n  color: #fff; font-size: 19px; box-shadow: 0 2px 12px rgba(60,100,200,.28);\n}\n.pix-label { font-family: 'Cinzel', serif; font-size: 12px; letter-spacing: .12em; text-transform: uppercase; color: hsl(36, 36%, 45%); margin-bottom: 2px; }\n.pix-sub   { font-size: 13px; color: hsl(36, 50%, 70%); font-style: italic; }\n.pix-key-wrap {\n  display: flex; align-items: center; gap: 10px;\n  background: rgba(235,242,255,.90);\n  border: 1px solid rgba(140,180,230,.28); border-radius: 14px;\n  padding: 10px 13px; margin-bottom: 9px;\n}\n.pix-key {\n  flex: 1; font-family: 'Cinzel', serif; font-size: 12px;\n  color: hsl(36, 36%, 45%); letter-spacing: .02em; word-break: break-all;\n}\n.pix-copy-btn {\n  flex-shrink: 0; cursor: pointer; border: none; outline: none;\n  border-radius: 10px; padding: 7px 13px;\n  background: linear-gradient(145deg, hsl(36, 50%, 70%), hsl(36, 36%, 45%));\n  color: #fff; font-family: 'Cinzel', serif;\n  font-size: 11px; letter-spacing: .10em;\n  box-shadow: 0 2px 10px rgba(60,100,200,.28);\n  transition: transform .15s; display: flex; align-items: center; gap: 5px;\n}\n.pix-copy-btn:hover  { transform: scale(1.04); }\n.pix-copy-btn:active { transform: scale(.97); }\n.pix-copied { text-align: center; font-size: 13px; color: hsl(36, 36%, 45%); font-style: italic; height: 20px; transition: opacity .3s; }\n\n.lp-footer {\n  position: relative; z-index: 2; margin-top: 18px; border-radius: 20px;\n  background: linear-gradient(145deg, rgba(255,255,255,.95), rgba(220,235,255,.75));\n  border: 1px solid rgba(120,170,230,.30); padding: 16px;\n  text-align: center;\n}\n.lp-footer-text   { font-size: 15px; color: hsl(36, 26%, 34%); line-height: 1.7; font-style: italic; }\n.lp-footer-accent { color: hsl(36, 36%, 45%); font-weight: 600; font-family: 'Cinzel', serif; font-size: 12px; letter-spacing: .08em; display: block; margin-top: 6px; }\n\n.lp-star { position: absolute; color: rgba(140,170,230,.5); font-size: 11px; animation: lsStar 3s ease-in-out infinite; z-index: 1; }\n@keyframes lsStar { 0%,100%{opacity:0;transform:scale(0);}50%{opacity:1;transform:scale(1);} }\n</style> <div class=\"lp-root\"><div class=\"lp-wrap\"><div class=\"lp-header\"><h2>Dicas de presentes</h2><p class=\"sub\">Sugestões especiais para você</p><span class=\"badge\">Com carinho</span></div><div class=\"lp-grid\"><div class=\"lp-card\" style=\"animation-delay:.05s\"><div class=\"lp-icon icon-blue\"><i class=\"fa-solid fa-shoe-prints\"></i></div><div><div class=\"lp-title\">Calçados</div><div class=\"lp-name\">tênis 37</div></div></div><div class=\"lp-card\" style=\"animation-delay:.10s\"><div class=\"lp-icon icon-silver\"><i class=\"fa-solid fa-ring\"></i></div><div><div class=\"lp-title\">Acessórios</div><div class=\"lp-name\">Cor: prata; Anel: números 15 e 16</div></div></div><div class=\"lp-card\" style=\"animation-delay:.15s\"><div class=\"lp-icon icon-light\"><i class=\"fa-solid fa-palette\"></i></div><div><div class=\"lp-title\">Beleza</div><div class=\"lp-name\">Maquiagem: tons claros para corretivo, base e pó solto / tons quentes para blush, contorno, etc.; Rímel: preto ou marrom</div></div></div><div class=\"lp-card\" style=\"animation-delay:.20s\"><div class=\"lp-icon icon-deep\"><i class=\"fa-solid fa-shirt\"></i></div><div><div class=\"lp-title\">Roupas</div><div class=\"lp-name\">Top e body: tamanho P; Calça e short: tamanho 38; Estilo baseado em Renner e Youcom</div></div></div><div class=\"lp-card\" style=\"animation-delay:.25s\"><div class=\"lp-icon icon-blue\"><i class=\"fa-solid fa-spray-can-sparkles\"></i></div><div><div class=\"lp-title\">Perfumes</div><div class=\"lp-name\">Doces e florais</div></div></div><div class=\"lp-card\" style=\"animation-delay:.30s\"><div class=\"lp-icon icon-ice\"><i class=\"fa-solid fa-heart\"></i></div><div><div class=\"lp-title\">Mensagem</div><div class=\"lp-name\">Sua presença e seu carinho são o presente mais especial!</div></div></div></div></div></div> <script>\nfunction copyPix() {\n  var key = document.getElementById('pixKey').textContent.trim();\n  if (navigator.clipboard) {\n    navigator.clipboard.writeText(key).then(showCopied);\n  } else {\n    var ta = document.createElement('textarea');\n    ta.value = key; document.body.appendChild(ta);\n    ta.select(); document.execCommand('copy');\n    document.body.removeChild(ta); showCopied();\n  }\n}\nfunction showCopied() {\n  var el = document.getElementById('copiedMsg');\n  el.style.opacity = '1';\n  setTimeout(function(){ el.style.opacity = '0'; }, 2500);\n}\n</script>"
    }
  ],
  "upsell": {
    "galeriaFotos": false,
    "saveTheDate": false,
    "lembrete": false
  },
  "config": {
    "exibirMarcaDagua": true,
    "cronometro": true,
    "buttonColor": "#b08d57",
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
    "text": "🎉 *DADOS DO EVENTO*\n- Tipo de evento: Aniversário\n- Nome: Lívia Sthepanny\n- Idade: 15\n- Data: 2027-05-12\n- Horário de início: 13:00\n- Horário de término: 20:30\n- Local: Av Rio Grande 110\n- Tema e paleta: As cores são rosê, dourado e preto\n\n✨ *ESCOLHAS DO CONVITE*\n- Tipo de abertura: Abertura Curta\n- Confirmação de presença: Direto no WhatsApp (+5511917146712)\n- Música: Tocando em frente\nAlmir Sartre\n- Presentes: Sugestões Simples\n- Manual do Convidado: Manual Premium\n- Cronômetro: Sim\n\n🎁 *SUGESTÕES DE PRESENTES*\nSandalia sem salto ou tênis slip-on 39\nBolsas pequenas ou médias \nProdutos cuidados corporais (hidratante, óleo banho, Bud Splash)\nMaquiagem\nRoupas de dormir tamanho plus size G2\nPerfumes Doce, floral ou cítricos (suave)\n\n📖 *MANUAL DO CONVIDADO*\nExemplo de Manual:\nChegue no horário: Sua presença pontual é muito importante para nós.\nConfirme sua presença: Por favor, confirme presença pelo menos 15 dias antes do evento.\nConvidado não convida!\nSe você consome bebida alcoólica traga uma caixinha. Gelada.\nTudo que você precisar pessa ao garçom.\nOs doces e o bolo será servido depois dos parabéns portanto não mexer na mesa.\nDivirta-se bastante! Estamos ansiosos para celebrar este momento especial com você.\nNão vá embora sem me dar um abraço e comer um pedaço do bolo. Queremos compartilhar cada instante com você.",
    "usedAt": "2026-07-19T15:22:46.448Z",
    "source": "fill-fields",
    "buttonDecisions": {
      "manualComConteudo": true,
      "presentesComConteudo": true,
      "manualPremium": true,
      "presentesPremium": false,
      "manualResumo": "Chegue no horário: Sua presença pontual é muito importante para nós. Confirme sua presença pelo menos 15 dias antes do evento. Convidado não convida! Se você consome bebida alcoólica, traga uma caixinha gelada. Tudo o que você precisar, peça ao garçom. Os doces e o bolo serão servidos depois dos parabéns, portanto não mexa na mesa. Divirta-se bastante! Estamos ansiosos para celebrar este momento especial com você. Não vá embora sem me dar um abraço e comer um pedaço do bolo. Queremos compartilhar cada instante com você.",
      "presentesResumo": "Sandália sem salto ou tênis slip-on 39. Bolsas pequenas ou médias. Produtos para cuidados corporais: hidratante, óleo de banho, Bud Splash. Maquiagem. Roupas de dormir tamanho plus size G2. Perfumes doces, florais ou cítricos (suaves)."
    }
  }
};
