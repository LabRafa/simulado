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
  if (cab.revisao) bases.revisao = (bases.revisao || []).concat(cab.revisao.filter(function (s) { return !(bases.revisao || []).some(function (x) { return x.t === s.t; }); }));
  /* Rafael 22/11: cada tema abre o resumo DELE (antes caía no de Terminologia) */
  bases.resumoTema = {
    'Osteologia': ['Osteologia do crânio (SM1)', 'Crânio: neurocrânio, forames e suturas'],
    'Glândulas salivares': ['Glândulas e dentina (SM1)'], 'Dentina': ['Glândulas e dentina (SM1)'],
    'Terminologia': ['Terminologia (aula 1)'], 'Embriologia': ['Embriologia (aula 1)'], 'Folhetos': ['Folhetos e odontologia (aula 1)'],
    'Inervação': ['Inervação (estudo dirigido de 28/09)'], 'Histologia': ['Histologia, músculo estriado esquelético (aula de 26/10)'],
    'Anestesia': ['Anestesia: qual nervo em cada caso (estudo dirigido, cap. 14)', 'Técnicas anestésicas na mandíbula (slides de 22/10)'],
    'Anestesia: pontos e técnicas': ['Maxila: onde punciono e o que anestesia', 'Mandíbula: onde punciono e o que anestesia'],
    'Músculos da mastigação': ['Músculos da mastigação e supra-hióideos', 'Músculos, ATM e facial'],
    'Mímica': ['Mímica facial'], 'Músculos da expressão': ['Mímica facial'], 'Nervo facial': ['Músculos, ATM e facial', 'Mímica facial'],
    'ATM': ['Músculos, ATM e facial'], 'Vascularização': ['Vascularização: carótida externa'], 'Artérias': ['Vascularização: carótida externa'],
    'Crânio e forames': ['Crânio: neurocrânio, forames e suturas'], 'Trigêmeo': ['Inervação (estudo dirigido de 28/09)', 'Revisão anatômica dos slides'],
    'Espaço pterigomandibular': ['Mandíbula: onde punciono e o que anestesia', 'Técnicas anestésicas na mandíbula (slides de 22/10)']
  };
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
