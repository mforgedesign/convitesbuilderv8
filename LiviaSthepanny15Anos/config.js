window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Lívia Sthepanny",
    "idade": 15,
    "data": "2027-05-12",
    "hora": "13:00",
    "horaTermino": "",
    "endereco": "Av Rio Grande 110",
    "frase1": "",
    "frase2": "",
    "frase3": ""
  },
  "convite": {
    "paletaCores": "Rosê, dourado e preto",
    "tema": "Elegante",
    "musica": "assets/music_1784475044336.mp3",
    "tipoAbertura": "curta",
    "particulasAbertura": true,
    "slug": "LiviaSthepanny15Anos",
    "seo": {
      "pageTitle": "Aniversário de Lívia Sthepanny",
      "ogTitle": "Você recebeu um convite especial!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1784475044336.jpg",
    "cartao": "assets/cartao_gen_1784475044336.jpg",
    "aberturaSlides": [
      "assets/slide1_1784475044336.mp4"
    ],
    "aberturaSlidesMeta": [
      {
        "filePath": "assets/slide1_1784475044336.mp4",
        "label": "Abertura (Vídeo)",
        "type": "video"
      }
    ],
    "folhaVazia": "assets/folha_vazia_1784475044336.jpg",
    "folhaPreenchida": "assets/folha_1784475044336.jpg",
    "musica": "assets/music_1784475044336.mp3",
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
      "conteudo": "https://www.google.com/maps/search/?api=1&query=Av+Rio+Grande+110"
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
      "tipoAcao": "PopupImagem",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "assets/popup_manual_premium_1784475044336.jpg"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<style>\n  .lp-root{position:relative;overflow:hidden;background:radial-gradient(circle at top,rgba(255,214,230,.22),transparent 34%),linear-gradient(180deg,#120b10 0%,#1a1117 42%,#0b070a 100%);color:#f7eef3;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;padding:28px 16px 34px}\n  .lp-root:before{content:\"\";position:absolute;inset:0;background:linear-gradient(135deg,rgba(212,175,55,.08),transparent 30%,rgba(255,255,255,.03) 50%,transparent 70%,rgba(212,175,55,.08));pointer-events:none}\n  .lp-wrap{position:relative;max-width:760px;margin:0 auto;background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.04));border:1px solid rgba(212,175,55,.28);box-shadow:0 18px 60px rgba(0,0,0,.45);backdrop-filter:blur(10px);border-radius:28px;padding:26px 18px 20px}\n  .lp-header{text-align:center;margin-bottom:18px}\n  .lp-header h2{margin:0;color:#f7d9e6;font-size:clamp(24px,4vw,34px);line-height:1.05;font-weight:800;letter-spacing:.3px;text-shadow:0 2px 18px rgba(212,175,55,.18)}\n  .lp-header .sub{margin:10px auto 0;max-width:560px;color:#f0dfe7;font-size:14px;line-height:1.55;opacity:.92}\n  .badge{display:inline-flex;align-items:center;gap:8px;margin-top:14px;padding:8px 14px;border-radius:999px;background:linear-gradient(90deg,rgba(212,175,55,.18),rgba(255,255,255,.08));border:1px solid rgba(212,175,55,.35);color:#ffe9b8;font-size:12px;font-weight:700;letter-spacing:.6px;text-transform:uppercase}\n  .lp-grid{display:grid;grid-template-columns:1fr;gap:12px;margin-top:18px}\n  .lp-card{display:flex;gap:14px;align-items:flex-start;padding:14px 14px 13px;border-radius:20px;background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.04));border:1px solid rgba(255,255,255,.08);box-shadow:0 10px 24px rgba(0,0,0,.18);animation:lpFade .7s ease both}\n  .lp-icon{width:42px;height:42px;min-width:42px;border-radius:14px;display:grid;place-items:center;font-size:18px;color:#fff;box-shadow:0 8px 18px rgba(0,0,0,.22)}\n  .icon-blue{background:linear-gradient(135deg,#2f6bff,#7aa2ff)}\n  .icon-silver{background:linear-gradient(135deg,#9aa0a6,#e5e7eb)}\n  .icon-light{background:linear-gradient(135deg,#f1d7a1,#fff2d2);color:#3a2a10}\n  .icon-deep{background:linear-gradient(135deg,#3a1f2d,#7b3f58)}\n  .icon-ice{background:linear-gradient(135deg,#8fd3ff,#dff6ff);color:#14324a}\n  .lp-title{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#d8c4cf;font-weight:800;margin-bottom:4px}\n  .lp-name{font-size:16px;line-height:1.45;color:#fff7fb;font-weight:700}\n  .lp-tip{display:inline-block;margin-top:8px;padding:6px 10px;border-radius:999px;background:rgba(212,175,55,.12);border:1px solid rgba(212,175,55,.22);color:#ffe7b1;font-size:12px;font-weight:700}\n  .lp-divider{margin:18px 0 14px;text-align:center;color:#e7c9d5;font-size:12px;letter-spacing:.22em;text-transform:uppercase;position:relative}\n  .lp-divider:before,.lp-divider:after{content:\"\";position:absolute;top:50%;width:28%;height:1px;background:linear-gradient(90deg,transparent,rgba(212,175,55,.45),transparent)}\n  .lp-divider:before{left:0}.lp-divider:after{right:0}\n  .pix-box{padding:16px;border-radius:22px;background:linear-gradient(180deg,rgba(212,175,55,.10),rgba(255,255,255,.05));border:1px solid rgba(212,175,55,.28)}\n  .pix-row{display:flex;gap:12px;align-items:center}\n  .pix-icon-wrap{width:46px;height:46px;border-radius:16px;display:grid;place-items:center;background:linear-gradient(135deg,#d4af37,#f5df9a);color:#1a1117;font-size:18px;box-shadow:0 10px 20px rgba(0,0,0,.2)}\n  .pix-label{font-size:13px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#ffe8b5}\n  .pix-sub{margin-top:4px;font-size:13px;line-height:1.45;color:#f5e8ee;opacity:.95}\n  .pix-key-wrap{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-top:14px}\n  .pix-key{display:inline-flex;align-items:center;min-height:44px;padding:10px 14px;border-radius:14px;background:rgba(10,7,9,.55);border:1px dashed rgba(212,175,55,.35);color:#fff;font-weight:700;word-break:break-word}\n  .pix-copy-btn{appearance:none;border:0;cursor:pointer;display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:0 16px;border-radius:14px;background:linear-gradient(135deg,#d4af37,#f0d27a);color:#1a1117;font-weight:800;box-shadow:0 10px 20px rgba(0,0,0,.2)}\n  .pix-copy-btn:active{transform:translateY(1px)}\n  .pix-copied{margin-top:10px;color:#ffe7b1;font-size:12px;font-weight:700;transition:opacity .25s ease}\n  .lp-footer{margin-top:16px;text-align:center;padding-top:14px;border-top:1px solid rgba(255,255,255,.08)}\n  .lp-footer-text{color:#f3e3ea;font-size:13px;line-height:1.55}\n  .lp-footer-accent{display:inline-block;margin-top:8px;color:#d4af37;font-size:12px;font-weight:800;letter-spacing:.18em;text-transform:uppercase}\n  .snow,.lp-star{position:absolute;pointer-events:none;user-select:none}\n  .snow{top:-12px;color:rgba(255,232,245,.55);font-size:10px;animation:fall linear infinite}\n  .snow:before{content:\"✦\"}\n  .lp-star{width:10px;height:10px;opacity:.7;animation:twinkle 2.8s ease-in-out infinite}\n  .lp-star:before{content:\"✦\";color:rgba(212,175,55,.95);font-size:10px}\n  @keyframes fall{0%{transform:translateY(-10px) rotate(0deg);opacity:0}10%{opacity:.8}100%{transform:translateY(110vh) rotate(360deg);opacity:0}}\n  @keyframes twinkle{0%,100%{transform:scale(.8);opacity:.35}50%{transform:scale(1.2);opacity:1}}\n  @keyframes lpFade{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}\n  @media (min-width:720px){.lp-wrap{padding:34px 28px 26px}.lp-grid{grid-template-columns:1fr 1fr}.lp-card:nth-child(5),.lp-card:nth-child(6){grid-column:span 1}.lp-header .sub{font-size:15px}.lp-name{font-size:17px}}\n</style>\n\n<div class=\"lp-root\">\n  <span class=\"snow\" style=\"left:8%;animation-duration:6s;animation-delay:0s;\"></span>\n  <span class=\"snow\" style=\"left:22%;animation-duration:8s;animation-delay:1.2s;font-size:9px;\"></span>\n  <span class=\"snow\" style=\"left:38%;animation-duration:7s;animation-delay:2.5s;\"></span>\n  <span class=\"snow\" style=\"left:55%;animation-duration:9s;animation-delay:.8s;font-size:9px;\"></span>\n  <span class=\"snow\" style=\"left:70%;animation-duration:6.5s;animation-delay:3s;\"></span>\n  <span class=\"snow\" style=\"left:85%;animation-duration:8.5s;animation-delay:1.8s;font-size:10px;\"></span>\n\n  <i class=\"lp-star\" style=\"top:9%;left:7%;animation-delay:0s;\"></i>\n  <i class=\"lp-star\" style=\"top:20%;right:13%;animation-delay:1s;\"></i>\n  <i class=\"lp-star\" style=\"bottom:22%;left:12%;animation-delay:2s;\"></i>\n  <i class=\"lp-star\" style=\"bottom:10%;right:9%;animation-delay:.5s;\"></i>\n\n  <div class=\"lp-wrap\">\n    <div class=\"lp-header\">\n      <h2>Lista de Presentes</h2>\n      <p class=\"sub\">Sugestões de presentes para celebrar os 15 anos de Lívia Sthepanny com carinho e praticidade.</p>\n      <span class=\"badge\">Aniversário • 15 anos</span>\n    </div>\n\n    <div class=\"lp-grid\">\n      <div class=\"lp-card\" style=\"animation-delay:.05s\">\n        <div class=\"lp-icon icon-blue\"><i class=\"fa-solid fa-shoe-prints\"></i></div>\n        <div>\n          <div class=\"lp-title\">Calçados</div>\n          <div class=\"lp-name\">Sandália sem salto ou tênis slip-on, tamanho 39</div>\n        </div>\n      </div>\n\n      <div class=\"lp-card\" style=\"animation-delay:.10s\">\n        <div class=\"lp-icon icon-silver\"><i class=\"fa-solid fa-bag-shopping\"></i></div>\n        <div>\n          <div class=\"lp-title\">Acessórios</div>\n          <div class=\"lp-name\">Bolsas pequenas ou médias</div>\n        </div>\n      </div>\n\n      <div class=\"lp-card\" style=\"animation-delay:.15s\">\n        <div class=\"lp-icon icon-light\"><i class=\"fa-solid fa-spa\"></i></div>\n        <div>\n          <div class=\"lp-title\">Cuidados corporais</div>\n          <div class=\"lp-name\">Hidratante, óleo de banho e Bud Splash</div>\n        </div>\n      </div>\n\n      <div class=\"lp-card\" style=\"animation-delay:.20s\">\n        <div class=\"lp-icon icon-deep\"><i class=\"fa-solid fa-palette\"></i></div>\n        <div>\n          <div class=\"lp-title\">Beleza</div>\n          <div class=\"lp-name\">Maquiagem</div>\n        </div>\n      </div>\n\n      <div class=\"lp-card\" style=\"animation-delay:.25s\">\n        <div class=\"lp-icon icon-blue\"><i class=\"fa-solid fa-shirt\"></i></div>\n        <div>\n          <div class=\"lp-title\">Roupas</div>\n          <div class=\"lp-name\">Roupas de dormir tamanho plus size G2</div>\n          <span class=\"lp-tip\">Tamanho G2</span>\n        </div>\n      </div>\n\n      <div class=\"lp-card\" style=\"animation-delay:.30s\">\n        <div class=\"lp-icon icon-ice\"><i class=\"fa-solid fa-spray-can-sparkles\"></i></div>\n        <div>\n          <div class=\"lp-title\">Perfumes</div>\n          <div class=\"lp-name\">Doces, florais ou cítricos, em fragrância suave</div>\n          <span class=\"lp-tip\">Sugestão suave</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"lp-divider\">Pix e contribuições</div>\n\n    <div class=\"pix-box\">\n      <div class=\"pix-row\">\n        <div class=\"pix-icon-wrap\"><i class=\"fa-solid fa-qrcode\"></i></div>\n        <div>\n          <div class=\"pix-label\">Pix para presente</div>\n          <div class=\"pix-sub\">Contribuição financeira para presentear com praticidade.</div>\n        </div>\n      </div>\n\n      <div class=\"pix-key-wrap\">\n        <span class=\"pix-key\" id=\"pixKey\">+5511917146712</span>\n        <button class=\"pix-copy-btn\" onclick=\"var key = document.getElementById('pixKey').textContent.trim(); if (navigator.clipboard) { navigator.clipboard.writeText(key).then(function() { var el = document.getElementById('copiedMsg'); el.style.opacity = '1'; setTimeout(function(){ el.style.opacity = '0'; }, 2000); }); } else { var ta = document.createElement('textarea'); ta.value = key; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); var el = document.getElementById('copiedMsg'); el.style.opacity = '1'; setTimeout(function(){ el.style.opacity = '0'; }, 2000); }\">\n          <i class=\"fa-solid fa-copy\" style=\"font-size:12px;\"></i>Copiar Pix\n        </button>\n      </div>\n\n      <div class=\"pix-copied\" id=\"copiedMsg\" style=\"opacity:0;\">Pix copiado com sucesso.</div>\n    </div>\n\n    <div class=\"lp-footer\">\n      <div class=\"lp-footer-text\">Sua presença e seu carinho são o presente mais especial.</div>\n      <span class=\"lp-footer-accent\">Lívia Sthepanny • 15 anos</span>\n    </div>\n  </div>\n</div>"
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
