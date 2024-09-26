// Selecione todos os botões de resposta
const botoesResposta = document.querySelectorAll('.btn-resposta');
const passos = document.querySelectorAll('.passo');
const resultado = document.getElementById('resultado');
const passoVitoria = document.getElementById('passo-9');
const botaoReiniciar = document.getElementById('reiniciar');
let passoAtual = 0;
let acertos = 0;

// Função para mostrar o próximo passo
function mostrarPasso() {
    passos.forEach((passo, index) => {
        passo.style.display = index === passoAtual ? 'block' : 'none';
    });
}

// Função para reiniciar o quiz
function reiniciarQuiz() {
    passoAtual = 0;
    acertos = 0;
    resultado.style.display = 'none';
    passoVitoria.style.display = 'none';
    botaoReiniciar.style.display = 'none';
    mostrarPasso();
}

// Evento de clique para as respostas
botoesResposta.forEach(botao => {
    botao.addEventListener('click', function() {
        const correta = this.dataset.correta === 'true';
        if (correta) {
            acertos++;
            passoAtual++;
            if (passoAtual < passos.length - 1) {
                mostrarPasso();
            } else {
                passoVitoria.style.display = 'block';
                passos.forEach(passo => passo.style.display = 'none');
                botaoReiniciar.style.display = 'block';
            }
        } else {
            resultado.style.display = 'block';
            passos.forEach(passo => passo.style.display = 'none');
            botaoReiniciar.style.display = 'block';
        }
    });
});

// Adicionando evento de clique para o botão de reiniciar
botaoReiniciar.addEventListener('click', reiniciarQuiz);

// Mostrar o primeiro passo ao carregar
mostrarPasso();
