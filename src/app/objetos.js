



const vit1 = new Vitima("Nao Yoshida", "40 anos", "morto", "Após virem seu cadáver, todos os policiais pediram um dia de folga")

const vit2 = new Vitima("Emi Takahashi", "25 anos", "morto", "Moradores de seu bairro diziam que ele estava em transe seguindo uma figura pálida, a qual era rodeada de neve")

const vit3 = new Vitima("Kazuki Yamamoto", "20 anos", "morto", "Os vizinhos escutaram uma noite de gritos e choros carregados de horror e dor")

const vit4 = new Vitima("Sakura Kobayashi", "35 anos", "morta", "- 'Eu não consigo tirar de minha mente, aquela visão horrenda. Se algum deus existe, que ele me ajude.' - A frase foi escutada com choros e soluços durante a noite anterior ao seu desaparecimento")

const vit5 = new Vitima("Takeshi Sato", "28 anos", "morto", "Amigos próximos relataram que ele começou a agir de maneira paranóica, sempre olhando por cima dos ombros e murmurando sobre uma máscara assustadora.");

const vit6 = new Vitima("Haruka Ito", "22 anos", "morta", "Testemunhas afirmaram ter ouvido gritos vindos do beco na noite do incidente. A área agora é evitada por todos.");

const vit7 = new Vitima("Tomo Tanaka", "33 anos", "morto", "Amigos próximos disseram que ele começou a agir de maneira estranha após visitar o santuário. Algumas pessoas acreditam que ele foi possuído por uma entidade sobrenatural.");

const vit8 = new Vitima("Yuki Suzuki", "15 anos", "morta", "Colegas de trabalho afirmam que Yuki estava obcecada por histórias de fantasmas antes de sua morte. Alguns acreditam que ela atraiu atividades paranormais devido a essa obsessão.");

const vit9 = new Vitima("Ryuji Nakamura", "26 anos", "morto", "Moradores locais relataram ter visto uma mulher de branco nas proximidades antes do desaparecimento de Ryuji. Alguns acreditam que ele foi vítima de uma maldição.");

const vit10 = new Vitima("Aya Nakamura", "23 anos", "morta", "Amigos próximos disseram que Aya começou a agir de maneira estranha após encontrar o diário antigo. Eles afirmam ter ouvido vozes estranhas quando estavam perto dela.");



const youkai1 = new Youkai("Teke-Teke", "S", "Vingativo");

const youkai2 = new Youkai("Yuki-onna", "A", "Assustador");

const youkai3 = new Youkai("Kuchisake-onna", "B", "Vingativo");

const youkai4 = new Youkai("Onryo", "A", "Vingativo");

const youkai5 = new Youkai("Noh Mask", "C", "Enganoso");

const youkai6 = new Youkai("Kawa-no-kami", "S", "Vingativo");

const youkai7 = new Youkai("Jibakurei", "B", "Assustador");

const youkai8 = new Youkai("Aka Manto", "A", "Enganoso");

const youkai9 = new Youkai("Funayurei", "C", "Vingativo");

const youkai10 = new Youkai("Jorogumo", "S", "Assustador");




const caso1 = new Caso(101, "youkai1.jpg","Assombração em Okinawa", "Okinawa", vit1, "Ao voltar do trabalho, Nao Yoshida foi perseguido por um vulto que foi identificado e descrito por testemunhas oculares como 'uma mulher serrada ao meio que corria com as mãos'. Após um tempo, uma orelha e um pé de Yoshida foram achados em locais diferentes", "18/01/1968", "O corpo dele encontrado esquartejado, tendo sua cabeça pendurada na estação do trem", youkai1);

const caso2 = new Caso(102, "youkai2.jpg","Fria Agonia em Hokkaido", "Hokkaido",vit2, "Emi Takahashi desapareceu misteriosamente durante uma tempestade de neve. Seu corpo foi encontrado congelado e com marcas estranhas, como se garras afiadas a tivessem arrastado para fora de casa.", "07/03/1985", "Caso não resolvido, a causa da morte permanece desconhecida.", youkai2);

const caso3 = new Caso(103, "youkai3.jpg","Sussurros Sangrentos em Kyoto", "Kyoto", vit3, "Kazuki Yamamoto foi encontrado em seu quarto, com mensagens sangrentas escritas nas paredes. Testemunhas afirmam ter ouvido sussurros assustadores na noite anterior ao ocorrido.", "22/09/2002", "Nunca resolvido, o quarto permanece selado por causa das atividades paranormais.", youkai3);

const caso4 = new Caso(104, "youkai4.jpg","Pesadelos Profundos em Sapporo", "Sapporo", vit4, "Sakura Kobayashi experimentou uma série de pesadelos horríveis antes de sua morte. Seu corpo foi descoberto em um templo abandonado, com marcas de mãos sangrentas em seu pescoço.", "04/07/1977", "A polícia alegou suicídio, mas moradores locais acreditam que foi obra de um espírito vingativo.", youkai4);

const caso5 = new Caso(105, "youkai5.jpg","Máscara Maldita em Nara", "Nara", vit5, "Takeshi Sato encontrou uma máscara assombrada em uma loja de antiguidades. Após colocá-la, ele começou a agir de maneira estranha, e testemunhas relataram ouvir vozes sussurrantes quando estavam perto dele.", "15/11/1999", "Morto durante um exorcismo mal-sucedido, a máscara permanece amaldiçoada.", youkai5);

const caso6 = new Caso(106, "youkai6.jpg","Garras na Escuridão em Fukuoka", "Fukuoka", vit6, "Haruka Ito foi encontrada morta em um beco escuro, com marcas de garras profundas em seu corpo. Testemunhas relatam ter visto uma figura sombria nas proximidades na noite anterior.", "30/05/2010", "Caso sem resolução, os moradores evitam o beco à noite.", youkai6);

const caso7 = new Caso(107, "youkai7.jpg","Pendurado por Inscrições em Osaka", "Osaka", vit7, "Tomo Tanaka desapareceu depois de visitar um santuário assombrado. Seu corpo foi descoberto pendurado em uma árvore próxima, com inscrições estranhas nas mãos.", "10/12/1989", "Considerado um suicídio, mas moradores locais acreditam em uma maldição do santuário.", youkai7);

const caso8 = new Caso(108, "youkai8.jpg","Elevador Macabro em Tokyo", "Tokyo", vit8, "Yuki Suzuki foi encontrada morta em um elevador antigo. Câmeras de segurança mostram a porta do elevador abrindo e fechando sozinha antes de sua morte.", "05/02/2005", "Oficialmente considerado um acidente, mas rumores de atividade paranormal persistem no prédio.", youkai8);

const caso9 = new Caso(109, "youkai9.jpg","Visões da Mulher de Branco em Hiroshima", "Hiroshima", vit9, "Ryuji Nakamura foi atormentado por visões de uma mulher de branco antes de sua morte. Seu corpo foi descoberto em um campo, com marcas de arranhões por todo o corpo.", "19/06/1996", "A polícia atribuiu a morte a animais selvagens, mas moradores acreditam em uma maldição.", youkai9);

const caso10 = new Caso(666, "youkai10.jpg","Diário Obscuro em Nagoya", "Nagoya", vit10, "Aya encontrou um diário antigo em uma loja de antiguidades. Após ler as páginas, ela começou a agir de maneira estranha, murmurando palavras incompreensíveis. Seu corpo foi encontrado com as mãos cobertas de sangue.", "19/02/2023", "Morte por auto-mutilação em transe", youkai10);

const casosSobrenaturais = [caso1, caso2, caso3, caso4, caso5, caso6, caso7, caso8, caso9, caso10];

