/* Estomatologia: termos novos do dicionário + imagens para termos que estavam sem (25/11/2026).
   Texto: Manual de Estomatologia SMS-SP 2017 (material da matéria) e Neville et al., Patologia Oral e Maxilofacial.
   Imagens: fotos já usadas no site (img/estomato, img/melanoma; créditos em img/estomato/FONTES.md e img/melanoma/FONTES.md)
   e Wikimedia Commons por link direto (licença livre; crédito no fonte). Carregar DEPOIS de glossario-estomato.js. */
(function () {
  var B = window.BANCOS && window.BANCOS.estomato; if (!B) return;
  var MAN = 'Manual de Estomatologia SMS-SP 2017';
  var NEV = 'Neville et al., Patologia Oral e Maxilofacial';
  var KAT = 'Katchburian & Arana, Histologia e Embriologia Oral';
  var t = function (d, fonte) { return { d: d, fonte: fonte }; };
  var f = function () { return [].slice.call(arguments).join('; '); };
  var CAN = t('Carcinoma epidermoide (= carcinoma espinocelular, CEC): o câncer de boca mais comum, 90 a 95% dos casos. Nasce do epitélio da mucosa. Fatores de risco principais: tabaco e álcool, que somam efeito; no lábio inferior, o sol. No começo costuma ser INDOLOR: úlcera endurecida, de bordas elevadas e fundo granuloso, ou placa branca/vermelha, mais em borda e ventre de língua e assoalho. Ex.: fumante de 60 anos com úlcera na borda da língua há 2 meses, que não dói = biópsia.', f(MAN, NEV, 'INCA, Câncer de boca'));
  var SEB = t('Glândula sebácea = glândula que produz sebo (gordura), normalmente da pele, junto aos pelos. Na boca, fora do lugar habitual, aparece como os grânulos de Fordyce: pontinhos amarelados na bochecha e no lábio superior, variação da normalidade. Ex.: paciente assustado com "pontinhos amarelos" na mucosa jugal.', f(MAN, NEV));
  var LIN = t('Linfonodos (gânglios linfáticos) = pequenos órgãos em forma de feijão no caminho da linfa, que filtram e reagem a infecções e a células de câncer. No pescoço ficam em cadeias (submandibular, submentoniana, cervicais). O câncer de boca se espalha primeiro por eles (drenagem linfática); por isso o exame da boca termina palpando o pescoço. Ex.: linfonodo duro, fixo e indolor no pescoço de fumante = sinal de alerta.', f(MAN, NEV));
  var QUER = t('Mucosa queratinizada = mucosa com camada de queratina na superfície, mais firme, feita para aguentar atrito da mastigação: gengiva inserida, palato duro e dorso da língua. A não queratinizada (lábio por dentro, bochecha, ventre da língua, assoalho, palato mole) é mais fina e móvel. Ex.: afta aparece na NÃO queratinizada; herpes recorrente intraoral, na queratinizada.', f(MAN, KAT));

  var G = {
    'Candida': t('Fungo (levedura) que vive normalmente na boca de muitas pessoas sem causar doença. Quando o equilíbrio se quebra (antibiótico, corticoide, imunossupressão, diabetes, prótese mal higienizada, boca seca), ele cresce e causa candidose. A espécie mais comum é a Candida albicans. Ex.: criança que tomou antibiótico para otite e ficou com placas brancas que saem na gaze.', f(MAN, NEV)),
    'microbiota': t('Conjunto de microrganismos (bactérias, fungos) que vivem normalmente na boca e se controlam uns aos outros. Antibiótico mata parte das bactérias, desequilibra a microbiota e deixa espaço para a Candida crescer.', f(NEV)),
    'antibiótico': t('Remédio que mata bactérias ou impede que se multipliquem. Efeito colateral importante na boca: desequilibra a microbiota e favorece candidose e língua pilosa. Ex.: amoxicilina por 7 dias para otite e, dias depois, "língua branca".', f(MAN, NEV)),
    'antifúngico': t('Remédio contra fungos. Na boca, os mais usados são a nistatina (suspensão para bochecho) e o miconazol (gel); em casos extensos, fluconazol por via oral. Na candidose ligada à prótese, a prótese também precisa ser tratada (higiene, tirar à noite). Ex.: bochecho de nistatina 4 vezes ao dia, sem a prótese na boca.', f(MAN, NEV)),
    'biofilme': t('Camada pegajosa de bactérias (e fungos) organizados, grudada em dentes, língua e prótese: a "placa bacteriana". Acumula nos sulcos da língua fissurada e na língua pilosa e causa mau hálito; sai com escovação mecânica. Ex.: orientar escovar o dorso da língua.', f(MAN, NEV)),
    'língua pilosa': t('Alongamento das papilas filiformes do dorso da língua, que ficam como "pelos" e retêm pigmento e bactérias. A cor vai do branco-amarelado ao negro (língua pilosa negra), conforme fumo, café, chá, alimentos e bactérias cromogênicas. Fatores: fumo, antibiótico, má higiene. É benigna: tratamento = escovar/raspar o dorso da língua e tirar os fatores. Ex.: fumante com "língua preta peluda" depois de antibiótico.', f(MAN, NEV)),
    'tecido de granulação': t('Tecido novo, cheio de vasinhos e células inflamatórias, que o corpo forma para cicatrizar. É vermelho e sangra fácil ao toque. O granuloma piogênico é feito de um tecido parecido com ele, por isso sangra tanto. Ex.: lesão vermelha na gengiva da gestante que sangra ao tocar com a sonda.', f(NEV)),
    'glândula salivar': t('Glândulas que produzem a saliva: as maiores (parótida, submandibular, sublingual) e centenas de menores espalhadas pela mucosa (lábio, bochecha, palato). Rompimento do ducto de uma glândula menor dá a mucocele; da sublingual, a rânula.', f(MAN, NEV)),
    'pus': t('Líquido amarelado formado por neutrófilos mortos, bactérias e restos de tecido: sinal de infecção bacteriana. Ex.: nódulo na gengiva vestibular, na altura do ápice de um dente necrosado, com ponto amarelo que solta secreção ao apertar = fístula (parúlide) de abscesso periapical.', f(NEV)),
    'fístula': t('Caminho que o pus abre do foco de infecção até a superfície. Na boca, a fístula de abscesso periapical aparece como um nódulo com ponto amarelado na gengiva (parúlide), perto do ápice do dente sem vitalidade. Trata-se a causa: canal ou extração.', f(NEV)),
    'estomatite protética': t('Inflamação vermelha da mucosa coberta pela prótese (geralmente o palato), ligada à Candida e ao biofilme da prótese; é uma forma de candidose atrófica crônica. Fatores: dormir com a prótese, higiene ruim, prótese mal adaptada. Tratamento: higienizar a prótese, tirar para dormir, antifúngico e ajustar ou trocar a prótese. Ex.: Dona Maria, que nunca tira a dentadura, com o palato todo vermelho no formato da prótese.', f(MAN, NEV)),
    'prótese': t('Peça que substitui dentes perdidos (total, parcial removível, fixa, sobre implante). Na Estomatologia importa porque prótese mal adaptada ou mal higienizada causa lesões: queratose friccional, hiperplasia fibrosa inflamatória, úlcera traumática, estomatite protética. Ex.: borda da dentadura machucando o fundo de vestíbulo.', f(MAN, NEV)),
    'carcinoma epidermoide': CAN, 'câncer de boca': CAN,
    'linfonodos': LIN, 'linfonodo': LIN,
    'drenagem linfática': t('Caminho que a linfa faz dos tecidos até os linfonodos. Cada região da boca drena para cadeias certas do pescoço (lábio inferior e ponta da língua para submentonianos; língua e assoalho para submandibulares e cervicais). É por esse caminho que o carcinoma da boca faz metástase.', f(NEV)),
    'lipoma': t('Tumor benigno de gordura (tecido adiposo). Na boca: nódulo mole, liso, de crescimento lento, amarelado se superficial ou da cor da mucosa se profundo, mais na bochecha. Na biópsia, a peça FLUTUA no formol, porque gordura é menos densa que a água. Ex.: Dona Cida, nódulo mole e amarelado na bochecha.', f(NEV)),
    'tecido adiposo': t('Tecido de gordura, formado por adipócitos (células cheias de lipídio). É menos denso que a água: por isso um fragmento de lipoma boia no formol. Dá cor amarelada às lesões superficiais.', f(NEV, KAT)),
    'glândula sebácea': SEB, 'glândulas sebáceas': SEB,
    'afta': t('Nome popular da úlcera aftosa recorrente (UAR): úlcera rasa, redonda ou oval, dolorosa, com fundo amarelado (fibrina) e halo vermelho, em mucosa NÃO queratinizada (lábio por dentro, bochecha, ventre da língua). Não começa com vesícula e cicatriza em 7 a 14 dias. Ex.: estudante em semana de prova com "afta" no lábio inferior.', f(MAN, NEV)),
    'fibrina': t('Proteína do sangue que forma uma rede na coagulação e na inflamação. No fundo das úlceras (afta, úlcera traumática) forma uma membrana amarelo-acinzentada junto com tecido necrótico: é ela que dá o fundo amarelado.', f(NEV)),
    'necrose': t('Morte de células ou de tecido dentro do corpo vivo. Área de necrose não serve para biópsia: o patologista não consegue ver o tecido original. Ex.: na biópsia incisional, tirar o fragmento da borda/transição, não do centro necrótico da úlcera.', f(MAN, NEV)),
    'hemorragia': t('Sangramento abundante. Lesões vasculares (hemangioma, malformação vascular) estão cheias de sangue: cortar sem conhecer a extensão pode dar hemorragia difícil de controlar. Por isso primeiro se faz diascopia e exame de imagem.', f(MAN, NEV)),
    'eletrocautério': t('Bisturi elétrico: corta e coagula com corrente elétrica. NÃO se usa para retirar o fragmento da biópsia, porque o calor queima a borda da peça e estraga o que o patologista precisa ver.', f(MAN)),
    'citologia esfoliativa': t('Raspagem da superfície da lesão com escova ou espátula para ver as células soltas no microscópio. Não substitui a biópsia na suspeita de câncer, porque não mostra a invasão do tecido. Ex.: lesão extensa suspeita de malignidade = biópsia incisional, não só citologia.', f(MAN, NEV)),
    'formol': t('Formol (formaldeído) a 10% é o fixador da biópsia: "congela" o tecido como estava, para não apodrecer. Volume de 10 a 20 vezes o tamanho da peça, em frasco identificado. Ex.: fragmento de 0,5 cm em frasco com uns 10 mL de formol a 10%.', f(MAN)),
    'fixador': t('Líquido que preserva o tecido retirado na biópsia até a análise. O fixador ideal é o formol a 10%, em volume de 10 a 20 vezes o da amostra. Soro, álcool e água estragam a peça.', f(MAN)),
    'fragmento': t('Pedaço de tecido retirado na biópsia incisional, da área mais representativa (borda, transição entre lesão e normal), nunca da necrose. Vai para o laboratório no formol, com o frasco identificado.', f(MAN)),
    'hipóteses de diagnóstico': t('As doenças que o dentista acha que a lesão pode ser, antes da biópsia. Vão escritas na requisição para o patologista junto com nome, idade, sexo, queixa, tempo de evolução, história e descrição da lesão. Ex.: "hipóteses: fibroma, lipoma".', f(MAN)),
    'estrias de Wickham': t('Linhas brancas finas que se cruzam formando um rendilhado, típicas do líquen plano. Na boca aparecem geralmente nas duas bochechas (bilateral). Ex.: paciente com "teia branca" nas duas mucosas jugais, sem queixa.', f(MAN, NEV)),
    'líquen plano': t('Doença inflamatória crônica, de base imunológica, que afeta pele e mucosas. Na boca: estrias de Wickham brancas, bilaterais (forma reticular, sem dor) ou áreas vermelhas e erosões que ardem (forma erosiva). Precisa de acompanhamento; a erosiva trata-se com corticoide tópico.', f(MAN, NEV)),
    'leucoedema': t('Variação da normalidade: véu branco-acinzentado, difuso e bilateral na bochecha, que SOME quando a mucosa é esticada. Mais comum em pessoas negras. Não precisa de tratamento.', f(NEV)),
    'mácula melanótica': t('Mancha marrom pequena (geralmente menos de 1 cm), plana e bem delimitada, por aumento de melanina, mais no lábio inferior e na gengiva. É benigna, mas se mudar de tamanho ou de cor faz-se biópsia para afastar melanoma.', f(MAN, NEV)),
    'fibroma traumático': t('O "fibroma" comum da boca: hiperplasia de tecido conjuntivo causada por trauma repetido (morder a bochecha). Nódulo firme, liso, da cor da mucosa, na linha de mordida. Tratamento: remoção cirúrgica e exame da peça.', f(MAN, NEV)),
    'mucosa queratinizada': QUER, 'queratinizada': QUER,
    'gengiva inserida': t('Parte da gengiva presa firmemente ao osso, entre a gengiva livre (junto ao dente) e a mucosa alveolar (móvel, mais vermelha). É queratinizada e de cor rosa-coral; é o local típico da pigmentação fisiológica.', f(KAT, MAN)),
    'palato duro': t('Parte da frente do céu da boca, com osso por baixo; mucosa queratinizada e firme. Local do tórus palatino (na linha média) e da estomatite nicotínica.', f(KAT, MAN)),
    'palato mole': t('Parte de trás do céu da boca, sem osso, móvel, com mucosa não queratinizada. Sobe para fechar a passagem para o nariz quando a pessoa engole.', f(KAT)),
    'ventre da língua': t('Face de baixo da língua: mucosa fina, não queratinizada, com veias visíveis. Junto com a borda da língua e o assoalho, é área de risco para o câncer de boca; local das varizes linguais.', f(KAT, MAN)),
    'dorso da língua': t('Face de cima da língua, coberta de papilas (filiformes, fungiformes e, atrás, as valadas no V lingual). Local da língua geográfica, da língua fissurada, da língua pilosa e da glossite rombóide mediana.', f(KAT, MAN)),
    'assoalho': t('Assoalho da boca: região embaixo da língua, com mucosa fina e as saídas das glândulas submandibular e sublingual. Local da rânula e uma das áreas de maior risco para o câncer de boca.', f(KAT, MAN)),
    'amálgama': t('Material de restauração metálico (prata, estanho, cobre, mercúrio). Partículas que entram na mucosa durante a restauração ou a extração deixam uma mancha azul-acinzentada permanente: a tatuagem por amálgama. Na radiografia, às vezes aparecem pontinhos radiopacos.', f(MAN, NEV)),
    'xerostomia': t('Sensação de boca seca, geralmente por menos saliva (remédios, radioterapia, Síndrome de Sjögren, idade). Sem saliva, a Candida e as cáries aumentam.', f(NEV)),
    'corticoide': t('Remédio anti-inflamatório e imunossupressor (ex.: dexametasona, prednisona; em bombinha para asma, a beclometasona). Na boca, o uso favorece candidose; por isso se orienta bochechar água depois da bombinha. Em gel, trata líquen plano erosivo e aftas.', f(MAN, NEV)),
    'imunossupressão': t('Defesa do corpo diminuída (HIV, quimioterapia, transplante, corticoide em dose alta, diabetes descompensado). Favorece candidose, herpes, leucoplasia pilosa e sarcoma de Kaposi.', f(NEV))
  };

  var W = 'https://upload.wikimedia.org/wikipedia/commons/';
  var E = 'img/estomato/', M = 'img/melanoma/';
  var I = {
    ranula: [E + 'ranula.jpg', 'Rânula: aumento de volume mole e azulado no assoalho, ao lado da linha média.', 'Foto do assoalho da boca com bolha grande azulada', 'Dikkisherpa5, CC0'],
    mel1: [M + '01-melanoma-primario-palato-duro.jpg', 'Melanoma no palato duro: mancha preto-acastanhada irregular.', 'Palato com mancha escura irregular', 'Abati S e cols., Cancers 2024, CC BY 4.0'],
    mel3: [M + '03-melanoma-amelanotico-palato.jpg', 'Melanoma sem pigmento no palato: melanoma nem sempre é preto.', 'Dois tumores avermelhados no palato', 'de Arruda JAA e cols., Head Neck Pathol 2026, CC BY 4.0'],
    macula: [M + '09-macula-melanotica-gengiva.jpg', 'Mácula melanótica: mancha marrom única e bem delimitada na gengiva.', 'Gengiva com mancha marrom pequena', 'Abati S e cols., Cancers 2024, CC BY 4.0'],
    vasc: [E + 'lesao-vascular-labio.jpg', 'Lesão vascular azul-arroxeada no lábio (lago venoso).', 'Lábio com nódulo azul-arroxeado', 'Thomas P. Habif, CC BY-SA 3.0'],
    torusM: [E + 'torus-mandibular.jpg', 'Tórus mandibular: exostoses na lingual da mandíbula, na altura dos pré-molares.', 'Mandíbula vista por dentro com saliências ósseas', 'Dozenist, CC BY-SA 3.0'],
    torusP: [E + 'torus-palatino.jpg', 'Tórus palatino: exostose na linha média do palato.', 'Palato com saliência óssea no meio', 'Kozlovsk, CC BY-SA 3.0'],
    pilosa1: [E + 'lingua-pilosa-1.jpg', 'Língua pilosa negra: papilas alongadas e escurecidas no dorso.', 'Dorso da língua escurecido', 'Com4 (Wikipedia em inglês), domínio público'],
    pilosa2: [E + 'lingua-pilosa-2.jpg', 'Outro caso de língua pilosa negra.', 'Língua com dorso preto e aspecto peludo', 'Mohammad2018, CC BY-SA 4.0'],
    carLin: [E + 'carcinoma-lingua.jpg', 'Carcinoma epidermoide na borda da língua.', 'Língua com lesão ulcerada na borda', 'Dikkisherpa5, CC0'],
    carLab: [E + 'carcinoma-labio.jpg', 'Carcinoma epidermoide no lábio inferior.', 'Lábio inferior com lesão ulcerada', 'Coronation Dental Specialty Group, CC BY-SA 4.0'],
    afta: [E + 'afta.jpg', 'Afta: úlcera rasa, fundo amarelado (fibrina) e halo vermelho.', 'Úlcera pequena e amarelada na mucosa', 'autor não informado, domínio público'],
    aftaLab: [E + 'afta-labio.jpg', 'Afta na mucosa do lábio inferior (círculo do autor).', 'Mucosa do lábio com úlcera circulada', 'Farhan 9909, CC BY-SA 4.0'],
    wick: [E + 'liquen-wickham.jpg', 'Estrias de Wickham: rendilhado branco do líquen plano.', 'Mucosa com linhas brancas entrelaçadas', 'James, Candice, Mai, CC BY-SA 3.0'],
    liquen: [E + 'liquen-plano.jpg', 'Líquen plano na mucosa jugal.', 'Bochecha por dentro com estrias brancas', 'Ian Furst, CC BY-SA 4.0'],
    liqEr: [E + 'liquen-erosivo.jpg', 'Líquen plano erosivo: áreas vermelhas com estrias brancas.', 'Mucosa vermelha com bordas brancas', 'Syed Wali Peeran, CC BY-SA 4.0'],
    fibLab: [E + 'fibroma-labio.jpg', 'Fibroma traumático: nódulo firme, liso, cor da mucosa.', 'Nódulo liso na mucosa do lábio', 'Dentist24, CC0'],
    fibBoc: [E + 'fibroma-bochecha.jpg', 'Fibroma na bochecha, na linha de mordida.', 'Nódulo na mucosa jugal', 'Klaus D. Peter, CC BY 3.0 DE'],
    candL: [E + 'candidiase-lingua.jpg', 'Candidose pseudomembranosa: placas brancas que saem na raspagem.', 'Língua com placas brancas', 'James Heilman, CC BY-SA 3.0'],
    candP: [E + 'candidiase-palato.jpg', 'Candidose no palato.', 'Palato com placas brancas', 'CDC/Sol Silverman Jr., domínio público'],
    mucocele: [E + 'mucocele.jpg', 'Mucocele: bolha mole no lábio inferior, de glândula salivar menor.', 'Lábio inferior com bolha translúcida', 'Dozenist, CC BY-SA 3.0'],
    pigm: [M + '07-pigmentacao-racial-gengiva.jpg', 'Pigmentação fisiológica na gengiva inserida.', 'Gengiva com faixa marrom', 'Abati S e cols., Cancers 2024, CC BY 4.0'],
    tatu: [E + 'tatuagem-amalgama.jpg', 'Tatuagem por amálgama: mancha azul-acinzentada.', 'Gengiva com mancha cinza-azulada', 'Bin im Garten, CC BY-SA 3.0'],
    geo: [E + 'lingua-geografica-1.jpg', 'Língua geográfica no dorso da língua.', 'Dorso da língua com manchas vermelhas de borda branca', 'Martanopue/Jbarta, CC BY-SA 3.0'],
    fiss: [E + 'lingua-fissurada-1.jpg', 'Língua fissurada: sulcos no dorso acumulam biofilme.', 'Dorso da língua com sulcos', 'Kozlovsk, CC BY-SA 3.0'],
    varic: [E + 'varicosidade-sublingual.jpg', 'Varizes no ventre da língua.', 'Ventre da língua com vasos arroxeados', 'Hedström L, Albrektsson M, Bergh H, CC BY 4.0'],
    leuco: [E + 'leucoplasia.jpg', 'Leucoplasia homogênea: placa branca que não raspa.', 'Mucosa com placa branca', 'NIH/NIDCR, domínio público'],
    granul: [E + 'granuloma-piogenico-sangra.jpg', 'Granuloma piogênico sangrando: tecido parecido com tecido de granulação.', 'Lesão vermelha sangrando na gengiva', 'Amirchaghmaghi M e cols., CC BY-SA 2.0']
  };
  var F = {
    'rânula': ['ranula'], 'melanoma': ['mel1', 'mel3'], 'mácula melanótica': ['macula'], 'malformação vascular': ['vasc'],
    'exostose': ['torusM', 'torusP'], 'língua pilosa': ['pilosa1', 'pilosa2'],
    'carcinoma epidermoide': ['carLin', 'carLab'], 'câncer de boca': ['carLin', 'carLab'],
    'afta': ['afta', 'aftaLab'], 'fibrina': ['afta'], 'estrias de Wickham': ['wick'], 'líquen plano': ['liquen', 'wick', 'liqEr'],
    'fibroma traumático': ['fibLab', 'fibBoc'], 'Candida': ['candL', 'candP'], 'microbiota': ['candL'], 'antibiótico': ['candL'],
    'glândula salivar': ['mucocele', 'ranula'], 'gengiva inserida': ['pigm'], 'amálgama': ['tatu'],
    'dorso da língua': ['geo', 'fiss'], 'biofilme': ['fiss', 'pilosa1'], 'ventre da língua': ['varic'], 'assoalho': ['ranula'],
    'palato duro': ['torusP'], 'tecido de granulação': ['granul'], 'hemorragia': ['granul', 'vasc']
  };
  /*COMMONS-INI*/
  (function () { var IC = {
 "epitNQ": [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/A_classic_view_of_non-keratinized_stratified_squamous_epithelium.jpg/960px-A_classic_view_of_non-keratinized_stratified_squamous_epithelium.jpg",
  "Epitélio pavimentoso estratificado NÃO queratinizado no microscópio (o da bochecha e do ventre da língua).",
  "Lâmina com camadas de células epiteliais coradas",
  "Photograper09, CC BY-SA 4.0 (Wikimedia Commons)"
 ],
 "adiposo": [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Adipose_tissue_with_crumpling_artifact_due_to_insufficient_fixation.jpg/960px-Adipose_tissue_with_crumpling_artifact_due_to_insufficient_fixation.jpg",
  "Tecido adiposo no microscópio: células grandes e vazias (a gordura sai no preparo da lâmina).",
  "Lâmina com células grandes e claras de contorno fino",
  "Mikael Häggström, CC0 (Wikimedia Commons)"
 ],
 "queilite": [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Angular_Cheilitis_2.jpg/120px-Angular_Cheilitis_2.jpg",
  "Queilite angular: fissura avermelhada no canto da boca.",
  "Canto da boca com fissura vermelha",
  "Lesion, CC BY-SA 3.0 (Wikimedia Commons)"
 ],
 "punch": [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Punch_Biopsy.jpg/960px-Punch_Biopsy.jpg",
  "Punch para biópsia: tira um cilindro de tecido.",
  "Instrumento de biópsia tipo punch",
  "Ajay Kumar Chaurasiya, CC BY-SA 4.0 (Wikimedia Commons)"
 ],
 "eletro": [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Electrosurgery.jpg/960px-Electrosurgery.jpg",
  "Bisturi elétrico (eletrocautério) em uso numa cirurgia de lipoma.",
  "Ponta de bisturi elétrico sobre tecido em cirurgia",
  "Jclemens, CC BY-SA 4.0 (Wikimedia Commons)"
 ],
 "g1014": [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Gray1014.png/500px-Gray1014.png",
  "Boca aberta (Gray): no dorso da língua, as papilas valadas em V e, atrás, a tonsila lingual.",
  "Desenho anatômico da cavidade da boca com a língua puxada",
  "Henry Vandyke Carter, Gray's Anatomy 1918, domínio público (Wikimedia Commons)"
 ],
 "dentadura": [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Making_of_complete_denture_31.JPG/960px-Making_of_complete_denture_31.JPG",
  "Prótese total (dentadura) em confecção.",
  "Prótese total sobre modelo",
  "Werneuchen, domínio público (Wikimedia Commons)"
 ],
 "dentadura2": [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Making_of_complete_denture_28.JPG/960px-Making_of_complete_denture_28.JPG",
  "Prótese total: dentes montados na base.",
  "Prótese total vista de perto",
  "Werneuchen, domínio público (Wikimedia Commons)"
 ],
 "periodonto": [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Periodontium.svg/330px-Periodontium.svg.png",
  "Periodonto: gengiva (inclusive a inserida), ligamento, cemento e osso (em inglês).",
  "Esquema do dente com gengiva e osso em volta",
  "Goran tek-en, CC BY-SA 4.0 (Wikimedia Commons)"
 ],
 "rankl1": [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Rank_Ligand_Inhibition_Osteoporosis.jpg/960px-Rank_Ligand_Inhibition_Osteoporosis.jpg",
  "Como o denosumabe age: bloqueia o RANKL e o osteoclasto não se forma (em inglês).",
  "Esquema do bloqueio do RANKL",
  "CodeSwitch, CC0 (Wikimedia Commons)"
 ],
 "rankl2": [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/RANKL_inhibition_with_antibody_DE.svg/960px-RANKL_inhibition_with_antibody_DE.svg.png",
  "Denosumabe (anticorpo) no sistema RANK/RANKL/OPG (em alemão).",
  "Esquema de anticorpo bloqueando RANKL",
  "Benff, CC BY-SA 4.0 (Wikimedia Commons)"
 ],
 "amalg": [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Amalgam_filling.JPG/330px-Amalgam_filling.JPG",
  "Restauração de amálgama (metálica) num molar.",
  "Dente com restauração prateada",
  "autor no Commons, ver página do arquivo (Wikimedia Commons)"
 ]
};
  var FC = {
 "mucosa queratinizada": [
  "epitNQ"
 ],
 "queratinizada": [
  "epitNQ"
 ],
 "tecido adiposo": [
  "adiposo"
 ],
 "lipoma": [
  "adiposo",
  "eletro"
 ],
 "queilite angular": [
  "queilite"
 ],
 "biópsia": [
  "punch"
 ],
 "biópsia incisional": [
  "punch"
 ],
 "biópsia excisional": [
  "eletro"
 ],
 "fragmento": [
  "punch"
 ],
 "eletrocautério": [
  "eletro"
 ],
 "tonsila lingual": [
  "g1014"
 ],
 "papilas valadas": [
  "g1014"
 ],
 "palato mole": [
  "g1014"
 ],
 "prótese": [
  "dentadura",
  "dentadura2"
 ],
 "estomatite protética": [
  "dentadura"
 ],
 "gengiva inserida": [
  "periodonto"
 ],
 "denosumab": [
  "rankl1",
  "rankl2"
 ],
 "denosumabe": [
  "rankl1",
  "rankl2"
 ]
};
  Object.assign(I, IC); Object.keys(FC).forEach(function (k) { F[k] = (F[k] || []).concat(FC[k]); }); })();
  /*COMMONS-FIM*/
  var g = B.glossario = B.glossario || {};
  Object.keys(G).forEach(function (k) { if (!g[k]) g[k] = G[k]; });
  var feitos = [];
  Object.keys(F).forEach(function (k) {
    var v = g[k]; if (!v) return;
    if (typeof v === 'string') v = g[k] = { d: v };
    if (feitos.indexOf(v) >= 0) v = g[k] = { d: v.d, fonte: v._f0 };
    var lista = F[k].map(function (id) { return I[id]; }).filter(Boolean); if (!lista.length) return;
    v._f0 = v._f0 || v.fonte;
    v.img = [].concat(v.img || []); v.legs = v.legs || []; v.alts = v.alts || [];
    while (v.legs.length < v.img.length) v.legs.push('Figura do ' + MAN);
    while (v.alts.length < v.img.length) v.alts.push('Foto clínica: ' + k);
    var cred = [];
    lista.forEach(function (x) { if (v.img.indexOf(x[0]) < 0) { v.img.push(x[0]); v.legs.push(x[1]); v.alts.push(x[2]); if (cred.indexOf(x[3]) < 0) cred.push(x[3]); } });
    if (cred.length) v.fonte = (v.fonte ? v.fonte + '. ' : '') + 'Imagens: ' + cred.join('; ');
    feitos.push(v);
  });
  feitos.forEach(function (v) { delete v._f0; });
})();
