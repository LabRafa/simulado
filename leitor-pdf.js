/* LEITOR DE PDF dentro do site (Rafael, 20/11/2026: "quero abrir no próprio site, num reprodutor de PDF ultramoderno").
   Abre todo link para PDF da nossa biblioteca (mesmo site) num leitor em tela cheia: rolagem contínua, miniaturas,
   ir para página, zoom, busca no texto, tema claro/escuro, baixar. PDF de outro site (sem permissão de leitura) abre em aba nova.
   Usa PDF.js 3.11.174 (cdnjs). */
(function () {
  var PDFJS = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/';
  var css = `
#lpdf{position:fixed;inset:0;z-index:9999;display:flex;flex-direction:column;background:#0f1218;color:#e8ecf3;font-family:inherit;opacity:0;transition:opacity .25s}
#lpdf.on{opacity:1}#lpdf.claro{background:#eef1f6;color:#1a2233}
#lpdf .bar{display:flex;align-items:center;gap:8px;padding:10px 12px;background:rgba(20,24,33,.92);backdrop-filter:blur(10px);border-bottom:1px solid rgba(255,255,255,.08)}
#lpdf.claro .bar{background:rgba(255,255,255,.92);border-color:#dde2ea}
#lpdf .tit{flex:1;min-width:0;font-weight:800;font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#lpdf button,#lpdf .pg input,#lpdf .busca input{font:inherit;color:inherit;background:rgba(255,255,255,.08);border:0;border-radius:10px;height:36px;min-width:36px;padding:0 10px;cursor:pointer}
#lpdf.claro button,#lpdf.claro input{background:#e3e8f0}
#lpdf button:hover{background:rgba(255,255,255,.16)}#lpdf button:focus-visible,#lpdf input:focus-visible{outline:2px solid #6aa0ff}
#lpdf .pg{display:flex;align-items:center;gap:6px;font-size:14px}#lpdf .pg input{width:54px;text-align:center;cursor:text}
#lpdf .corpo{flex:1;display:flex;min-height:0}
#lpdf .miniaturas{width:132px;overflow-y:auto;padding:12px 10px;border-right:1px solid rgba(255,255,255,.06);display:flex;flex-direction:column;gap:10px}
#lpdf.claro .miniaturas{border-color:#dde2ea}
#lpdf .mini{border-radius:8px;overflow:hidden;cursor:pointer;opacity:.6;transition:opacity .2s,transform .2s;background:#fff;position:relative}
#lpdf .mini.at{opacity:1;outline:3px solid #6aa0ff}#lpdf .mini:hover{opacity:1;transform:scale(1.02)}
#lpdf .mini canvas{display:block;width:100%}#lpdf .mini span{position:absolute;right:4px;bottom:4px;font-size:11px;background:rgba(0,0,0,.6);color:#fff;border-radius:6px;padding:1px 5px}
#lpdf .paginas{flex:1;overflow:auto;padding:24px 16px 80px;scroll-behavior:smooth}
#lpdf .pag{margin:0 auto 20px;background:#fff;box-shadow:0 10px 40px rgba(0,0,0,.45);border-radius:6px;position:relative}
#lpdf.claro .pag{box-shadow:0 6px 24px rgba(20,30,60,.15)}
#lpdf .pag canvas{display:block;width:100%;height:100%;border-radius:6px}
#lpdf .pag .marca{position:absolute;inset:0;pointer-events:none;box-shadow:inset 0 0 0 4px #ffcf33;border-radius:6px;animation:lpisca 1.6s ease 2}
@keyframes lpisca{50%{box-shadow:inset 0 0 0 4px transparent}}
#lpdf .carrega{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#888;font-size:14px}
#lpdf .busca{display:flex;gap:6px;align-items:center}#lpdf .busca input{width:150px;cursor:text}#lpdf .busca small{font-size:12px;opacity:.75;min-width:44px}
#lpdf .prog{height:3px;background:linear-gradient(90deg,#6aa0ff,#9b7bff);width:0;transition:width .2s}
@media (max-width:760px){#lpdf .miniaturas{display:none}#lpdf .busca input{width:90px}#lpdf .so-pc{display:none}#lpdf .paginas{padding:12px 6px 80px}}

#lkin{position:fixed;inset:0;z-index:9990;display:flex;flex-direction:column;opacity:0;transition:opacity .25s;--fundo:#f6efe1;--tinta:#2b2418;--suave:#7a6c55;--linha:#e2d6bd;background:var(--fundo);color:var(--tinta)}
#lkin.on{opacity:1}#lkin.claro{--fundo:#ffffff;--tinta:#1a2233;--suave:#5b6576;--linha:#e3e8f0}#lkin.escuro{--fundo:#121417;--tinta:#e7e2d6;--suave:#9a927f;--linha:#2a2d33}
#lkin .bar{display:flex;align-items:center;gap:8px;padding:10px 14px;border-bottom:1px solid var(--linha);background:color-mix(in srgb,var(--fundo) 88%,transparent);backdrop-filter:blur(8px)}
#lkin .tit{flex:1;min-width:0;font-weight:800;font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#lkin button{font:inherit;color:inherit;background:color-mix(in srgb,var(--tinta) 8%,transparent);border:0;border-radius:10px;height:36px;min-width:36px;padding:0 10px;cursor:pointer}
#lkin button:hover{background:color-mix(in srgb,var(--tinta) 15%,transparent)}#lkin button:focus-visible{outline:2px solid #c9862b}
#lkin .prog{height:3px;background:var(--linha)}#lkin .prog b{display:block;height:100%;width:0;background:#c9862b;transition:width .15s}
#lkin .rolo{flex:1;overflow:auto;scroll-behavior:smooth}
#lkin .texto{max-width:680px;margin:0 auto;padding:34px 22px 120px;font-family:Georgia,'Iowan Old Style','Palatino Linotype',serif;font-size:var(--fs,19px);line-height:1.7;hyphens:auto}
#lkin .texto h1{font-family:inherit;font-size:1.45em;line-height:1.25;margin:0 0 6px}#lkin .texto .fonte-doc{color:var(--suave);font-size:.72em;margin:0 0 28px;font-family:system-ui,sans-serif}
#lkin .texto p{margin:0 0 .9em;text-align:justify}
#lkin .texto p.tt{font-weight:700;text-align:left;margin-top:1.3em}
#lkin .texto .lkfig{margin:1em 0 1.3em;text-align:center}#lkin .texto .lkfig img{max-width:100%;max-height:60vh;border-radius:6px;cursor:zoom-in;background:#fff}#lkin .texto .lkfig figcaption{font-family:system-ui,sans-serif;font-size:.72em;color:var(--suave);margin-top:6px;text-align:center;line-height:1.4}#lkin .texto .lkfig figcaption span{display:block;font-size:.9em;opacity:.85}#lkzoom{position:fixed;inset:0;z-index:10060;background:rgba(0,0,0,.88);display:flex;align-items:center;justify-content:center;cursor:zoom-out}#lkzoom img{max-width:96vw;max-height:94vh}
#lkin .texto .ind{font-family:system-ui,sans-serif;font-size:.8em;color:var(--suave);text-align:left;margin:.15em 0;line-height:1.4}#lkin .texto button.fig{display:flex;flex-wrap:wrap;gap:4px 8px;align-items:center;width:100%;text-align:left;background:transparent;cursor:pointer;color:inherit}#lkin .texto .fig em{font-style:normal;font-weight:600;color:var(--cor,#1E5BD8);text-decoration:underline}#lkin .texto .figico{display:inline-block;width:14px;height:11px;border:1.6px solid currentColor;border-radius:2px;position:relative;flex:none}#lkin .texto .figico:after{content:'';position:absolute;left:2px;right:2px;bottom:1px;height:5px;background:linear-gradient(135deg,transparent 45%,currentColor 46%,currentColor 60%,transparent 61%)}#lkin .texto .fig:focus-visible{outline:2px solid var(--cor,#1E5BD8)}
#lkin .texto p.fig,#lkin .texto button.fig{font-family:system-ui,sans-serif;font-size:.72em;color:var(--suave);text-align:left;border-left:3px solid var(--linha);padding:4px 10px;margin:.3em 0 1.1em}
#lkin .sep{display:flex;align-items:center;gap:10px;color:var(--suave);font:600 12px system-ui,sans-serif;margin:26px 0 18px}#lkin .sep:before,#lkin .sep:after{content:'';flex:1;height:1px;background:var(--linha)}
#lkin .sepin{font:600 11px system-ui,sans-serif;color:var(--suave);border:1px solid var(--linha);border-radius:6px;padding:0 5px;margin:0 2px;vertical-align:2px}#lkin .alvo-p{animation:lkalvo 2.4s ease}@keyframes lkalvo{0%,40%{background:color-mix(in srgb,#ffcf33 30%,transparent)}100%{background:transparent}}
#lkin .gl{border-bottom-color:#c9862b}
#lkin .rodape{position:absolute;bottom:0;left:0;right:0;text-align:center;font:600 12px system-ui,sans-serif;color:var(--suave);padding:8px;background:linear-gradient(transparent,var(--fundo) 60%)}
.glfundo{z-index:10050!important}
@media (max-width:760px){#lkin .so-pc{display:none}#lkin .texto{padding:22px 16px 110px}}
@media (prefers-reduced-motion:reduce){#lkin,#lkin *,#lpdf,#lpdf *{transition:none!important;animation:none!important;scroll-behavior:auto!important}}`;
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var lib = null;
  function carregaLib() {
    if (lib) return lib;
    lib = new Promise(function (ok, erro) {
      var s = document.createElement('script'); s.src = PDFJS + 'pdf.min.js';
      s.onload = function () { window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS + 'pdf.worker.min.js'; ok(window.pdfjsLib); };
      s.onerror = erro; document.head.appendChild(s);
    });
    return lib;
  }
  var esc = function (x) { return String(x).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); };
  var tema = (function () { try { return localStorage.getItem('lpdf-tema') || 'escuro'; } catch (e) { return 'escuro'; } })();

  window.abreLeitor = async function (url, titulo, pagina) {
    var el = document.createElement('div'); el.id = 'lpdf'; el.className = tema === 'claro' ? 'claro' : '';
    el.setAttribute('role', 'dialog'); el.setAttribute('aria-label', 'Leitor de PDF');
    el.innerHTML = `<div class="bar"><button data-a="fecha" aria-label="Fechar">✕</button><div class="tit">${esc(titulo || 'Documento')}</div>
      <div class="busca"><input type="search" placeholder="Buscar no texto" aria-label="Buscar no texto"><small></small></div>
      <div class="pg"><button data-a="ant" aria-label="Página anterior">‹</button><input inputmode="numeric" aria-label="Página"><span>/ <b class="tot">…</b></span><button data-a="prox" aria-label="Próxima página">›</button></div>
      <button data-a="menos" class="so-pc" aria-label="Diminuir">−</button><button data-a="ajusta" class="so-pc" aria-label="Ajustar à largura">⤢</button><button data-a="mais" class="so-pc" aria-label="Aumentar">+</button>
      <button data-a="tema" aria-label="Tema claro ou escuro">◐</button><a class="baixa" href="${esc(url)}" download><button data-a="baixa" aria-label="Baixar">⤓</button></a></div>
      <div class="prog"></div><div class="corpo"><nav class="miniaturas" aria-label="Miniaturas"></nav><main class="paginas" tabindex="0"></main></div>`;
    document.body.appendChild(el); document.body.style.overflow = 'hidden';
    requestAnimationFrame(function () { el.classList.add('on'); });
    var $ = function (s) { return el.querySelector(s); };
    var area = $('.paginas'), minis = $('.miniaturas'), prog = $('.prog'), inPg = $('.pg input');
    function fecha() { el.classList.remove('on'); document.body.style.overflow = ''; document.removeEventListener('keydown', teclas); setTimeout(function () { el.remove(); }, 250); }
    function teclas(e) { if (e.key === 'Escape') fecha(); if (e.target.tagName === 'INPUT') return; if (e.key === 'ArrowRight' || e.key === 'PageDown') vai(atual + 1); if (e.key === 'ArrowLeft' || e.key === 'PageUp') vai(atual - 1); }
    document.addEventListener('keydown', teclas);
    var pdf, pdfjs, escala = 0, atual = 1, paginas = [], textos = {};
    try { pdfjs = await carregaLib(); var tarefa = pdfjs.getDocument(url); tarefa.onProgress = function (p) { if (p.total) prog.style.width = Math.round(p.loaded * 100 / p.total) + '%'; }; pdf = await tarefa.promise; }
    catch (e) { area.innerHTML = '<p style="text-align:center;margin-top:40px">Não deu para abrir aqui. <a href="' + esc(url) + '" target="_blank" rel="noopener" style="color:#6aa0ff">Abrir em outra aba</a></p>'; return; }
    prog.style.width = '100%'; setTimeout(function () { prog.style.opacity = 0; }, 400);
    $('.tot').textContent = pdf.numPages;
    var p1 = await pdf.getPage(1), v1 = p1.getViewport({ scale: 1 });
    function larguraIdeal() { return Math.min(area.clientWidth - 56, 980) / v1.width; }
    escala = larguraIdeal();
    for (var i = 1; i <= pdf.numPages; i++) {
      var d = document.createElement('div'); d.className = 'pag'; d.dataset.n = i; d.innerHTML = '<div class="carrega">página ' + i + '</div>'; area.appendChild(d); paginas.push(d);
      var m = document.createElement('div'); m.className = 'mini'; m.dataset.n = i; m.innerHTML = '<span>' + i + '</span>'; minis.appendChild(m);
    }
    function dimensiona() { paginas.forEach(function (d) { d.style.width = (v1.width * escala) + 'px'; d.style.height = (v1.height * escala) + 'px'; d.dataset.feita = ''; }); }
    dimensiona();
    async function desenha(d) {
      if (d.dataset.feita === String(escala)) return; d.dataset.feita = String(escala);
      var pg = await pdf.getPage(+d.dataset.n), dpr = Math.min(window.devicePixelRatio || 1, 2), vp = pg.getViewport({ scale: escala * dpr });
      var c = document.createElement('canvas'); c.width = vp.width; c.height = vp.height;
      await pg.render({ canvasContext: c.getContext('2d'), viewport: vp }).promise;
      var velho = d.querySelector('canvas,.carrega'); if (velho) velho.remove(); d.prepend(c);
    }
    async function miniatura(m) {
      if (m.dataset.feita) return; m.dataset.feita = 1;
      var pg = await pdf.getPage(+m.dataset.n), vp = pg.getViewport({ scale: 110 / v1.width });
      var c = document.createElement('canvas'); c.width = vp.width; c.height = vp.height;
      await pg.render({ canvasContext: c.getContext('2d'), viewport: vp }).promise; m.prepend(c);
    }
    var obs = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) desenha(e.target); }); }, { root: area, rootMargin: '600px 0px' });
    paginas.forEach(function (d) { obs.observe(d); });
    var obsM = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) miniatura(e.target); }); }, { root: minis, rootMargin: '300px 0px' });
    minis.querySelectorAll('.mini').forEach(function (m) { obsM.observe(m); });
    function marcaAtual() {
      var meio = area.scrollTop + area.clientHeight / 3, n = 1;
      paginas.forEach(function (d) { if (d.offsetTop <= meio) n = +d.dataset.n; });
      if (n !== atual || !inPg.value) { atual = n; inPg.value = n; minis.querySelectorAll('.mini').forEach(function (m) { m.classList.toggle('at', +m.dataset.n === n); }); var mm = minis.querySelector('.mini.at'); if (mm) mm.scrollIntoView({ block: 'nearest' }); }
    }
    area.addEventListener('scroll', function () { requestAnimationFrame(marcaAtual); });
    function vai(n, destaca) { n = Math.max(1, Math.min(pdf.numPages, n)); var d = paginas[n - 1]; area.scrollTo({ top: d.offsetTop - 12 }); atual = n; inPg.value = n; if (destaca) { var mk = document.createElement('div'); mk.className = 'marca'; d.appendChild(mk); setTimeout(function () { mk.remove(); }, 3400); } }
    function reescala(nova) { var rel = atual; escala = Math.max(0.4, Math.min(4, nova)); dimensiona(); paginas.forEach(function (d) { obs.unobserve(d); obs.observe(d); }); vai(rel); }
    el.addEventListener('click', function (e) {
      var im = e.target.closest('.lkfig img'); if (im) { var z = document.createElement('div'); z.id = 'lkzoom'; z.innerHTML = '<img src="' + im.getAttribute('src') + '" alt="">'; z.onclick = function () { z.remove(); }; document.body.appendChild(z); return; }
      if (e.target.closest('.mini')) { vai(+e.target.closest('.mini').dataset.n, true); return; }
      var b = e.target.closest('[data-a]'); if (!b) return; var a = b.dataset.a;
      if (a === 'fecha') fecha(); if (a === 'ant') vai(atual - 1); if (a === 'prox') vai(atual + 1);
      if (a === 'mais') reescala(escala * 1.2); if (a === 'menos') reescala(escala / 1.2); if (a === 'ajusta') reescala(larguraIdeal());
      if (a === 'tema') { el.classList.toggle('claro'); tema = el.classList.contains('claro') ? 'claro' : 'escuro'; try { localStorage.setItem('lpdf-tema', tema); } catch (er) {} }
    });
    inPg.addEventListener('change', function () { vai(parseInt(inPg.value, 10) || 1, true); });
    var buscaIn = $('.busca input'), buscaInfo = $('.busca small'), achados = [], ia = -1;
    async function texto(n) { if (textos[n] !== undefined) return textos[n]; var pg = await pdf.getPage(n), tc = await pg.getTextContent(); return (textos[n] = tc.items.map(function (x) { return x.str; }).join(' ').toLowerCase()); }
    buscaIn.addEventListener('keydown', async function (e) {
      if (e.key !== 'Enter') return; var q = buscaIn.value.trim().toLowerCase(); if (!q) return;
      if (achados.q !== q) { achados = []; achados.q = q; ia = -1; buscaInfo.textContent = '…'; for (var n = 1; n <= pdf.numPages; n++) { if ((await texto(n)).indexOf(q) >= 0) achados.push(n); } }
      if (!achados.length) { buscaInfo.textContent = 'nada'; return; }
      ia = (ia + 1) % achados.length; buscaInfo.textContent = (ia + 1) + '/' + achados.length; vai(achados[ia], true);
    });
    window.addEventListener('resize', function () { if (document.body.contains(el)) reescala(larguraIdeal()); });
    setTimeout(function () { vai(pagina || 1, !!pagina); marcaAtual(); }, 60);
    area.focus();
  };


  /* MODO LEITURA (tipo Kindle): texto do documento com os balões do dicionário da matéria */
  var temaK = (function () { try { return localStorage.getItem('lkin-tema') || 'sepia'; } catch (e) { return 'sepia'; } })();
  var fsK = (function () { try { return +localStorage.getItem('lkin-fs') || 19; } catch (e) { return 19; } })();
  window.abreLeitura = async function (doc, pagina) {
    var el = document.createElement('div'); el.id = 'lkin'; if (temaK !== 'sepia') el.classList.add(temaK);
    el.setAttribute('role', 'dialog'); el.setAttribute('aria-label', 'Leitura');
    var temOriginal = doc.url && /\.pdf(#|$)/i.test(doc.url);
    el.innerHTML = `<div class="bar"><button data-a="fecha" aria-label="Fechar">✕</button><div class="tit">${esc(doc.t || 'Documento')}</div>
      <button data-a="menos" aria-label="Letra menor">A−</button><button data-a="mais" aria-label="Letra maior">A+</button>
      <button data-a="tema" aria-label="Tema">◐</button>${temOriginal ? '<button data-a="orig" class="so-pc">PDF original</button>' : ''}</div>
      <div class="prog"><b></b></div><div class="rolo"><article class="texto" style="--fs:${fsK}px"><p class="fonte-doc">carregando…</p></article></div><div class="rodape"></div>`;
    document.body.appendChild(el); document.body.style.overflow = 'hidden'; requestAnimationFrame(function () { el.classList.add('on'); });
    var $ = function (s) { return el.querySelector(s); }, rolo = $('.rolo'), art = $('.texto'), rod = $('.rodape');
    function fecha() { el.classList.remove('on'); document.body.style.overflow = ''; document.removeEventListener('keydown', tk); setTimeout(function () { el.remove(); }, 250); }
    function tk(e) { if (e.key === 'Escape' && !document.querySelector('.glfundo')) fecha(); }
    document.addEventListener('keydown', tk);
    var dados; try { dados = await (await fetch(doc.texto)).json(); } catch (e) { art.innerHTML = '<p>Não consegui abrir o texto.</p>'; return; }
    var gl = function (s) { try { return (typeof G === 'function') ? G(s, new Set()) : esc(s); } catch (e) { return esc(s); } };
    var figs = {}; if (doc.figuras) { try { figs = await (await fetch(doc.figuras)).json(); } catch (e) {} }
    var html = `<h1>${esc(dados.titulo)}</h1><p class="fonte-doc">${esc(dados.fonte)}</p>`;
    var paras = [];
    dados.paginas.forEach(function (pg) {
      var vistos = new Set(), primeiro = true;
      var nfig = pg.p.filter(function (x) { return /^(Figura|Tabela|Quadro)\s*\d/.test(x); }).length;
      var lista = pg.p.some(function (x) { return /^(LISTA DE|SUM[ÁA]RIO)/i.test(x); }) || nfig >= Math.max(3, pg.p.length / 2);
      pg.p.forEach(function (x) {
        var marca = primeiro ? `<span class="pg" id="lk-${pg.pg}" data-pg="${pg.pg}" data-imp="${esc(pg.imp || '')}"></span>` : '';
        var ult = paras[paras.length - 1];
        var continua = primeiro && ult && !ult.fig && !/[.:;!?)]$/.test(ult.txt) && /^[a-zà-ú(]/.test(x);
        if (continua) { ult.html += ' ' + marca.replace('class="pg"', 'class="pg meio"') + `<span class="sepin">p. ${esc(pg.imp || pg.pg)}</span> ` + ((typeof G === 'function') ? G(x, vistos) : esc(x)); ult.txt = x; primeiro = false; return; }
        var fig = !lista && /^(Fig(?:ura)?\.?|Tabela|Quadro)\s*\d/.test(x);
        if (lista && !/^(LISTA DE|SUM[ÁA]RIO)/i.test(x)) { paras.push({ fig: true, txt: x, html: (primeiro ? `<div class="sep">${pg.imp ? 'p. ' + esc(pg.imp) : 'página ' + pg.pg + ' do PDF'}</div>` : '') + marca + `<p class="ind">${esc(x)}</p>`, aberto: false }); primeiro = false; return; }
        var tt = !fig && /^(\d+(\.\d+)*\s+)?[A-ZÀ-Ú0-9 ,()\-–/]{6,}$/.test(x) && x.length < 90;
        var sep = primeiro ? `<div class="sep">${pg.imp ? 'p. ' + esc(pg.imp) : 'página ' + pg.pg + ' do PDF'}</div>` : '';
        paras.push({ fig: fig, txt: x, html: sep + marca + (fig ? (function(){ var nf = (x.match(/^Fig(?:ura)?\.?\s*(\d+)/) || [])[1]; var F = nf && figs[nf]; if (!F) return null; return `<figure class="lkfig"><img src="${esc(F.img)}" alt="${esc(x)}" loading="lazy"><figcaption>${esc(x)}<span>Fonte: ${esc(dados.titulo)}${pg.imp ? ', p. ' + esc(pg.imp) : ''}</span></figcaption></figure>`; })() || (temOriginal ? `<button type="button" class="fig" data-a="orig" data-pg="${pg.pg}"><span class="figico" aria-hidden="true"></span><span>${esc(x)}</span><em>Ver a figura no PDF original</em></button>` : `<p class="fig"><span class="figico" aria-hidden="true"></span>${esc(x)} <em>(figura no documento original)</em></p>`) : `<p${tt ? ' class="tt"' : ''}>`) + (fig ? '' : ((typeof G === 'function') ? G(x, vistos) : esc(x))), aberto: !fig });
        primeiro = false;
      });
    });
    html += paras.map(function (p) { return p.html + (p.aberto ? '</p>' : ''); }).join('');
    art.innerHTML = html;
    function onde() {
      var max = rolo.scrollHeight - rolo.clientHeight; $('.prog b').style.width = (max > 0 ? Math.round(rolo.scrollTop * 100 / max) : 100) + '%';
      var meio = rolo.scrollTop + rolo.clientHeight / 3, at = null; art.querySelectorAll('.pg').forEach(function (d) { if (d.offsetTop <= meio) at = d; });
      rod.textContent = at ? (at.dataset.imp ? 'p. ' + at.dataset.imp : 'página ' + at.dataset.pg) + ' · ' + (max > 0 ? Math.round(rolo.scrollTop * 100 / max) : 100) + '% lido' : '';
    }
    rolo.addEventListener('scroll', function () { requestAnimationFrame(onde); });
    el.addEventListener('click', function (e) {
      var b = e.target.closest('[data-a]'); if (!b) return; var a = b.dataset.a;
      if (a === 'fecha') fecha();
      if (a === 'mais' || a === 'menos') { fsK = Math.max(14, Math.min(28, fsK + (a === 'mais' ? 2 : -2))); art.style.setProperty('--fs', fsK + 'px'); try { localStorage.setItem('lkin-fs', fsK); } catch (er) {} }
      if (a === 'tema') { var ord = ['sepia', 'claro', 'escuro']; temaK = ord[(ord.indexOf(temaK) + 1) % 3]; el.classList.remove('claro', 'escuro'); if (temaK !== 'sepia') el.classList.add(temaK); try { localStorage.setItem('lkin-tema', temaK); } catch (er) {} }
      if (a === 'orig') { var base = new URL(doc.url, location.href); var atual = b.dataset.pg ? +b.dataset.pg : (function(){ var m = rolo.scrollTop + rolo.clientHeight/3, n = 1; art.querySelectorAll('.pg').forEach(function(d){ if (d.offsetTop <= m) n = +d.dataset.pg; }); return n; })(); if (base.origin === location.origin) window.abreLeitor(doc.url.split('#')[0], doc.t, atual); else window.open(base.href.split('#')[0] + '#page=' + atual, '_blank', 'noopener'); }
    });
    setTimeout(function () { var alvo = pagina && document.getElementById('lk-' + pagina); if (alvo) { rolo.style.scrollBehavior = 'auto'; rolo.scrollTop = alvo.offsetTop - 8; rolo.style.scrollBehavior = ''; var pp = alvo.closest('p') || alvo.nextElementSibling; if (pp) pp.classList.add('alvo-p'); } onde(); }, 60);
  };

  /* qualquer link para PDF do PRÓPRIO site abre no leitor */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href]'); if (!a || a.hasAttribute('download')) return;
    var u; try { u = new URL(a.getAttribute('href'), location.href); } catch (er) { return; }
    var semHash = u.href.split('#')[0];
    var docs = []; try { docs = (typeof banco === 'function' && banco().biblioteca) || []; } catch (er) {}
    var doc = docs.find(function (d) { return d.texto && new URL(d.url, location.href).href.split('#')[0] === semHash; });
    if (doc) { e.preventDefault(); window.abreLeitura(doc, parseInt((u.hash.match(/page=(\d+)/) || [])[1], 10) || 0); return; }
    if (u.origin !== location.origin || !/\.pdf$/i.test(u.pathname)) return;
    e.preventDefault();
    var pg = parseInt((u.hash.match(/page=(\d+)/) || [])[1], 10) || 1;
    var t = (a.querySelector('b') || a).textContent.replace(/^📚\s*Ver na Biblioteca:\s*/, '').trim();
    window.abreLeitor(u.pathname.replace(/^.*?\/(biblioteca\/)/, '$1'), t, pg);
  }, true);
})();
