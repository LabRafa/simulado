/* Banco de CASOS de Farmaco (Rafael 25/11/2026: "para lesão/condição clínica, o carrossel vira um banco de casos").
   Acrescenta fotos reais de casos ao FIM do carrossel de cada termo (não apaga as imagens que já existem).
   Cada legenda começa com "Caso:" e explica o que se vê, onde, por que aconteceu e o que fazer.
   Imagens: Wikimedia Commons, só licença livre; o crédito de cada termo vai no fim do "fonte".
   Texto: descrição da página da imagem no Commons + Andrade (Terapêutica Medicamentosa em Odontologia) e Malamed (Manual de Anestesia Local). */
(function () {
  var B = window.BANCOS && window.BANCOS.farmaco; if (!B || !B.glossario) return;
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

  add('abscesso', [
    [C + 'thumb/d/d8/Periapical_abscess_up.jpg/960px-Periapical_abscess_up.jpg',
      'Caso: abscesso periapical do canino superior direito, que começou depois de um tratamento de canal mal feito. Na gengiva, acima da raiz, aparece um abaulamento amarelado de pus. Segundo o autor, o paciente não tinha sintoma: é o abscesso crônico, que vai drenando aos poucos e por isso não dói. O tratamento é tirar a causa (refazer o canal ou extrair o dente) e drenar o pus; antibiótico só complementa se houver sinal de que a infecção está se espalhando.',
      'Gengiva com abaulamento amarelado acima do canino superior'],
    [C + 'thumb/2/2d/Abscessed_tooth_periapical_radiograph.jpg/960px-Abscessed_tooth_periapical_radiograph.jpg',
      'Caso: radiografia periapical do primeiro molar inferior esquerdo (36) com abscesso no ápice das duas raízes. O pus destrói o osso em volta da ponta da raiz e aparece como uma área escura (radiolúcida). Por fora o dente pode até parecer inteiro; a radiografia é que mostra o tamanho do problema. Conduta: tratamento de canal ou extração, com drenagem se houver inchaço.',
      'Radiografia de molar inferior com áreas escuras nas pontas das duas raízes'],
    [C + '3/34/Tooth_decay_and_abscess_xray.png',
      'Caso: radiografia de um dente com cárie muito profunda (seta verde) que chegou à polpa. Com a polpa morta e infectada, as bactérias saíram pela ponta da raiz e formaram um abscesso periapical crônico (setas azuis). É a sequência clássica: cárie, necrose da polpa, abscesso. Tratar a cárie cedo evita tudo isso.',
      'Radiografia com cárie profunda e área escura no ápice da raiz'],
    [C + '9/99/Sinugram_abscessed_tooth.jpg',
      'Caso: o abscesso crônico abriu um caminho até a gengiva, a fístula. Para descobrir de qual dente vem o pus, o dentista colocou um cone de guta-percha pela fístula (setas vermelhas) e tirou a radiografia: o cone vai parar no abscesso (seta verde), na ponta da raiz do dente culpado. A fístula fecha sozinha quando a causa é tratada; antibiótico sozinho não resolve.',
      'Radiografia com cone de guta-percha entrando pela fístula até o ápice'],
    [C + 'thumb/b/b8/Incision_and_drainage_mouth.png/960px-Incision_and_drainage_mouth.png',
      'Caso: sequência de incisão e drenagem de um abscesso acima de um dente anterior superior. O dentista corta a mucosa no ponto mais inchado, deixa o pus sair e coloca um dreno, que fica alguns dias para o abscesso não fechar cheio de novo. Lembre: no meio ácido do pus o anestésico local funciona mal, por isso muitas vezes se anestesia em volta da lesão ou se usa bloqueio regional. Drenar e remover a causa é o tratamento principal; o antibiótico é complemento.',
      'Seis fotos da incisão de um abscesso na gengiva e colocação de um dreno'],
    [C + '3/36/GingivalAbscess.jpg',
      'Caso: abscesso gengival, um inchaço vermelho e brilhante na gengiva entre os dentes. Esse tipo costuma nascer de algo preso na gengiva (casca de pipoca, fio de cerda, resto de cálculo) e não da polpa do dente. Conduta: remover o corpo estranho, drenar e limpar a área; o dente em geral continua vivo.',
      'Gengiva inchada e avermelhada entre dois dentes posteriores']
  ], 'Michele Gardini, CC BY-SA 3.0; Coronation Dental Specialty Group, CC BY-SA 3.0; DRosenbach, CC BY-SA 3.0');

  add('edema', [
    [C + '4/43/Abces_dentaire.jpg',
      'Caso: inchaço do rosto causado por um abscesso dentário, fotografado no 2º dia (em cima) e no 3º dia (embaixo). A infecção saiu do osso e se espalhou pelos tecidos moles da bochecha e embaixo da mandíbula: é a celulite de origem dentária. Quando o inchaço cresce de um dia para o outro, junto com febre ou mal-estar, o antibiótico entra junto com a drenagem e a remoção da causa.',
      'Rosto de paciente com a bochecha e a região embaixo da mandíbula inchadas, em dois dias seguidos'],
    [C + 'thumb/1/15/SwollenNeckLA.jpg/960px-SwollenNeckLA.jpg',
      'Caso: angina de Ludwig, uma celulite grave que pega os dois lados embaixo do queixo (espaços submandibular e sublingual). A região fica inchada e dura como madeira. Quase sempre começa num molar inferior infectado. É emergência: o inchaço pode fechar a via aérea, e o tratamento é hospitalar (antibiótico na veia, drenagem cirúrgica e cuidado com a respiração).',
      'Pescoço e região abaixo do queixo inchados e endurecidos'],
    [C + 'thumb/9/93/ElevatedTongueLA.jpg/960px-ElevatedTongueLA.jpg',
      'Caso: a mesma doença vista por dentro da boca. Na angina de Ludwig o assoalho da boca incha e empurra a língua para cima e para trás. Língua elevada, dificuldade para engolir a saliva e voz abafada são sinais de alerta de via aérea em risco: o paciente vai para o hospital na hora.',
      'Boca aberta com a língua empurrada para cima pelo inchaço do assoalho'],
    [C + '5/5d/Ludwig_angina.jpg',
      'Caso: paciente com angina de Ludwig e inchaço grande na região submandibular. Segundo os autores, o inchaço era tanto que atrapalhou a avaliação do pescoço para a anestesia geral (intubação). Mostra por que a infecção dentária que se espalha não é só "dor de dente": pode virar problema de vida ou morte.',
      'Região submandibular muito inchada em paciente deitado'],
    [C + 'a/aa/Dental_infection.png',
      'Caso: tomografia de uma infecção de dente superior que formou abscesso e inflamou o seio maxilar, a cavidade de ar acima das raízes dos molares e pré-molares superiores. As raízes ficam muito perto do seio, por isso a infecção passa com facilidade. Conduta: tratar o dente (canal ou extração) e drenar; o seio melhora quando a causa sai.',
      'Tomografia da face com abscesso perto do dente e seio maxilar inflamado']
  ], 'Égoïté, CC BY-SA 3.0; James Heilman (Doc James), CC BY-SA 4.0; Anand H. Kulkarni e cols., CC BY 2.0');

  add('anafilaxia', [
    [C + 'thumb/5/5c/Angioedema2013.JPG/960px-Angioedema2013.JPG',
      'Caso: angioedema da língua. A língua incha de repente, em minutos a horas, por uma reação do organismo. Na anafilaxia o inchaço da língua e da garganta pode fechar a passagem do ar. Conduta no consultório: parar tudo, chamar o socorro e aplicar epinefrina por via intramuscular (na coxa), deixando o paciente deitado e com as pernas elevadas se a pressão cair.',
      'Boca aberta com a língua muito inchada'],
    [C + 'thumb/7/78/AngioedemaFra.JPG/960px-AngioedemaFra.JPG',
      'Caso: angioedema dos lábios, que ficam inchados, lisos e brilhantes. Lábio que incha logo depois de um medicamento ou do contato com látex é sinal de reação alérgica: observar a respiração, a voz e a pressão, porque pode ser o começo de uma anafilaxia.',
      'Lábio superior e inferior muito inchados'],
    [C + '2/25/Oedeme_muqueuse_quincke.jpg',
      'Caso: angioedema (edema de Quincke) no fundo da boca: a úvula e o palato mole ficam inchados e brilhantes. É uma das partes mais perigosas, porque fica bem na entrada da via aérea. Paciente com sensação de "garganta fechando", rouquidão ou chiado depois de um medicamento = tratar como anafilaxia.',
      'Fundo da boca com úvula e palato mole inchados']
  ], 'James Heilman, MD, CC BY-SA 3.0; Grook Da Oger, CC BY-SA 4.0');

  add('alergia', [
    [C + 'f/fa/Urticaria_arm.jpg',
      'Caso: urticária no braço, placas vermelhas e elevadas que coçam muito e mudam de lugar em poucas horas. É a reação alérgica de pele mais comum depois de medicamento (como a penicilina). Urticária sozinha trata-se com anti-histamínico; urticária com falta de ar, inchaço na boca ou pressão baixa é anafilaxia e pede epinefrina.',
      'Braço com placas vermelhas elevadas de urticária'],
    [C + 'thumb/8/81/Urticaria_anulare.jpg/960px-Urticaria_anulare.jpg',
      'Caso: urticária em anel num homem de 60 anos. Segundo o autor, a lesão coçava, apareceu e sumiu em menos de 12 horas, e a causa não foi descoberta. Isso é típico da urticária: cada placa dura pouco. Na odontologia, anotar na ficha qualquer reação desse tipo e o que o paciente tinha tomado.',
      'Pele com placas vermelhas em forma de anel'],
    [C + 'thumb/4/42/Dermatographic_urticaria.jpg/960px-Dermatographic_urticaria.jpg',
      'Caso: dermografismo, a "escrita na pele". Letras foram desenhadas com a ponta de uma caneta sem tinta e, minutos depois, a pele levantou em vergões. Mostra como a liberação de histamina deixa a pele vermelha e inchada; o mesmo mecanismo está por trás da urticária alérgica.',
      'Pele com letras em relevo formadas por vergões'],
    [C + 'c/c4/1lisinopril.jpg',
      'Caso: inchaço grande dos lábios causado por um remédio de pressão do grupo dos inibidores da ECA (lisinopril). Atenção: esse angioedema não é alergia verdadeira; vem do acúmulo de bradicinina, por isso a adrenalina e o anti-histamínico ajudam pouco. Na anamnese, perguntar sempre os remédios de uso contínuo: o paciente pode chegar com o lábio inchado e não ter nada a ver com o tratamento dentário.',
      'Rosto com os lábios muito inchados, olhos cobertos por tarja']
  ], 'Heckat, domínio público; Klaus D. Peter, CC BY 3.0 de; Mysid, domínio público; Adebayo PB e Alebiosu OC, CC BY 3.0');

  add('endocardite', [
    [C + 'thumb/6/69/Janeway_lesion.JPG/960px-Janeway_lesion.JPG',
      'Caso: lesões de Janeway na palma da mão de um homem de 36 anos com endocardite por estafilococo. São manchas avermelhadas e sem dor, feitas por pedacinhos da vegetação da válvula que se soltam e entopem vasos pequenos (êmbolos). Por isso o paciente de alto risco recebe a profilaxia antes de procedimento que sangra.',
      'Palma da mão com manchas vermelho-arroxeadas'],
    [C + 'thumb/0/07/Osler_Nodules_Hand.jpg/960px-Osler_Nodules_Hand.jpg',
      'Caso: nódulos de Osler nos dedos de um homem de 43 anos com endocardite bacteriana subaguda. Ao contrário das lesões de Janeway, os nódulos de Osler DOEM: são caroços pequenos e arroxeados na ponta dos dedos. Junto com febre que não passa e sopro no coração, fazem pensar em endocardite.',
      'Mão com nódulos arroxeados na ponta dos dedos'],
    [C + 'a/ac/Splinter_hemorrhage.jpg',
      'Caso: hemorragia em lasca embaixo da unha, uma linha fina vermelho-escura que parece uma farpa. É outro sinal de pequenos êmbolos na endocardite (também aparece por trauma, então sozinha não fecha o diagnóstico).',
      'Unha com uma linha fina escura embaixo'],
    [C + 'thumb/8/83/Gross_pathology_of_vegetation_of_infective_endocarditis%2C_annotated.jpg/960px-Gross_pathology_of_vegetation_of_infective_endocarditis%2C_annotated.jpg',
      'Caso: peça de necropsia com uma pequena vegetação de endocardite infecciosa na válvula do coração (área granulosa marrom-avermelhada). A vegetação é um amontoado de bactérias, fibrina e plaquetas. Bactérias da boca que caem no sangue num procedimento que sangra podem se fixar numa válvula já doente: é o motivo da profilaxia com amoxicilina 2 g antes, só nos pacientes de alto risco.',
      'Válvula cardíaca com pequena vegetação granulosa marcada']
  ], 'Warfieldian, CC BY-SA 4.0; Roberto J. Galindo, CC BY-SA 4.0; Splarka, domínio público; Mikael Häggström, CC0');

  add('cianose', [
    [C + 'thumb/1/1a/Peripheral_Cyanosis_due_to_Ischemia.jpg/960px-Peripheral_Cyanosis_due_to_Ischemia.jpg',
      'Caso: cianose periférica por isquemia: o sangue não chega bem à extremidade e a pele fica roxo-azulada. Mostra a cor da cianose. No consultório, lábios e unhas arroxeados num paciente que está mal pedem: avaliar a respiração, oferecer oxigênio e chamar o socorro.',
      'Extremidade com pele arroxeada por falta de circulação'],
    [C + '8/85/Cyanosis-adult_fingertips.PNG',
      'Caso: pontas dos dedos azuladas na fase de cianose do fenômeno de Raynaud (os vasos se fecham com o frio). Aqui a causa é local, nos vasos; a cianose central (lábios e língua roxos) indica falta de oxigênio no sangue todo, que é mais grave.',
      'Pontas dos dedos azuladas'],
    [C + "f/f2/Lifelong_cyanosis_and_skin_color_and_arterial_blood_color_in_the_patient%27s_family_%28cropped_BC%29.jpg",
      'Caso: família com metemoglobinemia hereditária e cianose desde sempre. Em cima, as mãos de uma pessoa normal ao lado das da mãe, do paciente e do irmão, mais arroxeadas. Embaixo, o sangue arterial deles é bem mais escuro que o normal. É a cianose que não melhora com oxigênio, porque o problema está na hemoglobina e não no pulmão.',
      'Mãos e tubos de sangue comparando pessoa normal e pacientes']
  ], 'James Heilman, MD, CC BY-SA 4.0; 7mike5000, CC BY-SA 3.0; Dae Sung Kim e cols. (Yonsei Medical Journal, 2020), CC BY-SA 4.0');

  add('metemoglobinemia', [
    [C + "f/f2/Lifelong_cyanosis_and_skin_color_and_arterial_blood_color_in_the_patient%27s_family_%28cropped_BC%29.jpg",
      'Caso: família com metemoglobinemia de nascença (hereditária), publicada em 2020. As mãos do paciente, da mãe e do irmão são mais arroxeadas que as de uma pessoa normal, e o sangue arterial deles tem cor de chocolate. Na odontologia a forma que importa é a adquirida: prilocaína (e benzocaína) em dose alta. Paciente com metemoglobinemia, ou anemia, não deve receber prilocaína.',
      'Mãos e tubos de sangue comparando pessoa normal e pacientes com metemoglobinemia']
  ], 'Dae Sung Kim e cols. (Yonsei Medical Journal, 2020), CC BY-SA 4.0');

  add('trismo', [
    [C + 'thumb/e/e2/38_pericoronitis_with_pus.jpg/960px-38_pericoronitis_with_pus.jpg',
      'Caso: pericoronite no terceiro molar inferior esquerdo (38), que está nascendo. A gengiva que cobre o dente (o capuz, seta verde) está inflamada e com pus embaixo. A inflamação fica bem ao lado dos músculos que fecham a boca, por isso a pericoronite é uma causa muito comum de trismo fora da anestesia. Conduta: irrigar e limpar embaixo do capuz, tratar a dor e, depois, avaliar a extração.',
      'Siso inferior parcialmente coberto por gengiva inflamada'],
    [C + 'thumb/7/70/48_clinical_pericornitis.jpg/960px-48_clinical_pericornitis.jpg',
      'Caso: pericoronite do terceiro molar inferior direito (48), com o capuz de gengiva inchado sobre o dente. Paciente com pericoronite muitas vezes chega sem conseguir abrir bem a boca, o que dificulta até o bloqueio do alveolar inferior: aí entram técnicas de boca fechada, como a de Vazirani-Akinosi.',
      'Gengiva inchada sobre o siso inferior direito'],
    [C + 'thumb/9/97/Lower_mandibular_third_molar_impaction_pericoronitis_diagram.jpg/960px-Lower_mandibular_third_molar_impaction_pericoronitis_diagram.jpg',
      'Esquema do caso típico: siso inferior inclinado (mesioangular) e parcialmente nascido. A comida fica presa embaixo do capuz de gengiva, causando cárie e inflamação (pericoronite). Quando a inflamação chega ao músculo pterigóideo medial e ao masseter, a boca não abre: é o trismo.',
      'Desenho do siso inferior inclinado com capuz de gengiva inflamado']
  ], 'Coronation Dental Specialty Group, CC BY-SA 3.0; Lesion, CC0');

  add('paralisia facial', [
    [C + '0/0f/Facial_paralysis_ceramic_Larco_museum.jpg',
      'Peça de cerâmica do Peru antigo (Museu Larco, Lima) que representa um rosto com paralisia facial: um lado caído e sem expressão. A doença é registrada há séculos. Na anestesia, a paralisia aparece quando a agulha vai fundo e para trás no bloqueio do alveolar inferior e a solução cai na parótida, onde passa o nervo facial. Passa sozinha quando o anestésico acaba; enquanto isso, proteger o olho que não fecha.',
      'Vaso de cerâmica com rosto assimétrico'],
    [C + '6/60/Paralisis_facialMOCHE.jpg',
      'Cerâmica da cultura Moche (Peru antigo) com rosto paralisado de um lado. Na clínica, o sinal é o mesmo: o paciente não consegue fechar o olho nem levantar o canto da boca do lado anestesiado. Explicar que é temporário, colocar um protetor no olho e só liberar quando o movimento voltar.',
      'Peça de cerâmica representando rosto com paralisia de um lado']
  ], 'Museu Larco (Lima), CC BY-SA 3.0; Museu Larco, foto enviada por Lyndsayruell, GFDL/CC BY-SA 3.0');

  add('parestesia', [
    [C + '7/72/Socket_of_wisdom_tooth_with_inferior_alveolar_nerve_visible.jpg',
      'Caso: alvéolo de um siso inferior logo depois da extração, com o nervo alveolar inferior aparecendo no fundo (seta verde). A raiz estava encostada no canal do nervo. Quando o nervo é machucado na cirurgia (ou pela agulha da anestesia), o paciente fica com o lábio e o queixo dormentes por semanas ou meses: é a parestesia.',
      'Alvéolo de siso extraído com o nervo visível no fundo'],
    [C + 'thumb/d/d5/Impacted_Wisdom_Tooth_aka_Lower_Right_Third_Molar_48_RVG_IOPA_Xray.jpg/960px-Impacted_Wisdom_Tooth_aka_Lower_Right_Third_Molar_48_RVG_IOPA_Xray.jpg',
      'Caso: radiografia periapical do siso inferior direito (48) incluso, de uma mulher de 28 anos. Antes de extrair, o dentista olha a relação das raízes com o canal mandibular: raiz que encosta ou cruza o canal aumenta o risco de parestesia. Se for o caso, pede tomografia e avisa o paciente por escrito.',
      'Radiografia de siso inferior incluso perto do canal mandibular'],
    [C + 'thumb/3/31/Orthopantomogram_showing_mesio_angular_impaction_of_third_molars.jpg/960px-Orthopantomogram_showing_mesio_angular_impaction_of_third_molars.jpg',
      'Caso: radiografia panorâmica com os sisos inclinados para a frente (mesioangulares) e presos. Na panorâmica dá para ver o canal mandibular passando embaixo das raízes dos molares inferiores. Na anestesia, a parestesia vem mais do nervo lingual depois do bloqueio do alveolar inferior; na cirurgia, do alveolar inferior.',
      'Radiografia panorâmica com sisos inclinados']
  ], 'Coronation Dental Specialty Group, CC BY-SA 3.0; Nizil Shah, CC BY-SA 4.0; Challiyan, CC BY-SA 4.0');
})();
