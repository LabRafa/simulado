/* Rafael 22/11/2026: "por que está separado se a prova é junta?". Cabeça e Pescoço é conteúdo de Bases Morfológicas
   (ementa ARA4190: osteologia, miologia, vascularização e inervação de cabeça e pescoço, glândulas salivares).
   As questões de cabeca entram em Bases (com as imagens), ganham modos próprios e a matéria separada some da lista. */
(function () {
  var B = window.BANCOS || {}, bases = B.bases, cab = B.cabeca;
  if (!bases || !cab || bases._uniuCabeca) return;
  bases._uniuCabeca = true;
  var ids = new Set(bases.q.map(function (q) { return q.id; }));
  (cab.q || []).forEach(function (q) {
    var c = Object.assign({}, q);
    if (ids.has(c.id)) c.id = 'cp-' + c.id;
    ids.add(c.id); bases.q.push(c);
  });
  if (cab.glossario) bases.glossario = Object.assign({}, cab.glossario, bases.glossario || {});
  var temasCab = Array.from(new Set((cab.q || []).map(function (q) { return q.tema; })));
  var novos = [
    { id: 'b-imagens', nome: 'Questões com imagem', sub: 'Crânio, forames, nervos, músculos, artérias e anestesia com figura.', temas: null, img: true },
    { id: 'b-cabeca', nome: 'Cabeça e pescoço (anatomia da anestesia)', sub: 'Crânio e forames, trigêmeo e facial, músculos, ATM, vasos e glândulas.', temas: temasCab }
  ];
  var ms = bases.modos || (bases.modos = []);
  var pos = Math.min(1, ms.length);
  novos.forEach(function (m, i) { if (!ms.some(function (x) { return x.id === m.id; })) ms.splice(pos + i, 0, m); });
  (window.MATERIAS || []).forEach(function (m) { if (m.id === 'cabeca') m.pronto = false; });
})();
