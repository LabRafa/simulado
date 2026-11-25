/* Odontologia Legal: termos novos usados nos porquês (25/11/2026). Carregar DEPOIS de glossario-legal-extra.js.
   Só entra termo que ainda não existe. Imagens: Wikimedia Commons por link direto (licença livre; crédito no fonte). */
(function () {
  var B = window.BANCOS && window.BANCOS.legal; if (!B) return;
  B.glossario = B.glossario || {};
  var PL = 'https://www.planalto.gov.br/ccivil_03/';
  var CEO = 'Código de Ética Odontológica, Res. CFO-118/2012';
  var W = 'https://upload.wikimedia.org/wikipedia/commons/';
  var NOVOS = {
    'vestígio': { d: 'Qualquer marca ou objeto deixado por um crime que pode ser examinado: lesão no corpo, sangue, saliva, dente quebrado, marca de mordida. Quando a infração deixa vestígio, o exame de corpo de delito é obrigatório e a confissão não o substitui (CPP, art. 158). Ex.: os dentes fraturados de quem levou um soco são vestígio que o perito descreve no laudo.',
      fonte: 'Código de Processo Penal (Decreto-Lei 3.689/1941), ' + PL + 'decreto-lei/del3689compilado.htm, arts. 158 e 158-A; foto: Jim.henderson, CC BY-SA 4.0 (Wikimedia Commons)',
      img: [W + 'thumb/2/27/Crime_scene_markers_at_Tonic_bar_2017-12_jeh.jpg/960px-Crime_scene_markers_at_Tonic_bar_2017-12_jeh.jpg'],
      legs: ['Marcadores numerados ao lado dos vestígios num local de crime, antes da coleta.'], alts: ['Placas amarelas numeradas no chão marcando vestígios'] },
    'parestesia': { d: 'Formigamento ou dormência que continua depois que a anestesia já deveria ter passado, por lesão ou irritação de um nervo. Em Odontologia o caso típico é o nervo alveolar inferior, perto do terceiro molar: lábio e queixo ficam dormentes. É risco que deve constar no TCLE antes da exodontia. Ex.: paciente que, depois da extração do siso, fica semanas com o lábio inferior dormente.',
      fonte: 'Peterson, Cirurgia Oral e Maxilofacial Contemporânea; imagem: Amy D\'Camp, domínio público (Wikimedia Commons)',
      img: [W + 'd/d5/Inferior_Alveolar_nerve_Branches.png'],
      legs: ['O nervo alveolar inferior e seus ramos dentro da mandíbula: é ele que pode ser lesado na extração do siso.'], alts: ['Desenho do nervo alveolar inferior e seus ramos na mandíbula'] },
    'anafilaxia': { d: 'Reação alérgica grave e rápida, que pode fechar a garganta e derrubar a pressão. É emergência: o tratamento é adrenalina na hora. A Lei 5.081 (art. 6º, VIII) permite ao dentista aplicar medicação de urgência quando a vida do paciente está em risco. Ex.: paciente que fica com urticária, falta de ar e tontura logo depois de tomar um medicamento no consultório.',
      fonte: 'Lei 5.081/1966, ' + PL + 'leis/l5081.htm, art. 6º, VIII; Malamed, Emergências Médicas em Odontologia; foto: Wikimedia Commons, CC BY-SA 4.0',
      img: [W + 'thumb/b/bd/Epipen_design_%28cropped%29.jpg/960px-Epipen_design_%28cropped%29.jpg'],
      legs: ['Caneta autoinjetora de adrenalina, usada na anafilaxia.'], alts: ['Caneta autoinjetora de adrenalina'] },
    'responsabilidade objetiva': { d: 'Responsabilidade que não depende de provar culpa: basta mostrar o dano e o nexo com o serviço. É a regra do CDC para o fornecedor de serviços, como a clínica (art. 14, caput). O profissional liberal é exceção: responde mediante verificação de culpa (§4º). Ex.: a clínica responde pela prótese mal adaptada sem o paciente precisar provar qual dentista errou.',
      fonte: 'Código de Defesa do Consumidor (Lei 8.078/1990), ' + PL + 'leis/l8078compilado.htm, art. 14; foto: Bhullargraphic, CC BY-SA 4.0 (Wikimedia Commons)',
      img: [W + 'thumb/3/35/Close-up_of_Lady_Justice_statue_holding_scales%2C_symbolizing_justice_and_fairness.jpg/960px-Close-up_of_Lady_Justice_statue_holding_scales%2C_symbolizing_justice_and_fairness.jpg'],
      legs: ['A balança da Justiça: símbolo do equilíbrio entre as partes.'], alts: ['Estátua da Justiça segurando uma balança'] },
    'mercantilização': { d: 'Tratar a saúde como mercadoria: atrair paciente pelo preço, por brinde, sorteio ou propaganda insistente, em vez de pela necessidade e pela qualidade. O Código de Ética manda o dentista se abster de atos que impliquem mercantilização da Odontologia (art. 9º, XIII). Ex.: outdoor com "clareamento a R$ 99,00 em 10x" ou "Dentista Popular".',
      fonte: CEO + ', arts. 9º, XIII e 44; foto: Norton & Peel, domínio público (Wikimedia Commons)',
      img: [W + 'thumb/7/75/Billboard_Advertising_Ohleen%27s_Milk_-_DPLA_-_be68738da6dc1d455462519f45ff1765.jpg/960px-Billboard_Advertising_Ohleen%27s_Milk_-_DPLA_-_be68738da6dc1d455462519f45ff1765.jpg'],
      legs: ['Outdoor de propaganda: na Odontologia, anunciar preço como chamariz é proibido.'], alts: ['Outdoor antigo de propaganda numa rua'] }
  };
  Object.keys(NOVOS).forEach(function (k) {
    var ja = Object.keys(B.glossario).some(function (x) { return x.toLowerCase() === k.toLowerCase(); });
    if (!ja) B.glossario[k] = NOVOS[k];
  });
})();
