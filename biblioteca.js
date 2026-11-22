/* BIBLIOTECA DE CADA MATÉRIA (Rafael, 20/11/2026: "toda matéria tem que ter uma biblioteca";
   "a fonte da questão deve aparecer o link pra nossa biblioteca e citar a página").
   Rafael 22/11: SÓ LIVROS E ESTUDOS (nada de plano de ensino, material de aula ou treino da Mônica).
   Cada documento: id, t (título), desc, url, fonte. Só material liberado ao aluno ou de acesso aberto.
   Questão aponta com  bib: 'id', pag: 'página impressa', pg: página do PDF (para abrir direto nela). */
(function () {
  var B = window.BANCOS || {};
  var MANUAL = { id: 'manual-estomato-sp', t: 'Estomatologia para Clínicos da Atenção Básica (SMS São Paulo, 2017)',
    desc: 'Manual oficial da Prefeitura de São Paulo: lesões fundamentais, variações da normalidade, lesões, biópsia. Link do site da Prefeitura.',
    url: 'https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/saude/MANUALESTOMATOLOGIA.pdf', texto: 'biblioteca/manual-estomato-sp.json', figuras: 'biblioteca/manual-estomato-sp-figuras.json', fonte: 'Secretaria Municipal da Saúde de São Paulo' };
  var add = function (k, docs) { if (!B[k]) return; var b = B[k]; b.biblioteca = (b.biblioteca || []).concat(docs.filter(function (d) { return !(b.biblioteca || []).some(function (x) { return x.id === d.id; }); })); };
  add('inter', [
    MANUAL,
    { id: 'abati-2024', t: 'Lesões pigmentadas da boca (Abati et al., Cancers 2024)', desc: 'Revisão de acesso aberto, com fotos: melanoma, amálgama, racial, mácula melanótica, fumante, medicamento, Addison.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11240708/', fonte: 'Cancers 2024;16:2487, CC BY 4.0' },
    { id: 'arruda-2026', t: 'Melanoma oral na América do Sul (de Arruda et al., Head Neck Pathol 2026)', desc: 'Série de casos com fotos clínicas e histologia (S-100, HMB-45, Melan-A, SOX10).', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13275972/', fonte: 'Head Neck Pathol 2026, CC BY 4.0' }
  ]);
  add('estomato', [MANUAL,
    { id: 'abati-2024', t: 'Lesões pigmentadas da boca (Abati et al., Cancers 2024)', desc: 'Revisão de acesso aberto, com fotos.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11240708/', fonte: 'Cancers 2024;16:2487, CC BY 4.0' }
  ]);
  if (B.legal) (B.legal.biblioteca || []).forEach(function (d) { if (d.id === 'ceo') d.texto = 'biblioteca/codigo-de-etica-odontologica-cfo-118-2012.json'; });
})();
