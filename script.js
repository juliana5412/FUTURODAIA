const caixaPerguntas = document.querySelector(".caixa-perguntas");
const textoResultado = document.querySelector(".texto-resultado");
const botaoFinalizar = document.getElementById("botaoFinalizar");

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

let respostas = {}; // Guarda as respostas do usuário

// Mostra todas as perguntas na tela
function mostrarPerguntas() {
    perguntas.forEach((pergunta, index) => {
        const bloco = document.createElement("div");
        bloco.classList.add("bloco-pergunta");

        const titulo = document.createElement("p");
        titulo.textContent = `${index + 1}. ${pergunta.enunciado}`;
        bloco.appendChild(titulo);

        const botoes = document.createElement("div");
        botoes.classList.add("botoes-alternativas");

        pergunta.alternativas.forEach(alternativa => {
            const botao = document.createElement("button");
            botao.textContent = alternativa;

            botao.addEventListener("click", () => {
                // Remove seleção anterior da mesma pergunta
                const botoesMesmaPergunta = botoes.querySelectorAll("button");
                botoesMesmaPergunta.forEach(btn => btn.classList.remove("selecionado"));
                botao.classList.add("selecionado");

                // Salva a resposta escolhida
                respostas[index] = alternativa;
            });

            botoes.appendChild(botao);
        });

        bloco.appendChild(botoes);
        caixaPerguntas.appendChild(bloco);
    });
}

// Exibe o resultado final
function finalizarQuiz() {
    if (Object.keys(respostas).length < perguntas.length) {
        textoResultado.textContent = "⚠️ Responda todas as perguntas antes de finalizar!";
        textoResultado.style.color = "red";
        return;
    }

    let sim = Object.values(respostas).filter(r => r === "Sim").length;
    let nao = perguntas.length - sim;

    textoResultado.style.color = "black";

    if (sim > nao) {
        textoResultado.textContent = `Você é uma pessoa otimista sobre a IA! (${sim} respostas "Sim" e ${nao} "Não") 🚀`;
    } else if (nao > sim) {
        textoResultado.textContent = `Você tem uma visão mais cautelosa sobre a IA. (${sim} "Sim" e ${nao} "Não") 🤖`;
    } else {
        textoResultado.textContent = `Você está equilibrado entre os dois lados da IA! (${sim} "Sim" e ${nao} "Não") ⚖️`;
    }
}

// Eventos
botaoFinalizar.addEventListener("click", finalizarQuiz);

// Inicializa o questionário
mostrarPerguntas();
