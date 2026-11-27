/* TREINO PARA A AVS DE BASES MORFOLÓGICAS (AVS a partir de 30/11/2026).
   2 questões PARALELAS para cada questão da AV de 23/11 (versão D): mesmo tema e mesmo jeito de perguntar,
   outro caso, outra pergunta e outras alternativas (nunca cópia). Só pergunta direta, caso clínico e afirmativas.
   Sem asserção-razão. Só SOMA ao banco. Montado pela Mônica em 27/11/2026 (caderno #1030). */
(function () {
  var B = window.BANCOS && window.BANCOS.bases; if (!B || B._avsBases) return; B._avsBases = true;
  var TEMA = 'Treino AVS de Bases (paralelas à AV)';
  function fonte(t) { return 'Questão paralela à AV de Bases de 23/11 (versão D), tema ' + t + '; conteúdo de Embriologia, Histologia e Anatomia de cabeça e pescoço (Katchburian e Arana; Madeira, Anatomia da Face).'; }
  var Q = [
  /* AV 1: origem embrionária */
  { id: 'bavs01', f: fonte('origem embrionária dos tecidos dentários'),
    ctx: 'Na aula de odontogênese, o professor pede que a turma diga de qual folheto ou tecido embrionário vem cada parte do dente.',
    p: 'Qual estrutura do dente deriva do ectoderma?',
    o: ['A dentina, formada pelos odontoblastos.', 'A polpa, formada pela papila dentária.', 'O esmalte, formado pelos ameloblastos do órgão do esmalte.', 'O cemento, formado pelos cementoblastos do folículo dentário.', 'O ligamento periodontal, formado pelo folículo dentário.'],
    a: 2, w: 'Esmalte é o único tecido do dente que vem do ectoderma (epitélio oral que forma o órgão do esmalte). Dentina, polpa, cemento e ligamento periodontal vêm do ectomesênquima, que tem origem na crista neural.' },
  { id: 'bavs02', f: fonte('folhetos embrionários e crista neural'),
    ctx: 'Um aluno monta uma tabela de origem embrionária para estudar a região da cabeça e do pescoço.',
    af: ['As células da crista neural migram para a face e os arcos faríngeos e formam o ectomesênquima.',
         'Os músculos da mastigação derivam do mesoderma do primeiro arco faríngeo.',
         'A dentina deriva do ectoderma oral, o mesmo epitélio que forma o órgão do esmalte.',
         'O epitélio da tireoide deriva do endoderma.'],
    p: 'É correto o que se afirma em',
    o: ['I e III, apenas.', 'I, II e IV, apenas.', 'II e III, apenas.', 'II, III e IV, apenas.', 'I, II, III e IV.'],
    a: 1, w: 'I, II e IV certas. A III é falsa: a dentina vem do ectomesênquima (papila dentária), e só o esmalte vem do ectoderma oral.' },

  /* AV 2: músculos da mastigação */
  { id: 'bavs03', f: fonte('músculos da mastigação e movimentos da mandíbula'),
    ctx: 'Paciente com dor e limitação quando tenta levar a mandíbula para a frente (protrusão), sem dor ao fechar a boca.',
    p: 'Qual músculo é o principal responsável pela protrusão da mandíbula quando contrai dos dois lados ao mesmo tempo?',
    o: ['Temporal, pelas fibras posteriores.', 'Masseter, pelo feixe profundo.', 'Ventre anterior do digástrico.', 'Pterigóideo lateral.', 'Bucinador.'],
    a: 3, w: 'Os dois pterigóideos laterais juntos puxam os côndilos para a frente = protrusão. As fibras posteriores do temporal fazem o contrário (retrusão). O masseter eleva, o digástrico ajuda a abrir e o bucinador é músculo da mímica.' },
  { id: 'bavs04', f: fonte('músculos da mastigação'),
    ctx: 'Na aula prática de anatomia, a turma revisa origem, inserção e função dos músculos da mastigação.',
    af: ['As fibras posteriores do temporal retraem a mandíbula.',
         'O masseter se insere no processo coronoide da mandíbula.',
         'O pterigóideo medial ajuda a elevar a mandíbula.',
         'Para levar a mandíbula para a direita, contrai o pterigóideo lateral esquerdo.'],
    p: 'É correto o que se afirma em',
    o: ['I, III e IV, apenas.', 'I e II, apenas.', 'II e IV, apenas.', 'II, III e IV, apenas.', 'I, II, III e IV.'],
    a: 0, w: 'I, III e IV certas. A II é falsa: quem se insere no processo coronoide é o temporal; o masseter se insere na face lateral do ramo e no ângulo.' },

  /* AV 3: nervo facial e mímica */
  { id: 'bavs05', f: fonte('nervo facial e músculos da mímica'),
    ctx: 'Depois de uma cirurgia para retirar um tumor da parótida, o paciente não consegue sorrir nem fechar o olho do lado operado. A sensibilidade da pele da face está normal.',
    p: 'Qual nervo provavelmente foi lesado?',
    o: ['O nervo mandibular (V3), que inerva os músculos da mastigação.', 'O nervo hipoglosso, que passa por dentro da parótida.', 'O nervo maxilar (V2), responsável pela mímica do terço médio da face.', 'O nervo glossofaríngeo, que inerva o orbicular do olho.', 'O nervo facial, que atravessa a parótida e inerva os músculos da mímica.'],
    a: 4, w: 'O facial (VII) passa dentro da parótida, onde se divide nos ramos da mímica. Por isso a cirurgia da parótida pode lesá-lo. A sensibilidade da face é do trigêmeo, por isso ficou normal.' },
  { id: 'bavs06', f: fonte('músculos da mímica e inervação'),
    ctx: 'Um aluno estuda a paralisia facial periférica e revisa os músculos da mímica.',
    af: ['Os músculos da mímica derivam do segundo arco faríngeo e são inervados pelo nervo facial.',
         'O orbicular da boca é inervado pelo nervo trigêmeo.',
         'Na paralisia facial periférica a sensibilidade da face fica preservada, porque ela depende do trigêmeo.',
         'Os músculos da mímica se inserem na pele.',
         'O bucinador é um músculo da mastigação inervado pelo nervo mandibular.'],
    p: 'É correto apenas o que se afirma em',
    o: ['I e II.', 'II, III e V.', 'I, III e IV.', 'III, IV e V.', 'I, II, IV e V.'],
    a: 2, w: 'I, III e IV certas. A II é falsa: o orbicular da boca é da mímica, inervado pelo facial. A V é falsa: o bucinador é músculo da mímica, também inervado pelo facial (o nervo bucal do V3 só dá sensibilidade à bochecha).' },

  /* AV 4: glândulas salivares */
  { id: 'bavs07', f: fonte('glândula parótida'),
    ctx: 'Na palpação intraoral, o professor mostra à turma onde sai a saliva da parótida quando se massageia a glândula.',
    p: 'Onde se abre o ducto da parótida (ducto de Stensen)?',
    o: ['Na carúncula sublingual, ao lado do freio da língua.', 'Na papila parotídea, na mucosa jugal, na altura do segundo molar superior.', 'No assoalho bucal, na altura dos pré-molares inferiores.', 'No palato duro, atrás dos incisivos centrais.', 'No vestíbulo inferior, na altura dos incisivos.'],
    a: 1, w: 'O Stensen atravessa o bucinador e abre na papila parotídea, perto do 2º molar superior. Na carúncula sublingual abre o ducto da submandibular (Wharton).' },
  { id: 'bavs08', f: fonte('glândulas salivares maiores'),
    ctx: 'A turma compara as três glândulas salivares maiores.',
    af: ['A parótida tem secreção serosa.',
         'A sublingual tem secreção mista, com predomínio mucoso.',
         'A submandibular produz a maior parte da saliva em repouso.',
         'O ducto de Wharton se abre na papila parotídea.'],
    p: 'É correto o que se afirma em',
    o: ['I e IV, apenas.', 'II e IV, apenas.', 'I, II e IV, apenas.', 'I, II e III, apenas.', 'I, II, III e IV.'],
    a: 3, w: 'I, II e III certas. A IV é falsa: o Wharton (submandibular) se abre na carúncula sublingual; na papila parotídea abre o Stensen.' },

  /* AV 5: radiografia do periodonto */
  { id: 'bavs09', f: fonte('imagem radiográfica do periodonto'),
    ctx: 'Numa radiografia periapical de um pré-molar sadio, aparece uma faixa escura (radiolúcida) fina e contínua entre a raiz e a linha branca do alvéolo.',
    p: 'Essa faixa radiolúcida corresponde',
    o: ['ao espaço do ligamento periodontal.', 'à lâmina dura.', 'ao cemento acelular.', 'ao canal radicular.', 'à crista óssea alveolar.'],
    a: 0, w: 'A faixa escura entre a raiz e a lâmina dura é o espaço do ligamento periodontal, que é tecido mole e por isso aparece radiolúcido. A linha branca é a lâmina dura.' },
  { id: 'bavs10', f: fonte('lâmina dura na radiografia'),
    ctx: 'Na radiografia de um incisivo com necrose pulpar, a linha branca que contorna o ápice da raiz aparece interrompida e há uma área escura em volta do ápice.',
    p: 'O que esse achado sugere?',
    o: ['Achado normal, pois a lâmina dura nunca aparece no ápice.', 'Excesso de formação de cemento no ápice.', 'Perda da continuidade da lâmina dura no ápice, compatível com lesão periapical.', 'Aumento da mineralização do osso alveolar em resposta à necrose.', 'Erro de técnica, sem relação com o dente.'],
    a: 2, w: 'A lâmina dura contínua é sinal de normalidade. Quando ela some no ápice e aparece uma área radiolúcida em volta, a imagem é compatível com lesão periapical, como a que vem da necrose pulpar.' },

  /* AV 6: dentina e polpa */
  { id: 'bavs11', f: fonte('tipos de dentina'),
    ctx: 'Paciente de 70 anos faz radiografias de rotina. Todos os dentes têm câmara pulpar e canais bem menores do que os de um jovem, de forma regular e sem cárie nem desgaste.',
    p: 'Qual dentina explica essa redução por igual em todos os dentes?',
    o: ['Dentina terciária reacional, formada em resposta à cárie.', 'Dentina secundária, formada de forma lenta e regular ao longo da vida, depois que a raiz se completa.', 'Dentina do manto, a primeira a se formar na coroa.', 'Dentina terciária reparadora, formada por células novas após morte dos odontoblastos.', 'Esmalte aprismático depositado dentro da câmara.'],
    a: 1, w: 'Redução regular, em todos os dentes e com a idade = dentina secundária (fisiológica). A terciária aparece só onde há agressão, como embaixo de uma cárie, e tem forma irregular.' },
  { id: 'bavs12', f: fonte('dentina, polpa e sensibilidade'),
    ctx: 'A turma revisa a histologia da dentina e da polpa antes da prova.',
    af: ['O esmalte é o tecido mais mineralizado do corpo.',
         'Pela teoria hidrodinâmica, o estímulo move o fluido nos túbulos dentinários e ativa as fibras nervosas da polpa.',
         'A dentina terciária se forma em resposta a um estímulo, como a cárie.',
         'Os corpos dos odontoblastos ficam na superfície externa do esmalte.',
         'A polpa fica numa câmara elástica, que se expande quando há edema.'],
    p: 'É correto apenas o que se afirma em',
    o: ['I e IV.', 'II, III e V.', 'III, IV e V.', 'I, II e V.', 'I, II e III.'],
    a: 4, w: 'I, II e III certas. A IV é falsa: os corpos dos odontoblastos ficam na periferia da polpa, e os prolongamentos entram nos túbulos da dentina. A V é falsa: a câmara pulpar é rígida, por isso o edema da pulpite comprime e dói muito.' },

  /* AV 7: odontogênese e anomalias */
  { id: 'bavs13', f: fonte('fases da odontogênese e anomalias'),
    ctx: 'Criança de 10 anos não tem o incisivo lateral superior direito. A radiografia mostra que o germe desse dente nunca se formou.',
    p: 'Em que fase da odontogênese uma falha costuma causar esse tipo de anomalia de número?',
    o: ['Na fase de botão (iniciação), quando o germe começa a se formar.', 'Na fase de campânula, durante a mineralização da coroa.', 'Na erupção, quando o dente atravessa a gengiva.', 'Na formação da raiz, depois que a coroa está pronta.', 'Na maturação do esmalte, depois da erupção.'],
    a: 0, w: 'Falta ou excesso de dente (anomalia de número) vem de alteração na iniciação, na fase de botão. Alterações de forma e de mineralização aparecem mais tarde, na campânula e na formação da coroa.' },
  { id: 'bavs14', f: fonte('anomalias de forma e de estrutura'),
    ctx: 'O professor mostra fotos de manchas e de alterações de forma nos dentes e pede que a turma relacione cada uma à causa.',
    af: ['A fluorose vem do excesso de flúor ingerido durante a formação do esmalte.',
         'A mancha de tetraciclina é extrínseca e sai com profilaxia.',
         'Os incisivos de Hutchinson são uma alteração de forma ligada à sífilis congênita.',
         'A amelogênese imperfeita é causada pelo uso de antibiótico na infância.'],
    p: 'É correto o que se afirma em',
    o: ['I e II, apenas.', 'I e III, apenas.', 'II e IV, apenas.', 'I, III e IV, apenas.', 'I, II, III e IV.'],
    a: 1, w: 'I e III certas. A II é falsa: a tetraciclina se incorpora ao dente na mineralização, então a mancha é intrínseca e não sai com profilaxia. A IV é falsa: a amelogênese imperfeita é genética (hereditária), não vem de remédio.' },

  /* AV 8: drenagem venosa e linfática */
  { id: 'bavs15', f: fonte('drenagem linfática da boca'),
    ctx: 'Paciente com abscesso no primeiro molar inferior direito aparece com um linfonodo aumentado e doloroso.',
    p: 'Qual grupo de linfonodos recebe primeiro a drenagem desse dente?',
    o: ['Submentuais.', 'Parotídeos.', 'Occipitais.', 'Submandibulares.', 'Retroauriculares.'],
    a: 3, w: 'Os molares e pré-molares inferiores drenam para os submandibulares. Os submentuais recebem os incisivos inferiores e a ponta da língua.' },
  { id: 'bavs16', f: fonte('veias da face e linfonodos'),
    ctx: 'Na aula sobre o triângulo de perigo da face, a turma discute por que uma infecção na face pode chegar ao crânio.',
    af: ['As veias facial e angular não têm válvulas, então o sangue pode correr nos dois sentidos.',
         'A veia oftálmica superior liga a região da face ao seio cavernoso.',
         'Um linfonodo de infecção aguda costuma ser duro, fixo e indolor.',
         'A artéria facial é ramo da carótida interna.'],
    p: 'É correto o que se afirma em',
    o: ['I e II, apenas.', 'I e III, apenas.', 'II e IV, apenas.', 'I, II e III, apenas.', 'I, II, III e IV.'],
    a: 0, w: 'I e II certas. A III é falsa: linfonodo de infecção aguda costuma ser móvel e doloroso; duro, fixo e indolor faz pensar em neoplasia. A IV é falsa: a artéria facial é ramo da carótida externa.' },

  /* AV 9: nervos e anestesia */
  { id: 'bavs17', f: fonte('inervação do palato'),
    ctx: 'Antes de uma exodontia do segundo molar superior, o aluno precisa anestesiar a mucosa palatina dessa região.',
    p: 'Qual nervo deve ser bloqueado e por onde ele chega ao palato?',
    o: ['O nasopalatino, pelo forame incisivo.', 'O alveolar superior anterior, pelo forame infraorbital.', 'O palatino maior, pelo forame palatino maior, na altura dos molares.', 'O lingual, pelo forame mandibular.', 'O bucal, pelo forame mentual.'],
    a: 2, w: 'O palato posterior é inervado pelo palatino maior, que sai pelo forame palatino maior, perto do 2º e do 3º molar. O nasopalatino (forame incisivo) cuida do palato anterior, atrás dos incisivos.' },
  { id: 'bavs18', f: fonte('nervos da anestesia em odontologia'),
    ctx: 'A turma revisa os nervos envolvidos nas técnicas de anestesia mais usadas.',
    af: ['O alveolar superior posterior, ramo do maxilar (V2), inerva a polpa dos molares superiores.',
         'O nasopalatino sai pelo forame incisivo e dá sensibilidade ao palato anterior.',
         'O nervo bucal dá sensibilidade à gengiva lingual dos molares inferiores.',
         'O nervo lingual, que costuma ser anestesiado na técnica pterigomandibular, dá sensibilidade aos dois terços anteriores da língua.'],
    p: 'É correto o que se afirma em',
    o: ['I e III, apenas.', 'II e III, apenas.', 'III e IV, apenas.', 'I, II e IV, apenas.', 'I, II, III e IV.'],
    a: 3, w: 'I, II e IV certas. A III é falsa: o bucal inerva a gengiva VESTIBULAR dos molares inferiores e a mucosa da bochecha; a gengiva lingual é do nervo lingual.' }
  ];
  Q.forEach(function (q) { q.tema = TEMA; q.fixa = true; B.q.push(q); });
  var ms = B.modos || (B.modos = []);
  if (ms.some(function (m) { return m.id === 'b-avs'; })) return;
  var modo = { id: 'b-avs', nome: 'Treino para a AVS (questões paralelas à AV)',
    sub: Q.length + ' questões paralelas às da AV de 23/11, com resposta comentada. Vêm todas de uma vez.',
    lista: Q, todas: true, destaque: true,
    apresenta: { titulo: 'O que é este treino?',
      texto: 'São ' + Q.length + ' questões parecidas com as da AV de Bases de 23/11 (versão D): para cada questão da prova, duas questões paralelas, com o mesmo tema e o mesmo jeito de perguntar (pergunta direta, caso clínico ou afirmativas I, II, III), mas com outro caso e outras alternativas. Não é cópia da prova. É para quem vai fazer a AVS treinar o raciocínio que a prova cobra. Cada uma vem com a resposta explicada.' } };
  var i = -1; ms.forEach(function (m, k) { if (m.id === 'b-av1123') i = k; });
  ms.splice(i >= 0 ? i + 1 : Math.min(1, ms.length), 0, modo);
})();
