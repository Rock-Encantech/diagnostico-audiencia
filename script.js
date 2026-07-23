
var app = document.getElementById("app");

var perguntaAtual = 0;
var respostaAtual = null;
var respostas = {
    vinculo: 0,
    presenca: 0
};

// ==============================
// PERGUNTAS
// ==============================
var perguntas = [
    {
        titulo: "Valor percebido",
        pergunta: "Seus clientes percebem valor nas experiências e benefícios oferecidos pelo seu negócio?",
        explicacao: "Considere os diferentes pontos de contato com seus clientes, como compras, programa de relacionamento, aplicativo, atendimento, ofertas e serviços.",
        exemplo: "Benefícios exclusivos, facilidades, vantagens no relacionamento ou serviços que tornam a experiência mais relevante.",
        eixo: "vinculo",
        sim: "Seus clientes percebem valor nas experiências e benefícios oferecidos.",
        nao: "Ainda existem oportunidades para tornar as experiências e benefícios mais relevantes para seus clientes.",
        icone: "gem"
    },
    {
        titulo: "Conhecimento do cliente",
        pergunta: "Você conhece os hábitos e preferências dos seus clientes e utiliza esse conhecimento para criar ações mais relevantes?",
        explicacao: "Considere informações como frequência de compra, categorias de interesse e comportamento de consumo.",
        exemplo: "Utilizar esses dados para criar ofertas, comunicações ou benefícios mais adequados para diferentes perfis.",
        eixo: "vinculo",
        sim: "Você utiliza o conhecimento sobre seus clientes para criar ações mais relevantes.",
        nao: "Ainda existem oportunidades para transformar informações dos clientes em ações mais relevantes.",
        icone: "users"
    },
    {
        titulo: "Personalização",
        pergunta: "Você consegue criar ofertas, benefícios e comunicações mais relevantes para diferentes perfis de clientes?",
        explicacao: "Considere se todos os clientes recebem a mesma abordagem ou se existem ações adaptadas de acordo com suas necessidades e comportamentos.",
        exemplo: "Oferecer uma promoção de uma categoria que aquele cliente costuma comprar ou uma comunicação específica para um determinado perfil.",
        eixo: "vinculo",
        sim: "Você consegue adaptar experiências de acordo com diferentes perfis de clientes.",
        nao: "Ainda existem oportunidades para criar experiências mais personalizadas.",
        icone: "sliders-horizontal"
    },
    {
        titulo: "Relacionamento contínuo",
        pergunta: "Você mantém uma relação com seus clientes além dos momentos de compra?",
        explicacao: "Considere os canais e iniciativas utilizados para continuar presente na rotina dos clientes.",
        exemplo: "Aplicativo, programa de relacionamento, WhatsApp, e-mail, redes sociais, conteúdos, benefícios ou comunicações após uma compra.",
        eixo: "presenca",
        sim: "Você mantém canais e iniciativas que permitem continuar conectado aos seus clientes.",
        nao: "Ainda existem oportunidades para criar pontos de contato além do momento da compra.",
        icone: "message-circle"
    },
    {
        titulo: "Jornada do cliente",
        pergunta: "Você cria oportunidades de relacionamento em diferentes momentos da jornada dos seus clientes?",
        explicacao: "Considere se a relação acontece apenas no momento da compra ou se existem iniciativas antes e depois desse momento.",
        exemplo: "Descoberta de produtos, ofertas personalizadas, acompanhamento pós-compra ou ações para incentivar uma nova visita.",
        eixo: "presenca",
        sim: "Você cria oportunidades de relacionamento em diferentes momentos da jornada.",
        nao: "Ainda existem oportunidades para ampliar o relacionamento antes e depois da compra.",
        icone: "route"
    },
    {
        titulo: "Recorrência",
        pergunta: "Você cria motivos para que seus clientes voltem e continuem escolhendo seu negócio?",
        explicacao: "Considere se existem iniciativas que estimulam frequência e fortalecem a relação no longo prazo.",
        exemplo: "Programas de benefícios, vantagens exclusivas, ofertas personalizadas ou experiências que incentivam o retorno.",
        eixo: "presenca",
        sim: "Você cria iniciativas que fortalecem a frequência e a relação com seus clientes.",
        nao: "Ainda existem oportunidades para criar motivos que incentivem o retorno dos clientes.",
        icone: "repeat"
    }
];

// ==============================
// RESULTADOS
// ==============================
var resultados = {
    "INVISÍVEL": {
        descricao: "Sua empresa ainda está no início da construção de uma relação mais próxima com seus clientes.",
        identificamos: "Hoje, a relação com seus clientes acontece principalmente a partir de <strong>interações pontuais</strong>, com poucas oportunidades de conhecer seus <strong>hábitos, preferências e necessidades</strong>.\n\nSem uma visão mais completa sobre quem são seus clientes e como eles se relacionam com o negócio, fica mais difícil criar <strong>experiências relevantes</strong>, reconhecer diferentes <strong>perfis de clientes</strong> e construir motivos para uma <strong>relação contínua</strong>.",
        acao: "CAPTURAR CONHECIMENTO SOBRE SEUS CLIENTES",
        como: "O primeiro passo é transformar cada interação em uma oportunidade de <strong>aprendizado</strong>.\n\nPara isso, é necessário criar uma base de conhecimento que permita <strong>identificar clientes</strong>, entender seus <strong>comportamentos</strong> e utilizar essas informações para orientar decisões de <strong>relacionamento</strong>.",
        insightRock: {
            titulo: "Transforme interações em conhecimento",
            texto: "Hoje, sua empresa ainda está construindo uma visão mais completa sobre seus clientes. Ao criar canais de identificação e <strong>relacionamento</strong>, é possível transformar interações em dados e gerar novas oportunidades de valor.",
            impacto: "Esse avanço gera impacto direto na capacidade de conhecer e desenvolver a audiência:",
            destaque: "R$ 164,50",
            destaqueTexto: "incremento médio no gasto após o início da utilização do app",
            dado: "Esse resultado mostra que transformar clientes anônimos em uma audiência identificada amplia o potencial de <strong>relacionamento</strong> e geração de valor para o negócio.",
            fonte: "Insights Rock Encantech"
        },
        exemplos: [
            {
                titulo: "Criar uma visão inicial dos clientes",
                icone: "brain",
                itens: "Identificar quem são seus clientes e quais informações são relevantes para o negócio.\nEstruturar dados de cadastro e comportamento de compra.\nUnificar informações disponíveis em diferentes canais."
            },
            {
                titulo: "Incentivar a identificação do cliente",
                icone: "target",
                itens: "Criar benefícios que estimulem o cadastro.\nOferecer vantagens para clientes que compartilham informações.\nTornar a identificação parte natural da jornada."
            },
            {
                titulo: "Transformar dados em aprendizado",
                icone: "bar-chart-3",
                itens: "Analisar frequência de compra, categorias de interesse e comportamento.\nIdentificar diferentes perfis de clientes.\nUsar esses aprendizados para criar experiências mais relevantes."
            }
        ]
    },
    "PICO": {
        descricao: "Sua empresa já cria momentos de conexão com seus clientes, mas ainda existem oportunidades para transformar essas interações em uma relação mais contínua.",
        identificamos: "Hoje, sua empresa já possui iniciativas que geram valor e aproximam seus clientes, mas essas conexões ainda acontecem principalmente em momentos específicos, como uma compra, uma oferta ou uma campanha.\n\nSem uma <strong>jornada</strong> estruturada de <strong>relacionamento</strong>, existem oportunidades de manter a conexão ativa, entender melhor os <strong>comportamentos</strong> dos clientes e criar novos motivos para que eles continuem escolhendo seu negócio.",
        acao: "TRANSFORMAR INTERAÇÕES EM UMA JORNADA CONTÍNUA",
        como: "O próximo passo é ampliar os momentos de contato com seus clientes e criar oportunidades de <strong>relacionamento</strong> antes, durante e depois da compra.\n\nPara isso, é necessário construir uma jornada mais conectada, utilizando o conhecimento dos clientes para criar <strong>experiências relevantes</strong> e fortalecer a relação ao longo do tempo.",
        insightRock: {
            titulo: "Transforme campanhas em relacionamento contínuo",
            texto: "Sua empresa já consegue gerar interação, mas existe uma oportunidade de transformar momentos pontuais em uma relação mais frequente e consistente.",
            impacto: "Essa evolução fortalece a recorrência e aumenta o valor gerado ao longo da jornada:",
            destaque: "6,5",
            destaqueTexto: "frequência média mensal",
            dado: "O indicador representa a <strong>frequência</strong> média mensal observada entre os melhores varejistas analisados pela Rock Encantech. Esse resultado mostra que audiências mais conectadas desenvolvem uma rotina de interação maior com a marca.",
            fonte: "Insights Rock Encantech"
        },
        exemplos: [
            {
                titulo: "Mapear oportunidades na jornada do cliente",
                icone: "brain",
                itens: "Identificar momentos em que sua empresa pode criar novas interações.\nEntender quais etapas possuem maior potencial de relacionamento.\nCriar iniciativas para diferentes momentos da jornada."
            },
            {
                titulo: "Criar motivos para manter a conexão ativa",
                icone: "target",
                itens: "Desenvolver benefícios e experiências que incentivem frequência.\nCriar comunicações relevantes além do momento da compra.\nEstimular novas interações com os clientes."
            },
            {
                titulo: "Utilizar conhecimento para fortalecer a relação",
                icone: "bar-chart-3",
                itens: "Analisar comportamentos e preferências.\nIdentificar oportunidades de engajamento.\nCriar experiências mais relevantes para diferentes perfis."
            }
        ]
    },
    "RUÍDO": {
        descricao: "Sua empresa mantém presença com seus clientes, mas ainda existem oportunidades para transformar comunicação em relacionamento mais relevante.",
        identificamos: "Hoje, sua empresa já possui canais e iniciativas de <strong>relacionamento</strong>, mas essas interações ainda podem evoluir para gerar mais valor para diferentes <strong>perfis de clientes</strong>.\n\nQuando a comunicação não considera <strong>comportamentos</strong>, necessidades e preferências, existe uma oportunidade de criar experiências mais personalizadas e fortalecer a conexão ao longo da jornada.",
        acao: "TRANSFORMAR DADOS EM EXPERIÊNCIAS MAIS RELEVANTES",
        como: "O próximo passo é utilizar o conhecimento dos clientes para criar interações mais conectadas aos seus interesses e necessidades.\n\nPara isso, é necessário transformar informações de <strong>comportamento</strong> em decisões que orientem ofertas, comunicações e experiências mais personalizadas.",
        insightRock: {
            titulo: "Transforme comunicação em relevância",
            texto: "Quando a empresa já possui uma base de clientes, o próximo passo é tornar cada interação mais conectada aos diferentes perfis e <strong>comportamentos</strong>.",
            impacto: "Essa evolução aumenta a capacidade de gerar engajamento e criar hábitos de relacionamento:",
            destaque: "6,3",
            destaqueTexto: "sessões por usuário",
            dado: "Os melhores varejistas analisados pela Rock Encantech alcançam 6,3 sessões por usuário, mostrando o impacto de uma experiência digital capaz de manter o cliente ativo. Esse indicador reforça que relevância não está apenas em comunicar mais, mas em criar motivos para o cliente continuar conectado.",
            fonte: "Insights Rock Encantech"
        },
        exemplos: [
            {
                titulo: "Entender diferentes perfis de clientes",
                icone: "brain",
                itens: "Identificar comportamentos e padrões de consumo.\nCriar grupos com necessidades e interesses semelhantes.\nReconhecer oportunidades específicas para cada perfil."
            },
            {
                titulo: "Personalizar a comunicação",
                icone: "target",
                itens: "Adaptar mensagens conforme o momento do cliente.\nCriar ofertas e benefícios mais relevantes.\nUtilizar diferentes canais de forma mais inteligente."
            },
            {
                titulo: "Medir e evoluir continuamente",
                icone: "bar-chart-3",
                itens: "Acompanhar resultados das iniciativas.\nIdentificar quais experiências geram mais valor.\nAjustar ações com base nos aprendizados."
            }
        ]
    },
    "AUDIÊNCIA ATIVA": {
        descricao: "Sua empresa já constrói uma relação contínua com seus clientes, criando valor ao longo da jornada.",
        identificamos: "Hoje, sua empresa combina <strong>conhecimento dos clientes</strong>, canais de <strong>relacionamento</strong> e experiências relevantes para fortalecer a conexão.\n\nOs clientes encontram motivos para continuar escolhendo seu negócio porque existe uma relação construída a partir de valor, reconhecimento e experiências mais próximas.",
        acao: "AMPLIAR CONHECIMENTO E EVOLUIR A PERSONALIZAÇÃO",
        como: "O próximo passo é evoluir ainda mais o uso dos dados e aprendizados dos clientes para antecipar necessidades e criar experiências cada vez mais relevantes.\n\nPara isso, é necessário transformar conhecimento em novas oportunidades de <strong>relacionamento</strong>, aumentando a relevância das interações e fortalecendo a audiência no longo prazo.",
        insightRock: {
            titulo: "Maximize o valor da sua audiência",
            texto: "Quando a relação com os clientes já é contínua, o próximo desafio é ampliar o valor dessa audiência utilizando os aprendizados gerados pelo <strong>relacionamento</strong>.",
            impacto: "Essa maturidade aumenta a capacidade de manter clientes ativos e gerar valor no longo prazo:",
            destaque: "86%",
            destaqueTexto: "retenção média mensal",
            dado: "Indicador observado entre os melhores varejistas analisados pela Rock Encantech. Esse dado demonstra que audiências maduras conseguem construir <strong>relações</strong> mais consistentes e manter clientes engajados por mais tempo.",
            fonte: "Insights Rock Encantech"
        },
        exemplos: [
            {
                titulo: "Expandir a personalização",
                icone: "brain",
                itens: "Criar experiências diferentes para diferentes perfis.\nUtilizar comportamento e preferências para orientar ações.\nDesenvolver comunicações mais relevantes."
            },
            {
                titulo: "Criar novas oportunidades de relacionamento",
                icone: "target",
                itens: "Identificar novos momentos de conexão.\nDesenvolver benefícios e experiências baseados em comportamento.\nAmpliar canais e pontos de contato."
            },
            {
                titulo: "Evoluir continuamente com dados",
                icone: "bar-chart-3",
                itens: "Medir resultados das iniciativas.\nIdentificar novos aprendizados sobre os clientes.\nAprimorar experiências de forma contínua."
            }
        ]
    }
};

// ==============================
// UTILITÁRIOS
// ==============================
function atualizarProgresso(pct) {
    var fill = document.querySelector('.progress-fill');
    if (fill) fill.style.width = pct + '%';
}

function toggleExpand(btn, contentId) {
    var content = document.getElementById(contentId);
    if (!content) return;
    btn.classList.toggle('open');
    content.classList.toggle('show');
}

// ==============================
// RENDER — HOME
// ==============================
function renderHome() {
    atualizarProgresso(0);

    app.innerHTML = ''
        + '<div class="bg-decor"><div class="orb-top"></div><div class="orb-right"></div><div class="gradient-bottom"></div></div>'
        + '<main class="page">'
        + '<div class="home-content">'
        + '  <span class="tag">MATRIZ AUDIÊNCIA ATIVA®</span>'
        + '  <h1>Diagnóstico de <span class="accent">Audiência</span></h1>'
        + '  <p class="subtitle">Entenda em poucos minutos o <span class=\"accent-yellow\">nível de relacionamento</span> da sua empresa com seus clientes e descubra os próximos passos para transformar audiência em <strong><span class=\"accent-yellow\">valor para o negócio</strong>.</p></span>'
        + '  <div class="expandable">'
        + '    <button class="expandable-toggle" onclick="toggleExpand(this, \'audiencia-content\')">'
        + '      <i data-lucide="help-circle"></i> O que é audiência?'
        + '      <i data-lucide="chevron-down"></i>'
        + '    </button>'
        + '    <div class="expandable-content" id="audiencia-content">'
        + '      <p>Audiência é mais do que um grupo de clientes. É a relação construída entre empresas e pessoas a partir de <strong>conhecimento</strong>, conexão e valor.</p>'
        + '      <p>Quando uma empresa <strong>entende seus clientes</strong>, seus <strong>comportamentos</strong> e suas <strong>necessidades</strong>, ela <strong>cria experiências mais relevantes e fortalece uma relação contínua ao longo do tempo.</strong></p>'
        + '    </div>'
        + '  </div>'
        + '  <button class="primary-button" onclick="renderBlocoA()">COMEÇAR MEU DIAGNÓSTICO →</button>'
        + '</div>'
        + '<div class="home-card">'
        + '  <h2>Como funciona?</h2>'
        + '  <div class="step-item"><span class="step-num">01</span><div><h3>Responda algumas perguntas</h3><p>Avalie como sua empresa conhece, se relaciona e cria experiências para seus clientes.</p></div></div>'
        + '  <div class="step-item"><span class="step-num">02</span><div><h3>Descubra seu estágio atual</h3><p>Entenda sua posição na Matriz Audiência Ativa®.</p></div></div>'
        + '  <div class="step-item"><span class="step-num">03</span><div><h3>Receba direcionamentos</h3><p>Identifique oportunidades para fortalecer <strong>relacionamento</strong> e gerar mais valor.</p></div></div>'
        + '  <div class="features-row">'
        + '    <div class="feature-item"><i data-lucide="clock"></i><span>Cerca de 2 minutos</span></div>'
        + '    <div class="feature-item"><i data-lucide="clipboard-check"></i><span>Diagnóstico guiado</span></div>'
        + '    <div class="feature-item"><i data-lucide="zap"></i><span>Resultado imediato</span></div>'
        + '  </div>'
        + '</div>'
        + '</main>';

    lucide.createIcons();
}

// ==============================
// RENDER — BLOCO A
// ==============================
function renderBlocoA() {
    atualizarProgresso(10);

    app.innerHTML = ''
        + '<div class="bg-decor"><div class="orb-top"></div><div class="orb-right"></div><div class="gradient-bottom"></div></div>'
        + '<main class="page">'
        + '<div class="block-content">'
        + '  <p class="progress-text">BLOCO A DE 2</p>'
        + '  <span class="tag">BLOCO A</span>'
        + '  <h1>Intensidade do <span class="accent">vínculo</span></h1>'
        + '  <p class="subtitle"><span class=\"accent-pink\">A força da relação entre você e seus clientes.</span></p>'
        + '  <p class="description">Este eixo ajuda a entender como você conhece seus clientes, entende suas necessidades e cria experiências que geram valor ao longo dessa relação.</p>'
        + '  <button class="primary-button" onclick="renderPergunta()">RESPONDER PERGUNTAS →</button>'
        + '  <div class="privacy-note"><i data-lucide="shield-check"></i> Suas respostas são confidenciais e usadas apenas para gerar seu diagnóstico.</div>'
        + '</div>'
        + '<div class="topics-card">'
        + '  <h3>Você responderá perguntas sobre:</h3>'
        + '  <div class="topic-row"><div class="topic-icon"><i data-lucide="gem"></i></div><div class="topic-text"><strong><span class=\"accent-pink\">Valor percebido</span></strong><p>Entender se os clientes encontram valor nas experiências e benefícios oferecidos.</p></div></div>'
        + '  <div class="topic-row"><div class="topic-icon"><i data-lucide="users"></i></div><div class="topic-text"><strong><span class=\"accent-pink\">Conhecimento do cliente</span></strong><p>Avaliar se você conhece hábitos e preferências e utiliza esse conhecimento para criar ações mais relevantes.</p></div></div>'
        + '  <div class="topic-row"><div class="topic-icon"><i data-lucide="sliders-horizontal"></i></div><div class="topic-text"><strong><span class=\"accent-pink\">Personalização</span></strong><p>Identificar se você consegue adaptar ofertas, benefícios e comunicações para diferentes perfis de clientes.</p></div></div>'
        + '</div>'
        + '</main>';

    lucide.createIcons();
}

// ==============================
// RENDER — BLOCO B
// ==============================
function renderBlocoB() {
    atualizarProgresso(50);

    app.innerHTML = ''
        + '<div class="bg-decor"><div class="orb-top"></div><div class="orb-right"></div><div class="gradient-bottom"></div></div>'
        + '<main class="page">'
        + '<div class="block-content">'
        + '  <p class="progress-text">BLOCO B DE 2</p>'
        + '  <span class="tag">BLOCO B</span>'
        + '  <h1>Consistência da <span class="accent">presença</span></h1>'
        + '  <p class="subtitle"><span class=\"accent-purple\">A capacidade de manter uma relação contínua com seus clientes.</span></p>'
        + '  <p class="description">Este eixo ajuda a entender como você mantém a conexão com seus clientes além de momentos pontuais, criando oportunidades de relacionamento ao longo da jornada.</p>'
        + '  <button class="primary-button" onclick="renderPergunta()">RESPONDER PERGUNTAS →</button>'
        + '  <div class="privacy-note"><i data-lucide="shield-check"></i> Suas respostas são confidenciais e usadas apenas para gerar seu diagnóstico.</div>'
        + '</div>'
        + '<div class="topics-card">'
        + '  <h3>Você responderá perguntas sobre:</h3>'
        + '  <div class="topic-row"><div class="topic-icon rosa"><i data-lucide="message-circle"></i></div><div class="topic-text"><strong><span class=\"accent-purple\">Relacionamento contínuo</span></strong><p>Entender se existem canais e iniciativas que mantêm a conexão ativa.</p></div></div>'
        + '  <div class="topic-row"><div class="topic-icon rosa"><i data-lucide="route"></i></div><div class="topic-text"><strong><span class=\"accent-purple\">Jornada do cliente</span></strong><p>Avaliar se existem oportunidades de relacionamento em diferentes momentos.</p></div></div>'
        + '  <div class="topic-row"><div class="topic-icon rosa"><i data-lucide="repeat"></i></div><div class="topic-text"><strong><span class=\"accent-purple\">Recorrência</span></strong><p>Identificar se existem motivos para os clientes continuarem escolhendo seu negócio.</p></div></div>'
        + '</div>'
        + '</main>';

    lucide.createIcons();
}

// ==============================
// RENDER — PERGUNTA
// ==============================
function renderPergunta() {
    var pergunta = perguntas[perguntaAtual];
    var blocoLabel = (perguntaAtual < 3) ? 'BLOCO A' : 'BLOCO B';
    var pct = Math.round(((perguntaAtual + 1) / perguntas.length) * 80) + 10;
    atualizarProgresso(pct);

    app.innerHTML = ''
        + '<div class="bg-decor"><div class="orb-top"></div><div class="orb-right"></div><div class="gradient-bottom"></div></div>'
        + '<main class="page-single">'
        + '<div class="question-header">'
        + '  <span class="question-progress">PERGUNTA ' + (perguntaAtual + 1) + ' DE ' + perguntas.length + '</span>'
        + '  <span class="tag">' + blocoLabel + '</span>'
        + '</div>'
        + '<div class="question-tag"><i data-lucide="' + pergunta.icone + '"></i> ' + pergunta.titulo + '</div>'
        + '<h2 class="question-title">' + pergunta.pergunta + '</h2>'
        + '<button class="question-info-toggle" onclick="toggleExpand(this, \'info-content\')">'
        + '  <i data-lucide="info"></i> Para responder'
        + '  <i data-lucide="chevron-down"></i>'
        + '</button>'
        + '<div class="question-info-content" id="info-content">'
        + '  <p>' + pergunta.explicacao + '</p>'
        + '  <p><strong>Exemplo:</strong> ' + pergunta.exemplo + '</p>'
        + '</div>'
        + '<div class="answers-grid">'
        + '  <button class="answer-card" onclick="selecionarEAvancar(this, \'sim\')">'
        + '    <strong>SIM</strong>'
        + '    <p>' + pergunta.sim + '</p>'
        + '  </button>'
        + '  <button class="answer-card" onclick="selecionarEAvancar(this, \'nao\')">'
        + '    <strong>NÃO</strong>'
        + '    <p>' + pergunta.nao + '</p>'
        + '  </button>'
        + '</div>'
        + '</main>';

    lucide.createIcons();
}

// ==============================
// LÓGICA — SELECIONAR E AVANÇAR
// ==============================
function selecionarEAvancar(elemento, resposta) {
    // Visual feedback
    var cards = document.querySelectorAll('.answer-card');
    for (var i = 0; i < cards.length; i++) {
        cards[i].classList.remove('selected');
    }
    elemento.classList.add('selected');

    // Soma resposta
    var pergunta = perguntas[perguntaAtual];
    if (resposta === 'sim') {
        respostas[pergunta.eixo]++;
    }

    // Avança após breve delay (feedback visual)
    setTimeout(function() {
        perguntaAtual++;

        // Entra no Bloco B
        if (perguntaAtual === 3) {
            renderBlocoB();
            return;
        }

        // Final — mostra resultado
        if (perguntaAtual >= perguntas.length) {
            renderResultado();
            return;
        }

        // Próxima pergunta
        renderPergunta();
    }, 400);
}


// ==============================
// RENDER — RESULTADO
// ==============================
function renderResultado() {
    atualizarProgresso(100);

    var scoreA = respostas.vinculo;
    var scoreB = respostas.presenca;

    // Determinar estágio
    var estagio = "";
    if (scoreA >= 2 && scoreB >= 2) estagio = "AUDIÊNCIA ATIVA";
    else if (scoreA >= 2 && scoreB < 2) estagio = "PICO";
    else if (scoreA < 2 && scoreB >= 2) estagio = "RUÍDO";
    else estagio = "INVISÍVEL";

    var resultado = resultados[estagio];

    // Calcular stroke-dashoffset para os círculos (276.5 é o perímetro)
    var offsetA = 276.5 - (scoreA / 3) * 276.5;
    var offsetB = 276.5 - (scoreB / 3) * 276.5;

    // Determinar qual quadrante é ativo (posição no grid)
    // Grid: [PICO, AUDIÊNCIA ATIVA, INVISÍVEL, RUÍDO]
    var quadranteClasses = ['', '', '', ''];
    if (estagio === 'PICO') quadranteClasses[0] = ' active';
    else if (estagio === 'AUDIÊNCIA ATIVA') quadranteClasses[1] = ' active';
    else if (estagio === 'INVISÍVEL') quadranteClasses[2] = ' active';
    else if (estagio === 'RUÍDO') quadranteClasses[3] = ' active';

    // Montar os passos de "Como evoluir"
    var stepsHtml = '';
    for (var i = 0; i < resultado.exemplos.length; i++) {
        var ex = resultado.exemplos[i];
        var itensArr = ex.itens.split('\n');
        var itensHtml = '';
        for (var j = 0; j < itensArr.length; j++) {
            itensHtml += '<p>' + itensArr[j] + '</p>';
        }
        stepsHtml += ''
            + '<div class="evolve-step">'
            + '  <div class="evolve-step-header">'
            + '    <span class="evolve-step-num">0' + (i + 1) + '</span>'
            + '    <div class="evolve-step-icon"><i data-lucide="' + ex.icone + '"></i></div>'
            + '  </div>'
            + '  <h4>' + ex.titulo + '</h4>'
            + '  ' + itensHtml
            + '</div>';
    }

    // Montar identificamos (substituir \n por </p><p>)
    // Quebra de página para o PDF (página 2)
var quebraPagina2 = '<div style="page-break-before: always; break-before: page;"></div>';
    var identificamosHtml = '<p>' + resultado.identificamos.replace(/\n\n/g, '</p><p>').replace(/\n/g, '</p><p>') + '</p>';

    // Montar como (substituir \n por </p><p>)
    var quebraPagina3 = '<div style="page-break-before: always; break-before: page;"></div>';
    var comoHtml = '<p class="evolve-desc">' + resultado.como.replace(/\n\n/g, '</p><p class="evolve-desc">').replace(/\n/g, '</p><p class="evolve-desc">') + '</p>';

    app.innerHTML = ''
        + '<div class="bg-decor"><div class="orb-top"></div><div class="orb-right"></div><div class="gradient-bottom"></div></div>'
        + '<main class="page-resultado" id="resultado-content">'

        // HEADER
        + '<div class="result-header">'
        + '  <span class="tag">SEU DIAGNÓSTICO</span>'
        + '  <h1>' + estagio + '</h1>'
        + '  <p class="desc">' + resultado.descricao + '</p>'
        + '</div>'

        // SCORES
        + '<div class="scores">'
        + '  <div class="score-card">'
        + '    <div class="score-circle">'
        + '      <svg class="ring" viewBox="0 0 100 100">'
        + '        <circle class="bg-ring" cx="50" cy="50" r="44"/>'
        + '        <circle class="fill-ring fill-ring-a" cx="50" cy="50" r="44" style="stroke-dashoffset: ' + offsetA + '"/>'
        + '      </svg>'
        + '      <div class="score-value">' + scoreA + '<span>/3</span></div>'
        + '    </div>'
        + '    <div class="score-info">'
        + '      <h3><i data-lucide="heart"></i> Intensidade do Vínculo</h3>'
        + '      <p>A <strong>força da relação</strong> entre você e seus clientes.</p>'
        + '    </div>'
        + '  </div>'
        + '  <div class="score-card">'
        + '    <div class="score-circle">'
        + '      <svg class="ring" viewBox="0 0 100 100">'
        + '        <circle class="bg-ring" cx="50" cy="50" r="44"/>'
        + '        <circle class="fill-ring fill-ring-b" cx="50" cy="50" r="44" style="stroke-dashoffset: ' + offsetB + '"/>'
        + '      </svg>'
        + '      <div class="score-value">' + scoreB + '<span>/3</span></div>'
        + '    </div>'
        + '    <div class="score-info">'
        + '      <h3><i data-lucide="radio"></i> Consistência da Presença</h3>'
        + '      <p>A capacidade de manter uma <strong>relação contínua</strong> com seus clientes.</p>'
        + '    </div>'
        + '  </div>'
        + '</div>'

        // MATRIZ
        + '<div class="matrix-section">'
        + '  <h2><i data-lucide="layout-grid"></i> Sua posição na Matriz Audiência Ativa®</h2>'
        + '  <div class="matrix-wrapper">'
        + '    <div class="axis-y">INTENSIDADE DO VÍNCULO</div>'
        + '    <div class="matrix-content">'
        + '      <div class="matrix-grid">'
        + '        <div class="quadrant' + quadranteClasses[0] + '">'
        + (quadranteClasses[0] ? '          <div class="stage-label">SEU ESTÁGIO ATUAL</div>' : '')
        + '          <div class="q-icon"><i data-lucide="trending-up"></i></div>'
        + '          <strong>PICO</strong>'
        + '          <p>A conexão acontece em momentos específicos.</p>'
        + '        </div>'
        + '        <div class="quadrant' + quadranteClasses[1] + '">'
        + (quadranteClasses[1] ? '          <div class="stage-label">SEU ESTÁGIO ATUAL</div>' : '')
        + '          <div class="q-icon"><i data-lucide="users"></i></div>'
        + '          <strong>AUDIÊNCIA ATIVA</strong>'
        + '          <p>O cliente encontra valor e mantém relação.</p>'
        + '        </div>'
        + '        <div class="quadrant' + quadranteClasses[2] + '">'
        + (quadranteClasses[2] ? '          <div class="stage-label">SEU ESTÁGIO ATUAL</div>' : '')
        + '          <div class="q-icon"><i data-lucide="eye-off"></i></div>'
        + '          <strong>INVISÍVEL</strong>'
        + '          <p>O cliente ainda possui baixa conexão.</p>'
        + '        </div>'
        + '        <div class="quadrant' + quadranteClasses[3] + '">'
        + (quadranteClasses[3] ? '          <div class="stage-label">SEU ESTÁGIO ATUAL</div>' : '')
        + '          <div class="q-icon"><i data-lucide="megaphone"></i></div>'
        + '          <strong>RUÍDO</strong>'
        + '          <p>Existe comunicação, mas pouco vínculo.</p>'
        + '        </div>'
        + '      </div>'
        + '      <div class="axis-x">'
        + '        <span>BAIXA</span>'
        + '        <strong>CONSISTÊNCIA DA PRESENÇA</strong>'
        + '        <span>ALTA</span>'
        + '      </div>'
        + '    </div>'
        + '  </div>'
        + '</div>'

        // O QUE IDENTIFICAMOS
        + '<div class="identified-section">'
        + '  <h2><i data-lucide="lightbulb"></i> O QUE IDENTIFICAMOS</h2>'
        + '  ' + identificamosHtml
        + '</div>'

        // COMO EVOLUIR
        + '<div class="evolve-section">'
        + '  <h2><i data-lucide="rocket"></i> COMO EVOLUIR</h2>'
        + '  <div class="evolve-action">' + resultado.acao + '</div>'
        + '  ' + comoHtml
        + '  <div class="evolve-steps">' + stepsHtml + '</div>'
        + '</div>'

        // INSIGHTS ROCK ENCANTECH
        + '<div class="insights-rock-section">'
        + '  <span class="insights-tag"><i data-lucide="sparkles"></i> INSIGHTS ROCK ENCANTECH</span>'
        + '  <h3>' + resultado.insightRock.titulo + '</h3>'
        + '  <p class="insight-text">' + resultado.insightRock.texto + '</p>'
        + '  <p class="insight-text">' + resultado.insightRock.impacto + '</p>'
        + '  <div class="insight-number-box">'
        + '    <span class="number">' + resultado.insightRock.destaque + '</span>'
        + '    <span class="number-desc">' + resultado.insightRock.destaqueTexto + '</span>'
        + '  </div>'
        + '  <p class="insight-dado">' + resultado.insightRock.dado + '</p>'
        + '  <p class="insight-fonte">Fonte: ' + resultado.insightRock.fonte + '</p>'
        + '</div>'

        // CTA FINAL
        + '<div class="cta-section">'
        + '  <div class="cta-text">'
        + '    <h3>Quer evoluir sua audiência?</h3>'
        + '    <p>Transforme conhecimento sobre seus clientes em estratégias de <strong>relacionamento</strong> mais inteligentes.</p>'
        + '  </div>'
        + '  <div class="cta-buttons">'
        + '    <a href="#" id="link-especialista" class="btn-cta">FALAR COM ESPECIALISTA →</a>'
        + '    <button class="btn-secondary-cta" onclick="baixarPDF()">'
        + '      <i data-lucide="download"></i>'
        + '      BAIXAR MEU DIAGNÓSTICO'
        + '    </button>'
        + '  </div>'
        + '</div>'

        + '</main>';

    lucide.createIcons();
}

// ==============================
// BAIXAR PDF
// ==============================

function baixarPDF() {
    var elemento = document.getElementById('resultado-content');
    if (!elemento) return;

    // Esconde CTA
    var ctaSection = elemento.querySelector('.cta-section, .cta-rock, .section-cta');
    if (ctaSection) ctaSection.style.display = 'none';

    window.scrollTo(0, 0);

    var opcoes = {
        margin: 0,
        filename: 'diagnostico-audiencia.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            scrollX: 0,
            scrollY: 0,
            backgroundColor: '#000000',
            ignoreElements: function(el) {
                return el.classList && el.classList.contains('cta-section');
            },
            onclone: function(clonedDoc) {
                // Injeta estilo no clone para resetar TUDO
                var style = clonedDoc.createElement('style');
                style.textContent = ''
                    + '* { transition: none !important; animation: none !important; backdrop-filter: none !important; -webkit-backdrop-filter: none !important; }'
                    + 'body { background: #000000 !important; margin: 0 !important; padding: 0 !important; overflow: visible !important; width: 1200px !important; }'
                    + '.bg-decor, .header, .progress-bar, .bottom-line { display: none !important; }'
                    + '#app { display: block !important; width: 100% !important; max-width: 100% !important; margin: 0 !important; padding: 0 !important; }'
                    + '.page-resultado, .page { display: block !important; width: 100% !important; max-width: 100% !important; margin: 0 !important; padding: 48px !important; background: #000000 !important; position: relative !important; left: 0 !important; top: 0 !important; }'
                    + '.glass-card, .score-card, .matrix-section, .identified-section, .evolve-section, .insights-rock-section, .home-card, .topics-card, .evolve-step, .quadrant, .insight-number-box { background: rgba(255,255,255,0.06) !important; backdrop-filter: none !important; -webkit-backdrop-filter: none !important; }'
                    + '.cta-section { display: none !important; }'
                    + 'section, .evolve-step, .score-card, .insight-number-box, .resultado-card, .evolve-section, .insights-rock-section { page-break-inside: avoid !important; break-inside: avoid !important; }';
                clonedDoc.head.appendChild(style);

                // Reseta body do clone
                var clonedBody = clonedDoc.body;
                clonedBody.style.background = '#000000';
                clonedBody.style.margin = '0';
                clonedBody.style.padding = '0';
                clonedBody.style.overflow = 'visible';
                clonedBody.style.width = '1200px';

                // Reseta o elemento resultado
                var clonedEl = clonedDoc.getElementById('resultado-content');
                if (clonedEl) {
                    clonedEl.style.position = 'relative';
                    clonedEl.style.left = '0';
                    clonedEl.style.top = '0';
                    clonedEl.style.margin = '0';
                    clonedEl.style.padding = '48px';
                    clonedEl.style.width = '1200px';
                    clonedEl.style.maxWidth = '1200px';
                    clonedEl.style.overflow = 'visible';
                    clonedEl.style.background = '#000000';
                }
            }
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        },
        pagebreak: {
            mode: ['css', 'legacy'],
            avoid: [
                '.score-card',
                '.matrix-section',
                '.identified-section',
                '.evolve-section',
                '.evolve-step',
                '.insight-number-box',
                '.insights-rock-section'
            ]
        }
    };

    html2pdf()
        .set(opcoes)
        .from(elemento)
        .save()
        .then(function() {
            if (ctaSection) ctaSection.style.display = '';
        })
        .catch(function() {
            if (ctaSection) ctaSection.style.display = '';
        });
}


// ==============================
// INICIAR
// ==============================
iniciar();

function iniciar() {
    perguntaAtual = 0;
    respostaAtual = null;
    respostas = { vinculo: 0, presenca: 0 };
    renderHome();
}

