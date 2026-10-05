/* =====================================
   CONFIGURAÇÕES
===================================== */

const tempoTransicao = 850;


/* =====================================
   TROCAR DE TELA
===================================== */

function mostrarTela(id) {

    const telas = document.querySelectorAll(".tela");

    telas.forEach(tela => {
        tela.classList.remove("ativa");
    });

    const telaEscolhida = document.getElementById(id);

    if (!telaEscolhida) {
        console.error("Tela não encontrada:", id);
        return;
    }

    setTimeout(() => {
        telaEscolhida.classList.add("ativa");
    }, 50);
}


/* =====================================
   ABRIR O PRESENTE
===================================== */

function comecar() {

    mostrarTela("introducao");

}


/* =====================================
   PRÓXIMO CAPÍTULO
===================================== */

function proximoCapitulo(id) {

    mostrarTela(id);

}


/* =====================================
   PARTÍCULAS
===================================== */

function criarParticula() {

    const container =
        document.querySelector(".particles");

    if (!container) return;

    const particula =
        document.createElement("span");

    particula.classList.add("particula");

    particula.innerHTML = "♥";

    particula.style.left =
        Math.random() * 100 + "vw";

    particula.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    particula.style.fontSize =
        (8 + Math.random() * 14) + "px";

    particula.style.opacity =
        (0.15 + Math.random() * 0.35);

    container.appendChild(particula);

    setTimeout(() => {
        particula.remove();
    }, 10000);
}


setInterval(criarParticula, 500);


/* =====================================
   TECLA ENTER
===================================== */

document.addEventListener("keydown", event => {

    if (event.key !== "Enter") return;

    const telaAtual =
        document.querySelector(".tela.ativa");

    if (!telaAtual) return;

    const botao =
        telaAtual.querySelector("button");

    if (botao) {
        botao.click();
    }

});