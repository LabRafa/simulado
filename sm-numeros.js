/* Rafael 22/11/2026: "semelhante à questão 4 do simulado 1", mais específico. Número da questão do SM1
   a que cada questão "semelhante" se parece (conferido uma a uma em 22/11). */
(function () {
  var M = {
    bases: { b16: 3, b17: 4, b18: 9, b19: 7, b20: 6, b21: 5, b25: 10, b44: 8, b50: 1, b51: 3 },
    carie: { c01: 5, c02: 6, c05: 5, c06: 1, c07: 2, c08: 2, c12: 3, a02: 3 },
    inter: { c23: 8, c24: 8, p01: 5, p03: 5, p04: 5, p05: 3, p06: 6, p07: 6, p08: 6, p09: 6, p10: 4, p11: 9, p12: 10 },
    farmaco: { f01: 1, f02: 2, f06: 4, f07: 5, f12: 8, f13: 8, f14: 7, f15: 9, f16: 10 }
  };
  var B = window.BANCOS || {};
  Object.keys(M).forEach(function (k) { var b = B[k]; if (!b) return;
    b.q.forEach(function (q) { if (q.sm1par && M[k][q.id]) q.sm1par = M[k][q.id]; }); });
})();
