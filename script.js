    // ============ SISTEMA DE MENU ============
    const menuIcon = document.getElementById("menuIcon");
    const menu = document.getElementById("menu");

    menuIcon.addEventListener("click", function(e) {
        e.stopPropagation();
        menu.classList.toggle("active");
        menuIcon.classList.toggle("active");
    });

    document.addEventListener("click", function(e) {
        if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
            menu.classList.remove("active");
            menuIcon.classList.remove("active");
        }
    });

    document.querySelectorAll(".menu-item").forEach(item => {
        item.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-3px)";
        });
        item.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0)";
        });
    });

    const runas = [
        { 
            symbol: "ᚠ", 
            title: "Fehu - Runa da prosperidade, abundância e novos começos", 
            meaning: "Fehu é a runa da riqueza, prosperidade e concretização. Representa bens materiais e recursos tangíveis, mas também a força interna e energia necessária para atrair abundância. Carrega o poder de novos começos, esforço constante e colheita do que foi semeado. Além disso, Fehu fala sobre a importância de gerir bem os recursos adquiridos, sejam materiais ou emocionais, e de partilhar essa prosperidade com os outros, promovendo equilíbrio. É uma runa de boa sorte que aponta para recompensas vindas de trabalho árduo e compromisso."
        },
        { 
            symbol: "ᚢ", 
            title: "Uruz - Runa da força, resistência e transformação", 
            meaning: "Uruz simboliza força, energia vital e resistência. Associada ao auroque, um antigo boi selvagem, evoca poder bruto, coragem e ligação à natureza primitiva. É também uma runa de transformação e regeneração, sugerindo que mudanças profundas estão por vir, mas que exigirão força física, emocional e espiritual para serem enfrentadas. Uruz representa ainda a cura, especialmente no que toca a forças internas e equilíbrio energético."
        },
        { 
            symbol: "ᚦ", 
            title: "Thurisaz - Runa de proteção, desafios e mudança", 
            meaning: "Thurisaz está associada à proteção, desafios e mudança. Embora possa indicar perigo e força destrutiva, simboliza também a capacidade de enfrentar e ultrapassar obstáculos, tornando-se uma runa de defesa contra forças externas. Thurisaz sugere que a adversidade pode ser catalisadora de uma transformação positiva, se enfrentada com coragem. Está ligada a elementos como o trovão e o caos, representando forças que atuam para limpar e abrir espaço ao novo."
        },
        { 
            symbol: "ᚨ", 
            title: "Ansuz - Runa da sabedoria, comunicação e inspiração", 
            meaning: "Ansuz é a runa da comunicação, sabedoria divina e inspiração. Associada ao deus Odin, está ligada à sabedoria ancestral, à arte da comunicação eficaz e ao uso do conhecimento para guiar outros. Ansuz é também uma runa criativa, representando inspiração divina e insights para transformação pessoal. A sua energia favorece a educação, a aprendizagem e a partilha de conhecimento, quer através da palavra, escrita ou outras formas de expressão."
        },
        { 
            symbol: "ᚱ", 
            title: "Raido - Runa da jornada, movimento e mudança de ciclo", 
            meaning: "Raido é a runa da jornada e movimento. Representa viagens físicas, espirituais ou emocionais, simbolizando a passagem por ciclos de transformação. Sugere que novos caminhos se abrem e que é altura de avançar, talvez em direção ao desconhecido, mas promissor. Raido está ligada ao destino e à necessidade de adaptação às mudanças naturais da vida. Indica que um ciclo importante está a completar-se e que novos horizontes surgem."
        },
        { 
            symbol: "ᚲ", 
            title: "Kenaz - Runa da iluminação, criatividade e transformação", 
            meaning: "Kenaz é a runa da iluminação, criatividade e transformação. Associada ao fogo, simboliza tanto destruição como criação, representando a luz que traz clareza à mente e ao coração. Kenaz incentiva a criatividade e a autotransformação, ajudando a iluminar caminhos obscuros e permitindo novos começos. A sua energia auxilia a desvendar mistérios e a encontrar soluções para problemas complexos."
        },
        { 
            symbol: "ᚷ", 
            title: "Gebo - Runa da parceria, equilíbrio e reciprocidade", 
            meaning: "Gebo é a runa de parcerias, trocas e equilíbrio. Simboliza união e reciprocidade, enfatizando o valor de trocas justas e equilíbrio entre dar e receber. É a runa das relações interpessoais, sugerindo que a verdadeira harmonia vem de parcerias saudáveis e de dar sem esperar nada em troca, mas também de saber receber. Relaciona-se com generosidade, amizade e altruísmo."
        },
        { 
            symbol: "ᚺ", 
            title: "Wunjo - Runa da alegria, harmonia e bem-estar", 
            meaning: "Wunjo é a runa da alegria, harmonia e concretização. Representa prazer, felicidade e sucesso, indicando que harmonia e bem-estar estão presentes na vida de quem a recebe. Sugere a chegada de momentos de celebração e alegria genuína, quando conquistas são reconhecidas e a paz interior é alcançada. Wunjo traz energia de plena satisfação, lembrando que a verdadeira felicidade vem de dentro e do equilíbrio com o mundo."
        },
        { 
            symbol: "ᚻ", 
            title: "Hagalaz - Runa da ruptura, destruição e renascimento", 
            meaning: "Hagalaz é a runa da rutura e renascimento. Representa forças naturais que causam destruição, mas que abrem caminho para nova criação. Simboliza a tempestade, mudança repentina e necessidade de adaptação a forças externas incontroláveis. Alerta que algo precisa de ser destruído ou abandonado para permitir o surgimento de renovação e crescimento."
        },
        { 
            symbol: "ᚾ", 
            title: "Nauthiz - Runa da necessidade, resistência e perseverança", 
            meaning: "Nauthiz é a runa da necessidade e resistência. Aponta para dificuldades, mas também para capacidade de superar adversidades. A sua presença sugere que, apesar dos obstáculos, há força interna para persistir e vencer. É a runa da paciência e perseverança, indicando que as lições mais valiosas surgem em tempos de escassez, e que o sucesso pertence a quem não desiste."
        },
        { 
            symbol: "ᛁ", 
            title: "Isa - Runa da estagnação, introspeção e reflexão", 
            meaning: "Isa é a runa da estagnação, congelamento e introspeção. Representa momentos em que tudo parece parado, convidando à reflexão profunda e paciência. Indica que pode ser altura de recuar, repensar estratégias e aguardar condições ideais. Apesar da sua energia lenta, é necessária para introspeção e preparação para mudanças futuras. Sugere a importância de manter-se centrado em tempos incertos."
        },
        { 
            symbol: "ᛃ", 
            title: "Jera - Runa da colheita, ciclos naturais e recompensa", 
            meaning: "Jera é a runa da colheita e ciclos naturais. Simboliza o tempo, renovação e recompensa após esforço contínuo. Relaciona-se com o conceito de karma, sugerindo que o semeado no passado está prestes a ser colhido. Lembra que paciência e trabalho constante trazem frutos no momento certo. Aponta para a continuidade dos ciclos de vida, onde cada fim é um novo início."
        },
        { 
            symbol: "ᛒ", 
            title: "Berkana - Runa do renascimento, crescimento e fertilidade", 
            meaning: "Berkana é a runa do renascimento, crescimento e fertilidade. Associada à natureza e maternidade, simboliza a capacidade de criar e nutrir, seja em gestação literal ou de novas ideias. Fala sobre novos começos, crescimento pessoal e florescimento de potencial, trazendo energias curativas e de desenvolvimento."
        },
        { 
            symbol: "ᛗ", 
            title: "Eihwaz - Runa da proteção, transformação e ligação espiritual", 
            meaning: "Eihwaz é a runa da proteção, transformação e ligação espiritual. Associada à Yggdrasil (Árvore do Mundo), representa crescimento espiritual e sabedoria ancestral. Indica resistência e perseverança perante dificuldades, sendo uma runa de defesa em tempos de crise. Sinaliza que forças espirituais estão a seu favor, ajudando a navegar transições da vida."
        },
        { 
            symbol: "ᛖ", 
            title: "Perthro - Runa do mistério, destino e sorte", 
            meaning: "Perthro é a runa do mistério, destino e sorte. Ligada ao acaso e a forças ocultas que afetam a vida, representa o elemento imprevisível do destino. Lembra que nem tudo pode ser controlado, e que aceitar o desconhecido pode abrir portas a novas oportunidades e revelações."
        },
        { 
            symbol: "ᛇ", 
            title: "Algiz - Runa da proteção, intuição e conexão divina", 
            meaning: "Algiz é a runa da proteção, intuição e ligação divina. Representa o escudo contra forças negativas e a conexão com o espiritual. Sugere que forças superiores o protegem e guiam. Associada ao despertar da consciência espiritual, ajuda a discernir influências positivas e negativas."
        },
        { 
            symbol: "ᛋ", 
            title: "Sowilo - Runa da energia, vitalidade e sucesso", 
            meaning: "Sowilo é a runa da energia, vitalidade e sucesso. Simboliza o poder do sol e da luz, trazendo clareza e inspiração. Indica fluxo de energias positivas para oportunidades de conquistas. Ligada à autoconfiança e liderança, guia para alcançar objetivos com determinação."
        },
        { 
            symbol: "ᛏ", 
            title: "Tiwaz - Runa da justiça, coragem e sacrifício", 
            meaning: "Tiwaz é a runa da justiça, coragem e sacrifício. Representa o deus Týr, simbolizando a coragem para lutar pela verdade, mesmo com desafios pessoais. É a runa da honra e integridade, indicando que os caminhos árduos da justiça são necessários para evolução individual e coletiva."
        },
        { 
            symbol: "ᛚ", 
            title: "Laguz - Runa da intuição, fluxo e emoções", 
            meaning: "Laguz é a runa da intuição, fluxo e emoções. Simboliza água, sonhos e inconsciente, representando a necessidade de confiar na intuição. Associada ao mundo interior e criatividade, sugere ouvir sentimentos para clareza nas decisões. É uma runa de aceitação da vulnerabilidade emocional."
        },
        { 
            symbol: "ᛝ", 
            title: "Inguz - Runa da fertilidade, potencial e conclusão", 
            meaning: "Inguz é a runa da fertilidade, potencial e conclusão. Simboliza a culminação de esforços e o nascimento do novo. Indica condições ideais para concretizar sonhos. Fala sobre o início de uma nova fase de crescimento, seja pessoal ou profissional."
        },
        { 
            symbol: "ᛞ", 
            title: "Dagaz - Runa da transformação, despertar e clareza", 
            meaning: "Dagaz é a runa da transformação e despertar. Simboliza o amanhecer e mudanças radicais que trazem nova perspetiva. Representa superação de desafios através de mudança de consciência. Sugere que um ciclo importante está a terminar, com o despertar para uma nova realidade repleta de possibilidades."
        },
        { 
            symbol: "ᛟ", 
            title: "Othala - Runa do legado, herança e proteção", 
            meaning: "Othala é a runa do legado, herança e proteção. Simboliza raízes familiares, tradições e o conceito de lar. Fala sobre honrar origens, proteger o que é valioso e reconhecer a continuidade entre passado, presente e futuro. Relaciona-se com segurança e fortalecimento de laços familiares e comunitários."
        }
    ];

function sortearRunas() {
    const opcao = document.getElementById("leitura-opcao").value;
    const quantidade = opcao === "cruz" ? 7 : parseInt(opcao, 10);
    const selecionadas = runas.sort(() => 0.5 - Math.random()).slice(0, quantidade);

    document.getElementById("runas-container").innerHTML = selecionadas.map(runa =>
        `<div class="runa">${runa.symbol}</div>`
    ).join("");

    document.getElementById("runas-meanings").innerHTML = selecionadas.map(runa =>
        `<h3>${runa.title}</h3><p>${runa.meaning}</p>`
    ).join("");
}
  
      function sortearRunas() {
        const opcao = document.getElementById("leitura-opcao").value;
        const quantidade = opcao === "cruz" ? 7 : parseInt(opcao, 10);
        const selecionadas = runas.sort(() => 0.5 - Math.random()).slice(0, quantidade);
        const container = document.getElementById("runas-container");
        const resultContainer = document.getElementById("runas-meanings");
        
        container.innerHTML = "";
        resultContainer.innerHTML = "";
  
        selecionadas.forEach(runa => {
          container.innerHTML += `<div class="runa"><div class="runa-title">${runa.symbol}</div></div>`;
          resultContainer.innerHTML += `<h3>${runa.title}</h3><p>${runa.meaning}</p>`;
        });
}
