/* Estomatologia: termos novos usados nos porquês (25/11/2026). Carregar DEPOIS de glossario-estomato.js e glossario-estomato-extra.js.
   Texto: Neville et al., Patologia Oral e Maxilofacial; Katchburian & Arana, Histologia e Embriologia Oral.
   Imagens: Wikimedia Commons por link direto (licença livre; crédito no fonte). */
(function () {
  var B = window.BANCOS && window.BANCOS.estomato; if (!B) return;
  var g = B.glossario = B.glossario || {};
  var NEV = 'Neville et al., Patologia Oral e Maxilofacial';
  var KAT = 'Katchburian & Arana, Histologia e Embriologia Oral';
  var novos = {
    'melanina': { d: 'Pigmento escuro (marrom a preto) fabricado pelos melanócitos e passado para as células vizinhas do epitélio. Dá cor à pele e à mucosa e protege contra a radiação do sol. Mais melanina = mancha marrom (pigmentação fisiológica, mácula melanótica, melanose do fumante). Ex.: gengiva com faixa marrom em pessoa de pele morena é só mais melanina, normal.',
      fonte: NEV + '; ' + KAT + '. Imagem: CamrynKnights, CC BY 4.0',
      img: ['https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Melanin_Development_in_Melanocytes.svg/960px-Melanin_Development_in_Melanocytes.svg.png'],
      legs: ['Esquema: o melanócito fabrica a melanina e a entrega às células do epitélio.'], alts: ['Esquema da produção de melanina no melanócito'] },
    'melanócito': { d: 'Célula da camada basal do epitélio que fabrica a melanina, com "braços" (dendritos) que levam o pigmento às células vizinhas. Mais melanina com melanócitos normais = mancha benigna; melanócitos que se acumulam = nevo; melanócitos que se multiplicam sem controle = melanoma. Ex.: na melanose do fumante, os melanócitos só produzem mais pigmento.',
      fonte: NEV + '; ' + KAT + '. Imagens: OpenStax College, CC BY 3.0; BruceBlaus (Blausen Medical), CC BY 3.0',
      img: ['https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/504_Melanocytes.jpg/960px-504_Melanocytes.jpg', 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Blausen_0632_Melanocyte.png/960px-Blausen_0632_Melanocyte.png'],
      legs: ['Melanócitos na camada basal, espalhando a melanina pelas células de cima.', 'Desenho de um melanócito com seus dendritos.'], alts: ['Esquema de melanócitos na epiderme', 'Desenho de um melanócito'] },
    'queratina': { d: 'Proteína dura e resistente que forma a camada mais de fora do epitélio queratinizado (gengiva inserida, palato duro, dorso da língua) e protege contra o atrito. Quando o epitélio é irritado (atrito, fumo, sol), produz mais queratina e fica branco: é o branco da linha alba, da queratose friccional e da leucoplasia. Ex.: o "calo" branco na bochecha onde o grampo da prótese esfrega.',
      fonte: NEV + '; ' + KAT + '. Imagem: Bin Manie M e cols., CC BY 4.0',
      img: ['https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Histopathology_of_epidermoid_cyst.jpg/960px-Histopathology_of_epidermoid_cyst.jpg'],
      legs: ['Ao microscópio: lâminas de queratina (rosa, em camadas) produzidas por um epitélio.'], alts: ['Lâmina histológica com camadas de queratina'] },
    'papilas filiformes': { d: 'As papilas mais numerosas do dorso da língua: pequenas projeções em forma de fio, com ponta de queratina, que dão a textura áspera e "aveludada" da língua e não têm botões gustativos. Somem nas áreas vermelhas da língua geográfica e da anemia; ficam compridas como pelos na língua pilosa. Ex.: língua lisa e vermelha de quem tem falta de vitamina B12 perdeu as papilas filiformes.',
      fonte: KAT + '; ' + NEV + '. Imagens: Jonathan Whyatt, CC BY-SA 3.0; Vamsi kumar Pabolu, CC BY-SA 4.0',
      img: ['https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Filiform_papillae.jpg/500px-Filiform_papillae.jpg', 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Fungiform_papillae_and_Filiform_papillae.jpg/960px-Fungiform_papillae_and_Filiform_papillae.jpg'],
      legs: ['Papilas filiformes no dorso da língua, de perto.', 'Papilas filiformes (pequenas, claras) e fungiformes (redondas, mais vermelhas).'], alts: ['Close das papilas filiformes da língua', 'Papilas filiformes e fungiformes'] }
  };
  Object.keys(novos).forEach(function (k) {
    var ja = Object.keys(g).some(function (x) { return x.toLowerCase() === k.toLowerCase(); });
    if (!ja) g[k] = novos[k];
  });
})();
