/* Dicionário de Farmaco (balões nas palavras). Rafael 25/11/2026: "bastante link, com imagens e/ou tabelas".
   Conteúdo tirado do próprio banco de Farmaco (aulas do prof. Gustavo, SM1, SM2). Desenhos dos nervos: img/nervos (fontes em img/nervos/FONTES.md). */
(function () {
  var B = window.BANCOS && window.BANCOS.farmaco; if (!B) return;
  var F = 'Aulas do prof. Gustavo e simulados SM1/SM2';
  var N = function (svg) { return 'img/nervos/' + svg; };
  var TAB = function (cab, linhas) {
    return '<table class="gtab"><thead><tr>' + cab.map(function (c) { return '<th>' + c + '</th>'; }).join('') + '</tr></thead><tbody>'
      + linhas.map(function (l) { return '<tr>' + l.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
  };
  var G = {
    'anestesia local': { d: 'Interrupção REVERSÍVEL da condução do impulso nervoso numa região, sem perda de consciência. Age nos nervos periféricos.', fonte: F },
    'canais de sódio': { d: 'O anestésico local bloqueia os canais de sódio voltagem-dependentes do nervo. Sem entrada de sódio não há despolarização, e o impulso da dor não passa.', fonte: F },
    'base fraca': { d: 'O anestésico local é uma base fraca. Em pH ácido (inflamação, abscesso) predomina a forma ionizada, que atravessa mal a membrana do nervo: por isso a anestesia falha no dente inflamado.', fonte: F },
    'éster': { titulo: 'Éster x amida', d: 'A cadeia intermediária define o tipo do anestésico.', html: TAB(['Tipo', 'Exemplos', 'O que lembrar'], [['Éster', 'Procaína (e a cocaína, histórica)', 'Mais alergênico, pouco usado hoje'], ['Amida', 'Lidocaína, articaína, mepivacaína, prilocaína, bupivacaína', 'As mais usadas; melhor perfil de segurança']]), fonte: F },
    'amida': { titulo: 'Éster x amida', d: 'A cadeia intermediária define o tipo do anestésico.', html: TAB(['Tipo', 'Exemplos', 'O que lembrar'], [['Éster', 'Procaína (e a cocaína, histórica)', 'Mais alergênico, pouco usado hoje'], ['Amida', 'Lidocaína, articaína, mepivacaína, prilocaína, bupivacaína', 'As mais usadas; melhor perfil de segurança']]), fonte: F },
    'grupo aromático': { d: 'Parte LIPOFÍLICA do anestésico: é o que deixa ele atravessar a membrana do nervo. A amina terminal é a parte hidrofílica, ligada à solubilidade em água.', fonte: F },
    'procaína': { d: 'Anestésico do tipo ÉSTER, hoje pouco usado por ter maior potencial alergênico.', fonte: F },
    'lidocaína': { d: 'Amida, a referência da odontologia. Tubete a 2% = 36 mg (20 mg/mL x 1,8 mL). Dose máxima usada no banco: 4,4 mg/kg.', fonte: F },
    'articaína': { d: 'AMIDA com anel tiofeno e um grupo éster extra (por isso confunde). Tubete a 4% = 72 mg. Dose máxima usada no banco: 7 mg/kg.', fonte: F },
    'prilocaína': { d: 'Amida. Em dose alta gera orto-toluidina, que causa metemoglobinemia (cianose sem problema pulmonar).', fonte: F },
    'bupivacaína': { d: 'Amida de LONGA duração e alta potência: cirurgias longas e dor pós-operatória. Início mais lento.', fonte: F },
    'metemoglobinemia': { d: 'A hemoglobina vira metemoglobina (ferro oxidado) e não carrega oxigênio: lábios e unhas arroxeados. Causa clássica: prilocaína em dose alta (metabólito orto-toluidina).', fonte: F },
    'tubete': { titulo: 'Tubete e dose máxima', d: 'Tubete = 1,8 mL. Conta: mg/mL x 1,8 = mg por tubete. Dose máxima = peso x mg/kg. Arredonda sempre para BAIXO.', html: TAB(['Anestésico', 'mg por tubete', 'Dose máx.', 'Exemplo'], [['Lidocaína 2%', '36 mg', '4,4 mg/kg', '60 kg = 264 mg = 7 tubetes'], ['Articaína 4%', '72 mg', '7 mg/kg', '20 kg = 140 mg = 1,9 tubete']]), fonte: F },
    'dose máxima': { titulo: 'Dose máxima: anestésico e vasoconstritor', d: 'Calcule os DOIS limites e use o MENOR.', html: TAB(['Limite', 'Conta', 'Resultado'], [['Lidocaína 2%, 60 kg', '60 x 4,4 = 264 mg ÷ 36', '7 tubetes'], ['Epinefrina 1:100.000, saudável', '0,2 mg ÷ 0,018', '11 tubetes'], ['Epinefrina 1:100.000, cardiopata', '0,04 mg ÷ 0,018', '2 tubetes'], ['Epinefrina 1:200.000, cardiopata', '0,04 mg ÷ 0,009', '4 tubetes']]), fonte: F },
    'vasoconstritor': { d: 'Contrai os vasos do local: o anestésico é absorvido mais devagar, dura mais, fica menos tóxico e sangra menos. NÃO acelera o metabolismo hepático.', fonte: F },
    'epinefrina': { d: '1:100.000 = 0,01 mg/mL = 0,018 mg por tubete. Teto: 0,2 mg no saudável e 0,04 mg no cardiopata. Diabético e hipertenso controlados podem receber, com dose limitada e aspiração.', fonte: F },
    'felipressina': { d: 'Vasoconstritor que age mais no lado VENOSO: hemostasia pobre. Para sangrar menos, a epinefrina é melhor.', fonte: F },
    'alfa-1': { titulo: 'Receptores adrenérgicos', d: 'O que cada receptor faz.', html: TAB(['Receptor', 'Onde', 'Efeito'], [['Alfa-1', 'Músculo liso dos vasos', 'Vasoconstrição (mucosa empalidece)'], ['Beta-1', 'Coração', 'Acelera o coração'], ['Beta-2', 'Músculo esquelético, brônquios', 'Vasodilatação e broncodilatação']]), fonte: F },
    'beta-2': { titulo: 'Receptores adrenérgicos', d: 'O que cada receptor faz.', html: TAB(['Receptor', 'Onde', 'Efeito'], [['Alfa-1', 'Músculo liso dos vasos', 'Vasoconstrição (mucosa empalidece)'], ['Beta-1', 'Coração', 'Acelera o coração'], ['Beta-2', 'Músculo esquelético, brônquios', 'Vasodilatação e broncodilatação']]), fonte: F },
    'parassimpático': { titulo: 'SNA e saliva', d: 'Simpático x parassimpático na boca.', html: TAB(['Divisão', 'Saliva'], [['Parassimpático', 'Aquosa e abundante'], ['Simpático (ansiedade)', 'Viscosa e rica em proteínas']]), fonte: F },
    'simpático': { titulo: 'SNA e saliva', d: 'Simpático x parassimpático na boca.', html: TAB(['Divisão', 'Saliva'], [['Parassimpático', 'Aquosa e abundante'], ['Simpático (ansiedade)', 'Viscosa e rica em proteínas']]), fonte: F },
    'farmacocinética': { d: 'O que o CORPO faz com o fármaco: ADME (absorção, distribuição, metabolismo, excreção). Farmacodinâmica é o que o fármaco faz no corpo.', fonte: F },
    'farmacodinâmica': { d: 'O que o FÁRMACO faz no corpo: mecanismo, receptores, dose-resposta. Farmacocinética é o que o corpo faz com ele.', fonte: F },
    'primeira passagem': { d: 'O fígado biotransforma parte do fármaco antes de ele chegar à circulação: chega menos fármaco inalterado. A via endovenosa não passa por isso.', fonte: F },
    'biodisponibilidade': { d: 'Fração do fármaco que chega inalterada à circulação. Na via endovenosa é 100%.', fonte: F },
    'índice terapêutico': { d: 'IT = dose tóxica ÷ dose eficaz. IT alto = grande margem de segurança. IT baixo = pouca distância entre tratar e intoxicar.', fonte: F },
    'tolerância': { d: 'Resposta que diminui com o uso repetido do fármaco (também chamada taquifilaxia).', fonte: F },
    'taquifilaxia': { d: 'Resposta que diminui com o uso repetido do fármaco (tolerância).', fonte: F },
    'COX-1': { titulo: 'COX-1 x COX-2', d: 'Por que cada anti-inflamatório tem um risco diferente.', html: TAB(['Inibe', 'Exemplos', 'Risco'], [['COX-1 e COX-2 (não seletivo)', 'Ibuprofeno, diclofenaco', 'Estômago (perde a proteção da mucosa) e sangramento'], ['Só COX-2 (seletivo)', 'Coxibes', 'Risco cardiovascular: evitar no cardiopata']]), fonte: F },
    'COX-2': { titulo: 'COX-1 x COX-2', d: 'Por que cada anti-inflamatório tem um risco diferente.', html: TAB(['Inibe', 'Exemplos', 'Risco'], [['COX-1 e COX-2 (não seletivo)', 'Ibuprofeno, diclofenaco', 'Estômago (perde a proteção da mucosa) e sangramento'], ['Só COX-2 (seletivo)', 'Coxibes', 'Risco cardiovascular: evitar no cardiopata']]), fonte: F },
    'dipirona': { d: 'Efeito pequeno e reversível na plaqueta e não agride o estômago como os AINEs: escolha segura no paciente com varfarina.', fonte: F },
    'paracetamol': { d: 'Analgésico de escolha na gestante. Boa ação analgésica e antitérmica, pouca anti-inflamatória.', fonte: F },
    'varfarina': { d: 'Anticoagulante. Evitar AAS e AINEs (somam sangramento); a dipirona é a escolha mais segura.', fonte: F },
    'clavulanato': { d: 'Inibe a betalactamase, protegendo a amoxicilina. NÃO muda a alergia: amoxicilina com clavulanato continua sendo penicilina.', fonte: F },
    'betalactamase': { d: 'Enzima de bactérias que quebra o anel betalactâmico e inativa a amoxicilina. O clavulanato bloqueia essa enzima.', fonte: F },
    'clindamicina': { d: 'Alternativa no alérgico à penicilina para tratar infecção. A AHA 2021 tirou ela da profilaxia de endocardite pelo risco de colite por C. difficile.', fonte: F },
    'endocardite': { titulo: 'Profilaxia de endocardite', d: 'Só para alto risco: endocardite prévia, prótese de válvula e algumas cardiopatias congênitas.', html: TAB(['Quem', 'Esquema'], [['Adulto', 'Amoxicilina 2 g VO, dose única, 30 a 60 min antes'], ['Criança', 'Amoxicilina 50 mg/kg, mesmo horário']]), fonte: 'AHA 2021, citada no banco' },
    'midazolam': { d: 'Benzodiazepínico de início rápido e curta duração: 7,5 mg VO cerca de 30 min antes, paciente acompanhado. Antagonista: flumazenil.', fonte: F },
    'flumazenil': { d: 'Antagonista dos BENZODIAZEPÍNICOS (reverte a sedação). Pegadinha: a naloxona é dos opioides.', fonte: F },
    'naloxona': { d: 'Antagonista dos OPIOIDES. Não reverte benzodiazepínico (esse é o flumazenil).', fonte: F },
    'dexametasona': { d: 'Corticoide em dose única cerca de 1 hora antes da cirurgia (analgesia preemptiva): menos edema, trismo e dor. Supressão da suprarrenal é risco do uso PROLONGADO.', fonte: F },
    'receita azul': { titulo: 'Tipos de receita', d: 'O que muda por classe de remédio.', html: TAB(['Remédio', 'Receita', 'Validade'], [['Benzodiazepínico (B1)', 'Azul, numerada', '30 dias, só no estado'], ['Antimicrobiano', '2 vias, 1ª retida', '10 dias da emissão']]), fonte: 'Portaria 344/98 e RDC 20/2011, citadas no banco' },
    'trismo': { d: 'Espasmo dos músculos da mastigação (pterigóideo medial, masseter) por trauma da agulha, punções repetidas ou hematoma.', fonte: F },
    'hematoma': { d: 'Lesão de vaso pela agulha. O alveolar superior posterior (PSA) é a técnica que mais causa: agulha profunda atinge o plexo venoso pterigóideo. Conduta: compressão.', fonte: F },
    'parestesia': { d: 'Dormência que persiste depois do efeito do anestésico. O nervo mais atingido depois do bloqueio mandibular é o lingual.', fonte: F },
    'plexo venoso pterigóideo': { d: 'Rede de veias sem válvulas na fossa infratemporal. Agulha profunda demais no PSA ou no bloqueio mandibular causa hematoma.', fonte: F },
    'paralisia facial': { d: 'Agulha muito para trás no bloqueio do alveolar inferior: a solução cai na parótida e anestesia o nervo facial. É transitória.', fonte: F },
    'língula': { d: 'Lâmina óssea (espinha de Spix) que protege o forame mandibular, na face medial do ramo. É a referência do bloqueio do alveolar inferior.', img: N('mandibula-1-resposta.svg'), fonte: F },
    'forame mandibular': { d: 'Por onde entram o nervo e os vasos alveolares inferiores, protegido pela língula. Alvo do bloqueio do alveolar inferior.', img: N('mandibula-1-resposta.svg'), fonte: F },
    'alveolar inferior': { d: 'Bloqueio pela face medial do ramo, mirando acima da língula. Depois do contato ósseo: recua 1 mm, aspira e injeta 1,0 a 1,5 mL devagar. A vestibular dos molares precisa do bloqueio do bucal.', img: N('mandibula-1-resposta.svg'), fonte: F },
    'nervo lingual': { d: 'Inerva os 2/3 anteriores da língua. É o nervo mais atingido nas parestesias depois do bloqueio mandibular.', img: N('ramo-2-resposta.svg'), fonte: F },
    'nervo mentual': { d: 'Sai pelo forame mentual, entre os pré-molares inferiores: lábio inferior e mento.', img: N('mandibula-3-resposta.svg'), fonte: F },
    'nervo bucal': { d: 'Bloqueio com agulha curta na mucosa distal e vestibular ao último molar, 0,3 a 0,5 mL: mucosa e gengiva vestibular dos molares inferiores.', fonte: F },
    'Vazirani-Akinosi': { titulo: 'Vazirani-Akinosi x Gow-Gates', d: 'As duas técnicas alternativas do bloqueio mandibular.', html: TAB(['Técnica', 'Boca', 'Quando'], [['Vazirani-Akinosi', 'FECHADA, agulha paralela ao plano oclusal', 'Limitação de abertura (trismo)'], ['Gow-Gates', 'Bem ABERTA, agulha rumo ao colo do côndilo', '1,8 mL']]), fonte: F },
    'Gow-Gates': { titulo: 'Vazirani-Akinosi x Gow-Gates', d: 'As duas técnicas alternativas do bloqueio mandibular.', html: TAB(['Técnica', 'Boca', 'Quando'], [['Vazirani-Akinosi', 'FECHADA, agulha paralela ao plano oclusal', 'Limitação de abertura (trismo)'], ['Gow-Gates', 'Bem ABERTA, agulha rumo ao colo do côndilo', '1,8 mL']]), fonte: F },
    'alveolar superior posterior': { d: 'PSA: molares superiores. Agulha curta pela vestibular acima do 2º molar, 0,9 a 1,2 mL. Pode não pegar a raiz mesiovestibular do 1º molar (essa é do ASM). É a técnica que mais causa hematoma.', img: N('maxila-1-resposta.svg'), fonte: F },
    'alveolar superior médio': { d: 'ASM: pré-molares e raiz mesiovestibular do 1º molar. Punção no fundo de vestíbulo do 2º pré-molar, 0,9 a 1,2 mL. Pode estar ausente em parte das pessoas.', img: N('maxila-2-resposta.svg'), fonte: F },
    'alveolar superior anterior': { d: 'ASA: incisivos e canino superiores. Sai do infraorbitário.', img: N('maxila-3-resposta.svg'), fonte: F },
    'infraorbitário': { d: 'Anestesia o ASA e o ASM (incisivos, canino e, se o ASM existir, pré-molares), mais lábio superior, asa do nariz e pálpebra inferior. Punção no fundo de vestíbulo sobre o 1º pré-molar.', img: N('maxila-4-resposta.svg'), fonte: F },
    'nasopalatino': { d: 'Punção na papila incisiva, 0,2 a 0,3 mL, devagar (dói). Anestesia o palato de canino a canino. Sai pelo forame incisivo.', img: N('palato-1-resposta.svg'), fonte: F },
    'palatino maior': { d: 'Perto do forame palatino maior, 0,25 a 0,5 mL: mucosa palatina de pré-molares e molares.', img: N('palato-2-resposta.svg'), fonte: F },
    'intraóssea': { d: 'Perfuração prévia do osso, latência imediata. Risco de taquicardia, porque o vasoconstritor cai rápido na circulação.', fonte: F },
    'anestesia tópica': { d: 'Aplicada na mucosa, sem punção: bloqueio só superficial, de ação curta.', fonte: F },
    'aspiração': { d: 'Obrigatória em toda técnica, para evitar injeção dentro do vaso. Aspiração positiva = reposicionar a agulha e aspirar de novo.', fonte: F },
    'mandibular (V3)': { d: 'Única divisão mista do trigêmeo (sensitiva e motora): leva a parte motora dos músculos da mastigação. Sai pelo forame oval.', fonte: F }
  };
  /* FOTOS REAIS (Rafael 25/11/2026: "preciso de mais imagens... uma imagem só às vezes não ilustra bem").
     Todas do Wikimedia Commons, licença livre, por link direto (nada baixado). Créditos completos em img/farmaco-FONTES.md.
     Tamanho 960px: o Commons recusa 800px desde 2026 ("Use thumbnail sizes listed on w.wiki/GHai"). */
  var W = 'https://upload.wikimedia.org/wikipedia/commons/';
  var T = function (p, arq) { return W + 'thumb/' + p + '/' + arq + '/960px-' + arq; };
  var C = {
    gray: 'Henry Vandyke Carter, Gray\'s Anatomy 1918, domínio público',
    grayHelgo: 'Henry Vandyke Carter (Gray\'s Anatomy), destaque de Helgo13, domínio público',
    olho: 'Armin Kübelbeck, CC BY-SA 3.0', vacina: 'Nachtbold, CC0',
    godart: 'Thomas Godart, Wellcome Collection, CC BY 4.0', lynch: 'Patrick J. Lynch, CC BY 2.5',
    berichard: 'Berichard, CC BY-SA 3.0', eplasty: 'Ankit Jain, Anuradha Patel e Ian C. Hoppe (revista Eplasty), CC BY-SA 4.0',
    choco: 'Thomas M. Nappe, Anthony M. Pacelli e Kenneth Katz, CC BY-SA 4.0', shihana: 'Fathima Shihana, CC BY-SA 3.0',
    lesion: 'Lesion, CC BY-SA 3.0', rosario: 'RosarioVanTulpe, CC BY-SA 3.0', wasswa: 'Jameswasswa, CC BY-SA 4.0',
    dcamp: 'Amy D\'Camp, domínio público', buttonwillow: 'ManfromButtonwillow, CC BY-SA 3.0',
    bp3d: 'BodyParts3D (DBCLS), CC BY-SA 2.1 JP', anat90: 'Anatomist90, CC BY-SA 3.0', partynia: 'Partynia, CC BY-SA 4.0',
    koya: 'Daisuke Koya, Kazuyuki Shibuya, Ryuichi Kikkawa e Masakazu Haneda, CC BY 2.0', marina: 'MarinaVladivostok, CC0',
    scian: 'scientificanimations.com, CC BY-SA 4.0'
  };
  /* [url, legenda, texto alternativo, crédito] */
  var I = {
    olho: [T('d/d3', 'Black_Eye_01.jpg'), 'Hematoma em volta do olho depois da extração de um siso, dia a dia: roxo, depois verde e amarelo até sumir.', 'Sequência de fotos de olho roxo que vai clareando', C.olho],
    vacina: [T('3/34', 'H%C3%A4matom_nach_Impfung.png'), 'Hematoma no braço depois de uma injeção: a agulha lesou um vaso e o sangue vazou para o tecido.', 'Braço com mancha roxa no local de uma injeção', C.vacina],
    fossa: [W + 'a/a7/Gray189.png', 'Fossa infratemporal (Gray), entre o túber da maxila e a lâmina lateral do pterigoide: é nesse espaço que fica o plexo venoso pterigóideo, que a agulha profunda do PSA pode furar.', 'Desenho do crânio de lado mostrando a fossa infratemporal', C.gray],
    pterigMed: [W + '2/2d/Gray_%E2%80%94_musculus_pterygoideus_medialis.png', 'Pterigóideo medial em vermelho: fica ao lado da agulha no bloqueio do alveolar inferior; o trauma dele dá o trismo.', 'Desenho da mandíbula com o músculo pterigóideo medial destacado', C.grayHelgo],
    masseter: [W + '7/7e/Gray_%E2%80%94_musculus_masseter.png', 'Masseter em vermelho: o outro músculo que fecha a boca e pode entrar em espasmo.', 'Desenho do crânio com o músculo masseter destacado', C.grayHelgo],
    paralisia: [T('2/29', 'Face_of_a_man_with_right_facial_paralysis_Wellcome_L0061825.jpg'), 'Paralisia facial (desenho histórico): um lado do rosto sem tônus, boca caída e olho que não fecha.', 'Desenho de rosto com paralisia de um lado', C.godart],
    facial: [T('0/08', 'Head_facial_nerve_branches.jpg'), 'Ramos do nervo facial saindo da parótida para os músculos da mímica: é aí que cai a solução quando a agulha vai para trás demais.', 'Ilustração da face com os ramos do nervo facial em amarelo', C.lynch],
    g782: [W + '7/7f/Gray782.png', 'Nervo mandibular visto por dentro (Gray): o lingual e o alveolar inferior descem juntos até o forame mandibular.', 'Desenho do nervo mandibular e seus ramos, vista medial', C.gray],
    g784: [W + '2/20/Gray784.png', 'Áreas da pele de cada divisão do trigêmeo (V1, V2, V3): mostra onde fica a dormência.', 'Desenho da cabeça com as áreas sensitivas coloridas', C.gray],
    nerfMand: [W + '9/9d/Nerf_mandibulaire.png', 'Nervo mandibular (V3) com o lingual e o alveolar inferior, vista medial (legendas em francês).', 'Ilustração colorida do nervo mandibular', C.berichard],
    cianose: [W + 'a/af/Eplasty16ic18_fig1.jpg', 'Lábios arroxeados (cianose) num paciente com metemoglobinemia.', 'Lábios arroxeados de paciente', C.eplasty],
    choco: [W + '8/88/ChocolateBrownBlood_%28cropped%29.jpg', 'Sangue cor de chocolate na seringa: sinal típico da metemoglobinemia.', 'Seringa com sangue marrom-escuro', C.choco],
    escalaMet: [W + '0/08/MethemoglobinDiag.jpg', 'Escala de cor do sangue: quanto mais metemoglobina, mais escuro.', 'Faixas de sangue em tons de vermelho a marrom', C.shihana],
    tubete: [T('6/6c', 'Lidocaine_HCl_local_anesthetic_cartridge.JPG'), 'Tubete de lidocaína: cilindro de vidro com 1,8 mL, rolha de borracha numa ponta e diafragma na outra.', 'Tubete de anestésico em pé', C.lesion],
    carpule: [T('0/03', 'Karpulenspritze.jpg'), 'Seringa carpule com o tubete ao lado: o anel do êmbolo é o que permite puxar para aspirar.', 'Seringa carpule metálica com tubete e agulha', C.rosario],
    montando: [T('7/73', 'Local_Dental_Anesthesia_Preparation.jpg'), 'Preparo da seringa carpule antes da anestesia.', 'Mãos com luva montando a seringa carpule', C.wasswa],
    infiltr: [W + 'c/c2/Infiltration_OK.png', 'Infiltração na maxila: agulha pela vestibular, solução perto do ápice do dente (legenda em alemão).', 'Esquema de agulha na gengiva vestibular ao lado de um dente', C.partynia],
    g781: [W + '4/4d/Gray781.png', 'Divisão mandibular do trigêmeo (Gray): alveolar inferior entrando na mandíbula, lingual, bucal e mentual.', 'Desenho do nervo mandibular com a mandíbula aberta', C.gray],
    iaBranches: [W + 'd/d5/Inferior_Alveolar_nerve_Branches.png', 'Alveolar inferior dentro da mandíbula: sai pelo forame mentual (mentual) e segue como incisivo.', 'Esquema da mandíbula com o nervo alveolar inferior colorido', C.dcamp],
    foramina: [W + '0/09/Mandibular_foramina.jpg', 'Mandíbula vista por trás: os círculos marcam os dois forames mandibulares, com a língula na frente de cada um.', 'Modelo de mandíbula com os forames mandibulares circulados', C.buttonwillow],
    g177: [W + 'a/a3/Gray177.png', 'Face interna da mandíbula (Gray): forame mandibular e a língula logo na frente dele.', 'Desenho da face interna da mandíbula', C.gray],
    bp3dMand: [T('0/05', 'Mandibular_foramen_-_skull_-_posterolateral_view.png'), 'Crânio 3D com o forame mandibular em vermelho (vista de trás e de lado).', 'Crânio em 3D com o forame mandibular marcado', C.bp3d],
    g779: [W + 'a/a9/Gray779.png', 'Ramos alveolares superiores (posterior, médio e anterior) e o infraorbitário (Gray).', 'Desenho da maxila aberta com os nervos alveolares superiores', C.gray],
    bp3dInfra: [T('4/40', 'Infraorbital_foramen_of_maxilla_-_skull_-_anterior_view.png'), 'Crânio 3D com os forames infraorbitários em vermelho, logo abaixo das órbitas.', 'Crânio em 3D de frente com os forames infraorbitários marcados', C.bp3d],
    g157: [W + '7/71/Gray157.png', 'Maxila por fora (Gray): forame infraorbitário e túber da maxila.', 'Desenho da maxila, face externa', C.gray],
    g780: [W + 'd/d7/Gray780.png', 'Gânglio pterigopalatino e seus ramos (Gray), entre eles o nasopalatino, que desce pelo septo até o forame incisivo.', 'Desenho da parede do nariz com os nervos do gânglio pterigopalatino', C.gray],
    g160: [W + '4/4a/Gray160.png', 'Palato duro (Gray): forame incisivo na frente (nasopalatino) e forames palatinos maiores atrás (palatino maior).', 'Desenho do palato ósseo visto de baixo', C.gray],
    palMaior: [W + '1/1d/Foramen_palatinum_majus.png', 'Palato duro com o forame palatino maior destacado nos quadrados, perto do 2º/3º molar.', 'Desenho do palato com os forames palatinos maiores marcados', C.gray],
    palFoto: [W + '0/08/Greater_palatine_foramen.jpg', 'Crânio real: forames palatinos maiores e fossa incisiva marcados (legendas em inglês).', 'Foto do palato de um crânio com setas', C.anat90],
    tuber: [T('a/a3', 'SchaedelSeitlichTuberMaxillae.png'), 'Crânio de lado com o túber da maxila em vermelho: atrás dele a agulha do PSA procura o nervo.', 'Desenho do crânio de lado com o túber da maxila marcado', C.rosario],
    gowgates: [T('a/a6', 'GowGates.png'), 'Gow-Gates: com a boca bem aberta, a agulha segue a linha amarela rumo ao colo do côndilo.', 'Boca aberta com linhas amarelas mostrando a direção da agulha', C.partynia],
    g176: [W + '6/64/Gray176.png', 'Mandíbula por fora (Gray): côndilo, colo do côndilo (alvo da Gow-Gates) e forame mentual.', 'Desenho da mandíbula, face externa', C.gray],
    mentual: [T('4/45', 'Foramen_mentale_-_Alveolarknochen.png'), 'Forame mentual (ponto vermelho), entre os pré-molares inferiores (legendas em alemão).', 'Mandíbula com o forame mentual marcado', C.partynia],
    eco: [T('f/fb', 'Endocarditis_ultrasound.JPG'), 'Ecocardiograma: a seta mostra a vegetação (bolo de bactérias e fibrina) presa na valva.', 'Imagem de ecocardiograma com seta', C.koya],
    vegeta: [T('2/20', 'Vegetations_upon_the_mitral_valve_Wellcome_L0062658.jpg'), 'Vegetações na valva mitral (aquarela histórica).', 'Aquarela de valva do coração com pequenas vegetações', C.godart],
    adrenalina: [T('8/89', 'Adrenaline_ball-and-stick.png'), 'Molécula da epinefrina (adrenalina).', 'Modelo de bolas e varetas da molécula de adrenalina', C.marina],
    vaso: [T('d/da', 'Vasoconstriction_-_Constricted_blood_vessel.jpg'), 'Vaso contraído: a luz fica menor, passa menos sangue e o anestésico sai mais devagar do local.', 'Ilustração de vaso sanguíneo estreitado', C.scian]
  };
  var ESQ = 'Desenho esquemático do site (resposta marcada).';
  var FOTOS = {
    'hematoma': ['olho', 'vacina', 'fossa'],
    'plexo venoso pterigóideo': ['fossa', 'tuber'],
    'trismo': ['pterigMed', 'masseter'],
    'paralisia facial': ['paralisia', 'facial'],
    'parestesia': ['g782', 'g784'],
    'metemoglobinemia': ['cianose', 'choco', 'escalaMet'],
    'prilocaína': ['cianose'],
    'tubete': ['tubete', 'carpule', 'montando'],
    'aspiração': ['carpule', 'montando'],
    'anestesia local': ['infiltr'],
    'nervo lingual': ['g782', 'nerfMand'],
    'alveolar inferior': ['g781', 'iaBranches', 'foramina'],
    'língula': ['g177', 'foramina'],
    'forame mandibular': ['foramina', 'bp3dMand', 'g177'],
    'nervo mentual': ['mentual', 'iaBranches'],
    'nervo bucal': ['g781'],
    'mandibular (V3)': ['g781', 'g784'],
    'Vazirani-Akinosi': ['g177', 'bp3dMand'],
    'Gow-Gates': ['gowgates', 'g176'],
    'alveolar superior posterior': ['g779', 'tuber'],
    'alveolar superior médio': ['g779'],
    'alveolar superior anterior': ['g779'],
    'infraorbitário': ['g779', 'bp3dInfra', 'g157'],
    'nasopalatino': ['g780', 'g160'],
    'palatino maior': ['palMaior', 'palFoto', 'g160'],
    'endocardite': ['eco', 'vegeta'],
    'epinefrina': ['adrenalina'],
    'vasoconstritor': ['vaso']
  };
  Object.keys(FOTOS).forEach(function (k) {
    var v = G[k]; if (!v) return;
    var lista = FOTOS[k].map(function (id) { return I[id]; });
    var imgs = [], legs = [], alts = [];
    if (v.img) { imgs.push(v.img); legs.push(ESQ); alts.push('Desenho esquemático: ' + k); }
    lista.forEach(function (x) { imgs.push(x[0]); legs.push(x[1]); alts.push(x[2]); });
    v.img = imgs; v.legs = legs; v.alts = alts;
    var cred = [];
    lista.forEach(function (x) { if (cred.indexOf(x[3]) < 0) cred.push(x[3]); });
    v.fonte = v.fonte + '. Imagens: ' + cred.join('; ') + ' (Wikimedia Commons)';
  });
  B.glossario = Object.assign(B.glossario || {}, G);
})();
