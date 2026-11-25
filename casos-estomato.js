/* Banco de CASOS de Estomatologia (Rafael 25/11/2026: "para lesão/condição clínica, o carrossel vira um banco de casos").
   Acrescenta fotos reais de casos ao FIM do carrossel de cada termo (não apaga as imagens que já existem).
   Cada legenda começa com "Caso:" e explica o que se vê, onde, por que aconteceu e o que fazer.
   Imagens: Wikimedia Commons, só licença livre; o crédito de cada termo vai no fim do "fonte".
   Texto: descrição da página da imagem no Commons + Manual de Estomatologia SMS-SP 2017 e Neville (Patologia Oral e Maxilofacial). */
(function () {
  var B = window.BANCOS && window.BANCOS.estomato; if (!B || !B.glossario) return;
  var g = B.glossario;
  var C = 'https://upload.wikimedia.org/wikipedia/commons/';
  function add(k, casos, credito) {
    var v = g[k]; if (!v) return;
    if (typeof v === 'string') v = g[k] = { d: v };
    var velhas = [].concat(v.img || []), n = velhas.length;
    var legs = (v.legs || []).slice(0, n), alts = (v.alts || []).slice(0, n);
    while (legs.length < n) legs.push('');
    while (alts.length < n) alts.push('');
    casos.forEach(function (c) { velhas.push(c[0]); legs.push(c[1]); alts.push(c[2]); });
    v.img = velhas; v.legs = legs; v.alts = alts;
    if (credito) v.fonte = (v.fonte ? v.fonte + ' ' : '') + 'Casos: ' + credito + ' (Wikimedia Commons).';
  }
  var NIH = 'NIH/NIDCR, guia "Detecting Oral Cancer" (2013), domínio público';

  /* ---------- LEUCOPLASIA / ERITROPLASIA ---------- */
  add('leucoplasia', [
    [C + '2/2c/NIH_DOC_16_HomogenousLeukoplakia.jpg',
      'Caso: leucoplasia homogênea no assoalho da boca, logo atrás dos incisivos inferiores. É uma placa branca, lisa, de cor uniforme e borda bem marcada, que não sai na raspagem. O assoalho e a borda da língua são os lugares de maior risco de virar câncer, por isso mesmo uma placa "bonita" assim vai para biópsia.',
      'Placa branca lisa no assoalho da boca atrás dos dentes inferiores'],
    [C + '4/45/NIH_DOC_17_Leukoplakia.jpg',
      'Caso: leucoplasia na mucosa, placa branca com a superfície mais irregular e espessa. A leucoplasia é um diagnóstico de exclusão: primeiro se descarta o que tem causa conhecida (atrito, mordida, candidose, líquen); o que sobra e não sai na raspagem é leucoplasia e vai para biópsia incisional.',
      'Placa branca irregular na mucosa oral'],
    [C + '8/85/NIH_DOC_18_Nodularleukoplakia.jpg',
      'Caso: leucoplasia nodular (não homogênea), com pontos e nódulos brancos sobre um fundo avermelhado. A forma não homogênea tem risco bem maior de displasia e de câncer do que a homogênea. Conduta: biópsia da área mais vermelha ou mais endurecida e acompanhamento de perto.',
      'Placa com nódulos brancos sobre fundo avermelhado'],
    [C + 'thumb/c/c3/Leukoplakia.jpg/960px-Leukoplakia.jpg',
      'Caso: leucoplasia na gengiva e no fundo do vestíbulo inferior, com placas brancas. Segundo o Instituto Nacional do Câncer dos EUA, essas placas aparecem como resposta a uma irritação de longa duração. Pergunte sempre: fuma? bebe? prótese machucando? Tirar o fator irritante e fazer biópsia é a rotina.',
      'Placas brancas na gengiva e no vestíbulo inferior']
  ], NIH + '; National Cancer Institute, domínio público');

  add('eritroplasia', [
    [C + '8/80/NIH_DOC_19_Erythroleukoplakia.jpg',
      'Caso: eritroleucoplasia, mistura de áreas vermelhas e brancas na mesma lesão. A parte vermelha é a que mais preocupa: a eritroplasia é a lesão potencialmente maligna de maior risco, e muitas já mostram displasia grave ou carcinoma na biópsia. Conduta: biópsia incisional da área vermelha, sem esperar.',
      'Lesão com áreas vermelhas e placas brancas misturadas']
  ], NIH);

  /* ---------- LÍQUEN PLANO ---------- */
  var LP_FURST = [C + 'thumb/6/6b/Lichen_planus.jpg/960px-Lichen_planus.jpg',
    'Caso: líquen plano reticular na mucosa jugal (bochecha) esquerda. As linhas brancas finas formam uma rede, as estrias de Wickham. É a forma mais comum, aparece dos dois lados e quase nunca dói. Não precisa de tratamento: só acompanhamento, porque é uma lesão com pequeno risco de transformação.',
    'Bochecha por dentro com linhas brancas em rede'];
  var LP_WICK = [C + '4/48/Lichen_planusWickham%27s.jpg',
    'Caso: estrias de Wickham bem visíveis na mucosa jugal, perto dos molares. São linhas brancas que se cruzam como renda. Diferente da candidose, não saem quando se raspa com a gaze.',
    'Mucosa jugal com estrias brancas rendilhadas'];
  var LP_ERO = [C + 'thumb/7/72/Erosive_lichen_planus.jpg/960px-Erosive_lichen_planus.jpg',
    'Caso: líquen plano erosivo, com áreas vermelhas e feridas rasas entre as estrias brancas. Essa forma arde, principalmente com comida ácida ou apimentada. Trata-se com corticoide tópico nas fases de piora; a biópsia confirma e afasta outras doenças.',
    'Boca aberta mostrando mucosa com áreas vermelhas e brancas'];
  var LP_SYED = [C + 'thumb/a/af/Lichen_planus-intra_oral_lesion.jpg/960px-Lichen_planus-intra_oral_lesion.jpg',
    'Caso: líquen plano na mucosa jugal, com placas e estrias brancas perto da comissura e dos molares. O líquen é bilateral: quando aparece na bochecha de um lado, procure do outro. Lesão só de um lado e endurecida faz pensar em outra coisa e pede biópsia.',
    'Mucosa jugal com lesões brancas perto da comissura'];
  add('líquen plano oral', [LP_FURST, LP_WICK, LP_ERO, LP_SYED],
    'Ian Furst, CC BY-SA 4.0; James, Candice, Mai, CC BY-SA 3.0; Syed Wali Peeran, CC BY-SA 4.0');
  add('líquen plano', [LP_SYED,
    [C + 'thumb/4/47/PLoS_oral_cancer.png/960px-PLoS_oral_cancer.png',
      'Caso publicado: dorso da língua com três massas que, na biópsia, eram carcinomas, cercadas por uma área branca que era líquen plano. Mostra por que o líquen, principalmente o erosivo, fica em acompanhamento: há um pequeno risco de câncer na mesma região, e qualquer nódulo ou úlcera que não cura no meio dele vai para biópsia.',
      'Dorso da língua com três massas sobre área esbranquiçada']
  ], 'Syed Wali Peeran, CC BY-SA 4.0; Luca Pastore e cols. (PLoS Medicine), CC BY 2.5');

  /* ---------- CANDIDOSE ---------- */
  var CAND = [
    [C + 'thumb/2/26/CandidiasisFromCDCinJPEG03-18-06.JPG/960px-CandidiasisFromCDCinJPEG03-18-06.JPG',
      'Caso: candidose pseudomembranosa no palato de um paciente com HIV. As placas brancas, como leite coalhado, saem na raspagem e deixam a mucosa vermelha. A imunidade baixa deixa a Candida crescer. Segundo o CDC, este caso melhorou com fluconazol 100 mg por dia durante uma semana.',
      'Palato com várias placas brancas espalhadas'],
    [C + 'thumb/a/a0/Human_tongue_infected_with_oral_candidiasis.jpg/960px-Human_tongue_infected_with_oral_candidiasis.jpg',
      'Caso: "sapinho" na língua de uma criança que tinha tomado antibiótico. O antibiótico mata parte das bactérias da boca e abre espaço para o fungo. Conduta: antifúngico tópico (nistatina ou miconazol) e higiene; geralmente resolve em poucos dias.',
      'Língua coberta por camada branco-amarelada'],
    [C + '4/4f/Oral_pseudomembranous_candidiasis_on_the_dorsum_of_the_tongue_of_a_59-year-old_male_%28third_week_of_RT_for_a_squamous_cell_carcinoma_of_the_floor_of_the_mouth%2C_T3N0M0%2C_daily_dose_1.8_Gy%29.png',
      'Caso: candidose pseudomembranosa no dorso da língua de um homem de 59 anos, na 3ª semana de radioterapia para um câncer do assoalho da boca. A radiação diminui a saliva e machuca a mucosa, e a Candida aproveita. Paciente em radioterapia de cabeça e pescoço é examinado toda semana.',
      'Dorso da língua com placas brancas'],
    [C + 'thumb/c/c1/Oral_thrush_Aphthae_Candida_albicans._PHIL_1217_lores.jpg/960px-Oral_thrush_Aphthae_Candida_albicans._PHIL_1217_lores.jpg',
      'Caso: candidose oral extensa no palato e na mucosa, com placas brancas grossas sobre fundo vermelho. Quando é tão espalhada, procure a causa por trás: diabetes descontrolado, imunossupressão, corticoide inalatório sem bochecho, prótese que não sai da boca.',
      'Boca aberta com placas brancas grossas no palato']
  ];
  var CAND_CRED = 'Sol Silverman Jr./CDC, domínio público; James Heilman, MD, CC BY-SA 3.0; Ourania Nicolatou-Galitis e cols., CC0; CDC/PHIL, domínio público';
  add('candidose', CAND, CAND_CRED);
  add('candidíase', CAND, CAND_CRED);
  add('candidose pseudomembranosa', CAND, CAND_CRED);

  /* ---------- AFTA / UAR ---------- */
  var AF = [
    [C + 'thumb/4/45/Aphthous_ulcer.jpg/960px-Aphthous_ulcer.jpg',
      'Caso: afta na parte de dentro do lábio inferior: úlcera redonda, rasa, com fundo amarelado (fibrina) e halo vermelho. Lugar típico, porque a afta aparece em mucosa não queratinizada. Dói muito nos primeiros dias e cura sozinha em 7 a 14 dias; corticoide tópico alivia.',
      'Úlcera redonda amarelada com halo vermelho no lábio inferior'],
    [C + '8/86/Aphthous_ulcers_on_lip.jpg',
      'Caso: duas aftas menores, de uns 3 mm cada, no lábio inferior. É a forma menor da UAR, a mais comum (cerca de 80% dos casos). Volta de tempos em tempos, muitas vezes ligada a estresse, trauma pequeno ou ciclo menstrual.',
      'Duas pequenas úlceras no lado de dentro do lábio inferior'],
    [C + 'thumb/8/82/Aphte_langue_-_Aphthous_ulcer.jpg/960px-Aphte_langue_-_Aphthous_ulcer.jpg',
      'Caso: afta na ponta da língua, perto da borda, onde a mucosa de baixo (ventre) é fina e não queratinizada. Úlcera no dorso da língua ou na gengiva inserida (queratinizadas) faz pensar em outra coisa, como herpes recorrente ou trauma.',
      'Ponta da língua com pequena úlcera'],
    [C + '4/48/Aphthous_ulcer_in_the_back_of_the_mouth.jpg',
      'Caso: afta no palato mole, no fundo da boca. Segundo o autor, tinha uns 7 dias e ainda estava crescendo. Afta maior que 1 cm, que dura semanas e deixa cicatriz, é a forma maior da UAR; úlcera que passa de 2 semanas sem melhorar precisa de avaliação e, às vezes, biópsia.',
      'Palato mole com úlcera amarelada'],
    [C + '4/4a/Throat_Canker.png',
      'Caso: afta no céu da boca, na região do palato mole. Não começa com bolha (diferente do herpes): já aparece como úlcera. O diagnóstico é clínico, pela história de úlceras que vão e voltam.',
      'Palato com úlcera rasa amarelada']
  ];
  var AF_LAB = [C + 'thumb/d/d3/Aphthous_stomatitis_on_the_labial_mucosa.jpg/960px-Aphthous_stomatitis_on_the_labial_mucosa.jpg',
    'Caso: afta na mucosa do lábio inferior (marcada em vermelho). O paciente puxa o lábio para mostrar: a afta fica justamente onde a mucosa é solta e não queratinizada.',
    'Lábio inferior puxado mostrando úlcera marcada com círculo vermelho'];
  var AF_CRED = 'Genppy, CC BY-SA 3.0; Noorus, CC BY-SA 3.0; Grook Da Oger, CC BY-SA 3.0; Ryanfransen, domínio público; Elijah.wilhelm, CC0';
  add('afta', AF, AF_CRED);
  add('úlcera aftosa recorrente', [AF_LAB].concat(AF), AF_CRED + '; Farhan 9909, CC BY-SA 4.0');
  add('UAR', [AF_LAB].concat(AF), AF_CRED + '; Farhan 9909, CC BY-SA 4.0');

  /* ---------- HERPES ---------- */
  var HERP_COMP = [C + '9/96/Photographic_Comparison_of_a_Canker_Sore%2C_Herpes%2C_Angular_Cheilitis_and_Chapped_Lips..jpg',
    'Comparação de quatro casos que se confundem: (1) afta, (2) herpes labial, (3) queilite angular e (4) lábio rachado. O herpes fica no vermelhão do lábio e começa com bolhinhas agrupadas; a afta fica por dentro, na mucosa; a queilite fica no canto da boca.',
    'Quatro fotos comparando afta, herpes, queilite angular e lábio rachado'];
  add('herpes simples', [
    [C + 'b/b2/Herpes_labialis.jpg',
      'Caso: herpes labial no lábio inferior, um grupo de bolhinhas cheias de líquido. É o herpes recorrente: o vírus estava dormindo no gânglio do trigêmeo e acordou (sol, febre, estresse). O líquido das bolhas é muito contagioso; com lesão ativa, o ideal é adiar o tratamento eletivo. Aciclovir funciona melhor no começo, na fase de ardência.',
      'Lábio inferior com grupo de pequenas bolhas'],
    [C + '8/8d/Herpes_labialis_Ulcus.jpeg',
      'Caso: herpes labial já na fase de úlcera: as bolhinhas se romperam e ficaram abertas e úmidas, com crostas amareladas; embaixo à direita ainda há uma bolha fechada. Depois vem a crosta, e tudo cicatriza em 7 a 10 dias sem deixar marca.',
      'Lábio com bolhas rompidas e crostas, e uma bolha ainda fechada'],
    HERP_COMP
  ], 'Metju12, domínio público; Speifensender, CC BY-SA 3.0; Jeffrey Dorfman, CC BY-SA 3.0');

  add('úlcera', [
    HERP_COMP,
    [C + '8/8d/Herpes_labialis_Ulcus.jpeg',
      'Caso: úlceras que nasceram de bolhas, no herpes labial. Quando a úlcera começa como bolha, pense em doença viral ou bolhosa; quando já nasce como úlcera, pense em afta ou trauma.',
      'Lábio com bolhas rompidas e crostas'],
    [C + 'thumb/1/1a/Squamous_celled_carcinoma_of_the_tongue_Wellcome_L0061287.jpg/960px-Squamous_celled_carcinoma_of_the_tongue_Wellcome_L0061287.jpg',
      'Caso (pintura médica antiga): úlcera de um carcinoma espinocelular na língua de um homem de 52 anos. Segundo o registro, a língua nem saía da boca porque o tumor a prendia ao assoalho. Úlcera que não cicatriza em 2 semanas, com borda elevada e base dura, é câncer até a biópsia provar o contrário.',
      'Pintura de língua com úlcera fissurada de câncer']
  ], 'Jeffrey Dorfman, CC BY-SA 3.0; Speifensender, CC BY-SA 3.0; Thomas Godart, Wellcome Collection, CC BY 4.0');

  /* ---------- MUCOCELE ---------- */
  add('mucocele', [
    [C + '4/47/Mucocele_Treatment.jpg',
      'Caso: mucocele no lábio inferior e o tratamento em quatro fotos: a bolha azulada e mole, a incisão, a lesão já retirada junto com as glândulas salivares menores em volta, e o lábio cicatrizado. Tirar as glândulas vizinhas evita que volte; só furar e drenar não resolve.',
      'Quatro fotos: mucocele no lábio, cirurgia, peça retirada e lábio cicatrizado'],
    [C + 'b/bb/Surgical_removal_of_a_Mucocele..jpg',
      'Caso: remoção cirúrgica de uma mucocele do lábio inferior. O material vai para exame histopatológico, que confirma o muco extravasado e afasta outras lesões de glândula salivar.',
      'Cirurgia no lábio inferior para retirar mucocele'],
    [C + 'thumb/6/64/Mucocele_of_Lower_Lip_%2849425670122%29.jpg/960px-Mucocele_of_Lower_Lip_%2849425670122%29.jpg',
      'Caso: lâmina de microscópio de uma mucocele do lábio inferior de uma criança de 16 meses. No meio, uma grande bolsa de muco cercada por tecido de granulação, SEM epitélio forrando (por isso é um pseudocisto). É o que o patologista vê depois da biópsia excisional.',
      'Lâmina corada mostrando bolsa redonda de muco no lábio']
  ], 'DentalSchoolProfessor, CC BY-SA 3.0; Jeffrey Dorfman, CC BY-SA 3.0; Ed Uthman, CC BY 2.0');

  /* ---------- FIBROMA ---------- */
  add('fibroma', [
    [C + '9/9d/Irritation_Fibroma.png',
      'Caso: fibroma traumático (de irritação) na mucosa do lábio inferior. Nódulo liso, firme, da cor da mucosa, que cresce devagar onde o paciente vive mordendo. Não some sozinho: tira-se com biópsia excisional e se corrige o que machucava.',
      'Mucosa do lábio com nódulo liso da cor da mucosa'],
    [C + 'thumb/2/25/Histopathology_of_irritation_fibroma.jpg/960px-Histopathology_of_irritation_fibroma.jpg',
      'Caso: o mesmo tipo de lesão ao microscópio. Um nódulo sem cápsula coberto por epitélio, com o miolo de tecido conjuntivo denso, cheio de fibras de colágeno e poucos vasos. Isso explica por que o fibroma é firme e mais claro que a mucosa em volta.',
      'Lâmina corada com nódulo de tecido fibroso coberto por epitélio']
  ], 'Dentist24, CC0; Mikael Häggström, CC0');

  /* ---------- GRANULOMA PIOGÊNICO ---------- */
  add('granuloma piogênico', [
    [C + '0/00/Pyogenic_granuloma_03.jpg',
      'Caso publicado: granuloma piogênico fora da gengiva, no palato. Lesão que cresce para fora, presa por uma base estreita (pediculada) e com uma película esbranquiçada na superfície. Vermelho, mole e sangra fácil: é tecido de granulação que exagerou diante de uma irritação.',
      'Palato com lesão nodular avermelhada coberta por película'],
    [C + '5/50/Pyogenic_granuloma_04.jpg',
      'Caso: a mesma lesão levantada com um instrumento, mostrando a base estreita e o sangramento fácil. Tratamento: remoção cirúrgica com exame histopatológico e retirada do fator irritante; sem isso, volta.',
      'Lesão do palato levantada com instrumento, com sangramento']
  ], 'Maryam Amirchaghmaghi e cols., CC BY-SA 2.0');

  /* ---------- CARCINOMA ESPINOCELULAR ---------- */
  var CEC = [
    [C + 'thumb/1/1a/Squamous_celled_carcinoma_of_the_tongue_Wellcome_L0061287.jpg/960px-Squamous_celled_carcinoma_of_the_tongue_Wellcome_L0061287.jpg',
      'Caso (pintura médica antiga): carcinoma espinocelular fissurado na língua de um homem de 52 anos. Segundo o registro, a língua não conseguia sair da boca porque o tumor a prendia ao assoalho. Língua presa, úlcera dura e dor ao engolir são sinais de doença avançada.',
      'Pintura de língua com úlcera fissurada de câncer'],
    [C + 'thumb/a/aa/Squamous_celled_carcinoma_of_the_tongue_Wellcome_L0061285.jpg/960px-Squamous_celled_carcinoma_of_the_tongue_Wellcome_L0061285.jpg',
      'Caso (pintura médica antiga): carcinoma espinocelular vegetante na parte da frente da língua de um homem. Além da úlcera, o CEC pode crescer para fora como uma massa irregular, que sangra e tem base endurecida.',
      'Pintura de língua com massa irregular na ponta'],
    [C + 'thumb/4/47/PLoS_oral_cancer.png/960px-PLoS_oral_cancer.png',
      'Caso publicado: três massas no dorso da língua que, na biópsia, eram carcinomas; em volta, área branca de líquen plano. Lição: lesão branca antiga que muda (fica nodular, vermelha ou ulcera) vai para biópsia na hora.',
      'Dorso da língua com três massas sobre área esbranquiçada'],
    [C + '3/37/SquamousCellCarcinomaTongueCT.png',
      'Caso: tomografia de um carcinoma espinocelular grande da língua. A tomografia mostra até onde o tumor entrou e se há linfonodos do pescoço aumentados. É exame de estadiamento, depois da biópsia; o diagnóstico continua sendo o histopatológico.',
      'Tomografia mostrando massa grande na língua'],
    [C + 'thumb/e/ee/Oral_Carcinoma_Cuniculatum.jpg/960px-Oral_Carcinoma_Cuniculatum.jpg',
      'Caso: lâmina de carcinoma cuniculatum, uma variante rara do carcinoma espinocelular na boca, de crescimento lento. Ao microscópio aparecem criptas ramificadas cheias de queratina, como tocas de coelho (cuniculus = toca). As "pérolas de queratina" rosadas lembram que o CEC nasce do epitélio que faz queratina.',
      'Lâmina corada com criptas cheias de queratina']
  ];
  var CEC_CRED = 'Thomas Godart, Wellcome Collection, CC BY 4.0; Luca Pastore e cols. (PLoS Medicine), CC BY 2.5; James Heilman, MD, CC BY-SA 4.0; Mandana Donoghue, CC BY-SA 4.0';
  add('carcinoma espinocelular', CEC, CEC_CRED);
  add('CEC', CEC, CEC_CRED);
  var CEC_CRED4 = 'Thomas Godart, Wellcome Collection, CC BY 4.0; Luca Pastore e cols. (PLoS Medicine), CC BY 2.5; James Heilman, MD, CC BY-SA 4.0';
  add('carcinoma epidermoide', CEC.slice(0, 4), CEC_CRED4);
  add('câncer de boca', CEC.slice(0, 4), CEC_CRED4);
})();
