/* PERÍODOS (11/11/2026, pedido do Rafael): a tela inicial divide as matérias em
   "2º período" e "3º período". O 2º é o principal enquanto a turma está nele (SM2, AV 23 a 26/11);
   o 3º fica visível para a turma acompanhar o que vem.
   - PERIODOS.atual: o período que abre por padrão (o aluno pode trocar; a escolha fica no aparelho).
     Quando o 3º começar (2027.1), trocar para atual: 3 e atualizar os textos abaixo.
   - Cada matéria em MATERIAS tem "periodo". As do 2º estão em bancos.js e banco-cabeca.js (com questões;
     sem o campo = 2º); as do 3º estão aqui embaixo, ainda SEM questões: mostram nome, código, carga
     horária, a previsão do que costuma ter e as Aulas (vazias até a transcrição chegar).
   - Quando uma matéria do 3º ganhar banco de questões (window.BANCOS[id]), os botões de simulado aparecem sozinhos.
   Fonte do 3º período: SIA > Estrutura Curricular (lida em 09/10/2026, Faculdade\sia\estrutura-curricular.md).
   A divisão por período é DEDUÇÃO pela ordem do SIA e pelos pré-requisitos: confirmar quando sair o horário.
   Clínica de Radiologia e Diagnóstico por Imagem (ARA4208) ficou de fora: pede Diagnóstico Bucal, então
   provavelmente é do 4º (a conferir). */
window.PERIODOS = {
  atual: 2,
  lista: [
    { n: 2, nome: '2º período', curto: 'em curso', titulo: '2º período',
      aviso: 'Em curso: SM2 agora, AV de 23 a 26/11.' },
    { n: 3, nome: '3º período', curto: 'começa em 2027.1', titulo: '3º período (começa em 2027.1, nada foi dado ainda)',
      aviso: 'Matérias previstas pela grade do curso, a confirmar quando sair o horário. Ainda não tem questões: as aulas entram aqui quando forem dadas.' },
    { n: 99, nome: 'Especialidades', curto: 'além da grade', titulo: 'Especialidades da odontologia',
      aviso: 'Treino por especialidade, com fonte em cada questão. Entram mais especialidades quando tiver conteúdo.' }
  ]
};

window.MATERIAS = window.MATERIAS || [];
window.MATERIAS.push(
  { id: 'cirsup', periodo: 3, pronto: true, previsao: true,
    nome: 'Bases Cirúrgicas e Reabilitadoras', curta: 'Bases Cirúrgicas',
    materia: 'Bases Cirúrgicas e Reabilitadoras dos Tecidos de Suporte', codigo: 'ARA4188', ch: '140h',
    intro: 'Os tecidos que seguram o dente (gengiva, ligamento e osso) e as bases da cirurgia e da reabilitação nessa região.' },
  { id: 'diagbucal', periodo: 3, pronto: true, previsao: true,
    nome: 'Diagnóstico Bucal Integrado', curta: 'Diagnóstico Bucal',
    materia: 'Diagnóstico Bucal Integrado', codigo: 'ARA4243', ch: '80h',
    intro: 'O exame do paciente e da boca para chegar ao diagnóstico das alterações bucais.' },
  { id: 'integral', periodo: 3, pronto: true, previsao: true,
    nome: 'Integralidade do Cuidado em Saúde Bucal', curta: 'Integralidade',
    materia: 'Integralidade do Cuidado em Saúde Bucal', codigo: 'ARA4378', ch: '40h',
    intro: 'A saúde bucal vista como parte do cuidado com a pessoa inteira.' },
  { id: 'extconv', periodo: 3, pronto: true, previsao: true,
    nome: 'Extensão: Conviver e Revolucionário', curta: 'Extensão',
    materia: 'Extensão: Conviver e Revolucionário', codigo: 'ARA4306', ch: '100h',
    intro: 'Atividades de extensão, voltadas para a comunidade.' },
  { id: 'socorros', periodo: 3, pronto: true, previsao: true, eletiva: true,
    nome: 'Primeiros Socorros e Biossegurança', curta: 'Primeiros Socorros',
    materia: 'Primeiros Socorros e Biossegurança', codigo: 'ARA0354', ch: '80h',
    intro: 'Eletiva (nem todo mundo faz). Atendimento inicial em emergências e regras de biossegurança.' }
);

/* MATERIAL da matéria (fora das aulas): { t:'título', data:'dd/mm/aaaa', url:'link ou arquivo', desc:'' }.
   Os slides de cada aula ficam dentro da própria aula, no campo "slides" de aulas.js
   ({ img, cap, cr } = imagem com zoom; { t, url, desc } = link). */
window.MATERIAL = window.MATERIAL || {};
