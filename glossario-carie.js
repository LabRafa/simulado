/* GLOSSÁRIO DE CÁRIE (Rafael 25/11/2026: "Quero todos... Todos."). Links nas palavras das questões e do resumo, com imagem do Wikimedia Commons (licença livre, crédito no campo fonte).
   Só acrescenta: termo que já existe não é apagado; se já existe sem imagem, ganha imagem/legenda/fonte. */
(function(){ var B = window.BANCOS && window.BANCOS.carie; if (!B) return; var G = B.glossario || (B.glossario = {}); var N = {
 "cárie": {
  "d": "Doença causada pelo desequilíbrio entre perda e ganho de mineral no dente, dirigida pelo biofilme que fermenta açúcar. Não é \"buraco\": a cavidade é o estágio avançado da lesão.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "multifatorial": {
  "d": "Doença que depende de vários fatores agindo juntos. Na cárie: dente suscetível, biofilme, açúcar frequente e tempo, além de saliva, flúor, hábitos e condição social.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "biofilme": {
  "d": "Comunidade organizada de microrganismos grudada numa superfície (o dente) e envolvida por uma matriz que ela mesma produz. É o nome atual da \"placa bacteriana\".",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "biofilme maduro": {
  "d": "Biofilme com dias de formação: mais espesso, com muitas espécies, mais anaeróbios nas camadas profundas e matriz desenvolvida. Só sai com remoção mecânica.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "Streptococcus mutans": {
  "d": "Bactéria Gram-positiva em cadeia, acidogênica e acidúrica, muito associada ao início da cárie no esmalte. Usa a sacarose para fazer glucanos que colam o biofilme ao dente.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "S. mutans": {
  "d": "Abreviação de Streptococcus mutans: bactéria acidogênica e acidúrica ligada ao início da cárie. A presença dela sozinha não significa doença.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "Lactobacillus acidophilus": {
  "d": "Bacilo Gram-positivo produtor de ácido lático e muito tolerante ao ácido. Aparece mais na progressão da cárie, principalmente na dentina, do que no início da lesão.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "lactobacilo": {
  "d": "Bacilos do gênero Lactobacillus: produzem muito ácido lático e aguentam pH baixo. Ficam mais ligados à progressão da lesão (dentina, cavidade) do que ao início.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "Porphyromonas gingivalis": {
  "d": "Bacilo Gram-negativo anaeróbio estrito, colonizador tardio do biofilme subgengival e um dos principais patógenos da periodontite.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "Candida albicans": {
  "d": "Fungo (levedura) que vive normalmente na boca e pode causar candidíase quando a defesa cai, a saliva diminui ou a prótese fica mal higienizada. Forma leveduras e hifas.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "Candida": {
  "d": "Gênero de fungos leveduriformes da microbiota normal da boca. Em desequilíbrio (antibiótico, prótese, imunidade baixa) causa candidíase.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "Actinomyces naeslundii": {
  "d": "Bacilo Gram-positivo da microbiota oral, colonizador inicial do biofilme e importante em cárie de raiz. Ajuda outras espécies a se prenderem (coagregação).",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "Keyes": {
  "d": "Paul Keyes (1960) explicou a cárie com três círculos que se sobrepõem: hospedeiro (dente), microbiota e dieta. A doença só acontece na área comum aos três.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "Newbrun": {
  "d": "Ernest Newbrun (1978) acrescentou o TEMPO aos três círculos de Keyes: dente, biofilme e açúcar precisam ficar juntos por tempo suficiente para a lesão aparecer.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "sacarose": {
  "d": "O açúcar comum (glicose + frutose). É o mais cariogênico: além de virar ácido, é usado pelo S. mutans para fazer glucanos que deixam o biofilme mais grudento e espesso.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Lehninger, Princípios de Bioquímica"
 },
 "lactose": {
  "d": "Açúcar do leite (glicose + galactose). É fermentável, mas bem menos cariogênico que a sacarose.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Lehninger, Princípios de Bioquímica"
 },
 "xilitol": {
  "d": "Álcool de açúcar usado como adoçante. As bactérias da cárie não conseguem fermentá-lo, então ele não produz ácido: é não cariogênico.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Lehninger, Princípios de Bioquímica"
 },
 "sorbitol": {
  "d": "Adoçante do tipo álcool de açúcar, comum em chicletes \"sem açúcar\". É fermentado muito devagar, por isso é pouco cariogênico.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Lehninger, Princípios de Bioquímica"
 },
 "glicose": {
  "d": "Açúcar simples (monossacarídeo) e principal combustível das células. As bactérias do biofilme a fermentam rapidamente em ácido lático.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Lehninger, Princípios de Bioquímica"
 },
 "frutose": {
  "d": "Açúcar das frutas e do mel (monossacarídeo). É fermentável e cariogênico.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Lehninger, Princípios de Bioquímica"
 },
 "maltose": {
  "d": "Açúcar formado por duas glicoses, que surge da quebra do amido. É fermentável pelas bactérias do biofilme.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Lehninger, Princípios de Bioquímica"
 },
 "amido": {
  "d": "Carboidrato complexo (cadeia longa de glicoses) de pão, arroz e batata. Cru é pouco cariogênico; cozido e processado pode ser quebrado pela amilase e fermentado.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Lehninger, Princípios de Bioquímica"
 },
 "açúcares livres": {
  "d": "Termo da OMS para os açúcares adicionados aos alimentos e os do mel, xaropes e sucos. A OMS recomenda menos de 10% das calorias do dia (ideal menos de 5%).",
  "fonte": "OMS, Sugars and dental caries: WHO technical note (2025); OMS, Oral health fact sheet (2025)"
 },
 "carboidratos fermentáveis": {
  "d": "Açúcares e amidos que as bactérias do biofilme conseguem transformar em ácido (sacarose, glicose, frutose, maltose, amido cozido). São o \"substrato\" da cárie.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "carboidrato fermentável": {
  "d": "Açúcar ou amido que as bactérias do biofilme conseguem transformar em ácido. É o \"substrato\" da cárie.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "glucano": {
  "d": "Polissacarídeo feito pelas glicosiltransferases do S. mutans a partir da sacarose. Funciona como \"cimento\": prende as bactérias ao dente e engrossa a matriz do biofilme.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "polissacarídeos extracelulares": {
  "d": "Açúcares de cadeia longa que as bactérias produzem e soltam fora da célula (glucanos, frutanos). Formam a matriz do biofilme e servem de reserva de energia.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "ácido lático": {
  "d": "Principal ácido produzido pelas bactérias do biofilme quando fermentam açúcar. É ele que derruba o pH e dissolve o mineral do dente.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Lehninger, Princípios de Bioquímica"
 },
 "amônia": {
  "d": "Base produzida por algumas bactérias a partir da ureia e de aminoácidos. Ajuda a subir o pH do biofilme, um efeito protetor contra a cárie.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Lehninger, Princípios de Bioquímica"
 },
 "ureia": {
  "d": "Composto presente na saliva que algumas bactérias quebram em amônia, ajudando a neutralizar ácidos do biofilme.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Lehninger, Princípios de Bioquímica"
 },
 "hidroxiapatita": {
  "d": "Cristal de fosfato de cálcio [Ca10(PO4)6(OH)2] que forma a maior parte do esmalte, da dentina e do osso. Dissolve quando o meio fica ácido.",
  "fonte": "Junqueira & Carneiro, Histologia Básica; Katchburian & Arana, Histologia e Embriologia Oral"
 },
 "fluorapatita": {
  "d": "Apatita em que o flúor ocupa o lugar da hidroxila. É mais estável e menos solúvel em ácido: só começa a dissolver por volta de pH 4,5.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "fluoreto de cálcio": {
  "d": "Depósito (CaF2) que se forma na superfície do dente após aplicação de flúor concentrado. Funciona como reservatório que libera flúor quando o pH cai.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "esmalte": {
  "d": "Tecido mais duro do corpo, com cerca de 96% de mineral (hidroxiapatita) organizado em prismas. Não tem células, por isso não se regenera, mas pode remineralizar.",
  "fonte": "Junqueira & Carneiro, Histologia Básica; Katchburian & Arana, Histologia e Embriologia Oral"
 },
 "dentina": {
  "d": "Tecido abaixo do esmalte, com cerca de 70% de mineral, mais matéria orgânica e cheio de túbulos. Por isso a cárie avança mais rápido nela que no esmalte.",
  "fonte": "Junqueira & Carneiro, Histologia Básica; Katchburian & Arana, Histologia e Embriologia Oral"
 },
 "túbulos": {
  "d": "Na dentina, canais finíssimos que vão da polpa até a junção com o esmalte. Por eles passam prolongamentos dos odontoblastos, líquido e também bactérias e ácidos da cárie.",
  "fonte": "Junqueira & Carneiro, Histologia Básica; Katchburian & Arana, Histologia e Embriologia Oral"
 },
 "polpa": {
  "d": "Tecido conjuntivo mole no centro do dente, com vasos e nervos. É ela que dói quando a cárie chega perto (pulpite).",
  "fonte": "Junqueira & Carneiro, Histologia Básica; Katchburian & Arana, Histologia e Embriologia Oral"
 },
 "junção amelodentinária": {
  "d": "Limite entre o esmalte e a dentina. Quando a cárie chega nela, se espalha para os lados na dentina.",
  "fonte": "Junqueira & Carneiro, Histologia Básica; Katchburian & Arana, Histologia e Embriologia Oral"
 },
 "ameloblasto": {
  "d": "Célula que forma o esmalte durante o desenvolvimento do dente. Some depois que o dente erupciona; por isso o esmalte não se regenera.",
  "fonte": "Junqueira & Carneiro, Histologia Básica; Katchburian & Arana, Histologia e Embriologia Oral"
 },
 "pH": {
  "d": "Escala de 0 a 14 que mede a acidez: abaixo de 7 é ácido, acima é básico. Cada ponto a menos é 10 vezes mais ácido.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Lehninger, Princípios de Bioquímica"
 },
 "pH crítico": {
  "d": "pH abaixo do qual a saliva e o biofilme deixam de estar saturados de mineral e o dente começa a dissolver: cerca de 5,5 para o esmalte (hidroxiapatita) e cerca de 4,5 para a fluorapatita.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "Curva de Stephan": {
  "d": "Gráfico de Robert Stephan (1944): depois do açúcar o pH do biofilme cai em poucos minutos abaixo do crítico e leva cerca de 30 a 40 min para voltar. Muitas vezes ao dia = mais tempo desmineralizando.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "Curva de Spee": {
  "d": "Curvatura das pontas das cúspides dos dentes inferiores vista de lado, de canino a molar. É conceito de oclusão, não tem relação com pH.",
  "fonte": "Junqueira & Carneiro, Histologia Básica; Katchburian & Arana, Histologia e Embriologia Oral"
 },
 "Curva de Wilson": {
  "d": "Curvatura dos molares vista de frente (no plano transversal), pela inclinação lingual dos molares inferiores. É conceito de oclusão.",
  "fonte": "Junqueira & Carneiro, Histologia Básica; Katchburian & Arana, Histologia e Embriologia Oral"
 },
 "desmineralização": {
  "d": "Perda de cálcio e fosfato do dente quando o pH cai abaixo do crítico. É o primeiro passo da lesão de cárie.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "remineralização": {
  "d": "Volta de cálcio e fosfato (da saliva) para o dente quando o pH sobe. O flúor presente acelera e forma mineral mais resistente.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "saliva": {
  "d": "Secreção das glândulas salivares. Protege o dente: tampão (bicarbonato), cálcio e fosfato para remineralizar, limpeza, película adquirida e anticorpos (IgA).",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "capacidade tampão": {
  "d": "Capacidade de um líquido resistir à mudança de pH. Na saliva vem principalmente do bicarbonato, que neutraliza os ácidos do biofilme.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Lehninger, Princípios de Bioquímica"
 },
 "tampão": {
  "d": "Sistema que segura o pH, neutralizando ácidos ou bases. Na saliva, o principal é o bicarbonato.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Lehninger, Princípios de Bioquímica"
 },
 "bicarbonato": {
  "d": "Íon (HCO3−) da saliva que neutraliza ácidos. É o principal tampão salivar e aumenta quando o fluxo de saliva aumenta.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Lehninger, Princípios de Bioquímica"
 },
 "fluxo salivar": {
  "d": "Quantidade de saliva produzida por minuto. Fluxo baixo (remédios, radioterapia, sono) tira a proteção: menos tampão, limpeza e remineralização.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "xerostomia": {
  "d": "Sensação de boca seca, geralmente por menos saliva (remédios, radioterapia de cabeça e pescoço, Sjögren). Aumenta muito o risco de cárie e de candidíase.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; Tommasi, Diagnóstico em Patologia Bucal"
 },
 "radioterapia": {
  "d": "Tratamento do câncer com radiação. Na cabeça e no pescoço lesa as glândulas salivares e causa boca seca, com cárie de radiação.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; Tommasi, Diagnóstico em Patologia Bucal"
 },
 "película adquirida": {
  "d": "Camada fina de proteínas e glicoproteínas da saliva (e do fluido gengival) que gruda no esmalte segundos após a limpeza. No início é livre de bactérias; é nela que os pioneiros se prendem.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "flúor": {
  "d": "Íon que reduz a desmineralização e acelera a remineralização quando está presente na boca no momento do ácido (efeito tópico). Fontes: água, creme dental, bochecho, verniz.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "fluoreto": {
  "d": "Forma iônica do flúor (F−). No esmalte pode trocar a hidroxila da hidroxiapatita e formar fluorapatita, menos solúvel em ácido.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "fluoretação": {
  "d": "Ajuste do flúor na água de abastecimento (no Brasil cerca de 0,7 ppm). Medida coletiva, barata e de grande alcance, obrigatória por lei desde 1974.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "fluorose": {
  "d": "Defeito do esmalte por excesso de flúor ingerido enquanto o dente se forma (até uns 6 a 8 anos). Vai de manchinhas brancas a manchas marrons e esmalte quebradiço.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "erosão dentária": {
  "d": "Perda de esmalte por ácido que NÃO vem de bactéria (refrigerante, suco ácido, refluxo, vômito). A superfície fica lisa e brilhante.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "hipoplasia": {
  "d": "Esmalte formado em quantidade menor, com sulcos ou buracos, por algo que atrapalhou os ameloblastos na formação (febre, desnutrição, trauma, tetraciclina).",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "tetraciclina": {
  "d": "Antibiótico que, tomado durante a formação dos dentes (gestação, infância), se fixa na dentina e deixa os dentes acinzentados ou amarronzados.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "amelogênese imperfeita": {
  "d": "Doença genética em que o esmalte de todos os dentes se forma errado (fino, mole ou pouco mineralizado). Não tem relação com flúor.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "mancha branca": {
  "d": "Primeiro sinal visível da cárie no esmalte: área branca, opaca e rugosa (lesão ativa) por desmineralização abaixo da superfície. Sem cavidade, pode parar e remineralizar.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "manchas brancas ativas": {
  "d": "Lesões iniciais de cárie no esmalte, brancas, opacas e rugosas, geralmente perto da gengiva e com biofilme. Tratamento: controlar biofilme, açúcar e usar flúor, sem broca.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "lesão ativa": {
  "d": "Lesão de cárie que está progredindo: no esmalte é opaca, rugosa e com biofilme; na dentina, amolecida. Precisa de controle dos fatores para parar.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "inativa": {
  "d": "Lesão de cárie paralisada: esmalte brilhante, liso e duro; dentina escurecida e dura. O processo parou porque os fatores foram controlados.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "não cavitada": {
  "d": "Lesão de cárie sem buraco, com a superfície do esmalte ainda inteira. Trata-se sem broca: biofilme, dieta e flúor (e selante em fissura).",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "cavitação": {
  "d": "Quando a superfície do esmalte desaba e forma um buraco. Biofilme dentro da cavidade fica protegido, e aí a lesão costuma precisar de restauração.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "fóssulas": {
  "d": "Pequenas depressões no fundo dos sulcos dos dentes posteriores. Junto com as fissuras, guardam biofilme longe da escova: local de maior risco de cárie.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "selante": {
  "d": "Resina fluida aplicada nas fóssulas e fissuras para fechá-las. Sem o \"nicho\", o biofilme não se acumula ali.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "cúspide": {
  "d": "Ponta elevada da face oclusal dos dentes posteriores (e do canino). É lugar de pouco acúmulo de biofilme.",
  "fonte": "Junqueira & Carneiro, Histologia Básica; Katchburian & Arana, Histologia e Embriologia Oral"
 },
 "abrasão": {
  "d": "Desgaste do dente por atrito mecânico de algo de fora, como escovação forte com creme abrasivo. Típica na cervical, em forma de cunha.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "mancha extrínseca": {
  "d": "Pigmento depositado por fora do dente (café, chá, cigarro, clorexidina). Sai com profilaxia, ao contrário da cárie.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "cervical": {
  "d": "Região do \"pescoço\" do dente, perto da gengiva. Junta biofilme com facilidade, por isso é onde aparecem muitas manchas brancas.",
  "fonte": "Junqueira & Carneiro, Histologia Básica; Katchburian & Arana, Histologia e Embriologia Oral"
 },
 "escovação": {
  "d": "Remoção mecânica do biofilme com escova (de preferência com creme dental com flúor, 2 vezes ao dia). Junto com o fio dental, é o principal controle do biofilme.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "fio dental": {
  "d": "Fio usado para limpar entre os dentes, onde a escova não chega. Completa a escovação no controle do biofilme.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "dentifrício fluoretado": {
  "d": "Creme dental com flúor (1.000 a 1.500 ppm). Usado 2 vezes ao dia, é a forma de flúor tópico com melhor custo-benefício.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "dentifrício": {
  "d": "Nome técnico do creme dental. O que previne cárie é o flúor dele, junto com a remoção mecânica do biofilme.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "bochecho": {
  "d": "Movimentar um líquido na boca e cuspir. Bochecho de flúor ou antisséptico complementa, mas não substitui escova e fio.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "enxaguante": {
  "d": "Solução para bochecho (com flúor ou antisséptico). Não remove biofilme maduro sozinho: precisa de escova e fio.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "profilaxia": {
  "d": "Na odontologia, limpeza profissional com pasta e escova de Robinson ou taça de borracha, que remove biofilme e manchas. Na medicina, também quer dizer prevenção (ex.: profilaxia antibiótica).",
  "fonte": "Newman et al., Carranza Periodontia Clínica"
 },
 "disbiose": {
  "d": "Desequilíbrio da comunidade microbiana, provocado por mudança do ambiente (ex.: açúcar frequente seleciona bactérias acidogênicas e acidúricas). É o oposto da homeostase do biofilme.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "homeostase": {
  "d": "Equilíbrio interno mantido pelo organismo (ou pela comunidade de microrganismos) apesar das mudanças do meio.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "acidogênico": {
  "d": "Microrganismo capaz de produzir ácido ao metabolizar açúcar (ex.: S. mutans, lactobacilos).",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "acidúrico": {
  "d": "Microrganismo que sobrevive e se multiplica em meio ácido. Com açúcar frequente, os acidúricos ganham espaço no biofilme.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "fermentação homolática": {
  "d": "Fermentação em que quase toda a glicose vira ácido lático, sem oxigênio. É o que o S. mutans faz com excesso de açúcar, derrubando o pH.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Lehninger, Princípios de Bioquímica"
 },
 "Ciclo de Krebs": {
  "d": "Etapa da respiração aeróbia, na mitocôndria, que oxida a glicose até CO2 e água com muita energia. Não é a via que gera o ácido da cárie.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Lehninger, Princípios de Bioquímica"
 },
 "quorum sensing": {
  "d": "Comunicação química entre bactérias que depende da densidade: quando a população é grande, os sinais ligam genes juntos (resistência, formação do biofilme).",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "coagregação": {
  "d": "Ligação específica entre células de espécies diferentes no biofilme. É assim que os colonizadores secundários se prendem aos primeiros.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "organismos-ponte": {
  "d": "Espécies que se ligam tanto a colonizadores iniciais quanto aos tardios, conectando os dois grupos. O exemplo clássico é o Fusobacterium nucleatum.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "colonizadores iniciais": {
  "d": "Primeiras bactérias a se prenderem à película adquirida, principalmente estreptococos (S. sanguinis, S. oralis, S. mitis) e Actinomyces.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "sucessão microbiana": {
  "d": "Troca gradual das espécies do biofilme ao longo do tempo: os pioneiros mudam o ambiente (menos oxigênio) e abrem espaço para os anaeróbios.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "mutacinas": {
  "d": "Bacteriocinas produzidas pelo S. mutans: substâncias que matam bactérias concorrentes no biofilme.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "amilase": {
  "d": "Enzima da saliva que quebra o amido em açúcares menores (maltose). Também faz parte da película adquirida.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Lehninger, Princípios de Bioquímica"
 },
 "fluido gengival": {
  "d": "Líquido que sai do sulco entre a gengiva e o dente. Aumenta na inflamação e traz proteínas e células de defesa.",
  "fonte": "Newman et al., Carranza Periodontia Clínica"
 },
 "glicoproteínas": {
  "d": "Proteínas ligadas a açúcares. As da saliva (como as mucinas) formam a película adquirida e lubrificam a boca.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Lehninger, Princípios de Bioquímica"
 },
 "mucinas": {
  "d": "Glicoproteínas grandes da saliva que deixam a saliva viscosa, lubrificam a mucosa e participam da película adquirida.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Lehninger, Princípios de Bioquímica"
 },
 "estaterina": {
  "d": "Proteína da saliva que segura cálcio e fosfato perto do dente (evita que precipitem) e faz parte da película adquirida.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Lehninger, Princípios de Bioquímica"
 },
 "proteínas ricas em prolina": {
  "d": "Proteínas da saliva que se ligam à hidroxiapatita e formam a película adquirida; servem de receptor para bactérias pioneiras.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Lehninger, Princípios de Bioquímica"
 },
 "S. sanguinis": {
  "d": "Streptococcus sanguinis: um dos primeiros colonizadores do biofilme. É mais associado à saúde que à cárie.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "S. mitis": {
  "d": "Streptococcus mitis: estreptococo pioneiro do biofilme, da microbiota normal da boca.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "OMS": {
  "d": "Organização Mundial da Saúde, agência da ONU para saúde. Em 2025 publicou nota técnica sobre açúcares livres e cárie.",
  "fonte": "OMS, Sugars and dental caries: WHO technical note (2025); OMS, Oral health fact sheet (2025)"
 },
 "Organização Mundial da Saúde": {
  "d": "Agência da ONU para saúde (OMS/WHO). Recomenda reduzir os açúcares livres e escovar 2 vezes ao dia com creme dental fluoretado.",
  "fonte": "OMS, Sugars and dental caries: WHO technical note (2025); OMS, Oral health fact sheet (2025)"
 },
 "Paracoccidioides brasiliensis": {
  "d": "Fungo dimórfico causador da paracoccidioidomicose, comum em trabalhadores rurais. No tecido aparece como levedura grande com vários brotos (\"roda de leme\", \"Mickey Mouse\").",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "fungo dimórfico": {
  "d": "Fungo que muda de forma com a temperatura: filamentoso (hifas) a 25 °C no ambiente e levedura a 37 °C no corpo. Ex.: Paracoccidioides.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "blastoconídios": {
  "d": "Células novas que nascem por brotamento de uma levedura. No Paracoccidioides são vários brotos em volta da célula-mãe.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "Escherichia coli": {
  "d": "Bacilo Gram-negativo do intestino, muito usado em laboratório. É bactéria, não fungo.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "Saccharomyces cerevisiae": {
  "d": "Levedura do fermento de pão e da cerveja. Fungo unicelular que se multiplica por brotamento.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "HSV-1": {
  "d": "Vírus do herpes simples tipo 1, de DNA. Depois da primeira infecção fica latente no gânglio do nervo trigêmeo e pode reativar como herpes labial.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "levedura": {
  "d": "Fungo unicelular, arredondado ou oval, que se multiplica principalmente por brotamento (ou fissão). Ex.: Candida, Saccharomyces.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "leveduriforme": {
  "d": "Com forma de levedura: célula única, redonda ou oval.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "hifa": {
  "d": "Filamento tubular que forma o corpo dos fungos filamentosos. O conjunto de hifas forma o micélio.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "micélio": {
  "d": "Massa de hifas entrelaçadas de um fungo filamentoso, como o \"algodão\" do mofo.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "brotamento": {
  "d": "Reprodução assexuada das leveduras: nasce um broto na célula-mãe, que cresce e se solta.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "fissão binária": {
  "d": "Divisão de uma célula em duas iguais. É como as bactérias se multiplicam; algumas leveduras também.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "quitina": {
  "d": "Polissacarídeo duro da parede celular dos fungos (o mesmo da carapaça dos insetos). Bactéria não tem quitina.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "ergosterol": {
  "d": "Esterol da membrana dos fungos, no lugar do colesterol das nossas células. É o alvo de antifúngicos como nistatina e fluconazol.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "beta-glucanos": {
  "d": "Polissacarídeos da PAREDE celular dos fungos, junto com a quitina. (O ergosterol fica na membrana.)",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "peptidoglicano": {
  "d": "Malha de açúcares e aminoácidos que forma a parede das bactérias. Grossa nas Gram-positivas, fina nas Gram-negativas.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "peptideoglicano": {
  "d": "Mesmo que peptidoglicano: malha que forma a parede bacteriana, grossa nas Gram-positivas e fina nas Gram-negativas.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "LPS": {
  "d": "Lipopolissacarídeo: molécula da membrana externa das bactérias Gram-negativas. É uma endotoxina que dispara inflamação forte.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "lipopolissacarídeo": {
  "d": "Molécula (LPS) da membrana externa das Gram-negativas, também chamada endotoxina. Gram-positiva não tem.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "endotoxina": {
  "d": "O LPS da membrana externa das Gram-negativas, liberado quando a bactéria se rompe. Causa febre e inflamação (importante na periodontite).",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "Método de Gram": {
  "d": "Coloração em 4 passos: cristal violeta, iodo (lugol), álcool e contracorante (safranina). Separa bactérias pela parede celular.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "Gram-positiva": {
  "d": "Bactéria de parede com peptidoglicano grosso, que segura o cristal violeta e fica ROXA no Gram. Não tem membrana externa nem LPS.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "Gram-negativa": {
  "d": "Bactéria de peptidoglicano fino e com membrana externa com LPS. O álcool tira o violeta e ela fica ROSA (cor do contracorante).",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "cristal violeta": {
  "d": "Primeiro corante do método de Gram. Fica preso (com o iodo) na parede grossa das Gram-positivas.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "contracorante": {
  "d": "Corante final do Gram (safranina ou fucsina), rosa-avermelhado. Colore as Gram-negativas, que perderam o violeta no álcool.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "nucleoide": {
  "d": "Região do citoplasma da bactéria onde fica o DNA, sem membrana em volta. Bactéria não tem núcleo verdadeiro.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "plasmídeo": {
  "d": "Pequeno DNA circular extra de muitas bactérias, separado do cromossomo. Pode levar genes de resistência a antibiótico.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "eucarionte": {
  "d": "Organismo com célula de núcleo envolvido por membrana e com organelas (mitocôndria, retículo). Fungos, plantas e animais.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "mitocôndria": {
  "d": "Organela das células eucariontes que produz energia (ATP) pela respiração. Bactéria não tem.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "vacúolo": {
  "d": "Organela de fungos e plantas, cercada pelo tonoplasto: guarda substâncias, controla pH e água (osmose) e degrada componentes, inclusive na autofagia.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "tonoplasto": {
  "d": "Membrana que envolve o vacúolo de fungos e plantas.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "autofagia": {
  "d": "Processo em que a célula \"come\" partes de si mesma dentro de vesículas, para reciclar material quando falta nutriente.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "ATP": {
  "d": "Adenosina trifosfato, a \"moeda de energia\" da célula. Nos eucariontes é produzida principalmente na mitocôndria.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Lehninger, Princípios de Bioquímica"
 },
 "retículo endoplasmático": {
  "d": "Rede de membranas da célula eucarionte onde se fazem proteínas (rugoso) e lipídios (liso).",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "estafilococo": {
  "d": "Cocos agrupados em cacho de uva (ex.: Staphylococcus aureus).",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "estreptococo": {
  "d": "Cocos em cadeia, como colar de contas (ex.: Streptococcus mutans).",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "espiroqueta": {
  "d": "Bactéria em espiral FLEXÍVEL, que se move girando (ex.: Treponema, presente na periodontite).",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "espirilo": {
  "d": "Bactéria em espiral RÍGIDA (diferente da espiroqueta, que é flexível).",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "vibriões": {
  "d": "Bastonetes curvos, em forma de vírgula (ex.: Vibrio cholerae).",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "fusiforme": {
  "d": "Bastonete largo no meio e afilado nas pontas, como fuso (ex.: Fusobacterium).",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "cocos": {
  "d": "Bactérias de forma esférica. Conforme o arranjo: diplococos, estreptococos (cadeia), estafilococos (cacho).",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "bastonete": {
  "d": "Bactéria em forma de bastão (bacilo).",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "fase lag": {
  "d": "Primeira fase da curva de crescimento: as bactérias se adaptam ao meio e quase não se dividem.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "fase exponencial": {
  "d": "Fase da curva de crescimento com divisão intensa e população dobrando a cada geração (fase log).",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "fase estacionária": {
  "d": "Fase em que nascem tantas bactérias quanto morrem, por falta de nutriente e acúmulo de resíduos.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "fase de declínio": {
  "d": "Última fase da curva: morrem mais bactérias do que nascem.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "esporulação": {
  "d": "Formação de esporos, formas de resistência de algumas bactérias (Bacillus, Clostridium) quando o ambiente fica ruim. Não é uma fase da curva de crescimento.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "microbiota": {
  "d": "Conjunto de microrganismos que vivem num local do corpo. Na boca são centenas de espécies, em sua maioria em equilíbrio com o hospedeiro.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "Microbiologia": {
  "d": "Ciência que estuda os microrganismos (bactérias, fungos, vírus, protozoários) e suas relações com o ambiente e o hospedeiro.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "aeróbia": {
  "d": "Bactéria que precisa de oxigênio para crescer.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "periodontopatogênico": {
  "d": "Microrganismo associado à periodontite, como Porphyromonas gingivalis.",
  "fonte": "Newman et al., Carranza Periodontia Clínica"
 },
 "eucarióticas": {
  "d": "Células com núcleo verdadeiro (envolvido por membrana) e organelas, como as dos fungos.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "etiologia": {
  "d": "Estudo da CAUSA da doença (o agente agressor). Ex.: biofilme e dieta na cárie.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "patogênese": {
  "d": "Os MECANISMOS pelos quais a causa produz a doença (eventos celulares e moleculares). Ex.: bactérias fermentam açúcar e o ácido dissolve o esmalte.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "morfologia": {
  "d": "Na patologia, as alterações de FORMA, vistas a olho nu ou no microscópio. Ex.: a cavidade da cárie, a bolsa periodontal.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "agressão": {
  "d": "Qualquer estímulo (físico, químico, biológico ou do próprio organismo) que, conforme intensidade e tempo, provoca resposta de adaptação ou defesa.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "adaptação": {
  "d": "Ajuste da célula ou do organismo a uma mudança do meio para continuar funcionando: hipertrofia, hiperplasia, atrofia, metaplasia.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "inflamação": {
  "d": "Reação de defesa dos tecidos vascularizados contra agressão: vasos dilatam, chega líquido e células de defesa. Sinais: rubor, calor, tumor (inchaço), dor e perda de função.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "erosão": {
  "d": "Perda SUPERFICIAL e parcial do epitélio, sem chegar no conjuntivo. Costuma vir de vesícula ou bolha que rompeu.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; Tommasi, Diagnóstico em Patologia Bucal"
 },
 "fissura": {
  "d": "Sulco profundo e estreito na face oclusal dos dentes posteriores. Guarda biofilme longe da escova e da saliva: junto com as fóssulas, é o local de maior risco de cárie.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "biópsia": {
  "d": "Retirada de tecido vivo para exame no microscópio (histopatológico). É o padrão-ouro para o diagnóstico de lesões.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; Tommasi, Diagnóstico em Patologia Bucal"
 },
 "cálculo dental": {
  "d": "\"Tártaro\": biofilme mineralizado preso ao dente. Só sai com raspagem profissional.",
  "fonte": "Newman et al., Carranza Periodontia Clínica"
 },
 "esterilização": {
  "d": "Processo que destrói TODAS as formas de vida microbiana, inclusive esporos. No consultório, autoclave.",
  "fonte": "ANVISA, Serviços Odontológicos: prevenção e controle de riscos (2006)"
 },
 "O'Leary": {
  "d": "Índice de placa de O'Leary (1972): faces coradas ÷ faces examinadas × 100. No índice original são 4 faces por dente (mesial, distal, vestibular e lingual); o material da disciplina conta 5 por dente.",
  "fonte": "Newman et al., Carranza Periodontia Clínica"
 }
};
 Object.keys(N).forEach(function (k) { var v = G[k]; if (!v) { G[k] = N[k]; return; } if (typeof v === "string") v = G[k] = { d: v }; if (!v.img && N[k].img) { v.img = N[k].img; v.legs = N[k].legs; v.alts = N[k].alts; v.fonte = v.fonte ? v.fonte + ((N[k].fonte.match(/. Imagens:.*$/) || [""])[0]) : N[k].fonte; } }); })();
