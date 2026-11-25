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
  B.glossario = Object.assign(B.glossario || {}, G);
})();
