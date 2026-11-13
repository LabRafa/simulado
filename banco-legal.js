/* RASCUNHO. Banco "Odontologia Legal" para a futura aba "Especialidades" do simulado (pedido do Rafael, 12/11/2026).
   Montado em 12/11/2026. Toda norma citada foi conferida na fonte oficial nesse dia (lista em FONTES.md).
   Casos reais com fonte, data e link em CASOS.md. Nomes de vítimas, pacientes e profissionais processados NÃO entram.
   Mesmo formato de banco-imagino.js: id, tema, ctx, p, o (5), a (índice da certa), w, f; af = afirmativas; ar = asserção e razão; fixa = não embaralha.
   NÃO PUBLICADO. pronto:false. */
window.BANCOS = window.BANCOS || {};
(function () {
  const AR = [
    'As asserções I e II são verdadeiras, e a II é uma justificativa correta da I.',
    'As asserções I e II são verdadeiras, mas a II não é uma justificativa correta da I.',
    'A asserção I é verdadeira, e a II é falsa.',
    'A asserção I é falsa, e a II é verdadeira.',
    'As asserções I e II são falsas.'
  ];
  const ARCTX = ' Avalie as asserções a seguir e a relação proposta entre elas.';
  const ARP = 'A respeito dessas asserções, assinale a opção correta.';
  const AFP = 'Está correto o que se afirma em';

  // Fontes oficiais (conferidas em 12/11/2026)
  const L5081 = 'Lei 5.081/1966 (exercício da Odontologia), https://www.planalto.gov.br/ccivil_03/leis/l5081.htm';
  const CPP = 'Código de Processo Penal (Decreto-Lei 3.689/1941), https://www.planalto.gov.br/ccivil_03/decreto-lei/del3689compilado.htm';
  const L12030 = 'Lei 12.030/2009 (perícias oficiais), https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2009/lei/l12030.htm';
  const CP = 'Código Penal (Decreto-Lei 2.848/1940), https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm';
  const CDC = 'Código de Defesa do Consumidor (Lei 8.078/1990), https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm';
  const CC = 'Código Civil (Lei 10.406/2002), https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm';
  const LGPD = 'LGPD (Lei 13.709/2018), https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm';
  const L13787 = 'Lei 13.787/2018 (prontuário digitalizado), https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13787.htm';
  const CEO = 'Código de Ética Odontológica, Res. CFO-118/2012 (em vigor desde 01/01/2013), https://website.cfo.org.br/wp-content/uploads/2018/03/codigo_etica.pdf';
  const R271 = 'Res. CFO-271, de 18/06/2025, https://sistemas.cfo.org.br/visualizar/atos/RESOLU%C3%87%C3%83O/SEC/2025/271';
  const R196 = 'Res. CFO-196, de 29/01/2019, https://sistemas.cfo.org.br/visualizar/atos/RESOLU%C3%87%C3%83O/SEC/2019/196';
  const INTERPOL = 'INTERPOL, ficha "Disaster victim identification" (2023), https://www.interpol.int/content/download/621/file/FS-02-DVI-2023-03-EN.pdf';
  const NIST = 'NIST, Bitemark Analysis: A NIST Scientific Foundation Review, NISTIR 8352 (07/03/2023), https://doi.org/10.6028/NIST.IR.8352';
  const MALIK = 'Malik SD e cols., J Oral Maxillofac Pathol 2022 (revisão), PMID 37082063, https://pmc.ncbi.nlm.nih.gov/articles/PMC10112107/';
  const CIDADE = 'Cidade R e cols., Forensic Sci Med Pathol 2023, PMID 36806081, https://doi.org/10.1007/s12024-022-00563-5';
  const PINHEIRO = 'Pinheiro A e cols., Morphologie 2023, PMID 37149420, https://doi.org/10.1016/j.morpho.2023.04.001';
  const MORAES = 'Moraes ME e cols., Braz Oral Res 2007, PMID 17710293, https://doi.org/10.1590/s1806-83242007000300012';
  // Casos reais
  const VOEPASS = 'SBT News, 15/08/2024, IML conclui identificação das 62 vítimas do voo 2283, https://sbtnews.sbt.com.br/noticia/brasil/queda-de-aviao-iml-conclui-identificacao-das-62-vitimas-do-acidente-aereo-em-vinhedo-sp';
  const BRUMA = 'Agência Minas (Governo de MG), 24/01/2023, https://www.agenciaminas.mg.gov.br/noticia/governo-segue-mobilizado-para-levar-alento-a-familiares-das-vitimas-de-brumadinho-115826';
  const PETRO = 'MPRJ, notícia de 20/02/2022, https://www.mprj.mp.br/web/guest/visualizar?noticiaId=111408';
  const KRONE = 'Innocence Project, caso de 1991 em Phoenix (Arizona), https://innocenceproject.org/cases/ray-krone/';
  const MENG85 = 'Eckert WG, Teixeira WR, Am J Forensic Med Pathol 1985, PMID 3916651, https://pubmed.ncbi.nlm.nih.gov/3916651/';
  const MENG92 = 'Jeffreys AJ e cols., Forensic Sci Int 1992, PMID 1398379, https://pubmed.ncbi.nlm.nih.gov/1398379/';
  const STJ = 'STJ, notícia de 16/07/2026, REsp 2.225.449 (Terceira Turma), https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2026/16072026-Paciente-que-obteve-restituicao-por-erro-em-cirurgia-odontologica-nao-pode-exigir-custeio-de-nova-operacao.aspx';

  window.BANCOS.legal = {
    curso: 'Odontologia',
    materia: 'Odontologia Legal',
    curta: 'Odonto Legal',
    prof: 'Especialidade',
    turma: '3008',
    proxima: 'Treino de especialidade',
    pronto: true,
    especialidade: true,
    /* Rafael 13/11: dicionário (palavra difícil sublinhada; toca e abre a explicação, sem internet) */
    glossario: {
      "swab": {
            "d": "Haste com algodão (ou outra fibra) estéril, parecida com um cotonete, usada para coletar material de uma superfície, como saliva, sangue ou células. Na foto, a coleta de células da bochecha por dentro da boca.",
            "img": "img/legal/swab.jpg",
            "alt": "Homem esfregando um swab na parte de dentro da bochecha",
            "fonte": "Marinha dos EUA, domínio público (Wikimedia Commons)"
      },
      "DNA": "O material genético da pessoa. Pode ser recuperado de saliva, sangue, polpa do dente e ossos, e comparado com o de familiares ou com uma amostra de referência.",
      "ante mortem": "\"Antes da morte\". Na identificação são os registros feitos em vida: prontuário do dentista, radiografias, fotos, digitais e DNA de parentes.",
      "post mortem": "\"Depois da morte\". São os dados colhidos no corpo da vítima: exame dos dentes, radiografias, digitais e DNA.",
      "DVI": {
            "d": "Sigla em inglês de Disaster Victim Identification, identificação de vítimas de desastre. É o protocolo da INTERPOL usado em tragédias com muitas vítimas.",
            "bib": "interpol"
      },
      "INTERPOL": {
            "d": "Organização Internacional de Polícia Criminal, que reúne as polícias de 196 países. Publica o guia de identificação de vítimas de desastre (DVI).",
            "bib": "interpol"
      },
      "NIST": {
            "d": "National Institute of Standards and Technology, o instituto oficial de padrões e medidas do governo dos Estados Unidos.",
            "bib": "nist"
      },
      "odontograma": "O mapa dos dentes no prontuário, onde o dentista marca o que cada dente tem: restaurações, ausências, próteses, tratamentos.",
      "necropsia": "Exame do cadáver para descobrir a causa da morte e ajudar a identificar a vítima. Também chamada de autópsia.",
      "perícia": "Exame técnico feito por um especialista para esclarecer um fato para a Justiça, a polícia ou um órgão administrativo. Termina num laudo.",
      "perito": "O profissional que faz a perícia. Pode ser oficial (concursado, como o do IML) ou nomeado pelo juiz para um caso.",
      "odontolegista": "Cirurgião-dentista especialista em Odontologia Legal.",
      "odontolegal": "Que tem a ver com a Odontologia Legal, a área da odontologia que serve à Justiça (perícias, identificação, documentos, ética).",
      "laudo": "Documento escrito em que o perito descreve o que examinou, como examinou e a que conclusão chegou.",
      "prontuário": "Tudo o que o dentista registra do paciente: anamnese, exames, odontograma, radiografias, tratamentos feitos e documentos assinados.",
      "CEO": {
            "d": "Sigla do Código de Ética Odontológica (Resolução CFO-118/2012, em vigor desde 01/01/2013): as regras de conduta que todo cirurgião-dentista tem que seguir.",
            "bib": "ceo"
      },
      "CFO": {
            "d": "Conselho Federal de Odontologia. Regula a profissão no país e publica as resoluções, como o Código de Ética.",
            "bib": "ceo"
      },
      "CRO": "Conselho Regional de Odontologia. Cada estado tem o seu; é onde o dentista tem o registro (o \"número do CRO\") e é fiscalizado.",
      "TCLE": "Termo de Consentimento Livre e Esclarecido: o documento em que o paciente diz, por escrito, que entendeu e autoriza um procedimento ou o uso da sua imagem.",
      "CADE": "Conselho Administrativo de Defesa Econômica, órgão federal que combate práticas contra a livre concorrência.",
      "Demirjian": "Método de 1973 (Demirjian, Goldstein e Tanner) que estima a idade pelo estágio de formação dos dentes na radiografia.",
      "mineralização": "A formação da parte dura do dente (coroa e raiz). Na radiografia, o quanto o dente já se formou ajuda a estimar a idade.",
      "marca de mordida": "Lesão deixada pelos dentes na pele ou num objeto. Comparar o desenho dela com a arcada de um suspeito hoje é considerado pouco confiável; o DNA da saliva vale mais.",
      "reconciliação": "A última fase da identificação de vítimas: comparar os dados post mortem com os ante mortem até confirmar quem é a pessoa.",
      "cadeia de custódia": "O registro de tudo o que acontece com uma prova (quem coletou, guardou e passou adiante), para mostrar que ela não foi trocada nem alterada.",
      "IML": "Instituto Médico Legal, o órgão da polícia que faz as perícias em pessoas vivas e mortas.",
      "foro": "O ramo da Justiça onde o caso corre: civil, criminal, trabalhista.",
      "identificador primário": "Método que, sozinho, identifica a pessoa com segurança. Para a INTERPOL são três: digitais, exame odontológico comparativo e DNA.",
      "identificadores primários": "Métodos que, sozinhos, identificam a pessoa com segurança. Para a INTERPOL são três: digitais, exame odontológico comparativo e DNA.",
      "Nicodemo": "Tabela brasileira (Nicodemo, Moraes e Médici Filho, 1974) com as idades de formação de cada dente, usada para estimar a idade pela radiografia.",
      "imperícia": "Erro por falta de conhecimento ou de habilidade técnica para fazer o que fez.",
      "negligência": "Erro por deixar de fazer o que devia: omissão, descuido.",
      "imprudência": "Erro por agir sem cautela, se arriscando sem necessidade.",
      "responsabilidade civil": "O dever de reparar (indenizar) o dano causado a alguém.",
      "CDC": {
            "d": "Código de Defesa do Consumidor (Lei 8.078/1990). Também vale na relação entre paciente e dentista.",
            "bib": "cdc"
      },
      "obrigação de resultado": "Quando o profissional se compromete com um resultado específico; se ele não acontece, presume-se a culpa. A Justiça costuma aplicar à odontologia estética.",
      "obrigação de meio": "Quando o profissional se compromete a usar todos os meios adequados, sem garantir o resultado.",
      "nexo": "Nexo causal: a ligação entre o ato do profissional e o dano. Sem nexo, não há responsabilidade.",
      "lesão corporal": "Dano à integridade física ou à saúde de alguém. No exame, o perito avalia a gravidade, por exemplo se houve debilidade ou deformidade.",
      "debilidade": "Na lesão corporal grave: perda parcial de uma função (por exemplo, da mastigação), sem perdê-la por inteiro.",
      "deformidade": "Na lesão corporal gravíssima: deformidade permanente, uma alteração estética duradoura e visível.",
      "sigilo": "O dever do dentista de não revelar o que soube do paciente pelo trabalho, salvo nas exceções da lei e do Código de Ética.",
      "atestado": "Documento em que o dentista afirma um fato, como a necessidade de afastamento. Só pode ser dado quando houve atendimento que o justifique.",
      "MPRJ": "Ministério Público do Estado do Rio de Janeiro.",
      "reconhecimento visual": "Quando a família olha o corpo para dizer quem é. Para a INTERPOL, sozinho, não é um método confiável.",
      "Código de Ética": {
            "d": "O Código de Ética Odontológica (Resolução CFO-118/2012, em vigor desde 01/01/2013, alterada pela Resolução CFO-271/2025). Reúne os direitos e deveres do cirurgião-dentista: sigilo, prontuário, publicidade, honorários, relação com o paciente e com os colegas. Quem descumpre pode ser processado no CRO.",
            "bib": "ceo"
      },
      "Lei 5.081": {
            "d": "Lei 5.081/1966, que regula o exercício da Odontologia no Brasil e diz o que compete ao cirurgião-dentista, inclusive fazer perícia odontolegal.",
            "bib": "l5081"
      }
    },
    /* Rafael 13/11: biblioteca da matéria (só documento oficial ou liberado) */
    biblioteca: [
      {
            "id": "ceo",
            "t": "Código de Ética Odontológica",
            "desc": "Resolução CFO-118/2012, texto original publicado pelo CFO. Atenção: foi alterado pela Resolução CFO-271/2025 (logo abaixo).",
            "url": "biblioteca/codigo-de-etica-odontologica-cfo-118-2012.pdf",
            "fonte": "Conselho Federal de Odontologia"
      },
      {
            "id": "r271",
            "t": "Resolução CFO-271/2025",
            "desc": "De 18/06/2025. Altera o Código de Ética depois da decisão do CADE (saiu a proibição de cartão de desconto).",
            "url": "https://sistemas.cfo.org.br/visualizar/atos/RESOLU%C3%87%C3%83O/SEC/2025/271",
            "fonte": "Conselho Federal de Odontologia"
      },
      {
            "id": "r196",
            "t": "Resolução CFO-196/2019",
            "desc": "De 29/01/2019. Regras de selfie e de imagens de diagnóstico e de resultado nas redes sociais.",
            "url": "https://sistemas.cfo.org.br/visualizar/atos/RESOLU%C3%87%C3%83O/SEC/2019/196",
            "fonte": "Conselho Federal de Odontologia"
      },
      {
            "id": "l5081",
            "t": "Lei 5.081/1966",
            "desc": "Regula o exercício da Odontologia. O art. 6º lista o que compete ao cirurgião-dentista, inclusive a perícia.",
            "url": "https://www.planalto.gov.br/ccivil_03/leis/l5081.htm",
            "fonte": "Planalto"
      },
      {
            "id": "cdc",
            "t": "Código de Defesa do Consumidor",
            "desc": "Lei 8.078/1990, texto compilado. Vale também na relação paciente e dentista.",
            "url": "https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm",
            "fonte": "Planalto"
      },
      {
            "id": "l13787",
            "t": "Lei 13.787/2018",
            "desc": "Digitalização e guarda do prontuário do paciente.",
            "url": "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13787.htm",
            "fonte": "Planalto"
      },
      {
            "id": "lgpd",
            "t": "LGPD (Lei 13.709/2018)",
            "desc": "Lei Geral de Proteção de Dados: dados de saúde são dados sensíveis.",
            "url": "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm",
            "fonte": "Planalto"
      },
      {
            "id": "interpol",
            "t": "INTERPOL: identificação de vítimas de desastre (DVI)",
            "desc": "Ficha oficial de 2023, em inglês: as fases do DVI e os identificadores primários.",
            "url": "https://www.interpol.int/content/download/621/file/FS-02-DVI-2023-03-EN.pdf",
            "fonte": "INTERPOL"
      },
      {
            "id": "nist",
            "t": "NIST: revisão sobre marcas de mordida",
            "desc": "NISTIR 8352, de 07/03/2023, em inglês. Conclui que a análise de marca de mordida não tem base científica suficiente.",
            "url": "https://doi.org/10.6028/NIST.IR.8352",
            "fonte": "NIST (EUA)"
      },
      {
            "id": "l12030",
            "t": "Lei 12.030/2009",
            "desc": "Perícias oficiais. O art. 5º põe o perito odontolegista entre os peritos de natureza criminal.",
            "url": "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2009/lei/l12030.htm",
            "fonte": "Planalto"
      },
      {
            "id": "cp",
            "t": "Código Penal",
            "desc": "Decreto-Lei 2.848/1940, texto compilado. O art. 129 trata da lesão corporal.",
            "url": "https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
            "fonte": "Planalto"
      },
      {
            "id": "cpp",
            "t": "Código de Processo Penal",
            "desc": "Decreto-Lei 3.689/1941, texto compilado. Arts. 158 a 168: exame de corpo de delito e perícias.",
            "url": "https://www.planalto.gov.br/ccivil_03/decreto-lei/del3689compilado.htm",
            "fonte": "Planalto"
      }
    ],
    /* Rafael 13/11: texto exato dos artigos citados (fonte oficial; conferir todo mês) */
    leis: {
      "l5081": {
            "nome": "Lei 5.081/1966",
            "bib": "l5081",
            "alias": [
                  "Lei 5\\.081/1966",
                  "Lei 5\\.081"
            ],
            "fonte": "Planalto",
            "arts": {
                  "6": "Art. 6º Compete ao cirurgião-dentista:\nI - praticar todos os atos pertinentes a Odontologia, decorrentes de conhecimentos adquiridos em curso regular ou em cursos de pós-graduação;\nII - prescrever e aplicar especialidades farmacêuticas de uso interno e externo, indicadas em Odontologia;\nIII - atestar, no setor de sua atividade profissional, estados mórbidos e outros, inclusive, para justificação de faltas ao emprego. (Redação dada pela Lei nº 6.215, de 1975)\nIV - proceder à perícia odontolegal em fôro civil, criminal, trabalhista e em sede administrativa;\nV - aplicar anestesia local e truncular;\nVI - empregar a analgesia e a hipnose, desde que comprovadamente habilitado, quando constituírem meios eficazes para o tratamento;\nVII - manter, anexo ao consultório, laboratório de prótese, aparelhagem e instalação adequadas para pesquisas e análises clínicas, relacionadas com os casos específicos de sua especialidade, bem como aparelhos de Raios X, para diagnóstico, e aparelhagem de fisioterapia;\nVIII - prescrever e aplicar medicação de urgência no caso de acidentes graves que comprometam a vida e a saúde do paciente;\nIX - utilizar, no exercício da função de perito-odontólogo, em casos de necropsia, as vias de acesso do pescoço e da cabeça."
            },
            "conferido": "13/11/2026"
      },
      "l13787": {
            "nome": "Lei 13.787/2018",
            "bib": "l13787",
            "alias": [
                  "Lei 13\\.787/2018"
            ],
            "fonte": "Planalto",
            "arts": {
                  "1": "Art. 1º A digitalização e a utilização de sistemas informatizados para a guarda, o armazenamento e o manuseio de prontuário de paciente são regidas por esta Lei e pela Lei nº 13.709, de 14 de agosto de 2018 .",
                  "6": "Art. 6º Decorrido o prazo mínimo de 20 (vinte) anos a partir do último registro, os prontuários em suporte de papel e os digitalizados poderão ser eliminados.\n§ 1º Prazos diferenciados para a guarda de prontuário de paciente, em papel ou digitalizado, poderão ser fixados em regulamento, de acordo com o potencial de uso em estudos e pesquisas nas áreas das ciências da saúde, humanas e sociais, bem como para fins legais e probatórios.\n§ 2º Alternativamente à eliminação, o prontuário poderá ser devolvido ao paciente.\n§ 3º O processo de eliminação deverá resguardar a intimidade do paciente e o sigilo e a confidencialidade das informações.\n§ 4º A destinação final de todos os prontuários e a sua eliminação serão registradas na forma de regulamento.\n§ 5º As disposições deste artigo aplicam-se a todos os prontuários de paciente, independentemente de sua forma de armazenamento, inclusive aos microfilmados e aos arquivados eletronicamente em meio óptico, bem como aos constituídos por documentos gerados e mantidos originalmente de forma eletrônica."
            },
            "conferido": "13/11/2026"
      },
      "l12030": {
            "nome": "Lei 12.030/2009",
            "bib": "l12030",
            "alias": [
                  "Lei 12\\.030/2009"
            ],
            "fonte": "Planalto",
            "arts": {
                  "5": "Art. 5o Observado o disposto na legislação específica de cada ente a que o perito se encontra vinculado, são peritos de natureza criminal os peritos criminais, peritos médico-legistas e peritos odontolegistas com formação superior específica detalhada em regulamento, de acordo com a necessidade de cada órgão e por área de atuação profissional."
            },
            "conferido": "13/11/2026"
      },
      "cdc": {
            "nome": "CDC (Lei 8.078/1990)",
            "bib": "cdc",
            "alias": [
                  "CDC",
                  "Lei 8\\.078/1990\\)?"
            ],
            "fonte": "Planalto, texto compilado",
            "arts": {
                  "14": "Art. 14. O fornecedor de serviços responde, independentemente da existência de culpa, pela reparação dos danos causados aos consumidores por defeitos relativos à prestação dos serviços, bem como por informações insuficientes ou inadequadas sobre sua fruição e riscos.\n§ 1° O serviço é defeituoso quando não fornece a segurança que o consumidor dele pode esperar, levando-se em consideração as circunstâncias relevantes, entre as quais:\nI - o modo de seu fornecimento;\nII - o resultado e os riscos que razoavelmente dele se esperam;\nIII - a época em que foi fornecido.\n§ 2º O serviço não é considerado defeituoso pela adoção de novas técnicas.\n§ 3° O fornecedor de serviços só não será responsabilizado quando provar:\nI - que, tendo prestado o serviço, o defeito inexiste;\nII - a culpa exclusiva do consumidor ou de terceiro.\n§ 4° A responsabilidade pessoal dos profissionais liberais será apurada mediante a verificação de culpa.",
                  "27": "Art. 27. Prescreve em cinco anos a pretensão à reparação pelos danos causados por fato do produto ou do serviço prevista na Seção II deste Capítulo, iniciando-se a contagem do prazo a partir do conhecimento do dano e de sua autoria.\nParágrafo único. (Vetado)."
            },
            "conferido": "13/11/2026"
      },
      "lgpd": {
            "nome": "LGPD (Lei 13.709/2018)",
            "bib": "lgpd",
            "alias": [
                  "LGPD"
            ],
            "fonte": "Planalto, texto compilado",
            "arts": {
                  "5": "Art. 5º Para os fins desta Lei, considera-se:\nI - dado pessoal: informação relacionada a pessoa natural identificada ou identificável;\nII - dado pessoal sensível: dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural;\nIII - dado anonimizado: dado relativo a titular que não possa ser identificado, considerando a utilização de meios técnicos razoáveis e disponíveis na ocasião de seu tratamento;\nIV - banco de dados: conjunto estruturado de dados pessoais, estabelecido em um ou em vários locais, em suporte eletrônico ou físico;\nV - titular: pessoa natural a quem se referem os dados pessoais que são objeto de tratamento;\nVI - controlador: pessoa natural ou jurídica, de direito público ou privado, a quem competem as decisões referentes ao tratamento de dados pessoais;\nVII - operador: pessoa natural ou jurídica, de direito público ou privado, que realiza o tratamento de dados pessoais em nome do controlador;\nVIII - encarregado: pessoa indicada pelo controlador e operador para atuar como canal de comunicação entre o controlador, os titulares dos dados e a Agência Nacional de Proteção de Dados (ANPD); (Redação dada pela Lei nº 15.352, de 2026)\nIX - agentes de tratamento: o controlador e o operador;\nX - tratamento: toda operação realizada com dados pessoais, como as que se referem a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração;\nXI - anonimização: utilização de meios técnicos razoáveis e disponíveis no momento do tratamento, por meio dos quais um dado perde a possibilidade de associação, direta ou indireta, a um indivíduo;\nXII - consentimento: manifestação livre, informada e inequívoca pela qual o titular concorda com o tratamento de seus dados pessoais para uma finalidade determinada;\nXIII - bloqueio: suspensão temporária de qualquer operação de tratamento, mediante guarda do dado pessoal ou do banco de dados;\nXIV - eliminação: exclusão de dado ou de conjunto de dados armazenados em banco de dados, independentemente do procedimento empregado;\nXV - transferência internacional de dados: transferência de dados pessoais para país estrangeiro ou organismo internacional do qual o país seja membro;\nXVI - uso compartilhado de dados: comunicação, difusão, transferência internacional, interconexão de dados pessoais ou tratamento compartilhado de bancos de dados pessoais por órgãos e entidades públicos no cumprimento de suas competências legais, ou entre esses e entes privados, reciprocamente, com autorização específica, para uma ou mais modalidades de tratamento permitidas por esses entes públicos, ou entre entes privados;\nXVII - relatório de impacto à proteção de dados pessoais: documentação do controlador que contém a descrição dos processos de tratamento de dados pessoais que podem gerar riscos às liberdades civis e aos direitos fundamentais, bem como medidas, salvaguardas e mecanismos de mitigação de risco;\nXVIII - órgão de pesquisa: órgão ou entidade da administração pública direta ou indireta ou pessoa jurídica de direito privado sem fins lucrativos legalmente constituída sob as leis brasileiras, com sede e foro no País, que inclua em sua missão institucional ou em seu objetivo social ou estatutário a pesquisa básica ou aplicada de caráter histórico, científico, tecnológico ou estatístico; e (Redação dada pela Lei nº 13.853, de 2019) Vigência\nXIX - autoridade nacional: entidade da administração pública responsável por zelar, implementar e fiscalizar o cumprimento desta Lei em todo o território nacional. (Redação dada pela Lei nº 15.352, de 2026)",
                  "11": "Art. 11. O tratamento de dados pessoais sensíveis somente poderá ocorrer nas seguintes hipóteses:\nI - quando o titular ou seu responsável legal consentir, de forma específica e destacada, para finalidades específicas;\nII - sem fornecimento de consentimento do titular, nas hipóteses em que for indispensável para:\na) cumprimento de obrigação legal ou regulatória pelo controlador;\nb) tratamento compartilhado de dados necessários à execução, pela administração pública, de políticas públicas previstas em leis ou regulamentos;\nc) realização de estudos por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados pessoais sensíveis;\nd) exercício regular de direitos, inclusive em contrato e em processo judicial, administrativo e arbitral, este último nos termos da Lei nº 9.307, de 23 de setembro de 1996 (Lei de Arbitragem) ;\ne) proteção da vida ou da incolumidade física do titular ou de terceiro;\nf) tutela da saúde, exclusivamente, em procedimento realizado por profissionais de saúde, serviços de saúde ou autoridade sanitária; ou (Redação dada pela Lei nº 13.853, de 2019) Vigência\ng) garantia da prevenção à fraude e à segurança do titular, nos processos de identificação e autenticação de cadastro em sistemas eletrônicos, resguardados os direitos mencionados no art. 9º desta Lei e exceto no caso de prevalecerem direitos e liberdades fundamentais do titular que exijam a proteção dos dados pessoais.\n§ 1º Aplica-se o disposto neste artigo a qualquer tratamento de dados pessoais que revele dados pessoais sensíveis e que possa causar dano ao titular, ressalvado o disposto em legislação específica.\n§ 2º Nos casos de aplicação do disposto nas alíneas “a” e “b” do inciso II do caput deste artigo pelos órgãos e pelas entidades públicas, será dada publicidade à referida dispensa de consentimento, nos termos do inciso I do caput do art. 23 desta Lei.\n§ 3º A comunicação ou o uso compartilhado de dados pessoais sensíveis entre controladores com objetivo de obter vantagem econômica poderá ser objeto de vedação ou de regulamentação por parte da autoridade nacional, ouvidos os órgãos setoriais do Poder Público, no âmbito de suas competências.\n§ 4º É vedada a comunicação ou o uso compartilhado entre controladores de dados pessoais sensíveis referentes à saúde com objetivo de obter vantagem econômica, exceto nas hipóteses relativas a prestação de serviços de saúde, de assistência farmacêutica e de assistência à saúde, desde que observado o\n§ 5º deste artigo, incluídos os serviços auxiliares de diagnose e terapia, em benefício dos interesses dos titulares de dados, e para permitir: (Redação dada pela Lei nº 13.853, de 2019) Vigência\nI - a portabilidade de dados quando solicitada pelo titular; ou (Incluído pela Lei nº 13.853, de 2019) Vigência\nII - as transações financeiras e administrativas resultantes do uso e da prestação dos serviços de que trata este parágrafo. (Incluído pela Lei nº 13.853, de 2019) Vigência\n§ 5º É vedado às operadoras de planos privados de assistência à saúde o tratamento de dados de saúde para a prática de seleção de riscos na contratação de qualquer modalidade, assim como na contratação e exclusão de beneficiários. (Incluído pela Lei nº 13.853, de 2019) Vigência",
                  "18": "Art. 18. O titular dos dados pessoais tem direito a obter do controlador, em relação aos dados do titular por ele tratados, a qualquer momento e mediante requisição:\nI - confirmação da existência de tratamento;\nII - acesso aos dados;\nIII - correção de dados incompletos, inexatos ou desatualizados;\nIV - anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto nesta Lei;\nV - portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa, de acordo com a regulamentação da autoridade nacional, observados os segredos comercial e industrial; (Redação dada pela Lei nº 13.853, de 2019) Vigência\nVI - eliminação dos dados pessoais tratados com o consentimento do titular, exceto nas hipóteses previstas no art. 16 desta Lei;\nVII - informação das entidades públicas e privadas com as quais o controlador realizou uso compartilhado de dados;\nVIII - informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa;\nIX - revogação do consentimento, nos termos do\n§ 5º do art. 8º desta Lei.\n§ 1º O titular dos dados pessoais tem o direito de peticionar em relação aos seus dados contra o controlador perante a autoridade nacional.\n§ 2º O titular pode opor-se a tratamento realizado com fundamento em uma das hipóteses de dispensa de consentimento, em caso de descumprimento ao disposto nesta Lei.\n§ 3º Os direitos previstos neste artigo serão exercidos mediante requerimento expresso do titular ou de representante legalmente constituído, a agente de tratamento.\n§ 4º Em caso de impossibilidade de adoção imediata da providência de que trata o\n§ 3º deste artigo, o controlador enviará ao titular resposta em que poderá:\nI - comunicar que não é agente de tratamento dos dados e indicar, sempre que possível, o agente; ou\nII - indicar as razões de fato ou de direito que impedem a adoção imediata da providência.\n§ 5º O requerimento referido no\n§ 3º deste artigo será atendido sem custos para o titular, nos prazos e nos termos previstos em regulamento.\n§ 6º O responsável deverá informar, de maneira imediata, aos agentes de tratamento com os quais tenha realizado uso compartilhado de dados a correção, a eliminação, a anonimização ou o bloqueio dos dados, para que repitam idêntico procedimento, exceto nos casos em que esta comunicação seja comprovadamente impossível ou implique esforço desproporcional. (Redação dada pela Lei nº 13.853, de 2019) Vigência\n§ 7º A portabilidade dos dados pessoais a que se refere o inciso V do caput deste artigo não inclui dados que já tenham sido anonimizados pelo controlador.\n§ 8º O direito a que se refere o\n§ 1º deste artigo também poderá ser exercido perante os organismos de defesa do consumidor."
            },
            "conferido": "13/11/2026"
      },
      "cp": {
            "nome": "Código Penal",
            "bib": "cp",
            "alias": [
                  "Código Penal"
            ],
            "fonte": "Planalto, texto compilado",
            "arts": {
                  "129": "Art. 129. Ofender a integridade corporal ou a saúde de outrem: Pena - detenção, de três meses a um ano. Lesão corporal de natureza grave\n§ 1º Se resulta:\nI - Incapacidade para as ocupações habituais, por mais de trinta dias;\nII - perigo de vida;\nIII - debilidade permanente de membro, sentido ou função;\nIV - aceleração de parto: Pena - reclusão, de um a cinco anos.\n§ 2° Se resulta:\nI - Incapacidade permanente para o trabalho;\nII - enfermidade incuravel; III perda ou inutilização do membro, sentido ou função;\nIV - deformidade permanente;\nV - aborto: Pena - reclusão, de dois a oito anos. Lesão corporal seguida de morte\n§ 3° Se resulta morte e as circunstâncias evidenciam que o agente não quís o resultado, nem assumiu o risco de produzí-lo: (Vide Lei nº 4.611, de 1965) Pena - reclusão, de quatro a doze anos.\n§ 3º-A. No crime previsto no\n§ 3º deste artigo, se cometido no contexto da atuação ou para a consecução das condutas previstas no art. 2º da lei que institui o marco legal do combate ao crime organizado no Brasil: (Incluído pela Lei nº 15.358, de 2026) Pena - reclusão, de 20 (vinte) a 40 (quarenta) anos. (Incluído pela Lei nº 15.358, de 2026) Diminuição de pena\n§ 4° Se o agente comete o crime impelido por motivo de relevante valor social ou moral ou sob o domínio de violenta emoção, logo em seguida a injusta provocação da vítima, o juiz pode reduzir a pena de um sexto a um terço. Substituição da pena\n§ 5° O juiz, não sendo graves as lesões, pode ainda substituir a pena de detenção pela de multa, de duzentos mil réis a dois contos de réis:\nI - se ocorre qualquer das hipóteses do parágrafo anterior;\nII - se as lesões são recíprocas. Lesão corporal culposa\n§ 6° Se a lesão é culposa: (Vide Lei nº 4.611, de 1965) Pena - detenção, de dois meses a um ano. Aumento de pena\n§ 7o Aumenta-se a pena de 1/3 (um terço) se ocorrer qualquer das hipóteses dos §§ 4o e 6o do art. 121 deste Código. (Redação dada pela Lei nº 12.720, de 2012)\n§ 8º - Aplica-se à lesão culposa o disposto no\n§ 5º do art. 121.(Redação dada pela Lei nº 8.069, de 1990)\n§ 8º-A. Com exceção do disposto no\n§ 3º-A deste artigo, aumenta-se a pena em 2/3 (dois terços) se a lesão é praticada por integrante de organização criminosa ultraviolenta, grupo paramilitar ou milícia privada, no contexto da atuação ou para a consecução das condutas previstas no art. 2º da lei que institui o marco legal do combate ao crime organizado no Brasil. (Incluído pela Lei nº 15.358, de 2026) Violência Doméstica (Incluído pela Lei nº 10.886, de 2004)\n§ 9º Se a lesão for praticada contra ascendente, descendente, irmão, cônjuge ou companheiro, pessoa com relação de trabalho doméstico ou com quem conviva ou tenha convivido, ou, ainda, prevalecendo-se o agente das relações domésticas, de trabalho doméstico, de coabitação ou de hospitalidade: (Redação dada pela Lei nº 15.455, de 2026) Pena  reclusão, de 2 (dois) a 5 (cinco) anos. (Redação dada pela Lei nº 14.994, de 2024)\n§ 10. Nos casos previstos nos §§ 1o a 3o deste artigo, se as circunstâncias são as indicadas no\n§ 9o deste artigo, aumenta-se a pena em 1/3 (um terço). (Incluído pela Lei nº 10.886, de 2004)\n§ 11. Na hipótese do\n§ 9o deste artigo, a pena será aumentada de um terço se o crime for cometido contra pessoa portadora de deficiência. (Incluído pela Lei nº 11.340, de 2006)\n§ 12. Aumenta-se a pena de: (Redação dada pela Lei nº 15.159, de 2025)\nI - 1/3 (um terço) a 2/3 (dois terços) se a lesão dolosa for praticada: (Redação dada pela Lei nº 15.159, de 2025)\na) contra autoridade ou agente descrito nos arts. 142 e 144 da Constituição Federal ou integrantes do sistema prisional ou da Força Nacional de Segurança Pública, no exercício da função ou em decorrência dela, ou contra seu cônjuge, companheiro ou parente consanguíneo até terceiro grau, em razão dessa condição; (Incluído pela Lei nº 15.159, de 2025)\nb) contra membro do Poder Judiciário, do Ministério Público, da Defensoria Pública ou da Advocacia Pública, de que tratam os arts. 131 e 132 da Constituição Federal, ou oficial de justiça, no exercício da função ou em decorrência dela, ou contra seu cônjuge, companheiro ou parente, inclusive por afinidade, até o terceiro grau, em razão dessa condição; ou (Incluído pela Lei nº 15.159, de 2025)\nc) nas dependências de instituição de ensino; (Incluído pela Lei nº 15.159, de 2025)\nII - 2/3 (dois terços) ao dobro se a lesão dolosa for praticada nas dependências de instituição de ensino e: (Redação dada pela Lei nº 15.159, de 2025)\na) a vítima for pessoa com deficiência ou com doença que acarrete condição limitante ou de vulnerabilidade física ou mental; ou (Incluído pela Lei nº 15.159, de 2025)\nb) o autor for ascendente, padrasto ou madrasta, tio, irmão, cônjuge, companheiro, tutor, curador, preceptor ou empregador da vítima ou por qualquer outro título tiver autoridade sobre ela ou, ainda, for professor ou funcionário da instituição de ensino. (Incluído pela Lei nº 15.159, de 2025)\n§ 13. Se a lesão é praticada contra a mulher, por razões da condição do sexo feminino, nos termos do\n§ 1º do art. 121-A deste Código: (Redação dada pela Lei nº 14.994, de 2024) Pena  reclusão, de 2 (dois) a 5 (cinco) anos. (Redação dada pela Lei nº 14.994, de 2024)CAPÍTULO III DA PERICLITAÇÃO DA VIDA E DA SAÚDE Perigo de contágio venéreo"
            },
            "conferido": "13/11/2026"
      },
      "cpp": {
            "nome": "Código de Processo Penal",
            "bib": "cpp",
            "alias": [
                  "CPP"
            ],
            "fonte": "Planalto, texto compilado",
            "arts": {
                  "158": "Art. 158. Quando a infração deixar vestígios, será indispensável o exame de corpo de delito, direto ou indireto, não podendo supri-lo a confissão do acusado.\nParágrafo único. Dar-se-á prioridade à realização do exame de corpo de delito quando se tratar de crime que envolva: (Incluído dada pela Lei nº 13.721, de 2018)\nI - violência doméstica e familiar contra mulher; (Incluído dada pela Lei nº 13.721, de 2018)\nII - violência contra criança, adolescente, idoso ou pessoa com deficiência. (Incluído dada pela Lei nº 13.721, de 2018)",
                  "159": "Art. 159. O exame de corpo de delito e outras perícias serão realizados por perito oficial, portador de diploma de curso superior. (Redação dada pela Lei nº 11.690, de 2008)\n§ 1o Na falta de perito oficial, o exame será realizado por 2 (duas) pessoas idôneas, portadoras de diploma de curso superior preferencialmente na área específica, dentre as que tiverem habilitação técnica relacionada com a natureza do exame. (Redação dada pela Lei nº 11.690, de 2008)\n§ 2o Os peritos não oficiais prestarão o compromisso de bem e fielmente desempenhar o encargo. (Redação dada pela Lei nº 11.690, de 2008)\n§ 3o Serão facultadas ao Ministério Público, ao assistente de acusação, ao ofendido, ao querelante e ao acusado a formulação de quesitos e indicação de assistente técnico. (Incluído pela Lei nº 11.690, de 2008)\n§ 4o O assistente técnico atuará a partir de sua admissão pelo juiz e após a conclusão dos exames e elaboração do laudo pelos peritos oficiais, sendo as partes intimadas desta decisão. (Incluído pela Lei nº 11.690, de 2008)\n§ 5o Durante o curso do processo judicial, é permitido às partes, quanto à perícia: (Incluído pela Lei nº 11.690, de 2008) I  requerer a oitiva dos peritos para esclarecerem a prova ou para responderem a quesitos, desde que o mandado de intimação e os quesitos ou questões a serem esclarecidas sejam encaminhados com antecedência mínima de 10 (dez) dias, podendo apresentar as respostas em laudo complementar; (Incluído pela Lei nº 11.690, de 2008) II  indicar assistentes técnicos que poderão apresentar pareceres em prazo a ser fixado pelo juiz ou ser inquiridos em audiência. (Incluído pela Lei nº 11.690, de 2008)\n§ 6o Havendo requerimento das partes, o material probatório que serviu de base à perícia será disponibilizado no ambiente do órgão oficial, que manterá sempre sua guarda, e na presença de perito oficial, para exame pelos assistentes, salvo se for impossível a sua conservação. (Incluído pela Lei nº 11.690, de 2008)\n§ 7o Tratando-se de perícia complexa que abranja mais de uma área de conhecimento especializado, poder-se-á designar a atuação de mais de um perito oficial, e a parte indicar mais de um assistente técnico. (Incluído pela Lei nº 11.690, de 2008)",
                  "168": "Art. 168. Em caso de lesões corporais, se o primeiro exame pericial tiver sido incompleto, proceder-se-á a exame complementar por determinação da autoridade policial ou judiciária, de ofício, ou a requerimento do Ministério Público, do ofendido ou do acusado, ou de seu defensor.\n§ 1o No exame complementar, os peritos terão presente o auto de corpo de delito, a fim de suprir-lhe a deficiência ou retificá-lo.\n§ 2o Se o exame tiver por fim precisar a classificação do delito no art. 129,\n§ 1o, I, do Código Penal, deverá ser feito logo que decorra o prazo de 30 dias, contado da data do crime.\n§ 3o A falta de exame complementar poderá ser suprida pela prova testemunhal."
            },
            "conferido": "13/11/2026"
      },
      "ceo": {
            "nome": "Código de Ética Odontológica",
            "bib": "ceo",
            "alias": [
                  "CEO",
                  "Código de Ética"
            ],
            "fonte": "CFO, Res. 118/2012 (artigo não alterado pela Res. CFO-271/2025)",
            "arts": {
                  "5": "Art. 5º. Constituem direitos fundamentais dos profissionais inscritos, segundo suas atribuições específicas:\nI - diagnosticar, planejar e executar tratamentos, com liberdade de convicção, nos limites de suas atribuições, observados o estado atual da Ciência e sua dignidade profissional;\nII - guardar sigilo a respeito das informações adquiridas no desempenho de suas funções;\nIII - contratar serviços de outros profissionais da Odontologia, por escrito, de acordo com os preceitos deste Código e demais legislações em vigor;\nIV - recusar-se a exercer a profissão em âmbito público ou privado onde as condições de trabalho não sejam dignas, seguras e salubres;\nV - renunciar ao atendimento do paciente, durante o tratamento, quando da constatação de fatos que, a critério do profissional, prejudiquem o bom relacionamento com o paciente ou o pleno desempenho profissional. Nestes casos tem o profissional o dever de comunicar previamente, por escrito, ao paciente ou seu responsável legal, fornecendo ao cirurgião-dentista que lhe suceder todas as informações necessárias para a continuidade do tratamento;\nVI - recusar qualquer disposição estatutária, regimental, de instituição pública ou privada, que limite a escolha dos meios a serem postos em prática para o estabelecimento do diagnóstico e para a execução do tratamento, bem como recusar-se a executar atividades que não sejam de sua competência legal; e,\nVII - decidir, em qualquer circunstância, levando em consideração sua experiência e capacidade profissional, o tempo a ser dedicado ao paciente ou periciado, evitando que o acúmulo de encargos, consultas, perícias ou outras avaliações venham prejudicar o exercício pleno da Odontologia.",
                  "9": "Art. 9º. Constituem deveres fundamentais dos inscritos e sua violação caracteriza infração ética:\nI - manter regularizadas suas obrigações financeiras junto ao Conselho Regional;\nII - manter seus dados cadastrais atualizados junto ao Conselho Regional;\nIII - zelar e trabalhar pelo perfeito desempenho ético da Odontologia e pelo prestígio e bom conceito da profissão;\nIV - assegurar as condições adequadas para o desempenho ético-profissional da Odontologia, quando investido em função de direção ou responsável técnico;\nV - exercer a profissão mantendo comportamento digno;\nVI - manter atualizados os conhecimentos profissionais, técnico-científicos e culturais, necessários ao pleno desempenho do exercício profissional;\nVII - zelar pela saúde e pela dignidade do paciente;\nVIII - resguardar o sigilo profissional;\nIX - promover a saúde coletiva no desempenho de suas funções, cargos e cidadania, independentemente de exercer a profissão no setor público ou privado;\nX - elaborar e manter atualizados os prontuários na forma das normas em vigor, incluindo os prontuários digitais;\nXI - apontar falhas nos regulamentos e nas normas das instituições em que trabalhe, quando as julgar indignas para o exercício da profissão ou prejudiciais ao paciente, devendo dirigir-se, nesses casos, aos órgãos competentes;\nXII - propugnar pela harmonia na classe;\nXIII - abster-se da prática de atos que impliquem mercantilização da Odontologia ou sua má conceituação;\nXIV - assumir responsabilidade pelos atos praticados, ainda que estes tenham sido solicitados ou consentidos pelo paciente ou seu responsável;\nXV - resguardar sempre a privacidade do paciente;\nXVI - não manter vínculo com entidade, empresas ou outros desígnios que os caracterizem como empregado, credenciado ou cooperado quando as mesmas se encontrarem em situação ilegal, irregular ou inidônea;\nXVII - comunicar aos Conselhos Regionais sobre atividades que caracterizem o exercício ilegal da Odontologia e que sejam de seu conhecimento;\nXVIII - encaminhar o material ao laboratório de prótese dentária devidamente acompanhado de ficha específica assinada; e,\nXIX - registrar os procedimentos técnico-laboratoriais efetuados, mantendo-os em arquivo próprio, quando técnico em prótese dentária.",
                  "11": "Art. 11. Constitui infração ética:\nI - discriminar o ser humano de qualquer forma ou sob qualquer pretexto;\nII - aproveitar-se de situações decorrentes da relação profissional/ paciente para obter vantagem física, emocional, financeira ou política;\nIII - exagerar em diagnóstico, prognóstico ou terapêutica;\nIV - deixar de esclarecer adequadamente os propósitos, riscos, custos e alternativas do tratamento;\nV - executar ou propor tratamento desnecessário ou para o qual não esteja capacitado;\nVI - abandonar paciente, salvo por motivo justificável, circunstância em que serão conciliados os honorários e que deverá ser informado ao paciente ou ao seu responsável legal de necessidade da continuidade do tratamento;\nVII - deixar de atender paciente que procure cuidados profissionais em caso de urgência, quando não haja outro cirurgião-dentista em condições de fazê-lo;\nVIII - desrespeitar ou permitir que seja desrespeitado o paciente;\nIX - adotar novas técnicas ou materiais que não tenham efetiva comprovação científica;\nX - iniciar qualquer procedimento ou tratamento odontológico sem o consentimento prévio do paciente ou do seu responsável legal, exceto em casos de urgência ou emergência;\nXI - delegar a profissionais técnicos ou auxiliares atos ou atribuições exclusivas da profissão de cirurgião- dentista;\nXII - opor-se a prestar esclarecimentos e/ou fornecer relatórios sobre diagnósticos e terapêuticas, realizados no paciente, quando solicitados pelo mesmo, por seu representante legal ou nas formas previstas em lei;\nXIII - executar procedimentos como técnico em prótese dentária, técnico em saúde bucal, auxiliar em saúde bucal e auxiliar em prótese dentária, além daqueles discriminados na Lei que regulamenta a profissão e nas resoluções do Conselho Federal; e,\nXIV - propor ou executar tratamento fora do âmbito da Odontologia.",
                  "14": "Art. 14. Constitui infração ética:\nI - revelar, sem justa causa, fato sigiloso de que tenha conhecimento em razão do exercício de sua profissão;\nII - negligenciar na orientação de seus colaboradores quanto ao sigilo profissional; e,\nIII - fazer referência a casos clínicos identificáveis, exibir paciente, sua imagem ou qualquer outro elemento que o identifique, em qualquer meio de comunicação ou sob qualquer pretexto, salvo se o cirurgião-dentista estiver no exercício da docência ou em publicações científicas, nos quais, a autorização do paciente ou seu responsável legal, lhe permite a exibição da imagem ou prontuários com finalidade didático-acadêmicas. Parágrafo Único. Compreende-se como justa causa, principalmente:\nI - notificação compulsória de doença;\nII - colaboração com a justiça nos casos previstos em lei;\nIII - perícia odontológica nos seus exatos limites;\nIV - estrita defesa de interesse legítimo dos profissionais inscritos; e,\nV - revelação de fato sigiloso ao responsável pelo incapaz.",
                  "17": "Art. 17. É obrigatória a elaboração e a manutenção de forma legível e atualizada de prontuário e a sua conservação em arquivo próprio seja de forma física ou digital. Parágrafo Único. Os profissionais da Odontologia deverão manter no prontuário os dados clínicos necessários para a boa condução do caso, sendo preenchido, em cada avaliação, em ordem cronológica com data, hora, nome, assinatura e número de registro do cirurgião-dentista no Conselho Regional de Odontologia.",
                  "18": "Art. 18. Constitui infração ética:\nI - negar, ao paciente ou periciado, acesso a seu prontuário, deixar de lhe fornecer cópia quando solicitada, bem como deixar de lhe dar explicações necessárias à sua compreensão, salvo quando ocasionem riscos ao próprio paciente ou a terceiros;\nII - deixar de atestar atos executados no exercício profissional, quando solicitado pelo paciente ou por seu representante legal;\nIII - expedir documentos odontológicos: atestados, declarações, relatórios, pareceres técnicos, laudos periciais, auditorias ou de verificação odontolegal, sem ter praticado ato profissional que o justifique, que seja tendencioso ou que não corresponda à verdade;\nIV - comercializar atestados odontológicos, recibos, notas fiscais, ou prescrições de especialidades farmacêuticas;\nV - usar formulários de instituições públicas para prescrever, encaminhar ou atestar fatos verificados na clínica privada;\nVI - deixar de emitir laudo dos exames por imagens realizados em clínicas de radiologia; e,\nVII - receitar, atestar, declarar ou emitir laudos, relatórios e pareceres técnicos de forma secreta ou ilegível, sem a devida identificação, inclusive com o número de registro no Conselho Regional de Odontologia na sua jurisdição, bem como assinar em branco, folhas de receituários, atestados, laudos ou quaisquer outros documentos odontológicos.",
                  "41": "Art. 41. A comunicação e a divulgação em Odontologia obedecerão ao disposto neste Código.\n§ 1º. É vedado aos técnicos em prótese dentária, técnicos em saúde bucal, auxiliares de prótese dentária, bem como aos laboratórios de prótese dentária fazerem anúncios, propagandas ou publicidade dirigida ao público em geral.\n§ 2º. Aos profissionais citados no\n§ 1º, com exceção do auxiliar em saúde bucal, serão permitidas propagandas em revistas, jornais ou folhetos especializados, desde que dirigidas aos cirurgiões-dentistas, e acompanhadas do nome do profissional ou do laboratório, do seu responsável técnico e do número de inscrição no Conselho Regional de Odontologia.\n§ 3º. Nos laboratórios de prótese dentária deverá ser afixado, em local visível ao público em geral, informação fornecida pelo Conselho Regional de Odontologia da jurisdição sobre a restrição do atendimento direto ao paciente."
            },
            "conferido": "13/11/2026"
      }
    },
    /* Rafael 13/11: aba Mudanças recentes (atualizar todo mês) */
    atualizado: '13/11/2026',
    mudancas: [
      {
            "data": "14/10/2026",
            "t": "CFO pede mais prazo para a RDC 1.002/2025 da Anvisa",
            "d": "O prazo para clínicas e consultórios se adequarem às novas regras sanitárias termina em dezembro de 2026. O CFO pediu à Anvisa prorrogação ou flexibilização, levando em conta o porte do serviço e as diferenças regionais.",
            "fonte": "Legismap (nota do CFO), 14/10/2026",
            "url": "https://legismap.com.br/conteudos/artigos-e-noticias/o-conselho-federal-de-odontologia-e-o-prazo-de-adequacao-a-rdc-n-1-002-2025-da-anvisa"
      },
      {
            "data": "21/07/2026",
            "t": "Res. CFO-297/2026: PMMA proibido para fins estéticos",
            "d": "Proíbe o cirurgião-dentista de usar PMMA como preenchedor injetável com finalidade só estética; o uso reparador continua. Vale a partir da publicação.",
            "fonte": "Jornal Opção, 24/07/2026",
            "url": "https://www.jornalopcao.com.br/saude/dentistas-ficam-proibidos-de-usar-pmma-para-fins-esteticos-resolucao-cita-risco-de-cegueira-e-outras-complicacoes-850312/"
      },
      {
            "data": "16/07/2026",
            "t": "Res. CFO-296/2026: registro de especialidade feita em residência",
            "d": "A residência só dá direito ao registro de especialista se o programa seguir as normas do MEC e tiver autorização vigente da CNRMS. O CFO passa a avaliar o conteúdo da formação (currículo, carga horária prática, preceptoria), não só o nome do certificado. Pedido feito no CRO. Revogou as Res. CFO-27/2002, 39/2003, 70/2006 e 177/2016.",
            "fonte": "Jacobs Consultoria (data de publicação informada: 16/07/2026)",
            "url": "https://www.jacobsconsultoria.com.br/post/cfo-novas-regras-registro-de-especialidades-resid%C3%AAncias"
      },
      {
            "data": "10/07/2026",
            "t": "Res. CFO-295/2026: novas regras de sedação",
            "d": "Substitui a Res. CFO-51/2004. Cria a Habilitação Básica e a Avançada em Sedação em Odontologia; o curso da Avançada tem no mínimo 500 horas, com pelo menos 60 % de prática presencial supervisionada. Quem já faz sedação tem 180 dias da publicação para pedir a habilitação por experiência no CRO. Publicada no DOU em 31/07/2026. Não mexe no Código de Ética.",
            "fonte": "CFO, notícia de 27/07/2026",
            "url": "https://website.cfo.org.br/cfo-publica-nova-resolucao-e-atualiza-regras-para-habilitacao-em-sedacao-em-odontologia/",
            "extra": [
                  {
                        "t": "LegisWeb, texto da resolução",
                        "url": "https://www.legisweb.com.br/legislacao/?id=498734"
                  }
            ]
      },
      {
            "data": "18/05/2026",
            "t": "Lei 15.408/2026: Julho Neon, mês da saúde bucal",
            "d": "Lei federal que cria o Julho Neon, mês de conscientização sobre saúde bucal, com campanhas em escolas e unidades básicas de saúde.",
            "fonte": "Rádio Senado, 18/05/2026",
            "url": "https://www12.senado.leg.br/radio/1/noticia/2026/05/18/julho-neon-nova-lei-cria-mes-dedicado-a-saude-bucal"
      },
      {
            "data": "Março/2026",
            "t": "Res. CFO-283 a 286/2026: estética e cabeça e pescoço",
            "d": "A 284 afirma que a área de atuação do cirurgião-dentista abrange cabeça e pescoço, ligada à formação. A 285 abre exceção à Res. CFO-230/2020 (que proibia rinoplastia, blefaroplastia e ritidoplastia) para especialistas, inclusive em Harmonização Orofacial e Cirurgia Bucomaxilofacial. A 286 (20/03/2026) reconhece a Cirurgia Estética Orofacial (CEOF) como especialidade.",
            "fonte": "ConJur, 08/04/2026",
            "url": "https://conjur.com.br/2026-abr-08/cirurgias-esteticas-na-odontologia-o-que-realmente-mudou-com-as-novas-resolucoes-do-cfo/",
            "extra": [
                  {
                        "t": "Res. CFO-286/2026 no Diário Oficial (via TSE)",
                        "url": "https://sintse.tse.jus.br/documentos/2026/Abr/6/saude/resolucao-no-286-de-20-de-marco-de-2026-reconhece-a-cirurgia-estetica-orofacial-ceof-como"
                  }
            ]
      },
      {
            "data": "15/12/2025",
            "t": "RDC Anvisa 1.002/2025: regras sanitárias para a Odontologia",
            "d": "Primeira norma da Anvisa só para a Odontologia: boas práticas de funcionamento de consultórios, clínicas, unidades móveis e escolares e laboratórios de prótese dentária, públicos ou privados (responsável técnico, licença sanitária, estrutura, equipamentos, esterilização, segurança do paciente, resíduos). Quem já funciona tem 360 dias para se adequar. Publicada no DOU em 16/12/2025.",
            "fonte": "DOU, cópia da Prefeitura do Rio (PDF)",
            "url": "https://vigilanciasanitaria.prefeitura.rio/wp-content/uploads/sites/84/2026/01/RDC-Anvisa-No-1.002-DE-15-DE-dezEMBRO-DE-2025-DOU-Imprensa-Nacional.pdf",
            "extra": [
                  {
                        "t": "Legismap: aprovação pela Anvisa (10/12/2025)",
                        "url": "https://legismap.com.br/conteudos/artigos-e-noticias/anvisa-aprova-marco-historico-para-servicos-odontologicos-em-alinhamento-com-novas-diretrizes-publicadas-pelo-cfo"
                  }
            ]
      },
      {
            "data": "12/11/2025",
            "t": "Res. CFO-277/2025: ambientes de trabalho na Odontologia",
            "d": "Classifica os ambientes de assistência odontológica (consultórios, clínicas) pela complexidade dos procedimentos e define requisitos de organização e funcionamento. Feita com apoio técnico da Anvisa. Publicada em 14/11/2025.",
            "fonte": "CFO, notícia de 18/11/2025",
            "url": "https://website.cfo.org.br/cfo-esclarece-valorizacao-cfo-publica-resolucao-que-regulamenta-os-ambientes-de-trabalho-na-odontologia/"
      },
      {
            "data": "18/06/2025",
            "t": "Res. CFO-271/2025: muda o Código de Ética (cartão de desconto)",
            "d": "Cumprindo decisão do CADE de 2023, tirou do Código as proibições ligadas a cartão de desconto: alterou o art. 20 e o art. 44, XIV, e revogou o art. 32, XIII. Anunciar preço e serviço grátis continua proibido. Publicada no DOU em 24/06/2025.",
            "fonte": "Legismap",
            "url": "https://legismap.com.br/conteudos/artigos-e-noticias/em-cumprimento-a-decisao-do-cade-cfo-realiza-alteracoes-pontuais-no-codigo-de-etica"
      },
      {
            "data": "02/04/2025",
            "t": "Lei 15.116/2025: reconstrução dentária pelo SUS",
            "d": "Cria o programa de reconstrução dentária pelo SUS para mulheres vítimas de violência doméstica. Os critérios de acesso dependem de regulamentação do governo federal.",
            "fonte": "Diário Oficial (via TSE), 03/04/2025",
            "url": "https://sintse.tse.jus.br/documentos/2025/Abr/3/saude/lei-no-15-116-de-2-de-abril-de-2025-institui-o-programa-de-reconstrucao-dentaria-para-mulheres"
      }
    ],
    podeMudar: [
      {
            "t": "Código de Ética novo",
            "d": "Desde 20/02/2025 (Decisão CFO-07/2025) um grupo de trabalho do CFO revisa o Código de Ética e o Código de Processo Ético inteiros. Até hoje não há data de aprovação nem consulta pública publicada.",
            "fonte": "Legismap, notícia sobre a Res. CFO-271/2025",
            "url": "https://legismap.com.br/conteudos/artigos-e-noticias/em-cumprimento-a-decisao-do-cade-cfo-realiza-alteracoes-pontuais-no-codigo-de-etica",
            "extra": [
                  {
                        "t": "CFO, Decisão CFO-07/2025 (ato oficial que criou o grupo)",
                        "url": "https://sistemas.cfo.org.br/visualizar/atos/DECIS%c3%83O/SEC/2025/07"
                  }
            ]
      },
      {
            "t": "Regras de publicidade",
            "d": "Pela Decisão CFO-05, de 18/02/2025, o CFO criou um grupo especial e temporário para atualizar o capítulo \"do Anúncio, da Propaganda e da Publicidade\" do Código de Ética e escrever a minuta do texto novo. O pano de fundo: em 06/03/2025 o CADE abriu inquérito contra o CFO e 24 CROs por publicações contra descontos na Black Friday (Nota Técnica 14/2025) e deu medida preventiva. Pode mudar o que vale para anúncio e redes sociais.",
            "fonte": "CFO, Decisão CFO-05/2025 (ato oficial)",
            "url": "https://sistemas.cfo.org.br/visualizar/atos/DECIS%C3%83O/SEC/2025/05",
            "extra": [
                  {
                        "t": "CADE, Nota Técnica 14/2025 (PDF no site do CFO)",
                        "url": "https://website.cfo.org.br/wp-content/uploads/2025/03/Nota-Tecnica-no-14-2025-CADE-CFO.pdf"
                  }
            ]
      },
      {
            "t": "Sedação pode parar na Justiça",
            "d": "Em 30/07/2026 o CFM, a AMB e a SBA anunciaram que vão à Justiça para suspender a Res. CFO-295/2026, dizendo que ela contraria a Lei do Ato Médico. Até a notícia, não havia decisão judicial.",
            "fonte": "Futuro da Saúde, 31/07/2026",
            "url": "https://futurodasaude.com.br/cfm-justica-resolucao-sedacao-dentistas/"
      },
      {
            "t": "Prazo da RDC 1.002/2025",
            "d": "O prazo de adequação termina em dezembro de 2026 e o CFO pediu prorrogação à Anvisa. Se a Anvisa não prorrogar, as regras passam a ser cobradas na fiscalização.",
            "fonte": "Legismap (nota do CFO), 14/10/2026",
            "url": "https://legismap.com.br/conteudos/artigos-e-noticias/o-conselho-federal-de-odontologia-e-o-prazo-de-adequacao-a-rdc-n-1-002-2025-da-anvisa"
      }
    ],
    modos: [
      { id: 'completo', nome: 'Simulado completo', sub: '10 questões sorteadas de toda a Odontologia Legal.', temas: null },
      { id: 't-casos', nome: 'Casos reais', sub: 'Voo 2283, Brumadinho, Petrópolis, marca de mordida, ossada de Embu e uma decisão do STJ de 2026.', temas: ['Casos reais'] },
      { id: 't-pericia', nome: 'Conceito e perícia', sub: 'O que é a Odontologia Legal e o dentista como perito.', temas: ['Conceito e perícia'] },
      { id: 't-identificacao', nome: 'Identificação humana', sub: 'Odontograma, ante e post mortem, desastres em massa.', temas: ['Identificação humana'] },
      { id: 't-idade', nome: 'Estimativa de idade', sub: 'Desenvolvimento dentário, Demirjian, terceiro molar.', temas: ['Estimativa de idade'] },
      { id: 't-mordida', nome: 'Marcas de mordida', sub: 'O que a técnica promete e o que a ciência diz hoje.', temas: ['Marcas de mordida'] },
      { id: 't-prontuario', nome: 'Prontuário e documentos', sub: 'Prontuário, guarda, acesso do paciente, atestado.', temas: ['Prontuário e documentos'] },
      { id: 't-civil', nome: 'Responsabilidade civil', sub: 'CDC, Código Civil, culpa e prazo.', temas: ['Responsabilidade civil'] },
      { id: 't-etica', nome: 'Código de Ética', sub: 'Deveres, infrações, penas e a alteração de 2025.', temas: ['Código de Ética'] },
      { id: 't-sigilo', nome: 'Sigilo e consentimento', sub: 'Justa causa, cobrança judicial, consentimento.', temas: ['Sigilo e consentimento'] },
      { id: 't-publicidade', nome: 'Publicidade', sub: 'Anúncio, selfie, imagens de caso clínico, laboratório.', temas: ['Publicidade'] },
      { id: 't-lesoes', nome: 'Lesões corporais', sub: 'Art. 129 do Código Penal e o exame complementar.', temas: ['Lesões corporais'] },
      { id: 't-lei', nome: 'Lei 5.081 e prescrição', sub: 'O que o cirurgião-dentista pode: receitar, atestar, periciar.', temas: ['Lei 5.081 e prescrição'] },
      { id: 't-lgpd', nome: 'LGPD', sub: 'Dado de saúde, base legal e direitos do paciente.', temas: ['LGPD'] },
      { id: 'afirm', nome: 'Afirmativas I, II, III', sub: 'Questões no estilo "está correto o que se afirma em" e de asserção e razão.', temas: null, af: true },
      { id: 'erros', nome: 'Revisar meus erros', sub: 'Só as questões que você errou ou deixou em branco aqui.', temas: null, erros: true }
    ],
    revisao: [
      { t: 'Conceito e perícia', i: [
        'Odontologia Legal: usa o conhecimento odontológico a serviço da Justiça (vivo, morto, ossada, fragmentos).',
        'Lei 5.081/1966, art. 6º, IV: compete ao cirurgião-dentista a perícia odontolegal em foro civil, criminal, trabalhista e administrativo. Art. 6º, IX: como perito em necropsia, pode usar as vias de acesso do pescoço e da cabeça.',
        'Lei 12.030/2009, art. 5º: peritos oficiais de natureza criminal = peritos criminais, médico-legistas e ODONTOLEGISTAS.',
        'CPP art. 159 (redação da Lei 11.690/2008): perícia por perito oficial com diploma superior; na falta, 2 pessoas idôneas com diploma superior, de preferência da área, que prestam compromisso.',
        'CPP art. 158: crime que deixa vestígio exige exame de corpo de delito; a confissão não o substitui. Art. 158-A (Lei 13.964/2019): cadeia de custódia.'
      ] },
      { t: 'Identificação humana', i: [
        'INTERPOL (DVI): reconhecimento visual não é considerado preciso; digitais, odontologia e DNA dão a identificação conclusiva.',
        'Quatro fases do DVI: cena, dados post mortem (PM), dados ante mortem (AM: prontuário, radiografias, digitais, DNA de parentes) e reconciliação (AM x PM).',
        'O prontuário do dentista é dado ANTE MORTEM: odontograma, tratamentos e radiografias bem registrados identificam.',
        'Dentes resistem a calor e decomposição e podem fornecer DNA.'
      ] },
      { t: 'Estimativa de idade e marcas de mordida', i: [
        'Idade dental: estágios de mineralização na radiografia (Demirjian 1973/1976; tabela brasileira de Nicodemo, Moraes e Médici Filho). É ESTIMATIVA, com margem.',
        'Terceiro molar: usado para estimar se a pessoa tem 18 anos ou mais (estágios A a H; estágio G aumenta muito a probabilidade de maioridade).',
        'Marca de mordida: NIST (NISTIR 8352, 07/03/2023) concluiu que a análise não tem base científica suficiente. Saliva da mordida pode dar DNA.'
      ] },
      { t: 'Prontuário e documentos', i: [
        'CEO art. 17: prontuário obrigatório, legível, atualizado, físico ou digital; em ordem cronológica, com data, hora, nome, assinatura e nº do CRO.',
        'CEO art. 9º, X: dever de manter prontuários atualizados, inclusive digitais.',
        'CEO art. 18, I: é infração negar ao paciente acesso ao prontuário ou cópia.',
        'Lei 13.787/2018, art. 6º: guarda mínima de 20 anos a partir do último registro (papel ou digitalizado). Digitalizado com certificado ICP-Brasil tem o mesmo valor do original.',
        'CEO art. 18, III e VII: nada de atestado sem ato que o justifique, nem documento assinado em branco.'
      ] },
      { t: 'Responsabilidade civil', i: [
        'CDC (Lei 8.078/1990) art. 14: o fornecedor de serviços responde independentemente de culpa; §4º: o profissional liberal responde mediante verificação de culpa.',
        'CDC art. 27: 5 anos, contados do conhecimento do dano e de sua autoria.',
        'Código Civil arts. 186 e 927: ato ilícito e dever de reparar (inclusive dano só moral). Art. 951: negligência, imprudência ou imperícia do profissional.',
        'STJ, REsp 2.225.449 (16/07/2026): procedimento estético-funcional com promessa de melhora = obrigação de resultado e culpa presumida (conclusão do tribunal de origem mantida).'
      ] },
      { t: 'Ética, sigilo e publicidade', i: [
        'CEO = Res. CFO-118/2012, em vigor desde 01/01/2013. Alterado pela Res. CFO-271/2025 (18/06/2025), após decisão do CADE de 2023: saiu a proibição de cartão de desconto.',
        'Penas (art. 51): advertência confidencial, censura confidencial, censura pública, suspensão até 30 dias, cassação. Multa de 1 a 25 anuidades (art. 57).',
        'Justa causa para quebrar sigilo (art. 14): notificação compulsória, colaboração com a Justiça, perícia nos exatos limites, defesa de interesse legítimo, revelação ao responsável pelo incapaz.',
        'Art. 11, IV e X: esclarecer propósitos, riscos, custos e alternativas; não iniciar tratamento sem consentimento (exceto urgência/emergência).',
        'Res. CFO-196/2019: selfie e imagens de diagnóstico e conclusão só com TCLE; proibido mostrar o procedimento em andamento (exceto publicação científica) e casos de terceiros.',
        'CEO art. 41: laboratório e técnico em prótese não anunciam ao público; só em revista especializada para dentistas.'
      ] },
      { t: 'Lesões, Lei 5.081 e LGPD', i: [
        'Código Penal art. 129, §1º (grave): incapacidade para ocupações habituais por mais de 30 dias, perigo de vida, debilidade permanente de membro, sentido ou função, aceleração de parto.',
        'Art. 129, §2º (gravíssima, na doutrina): incapacidade permanente para o trabalho, enfermidade incurável, perda ou inutilização de membro, sentido ou função, deformidade permanente, aborto.',
        'CPP art. 168, §2º: exame complementar logo após 30 dias, para classificar o §1º, I.',
        'Lei 5.081/1966, art. 6º: prescrever medicamentos indicados em odontologia (II); atestar, inclusive para justificar falta ao emprego (III, redação da Lei 6.215/1975); medicação de urgência (VIII).',
        'LGPD art. 5º, II: dado de saúde é dado pessoal SENSÍVEL. Art. 11, II, f (redação da Lei 13.853/2019): tutela da saúde por profissional de saúde. Art. 18: confirmação e acesso.'
      ] }
    ],
    q: [
      /* ============ CONCEITO E PERÍCIA ============ */
      { id: 'ol01', tema: 'Conceito e perícia',
        ctx: 'Um juiz trabalhista precisa saber se a perda de dentes de um trabalhador tem relação com um acidente na empresa e nomeia um cirurgião-dentista como perito.',
        p: 'Qual norma dá ao cirurgião-dentista competência para essa perícia?',
        o: ['Lei 5.081/1966, art. 6º, IV: perícia odontolegal em foro civil, criminal, trabalhista e em sede administrativa.',
            'Código de Defesa do Consumidor, art. 14.',
            'LGPD, art. 11.',
            'Nenhuma: perícia é exclusiva do médico-legista.',
            'Lei 13.787/2018, art. 6º.'],
        a: 0,
        w: 'A Lei 5.081/1966 (sem alteração nesse inciso) diz que compete ao cirurgião-dentista proceder à perícia odontolegal nos foros civil, criminal, trabalhista e em sede administrativa. A perícia não é exclusiva do médico.',
        f: L5081 + ', art. 6º, IV' },

      { id: 'ol02', tema: 'Conceito e perícia',
        ctx: 'Na perícia oficial de natureza criminal, a lei lista quem são os peritos.',
        p: 'Segundo a Lei 12.030/2009, art. 5º, são peritos de natureza criminal:',
        o: ['Apenas os peritos criminais.',
            'Peritos criminais e médico-legistas, apenas.',
            'Peritos criminais, peritos médico-legistas e peritos odontolegistas.',
            'Qualquer profissional de saúde nomeado pelo delegado.',
            'Apenas servidores com formação em Direito.'],
        a: 2,
        w: 'O art. 5º da Lei 12.030/2009 inclui expressamente os peritos odontolegistas ao lado dos criminais e dos médico-legistas, com formação superior específica. A lei não sofreu alteração (só o art. 4º foi vetado na origem).',
        f: L12030 + ', art. 5º' },

      { id: 'ol03', tema: 'Conceito e perícia',
        ctx: 'Numa cidade pequena não há perito oficial disponível, e o delegado precisa de um exame odontológico numa vítima de agressão.',
        p: 'O que prevê o CPP para essa situação?',
        o: ['O exame fica dispensado, e a confissão do agressor já basta para o processo.',
            'Duas pessoas idôneas, com diploma de curso superior, fazem o exame.',
            'Uma pessoa qualquer, indicada pela própria vítima, faz o exame sozinha.',
            'Só o médico da família da vítima pode examinar e assinar o laudo.',
            'O exame tem de esperar a chegada de um perito oficial, sem prazo.'],
        a: 1,
        w: 'CPP, art. 159, §1º e §2º (redação da Lei 11.690/2008): na falta de perito oficial, 2 pessoas idôneas, com diploma superior, preferencialmente na área do exame, que prestam compromisso de bem desempenhar o encargo. E o art. 158 diz que a confissão não supre o exame de corpo de delito.',
        f: CPP + ', arts. 158 e 159' },

      { id: 'ol04', tema: 'Conceito e perícia',
        ctx: 'Sobre o exame de corpo de delito no Código de Processo Penal, analise as afirmativas.',
        p: AFP,
        o: ['I, apenas.', 'II, apenas.', 'I e II, apenas.', 'II e III, apenas.', 'I, II e III.'],
        a: 2, fixa: true,
        af: ['Quando a infração deixa vestígios, o exame de corpo de delito é indispensável, e a confissão do acusado não pode supri-lo.',
             'A cadeia de custódia, incluída no CPP pela Lei 13.964/2019, documenta a história do vestígio, do reconhecimento ao descarte.',
             'Os peritos não oficiais estão dispensados de prestar compromisso.'],
        w: 'I verdadeira (art. 158). II verdadeira (art. 158-A, incluído pela Lei 13.964/2019). III falsa: art. 159, §2º, os peritos não oficiais PRESTAM compromisso de bem e fielmente desempenhar o encargo.',
        f: CPP + ', arts. 158, 158-A e 159' },

      { id: 'ol05', tema: 'Conceito e perícia',
        ctx: 'Um odontolegista participa de uma necropsia e precisa examinar a mandíbula da vítima.',
        p: 'O que a Lei 5.081/1966 permite a ele nessa situação?',
        o: ['Nada: necropsia é ato exclusivo do médico.',
            'Somente fotografar a boca, sem tocar no corpo.',
            'Utilizar as vias de acesso do pescoço e da cabeça.',
            'Abrir qualquer cavidade do corpo.',
            'Apenas analisar radiografias feitas pelo médico.'],
        a: 2,
        w: 'Lei 5.081/1966, art. 6º, IX: quando o cirurgião-dentista atua como perito em casos de necropsia, pode utilizar as vias de acesso do pescoço e da cabeça.',
        f: L5081 + ', art. 6º, IX' },

      { id: 'ol06', tema: 'Conceito e perícia',
        ctx: 'Um colega diz que Odontologia Legal "só serve para identificar cadáver".',
        p: 'Qual afirmação corrige melhor essa ideia?',
        o: ['Está certo: a especialidade só trabalha com mortos.',
            'A Odontologia Legal aplica o conhecimento odontológico às questões da Justiça e atua também no vivo: lesões, idade, documentos, ética e responsabilidade profissional.',
            'A Odontologia Legal só cuida de publicidade odontológica.',
            'A Odontologia Legal é a mesma coisa que auditoria de plano de saúde.',
            'A Odontologia Legal só existe na esfera criminal.'],
        a: 1,
        w: 'A especialidade atua com vivos (lesão corporal, estimativa de idade, perícia civil e trabalhista), mortos, ossadas e fragmentos, além de documentação, ética e responsabilidade. A Lei 5.081, art. 6º, IV, prevê perícia nos foros civil, criminal, trabalhista e administrativo.',
        f: 'Conceito da disciplina; base legal: ' + L5081 + ', art. 6º, IV' },

      /* ============ IDENTIFICAÇÃO HUMANA ============ */
      { id: 'ol07', tema: 'Identificação humana',
        ctx: 'Depois de um grande desastre, uma família diz ter reconhecido o parente "só de olhar" e pede a liberação do corpo.',
        p: 'O que diz o protocolo de identificação de vítimas de desastre (DVI) da INTERPOL?',
        o: ['O reconhecimento visual basta quando a família tem certeza.',
            'O reconhecimento visual não é considerado preciso; digitais, registros odontológicos ou DNA costumam ser necessários para a identificação conclusiva.',
            'Só o DNA vale; digitais e dentes foram abandonados.',
            'Tatuagem sozinha fecha qualquer identificação.',
            'A identificação é feita pela roupa e pelos documentos no bolso.'],
        a: 1,
        w: 'A ficha da INTERPOL (2023) diz que raramente é possível identificar uma vítima de grande desastre por reconhecimento visual, que não é considerado preciso, e que digitais, registros dentários ou DNA costumam ser necessários para a identificação conclusiva.',
        f: INTERPOL },

      { id: 'ol08', tema: 'Identificação humana',
        ctx: 'O protocolo DVI (identificação de vítimas de desastre) tem quatro fases: exame da cena, dados post mortem (PM, o que se acha no corpo), dados ante mortem (AM, o que foi registrado em vida) e reconciliação (comparar os dois).',
        p: 'Em qual fase entram o prontuário e as radiografias que o dentista da vítima guardava?',
        o: ['Exame da cena', 'Dados post mortem', 'Dados ante mortem', 'Reconciliação', 'Nenhuma: prontuário não é usado'],
        a: 2,
        w: 'Ante mortem = informação de antes da morte: registros dentários e médicos, digitais e DNA vindos da casa da vítima ou da família. Depois, na reconciliação, especialistas comparam AM com PM.',
        f: INTERPOL },

      { id: 'ol09', tema: 'Identificação humana',
        ctx: 'Um cirurgião-dentista examina um corpo e registra, dente por dente, ausências, restaurações, próteses e implantes num diagrama.',
        p: 'Esse registro gráfico da situação de cada dente se chama:',
        o: ['Odontograma', 'Cefalograma', 'Atestado', 'Laudo de lesão corporal', 'Termo de consentimento'],
        a: 0,
        w: 'O odontograma é o mapa dos dentes, usado tanto no prontuário clínico (dado ante mortem) quanto no exame do corpo (dado post mortem). A identificação compara os dois.',
        f: 'Conceito da disciplina; uso no DVI: ' + INTERPOL },

      { id: 'ol10', tema: 'Identificação humana',
        ctx: 'Um paciente morre num acidente e o corpo não tem digitais aproveitáveis. O dentista dele tem um prontuário completo, com odontograma e radiografias.' + ARCTX,
        p: ARP, o: AR, a: 0, fixa: true, ar: true,
        af: ['O prontuário bem preenchido do dentista pode permitir a identificação desse corpo.',
             'A identificação odontológica compara os registros feitos em vida (ante mortem) com os achados no corpo (post mortem).'],
        w: 'As duas são verdadeiras, e a II explica a I: sem o registro ante mortem não há com o que comparar. Por isso o CEO, art. 9º, X e art. 17, cobra prontuário atualizado e legível.',
        f: INTERPOL + '; ' + CEO + ', arts. 9º, X e 17' },

      { id: 'ol11', tema: 'Identificação humana',
        ctx: 'Analise as afirmativas sobre identificação pelos dentes.',
        p: AFP,
        o: ['I, apenas.', 'II, apenas.', 'I e II, apenas.', 'I e III, apenas.', 'I, II e III.'],
        a: 3, fixa: true,
        af: ['A identificação odontológica depende de haver registro anterior para comparar com o que se encontra no corpo.',
             'Uma única coincidência, como uma restauração no mesmo dente, sempre basta para afirmar a identidade.',
             'Dentes também podem servir como fonte de DNA em corpos muito danificados, carbonizados ou decompostos.'],
        w: 'I verdadeira (AM x PM). II falsa: o laudo pesa o conjunto de coincidências e a ausência de discordância inexplicável; uma coincidência comum sozinha não individualiza. III verdadeira: a revisão de 2022 cita dentes como fonte de DNA em corpos mutilados, decompostos e carbonizados.',
        f: INTERPOL + '; ' + MALIK },

      /* ============ ESTIMATIVA DE IDADE ============ */
      { id: 'ol12', tema: 'Estimativa de idade',
        ctx: 'Um perito precisa estimar a idade de uma criança sem documento. Ele avalia, na panorâmica, o estágio de formação dos dentes permanentes inferiores do lado esquerdo.',
        p: 'Que método é muito usado para isso?',
        o: ['Demirjian, por estágios de mineralização dentária na radiografia', 'Índice de O’Leary', 'Classificação de Kennedy', 'Escala VITA', 'Índice CPO-D'],
        a: 0,
        w: 'Demirjian (versões de 1973, com 7 dentes, e de 1976, com 4 dentes) classifica a mineralização em estágios na radiografia. Um estudo de 2023 aplicou os dois em 1.200 crianças brasileiras de 6 a 15 anos.',
        f: CIDADE },

      { id: 'ol13', tema: 'Estimativa de idade',
        ctx: 'Um rapaz sem documento diz ter 17 anos. A Justiça quer saber se ele é maior de idade.',
        p: 'Qual dente é o mais usado para estimar se alguém já passou dos 18 anos?',
        o: ['Incisivo central', 'Canino', 'Primeiro pré-molar', 'Terceiro molar', 'Primeiro molar decíduo'],
        a: 3,
        w: 'O terceiro molar é o último a completar a formação. Um estudo brasileiro de 2023 (1.087 panorâmicas, 14 a 22,9 anos) mostrou que a probabilidade de ser adulto sobe muito quando ao menos um terceiro molar está no estágio G.',
        f: PINHEIRO },

      { id: 'ol14', tema: 'Estimativa de idade',
        ctx: 'No Brasil, existe uma tabela de cronologia de mineralização dos dentes permanentes feita com brasileiros.',
        p: 'Essa tabela é de:',
        o: ['Nicodemo, Moraes e Médici Filho', 'Kennedy e Applegate', 'Black', 'Angle', 'Greene e Vermillion'],
        a: 0,
        w: 'A tabela de cronologia de mineralização dos dentes permanentes entre brasileiros de Nicodemo, Moraes e Médici Filho é usada inclusive em software de estimativa de idade dental (estudo da UNESP, 2007).',
        f: MORAES },

      { id: 'ol15', tema: 'Estimativa de idade',
        ctx: 'Analise as afirmativas sobre estimativa de idade pelos dentes.',
        p: AFP,
        o: ['I, apenas.', 'II, apenas.', 'I e II, apenas.', 'I e III, apenas.', 'II e III, apenas.'],
        a: 2, fixa: true,
        af: ['A idade dental é uma estimativa, com margem de erro, e não substitui o documento.',
             'Na amostra brasileira do estudo do terceiro molar, os homens tiveram desenvolvimento cerca de meio ano mais cedo que as mulheres.',
             'A idade dental de qualquer pessoa é sempre idêntica à idade cronológica.'],
        w: 'I verdadeira. II verdadeira: o estudo de 2023 achou desenvolvimento cerca de 0,5 ano mais precoce nos homens. III falsa: há variação individual; por isso se fala em probabilidade e intervalo.',
        f: PINHEIRO },

      /* ============ MARCAS DE MORDIDA ============ */
      { id: 'ol16', tema: 'Marcas de mordida',
        ctx: 'Em 2023, o NIST (instituto oficial de padrões dos Estados Unidos) publicou uma revisão dos fundamentos científicos da análise de marcas de mordida.',
        p: 'Qual foi a conclusão central?',
        o: ['A técnica é infalível quando feita por especialista.',
            'A análise forense de marcas de mordida não tem base científica suficiente.',
            'A mordida na pele é mais confiável que o DNA.',
            'A técnica só falha em crianças.',
            'A revisão não chegou a nenhuma conclusão.'],
        a: 1,
        w: 'A revisão NISTIR 8352 (publicada em 07/03/2023, depois de consulta pública iniciada em 2022) concluiu que a análise de marcas de mordida não é sustentada por dados suficientes: suas premissas centrais não foram comprovadas.',
        f: NIST },

      { id: 'ol17', tema: 'Marcas de mordida',
        ctx: 'Numa vítima de agressão há uma marca de mordida no braço.' + ARCTX,
        p: ARP, o: AR, a: 0, fixa: true, ar: true,
        af: ['Hoje, a comparação do formato da mordida com a arcada de um suspeito não deve ser usada para apontar sozinha um único autor.',
             'A revisão do NIST de 2023 concluiu que a análise de marcas de mordida não tem base científica suficiente.'],
        w: 'As duas são verdadeiras e a II justifica a I. O que a marca ainda pode oferecer é material biológico: a saliva pode ser fonte de DNA (revisão de 2022), que foi justamente o que inocentou condenados por mordida.',
        f: NIST + '; ' + MALIK },

      { id: 'ol18', tema: 'Marcas de mordida',
        ctx: 'Antes de fotografar e moldar uma marca de mordida recente, o perito faz um passo que pode ser o mais valioso.',
        p: 'Qual é esse passo, segundo a literatura atual?',
        o: ['Lavar bem a região com álcool',
            'Coletar com swab (haste com algodão estéril, tipo um cotonete) o material da região, pois a saliva pode ser fonte de DNA',
            'Esperar a marca sumir para medir a cicatriz',
            'Pedir ao suspeito que morda isopor e comparar o desenho',
            'Nenhum: marca de mordida não tem utilidade nenhuma'],
        a: 1,
        w: 'A revisão de 2022 lembra que a marca de mordida pode ser fonte de DNA salivar, ligando o agressor à vítima. A comparação do DESENHO é que perdeu confiabilidade (NIST 2023).',
        f: MALIK + '; ' + NIST },

      /* ============ PRONTUÁRIO E DOCUMENTOS ============ */
      { id: 'ol19', tema: 'Prontuário e documentos',
        ctx: 'Uma clínica anota os atendimentos a lápis, sem data nem assinatura, "porque depois passa a limpo".',
        p: 'O que o Código de Ética Odontológica exige no prontuário?',
        o: ['Basta o nome do paciente e o valor cobrado.',
            'Dados clínicos em ordem cronológica, com data, hora, nome, assinatura e número de registro do cirurgião-dentista no CRO, de forma legível e atualizada.',
            'Só o odontograma inicial.',
            'Nada: o prontuário é opcional na clínica particular.',
            'Apenas a assinatura do paciente.'],
        a: 1,
        w: 'CEO, art. 17 e parágrafo único: é obrigatório elaborar e manter prontuário legível e atualizado, em arquivo físico ou digital, com os dados clínicos em ordem cronológica, data, hora, nome, assinatura e número no CRO. O art. 9º, X, põe isso entre os deveres fundamentais.',
        f: CEO + ', arts. 9º, X e 17' },

      { id: 'ol20', tema: 'Prontuário e documentos',
        ctx: 'Um dentista quer descartar prontuários antigos, de pacientes que não voltam há anos.',
        p: 'Pela Lei 13.787/2018, qual o prazo mínimo de guarda do prontuário (em papel ou digitalizado)?',
        o: ['5 anos a partir do primeiro atendimento',
            '10 anos a partir do último registro',
            '20 anos a partir do último registro',
            'Para sempre, sem exceção',
            '2 anos após a alta'],
        a: 2,
        w: 'Lei 13.787/2018, art. 6º: decorrido o prazo mínimo de 20 anos a partir do último registro, os prontuários em papel e os digitalizados podem ser eliminados (ou devolvidos ao paciente, §2º), preservando o sigilo (§3º). A lei não tem alteração posterior.',
        f: L13787 + ', art. 6º' },

      { id: 'ol21', tema: 'Prontuário e documentos',
        ctx: 'Uma paciente vai trocar de dentista e pede cópia do prontuário. O dentista atual se recusa: "o prontuário é meu".',
        p: 'Como o Código de Ética trata essa recusa?',
        o: ['Correta: o prontuário pertence só ao profissional.',
            'Infração ética: negar ao paciente acesso ao prontuário ou deixar de fornecer cópia quando solicitada.',
            'Correta, desde que o tratamento esteja pago.',
            'Só seria infração se a paciente fosse menor de idade.',
            'O dentista deve entregar o original e ficar sem registro.'],
        a: 1,
        w: 'CEO, art. 18, I: é infração negar ao paciente ou periciado acesso ao prontuário, deixar de fornecer cópia quando solicitada e deixar de explicar o necessário, salvo quando isso cause risco ao próprio paciente ou a terceiros. O dentista guarda; a paciente tem direito de acesso e cópia.',
        f: CEO + ', art. 18, I' },

      { id: 'ol22', tema: 'Prontuário e documentos',
        ctx: 'Uma clínica quer digitalizar todos os prontuários em papel. Analise as afirmativas sobre a Lei 13.787/2018.',
        p: AFP,
        o: ['I, apenas.', 'II, apenas.', 'I e II, apenas.', 'I e III, apenas.', 'I, II e III.'],
        a: 3, fixa: true,
        af: ['A digitalização deve garantir integridade, autenticidade e confidencialidade, com certificado digital ICP-Brasil ou outro padrão legalmente aceito.',
             'O original em papel pode ser destruído logo após ser escaneado, sem nenhuma análise prévia.',
             'O documento digitalizado conforme a lei tem o mesmo valor probatório do original.'],
        w: 'I verdadeira (art. 2º). II falsa: a destruição do original depende de análise obrigatória de comissão permanente de revisão (art. 3º). III verdadeira (art. 5º).',
        f: L13787 + ', arts. 2º, 3º e 5º' },

      { id: 'ol23', tema: 'Prontuário e documentos',
        ctx: 'Um amigo pede ao dentista um atestado de 3 dias de afastamento, sem ter feito consulta nenhuma, "só pra justificar a falta".',
        p: 'O que diz o Código de Ética?',
        o: ['Pode, se for amigo próximo.',
            'Pode, desde que o atestado seja de no máximo 1 dia.',
            'É infração expedir atestado sem ter praticado ato profissional que o justifique ou que não corresponda à verdade.',
            'Só é infração se o amigo pagar.',
            'Dentista não pode emitir atestado de afastamento em nenhuma hipótese.'],
        a: 2,
        w: 'CEO, art. 18, III: é infração expedir atestados, declarações, relatórios e laudos sem ato profissional que os justifique, tendenciosos ou falsos. E o art. 18, IV proíbe comercializar atestados. O dentista PODE atestar, inclusive para justificar falta ao emprego (Lei 5.081, art. 6º, III), mas só o que atendeu.',
        f: CEO + ', art. 18, III e IV; ' + L5081 + ', art. 6º, III' },

      { id: 'ol24', tema: 'Prontuário e documentos',
        ctx: 'Para "agilizar", um cirurgião-dentista deixa folhas de receituário já assinadas, em branco, com a secretária.',
        p: 'Essa conduta é:',
        o: ['Permitida, se a secretária for de confiança.',
            'Infração ética: o CEO proíbe assinar em branco receituários, atestados, laudos ou outros documentos odontológicos.',
            'Permitida só para receitas de analgésico.',
            'Problema apenas fiscal, não ético.',
            'Permitida se o carimbo do CRO estiver na folha.'],
        a: 1,
        w: 'CEO, art. 18, VII: é infração receitar, atestar ou emitir laudos de forma secreta ou ilegível, sem identificação e número do CRO, bem como assinar em branco folhas de receituário, atestados, laudos ou outros documentos.',
        f: CEO + ', art. 18, VII' },

      /* ============ RESPONSABILIDADE CIVIL ============ */
      { id: 'ol25', tema: 'Responsabilidade civil',
        ctx: 'Um paciente processa o cirurgião-dentista que o atendeu como profissional autônomo, alegando dano num tratamento.',
        p: 'Pelo CDC, como se apura a responsabilidade PESSOAL desse profissional liberal?',
        o: ['Independentemente de culpa, sempre.',
            'Mediante a verificação de culpa.',
            'Ele nunca responde, porque saúde não é relação de consumo.',
            'Só responde se houver contrato escrito.',
            'Só responde na esfera criminal.'],
        a: 1,
        w: 'CDC, art. 14, §4º (sem alteração): a responsabilidade pessoal dos profissionais liberais é apurada mediante verificação de culpa. O caput do art. 14 (fornecedor de serviços responde independentemente de culpa) é a regra geral; o §4º é a exceção para o profissional liberal.',
        f: CDC + ', art. 14, §4º' },

      { id: 'ol26', tema: 'Responsabilidade civil',
        ctx: 'Uma paciente descobre hoje, por uma radiografia em outro consultório, um dano causado num tratamento feito há anos, e sabe quem o fez.',
        p: 'Pelo CDC, em quanto tempo prescreve a pretensão de reparação por fato do serviço, e a partir de quando?',
        o: ['1 ano, a partir do fim do tratamento',
            '3 anos, a partir do pagamento',
            '5 anos, a partir do conhecimento do dano e de sua autoria',
            '10 anos, a partir do primeiro atendimento',
            '20 anos, a partir do último registro do prontuário'],
        a: 2,
        w: 'CDC, art. 27 (sem alteração): prescreve em 5 anos a pretensão à reparação por fato do produto ou do serviço, contando do conhecimento do dano e de sua autoria. Não confundir com os 20 anos de guarda do prontuário (Lei 13.787).',
        f: CDC + ', art. 27' },

      { id: 'ol27', tema: 'Responsabilidade civil',
        ctx: 'O Código Civil traz uma regra específica para o profissional que, no exercício da atividade, causa dano ao paciente.',
        p: 'Segundo o art. 951, essa indenização vale quando o dano decorre de:',
        o: ['Qualquer resultado diferente do esperado, mesmo sem culpa.',
            'Negligência, imprudência ou imperícia.',
            'Apenas dolo comprovado.',
            'Apenas falta de pagamento.',
            'Apenas falha de equipamento do fabricante.'],
        a: 1,
        w: 'CC, art. 951 (sem alteração): aplica as regras dos arts. 948 a 950 à indenização devida por quem, no exercício de atividade profissional, por negligência, imprudência ou imperícia, causar a morte do paciente, agravar-lhe o mal, causar-lhe lesão ou inabilitá-lo para o trabalho.',
        f: CC + ', arts. 949 e 951' },

      { id: 'ol28', tema: 'Responsabilidade civil',
        ctx: 'Uma clínica odontológica (pessoa jurídica) e o dentista que atendeu são acionados pelo mesmo paciente.' + ARCTX,
        p: ARP, o: AR, a: 2, fixa: true, ar: true,
        af: ['Pelo caput do art. 14 do CDC, o fornecedor de serviços responde pela reparação dos danos independentemente da existência de culpa.',
             'A responsabilidade pessoal do cirurgião-dentista, como profissional liberal, também independe de culpa.'],
        w: 'I verdadeira: é o texto do caput do art. 14. II falsa: o §4º do mesmo artigo diz que a responsabilidade pessoal do profissional liberal é apurada mediante verificação de culpa.',
        f: CDC + ', art. 14, caput e §4º' },

      { id: 'ol29', tema: 'Responsabilidade civil',
        ctx: 'Um paciente não teve prejuízo financeiro, mas sofreu humilhação e dor por um erro de conduta do profissional.',
        p: 'O Código Civil admite indenização nesse caso?',
        o: ['Não: só existe dano se houver prejuízo em dinheiro.',
            'Sim: comete ato ilícito quem viola direito e causa dano a outrem, ainda que exclusivamente moral, e fica obrigado a reparar.',
            'Só se o profissional confessar.',
            'Só se houver lesão corporal gravíssima.',
            'Não: dano moral só existe na Justiça do Trabalho.'],
        a: 1,
        w: 'CC, art. 186: comete ato ilícito quem, por ação ou omissão voluntária, negligência ou imprudência, viola direito e causa dano a outrem, ainda que exclusivamente moral. Art. 927: quem comete ato ilícito fica obrigado a reparar.',
        f: CC + ', arts. 186 e 927' },

      /* ============ CÓDIGO DE ÉTICA ============ */
      { id: 'ol30', tema: 'Código de Ética',
        ctx: 'O Código de Ética Odontológica que vale hoje foi aprovado depois da IV Conferência Nacional de Ética Odontológica.',
        p: 'Qual resolução o aprovou e desde quando está em vigor?',
        o: ['Res. CFO-42/2003, desde 2003',
            'Res. CFO-118/2012, em vigor desde 1º de janeiro de 2013',
            'Res. CFO-196/2019, desde 2019',
            'Lei 5.081/1966, desde 1966',
            'Res. CFO-271/2025, desde 2025'],
        a: 1,
        w: 'A Res. CFO-118, de 11/05/2012, revogou o Código da Res. CFO-42/2003 e aprovou o atual, em vigor a partir de 01/01/2013. Ele já foi alterado (a mais recente, Res. CFO-271/2025), mas continua sendo o Código da 118/2012.',
        f: 'Res. CFO-118/2012, https://sistemas.cfo.org.br/visualizar/atos/RESOLU%C3%87%C3%83O/SEC/2012/118; ' + R271 },

      { id: 'ol31', tema: 'Código de Ética',
        ctx: 'Um cirurgião-dentista é condenado num processo ético.',
        p: 'Qual destas NÃO está entre as penas do art. 51 do Código de Ética Odontológica?',
        o: ['Advertência confidencial, em aviso reservado',
            'Censura pública, em publicação oficial',
            'Suspensão do exercício profissional até 30 dias',
            'Cassação do exercício profissional, ad referendum do Conselho Federal',
            'Prisão de até 6 meses'],
        a: 4,
        w: 'Art. 51 (penas do art. 18 da Lei 4.324/1964): advertência confidencial, censura confidencial, censura pública, suspensão até 30 dias e cassação. Prisão é pena criminal, não ética. O art. 57 ainda permite multa de 1 a 25 anuidades, em dobro na reincidência.',
        f: CEO + ', arts. 51 e 57' },

      { id: 'ol32', tema: 'Código de Ética',
        ctx: 'Um paciente com dor forte procura um dentista num lugar onde não há outro cirurgião-dentista em condições de atender. O dentista se recusa porque "não é dia de consulta".' + ARCTX,
        p: ARP, o: AR, a: 2, fixa: true, ar: true,
        af: ['A recusa configura infração ética.',
             'O Código de Ética obriga o dentista a atender qualquer paciente, em qualquer situação, mesmo havendo outro colega disponível.'],
        w: 'I verdadeira: art. 11, VII, deixar de atender paciente em caso de urgência quando não haja outro cirurgião-dentista em condições de fazê-lo. II falsa: o próprio inciso limita o dever à falta de outro profissional; e o art. 5º, V, permite renunciar ao atendimento em certas condições.',
        f: CEO + ', arts. 5º, V e 11, VII' },

      { id: 'ol33', tema: 'Código de Ética',
        ctx: 'No meio do tratamento, a relação com um paciente fica insustentável e o dentista decide não continuar.',
        p: 'O que o Código de Ética exige para essa renúncia?',
        o: ['Nada: basta não marcar mais consultas.',
            'Comunicar previamente, por escrito, ao paciente ou responsável e fornecer ao colega que o suceder as informações necessárias para continuar o tratamento.',
            'Pedir autorização ao Conselho Regional antes.',
            'Devolver todo o dinheiro e apagar o prontuário.',
            'Renúncia é proibida depois que o tratamento começa.'],
        a: 1,
        w: 'CEO, art. 5º, V: é direito renunciar ao atendimento quando fatos prejudiquem o bom relacionamento, com o dever de comunicar previamente, por escrito, e passar ao sucessor as informações para a continuidade. Sem isso pode configurar abandono (art. 11, VI).',
        f: CEO + ', arts. 5º, V e 11, VI' },

      { id: 'ol34', tema: 'Código de Ética',
        ctx: 'Um paciente insiste num procedimento que o dentista acha inadequado. O dentista faz "porque o paciente pediu e assinou".',
        p: 'Diante do Código de Ética:',
        o: ['O dentista fica isento, porque houve consentimento.',
            'O dentista continua responsável: é dever assumir a responsabilidade pelos atos praticados, ainda que solicitados ou consentidos pelo paciente.',
            'A responsabilidade passa toda para o paciente.',
            'A responsabilidade passa para o Conselho Regional.',
            'Só há problema se o paciente for menor.'],
        a: 1,
        w: 'CEO, art. 9º, XIV: dever de assumir responsabilidade pelos atos praticados, ainda que solicitados ou consentidos pelo paciente ou responsável. E o art. 11, V, veda executar tratamento desnecessário.',
        f: CEO + ', arts. 9º, XIV e 11, V' },

      { id: 'ol35', tema: 'Código de Ética',
        ctx: 'Em 2025 o CFO alterou o Código de Ética para cumprir uma decisão do CADE (Conselho Administrativo de Defesa Econômica) de agosto de 2023.',
        p: 'Qual foi o efeito principal dessa alteração (Res. CFO-271, de 18/06/2025)?',
        o: ['Liberou a divulgação de preços em outdoor.',
            'Tirou do Código as restrições à aceitação de cartões de desconto e ao oferecimento de descontos.',
            'Liberou o telemarketing ativo para oferecer tratamento.',
            'Acabou com a pena de cassação.',
            'Revogou o Código inteiro.'],
        a: 1,
        w: 'A Res. CFO-271/2025 cumpriu a decisão do CADE (processo 08700.002535/2020-91) para suprimir as restrições a cartões de desconto e descontos: mudou os incisos VIII e X do art. 20, revogou o inciso XIII do art. 32 e reescreveu o inciso XIV do art. 44. Continua vedado oferecer serviços como brinde, premiação e sorteio, e o telemarketing ativo e os plaqueteiros.',
        f: R271 },

      { id: 'ol36', tema: 'Código de Ética',
        ctx: 'Analise as afirmativas sobre a Res. CFO-271/2025.',
        p: AFP,
        o: ['I, apenas.', 'II, apenas.', 'I e II, apenas.', 'II e III, apenas.', 'I, II e III.'],
        a: 2, fixa: true,
        af: ['Ela revogou o inciso XIII do art. 32 do Código de Ética Odontológica.',
             'Mesmo depois dela, continua infração oferecer serviços com fim de aliciar pacientes por telemarketing ativo, caixas de som em veículos e plaqueteiros.',
             'Depois dela, continua infração ética o dentista participar de cartão de desconto.'],
        w: 'I verdadeira (art. 3º da resolução). II verdadeira: é a nova redação do art. 44, XIV. III falsa: a resolução existiu justamente para tirar a menção a cartão de desconto do art. 20, X e do art. 44, XIV.',
        f: R271 },

      /* ============ SIGILO E CONSENTIMENTO ============ */
      { id: 'ol37', tema: 'Sigilo e consentimento',
        ctx: 'O Código de Ética lista situações de "justa causa" em que revelar fato sigiloso não é infração.',
        p: 'Qual destas NÃO está na lista do parágrafo único do art. 14?',
        o: ['Notificação compulsória de doença',
            'Colaboração com a Justiça nos casos previstos em lei',
            'Perícia odontológica nos seus exatos limites',
            'Revelação de fato sigiloso ao responsável pelo incapaz',
            'Comentar o caso com amigos, sem citar o nome, para pedir opinião'],
        a: 4,
        w: 'Art. 14, parágrafo único: notificação compulsória, colaboração com a Justiça, perícia nos exatos limites, estrita defesa de interesse legítimo e revelação ao responsável pelo incapaz. Conversa com amigos não é justa causa; e o art. 14, III, ainda proíbe referir casos clínicos identificáveis.',
        f: CEO + ', art. 14' },

      { id: 'ol38', tema: 'Sigilo e consentimento',
        ctx: 'Um paciente não pagou o tratamento e o dentista entrou com cobrança judicial, descrevendo o que foi feito.' + ARCTX,
        p: ARP, o: AR, a: 2, fixa: true, ar: true,
        af: ['Descrever o tratamento feito, na cobrança judicial dos honorários, não é quebra de sigilo profissional.',
             'Isso acontece porque o sigilo profissional acaba quando o tratamento termina.'],
        w: 'I verdadeira: art. 15 do CEO. II falsa: o sigilo não termina com o tratamento; o art. 15 é uma exceção específica, e o dever de sigilo continua (art. 9º, VIII; art. 14).',
        f: CEO + ', arts. 9º, VIII, 14 e 15' },

      { id: 'ol39', tema: 'Sigilo e consentimento',
        ctx: 'Um dentista começa uma exodontia sem explicar riscos e alternativas, porque "o paciente não ia entender mesmo". Não era urgência.',
        p: 'Quais incisos do art. 11 do Código de Ética ele fere?',
        o: ['Nenhum: explicar é opcional.',
            'Deixar de esclarecer propósitos, riscos, custos e alternativas (IV) e iniciar tratamento sem consentimento prévio fora de urgência ou emergência (X).',
            'Apenas o de publicidade.',
            'Apenas o de honorários.',
            'Só fere se o paciente reclamar no Conselho.'],
        a: 1,
        w: 'CEO, art. 11, IV: deixar de esclarecer adequadamente propósitos, riscos, custos e alternativas. Art. 11, X: iniciar procedimento sem consentimento prévio do paciente ou responsável, exceto em urgência ou emergência.',
        f: CEO + ', art. 11, IV e X' },

      { id: 'ol40', tema: 'Sigilo e consentimento',
        ctx: 'Um professor quer mostrar em aula o caso de um paciente, com fotos do rosto.',
        p: 'O que o Código de Ética permite?',
        o: ['Pode mostrar livremente, porque é aula.',
            'Pode, no exercício da docência ou em publicação científica, com autorização do paciente ou responsável.',
            'Nunca pode mostrar imagem de paciente, nem em aula.',
            'Pode, desde que poste também nas redes sociais.',
            'Pode, se o paciente já tiver terminado o tratamento.'],
        a: 1,
        w: 'CEO, art. 14, III: é infração referir casos clínicos identificáveis ou exibir o paciente ou sua imagem, salvo na docência ou em publicação científica, com autorização do paciente ou responsável, para fins didático-acadêmicos.',
        f: CEO + ', art. 14, III' },

      /* ============ PUBLICIDADE ============ */
      { id: 'ol41', tema: 'Publicidade',
        ctx: 'Uma clínica (pessoa jurídica) prepara um anúncio.',
        p: 'O que é OBRIGATÓRIO constar, segundo o art. 43 do Código de Ética?',
        o: ['Preço da consulta.',
            'Nome e número de inscrição da pessoa jurídica, nome representativo da profissão e nome e número de inscrição do responsável técnico.',
            'Foto de antes e depois.',
            'Lista de convênios aceitos.',
            'Depoimento de pacientes.'],
        a: 1,
        w: 'Art. 43: na divulgação é obrigatório o nome e o número de inscrição da pessoa física ou jurídica e o nome da profissão; no caso de pessoa jurídica, também nome e inscrição do responsável técnico. Convênios PODEM constar (§1º, IV), mas não são obrigatórios.',
        f: CEO + ', art. 43' },

      { id: 'ol42', tema: 'Publicidade',
        ctx: 'Uma dentista quer postar uma selfie com uma paciente no dia da entrega das facetas.',
        p: 'O que a Res. CFO-196/2019 exige?',
        o: ['Nada: selfie é livre.',
            'Autorização prévia da paciente ou do representante legal, por Termo de Consentimento Livre e Esclarecido (TCLE), e sem mostrar equipamentos, instrumentais, materiais ou tecidos biológicos.',
            'Autorização do Conselho Regional para cada foto.',
            'Que a paciente pague a publicação.',
            'Que a foto seja em preto e branco.'],
        a: 1,
        w: 'Res. CFO-196/2019, art. 1º e §1º: selfie autorizada com TCLE prévio; proibidas imagens que identifiquem equipamentos, instrumentais, materiais e tecidos biológicos. Toda publicação leva nome e número de inscrição do profissional (art. 4º).',
        f: R196 + ', arts. 1º e 4º' },

      { id: 'ol43', tema: 'Publicidade',
        ctx: 'Analise as afirmativas sobre a Res. CFO-196/2019.',
        p: AFP,
        o: ['I, apenas.', 'II, apenas.', 'I e II, apenas.', 'I e III, apenas.', 'I, II e III.'],
        a: 3, fixa: true,
        af: ['Imagens do diagnóstico e da conclusão do tratamento podem ser divulgadas pelo cirurgião-dentista que fez o procedimento, com TCLE prévio.',
             'O dentista pode divulgar um vídeo mostrando o procedimento em andamento, desde que o paciente autorize.',
             'É vedado divulgar casos clínicos de autoria de terceiros.'],
        w: 'I verdadeira (art. 2º). II falsa: o art. 3º proíbe expressamente vídeos e imagens do transcurso ou da realização do procedimento, exceto em publicações científicas. III verdadeira (art. 4º). E o art. 2º, §1º, continua proibindo sensacionalismo, autopromoção e promessa de resultado.',
        f: R196 + ', arts. 2º a 4º' },

      { id: 'ol44', tema: 'Publicidade',
        ctx: 'Um laboratório de prótese dentária quer impulsionar no Instagram um anúncio para o público em geral: "Prótese sem precisar de dentista".',
        p: 'O que diz o Código de Ética Odontológica?',
        o: ['Pode, se o laboratório tiver CNPJ.',
            'É vedado a laboratórios e técnicos em prótese anunciar ao público em geral; propaganda só em meios especializados dirigidos a cirurgiões-dentistas, com responsável técnico e inscrição no CRO.',
            'Pode, desde que não mostre preço.',
            'Pode, se o anúncio for só no WhatsApp.',
            'O Código de Ética não vale para laboratórios.'],
        a: 1,
        w: 'CEO, art. 41, §1º e §2º: laboratórios de prótese, técnicos em prótese, técnicos em saúde bucal e auxiliares de prótese não podem anunciar ao público em geral; podem anunciar em revistas, jornais ou folhetos especializados dirigidos aos dentistas, com nome, responsável técnico e inscrição no CRO. O §3º ainda manda afixar no laboratório o aviso da restrição ao atendimento direto ao paciente. O art. 1º do CEO alcança técnicos e pessoas jurídicas.',
        f: CEO + ', arts. 1º e 41' },

      { id: 'ol45', tema: 'Publicidade',
        ctx: 'Uma franquia anuncia: "Dentista POPULAR, implante a partir de R$ 99,00". O responsável técnico diz que "quem fez o anúncio foi o dono".' + ARCTX,
        p: ARP, o: AR, a: 1, fixa: true, ar: true,
        af: ['O uso da expressão "popular" para atrair clientela é infração ética expressamente citada no Código.',
             'Pela publicidade em desacordo com o Código respondem solidariamente os proprietários, o responsável técnico e os demais profissionais que concorreram para a infração, na medida da culpa de cada um.'],
        w: 'As duas são verdadeiras (art. 44, VII; art. 45), mas uma não explica a outra: a I diz o que é proibido; a II diz quem responde. O art. 44, I também veda propaganda com preços e modalidades de pagamento.',
        f: CEO + ', arts. 44, I e VII, e 45' },

      /* ============ LESÕES CORPORAIS ============ */
      { id: 'ol46', tema: 'Lesões corporais',
        ctx: 'Após uma agressão com fratura de mandíbula, a vítima ficou 45 dias sem poder trabalhar nem fazer as atividades do dia a dia, e se recuperou totalmente.',
        p: 'Pelo art. 129 do Código Penal, essa lesão se enquadra em:',
        o: ['Lesão leve (caput)',
            'Lesão grave (§1º, I): incapacidade para as ocupações habituais por mais de 30 dias',
            'Lesão gravíssima (§2º, I): incapacidade permanente para o trabalho',
            'Lesão seguida de morte (§3º)',
            'Não é lesão, porque a vítima se recuperou'],
        a: 1,
        w: 'CP, art. 129, §1º, I: incapacidade para as ocupações habituais por mais de 30 dias. Como a recuperação foi total, não há incapacidade permanente (§2º). Os §§1º e 2º estão com a redação original, sem alteração (as leis de 2004 a 2026 mexeram em outros parágrafos).',
        f: CP + ', art. 129, §1º' },

      { id: 'ol47', tema: 'Lesões corporais',
        ctx: 'Para classificar uma lesão pela incapacidade de mais de 30 dias, o perito não pode decidir no primeiro dia.',
        p: 'O que prevê o CPP?',
        o: ['O primeiro exame já classifica, sem complemento.',
            'Exame complementar feito logo que decorra o prazo de 30 dias, contado da data do crime.',
            'Exame complementar só depois de 1 ano.',
            'A classificação é feita pelo próprio agressor.',
            'Exame complementar só a pedido do agressor.'],
        a: 1,
        w: 'CPP, art. 168, §2º: se o exame tiver por fim precisar a classificação do art. 129, §1º, I, do CP, deverá ser feito logo que decorra o prazo de 30 dias da data do crime. O caput permite exame complementar a pedido da autoridade, do MP, do ofendido, do acusado ou do defensor.',
        f: CPP + ', art. 168' },

      { id: 'ol48', tema: 'Lesões corporais',
        ctx: 'Analise as afirmativas sobre o art. 129 do Código Penal.',
        p: AFP,
        o: ['I, apenas.', 'II, apenas.', 'I e II, apenas.', 'II e III, apenas.', 'I, II e III.'],
        a: 2, fixa: true,
        af: ['Perigo de vida está no §1º (lesão grave).',
             'Perda ou inutilização de membro, sentido ou função está no §2º.',
             'Debilidade permanente de membro, sentido ou função está no §2º.'],
        w: 'I verdadeira (§1º, II). II verdadeira (§2º, III). III falsa: DEBILIDADE permanente é §1º, III (grave); PERDA ou INUTILIZAÇÃO é §2º, III. A diferença entre "debilidade" e "perda" é das mais cobradas.',
        f: CP + ', art. 129, §§1º e 2º' },

      { id: 'ol49', tema: 'Lesões corporais',
        ctx: 'Uma agressão deixou cicatriz extensa e permanente no rosto da vítima.',
        p: 'Qual hipótese do art. 129 o perito deve avaliar?',
        o: ['Aceleração de parto (§1º, IV)',
            'Deformidade permanente (§2º, IV)',
            'Perigo de vida (§1º, II)',
            'Enfermidade incurável (§2º, II), sempre',
            'Nenhuma: cicatriz não conta como lesão'],
        a: 1,
        w: 'CP, art. 129, §2º, IV: deformidade permanente (pena de reclusão de 2 a 8 anos). O laudo descreve a lesão e sua permanência; a classificação final é do juiz.',
        f: CP + ', art. 129, §2º' },

      /* ============ LEI 5.081 E PRESCRIÇÃO ============ */
      { id: 'ol50', tema: 'Lei 5.081 e prescrição',
        ctx: 'Um paciente pergunta se o dentista pode receitar um antibiótico para uma infecção dentária.',
        p: 'O que diz a Lei 5.081/1966?',
        o: ['Não: só o médico prescreve medicamento.',
            'Sim: compete ao cirurgião-dentista prescrever e aplicar especialidades farmacêuticas de uso interno e externo, indicadas em Odontologia.',
            'Só remédio de uso externo, como pomada.',
            'Só com autorização escrita de um médico.',
            'Só em hospital.'],
        a: 1,
        w: 'Lei 5.081/1966, art. 6º, II: prescrever e aplicar especialidades farmacêuticas de uso interno e externo, indicadas em Odontologia. O limite é a indicação odontológica.',
        f: L5081 + ', art. 6º, II' },

      { id: 'ol51', tema: 'Lei 5.081 e prescrição',
        ctx: 'Depois de uma exodontia de terceiro molar, o paciente precisa faltar ao trabalho por 2 dias e o RH questiona o atestado do dentista.',
        p: 'O atestado do dentista vale para justificar a falta?',
        o: ['Não: só atestado médico abona falta.',
            'Sim: a Lei 5.081/1966, art. 6º, III, com redação da Lei 6.215/1975, permite atestar estados mórbidos e outros, inclusive para justificação de faltas ao emprego.',
            'Só se tiver o carimbo do sindicato.',
            'Só para servidor público.',
            'Só se for de 1 dia.'],
        a: 1,
        w: 'A redação atual do art. 6º, III, dada pela Lei 6.215/1975, acrescentou "inclusive, para justificação de faltas ao emprego". O atestado tem de corresponder a ato realmente praticado (CEO, art. 18, III).',
        f: L5081 + ', art. 6º, III; ' + CEO + ', art. 18, III' },

      { id: 'ol52', tema: 'Lei 5.081 e prescrição',
        ctx: 'Durante um atendimento, o paciente tem uma reação grave que põe a vida em risco.',
        p: 'A Lei 5.081/1966 permite ao cirurgião-dentista:',
        o: ['Apenas chamar a ambulância e não fazer nada.',
            'Prescrever e aplicar medicação de urgência no caso de acidentes graves que comprometam a vida e a saúde do paciente.',
            'Somente aplicar anestesia local.',
            'Somente encaminhar por escrito.',
            'Nada: emergência médica é só do médico.'],
        a: 1,
        w: 'Lei 5.081/1966, art. 6º, VIII: prescrever e aplicar medicação de urgência em caso de acidentes graves que comprometam a vida e a saúde do paciente.',
        f: L5081 + ', art. 6º, VIII' },

      { id: 'ol53', tema: 'Lei 5.081 e prescrição',
        ctx: 'Analise as afirmativas sobre a Lei 5.081/1966.',
        p: AFP,
        o: ['I, apenas.', 'II, apenas.', 'I e II, apenas.', 'I e III, apenas.', 'I, II e III.'],
        a: 2, fixa: true,
        af: ['O art. 6º, V, permite ao cirurgião-dentista aplicar anestesia local e troncular.',
             'O art. 7º veda ao cirurgião-dentista exercer mais de duas especialidades.',
             'O art. 6º proíbe ao cirurgião-dentista manter laboratório de prótese anexo ao consultório.'],
        w: 'I verdadeira (art. 6º, V). II verdadeira (art. 7º, c). III falsa: o art. 6º, VII, PERMITE manter, anexo ao consultório, laboratório de prótese, aparelhagem e instalações para pesquisas e análises, além de aparelhos de raios X. A única alteração da lei foi no art. 6º, III (Lei 6.215/1975).',
        f: L5081 + ', arts. 6º e 7º' },

      /* ============ LGPD ============ */
      { id: 'ol54', tema: 'LGPD',
        ctx: 'O prontuário guarda diagnóstico, radiografias e histórico de doenças do paciente.',
        p: 'Para a LGPD, esse tipo de informação é:',
        o: ['Dado público, que pode ser divulgado.',
            'Dado anonimizado, sempre.',
            'Dado pessoal sensível, por ser dado referente à saúde.',
            'Dado sem proteção legal.',
            'Dado de interesse exclusivo do dentista.'],
        a: 2,
        w: 'LGPD, art. 5º, II: dado pessoal sensível inclui dado referente à saúde ou à vida sexual e dado genético ou biométrico, quando vinculado a uma pessoa natural. A Lei 13.787/2018, art. 1º, manda aplicar a LGPD ao prontuário digital.',
        f: LGPD + ', art. 5º, II; ' + L13787 + ', art. 1º' },

      { id: 'ol55', tema: 'LGPD',
        ctx: 'Uma clínica trata os dados de saúde dos pacientes para fazer o atendimento.',
        p: 'Qual hipótese do art. 11 da LGPD cobre esse uso, sem depender de um consentimento separado?',
        o: ['Marketing da clínica',
            'Tutela da saúde, exclusivamente, em procedimento realizado por profissionais de saúde, serviços de saúde ou autoridade sanitária',
            'Venda de dados a parceiros',
            'Interesse comercial do dentista',
            'Nenhuma: dado sensível nunca pode ser tratado'],
        a: 1,
        w: 'LGPD, art. 11, II, f (redação da Lei 13.853/2019): tutela da saúde, exclusivamente, em procedimento realizado por profissionais de saúde, serviços de saúde ou autoridade sanitária. Usar o mesmo dado para marketing já não está nessa hipótese.',
        f: LGPD + ', art. 11, II, f' },

      { id: 'ol56', tema: 'LGPD',
        ctx: 'Um paciente pede à clínica para saber se ela guarda dados dele e quer ver esses dados.' + ARCTX,
        p: ARP, o: AR, a: 1, fixa: true, ar: true,
        af: ['Pela LGPD, o titular tem direito à confirmação da existência de tratamento e ao acesso aos dados.',
             'Pelo Código de Ética Odontológica, é infração negar ao paciente acesso ao prontuário ou deixar de fornecer cópia quando solicitada.'],
        w: 'As duas são verdadeiras (LGPD, art. 18, I e II; CEO, art. 18, I), mas uma não justifica a outra: são normas diferentes, uma de proteção de dados e outra de ética profissional, que apontam na mesma direção.',
        f: LGPD + ', art. 18; ' + CEO + ', art. 18, I' },

      /* ============ CASOS REAIS ============ */
      // Caso 1: voo 2283 (Vinhedo, 09/08/2024)
      { id: 'ol57', tema: 'Casos reais',
        ctx: 'Em 9 de agosto de 2024, o avião do voo 2283 caiu em Vinhedo (SP), com 62 mortos. Em 15/08/2024, o IML Central de São Paulo, com o Instituto de Identificação, informou que concluiu a identificação de todas as vítimas.',
        p: 'Segundo a notícia, quais métodos foram usados?',
        o: ['Só reconhecimento visual pelas famílias',
            'Impressões digitais, análise da arcada dentária e comparações com radiografias e fotos',
            'Só exame de DNA em todas as vítimas',
            'Só documentos encontrados nos bolsos',
            'Só tatuagens e roupas'],
        a: 1,
        w: 'A notícia lista reconhecimento de digitais, análise de arcada dentária e comparações com radiografias e fotos, e diz que nenhum corpo precisou de DNA. Odontologia e digitais estão entre os identificadores primários da INTERPOL.',
        f: VOEPASS },

      { id: 'ol58', tema: 'Casos reais',
        ctx: 'Sobre a identificação das vítimas do voo 2283 (Vinhedo, 2024).' + ARCTX,
        p: ARP, o: AR, a: 1, fixa: true, ar: true,
        af: ['A análise da arcada dentária foi um dos métodos usados pelo IML para identificar as vítimas.',
             'Segundo a notícia de 15/08/2024, nenhum dos corpos precisou ser identificado por exame de DNA.'],
        w: 'As duas são verdadeiras, mas a II não explica a I: dispensar o DNA foi resultado de os métodos primários (digitais e arcada) terem bastado, não a razão de se usar a arcada.',
        f: VOEPASS },

      { id: 'ol59', tema: 'Casos reais',
        ctx: 'Num acidente como o do voo 2283, um corpo chega sem polpas digitais aproveitáveis, mas com a boca preservada e restaurações visíveis.',
        p: 'Pelo protocolo da INTERPOL, qual outro identificador primário o perito pode usar logo, comparando com o prontuário do dentista da vítima?',
        o: ['Reconhecimento visual por um parente',
            'Comparação odontológica (registros feitos em vida x achados no corpo)',
            'A cor da roupa',
            'O relato de testemunhas',
            'Nenhum: só resta esperar o DNA'],
        a: 1,
        w: 'Os exames post mortem da INTERPOL incluem digitais, odontologia e DNA; o reconhecimento visual não é considerado preciso. Com prontuário e radiografias ante mortem, a comparação odontológica pode identificar sem esperar o DNA.',
        f: INTERPOL + '; ' + VOEPASS },

      // Caso 2: Brumadinho (25/01/2019)
      { id: 'ol60', tema: 'Casos reais',
        ctx: 'No rompimento da barragem da mina Córrego do Feijão, em Brumadinho (MG), em 25/01/2019, o governo de Minas informou em 24/01/2023 que 267 vítimas tinham sido identificadas.',
        p: 'Quantas foram identificadas pela Odontologia Legal, segundo esse balanço?',
        o: ['2', '32', '50', '183', 'Nenhuma'],
        a: 1,
        w: 'Balanço de 24/01/2023: papiloscopia 183, DNA 50, Odontologia Legal 32, antropologia forense 2 (total 267). Os números mudam com o tempo; esta é a fonte oficial com data.',
        f: BRUMA },

      { id: 'ol61', tema: 'Casos reais',
        ctx: 'Sobre o balanço de identificação de Brumadinho de 24/01/2023 (papiloscopia 183, DNA 50, Odontologia Legal 32, antropologia forense 2). Analise as afirmativas.',
        p: AFP,
        o: ['I, apenas.', 'II, apenas.', 'I e II, apenas.', 'I e III, apenas.', 'I, II e III.'],
        a: 3, fixa: true,
        af: ['A papiloscopia (impressões digitais) foi o método que mais identificou vítimas.',
             'A Odontologia Legal identificou mais vítimas que o DNA.',
             'Mais de 10 % das identificações foram feitas pela Odontologia Legal.'],
        w: 'I verdadeira (183 de 267). II falsa: DNA 50 x Odontologia 32. III verdadeira: 32 de 267 = cerca de 12 %.',
        f: BRUMA },

      { id: 'ol62', tema: 'Casos reais',
        ctx: 'Em tragédias como Brumadinho, peritos procuram o dentista das vítimas para pedir prontuário e radiografias. Um dentista fica em dúvida se pode entregar sem violar o sigilo.',
        p: 'O que diz o Código de Ética Odontológica?',
        o: ['Não pode entregar em hipótese nenhuma.',
            'Pode: colaboração com a Justiça nos casos previstos em lei e perícia nos seus exatos limites são justa causa.',
            'Só pode se a família pagar uma taxa.',
            'Só pode entregar o original e destruir a cópia.',
            'Pode publicar o caso nas redes para ajudar.'],
        a: 1,
        w: 'CEO, art. 14, parágrafo único, II e III: colaboração com a Justiça e perícia nos exatos limites são justa causa. E isso só funciona se o prontuário existir e estiver atualizado (arts. 9º, X e 17). Publicar o caso nas redes continua proibido (art. 14, III).',
        f: CEO + ', arts. 9º, X, 14 e 17; ' + BRUMA },

      // Caso 3: Petrópolis (15/02/2022)
      { id: 'ol63', tema: 'Casos reais',
        ctx: 'Na tragédia das chuvas de fevereiro de 2022 em Petrópolis (RJ), o MPRJ informou (20/02/2022) que o IML de Petrópolis adotaria métodos técnicos da INTERPOL.',
        p: 'Segundo a notícia, qual era a ordem descrita?',
        o: ['DNA primeiro; depois reconhecimento visual',
            'Avaliação médico-legal (cor dos olhos, estatura, tom de pele, tatuagens), depois impressões digitais e, por fim, avaliação odontológica e genética forense',
            'Só documentos de identidade',
            'Avaliação odontológica primeiro e nada mais',
            'Reconhecimento por fotos nas redes sociais'],
        a: 1,
        w: 'A notícia descreve: avaliação médico-legal do corpo, depois as digitais (etapa mais decisiva no protocolo, com alta taxa de sucesso) e, por fim, avaliação odontológica e genética forense, com cruzamento num banco nacional de pessoas não identificadas.',
        f: PETRO },

      { id: 'ol64', tema: 'Casos reais',
        ctx: 'Sobre a identificação de vítimas na tragédia de Petrópolis (2022) e o protocolo da INTERPOL.' + ARCTX,
        p: ARP, o: AR, a: 3, fixa: true, ar: true,
        af: ['Para a INTERPOL, o reconhecimento visual do corpo pela família, sozinho, é considerado um método preciso.',
             'A INTERPOL lista impressões digitais, odontologia e perfil de DNA entre os exames post mortem usados para identificar.'],
        w: 'I falsa: a ficha da INTERPOL diz que a identificação visual não é considerada precisa. II verdadeira. Em Petrópolis, a avaliação odontológica fazia parte do protocolo descrito pelo MPRJ.',
        f: INTERPOL + '; ' + PETRO },

      // Caso 4: condenação por marca de mordida revista por DNA (Arizona)
      { id: 'ol65', tema: 'Casos reais',
        ctx: 'Em Phoenix (Arizona, EUA), um homem foi condenado à morte por um homicídio de 1991. Peritos da acusação disseram que a mordida no corpo da vítima coincidia com uma impressão dos dentes dele feita em isopor.',
        p: 'O que mudou o caso em 2002?',
        o: ['Uma nova comparação da mordida, feita por outro dentista',
            'O DNA da saliva e do sangue encontrados na vítima, que o excluiu e apontou outro homem',
            'A confissão de uma testemunha',
            'Uma radiografia panorâmica do acusado',
            'Nada: ele cumpriu a pena toda'],
        a: 1,
        w: 'Segundo o Innocence Project, em 2002 testes de DNA na saliva e no sangue da vítima o excluíram e apontaram outro homem. Ele foi solto em 08/04/2002, depois de mais de 10 anos preso, e foi o 100º ex-condenado à morte nos EUA libertado por inocência desde 1976.',
        f: KRONE },

      { id: 'ol66', tema: 'Casos reais',
        ctx: 'Sobre o caso do Arizona em que um homem condenado com base em marca de mordida foi inocentado em 2002. Analise as afirmativas.',
        p: AFP,
        o: ['I, apenas.', 'II, apenas.', 'I e II, apenas.', 'II e III, apenas.', 'I, II e III.'],
        a: 2, fixa: true,
        af: ['A condenação se apoiou em grande parte na comparação da marca de mordida com a arcada do acusado.',
             'A mesma mordida que serviu para condenar acabou ajudando a inocentar, porque saliva pode conter DNA.',
             'Depois desse caso, a comparação do desenho da mordida passou a ser considerada prova definitiva pelos órgãos científicos.'],
        w: 'I e II verdadeiras (DNA da saliva e do sangue da vítima). III falsa: foi o contrário; em 2023 a revisão do NIST concluiu que a análise de marcas de mordida não tem base científica suficiente.',
        f: KRONE + '; ' + NIST },

      // Caso 5: ossada de Embu (1985) e DNA (1992)
      { id: 'ol67', tema: 'Casos reais',
        ctx: 'Em 1985, uma ossada foi exumada num cemitério de Embu (SP), suspeita de ser de um criminoso de guerra nazista que viveu escondido no Brasil.',
        p: 'Segundo o artigo de 1985 sobre a identificação, como ela foi feita?',
        o: ['Só por um médico, sozinho, em um dia',
            'Processamento inicial no Instituto Médico-Legal de São Paulo, com antropólogos e dentistas, e depois uma equipe internacional junto com cientistas brasileiros',
            'Só por fotografia',
            'Só pelo depoimento de vizinhos',
            'Por DNA, já em 1985'],
        a: 1,
        w: 'O artigo de 1985 relata o processamento inicial no IML de São Paulo, com policiais, antropólogos e dentistas, e a equipe internacional (Alemanha Ocidental, EUA, Centro Simon Wiesenthal) junto com brasileiros, chegando à identificação com certeza científica razoável. O DNA só veio em 1992.',
        f: MENG85 },

      { id: 'ol68', tema: 'Casos reais',
        ctx: 'A ossada de Embu (1985) foi identificada por antropologia e odontologia, mas houve controvérsia. Em 1992, saiu a análise de DNA.' + ARCTX,
        p: ARP, o: AR, a: 2, fixa: true, ar: true,
        af: ['Em 1992, o DNA extraído do fêmur, comparado com o do filho e o da esposa, deu evidência independente muito forte de que a ossada era mesmo a do suspeito.',
             'Isso aconteceu porque a identificação de 1985 tinha sido declarada errada e anulada.'],
        w: 'I verdadeira: o estudo de 1992 achou genótipo do fêmur, em 10 locos, compatível com a paternidade do filho. II falsa: a identificação de 1985 não foi anulada; o DNA veio como prova INDEPENDENTE para encerrar a controvérsia e confirmou o resultado.',
        f: MENG92 + '; ' + MENG85 },

      { id: 'ol69', tema: 'Casos reais',
        ctx: 'O caso da ossada de Embu é usado até hoje para ensinar identificação humana.',
        p: 'Qual lição ele dá para a Odontologia Legal?',
        o: ['Um método sozinho sempre basta.',
            'A identificação ganha força quando métodos diferentes (antropologia, odontologia e, depois, DNA) chegam ao mesmo resultado.',
            'O DNA tornou os dentes inúteis.',
            'Ossada antiga não pode ser identificada.',
            'Só serve identificação feita no mesmo ano da morte.'],
        a: 1,
        w: 'Em 1985 a identificação veio de antropologia e odontologia com cooperação internacional; em 1992 o DNA confirmou de forma independente. Métodos que convergem dão mais segurança, a mesma lógica do protocolo da INTERPOL.',
        f: MENG85 + '; ' + MENG92 },

      // Caso 6: STJ, REsp 2.225.449 (16/07/2026)
      { id: 'ol70', tema: 'Casos reais',
        ctx: 'Em julho de 2026, o STJ julgou o caso de um paciente que fez cirurgia ortognática, ficou com assimetria facial e processou os dois cirurgiões-dentistas. O tribunal do Rio (TJRJ), com base no laudo pericial e nos documentos do tratamento (inclusive a promessa de melhora estética), entendeu que a cirurgia era estético-funcional.',
        p: 'Que consequência o TJRJ tirou disso, mantida pelo STJ?',
        o: ['Obrigação de meio, com o paciente provando a culpa',
            'Obrigação de resultado, com culpa presumida: cabe ao profissional provar uma causa que afaste a responsabilidade',
            'Ausência total de responsabilidade',
            'Responsabilidade só do hospital',
            'Responsabilidade só criminal'],
        a: 1,
        w: 'Notícia do STJ de 16/07/2026 (REsp 2.225.449, Terceira Turma, relatora min. Nancy Andrighi): o TJRJ aplicou obrigação de resultado com culpa presumida; o STJ não reexaminou essa conclusão porque exigiria rever provas, especialmente o laudo (Súmula 7).',
        f: STJ },

      { id: 'ol71', tema: 'Casos reais',
        ctx: 'No mesmo caso (REsp 2.225.449, 2026), o TJRJ condenou os dentistas a devolver o valor pago, a custear uma nova cirurgia reparadora e a pagar danos morais e estéticos.',
        p: 'O que o STJ mudou?',
        o: ['Absolveu os dois dentistas de tudo.',
            'Afastou só a obrigação de custear a nova cirurgia, porque o paciente já tinha escolhido a resolução do contrato com devolução do valor; cobrar as duas coisas seria enriquecimento sem causa.',
            'Aumentou os danos morais.',
            'Mandou fazer nova perícia.',
            'Tirou a devolução do valor e manteve a nova cirurgia.'],
        a: 1,
        w: 'O STJ deu provimento parcial: quem opta pela resolução do contrato com restituição do que pagou não pode exigir também o custeio de outra cirurgia por terceiro (enriquecimento sem causa, CC art. 884; escolha entre cumprimento e resolução, CC art. 475). O resto ficou como o TJRJ decidiu.',
        f: STJ + '; ' + CC + ', art. 884' },

      { id: 'ol72', tema: 'Casos reais',
        ctx: 'Sobre o REsp 2.225.449 (STJ, 16/07/2026). Analise as afirmativas.',
        p: AFP,
        o: ['I, apenas.', 'II, apenas.', 'I e II, apenas.', 'I e III, apenas.', 'I, II e III.'],
        a: 2, fixa: true,
        af: ['A responsabilidade solidária dos dois cirurgiões-dentistas foi mantida.',
             'O STJ não reexaminou o laudo pericial, porque recurso especial não serve para rever provas (Súmula 7).',
             'O STJ fixou que todo procedimento odontológico é obrigação de resultado.'],
        w: 'I e II verdadeiras. III falsa: a obrigação de resultado veio da conclusão do tribunal de origem sobre ESTE caso (cirurgia estético-funcional com promessa de melhora estética), e o STJ só não a reexaminou. Não é regra para toda a Odontologia.',
        f: STJ },

      { id: 'ol73', tema: 'Casos reais',
        ctx: 'No caso do REsp 2.225.449 (2026), pesou a PROMESSA de melhora estética registrada nos documentos do tratamento.' + ARCTX,
        p: ARP, o: AR, a: 1, fixa: true, ar: true,
        af: ['O que o dentista escreve e promete, inclusive em documentos do tratamento, pode ser usado como prova num processo.',
             'A Res. CFO-196/2019 continua proibindo, na divulgação de imagens, expressões que caracterizem promessa de resultado.'],
        w: 'As duas são verdadeiras, mas a II não justifica a I. A I vem do próprio caso (documentos e promessa usados pelo tribunal); a II é uma regra ética de publicidade (art. 2º, §1º). Juntas, ensinam: registrar bem e não prometer resultado.',
        f: STJ + '; ' + R196 + ', art. 2º, §1º' }
    ]
  };

  window.MATERIAS = window.MATERIAS || [];
  if (!window.MATERIAS.some(m => m.id === 'legal')) window.MATERIAS.push({ id: 'legal', nome: 'Odontologia Legal', pronto: true, especialidade: true, periodo: 99 });
})();
