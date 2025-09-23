const input = document.getElementById('nova-tarefa');
const botao = document.getElementById('adicionar');
const lista = document.getElementById('lista-tarefas');


let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

function salvar() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}


function renderizar() {
    lista.innerHTML = "";
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarefa.status;
        checkbox.addEventListener('change', () => {
            tarefa.status = checkbox.checked;
            salvar();
            renderizar();
        });

        const span = document.createElement('span');
        span.innerText = tarefa.descricao;
        if (tarefa.status) {
            span.style.textDecoration = "line-through"; 
        }


        const botaoExcluir = document.createElement('button');
        botaoExcluir.innerText = "Excluir";
        botaoExcluir.addEventListener('click', () => {
            tarefas.splice(index, 1);
            salvar();
            renderizar();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(botaoExcluir);
        lista.appendChild(li);
    });
}


botao.addEventListener('click', () => {
    if (input.value.trim() === "") return;

    tarefas.push({ descricao: input.value, status: false });
    salvar();
    renderizar();
    input.value = "";
});


renderizar();
