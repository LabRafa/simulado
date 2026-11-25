/* Glossário de Imaginologia aplicada à patologia (balões). Montado em 25/11/2026.
   Texto: palestra de Imaginologia (10/11/2026, material da matéria) + livros de referência
   (White & Pharoah, Radiologia Oral: Princípios e Interpretação; Neville et al., Patologia Oral e Maxilofacial).
   Imagens: esquemas e radiografias da própria matéria (img/imagino) e Wikimedia Commons por link direto (licença livre, crédito no fonte). */
(function () {
  var B = window.BANCOS && window.BANCOS.imagino; if (!B) return;
  var PAL = 'Palestra de Imaginologia aplicada à patologia (10/11/2026)';
  var WP = 'White & Pharoah, Radiologia Oral: Princípios e Interpretação';
  var NEV = 'Neville et al., Patologia Oral e Maxilofacial';
  var f = function () { return [].slice.call(arguments).join('; '); };
  var t = function (d, fonte) { return { d: d, fonte: fonte }; };

  var RL = t('Radiolúcido = escuro na radiografia. A estrutura é pouco densa (pouco mineralizada) e deixa o raio X passar até o filme ou sensor. Ex.: cisto (interior líquido), seio maxilar, canal mandibular, polpa.', f(PAL, WP));
  var RO = t('Radiopaco = claro (branco) na radiografia. A estrutura é densa e barra o raio X. Ex.: esmalte, osso cortical, restauração metálica, odontoma.', f(PAL, WP));
  var CORT = t('Cortical = a camada externa, compacta e densa do osso (a "casca"), que aparece como linha branca. Na mandíbula se fala em cortical vestibular e lingual; lesão de crescimento lento abaula (estufa) a cortical, lesão agressiva pode rompê-la.', f(PAL, WP));
  var CORTZ = t('Borda corticalizada (ou corticada) = a lesão é contornada por uma linha branca (radiopaca) bem marcada: o osso teve tempo de "murar" a lesão. Sugere crescimento lento, como nos cistos.', f(PAL, WP));
  var PERI = t('Radiografia periapical: radiografia intraoral que mostra poucos dentes inteiros, da coroa ao ápice, e o osso em volta. É o exame de DETALHE (ápice, lâmina dura, ligamento).', f(PAL, WP));
  var TC = t('Tomografia computadorizada de feixe cônico (TCFC, ou cone beam): exame em 3D, em cortes, sem a sobreposição da radiografia comum. Mostra as corticais vestibular e lingual e a extensão real da lesão; costuma ser pedida quando ainda há dúvida.', f(PAL, WP));
  var HISTO = t('Exame histopatológico: análise no microscópio do tecido retirado na biópsia, feita pelo patologista. Junto com a clínica e a imagem, é o que fecha o diagnóstico.', f(PAL, NEV));
  var DCO = t('Displasia cemento-óssea: lesão fibro-óssea benigna em que o osso normal é trocado por tecido fibroso e depois por material parecido com cemento e osso. Os dentes têm VITALIDADE. Passa por fases: radiolúcida (inicial), mista e radiopaca (madura). Não se opera: acompanha-se.', f(PAL, NEV));
  var INC = t('Dente incluso = dente que não erupcionou (ficou dentro do osso) depois da época normal. Os mais comuns são terceiros molares e caninos superiores. Em volta da coroa existe o folículo (espaço pericoronário).', f(PAL, NEV));
  var VIT = t('Vitalidade pulpar = a polpa do dente está viva e responde a estímulos. Testa-se com frio (gás refrigerante) ou teste elétrico. Dente SEM vitalidade com imagem no ápice faz pensar em lesão periapical inflamatória; dente COM vitalidade, em displasia ou anatomia.', f(PAL, 'Lopes & Siqueira, Endodontia: Biologia e Técnica'));
  var MULTI = t('Multilocular = lesão com várias cavidades (lojas), separadas por septos ósseos, mesmo que os septos sejam incompletos. Ex.: ameloblastoma, mixoma odontogênico, ceratocisto.', f(PAL, WP));
  var DIFUSA = t('Borda difusa = borda borrada, que se mistura com o osso normal: não dá para dizer onde a lesão termina. É sinal de alerta para comportamento mais agressivo (infecção ativa, lesão maligna).', f(PAL, WP));

  var G = {
    'radiolúcida': RL, 'radiolúcido': RL, 'radiolucidez': RL,
    'radiopaca': RO, 'radiopaco': RO, 'radiopacidade': RO,
    'cortical': CORT, 'corticais': CORT,
    'corticalizada': CORTZ, 'corticada': CORTZ, 'corticado': CORTZ,
    'periapical': PERI,
    'tomografia': TC, 'TCFC': TC,
    'histopatológico': HISTO, 'histopatologia': HISTO,
    'displasia cemento-óssea': DCO,
    'incluso': INC,
    'vitalidade': VIT,
    'multilocular': MULTI,
    'difusa': DIFUSA,
    'panorâmica': t('Radiografia panorâmica: uma só imagem extraoral que mostra os dois maxilares, todos os dentes, os seios maxilares e as ATMs. É o exame de visão geral e de triagem; perde detalhe e tem sobreposições e distorções.', f(PAL, WP)),
    'biópsia': t('Retirada de um pedaço (incisional) ou da lesão inteira (excisional) para o exame histopatológico. Na dúvida sobre uma lesão, a conduta é biopsiar: a imagem sozinha não fecha o diagnóstico.', f(PAL, NEV)),
    'unilocular': t('Unilocular = lesão com uma única cavidade, sem septos dentro. É o aspecto típico dos cistos (radicular, dentígero, residual).', f(PAL, WP)),
    'septo': t('Septo ósseo = parede fina de osso que divide uma lesão em lojas. Septos, mesmo incompletos, fazem a lesão ser classificada como multilocular. Septos retos lembram "raquete de tênis"; curvos, "bolhas de sabão".', f(PAL, WP)),
    'esmalte': t('Esmalte = a camada mais externa da coroa do dente e o tecido mais mineralizado do corpo (cerca de 96% de mineral). Por isso é a estrutura MAIS RADIOPACA (mais clara) do dente na radiografia.', f(WP, 'Katchburian & Arana, Histologia e Embriologia Oral')),
    'bidimensional': t('A radiografia comum é bidimensional (2D): estruturas que estão em profundidades diferentes aparecem uma por cima da outra (sobreposição). Por isso o forame mentual pode "cair" sobre o ápice de um pré-molar. A tomografia, em 3D, acaba com essa dúvida.', f(PAL, WP)),
    'achado incidental': t('Achado incidental = lesão descoberta por acaso, num exame pedido por outro motivo (ex.: panorâmica de rotina), em paciente sem queixa. Mostra o valor da panorâmica como exame de triagem.', f(PAL, WP)),
    'forame mentual': t('Abertura na face externa da mandíbula, perto dos ápices dos pré-molares inferiores, por onde sai o nervo mentual. Na radiografia é uma imagem radiolúcida redonda que pode imitar lesão periapical: variando a angulação HORIZONTAL, o forame "sai" do ápice; a lesão continua presa a ele.', f(PAL, WP)),
    'forame incisivo': t('Abertura na linha média do palato, atrás dos incisivos centrais superiores, por onde passam o nervo e os vasos nasopalatinos. Na radiografia aparece radiolúcido entre os incisivos, acima dos ápices: é anatomia normal, que pode ser confundida com o cisto do ducto nasopalatino.', f(PAL, WP)),
    'seio maxilar': t('Cavidade cheia de ar dentro da maxila, acima dos ápices dos pré-molares e molares superiores. Na radiografia é uma área radiolúcida grande, com contorno radiopaco: estrutura normal.', f(PAL, WP)),
    'cavidade nasal': t('Fossa nasal: espaço cheio de ar acima do palato. Na panorâmica aparece radiolúcida, acima dos dentes anteriores superiores. Estrutura normal.', f(PAL, WP)),
    'canal mandibular': t('Canal dentro da mandíbula por onde correm o nervo e os vasos alveolares inferiores, abaixo dos ápices dos molares. Na radiografia é uma faixa radiolúcida entre duas linhas radiopacas: anatomia normal, importante em extração de terceiro molar e implante.', f(PAL, WP)),
    'palato duro': t('Parte óssea do céu da boca (processos palatinos da maxila e lâminas horizontais do palatino). Na panorâmica aparece como faixa radiopaca horizontal acima dos ápices superiores.', f(PAL, WP)),
    'base da mandíbula': t('Borda inferior da mandíbula, formada por osso cortical espesso. Na panorâmica é uma faixa radiopaca bem marcada: estrutura normal.', f(PAL, WP)),
    'côndilo': t('Cabeça da mandíbula, que se articula com o osso temporal na ATM. Na panorâmica aparece radiopaco, nas extremidades, à frente da orelha.', f(PAL, WP)),
    'mandíbula': t('Osso da arcada inferior, o único osso móvel da face. Lesões odontogênicas grandes, como o ameloblastoma, são mais comuns na região posterior da mandíbula.', f(NEV, WP)),
    'lâmina dura': t('Linha radiopaca fina que contorna o alvéolo em volta da raiz (é a cortical do alvéolo). Íntegra no dente saudável; interrompida no ápice faz pensar em lesão periapical inflamatória.', f(PAL, WP)),
    'angulação horizontal': t('Mudar a direção do feixe de raio X para mesial ou distal (no plano horizontal) entre duas tomadas. Estruturas que estão em profundidades diferentes "andam" uma em relação à outra: se a imagem sai do ápice, é anatomia (ex.: forame mentual); se continua presa ao ápice, é lesão daquele dente.', f(PAL, WP)),
    'abaulamento': t('Abaulamento = a lesão estufa o osso e deixa a cortical fina, "como casca de ovo", sem rompê-la. Junto com o deslocamento de dentes, sugere crescimento lento.', f(PAL, WP)),
    'deslocamento dentário': t('A lesão empurra os dentes vizinhos para os lados (dentes afastados e inclinados). Para isso ela precisa crescer devagar; por isso sugere comportamento menos agressivo.', f(PAL, WP)),
    'reabsorção radicular': t('Perda de parte da raiz: na radiografia a raiz termina "cortada" reta sobre a lesão. É um dos efeitos da lesão nos vizinhos; típica do ameloblastoma.', f(PAL, WP)),
    'flutuantes': t('Dentes "flutuantes" = dentes que ficaram sem osso em volta, como se boiassem na lesão, porque o osso foi destruído sem os dentes serem empurrados. Foi citado como característica de lesões malignas.', f(PAL, WP)),
    'patognomônico': t('Patognomônico = sinal que, sozinho, garante o diagnóstico de uma doença. Nenhuma das analogias da radiologia (bolhas de sabão, raquete de tênis, raios de sol) é patognomônica: só ajudam a levantar hipóteses.', f(PAL, NEV)),
    'cisto': t('Cisto = cavidade patológica revestida por epitélio e com conteúdo líquido ou semissólido. Como o interior é pouco denso, aparece radiolúcido, geralmente unilocular, bem definido e corticalizado.', f(PAL, NEV)),
    'cisto radicular': t('Cisto inflamatório que nasce no ápice de um dente SEM vitalidade (cárie profunda ou trauma), a partir dos restos epiteliais de Malassez. Radiolúcido, unilocular, bem definido, preso ao ápice. É o cisto mais comum dos maxilares.', f(PAL, NEV)),
    'cisto residual': t('Cisto radicular que ficou no osso depois que o dente foi extraído. Aparece como área radiolúcida bem definida exatamente na região da extração, onde não há mais dente.', f(PAL, NEV)),
    'cisto dentígero': t('Cisto que se forma em volta da COROA de um dente incluso, preso ao colo do dente. Radiolúcido, unilocular, bem definido e corticado; mais comum em terceiros molares inferiores e caninos superiores. Espaço pericoronário de 4 a 6 mm ou mais já faz pensar nele.', f(PAL, NEV)),
    'cisto periodontal lateral': t('Cisto de desenvolvimento que aparece AO LADO da raiz de um dente com vitalidade, mais na região de canino e pré-molares inferiores. Radiolúcido, pequeno e bem definido.', f(PAL, NEV)),
    'cisto gengival': t('Cisto pequeno de tecido mole, na gengiva, que pode nem aparecer na radiografia. No adulto é mais comum na região de canino e pré-molares inferiores.', f(PAL, NEV)),
    'cisto de erupção': t('Cisto dentígero que fica no tecido mole, sobre a coroa de um dente em erupção: aparece como um aumento de volume azulado na gengiva da criança.', f(PAL, NEV)),
    'ceratocisto': t('Ceratocisto odontogênico: cisto de comportamento mais agressivo, revestido por epitélio que produz ceratina, com alta taxa de recidiva. Mais comum na região posterior da mandíbula; cresce pelo interior do osso, uni ou multilocular. Ceratocistos múltiplos lembram a síndrome de Gorlin.', f(PAL, NEV)),
    'pericoronário': t('Espaço pericoronário = o espaço radiolúcido em volta da coroa de um dente incluso, ocupado pelo folículo dentário. Normal até uns 3 mm; com 4 a 6 mm ou mais já se pensa em cisto dentígero (com o folículo aumentado como diferencial).', f(PAL, NEV)),
    'folículo': t('Folículo dentário = saco de tecido conjuntivo que envolve a coroa do dente em formação. Em volta do dente incluso ele dá o espaço pericoronário normal; aumentado, é diferencial do cisto dentígero.', f(PAL, NEV)),
    'terceiro molar': t('O dente do siso, último molar de cada lado. É o dente que mais fica incluso, e o mais associado ao cisto dentígero.', f(PAL, NEV)),
    'ameloblastoma': t('Tumor odontogênico BENIGNO, mas localmente agressivo. Mais comum na região posterior da mandíbula; radiolúcido, multilocular (bolhas de sabão) ou unilocular, abaula a cortical e reabsorve raízes. O tratamento costuma exigir remoção com margem de segurança (ressecção).', f(PAL, NEV)),
    'ameloblastoma unicístico': t('Variante do ameloblastoma com uma única cavidade, muitas vezes em volta da coroa de um dente incluso, imitando cisto dentígero. Por isso entra no diferencial do cisto dentígero.', f(PAL, NEV)),
    'odontoma': t('Tumor odontogênico mais comum, na verdade um hamartoma: um "nó" de esmalte, dentina, cemento e polpa. Radiopaco com halo radiolúcido em volta, bem definido; costuma ficar sobre um dente que não erupcionou e impedir a erupção.', f(PAL, NEV)),
    'odontoma composto': t('Odontoma formado por várias estruturas parecidas com dentes pequenos (dentículos), mais comum na região anterior da maxila. O odontoma complexo, ao contrário, é uma massa sem forma de dente.', f(PAL, NEV)),
    'mixoma odontogênico': t('Tumor odontogênico benigno, de tecido parecido com a polpa embrionária. Radiolúcido, multilocular, com septos finos e retos, lembrando cordas de raquete de tênis.', f(PAL, NEV)),
    'osteossarcoma': t('Tumor ósseo MALIGNO. Nos maxilares pode mostrar espículas de osso novo saindo do osso em linhas, o aspecto de "raios de sol", e alargamento do ligamento periodontal.', f(PAL, NEV)),
    'osteíte condensante': t('Esclerose óssea reacional: radiopacidade difusa no ápice de um dente com cárie profunda e inflamação pulpar. O osso reage à inflamação crônica ficando mais denso. Conduta: tratar a causa (canal).', f(PAL, NEV)),
    'osteoesclerose idiopática': t('Área de osso mais denso sem causa conhecida, em dente com vitalidade: radiopacidade bem definida, sem halo, às vezes perto do ápice. Não é doença; nada a tratar.', f(PAL, NEV)),
    'hipercementose': t('Depósito exagerado de cemento na raiz, que fica engrossada ("bulbosa") na radiografia, com o espaço do ligamento e a lâmina dura em volta. Dente vital; nada a tratar.', f(PAL, NEV)),
    'cementoblastoma': t('Tumor odontogênico benigno de cemento: massa radiopaca FUNDIDA à raiz, com halo radiolúcido em volta, mais em molares inferiores. Conduta: remoção cirúrgica (geralmente com o dente).', f(PAL, NEV)),
    'osteoma': t('Tumor benigno de osso maduro e compacto: massa radiopaca. Osteomas múltiplos nos maxilares, em pessoa jovem, fazem pensar em síndrome de Gardner.', f(PAL, NEV)),
    'síndrome de Gardner': t('Doença hereditária (autossômica dominante) com pólipos no intestino que tendem a virar câncer, osteomas múltiplos nos maxilares, dentes supranumerários e inclusos. Achar osteomas na radiografia pode antecipar o diagnóstico.', f(PAL, NEV)),
    'cementoma gigantiforme familiar': t('Lesão fibro-óssea rara e hereditária, que aparece cedo (infância/adolescência) com massas radiopacas grandes em vários quadrantes e expande os maxilares.', f(PAL, NEV)),
    'supranumerário': t('Dente supranumerário = dente a mais que o número normal. Aparece radiopaco, com forma de dente, e é diferencial do odontoma.', f(PAL, NEV)),
    'bolhas de sabão': t('Analogia para a lesão multilocular com lojas arredondadas de tamanhos diferentes, como bolhas. Faz pensar em ameloblastoma, mas não é patognomônica.', f(PAL, WP)),
    'raquete de tênis': t('Analogia para a lesão multilocular com septos finos e RETOS, cruzados como as cordas de uma raquete. Faz pensar em mixoma odontogênico.', f(PAL, WP)),
    'raios de sol': t('Analogia para espículas de osso que saem da lesão em linhas, como raios. Faz pensar em osteossarcoma.', f(PAL, WP)),
    'roído de traça': t('Analogia para destruição óssea irregular, com várias áreas radiolúcidas mal definidas que se juntam, como pano roído por traça. Sinal de lesão agressiva (osteomielite, malignidade).', f(PAL, WP)),
    'dentículo': t('Estruturas radiopacas pequenas com forma de dentes, vistas no odontoma composto.', f(PAL, NEV)),
    'ressecção': t('Ressecção = retirada cirúrgica de um segmento do osso junto com a lesão, com margem de segurança. Usada no ameloblastoma; depois se reconstrói (enxerto, placa, implantes).', f(PAL, NEV)),
    'margem de segurança': t('Faixa de tecido aparentemente sadio retirada em volta da lesão para não deixar células da lesão para trás e diminuir a recidiva.', f(PAL, NEV)),
    'ilíaco': t('Osso do quadril. A crista ilíaca é doadora comum de enxerto ósseo para reconstruir a mandíbula depois de uma ressecção.', f(NEV, 'Gray, Anatomia')),
    'tratamento de canal': t('Tratamento endodôntico: limpeza, modelagem e obturação dos canais da raiz. É a conduta da lesão periapical inflamatória (ou a extração), porque tira a causa: a polpa necrosada e infectada.', f(PAL, 'Lopes & Siqueira, Endodontia: Biologia e Técnica')),
    'lesão periapical inflamatória': t('Lesão no ápice de dente SEM vitalidade (cárie ou trauma): granuloma, cisto radicular ou abscesso. Radiolúcida, unilocular, bem definida, com a lâmina dura interrompida no ápice. Conduta: tratar a causa (canal ou extração).', f(PAL, NEV)),
    'crescimento lento': t('Lesão que cresce devagar dá tempo ao osso de reagir: forma linha cortical em volta (borda corticalizada), empurra os dentes e estufa a cortical sem rompê-la. É o comportamento típico de cistos e de muitas lesões benignas.', f(PAL, WP)),
    'sinal de alerta': t('Achado da imagem que pede mais atenção por sugerir comportamento agressivo: borda difusa, rompimento da cortical, dentes "flutuantes", aspecto de roído de traça ou raios de sol. Não fecha diagnóstico, mas acelera a biópsia.', f(PAL, WP)),
    'borda': t('Borda (ou limite) da lesão: uma das 4 perguntas da leitura da imagem. Corticalizada (linha branca, cresce devagar), bem definida (intermediária) ou difusa (borrada, sinal de alerta).', f(PAL, WP)),
    '4 perguntas': t('Roteiro de leitura de qualquer lesão na imagem: 1) onde está? 2) é clara ou escura (radiopaca, radiolúcida ou mista)? 3) como é a borda? 4) o que faz com os vizinhos (desloca, reabsorve, abaula, rompe)?', f(PAL, WP)),
    'diferencial': t('Diagnóstico diferencial = a lista de outras lesões que podem dar uma imagem parecida e que precisam ser descartadas antes de fechar o diagnóstico.', f(PAL, NEV)),
    'diferenciais': t('Diagnósticos diferenciais = as outras lesões que podem dar uma imagem parecida com a da hipótese principal e precisam ser descartadas.', f(PAL, NEV)),
    'pense em cavalos': t('Frase clássica do raciocínio clínico ("quando ouvir cascos, pense em cavalos, não em zebras"): começar pela hipótese mais frequente e mais óbvia, e só depois listar as raras (as "zebras") como diferenciais.', f(PAL, 'aforismo atribuído a Theodore Woodward (anos 1940)')),
    'conduta': t('Conduta = o que fazer com o paciente depois de montar a hipótese: acompanhar (displasia, osteoesclerose), tratar a causa (lesão periapical inflamatória) ou operar o quanto antes (ameloblastoma, ceratocisto). Na dúvida, biópsia.', f(PAL, NEV)),
    'cárie': t('Doença causada pelo biofilme que dissolve esmalte e dentina com ácido. Na radiografia aparece radiolúcida na coroa; cárie profunda leva à morte da polpa e à lesão no ápice.', f(PAL, 'Fejerskov & Kidd, Cárie Dentária'))
  };

  /* imagens: [url, legenda, alt, crédito] */
  var W = 'https://upload.wikimedia.org/wikipedia/commons/';
  var L = 'img/imagino/', CL = 'esquema/radiografia da palestra de Imaginologia (10/11/2026), material da matéria';
  var I = {
    pan: [L + 'panoramica-numerada.jpg', 'Esquema de panorâmica: estruturas normais numeradas.', 'Esquema de radiografia panorâmica com estruturas numeradas', CL],
    multi: [L + 'multilocular-real.jpg', 'Lesão escura com várias lojas separadas por septos: multilocular.', 'Recorte de radiografia com lesão de várias cavidades', CL],
    bordaReal: [L + 'borda-real-3.jpg', 'Lesão de contorno borrado: borda difusa.', 'Recorte de radiografia com área escura de borda mal definida', CL],
    bordas: [L + 'bordas-resposta.svg', 'As três bordas: corticalizada (cresce devagar), bem definida e difusa (alerta).', 'Esquema de três lesões com contornos diferentes', CL],
    raizes: [L + 'vizinhos-raizes.jpg', 'Raízes que terminam "cortadas" sobre a lesão: reabsorção radicular.', 'Recorte de radiografia com raízes encurtadas sobre área escura', CL],
    cortTC: [L + 'cortical-tomografia.jpg', 'Corte de tomografia: do lado das setas a cortical lingual sumiu (rompimento).', 'Corte coronal de tomografia da mandíbula com setas', CL],
    antesDepois: [L + 'mandibula-antes-depois.jpg', 'Lesão grande na mandíbula (C) e o mesmo paciente depois da ressecção e reconstrução (D).', 'Duas panorâmicas, antes e depois do tratamento', CL],
    apice: [L + 'periapical-apice.jpg', 'Periapical: dente com canal e área escura no ápice.', 'Radiografia periapical com lesão no ápice', CL],
    denticulos: [L + 'radiopaco-denticulos.jpg', 'Estruturas claras parecidas com dentes pequenos sobre dente que não erupcionou.', 'Recorte de radiografia com estruturas radiopacas irregulares', CL],
    incluso: [L + 'incluso-terceiro-molar.jpg', 'Terceiro molar inferior incluso com área escura junto da coroa.', 'Recorte de panorâmica com terceiro molar incluso', CL],
    pericor: [L + 'pericoronario-resposta.svg', 'Espaço em volta da coroa: A normal, B aumentado (pensar em cisto dentígero).', 'Esquema de dois molares inclusos com espaço em volta da coroa', CL],
    dcoFases: [L + 'displasia-fases-resposta.jpg', 'Fases da displasia cemento-óssea: radiolúcida, mista e radiopaca.', 'Esquema de três ápices com lesões em fases diferentes', CL],
    radiopApice: [L + 'apice-radiopacidades-resposta.jpg', 'Radiopacidades no ápice: displasia, osteíte condensante, osteoesclerose, hipercementose e cementoblastoma.', 'Esquema de cinco dentes com radiopacidades diferentes no ápice', CL],
    local: [L + 'localizacao-resposta.svg', 'Onde está cada cisto: radicular, residual, periodontal lateral, dentígero e ceratocisto.', 'Esquema de hemimandíbula com cinco lesões numeradas', CL],
    padroes: [L + 'padroes-resposta.svg', 'Analogias: bolhas de sabão, raquete de tênis, dentículos e raios de sol.', 'Quatro desenhos de padrões radiográficos', CL],
    tomadas: [L + 'duas-tomadas-resposta.svg', 'Mudando a angulação horizontal, o forame mentual sai do ápice.', 'Esquema de duas radiografias periapicais da mesma região', CL]
  };
  var F = {
    'panorâmica': ['pan'], 'multilocular': ['multi'], 'septo': ['multi'], 'difusa': ['bordaReal', 'bordas'],
    'corticalizada': ['bordas'], 'corticada': ['bordas'], 'corticado': ['bordas'],
    'reabsorção radicular': ['raizes'], 'cortical': ['cortTC'], 'corticais': ['cortTC'],
    'ressecção': ['antesDepois'], 'margem de segurança': ['antesDepois'], 'ameloblastoma': ['antesDepois'],
    'lesão periapical inflamatória': ['apice'], 'tratamento de canal': ['apice'], 'lâmina dura': ['apice'],
    'odontoma': ['denticulos'], 'odontoma composto': ['denticulos', 'padroes'], 'dentículo': ['padroes', 'denticulos'],
    'incluso': ['incluso'], 'terceiro molar': ['incluso'], 'cisto dentígero': ['incluso', 'pericor'], 'pericoronário': ['pericor'], 'folículo': ['pericor'],
    'displasia cemento-óssea': ['dcoFases'], 'osteíte condensante': ['radiopApice'], 'osteoesclerose idiopática': ['radiopApice'],
    'hipercementose': ['radiopApice'], 'cementoblastoma': ['radiopApice'],
    'cisto radicular': ['local'], 'cisto residual': ['local'], 'cisto periodontal lateral': ['local'], 'ceratocisto': ['local'],
    'bolhas de sabão': ['padroes'], 'raquete de tênis': ['padroes'], 'raios de sol': ['padroes'], 'mixoma odontogênico': ['padroes'], 'osteossarcoma': ['padroes'],
    'angulação horizontal': ['tomadas'], 'forame mentual': ['tomadas'], 'bidimensional': ['tomadas']
  };
  /* COMMONS (preenchido abaixo) */
  var aplica = function (I, F) {
    Object.keys(F).forEach(function (k) {
      var v = G[k]; if (!v) return;
      if (v._ja && v._ja[k]) return;
      var lista = F[k].map(function (id) { return I[id]; }).filter(Boolean);
      if (!lista.length) return;
      /* termos que dividem a mesma ficha recebem cópia própria */
      if (v._dono && v._dono !== k) { v = G[k] = { d: v.d, fonte: v.fonte }; }
      v._dono = k;
      v.img = [].concat(v.img || []); v.legs = v.legs || []; v.alts = v.alts || [];
      lista.forEach(function (x) { if (v.img.indexOf(x[0]) < 0) { v.img.push(x[0]); v.legs.push(x[1]); v.alts.push(x[2]); v._cred = (v._cred || []); if (v._cred.indexOf(x[3]) < 0) v._cred.push(x[3]); } });
    });
  };
  aplica(I, F);
  /*__COMMONS__*/
  Object.keys(G).forEach(function (k) {
    var v = G[k]; if (v._fim) return; v._fim = 1;
    if (v._cred) v.fonte = v.fonte + '. Imagens: ' + v._cred.join('; ');
    delete v._cred; delete v._dono; delete v._ja;
  });
  B.glossario = Object.assign(B.glossario || {}, G);
})();
