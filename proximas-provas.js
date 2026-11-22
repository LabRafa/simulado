/* Rafael 22/11/2026: o botão grande diz pra qual prova a pessoa está treinando ("depende da próxima prova").
   Datas do SIA (Datas de Provas Presenciais, conferidas em 14/10 e 19/11). AVS: o SIA mostra a mesma data da AV; sem data própria. */
window.PROVAS = {
  bases:   [['SM1', '2026-09-21'], ['SM2', '2026-11-09'], ['AV', '2026-11-23'], ['AVS', '']],
  carie:   [['SM1', '2026-09-22'], ['SM2', '2026-11-10'], ['AV', '2026-11-24'], ['AVS', '']],
  inter:   [['SM1', '2026-09-22'], ['SM2', '2026-11-10'], ['AV', '2026-11-24'], ['AVS', '']],
  farmaco: [['SM1', '2026-09-24'], ['SM2', '2026-11-12'], ['AV', '2026-11-26'], ['AVS', '']]
};
window.proximaProva = function (mat) {
  var l = (window.PROVAS || {})[mat]; if (!l) return null;
  var hoje = new Date(); hoje.setHours(0, 0, 0, 0);
  for (var i = 0; i < l.length; i++) {
    var s = l[i][0], d = l[i][1];
    if (!d) return { sigla: s, data: null };
    var dt = new Date(d + 'T00:00:00');
    if (dt >= hoje) return { sigla: s, data: dt };
  }
  return null;
};
window.rotuloTreino = function (mat) {
  var p = window.proximaProva(mat); if (!p) return 'Fazer simulado';
  var art = /^SM/.test(p.sigla) ? 'o' : 'a';
  var quando = '';
  if (p.data) {
    var dias = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
    var hoje = new Date(); hoje.setHours(0, 0, 0, 0);
    var dif = Math.round((p.data - hoje) / 864e5);
    quando = dif === 0 ? ' · é hoje' : dif === 1 ? ' · amanhã' : ' · ' + dias[p.data.getDay()] + ' ' + String(p.data.getDate()).padStart(2, '0') + '/' + String(p.data.getMonth() + 1).padStart(2, '0');
  }
  return 'Treinar para ' + art + ' ' + p.sigla + quando;
};
