# Fontes e créditos das imagens de Anatomia de Cabeça e Pescoço (rascunho refeito em 11/11/2026)

Matéria do **Prof. Gustavo Holderbaum** (Estácio Petrópolis, 2º período). Cada figura tem a versão da questão
(`nome.jpg` / `nome.svg`) e a da explicação, com a resposta marcada (`nome-resposta.*`).
O atlas **Netter de Cabeça e Pescoço** (que o professor mandou baixar em 23/08/2026) foi usado só para CONFERIR o
conteúdo: nenhuma figura do Netter está aqui.

## 1. Imagens dos slides e do material do professor (crédito: Prof. Gustavo Holderbaum)
Originais guardados em `simulado-rascunho-cabeca\_ferramentas\fontes-prof\`; rótulos que entregam a resposta apagados
e letras/números desenhados por `_ferramentas\preparar_slides.py`. Algumas figuras dos slides vêm de outras obras
(o slide do professor as reúne); o crédito no site vai para o material do professor, e a origem aparente fica anotada abaixo.

| Arquivo | De onde saiu | Origem aparente da figura |
|---|---|---|
| `trigemeo-slide.jpg` | Técnicas Anestésicas - Parte 1, slide 6 (revisão anatômica: nervo trigêmeo) | ilustração de livro-texto em inglês |
| `maxila-mandibula-slide.jpg` | Técnicas Anestésicas - Parte 1, slides 3 (maxila porosa) e 4 (mandíbula densa) | fotos de peça óssea |
| `boca-slide.jpg` | Técnicas Anestésicas - Parte 1, slide 5 (mucosa bucal, orifícios dos ductos salivares) | ilustração didática em português |
| `palato-slide.jpg` | Técnicas Anestésicas - Parte 1, slides 20 (nasopalatino) e 23 (palatino maior), foto A de cada | NYSORA |
| `inervacao-mandibular.jpg` | Técnicas Anestésicas na Mandíbula (PDF de 22/10/2026), pág. 1, "Anatomia relevante" | desenho de @resumos.odontto |
| `rafe-slide.jpg` | Técnicas Anestésicas na Mandíbula (PDF de 22/10/2026), pág. 1, bloqueio do alveolar inferior | foto clínica (fontes A e B do slide) |
| `gowgates-akinosi-slide.jpg` | Técnicas Anestésicas na Mandíbula (PDF de 22/10/2026), pág. 3, Gow-Gates e Vazirani-Akinosi | ilustração de crânio |

## 2. Esquemas desenhados para o simulado (SVG, desenho próprio)
Gerados por `_ferramentas\desenhar_svgs.py`, no estilo de `img\imagino\bordas.svg` e `padroes.svg` (fundo escuro,
letras em círculos amarelos). Conteúdo tirado dos slides do professor e conferido com o atlas.

| Arquivo | O que mostra | Base do conteúdo |
|---|---|---|
| `trigemeo-forames.svg` | "Siga o nervo": gânglio, V1/V2/V3 atravessando a base do crânio (A, B, C) e o canal palatino maior (D) | SM1 (forame redondo = V2), estudo dirigido de 28/09 (canal palatino até a fossa pterigopalatina) |
| `pontos-maxila.svg` | Arcada superior com os 5 pontos de punção (A nasopalatino, B palatino maior, C ASP, D infraorbital, E ASA) | slides de Técnicas na Maxila e Mapa das técnicas (22/10) |
| `atm.svg` | Corte sagital da ATM (fossa, eminência, disco, cabeça da mandíbula, pterigóideo lateral) | estudo dirigido de 24/08 (caso 2, luxação) |
| `facial-ramos.svg` | Perfil com o nervo facial saindo pelo forame estilomastóideo, parótida e os 5 ramos | estudo dirigido de 24/08 (caso 3, Bell); ramos pela anatomia padrão |
| `ramo-medial.svg` | Face medial do ramo: língula (espinha de Spix), forame mandibular, coronoide, côndilo, sulco milo-hióideo, com a agulha do NAI | aula de Técnicas na Mandíbula (anatomia relevante) e estudo dirigido de 24/08 (caso 1) |

## 3. Pranchas do Gray (domínio público)
**Henry Gray, *Anatomy of the Human Body*, 20ª ed. (1918)**, Wikimedia Commons, domínio público. Originais em `orig\`;
rótulos apagados e marcadores numerados por `_ferramentas\preparar_cabeca.py`.

| Arquivo | Original | Página no Commons |
|---|---|---|
| `cranio-lateral.jpg` | `orig/Gray188.png` (fig. 188, vista lateral do crânio) | https://commons.wikimedia.org/wiki/File:Gray188.png |
| `nervo-mandibular.jpg` | `orig/Gray781.png` (fig. 781, divisão mandibular do trigêmeo) | https://commons.wikimedia.org/wiki/File:Gray781.png |
| `pterigoideos.jpg` | `orig/Gray383.png` (fig. 383, pterigóideos) | https://commons.wikimedia.org/wiki/File:Gray383.png |
| `arteria-maxilar.jpg` | `orig/Gray511.png` (fig. 511, ramos da artéria maxilar) | https://commons.wikimedia.org/wiki/File:Gray511.png |
| `areas-trigemeo.jpg` | `orig/Gray784.png` (fig. 784, áreas sensitivas da cabeça) | https://commons.wikimedia.org/wiki/File:Gray784.png |

Tiradas do banco em 11/11/2026 (as manchas cinzas sobre os rótulos ficaram feias): `ramos-facial` (Gray 790, trocado
por `facial-ramos.svg`) e `glandulas-salivares` (Gray 1024, trocado por `boca-slide.jpg`). Estão em `_nao-usadas\`.
Os outros originais baixados e não usados (Gray 187, 190, 309, 311, 378, 381, 779) continuam em `orig\`.
