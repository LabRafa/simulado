/* GLOSSÁRIO EXTRA DE INTERAÇÕES BIOLÓGICAS (Rafael 25/11/2026: "Quero todos... Todos."). Imagens do Wikimedia Commons (licença livre, crédito no campo fonte).
   Só acrescenta: termo que já existe não é apagado; se já existe sem imagem, ganha imagem/legenda/fonte. */
(function(){ var B = window.BANCOS && window.BANCOS.inter; if (!B) return; var G = B.glossario || (B.glossario = {}); var N = {
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
 "Lactobacilli": {
  "d": "Plural latino de Lactobacillus. São bactérias da progressão da cárie, não pioneiras do biofilme: os primeiros colonizadores são estreptococos como S. sanguinis e S. mitis.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "Candida": {
  "d": "Gênero de fungos leveduriformes da microbiota normal da boca. Em desequilíbrio (antibiótico, prótese, imunidade baixa) causa candidíase.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "carboidratos fermentáveis": {
  "d": "Açúcares e amidos que as bactérias do biofilme conseguem transformar em ácido (sacarose, glicose, frutose, maltose, amido cozido). São o \"substrato\" da cárie.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "hidroxiapatita": {
  "d": "Cristal de fosfato de cálcio [Ca10(PO4)6(OH)2] que forma a maior parte do esmalte, da dentina e do osso. Dissolve quando o meio fica ácido.",
  "fonte": "Junqueira & Carneiro, Histologia Básica; Katchburian & Arana, Histologia e Embriologia Oral"
 },
 "esmalte": {
  "d": "Tecido mais duro do corpo, com cerca de 96% de mineral (hidroxiapatita) organizado em prismas. Não tem células, por isso não se regenera, mas pode remineralizar.",
  "fonte": "Junqueira & Carneiro, Histologia Básica; Katchburian & Arana, Histologia e Embriologia Oral"
 },
 "dentina": {
  "d": "Tecido abaixo do esmalte, com cerca de 70% de mineral, mais matéria orgânica e cheio de túbulos. Por isso a cárie avança mais rápido nela que no esmalte.",
  "fonte": "Junqueira & Carneiro, Histologia Básica; Katchburian & Arana, Histologia e Embriologia Oral"
 },
 "polpa": {
  "d": "Tecido conjuntivo mole no centro do dente, com vasos e nervos. É ela que dói quando a cárie chega perto (pulpite).",
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
 "capacidade de tamponamento": {
  "d": "Capacidade da saliva de neutralizar ácidos, principalmente pelo bicarbonato. Quanto maior o fluxo salivar, maior o tamponamento.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Lehninger, Princípios de Bioquímica"
 },
 "fluxo salivar": {
  "d": "Quantidade de saliva produzida por minuto. Fluxo baixo (remédios, radioterapia, sono) tira a proteção: menos tampão, limpeza e remineralização.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
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
 "cavitação": {
  "d": "Quando a superfície do esmalte desaba e forma um buraco. Biofilme dentro da cavidade fica protegido, e aí a lesão costuma precisar de restauração.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "escovação": {
  "d": "Remoção mecânica do biofilme com escova (de preferência com creme dental com flúor, 2 vezes ao dia). Junto com o fio dental, é o principal controle do biofilme.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "fio dental": {
  "d": "Fio usado para limpar entre os dentes, onde a escova não chega. Completa a escovação no controle do biofilme.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "bochecho": {
  "d": "Movimentar um líquido na boca e cuspir. Bochecho de flúor ou antisséptico complementa, mas não substitui escova e fio.",
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
 "homeostasia": {
  "d": "Mesmo que homeostase: capacidade da célula ou do organismo de manter suas funções em equilíbrio diante das mudanças do meio.",
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
 "colonizadores iniciais": {
  "d": "Primeiras bactérias a se prenderem à película adquirida, principalmente estreptococos (S. sanguinis, S. oralis, S. mitis) e Actinomyces.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "colonizadores tardios": {
  "d": "Bactérias que chegam depois e se prendem às primeiras (coagregação), muitas anaeróbias, como Fusobacterium e Porphyromonas.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "matriz extracelular": {
  "d": "No biofilme, o \"gel\" que envolve as bactérias: polissacarídeos, proteínas e DNA. Ajuda a adesão, guarda nutrientes e dificulta a entrada de antimicrobianos.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "paracoccidioidomicose": {
  "d": "Micose profunda causada pelo Paracoccidioides, que se pega inalando o fungo no solo (zona rural). Na boca dá úlceras com pontinhos vermelhos (\"estomatite moriforme\", em amora). Precisa de biópsia.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "HSV-1": {
  "d": "Vírus do herpes simples tipo 1, de DNA. Depois da primeira infecção fica latente no gânglio do nervo trigêmeo e pode reativar como herpes labial.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "esporos": {
  "d": "Formas de resistência de algumas bactérias, que aguentam calor, seca e desinfetantes. Só a esterilização garante destruí-los.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "microbiota oral": {
  "d": "Conjunto de todos os microrganismos que vivem na boca (bactérias, fungos, vírus, protozoários), em sua maioria inofensivos.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "microbiota": {
  "d": "Conjunto de microrganismos que vivem num local do corpo. Na boca são centenas de espécies, em sua maioria em equilíbrio com o hospedeiro.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "Microbiologia": {
  "d": "Ciência que estuda os microrganismos (bactérias, fungos, vírus, protozoários) e suas relações com o ambiente e o hospedeiro.",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "proteolítico": {
  "d": "Microrganismo que usa proteínas como fonte de nutriente, quebrando-as. Comum no biofilme subgengival.",
  "fonte": "Marsh & Martin, Microbiologia Oral; Tortora, Funke & Case, Microbiologia"
 },
 "anaeróbio": {
  "d": "Microrganismo que cresce com pouco ou nenhum oxigênio. Os estritos morrem com oxigênio (ex.: Porphyromonas).",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "facultativo": {
  "d": "Microrganismo que cresce com ou sem oxigênio, trocando o metabolismo (ex.: estreptococos, E. coli).",
  "fonte": "Tortora, Funke & Case, Microbiologia"
 },
 "Patologia": {
  "d": "Ciência que estuda as doenças: causas (etiologia), mecanismos (patogênese), alterações de forma (morfologia) e de função (fisiopatologia).",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "etiologia": {
  "d": "Estudo da CAUSA da doença (o agente agressor). Ex.: biofilme e dieta na cárie.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "patogênese": {
  "d": "Os MECANISMOS pelos quais a causa produz a doença (eventos celulares e moleculares). Ex.: bactérias fermentam açúcar e o ácido dissolve o esmalte.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "patogenia": {
  "d": "Mesmo que patogênese: o mecanismo pelo qual a causa leva à lesão.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "morfologia": {
  "d": "Na patologia, as alterações de FORMA, vistas a olho nu ou no microscópio. Ex.: a cavidade da cárie, a bolsa periodontal.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "anatomia patológica": {
  "d": "Estudo das alterações morfológicas (de forma) em células, tecidos e órgãos doentes.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "fisiopatologia": {
  "d": "Estudo das alterações de FUNÇÃO causadas pela doença: sinais, sintomas e mau funcionamento. Ex.: dor pulpar, mobilidade dentária.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "semiologia": {
  "d": "Estudo dos sinais (o que o examinador vê) e sintomas (o que o paciente sente).",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "propedêutica": {
  "d": "Conjunto de passos para chegar ao diagnóstico: anamnese, exame físico, sinais, sintomas e exames complementares.",
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
 "adaptação celular": {
  "d": "Mudança de tamanho, número ou tipo das células diante de estímulo persistente, mas não letal: hipertrofia, hiperplasia, atrofia e metaplasia.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "lesão reversível": {
  "d": "Dano celular que ainda tem volta: tirando a agressão, a célula volta ao normal (ex.: degeneração hidrópica).",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "lesão irreversível": {
  "d": "Dano que passou do ponto de volta e leva à morte celular (necrose ou apoptose).",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "lesão celular reversível": {
  "d": "Dano em que a célula se recupera quando o agente agressor é removido.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "lesão celular irreversível": {
  "d": "Dano em que a célula não consegue mais se recuperar e morre.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "hipertrofia": {
  "d": "Aumento do TAMANHO das células (e do órgão), sem aumentar o número. Ex.: músculo de quem treina, masseter do bruxista.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "hiperplasia": {
  "d": "Aumento do NÚMERO de células, só em tecidos que se dividem. Ex.: hiperplasia fibrosa sob prótese mal adaptada.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "atrofia": {
  "d": "Diminuição do tamanho (e às vezes do número) das células e do órgão. Ex.: osso alveolar que reabsorve depois da extração.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "metaplasia": {
  "d": "Troca de um tipo de célula adulta por outro mais resistente. Ex.: epitélio dos brônquios vira escamoso no fumante.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "displasia": {
  "d": "Crescimento com alteração da maturação e da organização do epitélio (células atípicas). É lesão potencialmente maligna.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "necrose": {
  "d": "Morte celular em tecido vivo, com perda da integridade da célula e inflamação em volta. Ex.: necrose da polpa.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "necrose caseosa": {
  "d": "Tipo de necrose com aspecto de \"queijo\" branco e esfarelado, típica da tuberculose, no centro do granuloma.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "apoptose": {
  "d": "Morte celular programada e controlada, sem inflamação: a célula se encolhe e se divide em pedacinhos que são comidos por macrófagos.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "neoplasia": {
  "d": "Crescimento novo, autônomo e descontrolado de células (tumor). Pode ser benigna ou maligna.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "metástase": {
  "d": "Implante de células de uma neoplasia maligna num local distante do tumor original, por vasos sanguíneos ou linfáticos.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "inflamação": {
  "d": "Reação de defesa dos tecidos vascularizados contra agressão: vasos dilatam, chega líquido e células de defesa. Sinais: rubor, calor, tumor (inchaço), dor e perda de função.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "inflamação aguda": {
  "d": "Inflamação de início rápido e curta duração, com edema (exsudato) e predomínio de neutrófilos.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "inflamação crônica": {
  "d": "Inflamação longa, com linfócitos, plasmócitos e macrófagos, formação de vasos e fibrose: destruição e reparo acontecem ao mesmo tempo.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "inflamação granulomatosa": {
  "d": "Tipo de inflamação crônica com granulomas: macrófagos ativados (epitelioides), células gigantes e linfócitos. Ex.: tuberculose, paracoccidioidomicose.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "granuloma": {
  "d": "Na patologia, agrupamento de macrófagos ativados (epitelioides) com células gigantes e linfócitos em volta. (Granuloma piogênico, apesar do nome, não é granuloma.)",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "células gigantes": {
  "d": "Células enormes com vários núcleos, formadas pela fusão de macrófagos. Aparecem nos granulomas.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "tuberculose": {
  "d": "Infecção pelo Mycobacterium tuberculosis que forma granulomas com necrose caseosa. Na boca pode dar úlcera crônica.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "hipóxia": {
  "d": "Falta de oxigênio nos tecidos. É uma das causas mais comuns de lesão celular.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "edema": {
  "d": "Acúmulo de líquido no espaço entre as células (inchaço). Na inflamação é o \"tumor\".",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "rubor": {
  "d": "Vermelhidão da inflamação, causada pela dilatação dos vasos e mais sangue no local.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "vasodilatação": {
  "d": "Aumento do calibre dos vasos sanguíneos. Na inflamação traz mais sangue: rubor e calor.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "neutrófilo": {
  "d": "Glóbulo branco de núcleo em vários lóbulos, o primeiro a chegar na inflamação aguda. Fagocita bactérias; morto, forma o pus.",
  "fonte": "Abbas, Lichtman & Pillai, Imunologia Celular e Molecular"
 },
 "macrófago": {
  "d": "Célula de defesa grande, vinda do monócito, que fagocita microrganismos e restos celulares. Típica da inflamação crônica e do granuloma.",
  "fonte": "Abbas, Lichtman & Pillai, Imunologia Celular e Molecular"
 },
 "linfócito": {
  "d": "Glóbulo branco da imunidade adaptativa. Os T regulam e atacam células; os B viram plasmócitos e fazem anticorpos.",
  "fonte": "Abbas, Lichtman & Pillai, Imunologia Celular e Molecular"
 },
 "plasmócito": {
  "d": "Célula que vem do linfócito B e produz anticorpos. Aparece muito na inflamação crônica.",
  "fonte": "Abbas, Lichtman & Pillai, Imunologia Celular e Molecular"
 },
 "fibroblasto": {
  "d": "Célula do tecido conjuntivo que produz colágeno. Essencial no reparo e na cicatriz.",
  "fonte": "Junqueira & Carneiro, Histologia Básica; Katchburian & Arana, Histologia e Embriologia Oral"
 },
 "colágeno": {
  "d": "Proteína em fibras que dá resistência ao tecido conjuntivo, produzida pelos fibroblastos. Em excesso no reparo, forma a cicatriz (fibrose).",
  "fonte": "Junqueira & Carneiro, Histologia Básica; Katchburian & Arana, Histologia e Embriologia Oral"
 },
 "angiogênese": {
  "d": "Formação de novos vasos sanguíneos a partir dos existentes. Acontece no reparo e na inflamação crônica.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "fagocitose": {
  "d": "Quando a célula de defesa engloba e destrói partículas ou microrganismos (neutrófilos e macrófagos).",
  "fonte": "Abbas, Lichtman & Pillai, Imunologia Celular e Molecular"
 },
 "imunidade inata": {
  "d": "Defesa rápida que já nasce com a gente e não precisa de contato prévio: pele, mucosas, saliva, neutrófilos, macrófagos.",
  "fonte": "Abbas, Lichtman & Pillai, Imunologia Celular e Molecular"
 },
 "imunoglobulina": {
  "d": "Anticorpo. Na saliva predomina a IgA secretora, que impede microrganismos de se prenderem às mucosas.",
  "fonte": "Abbas, Lichtman & Pillai, Imunologia Celular e Molecular"
 },
 "anticorpos": {
  "d": "Proteínas (imunoglobulinas) produzidas pelos plasmócitos que reconhecem e neutralizam um agente específico.",
  "fonte": "Abbas, Lichtman & Pillai, Imunologia Celular e Molecular"
 },
 "abscesso": {
  "d": "Coleção localizada de pus dentro de um tecido. Ex.: abscesso dentário a partir de polpa necrosada.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "pus": {
  "d": "Líquido amarelado feito de neutrófilos mortos, bactérias e restos de tecido.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "regeneração": {
  "d": "Reparo em que o tecido perdido é substituído por células iguais, sem cicatriz.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "fibrose": {
  "d": "Formação de tecido conjuntivo cicatricial (muito colágeno) no lugar do tecido perdido.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "tecido de granulação": {
  "d": "Tecido novo do reparo: vasos recém-formados, fibroblastos e células inflamatórias. Vermelho e granuloso, vira cicatriz depois.",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "lesões fundamentais": {
  "d": "Formas básicas que as lesões de pele e mucosa podem ter: mácula, pápula, nódulo, placa, vesícula, bolha, pústula, erosão, úlcera e fissura. São o \"alfabeto\" do exame.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; Tommasi, Diagnóstico em Patologia Bucal"
 },
 "mácula": {
  "d": "Mudança só de COR, plana, sem elevação nem depressão. Ex.: mácula melanótica, petéquia.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; Tommasi, Diagnóstico em Patologia Bucal"
 },
 "pápula": {
  "d": "Elevação SÓLIDA, superficial e pequena (até cerca de 5 mm).",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; Tommasi, Diagnóstico em Patologia Bucal"
 },
 "nódulo": {
  "d": "Lesão SÓLIDA maior (acima de cerca de 5 mm) e mais profunda que a pápula. Ex.: fibroma.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; Tommasi, Diagnóstico em Patologia Bucal"
 },
 "vesícula": {
  "d": "Elevação com LÍQUIDO claro, pequena (até cerca de 5 mm). Ex.: herpes.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; Tommasi, Diagnóstico em Patologia Bucal"
 },
 "bolha": {
  "d": "Elevação com LÍQUIDO, maior que a vesícula (acima de cerca de 5 mm).",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; Tommasi, Diagnóstico em Patologia Bucal"
 },
 "pústula": {
  "d": "Pequena elevação com PUS dentro.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; Tommasi, Diagnóstico em Patologia Bucal"
 },
 "erosão": {
  "d": "Perda SUPERFICIAL e parcial do epitélio, sem chegar no conjuntivo. Costuma vir de vesícula ou bolha que rompeu.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; Tommasi, Diagnóstico em Patologia Bucal"
 },
 "úlcera": {
  "d": "Perda do epitélio em TODA a espessura, com o conjuntivo exposto (fundo amarelado de fibrina). Úlcera que não cicatriza em cerca de 15 dias precisa de investigação.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; Tommasi, Diagnóstico em Patologia Bucal"
 },
 "placa": {
  "d": "Como lesão fundamental: elevação superficial mais larga do que alta (ex.: leucoplasia). Também é o nome antigo do biofilme (\"placa bacteriana\").",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; Tommasi, Diagnóstico em Patologia Bucal"
 },
 "fissura": {
  "d": "Como lesão fundamental: rachadura linear da mucosa ou da pele (solução de continuidade linear).",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; Tommasi, Diagnóstico em Patologia Bucal"
 },
 "glândulas salivares": {
  "d": "Glândulas que produzem saliva: maiores (parótida, submandibular, sublingual) e centenas de menores espalhadas em lábio, palato e bochecha.",
  "fonte": "Junqueira & Carneiro, Histologia Básica; Katchburian & Arana, Histologia e Embriologia Oral"
 },
 "glândula salivar": {
  "d": "Glândula que produz saliva. Maiores: parótida, submandibular e sublingual; menores: no lábio, palato e bochecha.",
  "fonte": "Junqueira & Carneiro, Histologia Básica; Katchburian & Arana, Histologia e Embriologia Oral"
 },
 "glândulas salivares menores": {
  "d": "Centenas de glândulas pequenas no lábio, palato, bochecha e língua. São a origem da mucocele.",
  "fonte": "Junqueira & Carneiro, Histologia Básica; Katchburian & Arana, Histologia e Embriologia Oral"
 },
 "Glândula Submandibular": {
  "d": "Glândula salivar maior abaixo da mandíbula. Seu ducto (de Wharton) abre embaixo da língua; é onde mais se formam cálculos (sialolitos).",
  "fonte": "Junqueira & Carneiro, Histologia Básica; Katchburian & Arana, Histologia e Embriologia Oral"
 },
 "glândula sublingual": {
  "d": "Menor das glândulas salivares maiores, no assoalho da boca. É a origem da rânula.",
  "fonte": "Junqueira & Carneiro, Histologia Básica; Katchburian & Arana, Histologia e Embriologia Oral"
 },
 "Ducto de Wharton": {
  "d": "Ducto da glândula submandibular, que abre na carúncula sublingual, ao lado do freio da língua. Local mais comum de sialolito.",
  "fonte": "Junqueira & Carneiro, Histologia Básica; Katchburian & Arana, Histologia e Embriologia Oral"
 },
 "mucocele": {
  "d": "Bolinha azulada e mole por extravasamento de muco: o trauma (mordida) rompe o ducto de uma glândula salivar menor e o muco escapa para o conjuntivo. Mais comum no lábio inferior; aumenta e diminui.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "rânula": {
  "d": "Mucocele grande do assoalho da boca, geralmente da glândula sublingual, lateral à linha média, que pode levantar a língua.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "sialolito": {
  "d": "\"Pedra\" de cálcio dentro do ducto de uma glândula salivar, mais comum no da submandibular. Dói e incha na hora de comer; aparece na radiografia oclusal.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "marsupialização": {
  "d": "Cirurgia que abre a lesão cística e costura as bordas na mucosa, deixando-a aberta para descomprimir e diminuir.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "cisto dermoide": {
  "d": "Cisto de desenvolvimento revestido por epitélio com anexos da pele; na boca aparece na LINHA MÉDIA do assoalho.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "adenoma pleomórfico": {
  "d": "Tumor benigno mais comum das glândulas salivares (parótida e palato). Cresce devagar, firme e indolor.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "carcinoma mucoepidermoide": {
  "d": "Tumor maligno mais comum das glândulas salivares, formado por células mucosas, epidermoides e intermediárias.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "fibroma": {
  "d": "Nódulo firme de tecido conjuntivo, reação a trauma crônico (morder a bochecha), na linha de oclusão. É a \"lesão tumoral\" mais comum da boca.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "fibroma traumático": {
  "d": "Nódulo firme, liso e da cor da mucosa, por hiperplasia de conjuntivo após trauma repetido (mordida).",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "granuloma piogênico": {
  "d": "Lesão vermelha, de crescimento rápido, que sangra fácil, reação a irritação local (biofilme, cálculo). Muito comum na gengiva e na gestação.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "anamnese": {
  "d": "Entrevista com o paciente: queixa, história da doença, saúde geral, remédios, hábitos. Primeiro passo do diagnóstico.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; Tommasi, Diagnóstico em Patologia Bucal"
 },
 "exostose": {
  "d": "Crescimento ósseo benigno na superfície do osso. A vestibular aparece na face de fora dos maxilares.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "macroglossia": {
  "d": "Língua aumentada de tamanho (ex.: hipotireoidismo, síndrome de Down, tumores vasculares).",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "microglossia": {
  "d": "Língua anormalmente pequena, alteração rara de desenvolvimento.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "tórus palatino": {
  "d": "Crescimento ósseo benigno na linha média do palato duro. Variação da normalidade, só se trata se atrapalhar prótese.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "tórus mandibular": {
  "d": "Crescimentos ósseos benignos na face LINGUAL da mandíbula, na região de pré-molares, quase sempre dos dois lados.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "osteoma": {
  "d": "Tumor benigno de osso maduro. Vários osteomas podem fazer parte da síndrome de Gardner.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "anquiloglossia": {
  "d": "\"Língua presa\": freio lingual curto ou preso perto da ponta, que limita a língua de se projetar.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "frênulo lingual": {
  "d": "Prega de mucosa que liga a parte de baixo da língua ao assoalho da boca. Curto demais = anquiloglossia.",
  "fonte": "Junqueira & Carneiro, Histologia Básica; Katchburian & Arana, Histologia e Embriologia Oral"
 },
 "fibroma ossificante": {
  "d": "Neoplasia benigna dos maxilares com tecido fibroso e osso/cemento, bem delimitada na radiografia.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "língua geográfica": {
  "d": "Áreas vermelhas na língua (perda de papilas filiformes) com borda branca, que mudam de lugar com os dias. Benigna.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "língua fissurada": {
  "d": "Língua com muitos sulcos no dorso. Variação da normalidade, comum junto com a língua geográfica.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "grânulos de Fordyce": {
  "d": "Glândulas sebáceas ectópicas na mucosa: pontinhos amarelados na bochecha e no lábio. Variação da normalidade, sem tratamento.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "leucoplasia": {
  "d": "Placa BRANCA que não sai na raspagem e não pode ser classificada como nenhuma outra doença. É a lesão potencialmente maligna mais comum da boca: biópsia.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "linha alba": {
  "d": "Linha branca na bochecha, na altura em que os dentes se encontram, por atrito. Normal.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "líquen plano": {
  "d": "Doença inflamatória crônica imunomediada com estrias brancas rendadas (estrias de Wickham), geralmente nas bochechas dos dois lados.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "leucoedema": {
  "d": "Aspecto branco-acinzentado e leitoso da mucosa da bochecha, que some quando se estica. Variação da normalidade.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "candidíase": {
  "d": "Infecção por Candida. Pseudomembranosa: placas brancas que saem na raspagem; eritematosa: áreas vermelhas (ex.: palato sob prótese).",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "candidíase pseudomembranosa": {
  "d": "\"Sapinho\": placas brancas cremosas que SAEM na raspagem, deixando base vermelha. Comum após antibiótico ou com imunidade baixa.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "candidose pseudomembranosa": {
  "d": "Mesmo que candidíase pseudomembranosa: placas brancas removíveis à raspagem, sobre base avermelhada.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "candidose": {
  "d": "Outro nome da candidíase: infecção oportunista por Candida, favorecida por prótese, antibiótico, boca seca e imunidade baixa.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "papiloma": {
  "d": "Tumor benigno do epitélio, com projeções em forma de dedo ou \"couve-flor\", ligado ao HPV.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "carcinoma espinocelular": {
  "d": "Câncer mais comum da boca (cerca de 90%), do epitélio escamoso. Fatores de risco principais: tabaco e álcool (no lábio, sol).",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "herpes labial": {
  "d": "Reativação do HSV-1 latente no gânglio trigeminal: ardência, vesículas no lábio que rompem e formam crostas em cerca de 7 a 10 dias.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "cisto periapical": {
  "d": "Cisto inflamatório no ápice de dente com polpa necrosada. Na radiografia: imagem radiolúcida unilocular no ápice. Também chamado cisto radicular.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "cisto dentígero": {
  "d": "Cisto em volta da COROA de um dente incluso (preso no osso), ligado na junção cemento-esmalte. Mais comum no terceiro molar inferior.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "ameloblastoma": {
  "d": "Tumor odontogênico benigno, mas agressivo localmente, mais comum na região posterior da mandíbula. Imagem em \"bolhas de sabão\".",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "odontoma": {
  "d": "Tumor odontogênico mais comum, na verdade uma malformação: massa de esmalte, dentina e polpa (composto, com \"dentículos\", ou complexo).",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "queratocisto odontogênico": {
  "d": "Cisto odontogênico com revestimento de queratina que cresce bastante dentro do osso e volta com frequência. Comum na mandíbula posterior.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "cisto de erupção": {
  "d": "Versão do cisto dentígero nos tecidos moles: bolha azulada na gengiva sobre o dente que está nascendo.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "cisto periodontal lateral": {
  "d": "Cisto de desenvolvimento pequeno, ao LADO da raiz de dente com polpa viva, mais comum na região de pré-molares inferiores.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "cisto do ducto nasopalatino": {
  "d": "Cisto não odontogênico mais comum, na linha média da maxila anterior, entre as raízes dos incisivos centrais (às vezes em forma de coração).",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "biópsia": {
  "d": "Retirada de tecido vivo para exame no microscópio (histopatológico). É o padrão-ouro para o diagnóstico de lesões.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; Tommasi, Diagnóstico em Patologia Bucal"
 },
 "biópsia incisional": {
  "d": "Remoção de só uma PARTE representativa da lesão, indicada em lesão grande ou suspeita de câncer, para depois planejar o tratamento.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; Tommasi, Diagnóstico em Patologia Bucal"
 },
 "biópsia excisional": {
  "d": "Remoção da lesão INTEIRA com margem, indicada em lesões pequenas que parecem benignas. Diagnostica e trata ao mesmo tempo.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; Tommasi, Diagnóstico em Patologia Bucal"
 },
 "citologia esfoliativa": {
  "d": "Raspado das células da superfície da lesão para ver no microscópio. Ajuda (ex.: candidíase), mas não substitui a biópsia.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; Tommasi, Diagnóstico em Patologia Bucal"
 },
 "imuno-histoquímica": {
  "d": "Técnica que usa anticorpos marcados para mostrar proteínas nas células da lâmina. Ex.: S-100, HMB-45 e Melan-A confirmam células melanocíticas.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; revisões sobre melanoma de mucosa oral (Oral Oncology)"
 },
 "histopatológico": {
  "d": "Exame do tecido retirado na biópsia, cortado e corado (HE) para ver no microscópio.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; Tommasi, Diagnóstico em Patologia Bucal"
 },
 "melanoma": {
  "d": "Câncer dos melanócitos (células do pigmento). Na boca é raro (cerca de 0,5% dos cânceres orais), mais no palato e gengiva superior, e muito agressivo. Pode não ter pigmento.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; revisões sobre melanoma de mucosa oral (Oral Oncology)"
 },
 "melanina": {
  "d": "Pigmento marrom-escuro produzido pelos melanócitos. Explica pigmentação racial, mácula melanótica, nevo e melanoma.",
  "fonte": "Junqueira & Carneiro, Histologia Básica; Katchburian & Arana, Histologia e Embriologia Oral"
 },
 "pigmentação racial": {
  "d": "Manchas marrons fisiológicas e simétricas na gengiva, comuns em pessoas de pele mais escura. Presentes \"desde sempre\", sem tratamento.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "tatuagem por amálgama": {
  "d": "Mancha cinza-azulada por partículas de amálgama presas na mucosa, perto de restaurações ou extrações. A radiografia pode mostrar o metal.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "melanose do fumante": {
  "d": "Pigmentação marrom na gengiva vestibular anterior inferior de fumantes, pelo estímulo do cigarro aos melanócitos. Melhora ao parar de fumar.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "mácula melanótica": {
  "d": "Mancha marrom única, pequena e bem delimitada (lábio, gengiva, palato): lesão melanocítica focal mais comum da boca. Benigna.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "nevo azul": {
  "d": "Nevo (pinta) de melanócitos profundos, azulado. Na boca é mais comum no palato.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "nevo melanocítico": {
  "d": "A \"pinta\" comum: acúmulo benigno de células névicas. Na boca é raro e merece biópsia para diferenciar de melanoma.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "Sarcoma de Kaposi": {
  "d": "Neoplasia de vasos ligada ao herpesvírus humano 8 (HHV-8), comum na AIDS: manchas e nódulos roxos, muito no palato.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "Doença de Addison": {
  "d": "Insuficiência das glândulas adrenais: o excesso de ACTH escurece pele e mucosas de forma difusa, além de fraqueza e pressão baixa.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "épulis": {
  "d": "Nome clínico genérico para um \"tumor\" de gengiva, geralmente lesão reativa (granuloma piogênico, fibroma, lesão de células gigantes).",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "BRAF": {
  "d": "Gene cuja mutação (BRAF V600E) é comum no melanoma de pele e serve de alvo para remédios. No melanoma de mucosa é rara, o que limita a terapia-alvo.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; revisões sobre melanoma de mucosa oral (Oral Oncology)"
 },
 "HMB-45": {
  "d": "Marcador de imuno-histoquímica que reconhece células melanocíticas; usado com S-100, Melan-A e SOX10 para confirmar melanoma.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; revisões sobre melanoma de mucosa oral (Oral Oncology)"
 },
 "hemangioma": {
  "d": "Proliferação benigna de vasos sanguíneos: lesão vermelha a roxa que embranquece quando apertada (vitropressão).",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "petéquias": {
  "d": "Pontinhos vermelhos (até uns 2 mm) de sangue que saiu dos vasos. Não somem ao apertar.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; Tommasi, Diagnóstico em Patologia Bucal"
 },
 "equimoses": {
  "d": "Manchas roxas maiores por sangue extravasado no tecido, como depois de um trauma (\"roxo\").",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; Tommasi, Diagnóstico em Patologia Bucal"
 },
 "telangiectasias": {
  "d": "Pequenos vasos superficiais DILATADOS (não é sangue fora do vaso), que somem ao apertar.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; Tommasi, Diagnóstico em Patologia Bucal"
 },
 "gengivite": {
  "d": "Inflamação da gengiva causada pelo biofilme na margem gengival: vermelhidão, inchaço e sangramento, sem perda de inserção. É reversível com higiene.",
  "fonte": "Newman et al., Carranza Periodontia Clínica"
 },
 "periodontite": {
  "d": "Inflamação que destrói os tecidos de suporte do dente (ligamento e osso), com bolsa e perda de inserção. Começa pelo biofilme; a resposta do hospedeiro causa a destruição.",
  "fonte": "Newman et al., Carranza Periodontia Clínica"
 },
 "bolsa periodontal": {
  "d": "Aprofundamento patológico do sulco gengival por perda de inserção e osso, na periodontite.",
  "fonte": "Newman et al., Carranza Periodontia Clínica"
 },
 "cálculo dentário": {
  "d": "\"Tártaro\": biofilme que mineralizou com cálcio e fosfato da saliva. Não sai na escovação, só com raspagem.",
  "fonte": "Newman et al., Carranza Periodontia Clínica"
 },
 "cálculo dental": {
  "d": "\"Tártaro\": biofilme mineralizado preso ao dente. Só sai com raspagem profissional.",
  "fonte": "Newman et al., Carranza Periodontia Clínica"
 },
 "tártaro": {
  "d": "Nome popular do cálculo dental: biofilme mineralizado.",
  "fonte": "Newman et al., Carranza Periodontia Clínica"
 },
 "raspagem": {
  "d": "Remoção profissional do cálculo e do biofilme da superfície do dente com curetas ou ultrassom.",
  "fonte": "Newman et al., Carranza Periodontia Clínica"
 },
 "matéria alba": {
  "d": "Acúmulo mole e esbranquiçado de bactérias, células descamadas e restos de alimento, sem a organização do biofilme. Sai com jato de água.",
  "fonte": "Newman et al., Carranza Periodontia Clínica"
 },
 "Cutícula de Nasmyth": {
  "d": "Membrana que cobre o esmalte de dentes recém-erupcionados (restos do órgão do esmalte) e se desgasta logo com a mastigação.",
  "fonte": "Junqueira & Carneiro, Histologia Básica; Katchburian & Arana, Histologia e Embriologia Oral"
 },
 "endocardite infecciosa": {
  "d": "Infecção do revestimento interno do coração, geralmente das válvulas, por bactérias do sangue (muitas vezes estreptococos da boca).",
  "fonte": "Wilson et al., Prevention of Viridans Group Streptococcal Infective Endocarditis, AHA 2021"
 },
 "endocardite": {
  "d": "Infecção ou inflamação do endocárdio, em geral das válvulas cardíacas. Bactérias da boca podem chegar lá pela corrente sanguínea.",
  "fonte": "Wilson et al., Prevention of Viridans Group Streptococcal Infective Endocarditis, AHA 2021"
 },
 "bacteremia": {
  "d": "Presença de bactérias no sangue. Acontece em procedimentos odontológicos e também ao escovar ou mastigar, principalmente com gengiva inflamada.",
  "fonte": "Wilson et al., Prevention of Viridans Group Streptococcal Infective Endocarditis, AHA 2021"
 },
 "profilaxia antibiótica": {
  "d": "Dose de antibiótico ANTES do procedimento para prevenir infecção à distância. Indicada só para alto risco (prótese valvar, endocardite prévia) em procedimentos que manipulam gengiva ou periápice.",
  "fonte": "Wilson et al., Prevention of Viridans Group Streptococcal Infective Endocarditis, AHA 2021"
 },
 "próteses valvares": {
  "d": "Válvulas cardíacas artificiais. Quem tem é de alto risco para endocardite e pode precisar de profilaxia antibiótica.",
  "fonte": "Wilson et al., Prevention of Viridans Group Streptococcal Infective Endocarditis, AHA 2021"
 },
 "interproximal": {
  "d": "Radiografia \"bitewing\": mostra as coroas superiores e inferiores e a crista óssea juntas. Melhor para cárie nas proximais dos posteriores.",
  "fonte": "White & Pharoah, Radiologia Oral: fundamentos e interpretação"
 },
 "periapical": {
  "d": "Radiografia que mostra o dente inteiro, da coroa ao ápice, e o osso em volta. Boa para lesão periapical e reabsorção.",
  "fonte": "White & Pharoah, Radiologia Oral: fundamentos e interpretação"
 },
 "oclusal": {
  "d": "Na radiologia, a radiografia com o filme mordido entre os dentes, que mostra área maior que a periapical (ex.: sialolito no assoalho).",
  "fonte": "White & Pharoah, Radiologia Oral: fundamentos e interpretação"
 },
 "panorâmica": {
  "d": "Radiografia que mostra os dois maxilares, todos os dentes e as ATMs numa imagem só. Boa visão geral, mas sem detalhe fino nem 3D.",
  "fonte": "White & Pharoah, Radiologia Oral: fundamentos e interpretação"
 },
 "tomografia": {
  "d": "Exame em cortes; a tomografia de feixe cônico (TCFC) mostra os maxilares em 3D, com corticais e canal mandibular.",
  "fonte": "White & Pharoah, Radiologia Oral: fundamentos e interpretação"
 },
 "radiolúcida": {
  "d": "Área escura na radiografia: o raio X atravessa fácil porque há pouco mineral (cisto, cárie, lesão).",
  "fonte": "White & Pharoah, Radiologia Oral: fundamentos e interpretação"
 },
 "radiopacas": {
  "d": "Áreas claras na radiografia: o raio X é barrado por algo denso (metal, osso, esmalte).",
  "fonte": "White & Pharoah, Radiologia Oral: fundamentos e interpretação"
 },
 "crista óssea": {
  "d": "Topo do osso alveolar entre os dentes. Na interproximal, a altura dela mostra perda óssea periodontal.",
  "fonte": "White & Pharoah, Radiologia Oral: fundamentos e interpretação"
 },
 "reabsorção radicular": {
  "d": "Perda de estrutura da raiz por células clásticas, por inflamação, pressão ou trauma.",
  "fonte": "White & Pharoah, Radiologia Oral: fundamentos e interpretação"
 },
 "canal mandibular": {
  "d": "Canal dentro da mandíbula por onde passam o nervo e os vasos alveolares inferiores.",
  "fonte": "White & Pharoah, Radiologia Oral: fundamentos e interpretação"
 },
 "acantose": {
  "d": "Aumento da espessura da camada espinhosa do epitélio.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "hiperceratose": {
  "d": "Aumento da espessura da camada de queratina do epitélio; deixa a mucosa branca.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "epitélio pavimentoso estratificado": {
  "d": "Epitélio de várias camadas com células da superfície achatadas. Reveste a boca e a pele.",
  "fonte": "Junqueira & Carneiro, Histologia Básica; Katchburian & Arana, Histologia e Embriologia Oral"
 },
 "exocitose": {
  "d": "Na histopatologia, presença de células inflamatórias migrando DENTRO do epitélio.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "espongiose": {
  "d": "Acúmulo de líquido entre as células do epitélio, que se afastam como esponja.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed."
 },
 "degeneração hidrópica": {
  "d": "Lesão reversível em que a célula incha por acúmulo de água no citoplasma (falha da bomba de sódio).",
  "fonte": "Brasileiro Filho, Bogliolo Patologia Geral; Kumar, Abbas & Aster, Robbins Patologia Básica"
 },
 "esterilização": {
  "d": "Processo que destrói TODAS as formas de vida microbiana, inclusive esporos. No consultório, autoclave.",
  "fonte": "ANVISA, Serviços Odontológicos: prevenção e controle de riscos (2006)"
 },
 "desinfecção": {
  "d": "Reduz ou elimina microrganismos de superfícies e objetos, mas não garante matar esporos.",
  "fonte": "ANVISA, Serviços Odontológicos: prevenção e controle de riscos (2006)"
 },
 "autoclave": {
  "d": "Aparelho que esteriliza com vapor de água sob pressão (cerca de 121 a 134 °C).",
  "fonte": "ANVISA, Serviços Odontológicos: prevenção e controle de riscos (2006)"
 },
 "higienização das mãos": {
  "d": "Lavar as mãos com água e sabão ou usar álcool gel. Medida mais simples e importante para não passar microrganismos.",
  "fonte": "ANVISA, Serviços Odontológicos: prevenção e controle de riscos (2006)"
 },
 "evidenciação de placa": {
  "d": "Uso de corante (pastilha ou solução) que tinge o biofilme para torná-lo visível, para mostrar ao paciente onde a escovação falha.",
  "fonte": "Newman et al., Carranza Periodontia Clínica"
 },
 "O'Leary": {
  "d": "Índice de placa de O'Leary (1972): faces coradas ÷ faces examinadas × 100. No índice original são 4 faces por dente (mesial, distal, vestibular e lingual); o material da disciplina conta 5 por dente.",
  "fonte": "Newman et al., Carranza Periodontia Clínica"
 },
 "primeira consulta": {
  "d": "Consulta inicial: anamnese, exame clínico e diagnóstico da higiene (evidenciação de placa e índice de O'Leary) para orientar a escovação.",
  "fonte": "Newman et al., Carranza Periodontia Clínica"
 },
 "aparelho": {
  "d": "Aparelho ortodôntico fixo: o corante da evidenciação pode manchar as borrachas e a resina dos bráquetes.",
  "fonte": "Newman et al., Carranza Periodontia Clínica"
 },
 "fluorterapia": {
  "d": "Aplicação profissional de flúor (gel, espuma ou verniz) no consultório.",
  "fonte": "Fejerskov & Kidd, Cárie Dentária: a doença e seu tratamento clínico; Ministério da Saúde, Saúde Bucal no SUS (2018)"
 },
 "diagnóstico clínico": {
  "d": "Diagnóstico feito juntando anamnese, características da lesão, local, tempo de evolução e exame físico; exames complementares ajudam, não substituem.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; Tommasi, Diagnóstico em Patologia Bucal"
 },
 "exames complementares": {
  "d": "Exames que ajudam o diagnóstico depois do exame clínico: radiografia, biópsia, exame de sangue.",
  "fonte": "Neville et al., Patologia Oral e Maxilofacial, 4ª ed.; Tommasi, Diagnóstico em Patologia Bucal"
 }
};
 Object.keys(N).forEach(function (k) { var v = G[k]; if (!v) { G[k] = N[k]; return; } if (typeof v === "string") v = G[k] = { d: v }; if (!v.img && N[k].img) { v.img = N[k].img; v.legs = N[k].legs; v.alts = N[k].alts; v.fonte = v.fonte ? v.fonte + ((N[k].fonte.match(/. Imagens:.*$/) || [""])[0]) : N[k].fonte; } }); })();
