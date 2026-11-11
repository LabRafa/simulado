/* AULAS: transcrições de aula por matéria (RASCUNHO para o Rafael aprovar, 11/11/2026).
   Uma entrada por aula. Campos:
   - data, titulo, palestrante, gravacao
   - resumoTexto: parágrafos (o que aconteceu na aula, em ordem)
   - resumoTopicos: [{t:'título', i:['item', {img, cap, cr}, ...]}]  (**negrito** vira <b>; objeto com img = figura no meio dos itens)
   - resumoTextoImg: {índice do parágrafo: [{img, cap, cr}]}  (figuras depois daquele parágrafo)
   - transcricao: [{t:'título da parte', p:['parágrafo', ...]}]  (fala da professora, limpa)
   - tirado: o que foi tirado da transcrição automática, pra conferir
   Fonte da Imaginologia: transcrição automática que a Isadora mandou (10/11/2026),
   conferida com as fotos dos slides (PDF da Isadora e fotos do Jonas). */
window.AULAS = window.AULAS || {};

window.AULAS.imagino = [{
  id: 'imagino-2026-11-10',
  data: '10/11/2026',
  titulo: 'Imaginologia aplicada à patologia',
  palestrante: 'Profa. Mariana (IMA Radiologia)',
  gravacao: 'Isadora',
  creditos: 'Palestra da Profa. Mariana, da IMA Radiologia, na aula do prof. Sebastião. A gravação e a transcrição são da Isadora, que gravou a aula e mandou pra turma. Valeu, Isadora! Sem você essa página não existia.',
  aviso: 'A transcrição automática veio muito embolada. Aqui está a fala da professora com os termos corrigidos (radiolúcido, corticalizada, periápice...) e sem a conversa paralela. O que não deu pra entender com segurança está marcado com [?]. A gravação termina no meio da explicação do odontoma.',

  resumoTexto: [
    'A Profa. Mariana, da IMA Radiologia, veio à aula do prof. Sebastião falar de imaginologia aplicada à patologia, um assunto que ela disse que a turma vai rever a graduação inteira e depois na vida profissional. A ideia era treinar um olhar mais apurado para as imagens.',
    'Ela começou com um exercício: mostrou algumas imagens e pediu que a turma descrevesse o aspecto de cada uma. Saíram palavras como uniforme, escura, nítida, bem delimitada, radiopaca, difusa e desfocada, que voltaram ao longo da aula.',
    'Depois apresentou o diagnóstico como um quebra-cabeça de três peças: a clínica (anamnese, exame, testes), a imagem e o histopatológico (biópsia). Nenhuma peça fecha o diagnóstico sozinha, e a aula foi sobre a peça do meio, a imagem.',
    'Revisou o básico do raio X: o que é denso barra o feixe e fica claro (radiopaco), o que é pouco denso deixa passar e fica escuro (radiolúcido), com vários tons de cinza no meio. Insistiu em conhecer a anatomia normal e mostrou o erro clássico de confundir o forame mentual com uma lesão periapical. A saída é repetir a radiografia mudando a angulação horizontal: se a imagem sai do ápice, é o forame. O teste de vitalidade ajuda a confirmar. Mostrou as estruturas da panorâmica e os três exames mais usados (periapical, panorâmica e tomografia), lembrando dos achados incidentais da panorâmica de triagem.',
    'O centro da aula foram as quatro perguntas para descrever uma lesão: onde está, se é clara ou escura, como é a borda e o que ela faz com os vizinhos. Para cada pergunta ela deu exemplos: os cistos pela localização, a borda corticalizada x bem definida x difusa, uni x multilocular, e deslocamento, reabsorção, abaulamento e rompimento da cortical. Apresentou também as analogias da literatura (bolhas de sabão, raquete de tênis, dentículos, raios de sol, roído de traça), lembrando que nenhuma é patognomônica.',
    'Mostrou um caso de lesão grave na mucosa com panorâmica normal, para mostrar que imagem normal não quer dizer que não há nada, e resolveu desafios com a turma usando as quatro perguntas: uma lesão no ápice de um dente com cárie, uma lesão multilocular entre dentes e uma panorâmica com várias áreas marcadas.',
    'Na parte final, falou que o paciente também conta (idade, sexo, etnia), da frase "quando ouvir cascos, pense em cavalos, não em zebras", de que nenhuma lesão nasce grande e de que a hipótese diagnóstica define a conduta: acompanhar, tratar a causa ou operar. A mensagem que ela mais repetiu foi "na dúvida, biópsia". Fechou com fichas de lesões: lesão periapical inflamatória, cisto dentígero, ameloblastoma e odontoma, e a gravação para aí. Os slides seguintes (displasia cemento-óssea, radiopacidades no ápice e o "Para levar") só existem nas fotos.',
    'Para levar: radiopaco é claro e radiolúcido é escuro. Nem todo escuro é lesão, então é preciso conhecer o normal. As quatro perguntas mostram o comportamento da lesão. E o diagnóstico se fecha com imagem e histopatologia juntas.'
  ],

  resumoTextoImg: {
    2: [
      { img: 'img/aulas/imagino/s04-quebra-cabeca.jpg', cap: 'Slide da palestra: diagnóstico é um quebra-cabeça', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Jonas' }
    ],
    3: [
      { img: 'img/aulas/imagino/s13-panoramica-esquema.jpg', cap: 'Slide da palestra: estruturas radiolúcidas e radiopacas da panorâmica', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Jonas' },
      { img: 'img/aulas/imagino/s15-tres-exames.jpg', cap: 'Slide da palestra: os três exames', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Jonas' }
    ],
    4: [
      { img: 'img/aulas/imagino/s21-borda.jpg', cap: 'Slide da palestra: como é a borda?', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Isadora' },
      { img: 'img/aulas/imagino/s24-vizinhos.jpg', cap: 'Slide da palestra: o que a lesão faz com os vizinhos', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Isadora' }
    ],
    5: [
      { img: 'img/aulas/imagino/s29-nem-toda-lesao.jpg', cap: 'Slide da palestra: lesão na mucosa com panorâmica normal', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Isadora' },
      { img: 'img/aulas/imagino/desafio1-4-perguntas.jpg', cap: 'Desafio 1: lesão no ápice de um dente com cárie', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Isadora' },
      { img: 'img/aulas/imagino/desafio2.jpg', cap: 'Desafio 2: lesão multilocular, de bordas corticalizadas, afastando os dentes', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Isadora' },
      { img: 'img/aulas/imagino/desafio-extra.jpg', cap: 'Desafio extra: panorâmica com áreas marcadas de a a f (fonte do slide: Lopes, Handem, Capelozza, 2016)', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Isadora' }
    ],
    6: [
      { img: 'img/aulas/imagino/s37-conduta.jpg', cap: 'Slide da palestra: a hipótese diagnóstica define a conduta', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Isadora' },
      { img: 'img/aulas/imagino/s44-displasia.jpg', cap: 'Slide mostrado depois do fim da gravação: displasia cemento-óssea periapical nas 3 fases', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Jonas' }
    ]
  },

  resumoTopicos: [
    { t: 'Diagnóstico = quebra-cabeça', i: [
      '**Clínica:** anamnese, exame clínico (volume, cor), testes (vitalidade, mobilidade)',
      '**Imagem:** características da lesão e efeito nos vizinhos (dentes, osso, canal mandibular, nervo alveolar inferior)',
      '**Histopatológico:** biópsia; o patologista também precisa da imagem',
      'Nenhuma peça fecha sozinha; a aula foi sobre a **imagem**',
      { img: 'img/aulas/imagino/s04-quebra-cabeca.jpg', cap: 'Slide da palestra: clínica + imagem + biópsia = diagnóstico. "Hoje: a peça do meio."', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Jonas' }
    ]},
    { t: 'Radiopaco x radiolúcido', i: [
      '**Radiopaco = claro:** mais denso, barra o raio X',
      '**Radiolúcido = escuro:** menos denso, deixa passar (o ar é o mais escuro)',
      'No meio, tons de cinza: esmalte, dentina, osso; a mandíbula é mais compacta que a maxila',
      'O tom também depende de como a imagem foi adquirida',
      'Lesão radiolúcida: osso trocado por algo menos mineralizado (tecido fibroso, líquido do cisto)'
    ]},
    { t: 'Conhecer o normal', i: [
      'Sem conhecer a anatomia, dá-se diagnóstico de patologia ao que é normal',
      { img: 'img/aulas/imagino/s13-panoramica-esquema.jpg', cap: 'Slide da palestra: estruturas da panorâmica. Radiolúcidas: 1 seio maxilar, 2 cavidade nasal, 3 canal mandibular, 4 forame mentual. Radiopacas: 5 palato duro, 6 base da mandíbula, 7 côndilo', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Jonas' },
      { img: 'img/aulas/imagino/s14-panoramica-real.jpg', cap: 'Slide da palestra: as mesmas estruturas numa panorâmica real (forame mentual, canal mandibular, seio maxilar...). "Normal ou lesão?"', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Jonas' },
      '**Forame mentual:** circular, radiolúcido, perto dos ápices dos pré-molares inferiores',
      'Erro clássico: confundir o forame com **lesão periapical inflamatória**',
      'Saída: nova radiografia **variando a angulação horizontal**; se a imagem sai do ápice, é o forame',
      'Radiografia é 2D (sobreposição); a tomografia não tem essa dúvida',
      'Confirmar com o **teste de vitalidade**'
    ]},
    { t: 'Três exames', i: [
      '**Periapical:** informação inicial, detalhe de poucos dentes',
      '**Panorâmica:** visão geral, triagem inicial',
      '**Tomografia:** quando ainda há dúvida, mais detalhe da região',
      '**Achados incidentais:** a panorâmica acha lesão que não dá sintoma',
      { img: 'img/aulas/imagino/s15-tres-exames.jpg', cap: 'Slide da palestra: periapical (detalhe de poucos dentes), panorâmica (visão geral) e tomografia TCFC (3D, em cortes)', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Jonas' }
    ]},
    { t: 'As 4 perguntas', i: [
      '1. **Onde está?** (localização)',
      '2. **Clara ou escura?** (densidade)',
      '3. **Como é a borda?** (limites)',
      '4. **O que faz com os vizinhos?** (efeitos)',
      { img: 'img/aulas/imagino/desafio1-4-perguntas.jpg', cap: 'Desafio 1 da palestra: as 4 perguntas aplicadas a uma lesão escura, de borda corticalizada, no ápice de um dente com cárie', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Isadora' }
    ]},
    { t: '1. Onde está?', i: [
      'Coroa de dente incluso → **cisto dentígero**',
      'Ao lado da raiz → **cisto periodontal lateral**',
      'Área de extração → **cisto residual** (era radicular, o dente saiu e a lesão ficou)',
      { img: 'img/aulas/imagino/s18-onde-esta.jpg', cap: 'Slide da palestra: onde fica cada cisto (radicular, residual, periodontal lateral, dentígero, de erupção, gengival, ceratocisto)', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Isadora' }
    ]},
    { t: '2. Clara ou escura?', i: [
      '**Radiolúcida:** ex. cisto (interior líquido)',
      '**Radiopaca:** mais mineralizada',
      '**Mista:** radiolúcida com focos radiopacos dentro',
      { img: 'img/aulas/imagino/s19-clara-escura.jpg', cap: 'Slide da palestra: radiolúcida (escura, ex. cisto), radiopaca (clara, ex. odontoma) e mista (claro + escuro)', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Isadora' }
    ]},
    { t: '3. Como é a borda?', i: [
      '**Corticalizada:** linha branca em volta (osso mais denso, como a cortical)',
      '**Bem definida:** dá pra ver onde termina',
      '**Difusa:** borrada, não se sabe onde termina → **sinal de alerta**',
      { img: 'img/aulas/imagino/s21-borda.jpg', cap: 'Slide da palestra: corticalizada (linha branca, cresce devagar), bem definida (intermediária) e difusa (borrada, sinal de alerta)', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Isadora' },
      { img: 'img/aulas/imagino/s22-limites.jpg', cap: 'Slide da palestra: os mesmos três limites em radiografias reais', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Isadora' },
      '**Unilocular:** uma cavidade · **Multilocular:** várias, com septos (mesmo incompletos)',
      { img: 'img/aulas/imagino/s23-uni-multilocular.jpg', cap: 'Slide da palestra: unilocular (uma cavidade) x multilocular (várias cavidades separadas por septos), em esquema e na radiografia', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Isadora' }
    ]},
    { t: '4. O que faz com os vizinhos?', i: [
      '**Deslocamento dentário:** empurra os dentes',
      '**Reabsorção radicular:** raízes "cortadas", mais curtas',
      { img: 'img/aulas/imagino/s25-deslocamento-reabsorcao.jpg', cap: 'Slide da palestra: deslocamento dentário (dente empurrado para dentro do seio maxilar, seta) e reabsorção radicular (raízes "cortadas" retas sobre a lesão)', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Isadora' },
      '**Abaulamento da cortical:** estufa o osso, cortical fina',
      '**Rompimento da cortical:** comportamento mais agressivo',
      { img: 'img/aulas/imagino/s26-abaulamento-rompimento.jpg', cap: 'Slide da palestra: abaulamento da cortical na panorâmica (contorno "estufado", fino como casca de ovo) e rompimento da cortical lingual na tomografia (setas)', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Isadora' },
      'Deslocar e abaular = crescimento lento',
      { img: 'img/aulas/imagino/s24-vizinhos.jpg', cap: 'Slide da palestra: empurra dentes, encurta raízes, estufa o osso, rompe o osso. Deslocar e abaular = crescimento lento; romper = mais agressivo', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Isadora' },
      'Maligna: **dentes flutuantes** (destrói o osso em vez de deslocar)',
      { img: 'img/aulas/imagino/s27-juntando-pistas.jpg', cap: 'Slide da palestra: juntando as pistas. Tranquila = borda corticada e desloca os dentes; suspeita = borda difusa e rompe a cortical', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Isadora' }
    ]},
    { t: 'Analogias (nenhuma é patognomônica)', i: [
      'Bolhas de sabão → **ameloblastoma**',
      'Septos retinhos (raquete de tênis) → **mixoma odontogênico**',
      'Dentículos → **odontoma**',
      'Raios de sol → **osteossarcoma**',
      'Roído de traça → **lesões agressivas, malignas**',
      { img: 'img/aulas/imagino/s28-analogias.jpg', cap: 'Slide da palestra: bolhas de sabão, raquete de tênis, dentículos, raios de sol e roído de traça. Nenhuma é patognomônica', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Isadora' }
    ]},
    { t: 'Nem toda lesão aparece na imagem', i: [
      'Lesão grave de mucosa pode ter panorâmica normal',
      'Pode aparecer se infiltrar o osso, mas pode não aparecer',
      'Imagem normal não dispensa investigação → **biópsia**',
      { img: 'img/aulas/imagino/s29-nem-toda-lesao.jpg', cap: 'Slide da palestra: lesão na mucosa no exame clínico e panorâmica sem alteração óssea. Imagem normal pode até ser maligna', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Isadora' }
    ]},
    { t: 'O paciente também conta', i: [
      '**Idade, sexo, etnia**, local e história ajudam a hipótese',
      'Mesma imagem, pacientes diferentes, hipóteses diferentes',
      { img: 'img/aulas/imagino/s34-paciente.jpg', cap: 'Slide da palestra: idade, sexo, raça/etnia, local e história. Massas radiopacas em vários quadrantes: mulher negra de meia-idade x menino de 10 anos', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Isadora' },
      '"**Quando ouvir cascos, pense em cavalos, não em zebras**": primeiro o mais comum',
      { img: 'img/aulas/imagino/s35-cascos.jpg', cap: 'Slide da palestra: pistas da imagem → pistas do paciente → hipóteses (principal + diferenciais) → biópsia confirma', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Isadora' }
    ]},
    { t: 'A hipótese define a conduta', i: [
      '**Nenhuma lesão nasce grande:** cedo = tratamento simples; tarde = cirurgia maior, até mutiladora',
      { img: 'img/aulas/imagino/s36-nasce-grande.jpg', cap: 'Slide da palestra: a lesão pequena no início (tratamento simples), meses depois (cirurgia maior) e anos depois (desloca dentes, cirurgia extensa)', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Isadora' },
      '**Acompanhar:** controle clínico e radiográfico',
      '**Tratar a causa:** lesão periapical inflamatória → canal ou extração',
      { img: 'img/aulas/imagino/s37-conduta.jpg', cap: 'Slide da palestra: acompanhar, tratar a causa ou cirurgia o quanto antes, com exemplos de cada', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Isadora' },
      '**Cirurgia:** lesões que exigem remoção com margem (ex. ameloblastoma)',
      { img: 'img/aulas/imagino/s38-ameloblastoma-antes-depois.jpg', cap: 'Slide da palestra: ameloblastoma antes (lesão multilocular extensa na mandíbula) e depois (ressecção, reconstrução com osso do ilíaco, placa e implantes)', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Isadora' },
      '**Na dúvida, biópsia**'
    ]},
    { t: 'Fichas das lesões', i: [
      '**Lesão periapical inflamatória:** ápice de dente sem vitalidade (cárie ou trauma), radiolúcida, bem definida, pode ser corticalizada; diferencial com forame mentual e displasia cemento-óssea inicial (o teste de vitalidade orienta)',
      { img: 'img/aulas/imagino/s40-periapical.jpg', cap: 'Slide da palestra: lesão periapical inflamatória, em esquema e na periapical (A), com a ficha: localização, densidade, limites, efeitos', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Isadora' },
      '**Cisto dentígero:** coroa de dente incluso (3º molar, canino), radiolúcido, unilocular, bem definido e corticalizado, pode deslocar o dente; diferenciais: folículo aumentado, ceratocisto, ameloblastoma',
      { img: 'img/aulas/imagino/s41-dentigero.jpg', cap: 'Slide da palestra: cisto dentígero em volta da coroa de um dente incluso, em esquema e na panorâmica (3º molar inferior)', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Jonas' },
      '**Espaço pericoronário de 4 a 6 mm:** já não é mais normal, pensar em cisto',
      '**Ameloblastoma:** posterior de mandíbula, radiolúcido, uni ou multilocular, bem definido, abaula a cortical, reabsorve raízes; benigno, mas sai com margem de segurança',
      { img: 'img/aulas/imagino/s42-ameloblastoma.jpg', cap: 'Slide da palestra: ameloblastoma multilocular ("bolhas") encostando nas raízes, em esquema e na radiografia', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Jonas' },
      '**Odontoma:** vários dentículos, radiopaco com halo radiolúcido, limites bem definidos (a gravação acaba aqui)',
      { img: 'img/aulas/imagino/s43-odontoma.jpg', cap: 'Slide da palestra: odontoma com vários dentículos sobre um dente que não erupcionou, em esquema e na radiografia (B)', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Isadora' },
      { img: 'img/aulas/imagino/s44-displasia.jpg', cap: 'Slide mostrado depois do fim da gravação: displasia cemento-óssea periapical nas 3 fases (inicial escura, intermediária, madura clara), dentes com vitalidade preservada', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Jonas' },
      { img: 'img/aulas/imagino/s45-radiopacidades-apice.jpg', cap: 'Slide mostrado depois do fim da gravação: radiopacidades no ápice e condutas (displasia, osteíte condensante, osteoesclerose idiopática, hipercementose, cementoblastoma)', cr: 'Slide: Profa. Mariana (IMA Radiologia) · foto: Jonas' }
    ]}
  ],

  transcricao: [
    { t: 'Abertura', p: [
      'Essa é a primeira aula de vocês sobre esse assunto [?]. Eu espero passar um pouquinho pra vocês hoje sobre imaginologia ligada à patologia. Vocês estão iniciando, fazendo essa caminhada acadêmica, e é normal [trecho pouco claro].',
      'Esse tema que vocês vão ver, vamos revisitar durante toda a graduação de vocês e depois na vida profissional também. Existem lesões famosas, que vocês já devem conhecer, e outras mais novas. A ideia é que vocês se familiarizem com algumas delas e, sobretudo, tenham um olhar um pouquinho mais apurado para as imagens.',
      'Como ele [o prof. Sebastião] já me apresentou, eu sou da área de imaginologia.'
    ]},
    { t: 'Exercício: como vocês descrevem essa imagem?', p: [
      'Eu quero começar pedindo pra vocês nomearem o que conseguem ver aqui. Vamos exercitar. Como é que vocês me descrevem essa imagem, o aspecto dela?',
      'Turma: uniforme, escura, ampliada.',
      'E essa imagem? É mineralizada? Como é que se fala? Turma: radiopaca, uniforme, bem delimitada, nítida, chama atenção.',
      'E essa aqui? Turma: desfocada, difusa, menos nítida, fosca.'
    ]},
    { t: 'O diagnóstico é um quebra-cabeça', p: [
      'É importante que vocês tenham sempre em mente que o diagnóstico é um quebra-cabeça. E pra gente chegar no final, a gente tem que unir todas essas peças.',
      'Primeiro, a parte clínica. Esse é o primeiro pilar pra gente chegar ao diagnóstico. O que é a parte clínica? Uma boa anamnese: saúde geral do paciente, a parte odontológica, o exame clínico. Tem aumento de volume? Onde? Tem alteração de cor? Qual região está alterada? E testes que a gente às vezes precisa fazer, pra ver se aqueles dentes estão respondendo: teste de vitalidade, de percussão [?], de mobilidade. Isso tudo é importante.',
      'A imagem: a gente precisa da imagem pra identificar características daquela patologia ou daquela lesão.',
      'E, se a gente fala de patologia, o outro pilar fundamental: a gente precisa colher material e montar o histopatológico. É onde a gente vai observar na lâmina aquele material que foi colhido, e no final chega ao diagnóstico histopatológico. Estou falando de uma maneira rápida, a gente vai destrinchando isso ao longo da aula. Hoje a gente vai falar da peça do meio, que é a imagem. Ela é sempre complementar: a gente une o que viu clinicamente, as informações que a imagem traz e a informação do histopatológico.',
      'O histopatológico é um dos principais pilares do diagnóstico, mas muitas vezes ele precisa da imagem. Do mesmo jeito, às vezes a gente tem radiografias com características muito parecidas, e lâminas parecidas também. O que vai fazer a gente chegar ao diagnóstico são as características da imagem, as características clínicas e o resultado do histopatológico. É de fato um quebra-cabeça.',
      'Por que a imagem, a radiografia ou a tomografia, faz parte desse quebra-cabeça? Ela vai mostrar na lesão as características que começam a dar as hipóteses diagnósticas. Ela mostra o que aquela lesão causa nas estruturas vizinhas: estruturas ósseas, dentes, canal mandibular, o nervo alveolar inferior. Tudo isso é importante.',
      'O laboratório de patologia, o patologista, também precisa das características da imagem. Quando você envia o material, envia a imagem junto. O histopatológico não resolve sozinho, a imagem radiográfica ou tomográfica também não resolve sozinha, e a clínica muitas vezes também não. A gente precisa unir tudo isso.'
    ]},
    { t: 'Radiopaco, radiolúcido e os tons de cinza', p: [
      'Quando eu cheguei, vocês já sabiam o que era radiopaco e radiolúcido. Mas a gente vai rever esses conceitos, porque vai falar muito sobre isso durante a aula. A gente tem nas imagens muitos tons de cinza: entre o radiopaco e o radiolúcido existem outras densidades.',
      'Relembrando a formação da imagem, que é básica: a gente tem uma fonte de raio X, o cabeçote do equipamento, que vai gerar os feixes de raio X. Eles passam pela estrutura que a gente quer radiografar e no final a gente tem a imagem em tons de cinza.',
      'Tudo que é mais denso barra o raio X, então fica claro na imagem. O radiopaco impede a passagem dos feixes, e a gente vê mais claro. No radiolúcido os feixes passam com mais facilidade. O ar, por exemplo, aparece mais escuro.',
      'Entre o claro e o escuro existem todos esses tons de cinza: a densidade do esmalte, da dentina, do osso. O osso da maxila tem densidade diferente do osso da mandíbula, porque a mandíbula é um osso mais compacto.',
      'A gente precisa entender que não dá pra generalizar esses tons de cinza exatamente assim na interpretação, porque isso também depende de como foi feita a aquisição radiográfica ou tomográfica. É só pra vocês entenderem como se comportam os tons de cinza na imagem.',
      'Então as lesões são radiolúcidas ou radiopacas. Como é uma lesão radiolúcida? O osso é substituído por algo menos mineralizado. Por exemplo, tecido fibroso: em algumas patologias o osso é substituído por tecido fibroso. Outro exemplo: numa lesão cística, muitas vezes o interior é líquido. Ali o raio passa mais fácil, e o que a gente vê é uma imagem mais escura.',
      'E o radiopaco: olha como essa imagem está bem mais radiopaca do que o próprio osso do paciente.'
    ]},
    { t: 'Conhecer o normal: forame mentual x lesão periapical', p: [
      'Por isso é muito importante que a gente conheça o que é normal, as estruturas anatômicas. Se a gente não reconhece o normal, acaba dando diagnóstico de patologia ao que é normal.',
      'Aqui a gente tem uma área mais radiolúcida, que é uma estrutura anatômica. O canal mandibular vai ser uma imagem mais radiolúcida, abaixo dos ápices dos dentes. E o forame mentual é uma imagem circular, radiolúcida, bem próxima dos ápices dos pré-molares inferiores, por exemplo. Saber identificar as estruturas anatômicas e como elas aparecem no exame de imagem é importante pro diagnóstico.',
      'Um erro muito clássico, que pode levar qualquer pessoa a confundir uma estrutura anatômica com uma lesão patológica, é o forame mentual com uma lesão periapical de origem inflamatória. Por quê? Porque, dependendo da angulação da radiografia, ele fica justamente ali, sobre o ápice, e aparece com características muito semelhantes.',
      'Então, o que vai fazer a gente diferenciar? Turma: a forma. Às vezes ela vai ficar exatamente associada à raiz do dente, circular, arredondada. E aí, como a gente consegue distinguir os dois? Turma: o canal pulpar [?].',
      'Olha só, uma boa resposta: aqui a gente tem um comprometimento grande dessa coroa. Quando a gente vê esse comprometimento, fica mais fácil pensar em lesão. Mas, quando a gente está olhando a radiografia, a gente tem sobreposição de imagens, então nem sempre isso vai estar tão óbvio.',
      'E o que a gente pode fazer primeiro? Variar a angulação naquela radiografia. E aí, se deslocar, se mudar de posição, ele é o quê? O forame. Exatamente. Se ficar, a lesão está realmente associada à raiz daquele dente: não é forame. Ele muda de posição porque fica sobreposto àquela região. É um exame bidimensional, o exame radiográfico. Esse é o tipo de dúvida que a gente tem em exame radiográfico. No exame tomográfico a gente não tem, porque visualiza a estrutura exatamente como ela é no paciente.',
      'Como variar a angulação? Quando você está fazendo uma radiografia com posicionador, você bota o filme naquela região, tem a argola do posicionador e você posiciona o feixe de raio X. A radiografia comum é a ortorradial, com o feixe reto naquela região que a gente quer radiografar. Pra variar, eu desloco o cabeçote, o feixe, mais pra mesial ou pra distal. Isso é variar horizontalmente. Eu posso também variar um pouco pra cima e um pouco pra baixo. Nesse caso, a variação horizontal é a que ajuda mais, porque vai deslocar aquela imagem.',
      'Tem mais uma coisa que a gente pode fazer: o teste de vitalidade. Lembra do quebra-cabeça? Por isso a gente une as peças. A gente volta lá pra clínica, faz o teste, e tira a dúvida pro diagnóstico final.'
    ]},
    { t: 'As estruturas na panorâmica', p: [
      'As estruturas na panorâmica: algumas são radiolúcidas, escuras, outras radiopacas. A gente tem que reconhecê-las de uma maneira geral, onde elas estão, qual o formato delas numa radiografia panorâmica. Isso vai ajudar a gente a fazer o diagnóstico depois.',
      'Olha como a gente tem muitas estruturas na panorâmica, porque ela dá uma visão geral: a gente vê toda a maxila, toda a mandíbula, a região de órbita, a cavidade nasal. Vocês têm que relembrar a anatomia e fazer a correlação de como ela vai aparecer na radiografia. Isso vai ficar mais fácil no período que vem, em radiologia [?].'
    ]},
    { t: 'Três exames: periapical, panorâmica e tomografia', p: [
      'Três exames que a gente vai falar. A gente vai ver mais imagens radiográficas durante a aula; tomografia seria um nível um pouco mais avançado, então vou falar um pouco menos dela. Esses são os três exames mais utilizados na odontologia hoje.',
      'A periapical, que às vezes você tem no consultório, vai te ajudar com alguma informação inicial. A panorâmica, que vai te dar uma visão geral sobre tudo que está acontecendo. E a tomografia, exame que a gente pode fazer depois que já tem um exame inicial, quando ainda tem alguma dúvida pra elucidar. Ela vai mostrar mais detalhes daquela região.',
      'A panorâmica é importante principalmente quando a gente está fazendo aquela triagem inicial. A gente precisa saber como está a situação ali.',
      'E tem uma coisa bem importante. Às vezes a gente tem um paciente que só vem fazer aquela limpezinha de 6 em 6 meses. Por que pedir panorâmica? Porque existem os achados incidentais. Você pediu pra ver como está um siso, por exemplo, e acha outra patologia. Muitas vezes a patologia não dá sintoma, mas está presente. Por isso a panorâmica num exame inicial, de triagem, mesmo no paciente que não tem queixa.'
    ]},
    { t: 'As quatro perguntas para descrever uma lesão', p: [
      'Então a gente vai fazer quatro perguntinhas que vão ajudar a descrever as lesões.',
      'Onde ela está? A gente vai começar localizando a lesão.',
      'Ela é clara ou escura? A gente vai falar sobre a densidade dessa lesão.',
      'Como é a borda dela, os limites dela? Ela é bem delimitada, tem limites precisos, ou imprecisos, difusos?',
      'E o que ela faz com as estruturas vizinhas? Promove algum tipo de dano, desloca dente, reabsorve raiz? A gente tem que observar tudo isso.'
    ]},
    { t: '1. Onde está?', p: [
      'A primeira é a posição. A localização da lesão já pode começar a dar pista de que direção tomar.',
      'Por exemplo: se a gente tem uma imagem radiolúcida associada à coroa de um dente incluso, a gente vai começar a pensar em cisto dentígero, que é uma patologia muito comum associada a dente incluso.',
      'Se a gente tem uma imagem radiolúcida lateral à raiz, a gente vai começar a pensar em cisto periodontal lateral, por exemplo.',
      'Se a gente tem um alvéolo, a região do dente após a extração, e uma lesão ali, a gente vai pensar em cisto residual. Era um cisto radicular, inflamatório, o dente foi removido e a lesão ficou. Então ele não é mais radicular, agora é residual.',
      'A localização são as primeiras pistas que a gente precisa observar pra chegar depois, juntando todas as peças, ao diagnóstico final.'
    ]},
    { t: '2. Clara ou escura?', p: [
      'Radiolúcida: os cistos, por exemplo, que têm o interior líquido, menos mineralizado. A imagem vai parecer escura.',
      'Radiopaca: imagens mais mineralizadas. Vai ser claro, vai ser radiopaco.',
      'E a gente tem as imagens mistas. O que quer dizer uma imagem mista? Que a gente vai ter as duas densidades numa mesma patologia.',
      'Aqui um exemplo de patologia com densidade radiolúcida: em volta dessa coroa a gente tem uma imagem escura. E aqui uma imagem já mais clara, radiopaca. A imagem mista é uma imagem radiolúcida que tem no seu interior focos radiopacos.'
    ]},
    { t: '3. Como é a borda?', p: [
      'Essa imagem é escura, mas está sendo envolvida por uma imagem clara. A borda dela é uma borda corticalizada: essa borda mais clara a gente chama de corticalizada.',
      'Por que corticalizada? Lembra quando a gente tem um osso e tem a parte cortical desse osso? No meio é o osso medular e em volta o osso mais denso, o osso cortical. Então aqui é corticalizada porque essa volta é mais densa.',
      'E a bem definida: eu consigo ver exatamente a extensão de toda a lesão, onde ela termina.',
      'E uma lesão difusa? Numa lesão difusa a gente não consegue perceber onde ela está terminando, ela vai se misturando à imagem. A borda dela é mais borrada. Esse tipo de lesão já seria um sinal de alerta: são lesões um pouco mais agressivas. Ela termina aqui ou ela termina aqui? A gente não sabe.'
    ]},
    { t: 'Uma cavidade ou várias?', p: [
      'Ela tem uma cavidade ou várias cavidades. Se tem uma cavidade, a gente chama de unilocular. Se tem várias cavidades, multilocular.',
      'Como ela é multilocular, vai ter septos ósseos entre as cavidades. Esses septos podem estar separando completamente as cavidades ou podem ser parciais: não precisa separar completamente uma loja óssea da outra. Mesmo assim a gente já considera multilocular.'
    ]},
    { t: '4. O que faz com os vizinhos?', p: [
      'E o que essa lesão promove nas estruturas vizinhas? Ela pode, por exemplo, deslocar dentes: vai empurrando os dentes. Isso a gente chama de deslocamento dentário.',
      'Ela pode também cortar as raízes: vai crescendo e reabsorve a raiz dos dentes. É a reabsorção radicular.',
      'Ou ela pode estufar o osso: vai crescendo e expande. A gente chama de abaulamento da cortical.',
      'Ou ela rompe aquele osso. Quando ela desloca e abaula, ela tem crescimento lento: deu tempo de deslocar o osso. Quando rompe sem ter afastado aquele osso, é uma lesão com um comportamento um pouco mais agressivo.',
      'Por exemplo, nas lesões malignas, uma das características que a gente vê são os dentes flutuantes. Aquela lesão não vai deslocar, ela vai destruir o osso, e os dentes ficam sem suporte.',
      'Aqui, por exemplo, um dente incluso que foi deslocado lá pro interior do seio [maxilar, ?]. E aqui as raízes já estão bem mais curtinhas, porque houve reabsorção: aparecem como se estivessem cortadas.',
      'No abaulamento, o osso parece estar estufado. Olha como a lesão cresceu e veio pra cá. Quando cresce muito, a cortical fica bem fininha também: a gente chama de adelgaçamento, deixa fina a cortical. E, muito fina, ela pode até romper.',
      'Olha aqui, por exemplo, os dois lados da mandíbula num corte de tomografia. Deste lado a cortical abaulada. E deste outro lado? A cortical já não existe mais, foi rompida. A gente vai juntando todas essas pistas pra entender o comportamento dessa lesão e as características de alguns tipos de lesões.'
    ]},
    { t: 'Analogias da literatura', p: [
      'O ameloblastoma, por exemplo, é uma lesão que a literatura descreve assim: várias cavidades próximas que lembram bolhas de sabão. Aí a gente vai pensar em ameloblastoma. Isso quer dizer que toda vez que tiver lesão multilocular vai ser ameloblastoma? Não, existem outras lesões. Mas essa característica já faz considerar a hipótese.',
      'O mixoma odontogênico também é multilocular, só que os septos são mais retinhos [lembra uma raquete de tênis].',
      'Quando a gente tem uma imagem com vários dentículos, você vai pensar em odontoma, por exemplo.',
      'Quando a gente vê umas linhas radiopacas que a gente chama de raios de sol, a gente pode lembrar do osteossarcoma.',
      'E o roído de traça são imagens com bordas muito irregulares, por isso lembram um roído de traça. A gente vai lembrar de lesões mais agressivas, malignas, por exemplo.',
      'Esses sinais, essas características, não são sinais patognomônicos. O que isso quer dizer? Que não quer dizer que toda lesão vai apresentar essa característica. É uma das pistas: a gente vai juntando com as outras informações do exame clínico e com o histopatológico.'
    ]},
    { t: 'Nem toda lesão aparece na imagem', p: [
      'Agora um detalhe muito importante. Existem lesões muito graves que, na radiografia, não vão mostrar nada. Isso não quer dizer que o paciente não precisa se preocupar. Por que isso acontece? Porque existem lesões que estão restritas ao tecido mole.',
      'Esse caso aqui, por exemplo: olha como a gente tem uma lesão grande nessa região, e na radiografia absolutamente nada. Aí vem o raciocínio: "deixa eu pedir uma panorâmica pra ver... nada, então não precisa se preocupar?" Não, gente: biópsia.',
      'Esse caso era de uma lesão [maligna, ?] extremamente agressiva, que não aparece ali. Pode aparecer na imagem? Pode. Se essa lesão infiltrar a parte óssea, ela vai começar a aparecer, com aspecto de destruição óssea. Mas ela pode não aparecer.',
      'Por isso é importante a biópsia: pra gente não subestimar essas lesões. E pra lesão de tecido mole às vezes a gente tem que lançar mão de outros exames [ressonância magnética, ?].'
    ]},
    { t: 'Desafio 1: lesão no ápice', p: [
      'Vamos treinar um pouquinho. Onde ela está, essa lesão? Turma: no ápice, associada a um dente com cárie.',
      'Ela é clara ou escura? Turma: escura.',
      'E a borda dessa lesão? A borda é calcificada... a gente chama de corticalizada.',
      'Ela está causando alguma coisa nas estruturas vizinhas? Turma: não.'
    ]},
    { t: 'Desafio 2: lesão entre os dentes', p: [
      'Vamos de novo. Onde está? No corpo do osso, entre os dentes. Ela é clara ou escura? Turma: escura.',
      'E as bordas dela? Turma: corticalizadas. Exato, bem definida.',
      'Então, o que ela causou aqui foi o deslocamento dos dentes.'
    ]},
    { t: 'Desafio extra: a panorâmica com várias áreas', p: [
      'Vamos ver o que a gente tem aqui na panorâmica. Começando por esta: radiolúcida ou radiopaca? Turma: radiolúcida. Está entre os incisivos. A gente tem alguma estrutura anatômica nessa região? Vamos lembrar da anatomia: tem. Então nesse caso pode ser só estrutura anatômica, ou pode ser patologia, porque ali a gente também tem cisto [do ducto nasopalatino, ?].',
      'Como diferenciar nesse caso? Um dos critérios que a gente olha: as bordas mais arredondadas, características mais císticas. Mas o que fecha é o histopatológico.',
      'Agora aqui: está entre as raízes. Se não tem estrutura anatômica normal entre essas raízes, a gente deve estar falando de alguma questão patológica.',
      'E aqui a gente tem um dente incluso, com uma área radiolúcida associada a ele. Com o dente incluso existe o que a gente chama de capuz pericoronário, o espaço em volta da coroa. Então a gente tem que observar as características. Como saber a diferença? Pelas características: quando esse espaço está com uns quatro a seis milímetros, por exemplo, a gente já não considera mais normal e começa a considerar a possibilidade de cisto.',
      'E aqui o dente já foi extraído, e a gente tem uma imagem ali: lembra do cisto residual.',
      'A gente tem que lembrar o que é normal e o que não é normal pra conseguir diferenciar.'
    ]},
    { t: 'Além da imagem: o paciente também conta', p: [
      'Lembra lá no início, quando eu falei da anamnese? A gente tem que saber que algumas informações do paciente ajudam a chegar à hipótese. Porque existem lesões em que a mesma característica de imagem, num paciente, leva a uma hipótese diagnóstica muito clássica; e a mesma característica num paciente de 10 anos leva a gente pra outra hipótese.',
      'Então, além das características da imagem, a idade do paciente, se é homem, se é mulher, e a etnia ajudam bastante a chegar à hipótese diagnóstica.'
    ]},
    { t: 'Hipótese principal e diagnóstico diferencial', p: [
      'Então a gente junta as características da imagem, as informações dos exames e as informações do paciente, da anamnese, e levanta as hipóteses diagnósticas e os diagnósticos diferenciais. E depois vai para a biópsia, que confirma.',
      'Tem uma frase da patologia que é muito interessante: quando ouvir cascos, pense em cavalos, não em zebras. O que quer dizer isso? Pense sempre no mais óbvio, gente, no mais comum, não no mais raro. O incomum a gente pode até levar como diagnóstico diferencial, mas tem que lembrar primeiro das hipóteses mais comuns.'
    ]},
    { t: 'Nenhuma lesão nasce grande', p: [
      'Outra coisa importante: nenhuma lesão nasce grande. Se a gente consegue pegar a lesão ainda em fase inicial, isso é qualidade de vida pro paciente.',
      'No início é um detalhe pequeno, mais difícil de notar, mas o tratamento é mais simples. Então é necessário ter atenção aos pequenos detalhes. Quando a lesão vai crescendo, dependendo do tipo, o tratamento vai ser muito maior.',
      'A gente pode ter lesões extremamente grandes, com condutas cirúrgicas muito mutiladoras. Por quê? Porque são lesões em que, pra remover, você tem que tirar muito osso com margem, e o paciente perde uma quantidade enorme de osso. Isso é extremamente importante para o paciente.'
    ]},
    { t: 'A hipótese define a conduta', p: [
      'A hipótese diagnóstica vai ajudar a definir a conduta. Existem lesões que a gente só acompanha: não faz nada, só controle clínico e radiográfico [a displasia cemento-óssea é uma delas, ?].',
      'Existem outras lesões em que a gente tem que tratar a causa. Por exemplo, uma lesão periapical inflamatória: a gente vai tratar o canal daquele dente, ou extrair aquele dente, pra resolver.',
      'E existem lesões com conduta cirúrgica, que a gente vai precisar remover, às vezes com margem, remover completamente. E isso pode causar ao paciente uma grande mutilação.',
      'Então, na dúvida, biópsia. É melhor você fazer a biópsia no paciente e descobrir que não era nada, olha a felicidade, do que deixar passar uma imagem com uma lesão importante e depois descobrir que era uma lesão agressiva. A dúvida a gente tem a obrigação de investigar.'
    ]},
    { t: 'Ameloblastoma: antes e depois', p: [
      'O caso do ameloblastoma: ele é benigno, mas ele expande muito. Pra remover o ameloblastoma você tem que tirar toda aquela região, com uma margem de segurança considerável.',
      'Aqui fizeram enxerto ósseo e reconstrução com uma placa [comentário sobre a placa pouco claro, ?]. E isso é uma lesão benigna. Então a gente tem que lembrar o quanto é importante o diagnóstico cedo.'
    ]},
    { t: 'Lesão periapical inflamatória', p: [
      'Agora vou mudar um pouquinho, para as imagens das lesões.',
      'A localização é o ápice do dente. Eu botei a cárie aqui de propósito. Por quê? Porque ela pode ser causada por cárie, mas também por um trauma. Então é importante perguntar.',
      'E o que a gente precisa fazer nesses casos? O teste de vitalidade.',
      'A densidade dessa lesão vai ser sempre radiolúcida. Ela vai ser bem delimitada, pode ter bordas corticalizadas. A gente vai ter a lâmina dura interrompida, mas nem sempre vai estar óbvio.',
      'E o que pode ser diagnóstico diferencial desse tipo de lesão? O forame mentual, que a gente já viu, e a displasia cemento-óssea. Quando a displasia está numa fase inicial, ela é igualzinha a uma lesão periapical inflamatória. O que vai orientar o diagnóstico é o teste de vitalidade: na displasia, apesar de a lesão estar no ápice do dente, ela não compromete a vitalidade daquele dente. Agora, quando a gente já tem uma destruição grande, fica um pouco mais fácil ir para a hipótese de maior probabilidade.'
    ]},
    { t: 'Cisto dentígero', p: [
      'Cisto dentígero: uma imagem radiolúcida associada geralmente à coroa de um dente incluso. Os mais comuns são os terceiros molares e os caninos, que são os dentes mais encontrados inclusos.',
      'Ele vai ser radiolúcido, unilocular, ou seja, uma cavidade única, e os limites vão ser bem definidos e corticalizados. Ele pode, inclusive, deslocar o dente. Esse tipo de cisto pode tomar proporções grandes em alguns casos.',
      'Quais são os diagnósticos diferenciais? O folículo aumentado: aquele espaço em volta da coroa, que pode estar um pouquinho aumentado. O ceratocisto. E será que pode ser um ameloblastoma? Pode ser. O ameloblastoma costuma ter várias lojas, mas pode ter uma cavidade só também. Existem alguns tipos de ameloblastoma; não vamos entrar fundo nisso agora, mas é importante saber que existem.'
    ]},
    { t: 'Ameloblastoma', p: [
      'A região mais frequente do ameloblastoma é a região posterior da mandíbula. Ele vai ser sempre radiolúcido, pode ser unilocular ou multilocular, vai ser bem definido, pode ter margens corticalizadas ou não, e vai abaular a cortical.',
      'O ameloblastoma cresce muito e desloca osso. Sempre que a gente vê uma lesão que abaula muito osso, tem que lembrar de ameloblastoma. Ele também reabsorve raízes.',
      'E nesses casos a gente faria diagnóstico diferencial com o ceratocisto, com o mixoma odontogênico e com a lesão central de células gigantes.'
    ]},
    { t: 'Recado de estudo', p: [
      'Patologia tem muita variedade. Vocês estão no segundo período, ninguém vai lembrar de todas as lesões de cabeça. Revisitar a literatura e estudar sobre isso é importante demais na vida profissional de vocês. Radiologistas fazem isso com muita frequência, graças a Deus, pra acertar mais o diagnóstico.'
    ]},
    { t: 'Odontoma (a gravação termina aqui)', p: [
      'O odontoma é um dos mais comuns [?]. A gente vai ter vários dentículos, que são dentes pequenininhos, numa imagem radiopaca com um halo radiolúcido em volta. Ele pode impactar um dente na região [?]. Os limites dele são sempre bem definidos. Mas a característica principal é que... [a gravação termina aqui].'
    ]}
  ],

  tirado: [
    'Repetições da transcrição automática ("Tem que entrar? Faz alguma coisa?" repetido várias vezes no exercício de abertura).',
    'Falas soltas e incompreensíveis da turma durante o exercício ("Minte da Ness", "Chama calcão", "por caminhão... menina").',
    'Uma frase do começo sobre gravação ("não se pode gravar"), que não dá pra entender.',
    'Comentários dirigidos a alunos, sem conteúdo ("eu estou com você, Edmond", "Tá, pra gente entender, Vél", "Mas, Leandro, aqui...").',
    'Uma troca confusa com a turma no meio da explicação do forame (linhas sobre "professor de idioma", "dar a boca na pessoa"). Ficou só a parte do teste de vitalidade.',
    'Avisos de organização ("Estamos dividindo, espera", "Vamos lá, vamos lá").',
    'Conversa entre alunos durante o Desafio 1 ("Eu não acho que o mês que eu estou aqui é ruim", "A gente não tem a informação, você tem").',
    'Trechos tão embolados que não deu pra recuperar com segurança: o que ela disse logo depois de lesão periapical no Desafio extra ("tem uma ajeção aqui... região de Coroa"), a área "s.i." da panorâmica, o comentário sobre a placa no caso do ameloblastoma, parte do caso maligno e o exame de tecido mole ("hamburguesia médica").',
    'Nada foi acrescentado de fora da fala: o que vem entre colchetes com [?] é dedução pelo contexto e pelos slides, pra conferir.'
  ]
}];
