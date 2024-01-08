// 0. Nada a ver comigo.

// 1. Quase nada a ver comigo.

// 2. Um pouco mais que quase nada a ver comigo.

// 3. Parcialmente a ver comigo.

// 4. Quase que totalmente a ver comigo

// 5. Totalmente a ver comigo

var deuses = {
    deus: [
        {
            id: 1,
            perguntas: [
                'Você tem um espírito de liderança, consequentemente não lhe agrada a ideia de receber ordens.',
                'Você quer sempre se mostrar um exemplo e ser motivo de orgulho.',
                'As pessoas costumam seguir suas ordens pois sabem que fará de tudo para atingir o objetivo, e que tomara as decisões certas.',
                'Você é bem ambicioso. Tem o desejo e a cobiça por algo grande, ou para ser alguém grande.',
                'Você faz tudo da melhor forma possível.',
                'Jamais aceitaria a ideia de ser conhecido como alguém meia boca, faz o possível e o impossível para ser o melhor.',
                'Você é confiante e seguro de si. Sabe o seu valor e nunca deixaria ninguém te rebaixar.',
                'Você é uma pessoa justa, que tenta ao máximo não quebrar suas promessas.',
                'Não é difícil ser irritado por algo ou alguem.',
                'Explode sempre que a situação foge do seu controle. Tudo tem de estar ao seu agrado, caso o contrário, fecha a cara.',
                'Seu senso de humor pode não ser comum como o da maioria, mas isso não quer dizer que não tenha.',
                'Você é inteligente, não de deixa levar fácil por conversa furada.',
                'A lealdade é algo super importante. Você nunca trocaria de lado e trairia seu time.',
                'De algum modo, se sente bem e confortavel com tempestades e raios.',
                'Apesar de não demonstrar muito, é carinhoso, e gosta de atenção.',
                'É perfeccionista, não gosta de nada desorganizado.',
                'Tem emoções fortes, mas que sabe a hora de conte-las e não vê dificuldade nisso.',
                'Não admite as coisas com muita facilidade, as pessoas podem esperar sentadas se quiserem ouvir uma confissão de "ok, você estava certo".',
                'Ama receber elogios, são como um combustível para você(apesar de que vai continuar bem mesmo sem eles).',
                'É uma pessoa teimosa e firme em suas ideias. Defenderá com unhas, dentes e argumentos super válidos, por mais maluca que seja a ideia.'
            ]
        },//Zeus 01
        {
            id: 2,
            perguntas: [
                'Como Deusa do Casamento, Hera nunca será infiel a Zeus, sendo assim, ela não possue e nunca vai ter um filho com um mortal, seu chalé é apenas por respeito a Deusa, algo simbólico'
            ]
        },//Hera 02
        {
            id: 3,
            perguntas: [
                'Você é extremamente leal as pessoas. Nunca abandonaria quando a situação está feia, ficaria e lutaria, dando a sua vida para ajudar.',
                'Suas promessas valem ouro, você costuma se culpar bastante quando quebra uma, e quando acontece, querem de alguma forma compensar.',
                'Suas palavras algumas vezes podem acabar escapando, geralmente não consegue conter o que pensa, acabando conhecido por afrontoso.',
                'Muitas das suas ideias e principalmente os seus motivos não são compreendidos facilmente pelos outros, principalmente os mais velhos.',
                'Auto-suficiente o bastante para tentar fazer tudo sozinho, as vezes por querer mostrar serviço ou simplesmente por não querer incomodar alguém pedindo ajuda.',
                'Quer sempre mostrar do que é capaz(Mesmo que não sejam, acabam dando um jeito).',
                'No fundo tem um bom coração, e o que mais preza é pelo bem estar dos que ama.',
                'Detesta a traição, principalmente quando é consigo. Nunca mais se atreve a olhar para a pessoa com os mesmos olhos.',
                'Depende de tempo para decidir a melhor coisa a se fazer, não é simplesmente "ah, pensei bora lá", e sim um "CALMA AI, TO PENSANDO".',
                'Odeia ser apressado por alguem, isso só piora as coisas e te faz ficar nervoso.',
                'Você tende a ter ideias loucas e arriscadas, mas que no final acaba dando certo.',
                'Costuma se sentir bem em contato com a água, seja em piscina ou mar.',
                'A vida das pessoas que ama é mais importante que a própria.',
                'É uma pessoa divertida e acolhedora, sempre será um ombro amigo para qualquer um.',
                'Para você, é fácil entender o sentimento das pessoas e, muitas vezes, acaba até se identificando.',
                'Você é MUITO apegado a sua família.',
                'Se apega a algumas coisas materiais que te lembram momentos felizes.',
                'Daria a sua vida para salvar as pessoas que ama.',
                'Não é muito difícil de fazer amizades, justamente por entender todos os lados e se colocar no lugar dos outros.',
                'Se começar algo, vai terminar de um jeito ou de outro.Talvez não fique como esperado, mas terminar é certeza.'
            ]
        },//Poseidon 03
        {
            id: 4,
            perguntas: [
                'Você é uma pessoa não necessariamente tímida, mas calada. Geralmente fica em seu próprio mundo de pensamentos.',
                'Preza pela educação, e tratam assim até quem não merece este tratamento.',
                'Normalmente paciente, não vê problema em esperar e sabe dar o devido tempo.',
                'A natureza te acalma de uma forma incrível, você se sente super relaxado e como se tivesse no melhor lugar do mundo.',
                'Geralmente é pacifíco, isso se ninguém passar do limite e acabar te provocando ao extremo.',
                'Quando explode de raiva, as pessoas ficam realmente assustadas, justamente por isso não acontecer muito.',
                'Costuma se interessar pela causa animal e ambiental.',
                'Sempre está pensando em um jeito de poluir menos e em ideias sustentáveis.',
                'Gosta de socializar com as pessoas que geralmente são ignoradas pelas demais.',
                'É um bom ouvinte, e tenta sempre ajudar com alguma solução pacífica.',
                'Adora plantas e já sonhou ou sonha em trabalhar com isso.',
                'Gosta de dar pequenas "palestras" sobre a poluição humana no mundo e como isso está afetando o planeta.',
                'Sabe a hora certa de falar e escutar.',
                'Consegue guardar algumas palavras ruins para si, pois por mais que a pessoa mereça, a educação vem primeiro.',
                'Tenta sorrir e parecerem bem, mesmo com fortes emoções por dentro.',
                'É corajoso e faz o máximo para ajudar a quem ama.',
                'Gosta de ler, pelo fato de aprender coisas novas que podem ser úteis.',
                'Apesar da personalidade, não é idiota e sabe quando alguém está fazendo algo por interesse ou por mal.',
                'Gosta de acompanhar o crescimento e desenvolvimento das plantas que cuida.',
                'Faz coisas duvidosas quando com raiva.'

            ]
        },//Demeter 04
        {
            id: 5,
            perguntas: [
                'Você costuma ser bastante impulsivo, e não liga para as consequências dessa impulsividade.',
                'Você não se importa com qualquer um, então não liga se suas ações afetam as pessoas.',
                'Em hipótese alguma você leva desaforo pra casa, na verdade, é a pessoa que levaria um olho roxo.',
                'Você tem um pavio EXTREMAMENTE curto, qualquer coisa é motivo para discussão e brigas.',
                'Você odeia receber ordens, não é daqueles que abaixam o rabinho e simples assim.',
                'Primeiro, você não é ajudante de ninguém, você é aliado. Você não é menos do que o igual.',
                'Você adora brigas e às vezes até começa elas por motivos bobos, por simplesmente brigar.',
                'Você é bruto na maior parte do tempo, mas isso não quer dizer que não pode ser o contrário.',
                'Você tem muita, mais muita dificuldade de falar de seus sentimentos, então não o apresse.',
                'Você é bastante orgulhoso, e quando o orgulho é afetado, você empaca que nem uma mula, nada é capaz de mudar a opinião.',
                'Seu ponto fraco são as pessoas que ama, você é o único que pode conseguir fazer mudar o pensamento e ideias.',
                'Você não tem medo de praticamente nada.',
                'Pelas pessoas que ama, você é capaz de dar a própria vida.',
                'Alguns são bastante desconfiados e questionam tudo e todos.',
                'A solução é; violência. Alguém magoou os sentimentos de um amigo? Violência. Falaram de você pelas costas? Violência.',
                'Você aprecia esportes violentos, como luta ou futebol americano.',
                'Você quer que as pessoas obedeçam suas ordens, apesar de seu orgulho não ajudar muito em tomar as melhores decisões como líder.',
                'Você é egoísta com o que considera seu, e não gosta de dividir.',
                '"Como assim ele falou assim com você ? Ele vai receber uma surra!" soa exatamente coo algo que voce falaria',
                'Apesar da máscara de pessoa durona, no fundo você tem medo de perder quem ama.'
            ]
        },//Ares 05
        {
            id: 6,
            perguntas: [
                'Adora leitura, é como um refúgio para você.',
                'Não precisa necessariamente ser bom na escola (porque vai dar dificuldade de cada pessoa), mas você adora aprender coisas novas.',
                'É uma pessoa criativa, que pensa em coisas novas e inovadoras.',
                'É fácil para você pensar em um plano e sabe agir sob pressão.',
                'Seus planos tendem a ser seguros, mas de vez em quando pode arriscar.',
                'É uma pessoa sonhadora, que pensa muito no futuro.',
                'Você recebe críticas construtivas muito bem (apesar de ficar triste por não ter acertado de primeira), sabe que com elas é possível melhorar mais e mais.',
                'É orgulhoso, mas consegue deixar o orgulho de lado se for para o bem das pessoas que importam.',
                'Consegue liderar com facilidade e pelo caminho mais seguro.',
                'A lógica sempre está na frente.',
                'Vai sempre pensar em uma saída, mesmo que no improviso.',
                'Tenta se mostrar alguém confiável e responsável para os mais velhos.',
                'Entre amigos, é mais leve e solto, o senso de humor pode ser diferente, mas isso não quer dizer que seja uma pessoa mal-humorada.',
                'Sabe do seu potencial e não gosta quando ignoram.',
                'É aquela pessoa que as mães adorariam que o filho tivesse como companhia, pois é responsável e consegue manter os outros na linha.',
                'Não é fã de quebrar as regras, fazendo isso apenas se for MUITO necessário.',
                'Adora saber das coisas e apresentar fatos, mas as pessoas tendem a achar "metido" por simplesmente querer falar do que sabe.',
                'Aprecia a sua própria companhia, não há problema em ficar sozinho com um livro em mãos.',
                'Aprende rápido quando o assunto lhe interessa.',
                'Acredita que as regras são importantes, pois sem elas as pessoas não respeitariam nada e viraria uma bagunça.'
            ]
        },//Atena 06
        {
            id: 7,
            perguntas: [
                'Não tem problemas em fazer amizades, em todo lugar que vai é fácil se enturmar.',
                'Pessoas comunicativas, falantes e que gostam de companhia.',
                'São seguros de si e sabem que são bons.',
                'Geralmente simpáticos com todo mundo.',
                'Costuma ser aquela pessoa que ilumina o local, que traz felicidade e risadas.',
                'Gosta de tocar instrumentos musicais.',
                'Pessoas calorosas que adoram contato físico, sempre abraçando as pessoas.',
                'Adora brincadeiras e pegadinhas, de preferência que não sejam consigo, mas não costuma se irritar fácil com isso.',
                'Na maior parte do tempo está sorrindo, mesmo que não esteja feliz por dentro.',
                'Adora vôlei (não precisa necessariamente jogar, ser bom e tals, mas assistir ou achar o esporte legal também vale).',
                'Adora desenhar. É bem ligado à arte em si.',
                'Tem uma autoestima considerada alta, mas é porque sabe de seu valor e se aceita.',
                'Gosta de ouvir música e cantar, lhe faz se sentir bem (foque no sentimento da música, você não precisa cantar bem para se sentir bem cantando).',
                'É uma pessoa acolhedora, que não julga os outros pela aparência e nem se importa com esteriótipos.',
                'Não tem vergonha de simplesmente chegar na pessoa que gosta, e não liga para opiniões alheias.',
                'Tem ou já teve uma paixão pela medicina (pode se encaixar em veterinária também).',
                'De repente está cantando sem motivo, qualquer hora é hora de cantar e de alegria.',
                'Não é muito fã de baixo astral, sempre tenta animar todo mundo com piadas estranhas e sem sentido.',
                'É aquela pessoa que você sempre pode contar, que vai estar lá para segurar o seu cabelo caso você de PT.',
                'Geralmente é mais da emoção que da razão, é mais fácil dar apoio emocional do que uma solução para enfrentar um problema.'
            ]
        },//Apolo 07
        {
            id: 8,
            perguntas: [
                'Ártemis não tem filhos, mas você pode ser uma caçadora. As caçadoras não tem uma personalidade específica, qualquer uma pode ser uma caçadora, mas tem algumas exigências para ser aceito, por exemplo, são aceitas apenas pessoas do genero feminino\nQuer saber se você encaixa nesse grupo? acesse este link do fandom e explore!\nhttps://acampamentomeiosangue.fandom.com/pt/wiki/Ca%C3%A7adoras_de_%C3%81rtemis'
            ]
        },//Artemis 08
        {
            id: 9,
            perguntas: [
                'São pessoas de bom coração, apesar de não saberem como demonstrar isso.',
                'Pacíficos, a ideia de violência não é muito agradável, mas não duvide que eles usem dela caso necessário.',
                'Gostam de inventar coisas novas e gostariam de serem conhecidos por isso.',
                'Geralmente são pessoas reservadas, gostam da companhia das pessoas que realmente querem o seu bem.',
                'Acham mais fácil se concentrar quando estão só.',
                'São apaixonados por arquitetura ou robótica.',
                'Desde criança gostavam de brinquedos de montar e coisas mais complexas.',
                'Não conseguem demonstrar seus sentimentos com muita facilidade.',
                'Se pudessem, escolheriam fazer todos os trabalhos sozinhos.',
                'É muito difícil para eles entenderem o próprio sentimento, imagine o dos outros.',
                'São boas companhias se você quiser apenas alguém para estar ao seu lado em silêncio, sem ser julgado.',
                'Querem ser importantes e mostrar serviço, que são úteis.',
                'Odeiam a traição, consideram um dos piores defeitos que existe.',
                'Máquinas são sempre boas companhias.',
                'Não são bons com conselhos.',
                'É difícil ter inimigos, eles simplesmente não fazem nada ao ponto de serem odiados por alguém, são apenas quietos em seu canto.',
                'Odeiam o fato das pessoas excluírem os "estranhos" ou os "desajeitados".',
                'Suas amizades são sempre verdadeiras e confiáveis, que vão poder contar pela vida toda.',
                'São engraçados, mas só quem realmente os conhece sabe desse lado.',
                'As pessoas não costumam entender quando falam sobre robótica, e têm que traduzir e diminuir várias vezes, isso se as pessoas não desistirem de entender.'
            ]
        },//Hefesto 09
        {
            id: 10,
            perguntas: [
                'São bonitos, mas isso porque se consideram, não pela opinião alheia. Inclusive, têm em mente que todo mundo deveria se aceitar como é.',
                'Extremamente confiantes e seguros de si. Sua aura emana poder e confiança.',
                'Gostam de alegria e de bom astral.',
                'Atuam muito bem. Sabem usar do charme para conseguir o que querem.',
                'Podem ter fama de maldosos, mas são apenas um pouco mais individualistas que os outros, o que não quer dizer que só pensam em si.',
                'São pessoas boas, que veem beleza e amor em tudo e todos.',
                'O amor é uma palavra muito forte para eles. Realmente apreciam esse sentimento e vivem-no ao máximo.',
                'A união que têm é incrível. Se alguém quebrou o coração de uma amiga, pode ter certeza que todos eles irão se vingar.',
                'Apreciam a moda e gostam de se vestir bem (claro, com seus próprios gostos).',
                'Ser o centro das atenções é sempre legal, e eles adoram.',
                'São boas pessoas para levantar o astral de alguém. Passarão o dia inteiro ajudando a pessoa a se sentir bem consigo mesma, tanto fisicamente quanto internamente. São as melhores pessoas para ajudar os outros a se aceitarem.',
                'Sabem que são poderosos e adoram isso.',
                'Por mais que não seja intencional, muitos acabam "quebrando" o coração das pessoas porque o amor acaba não sendo correspondido.',
                'Geralmente educados, isso até alguém os insultar.',
                '"Por favorzinho, sabe que eu te amo né?" Acaba sendo uma das frases mais usadas.',
                'As pessoas costumam reclamar da demora deles para se arrumar quando vão sair.',
                'Tudo para eles é incrível e super incrível. Não se assuste se começarem a te elogiar por "pouca coisa".',
                'A opinião alheia não os afeta, pois se aceitam do jeito que são.',
                'Usam as palavras certas e jeitos que a pessoa não consegue dizer não para eles.',
                'Adoram falar sobre sentimentos com os outros e de dar conselhos amorosos.'
            ]
        },//Afrodite 10
        {
            id: 11,
            perguntas: [
                'Não é difícil para eles inventar uma desculpinha esfarrapada e simplesmente se safar das coisas.',
                'As pessoas tendem a acreditar porque, por fora, parecem o tipo de pessoa que nunca faria nada de errado.',
                'Usam sempre as palavras certas para determinadas situações e têm uma lábia fantástica.',
                'Adoram contar piadas idiotas e fazer as pessoas rirem.',
                'Mesmo sem querer, sempre estão atentos às coisas e observando o redor.',
                'Não são ladrões (até porque isso dá cadeia né, mores 💅), mas tendem a pegar coisas emprestadas sem pedir, por exemplo, uma roupa de um irmão.',
                'Sabe quando você quebra algo e coloca de novo no lugar para a próxima pessoa achar que quebrou? Isso resume muito os filhos de Hermes.',
                'Adoram fazer pegadinhas e brincadeiras.',
                'Pessoas muito acolhedoras e simpáticas, uma nova companhia nunca é demais.',
                'Quanto mais amigos, melhor. Amam estar com pessoas. E mais gente significa mais pessoas como alvo de suas brincadeiras.',
                'É fácil ganhar discussões de escolha (por exemplo, escolher um filme), pois sabem usar argumentos incríveis quando querem algo.',
                'E quando não querem algo, acham defeitos para que a pessoa simplesmente desista da ideia.',
                'Amam viajar e conhecer novos lugares, se pudessem até trabalhariam com isso.',
                'Conseguem manter a "aparência" de alguém confiável e que nunca faria ou faz algo de ruim.',
                'É bem fácil para eles convencer as pessoas.',
                'Sabe quando a situação está feia e é hora de meter o pé, fugir de fininho é com eles mesmo.',
                'Suas ideias para se safar não têm limites. Se estão com problemas, suas mentes são muito rápidas em encontrar uma solução.',
                'São geralmente bem falantes e não são muito fãs do silêncio, nem de estar sozinhos.',
                'Não veem problema na mentira se isso for para salvar sua própria pele.',
                'A palavra esperteza os define mais do que inteligência.'
            ]
        },//Hermes 11
        {
            id: 12,
            perguntas: [
                'Por fora podem parecer inofensivos, mas quem conhece de verdade sabe que é exatamente o contrário.',
                'Tendem a ser individualistas, ou só se importar com a família e amigos.',
                'Pessoas realmente festeiras, não perdem uma festa por nada e amam estar no meio da multidão.',
                'As pessoas costumam rotulá-los como loucos por causa de sua personalidade excêntrica.',
                'São pessoas alegres e despreocupadas com a vida.',
                'Não são o melhor exemplo de organização, bom, nem de uma vida calma, nem de segurança… talvez não sejam um bom exemplo de nada.',
                'Eles gostam de viver a vida e o resto de se dane, realmente não ligam para as consequências.',
                'Amam a adrenalina e coisas que fazem sua pulsação acelerar.',
                'Gostam de correr perigos e não ligam se são taxados de arrogantes.',
                'Pessoas aventureiras, que não têm medo do que vier pela frente e aceitam qualquer desafio.',
                'As pessoas tendem a rotulá-los como vagabundos, que não querem um futuro e querem apenas passar o dia em festas.',
                'Uva é a sua fruta favorita.',
                'São dramáticos e exagerados, sempre aumentando as coisas e tentando dar uma de vítima.',
                'Não costumam ligar para nada, não confie alguma coisa importante para eles fazerem porque não dará certo.',
                'Não ligam para a opinião dos outros.',
                'Nas festas são aquelas pessoas que curtem sem se preocupar com o dia seguinte.',
                'É raríssimo eles admitirem que se arrependem de algo (mesmo que a vontade seja voltar no tempo e dar um tapão na cara de si mesmo e falar para não fazer).',
                'São aquelas pessoas que vão ficar até a festa acabar.',
                'Não costumam temer no que suas ações podem ocasionar no futuro.',
                'Sua opinião é a que importa e detestam que digam o contrário.'
            ]
        },//Dionisio 12
        {
            id: 13,
            perguntas: [
                'São pessoas normalmente bem reclusas, que geralmente estão sozinhas em seu canto.',
                'As pessoas costumam rotulá-los como sombrios, mas não é bem assim, pelo menos não totalmente.',
                'Em geral, são bem tímidos e é difícil se abrir com as pessoas.',
                'É difícil fazer amizades, mas quando conseguem, pode saber que será um ótimo amigo e fará de tudo pela pessoa.',
                'As pessoas que não os conhecem direito costumam se afastar por medo.',
                'Inteligentes e não têm dificuldade de pensar friamente em um plano.',
                'Gostam de rock.',
                'No fundo, eles gostam de atenção e carinho, mas de forma alguma admitem isso.',
                'São pessoas gananciosas e não gostam de dividir o que lhes pertence.',
                'Não costumam temer a morte e sabem que isso é um processo natural e encaram com tamanha tranquilidade.',
                'ODEIAM falar sobre seus sentimentos. Não existe pessoa melhor para guardar do que ELES MESMOS.',
                'Não vão de jeito nenhum falar sobre paixão com as pessoas, é constrangedor.',
                'Podem ser bastante teimosos com suas ideias e pensamentos.',
                'Mesmo estando errados, odeiam admitir isso.',
                'Sempre há pessoas que são o seu ponto fraco, e que defendem com unhas e dentes, e por elas dariam a vida.',
                'Suas roupas são, na maioria, na cor preta.',
                'Odeiam quando a atenção vem toda para si de uma vez, costumam ficar bem nervosos com tamanha atenção.',
                'Em uma sala com muita gente, eles evitam o centro e preferem os cantos ou perto da parede.',
                'Gostam de sua própria companhia e não é difícil para eles ficarem sozinhos. E odeiam os olhares de pena, como se fosse extremamente triste alguém apreciando sua própria companhia.',
                'Não são muito de festas, e nem de locais com muitas pessoas.'
            ]
        },//Hades 13
        {
            id: 14,
            perguntas: [
                'São pacíficos. Realmente não desejam o mal a ninguém.',
                'Só atacam por pura autodefesa, detestam a violência gratuita.',
                'Gentis e sempre tratam tudo e todos com educação, coisa que prezam bastante.',
                'Misericordiosos, mesmo que a pessoa mereça, raramente farão algo para prejudicar.',
                'Prezam MUITO pela liberdade.',
                'Odeiam serem proibidos de fazerem algo.',
                'Têm um coração bom, sempre tentando ver o lado bom das pessoas e tentam dar uma segunda chance.',
                'Você nunca deve dizer a eles o que eles têm que fazer ou como agir, eles odeiam isso.',
                'Se dão bem com todo mundo.',
                'É fácil de socializar, em todo lugar que vão conseguem fazer amizades ou pelo menos manter uma conversa agradável.',
                'Odeiam que opinem em suas vidas.',
                'Às vezes dão discursos longos sobre a liberdade.',
                'São geralmente bem calmos e é difícil de realmente se estressarem.',
                'Entendem fácil o sentimento das pessoas e conseguem se colocar no lugar delas.',
                'São as melhores pessoas para alguém desabafar, vão primeiro ouvir tudo o que a pessoa tem a dizer para então aconselhar.',
                'Gostam de fazer as pessoas se sentirem bem.',
                'Têm uma aura de liberdade que costuma incentivar as outras pessoas.',
                'Prezam pela harmonia e que todos pelo menos se entendam.',
                'Geralmente são aquelas pessoas que fazem de tudo para que o grupo permaneça unido.',
                'Se pudessem pedir alguma coisa, pediriam a paz mundial.'
            ]
        },//Iris 14
        {
            id: 15,
            perguntas: [
                'São geralmente pessoas tranquilas e calmas.',
                'Muito desligados e desatentos para o que tá acontecendo em volta.',
                'Pessoas extremamente sábias, seu passatempo favorito é ler para aprender.',
                'Não são as melhores pessoas para confiar alguma coisa, ou esquecem ou ficam com preguiça de fazer.',
                'Conhecidos por dormir muito, e que sem despertador não vão acordar tão cedo.',
                'Estão longe de serem os mais responsáveis.',
                'São procrastinadores natos, costumam sempre deixar as coisas para última hora, isso quando fazem.',
                'Quem conhece sabe que são pessoas divertidas.',
                'Contam piadas estranhas e difíceis de entender, enquanto eles riem as pessoas ainda estão tentando entender.',
                'São preguiçosos e um pouco covardes.',
                'Gostam de interpretar os sonhos, sempre buscando significados para as coisas.',
                'A presença deles trás sonolência e calmaria.',
                'Geralmente estão no mundo da lua, com a cabeça pensando em outras coisas menos a realidade.',
                'Acreditam que todos os sonhos tem significados.',
                'Estão sempre sonolentos.',
                'As vezes são lerdos para entender e processar as informações.',
                'Os sonhos tendem a ser lúcidos e apresentarem algo real.',
                'Não negam ajuda para seus amigos.',
                'Sempre que podem estão dormindo ou cochilando.',
                'Gostam do silêncio e da calmaria.'
            ]
        },//Hipnos 15
        {
            id: 16,
            perguntas: [
                'São imparciais na maioria das coisas se fazem, vão pelo certo, nunca deixam de escolher algo só porque pode magoar um amigo.',
                'São leais as pessoas que ama, e jamais vai deixar - los na mão.',
                'Extremamente sinceros, então se você tem dificuldade de receber críticas é melhor não perguntar a eles.',
                'Fiéis, mesmo nós momentos mais difíceis.',
                'Honestos e prezam pela franqueza, nunca se deve mascarar as coisas.',
                'Seu senso de justiça é absurdo.Todos devem pegar pelo o que fazem e ninguém deve sair impune das coisas ruins.',
                'Extremamente vingativos, nunca vão esquecer do que fizeram para si ou família.',
                'Querem igualdade acima de tudo.',
                'Prezam pela franqueza, podendo até punir quem não cumpre a isso.',
                'Não acham que a sorte deveria existir, pois é injusto alguns terem mais que os outros.',
                'Se afastam sem pensar duas vezes de pessoas infiéis, nunca sequer conseguem ver uma justificativa para isso.',
                'Leais as suas próprias ideias e raramente vão mudar.',
                'A melhora nunca é de mais.',
                'Sempre estarão ao seu lado quando precisar.',
                'Com certeza não são aquele tipo de pessoa que só está ao seu lado em momentos bons.',
                'Podem ser fáceis de serem irritados, e acredite, ninguém quer eles irritados.',
                'Geralmente não são fãs de brincadeiras ou qualquer coisas fúteis do tipo.',
                'Tentam mostrar educação, principalmente aos mais velhos.',
                'Odeiam mentiras, a verdade é sempre melhor, mesmo que dura.',
                'Não costumam ligar se machucam os sentimentos dos outros, eles só são eles mesmos.'
            ]
        },//Nêmesis 16
        {
            id: 17,
            perguntas: [
                'Tudo é motivo de competição.',
                'Amam ganhar, e não existe essa de o que importa é participar.',
                'Costumam causar confusões por causa da sua aura competitiva, as outras pessoas acabam se afastando.',
                'Tem uma personalidade excêntrica e "pirada".',
                'As pessoas costumam rotular eles como loucos por causa de sua obsessão por ganhar.',
                'São pessoas bem animadas e que nunca estão quietos.',
                'Se afastam daqueles que podem atrapalhar suas futuras conquistas, mesmo que a pessoa seja importante para si.',
                'Amam esportes.',
                'Só ficam na presença de quem realmente gosta de sua companhia.',
                'São espertos e ambiciosos.',
                'Estão sempre em competições, ou para assistir ou participar.',
                'Gostam de ser juízas das partidas.',
                'São determinados e sempre vão cumprir seu objetivo.',
                'Quando perdem alguma coisa, melhor sair de perto.Vão ficar um tempão emburrados e bravos consigo mesmo.',
                'Não é todo mundo que consegue entender seus objetivos e planos.',
                'São focados e nada e nem ninguém irá mudar sua visão do que querem pra si.',
                'Prezam acima de tudo, amizades que lhes entendão de verdade.',
                'Geralmente isolados e focados em conseguir vencer seus objetivos.',
                'Quando tem a tão sonhada vitória é melhor os outros se prepararem, vão passar dias falando sobre.',
                ''
            ]
        },//Nice 17
        {
            id: 18,
            perguntas: [
                'São cheios de energia.',
                'Sempre querendo ajudar todo mundo.',
                'Adoram fazer novos amigos.',
                'Generosos e de bom coração, se eles tem de muito, vão dar para o próximo.',
                'São pessoas bastante receptivas.Tratam todo mundo bem.',
                'Geralmente nunca estão sozinhos, e sim na companhia de diversos amigos.',
                'Não gostam de ver os outros tristes, é sempre vai fazer de tudo até anima los.',
                'Não vê problema em mentir se for para agradar alguém, como por exemplo, falar que a roupa está bonita quando não está.',
                'Os melhores amigos que alguém pode ter, sempre vão estar ao lado para ajudar.',
                'As vezes são feitos de bobo fácil, por causa da "inocência".',
                'Podem acabar sendo usados pelos mais manipuladores, por causa da sua bondade excessiva.',
                'Alguns são desajeitados.',
                'Quando quebram algo que não era seu, vão fazer de tudo para a pessoa desculpar(mesmo que ela já tenha falado que não foi nada.)',
                'Raramente se irritam ou explodem.',
                'Um dos seus maiores medos é ficar sozinho sem amigos.',
                'Tem dificuldade de dizer "não" para as pessoas.',
                'Querem sempre o bem de todo mundo, mesmo que não mereçam.',
                'Quase não tem inimigos, pois não tem o porque das pessoas os odiarem, e se odeiam é por motivo bobo.',
                'São calorosos e gostam de contato físico, como um abraço ou beijinho no rosto.',
                'Odeiam decepcionar quem contava consigo.'
            ]
        },//Hebe 18
        {
            id: 19,
            perguntas: [
                'Sua personalidade muda constantemente e drasticamente.',
                'Uma hora são as pessoas mais felizes do mundo, outra estão xingando qualquer um que vê pela frente.',
                'As pessoas costumam ser bem cautelosos quando se trata deles, resumidamente um pequeno medo do que eles são capazes.',
                'Acreditam muito em sorte.',
                'Geralmente não são de socializar, tendo poucos amigos, mas amigos verdadeiros.',
                'Gostam de apostar e jogar jogos de azar.',
                'Aparecem do nada na conversa quando cansam da sua própria companhia.',
                'Seus amigos geralmente são muito paciente para conseguirem aguentar - los.',
                'São pessoas claras e objetivas, sempre indo direto no assunto.',
                'Tem sua opinião própria e ninguém consegue mudar.',
                'Não gostam de enrolação.',
                'Nunca vão ter ressentimentos, não adianta chorar pelo leite derramado, o que foi feito tá feito.',
                'Odeiam pessoas que choram por tudo e se lamentam por tudo.',
                'São considerados arrogantes.',
                'Não se deixam manipular pelos outros, sua opinião sempre será a mesma.',
                'Escolhem sempre o método mais seguro e odeiam quebrar as regras.',
                'Não adianta vir com cena sentimental para cima deles, pois não costumam se comover.',
                'Sua vida é basicamente movida a momentos muito bons e muito ruins.',
                'Acredita em amuletos que trazem sorte.',
                'Também acredita em coisas que dão azar, como passar de baixo de uma escada ou quebrar o espelho.',
            ]
        },//Tique 19
        {
            id: 20,
            perguntas: [
                'Seu humor é bem variável.',
                'Costumam acordar com um humor de dormir com um outro.',
                'São extremamente vingativos.',
                'Conhecidos como sábios, que sabem das coisas pois vivenciaram.',
                'Orgulhosos, e seu orgulho é facilmente ferido.',
                'Eles odeiam serem rebaixados ou subestimados.',
                'São frios quando precisam, não tendo dificuldade de colocar a razão na frente da emoção.',
                'Podem ter a fama de "malvados" por causa dessa sua frieza.',
                'As pessoas em volta costumam dizer que eles têm um ar enigmático e misterioso.',
                'Não são muito fãs de falar sobre sentimentos, nem de se abrir com qualquer um.',
                'Mas, não têm dificuldade de se abrir com quem confia de verdade.',
                'São criativos, sempre tendo ideias diferenciadas.',
                'Nunca esquecem de quem os ajudou, e vão tentar retribuir.',
                'Também nunca se esquecem de quem negou ajuda, e tentarão buscar vingança.',
                'Gostam de magia, até procuram saber mais.',
                'São gentis com quem merece tal gentileza.',
                'Não costumam ter uma boa visão de disciplina, são bem difíceis de se controlar, os mais velhos que o digam.',
                'Na maior parte do tempo são introvertidos.',
                'Acreditam fielmente que tudo que vai, um dia volta.',
                'São a primeira alternativa para quem quer algum conselho.'
            ]
        },//Hécate 20
        {
            id: 21,
            perguntas: [
                'Normalmente são frios com tudo e todos.',
                'Explodem muito facilmente quando a situação foge do controle.',
                'Mas, quando está tudo em ordem, costumam ser calmos, e essa calmaria chega até ser assustadora.',
                'A personalidade é forte, vivem todas as emoções com intensidade.',
                'São instáveis, então melhor não provocar muito.',
                'Considerados insensíveis.',
                'Geralmente calmos e centrados, nunca colocam a emoção na frente da razão.',
                'Pensam somente na sua família e amigos, raramente vão se preocupar com qualquer um.',
                'Tomam as melhores decisões justamente por pensar friamente.',
                'No geral, são pessoas boas que não desejam mal gratuito.',
                'Não cutuque a onça com vara curta, isso é o que mais define eles.',
                'Apenas um olhar deles pode assustar muita gente.',
                'É difícil relaxar muito com a companhia deles, pois o medo de que eles mudem drasticamente é grande.',
                'Gostam de que tudo esteja sobre seu controle.',
                'A ideia de receber ordens não lhe agrada muito, mas tudo bem, desde que a pessoa seja realmente uma boa líder.',
                'Costumam ser individualistas.',
                'Sempre há alguém que consegue os acalmar, e só escutam aquele alguém.',
                'Ser temido e melhor do que ser amado pelos outros.',
                'Seu senso de humor é um pouquinho mais fechado do que o normal, ou seja, é difícil faze-los rir ou achar algo engraçado.',
                'Fazem de tudo para proteger as pessoas que amam.'
            ]
        },//Eolo 21 
        {
            id: 22,
            perguntas: [
                'Persefone traiu Hades apenas uma vez na vida, tendo um pequeno caso com o mortal "Adonis", desde sua morte(quando ele encontrou o javali de Ares) Persefone jurou não se relacionar com mais ninguem alem de seu marido'
            ]
        },//Persefone 22
        {
            id: 23,
            perguntas: [
                'Depois que Poseidon e Apolo a pediram em casamento, Hestia conversou com Zeus e pediu para permanecer virgem. Seu irmão a respeitava o suficiente para permitir a petição. Poseidon e Apolo gostaram tanto dela que concordaram com sua decisão e juraram punir qualquer um que tentasse cortejá-la no futuro. Hestia portanto, não tem filhos.',
            ]
        },//Héstia 23
        {
            id: 24,
            perguntas: [
                'Mesmo que sejam sociáveis, estão constantemente sofrendo alterações de humor drásticas: enquanto em um momento estão se demonstrando ativos em uma discussão, no outro se tornam tímidos e menos participativos.',
                'Na maioria das vezes tão tímidos, e até sérios, mas não é sempre assim.',
                'Costuma se arrepender de falar algumas coisas, por isso prefere apenas ouvir.',
                'As pessoas têm dificuldade para os entender.',
                'Geralmente, as outras pessoas se afastam deles, porque têm um pouco de medo do jeito que estes possuem.',
                'Podem ser engraçados e divertidos, mas só mostram isso com as pessoas que confiam.',
                'Seu humor pode mudar de uma hora para outra. Em um momento, eles estão felizes, enquanto podem estar frios e ríspidos em outro.',
                'São agradáveis na maior parte do tempo.',
                'Bons para conversar, principalmente por saberem ouvir e só falarem quando necessário.',
                'Costumam ter assunto para dar e vender, quando começam a conversar é difícil parar.',
                'Perdem bastantes amigos por essas alterações de humor, não é qualquer um que consegue entender.',
                'Algumas vezes nem conseguem socializar, pois as pessoas tendem a ter uma imagem ruim de si.',
                'Por ouvirem bastante, sabem de muitas coisas.',
                'Estão sempre atentos ao redor.',
                'Conseguem descobrir quando alguém só está com eles por algum interesse.',
                'Suas histórias podem ser bem loucas e inacreditáveis.',
                'Sabem bastante curiosidades estranhas e até medonhas.',
                'Podem ser bem arrogantes quando não estão de bom humor.',
                'Não é fácil irritá-los, mas quando isso acontece é melhor não ficar por perto.',
                'Não gostam de falsidade.'
            ]
        },//Melinoe 24
        {
            id: 25,
            perguntas: [
                'Mentir já virou uma rotina para eles, e não se sentem mal com isso.',
                'Não gostam de socializar, mas fazem porque é necessário.',
                'São sombrios.',
                'Geralmente gostam de ficar sozinhos, apenas observando.',
                'Fogem das coisas que não lhe interessam.',
                'Não gostam de brincadeiras.',
                'Geralmente calmos e serenos.',
                'Não se irritam com facilidade.',
                'É difícil de alguém conquistar a confiança deles.',
                'Quando acontece, viram extremamente leais aos amigos.',
                'Dariam a vida pelas pessoas que amam, mesmo que não gostem de demonstrar isso.',
                'Dificilmente conseguem fazer eles rirem de algo.',
                'Acham que não têm tempo para diversão, estão mais ocupados em deixar seus amigos felizes do que a si mesmos.',
                'Conseguem mentir facilmente.',
                'Não são de se importar com o que não interessa aos amigos.',
                'Todo mundo costuma dizer que eles são "góticos".',
                'Sua paz interior é praticamente inabalável.',
                'Não são muito de falar palavrão, isso porque não acham necessário.',
                'Se quiserem tentar, conseguem fazer amizades facilmente.'
            ]
        },//Macaria 25   
        {
            id: 26,
            perguntas: [
                'Odeiam se sentir vulneráveis, e quando isso acontece, explodem.',
                'Não gostam que sejam questionados.',
                'Têm dificuldade em mentir, porque quando confrontados, ao invés de inventar uma desculpa, começam a gritar e xingar.',
                'Dificilmente são de sentir pena de alguém.',
                'Conhecidos como maus e sem coração.',
                'Não tão nem aí pra moral, se aquilo é errado, desde que não tenha nenhuma lei impedindo, não tem problema em fazer.',
                'Pessoas rancorosas, o rancor nunca sai da pessoa e parece só aumentar.',
                'Vingativos, não medem esforços para se vingar da pior forma possível.',
                'Quando colocam uma coisa na cabeça, é difícil mudar.',
                'Querem sempre mais e mais, extremamente ambiciosos.',
                'Pensam só em si e não ligam se vai prejudicar outras pessoas.',
                'Vão fazer de tudo pra alcançar o que querem.',
                'Querem liderar, mas sua individualidade e explosão não ajudam.',
                'Gostam de ficar sozinhos por opção.',
                'Odeiam que as pessoas estejam certas e elas não.',
                'Palavrões saem com facilidade.',
                'Não são de pedir desculpas porque dificilmente vão sentir que devem.',
                'São temidos pela maioria das pessoas em volta.',
                'Exalam uma aura má, então dificilmente alguém se aproxima deles pra puxar assunto, e gostam disso.'
            ]
        },//Eris 26
        {
            id: 27,
            perguntas: [
                'São geralmente bem quietos.',
                'Autoritários, mesmo sem perceber estão mandando e pedindo coisas aos outros.',
                'Agem sempre com seriedade.',
                'Odeiam gracinhas e brincadeirinhas, principalmente em momentos inoportunos.',
                'Gostam e muito do silêncio.',
                'São frios e calculistas.',
                'Não têm dificuldade de colocar a razão na frente da emoção.',
                'Estão sempre revirando os olhos.',
                'Muito atentos a tudo.',
                'Quase nada passa despercebido por eles.',
                'Se estressam com facilidade.',
                'Só tratam alguém bem de verdade se for alguém próximo, caso o contrário, tratam com indiferença.',
                'Não costumam se importar se suas decisões vão prejudicar alguém.',
                'São educados, principalmente com adultos, pois querem demonstrar que são confiáveis.',
                'Metido seria uma boa palavra para defini-los.',
                'As pessoas costumam se aproximar por interesse, ou por se sentirem seguras de não estarem no caminho deles.',
                'Ninguém gostaria de estar na lista de inimigos dos filhos de Nix.',
                'Apreciam amizades mais sérias e menos infantis.',
                'Não gostam muito de crianças.',
                'Detestam pessoas alegres e extrovertidas demais.'
            ]
        },//Nix 27
        {
            id: 28,
            perguntas: [
                'São sedutores e adoram receber olhares.',
                'Muitos são narcisistas e se preocupam com a própria aparência.',
                'Se apaixonam fácil, mas de desapaixonam na mesma velocidade.',
                'Fofos, meigos e brincalhões.',
                'Adoram pregar peças e jogar jogos.',
                'Gostam de amizades, desde que elas não lhe atrapalhem e nem os impeçam de seguir seus objetivos.',
                'São populares, adoram ser o centro das atenções.',
                'São extremamente maliciosos e em tudo encontram motivos para tirarem uma casquinha.',
                'Sentimentalmente, se apegam fácil com qualquer um que lhes dê atenção e carinho.',
                'Suas emoções são muito vividas, choram muito, riem muito, todas as emoções são extremas.',
                'Tem uma alma infantil e de criança, não importa a idade.',
                'São bem ciumentos quando se trata de algo que lhes pertence.',
                'Adoram ser o cupido dos outros, principalmente de amigos.',
                'Ficam irritados com facilidade.',
                'São pessoas carinhosas, e que adoram receber carinho igualmente.',
                'Observadores, e sabem de muitas coisas justamente por observar e ouvir.',
                'Leais aos amigos.',
                'Quer saber de quem fulano gosta? Pergunte a eles.',
                'Apreciam a lealdade, podendo até punir quem não cumpre com ela.',
                'Não têm dificuldade de falar sobre seus sentimentos.'
            ]
        }//Eros 28          

        //fzr tbm os deuses:

        //Jano
        //Morfeu
        // Tmolo ( Deus das Montanhas )
        //Quione (Deusa da Neve)
        //Héracles (Deus da Força e da Coragem)
        //Bia (Deusa da Força Física, Autoestima, Violência, Disputas e Ira)
        //Tânato (Deus da Morte)
        //Aristeu (Deus dos Pastores)
        //Anfitrite (Deusa das Águas)
        //Circe (Deusa da Feitiçaria)
        //Ctônico (Deus da Terra)
        //Deimos (Deus do Pânico)
        //Esculápio ( Deus da Medicina )
        //Erínome
        //Faetonte
        //Phobos (Deus da Fobia)
        //Hérpocrates
        //Delfos (Deus dos Óraculos)
        //Lo (Deusa das Ninfas)
        //Hermafrodito (Deus do Sexo Masculino e Feminino)
        //Lissa (Deusa da Raiva e Loucura para Matar)
        //Ênio (Deusa da Guerra)
        //Ismênia
        //Leto (Deusa das Aves)
        //Maia (Deusa Mãe de Hermes)
        //Temis (Deusa da Justiça, Premonição e Sabedoria)
        //Métis
        //Momo
        //Orfeu (Deus da Música)
        //Zagreu (Morto)
        //Pomona (Deusa Romana da Abundância)
        //Bóreas (Deus do Vento-Norte)
        //Noto (Deus do Vento-Sul)
        //Euro (Deus do Vento-Leste)
        //Zéfiro (Deus do Vento-Oeste)


        // https://acampamentomeiosangue.fandom.com/pt/wiki/Deuses_Gregos#Principais_Deuses_e_Deusas_do_Olimpo
        // https://www.significados.com.br/deuses-gregos/
        // http://acampamentomeiosangue-rpg-2-0.weebly.com/chaleacutes.html
        // https://semideusaany.blogspot.com/2020/08/teste-qual-seria-seu-parente-divino.html
    ]
}

module.exports = {
    deuses
}

