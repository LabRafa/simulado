/* Vídeos das técnicas (Rafael 25/11/2026: "quando falar de uma técnica, coloca o vídeo no site"). Mandados pela Vanessa no grupo. */
(function(){ var B = window.BANCOS && window.BANCOS.farmaco; if (!B || !B.glossario) return; var g = B.glossario;
  var V = {
    'alveolar inferior': [['Técnica indireta (pterigomandibular), Professor Dentista','https://www.youtube.com/watch?v=IZkeC00MibE'],['Técnica direta, Professor Dentista','https://www.youtube.com/watch?v=1XUmLjjcNd4']],
    'nervo mentual': [['Bloqueio do nervo mentual, PET Odontologia UFRGS','https://www.youtube.com/watch?v=DfZSdkBjYeQ']],
    'forame mentual': [['Bloqueio do nervo mentual, PET Odontologia UFRGS','https://www.youtube.com/watch?v=DfZSdkBjYeQ']],
    'Vazirani-Akinosi': [['Técnica Vazirani-Akinosi, FOP','https://www.youtube.com/watch?v=yNTHVOdvGyQ']],
    'Gow-Gates': [['Técnica Gow-Gates, FOP','https://www.youtube.com/watch?v=KfnE8cUGkTc']],
    'nervo bucal': [['Bloqueio do nervo bucal, Professor Dentista','https://www.youtube.com/watch?v=5BEVvq5_QQ8']],
    'língula': [['Alveolar inferior, técnica indireta, Professor Dentista','https://www.youtube.com/watch?v=IZkeC00MibE']],
    'espaço pterigomandibular': [['Alveolar inferior, técnica indireta, Professor Dentista','https://www.youtube.com/watch?v=IZkeC00MibE']]
  };
  Object.keys(V).forEach(function(k){ var v = g[k]; if (!v) return; if (typeof v === 'string') v = g[k] = { d: v }; v.videos = V[k].map(function(x){ return { t: x[0], url: x[1] }; }); });
})();
