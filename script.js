const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você costuma usar várias vezes inteligência artificial?",
        alternativas: ["Sim", "Não"]
    },
    {
        enunciado: "A IA pode ser usada para otimizar processos industriais?",
        alternativas: ["Sim", "Não"]
    },
    {
        enunciado: "Existem preocupações éticas sobre o uso de IA?",
        alternativas: ["Sim", "Não"]
    },
    {
        enunciado: "A IA pode aprender com falhas para melhorar sua performance?",
        alternativas: ["Sim", "Não"]
    },
    {
        enunciado: "Você acredita que a IA pode ajudar no futuro da humanidade?",
        alternativas: ["Sim", "Não"]
    }
];

let atual = 0; // índice da pergunta atual
let perguntaAtual;

// Função para mostrar a pergunta atual
function mostraPergunta() {
    caixaAlternativas.innerHTML = ""; // limpa as alternativas antigas

    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;

    mostraAlternativas();
}

// Função para mostrar as alternativas
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        botaoAlternativa.classList.add("botao-alternativa");

        botaoAlternativa.addEventListener("click", () => {
            atual++;
            mostraPergunta();
        });

        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

// Função para mostrar o resultado final
function mostraResultado() {
    caixaPerguntas.textContent = "Fim do questionário!";
    caixaAlternativas.innerHTML = "";
    textoResultado.textContent = "Obrigado por participar! Suas respostas ajudarão a moldar o futuro da IA.";
}

// Inicia o quiz
mostraPergunta();
