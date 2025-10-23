const caixaEnunciado = document.querySelector(".caixa-enunciado");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A IA vai roubar todos os empregos humanos no futuro?",
        alternativas: ["Sim", "Não"]
    },
    {
        enunciado: "A IA pode ser usada para otimizar processos industriais?",
        alternativas: ["Sim", "Não"]
    },
    {
        enunciado: "A IA pode aprender com falhas para mellhorar sua performance?",
        alternativas: ["Sim", "Não"]
    },
    {
        enunciado: "Existem preocupações éticas sobre o uso da IA?",
        alternativas: ["Sim", "Não"]
    }
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    const perguntaAtual = perguntas[atual];
    caixaEnunciado.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = ""; // limpa alternativas anteriores

    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += `Você respondeu "${opcaoSelecionada}" para a pergunta ${atual + 1}. `;
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaEnunciado.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.innerHTML = "";
}

mostraPergunta();