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
    "paletaCores": "Rosê com Dourado e Preto",
    "tema": "Elegante",
    "musica": "assets/music_1784493325890.mp3",
    "tipoAbertura": "curta",
    "particulasAbertura": true,
    "slug": "AniversarioLiviaSthepanny15Anos",
    "seo": {
      "pageTitle": "Convite de Aniversário de Lívia Sthepanny",
      "ogTitle": "Você recebeu um convite especial!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1784493325890.jpg",
    "cartao": "assets/cartao_chatgpt_1784493325890.jpg",
    "aberturaSlides": [
      "assets/slide1_1784493325890.mp4"
    ],
    "aberturaSlidesMeta": [
      {
        "filePath": "assets/slide1_1784493325890.mp4",
        "label": "Abertura (Vídeo)",
        "type": "video"
      }
    ],
    "folhaVazia": "assets/folha_vazia_1784493325890.jpg",
    "folhaPreenchida": "assets/folha_1784493325890.jpg",
    "musica": "assets/music_1784493325890.mp3",
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
      "conteudo": "assets/popup_manual_premium_1784493325890.jpg"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<div class=\"lp-root\">\n  <style>\n    .lp-root{\n      position:relative;\n      overflow:hidden;\n      padding:28px 16px 34px;\n      background:\n        radial-gradient(circle at top, rgba(255,255,255,.10), transparent 34%),\n        linear-gradient(180deg, #120b10 0%, #1a1016 42%, #0d090c 100%);\n      color:#f7e9ef;\n      font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n    }\n    .lp-root:before{\n      content:\"\";\n      position:absolute; inset:0;\n      background:\n        radial-gradient(circle at 20% 15%, rgba(214,164,176,.18), transparent 18%),\n        radial-gradient(circle at 80% 20%, rgba(212,175,55,.14), transparent 16%),\n        radial-gradient(circle at 50% 80%, rgba(255,255,255,.05), transparent 22%);\n      pointer-events:none;\n    }\n    .lp-wrap{\n      position:relative;\n      z-index:2;\n      max-width:760px;\n      margin:0 auto;\n      border:1px solid rgba(212,175,55,.28);\n      border-radius:28px;\n      background:linear-gradient(180deg, rgba(255,248,250,.08), rgba(255,255,255,.03));\n      box-shadow:0 18px 60px rgba(0,0,0,.42);\n      backdrop-filter: blur(10px);\n      padding:22px 18px 18px;\n    }\n    .lp-header{\n      text-align:center;\n      padding:6px 8px 18px;\n    }\n    .lp-header h2{\n      margin:0;\n      font-size:clamp(24px, 4vw, 34px);\n      line-height:1.05;\n      letter-spacing:.4px;\n      color:#fff7fa;\n      text-shadow:0 2px 18px rgba(0,0,0,.35);\n    }\n    .lp-header .sub{\n      margin:10px auto 0;\n      max-width:560px;\n      color:#e7d7de;\n      font-size:14px;\n      line-height:1.55;\n    }\n    .badge{\n      display:inline-flex;\n      align-items:center;\n      gap:8px;\n      margin-top:14px;\n      padding:9px 14px;\n      border-radius:999px;\n      background:linear-gradient(135deg, rgba(212,175,55,.18), rgba(214,164,176,.18));\n      border:1px solid rgba(212,175,55,.38);\n      color:#f7e6b1;\n      font-size:12px;\n      font-weight:700;\n      letter-spacing:.8px;\n      text-transform:uppercase;\n    }\n    .lp-grid{\n      display:grid;\n      grid-template-columns:1fr;\n      gap:12px;\n      margin-top:8px;\n    }\n    .lp-card{\n      display:flex;\n      gap:14px;\n      align-items:flex-start;\n      padding:14px 14px 13px;\n      border-radius:20px;\n      background:linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.04));\n      border:1px solid rgba(255,255,255,.08);\n      box-shadow:inset 0 1px 0 rgba(255,255,255,.05);\n      animation:lpFloat .8s ease both;\n    }\n    .lp-icon{\n      width:42px; height:42px;\n      border-radius:14px;\n      display:grid;\n      place-items:center;\n      flex:0 0 42px;\n      font-size:16px;\n      box-shadow:0 10px 20px rgba(0,0,0,.22);\n    }\n    .icon-blue{background:linear-gradient(135deg, #2b4f7a, #6f9bc9); color:#fff;}\n    .icon-silver{background:linear-gradient(135deg, #8f98a6, #e6ebf2); color:#1b1b1f;}\n    .icon-light{background:linear-gradient(135deg, #f3d9df, #fff7fb); color:#6b3f4d;}\n    .icon-deep{background:linear-gradient(135deg, #2b1a22, #5a3344); color:#f7e9ef;}\n    .icon-ice{background:linear-gradient(135deg, #dfeef7, #9fc7dd); color:#173042;}\n    .lp-title{\n      font-size:12px;\n      text-transform:uppercase;\n      letter-spacing:.9px;\n      color:#d8b7c2;\n      font-weight:800;\n      margin-bottom:4px;\n    }\n    .lp-name{\n      font-size:15px;\n      line-height:1.45;\n      color:#fff7fa;\n      font-weight:600;\n    }\n    .lp-tip{\n      display:inline-block;\n      margin-top:8px;\n      font-size:12px;\n      line-height:1.45;\n      color:#f1d7df;\n      opacity:.92;\n    }\n    .lp-divider{\n      margin:18px 2px 14px;\n      text-align:center;\n      color:#f2d9df;\n      font-size:12px;\n      letter-spacing:1.2px;\n      text-transform:uppercase;\n      position:relative;\n    }\n    .lp-divider:before,\n    .lp-divider:after{\n      content:\"\";\n      position:absolute;\n      top:50%;\n      width:32%;\n      height:1px;\n      background:linear-gradient(90deg, transparent, rgba(212,175,55,.55), transparent);\n    }\n    .lp-divider:before{left:0;}\n    .lp-divider:after{right:0;}\n    .pix-box{\n      border-radius:22px;\n      padding:16px;\n      background:linear-gradient(180deg, rgba(212,175,55,.10), rgba(255,255,255,.04));\n      border:1px solid rgba(212,175,55,.22);\n    }\n    .pix-row{\n      display:flex;\n      gap:12px;\n      align-items:center;\n    }\n    .pix-icon-wrap{\n      width:46px; height:46px;\n      border-radius:16px;\n      display:grid;\n      place-items:center;\n      background:linear-gradient(135deg, rgba(212,175,55,.22), rgba(214,164,176,.18));\n      border:1px solid rgba(212,175,55,.28);\n      color:#f7e6b1;\n      flex:0 0 46px;\n      font-size:18px;\n    }\n    .pix-label{\n      font-size:12px;\n      text-transform:uppercase;\n      letter-spacing:.9px;\n      color:#f0d7df;\n      font-weight:800;\n      margin-bottom:4px;\n    }\n    .pix-sub{\n      font-size:14px;\n      line-height:1.45;\n      color:#fff7fa;\n    }\n    .pix-key-wrap{\n      margin-top:14px;\n      display:flex;\n      gap:10px;\n      flex-wrap:wrap;\n      align-items:center;\n    }\n    .pix-key{\n      flex:1 1 260px;\n      padding:12px 14px;\n      border-radius:16px;\n      background:rgba(10,8,10,.42);\n      border:1px dashed rgba(212,175,55,.35);\n      color:#fff7fa;\n      font-size:13px;\n      line-height:1.45;\n      word-break:break-word;\n    }\n    .pix-copy-btn{\n      appearance:none;\n      border:none;\n      cursor:pointer;\n      padding:12px 14px;\n      border-radius:16px;\n      background:linear-gradient(135deg, #d4af37, #f0d98a);\n      color:#1a1016;\n      font-weight:800;\n      font-size:13px;\n      display:inline-flex;\n      align-items:center;\n      gap:8px;\n      box-shadow:0 10px 24px rgba(212,175,55,.18);\n    }\n    .pix-copied{\n      margin-top:10px;\n      color:#f7e6b1;\n      font-size:12px;\n      font-weight:700;\n      transition:opacity .25s ease;\n    }\n    .lp-footer{\n      margin-top:16px;\n      text-align:center;\n      padding-top:6px;\n    }\n    .lp-footer-text{\n      color:#e8d6dd;\n      font-size:12px;\n      line-height:1.5;\n    }\n    .lp-footer-accent{\n      display:inline-block;\n      margin-top:8px;\n      color:#d4af37;\n      font-size:12px;\n      font-weight:800;\n      letter-spacing:1px;\n      text-transform:uppercase;\n    }\n    .snow,.lp-star{position:absolute;pointer-events:none;z-index:1}\n    .snow{\n      top:-10px;\n      color:rgba(255,236,242,.55);\n      font-size:10px;\n      animation:fall linear infinite;\n      text-shadow:0 0 10px rgba(255,255,255,.2);\n    }\n    .lp-star{\n      width:8px;height:8px;border-radius:50%;\n      background:radial-gradient(circle, #fff 0%, #f7e6b1 35%, rgba(212,175,55,.15) 70%, transparent 72%);\n      box-shadow:0 0 14px rgba(212,175,55,.55);\n      animation:twinkle 2.8s ease-in-out infinite;\n    }\n    @keyframes fall{\n      0%{transform:translateY(-20px) translateX(0);opacity:0}\n      10%{opacity:.9}\n      100%{transform:translateY(110vh) translateX(18px);opacity:0}\n    }\n    @keyframes twinkle{\n      0%,100%{transform:scale(.85);opacity:.55}\n      50%{transform:scale(1.2);opacity:1}\n    }\n    @keyframes lpFloat{\n      from{opacity:0;transform:translateY(10px)}\n      to{opacity:1;transform:translateY(0)}\n    }\n  </style>\n\n  <span class=\"snow\" style=\"left:8%;animation-duration:6s;animation-delay:0s;\">✦</span>\n  <span class=\"snow\" style=\"left:22%;animation-duration:8s;animation-delay:1.2s;font-size:9px;\">✦</span>\n  <span class=\"snow\" style=\"left:38%;animation-duration:7s;animation-delay:2.5s;\">✦</span>\n  <span class=\"snow\" style=\"left:55%;animation-duration:9s;animation-delay:.8s;font-size:9px;\">✦</span>\n  <span class=\"snow\" style=\"left:70%;animation-duration:6.5s;animation-delay:3s;\">✦</span>\n  <span class=\"snow\" style=\"left:85%;animation-duration:8.5s;animation-delay:1.8s;font-size:10px;\">✦</span>\n\n  <i class=\"lp-star\" style=\"top:9%;left:7%;animation-delay:0s;\"></i>\n  <i class=\"lp-star\" style=\"top:20%;right:13%;animation-delay:1s;\"></i>\n  <i class=\"lp-star\" style=\"bottom:22%;left:12%;animation-delay:2s;\"></i>\n  <i class=\"lp-star\" style=\"bottom:10%;right:9%;animation-delay:.5s;\"></i>\n\n  <div class=\"lp-wrap\">\n    <div class=\"lp-header\">\n      <h2>Lista de Presentes</h2>\n      <p class=\"sub\">Sugestões de presentes para celebrar os 15 anos de Lívia Sthepanny com carinho e elegância.</p>\n      <span class=\"badge\">Aniversário • 15 anos</span>\n    </div>\n\n    <div class=\"lp-grid\">\n      <div class=\"lp-card\" style=\"animation-delay:.05s\">\n        <div class=\"lp-icon icon-blue\"><i class=\"fa-solid fa-shoe-prints\"></i></div>\n        <div>\n          <div class=\"lp-title\">Calçados</div>\n          <div class=\"lp-name\">Sandália sem salto ou tênis slip-on, tamanho 39</div>\n        </div>\n      </div>\n\n      <div class=\"lp-card\" style=\"animation-delay:.10s\">\n        <div class=\"lp-icon icon-silver\"><i class=\"fa-solid fa-bag-shopping\"></i></div>\n        <div>\n          <div class=\"lp-title\">Acessórios</div>\n          <div class=\"lp-name\">Bolsas pequenas ou médias</div>\n        </div>\n      </div>\n\n      <div class=\"lp-card\" style=\"animation-delay:.15s\">\n        <div class=\"lp-icon icon-light\"><i class=\"fa-solid fa-spa\"></i></div>\n        <div>\n          <div class=\"lp-title\">Cuidados corporais</div>\n          <div class=\"lp-name\">Hidratante, óleo de banho e Bud Splash</div>\n        </div>\n      </div>\n\n      <div class=\"lp-card\" style=\"animation-delay:.20s\">\n        <div class=\"lp-icon icon-deep\"><i class=\"fa-solid fa-paintbrush\"></i></div>\n        <div>\n          <div class=\"lp-title\">Beleza</div>\n          <div class=\"lp-name\">Maquiagem</div>\n        </div>\n      </div>\n\n      <div class=\"lp-card\" style=\"animation-delay:.25s\">\n        <div class=\"lp-icon icon-blue\"><i class=\"fa-solid fa-shirt\"></i></div>\n        <div>\n          <div class=\"lp-title\">Roupas</div>\n          <div class=\"lp-name\">Roupas de dormir, tamanho plus size G2</div>\n          <span class=\"lp-tip\">Tamanho informado: G2</span>\n        </div>\n      </div>\n\n      <div class=\"lp-card\" style=\"animation-delay:.30s\">\n        <div class=\"lp-icon icon-ice\"><i class=\"fa-solid fa-spray-can-sparkles\"></i></div>\n        <div>\n          <div class=\"lp-title\">Perfumes</div>\n          <div class=\"lp-name\">Doces, florais ou cítricos, com fragrância suave</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"lp-divider\">Informações para presente</div>\n\n    <div class=\"pix-box\">\n      <div class=\"pix-row\">\n        <div class=\"pix-icon-wrap\"><i class=\"fa-solid fa-qrcode\"></i></div>\n        <div>\n          <div class=\"pix-label\">Pix para presente</div>\n          <div class=\"pix-sub\">Copie a chave abaixo para enviar seu presente em forma de Pix.</div>\n        </div>\n      </div>\n\n      <div class=\"pix-key-wrap\">\n        <span class=\"pix-key\" id=\"pixKey\">Chave Pix não informada</span>\n        <button class=\"pix-copy-btn\" onclick=\"var key = document.getElementById('pixKey').textContent.trim(); if (navigator.clipboard) { navigator.clipboard.writeText(key).then(function() { var el = document.getElementById('copiedMsg'); el.style.opacity = '1'; setTimeout(function(){ el.style.opacity = '0'; }, 2000); }); } else { var ta = document.createElement('textarea'); ta.value = key; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); var el = document.getElementById('copiedMsg'); el.style.opacity = '1'; setTimeout(function(){ el.style.opacity = '0'; }, 2000); }\">\n          <i class=\"fa-solid fa-copy\" style=\"font-size:12px;\"></i>Copiar Pix\n        </button>\n      </div>\n\n      <div class=\"pix-copied\" id=\"copiedMsg\" style=\"opacity:0;\">Chave copiada com sucesso.</div>\n    </div>\n\n    <div class=\"lp-footer\">\n      <div class=\"lp-footer-text\">Presentes escolhidos com carinho para celebrar este momento especial.</div>\n      <span class=\"lp-footer-accent\">Rosê • Dourado • Preto</span>\n    </div>\n  </div>\n</div>"
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
    "buttonColor": "#8b5e8a",
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
    "usedAt": "2026-07-19T18:15:09.666Z",
    "source": "fill-fields",
    "buttonDecisions": {
      "manualComConteudo": true,
      "presentesComConteudo": true,
      "manualPremium": true,
      "presentesPremium": false,
      "manualResumo": "Chegue no horário: Sua presença pontual é muito importante para nós. Confirme sua presença: Por favor, confirme presença pelo menos 15 dias antes do evento. Convidado não convida! Se você consome bebida alcoólica, traga uma caixinha gelada. Tudo o que você precisar, peça ao garçom. Os doces e o bolo serão servidos depois dos parabéns, portanto não mexa na mesa. Divirta-se bastante! Estamos ansiosos para celebrar este momento especial com você. Não vá embora sem me dar um abraço e comer um pedaço do bolo. Queremos compartilhar cada instante com você.",
      "presentesResumo": "Sandália sem salto ou tênis slip-on 39. Bolsas pequenas ou médias. Produtos para cuidados corporais: hidratante, óleo de banho, Bud Splash. Maquiagem. Roupas de dormir tamanho plus size G2. Perfumes doces, florais ou cítricos (suaves)."
    }
  }
};
