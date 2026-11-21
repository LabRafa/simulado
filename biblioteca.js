/* BIBLIOTECA DE CADA MATÉRIA (Rafael, 20/11/2026: "toda matéria tem que ter uma biblioteca";
   "a fonte da questão deve aparecer o link pra nossa biblioteca e citar a página").
   Cada documento: id, t (título), desc, url, fonte. Só material liberado ao aluno ou de acesso aberto.
   Questão aponta com  bib: 'id', pag: 'página impressa', pg: página do PDF (para abrir direto nela). */
(function () {
  var B = window.BANCOS || {};
  var MANUAL = { id: 'manual-estomato-sp', t: 'Estomatologia para Clínicos da Atenção Básica (SMS São Paulo, 2017)',
    desc: 'Manual oficial da Prefeitura de São Paulo: lesões fundamentais, variações da normalidade, lesões, biópsia. Link do site da Prefeitura.',
    url: 'https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/saude/MANUALESTOMATOLOGIA.pdf', texto: 'biblioteca/manual-estomato-sp.json', fonte: 'Secretaria Municipal da Saúde de São Paulo' };
  var add = function (k, docs) { if (!B[k]) return; var b = B[k]; b.biblioteca = (b.biblioteca || []).concat(docs.filter(function (d) { return !(b.biblioteca || []).some(function (x) { return x.id === d.id; }); })); };
  add('bases', [
    { id: 'plano-bases', t: 'Plano de ensino: Bases Morfológicas da Odontologia (ARA4190)', desc: 'Ementa, os 10 ciclos do conteúdo programático e a forma de avaliação.', url: 'biblioteca/plano-de-ensino-bases-ARA4190.pdf', texto: 'biblioteca/plano-de-ensino-bases-ARA4190.json', fonte: 'Estácio' },
    { id: 'treino-av', t: 'Treino para a AV: Bases e Interações (20 questões)', desc: 'Uma questão por ciclo do plano de ensino, com gabarito comentado. Treino da Mônica, não é do professor.', url: 'biblioteca/treino-av-bases-e-interacoes.pdf', texto: 'biblioteca/treino-av-bases-e-interacoes.json', fonte: 'Mônica, 19/11/2026' }
  ]);
  add('inter', [
    { id: 'plano-inter', t: 'Plano de ensino: Interações Biológicas e Patológicas (ARA4380)', desc: 'Ementa e os 10 ciclos: patologia geral, lesões fundamentais, neoplasias, cistos e imaginologia.', url: 'biblioteca/plano-de-ensino-interacoes-ARA4380.pdf', texto: 'biblioteca/plano-de-ensino-interacoes-ARA4380.json', fonte: 'Estácio' },
    MANUAL,
    { id: 'abati-2024', t: 'Lesões pigmentadas da boca (Abati et al., Cancers 2024)', desc: 'Revisão de acesso aberto, com fotos: melanoma, amálgama, racial, mácula melanótica, fumante, medicamento, Addison.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11240708/', fonte: 'Cancers 2024;16:2487, CC BY 4.0' },
    { id: 'arruda-2026', t: 'Melanoma oral na América do Sul (de Arruda et al., Head Neck Pathol 2026)', desc: 'Série de casos com fotos clínicas e histologia (S-100, HMB-45, Melan-A, SOX10).', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13275972/', fonte: 'Head Neck Pathol 2026, CC BY 4.0' },
    { id: 'treino-av', t: 'Treino para a AV: Bases e Interações (20 questões)', desc: 'Uma questão por ciclo do plano de ensino, com gabarito comentado. Treino da Mônica, não é do professor.', url: 'biblioteca/treino-av-bases-e-interacoes.pdf', texto: 'biblioteca/treino-av-bases-e-interacoes.json', fonte: 'Mônica, 19/11/2026' }
  ]);
  add('farmaco', [
    { id: 'plano-farmaco', t: 'Plano de ensino: Farmacologia e Anestesiologia Odontológica (ARA4314)', desc: 'Ementa, conteúdo programático e forma de avaliação.', url: 'biblioteca/plano-de-ensino-farmaco-ARA4314.pdf', texto: 'biblioteca/plano-de-ensino-farmaco-ARA4314.json', fonte: 'Estácio' }
  ]);
  add('estomato', [MANUAL,
    { id: 'abati-2024', t: 'Lesões pigmentadas da boca (Abati et al., Cancers 2024)', desc: 'Revisão de acesso aberto, com fotos.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11240708/', fonte: 'Cancers 2024;16:2487, CC BY 4.0' }
  ]);
  if (B.legal) (B.legal.biblioteca || []).forEach(function (d) { if (d.id === 'ceo') d.texto = 'biblioteca/codigo-de-etica-odontologica-cfo-118-2012.json'; });
})();
