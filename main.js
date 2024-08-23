const caixaPrincipal = document.querySelector (".caixa-principal");
const caixaPerguntas = document.querySelector (".caixa-perguntas");
const caixaAlternativas = document.querySelector (".caixa-alternativas");
const caixaResultado= document.querySelector (".caixa-resultado");
const textoResultado= document.querySelector (".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acha que a IA vai ajudar na tomada de decisões da empresa?",
        alternativas: [
            {
                texto: "Sim, pois ela vai tomar decisões na base de rezões e dados",
                afirmacao: "Você é uma pessoa que acredita na tecnologia e num futuro próspero com a IA",
            },
            {
                texto: " Não, só um ser humano sabe da total situação da empresa e como lidar com ela ",
                afirmacao: " Você é uma pessoa que prefere os metódos tradicionais e acredita que precisa pensar no emocional dos clientes e não vê-los apenas como números",
            }
        ]
    },
    {
        enunciado: " Você acha que a IA influencia nos processo criativo? ",
        alternativas: [
            {
                texto: " Sim, porque ela consegui te dar vários pontos de vista diferente sobre determinada ideia ",
                afirmacao: " Você é uma pessoa que tem difiuldade com o processo criativo e utiliza a IA  para auxilia-lo e dar o ponta pé inicial ",
            },
            {
                texto: " Não, ela limita sua criatividade, pois te da sempre respostas prontas sem você ter que pensar  ",
                afirmacao: " Você é uma pessoa que acredita que as melhores ideias vem da mente humana pois somente a mente humana consegue ligar coisas 'sem sentido' e criar ideias únicas e inovadoras ",
            }
        ]
    },
    {
        enunciado: " Pergunta?",
        alternativas: [
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            }
        ]
    },
    {
        enunciado: " Pergunta?",
        alternativas: [
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            }
        ]
    },
    {
        enunciado: " Pergunta?",
        alternativas: [
            {
                texto: " Texto/resposta ",
                afirmacao: "Afirmação",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativas of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativas.texto;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
