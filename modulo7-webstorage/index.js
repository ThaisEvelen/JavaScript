
let listaDeNomes = JSON.parse(localStorage.getItem("listaDeNomes")) || [];

const texto = document.getElementById('texto');
const botao = document.getElementById('meu-botao');
const listaNomes = document.getElementById('lista-nomes');
const botaoEsquecer = document.getElementById('esquecer');

function atualizarMensagem() {
    const qtd = listaDeNomes.length;

    if (qtd === 0) {
        listaNomes.textContent = "Ninguém curtiu";
    } else if (qtd === 1) {
        listaNomes.textContent = `${listaDeNomes[0]} curtiu`;
    } else if (qtd === 2) {
        listaNomes.textContent = `${listaDeNomes[0]} e ${listaDeNomes[1]} curtiram`;
    } else {
        listaNomes.textContent = `${listaDeNomes[0]}, ${listaDeNomes[1]} e mais ${qtd - 2} pessoas curtiram`;
    }

    localStorage.setItem("listaDeNomes", JSON.stringify(listaDeNomes));
}

botao.addEventListener('click', () => {
    const nome = texto.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (listaDeNomes.includes(nome)) {
        alert("Este nome já curtiu!");
        texto.value = "";
        return;
    }

    listaDeNomes.push(nome);
    atualizarMensagem();
    texto.value = "";
});


botaoEsquecer.addEventListener('click', () => {
    listaDeNomes = [];
    localStorage.removeItem("listaDeNomes");
    atualizarMensagem();
});


atualizarMensagem();
