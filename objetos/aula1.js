const meusDados = {
    nome: 'Thais',
    sobrenome: 'Pinto',
    moraNoBrasil: true,
    idade: 33
};


console.log(meusDados);
console.log(meusDados.nome);
console.log(meusDados['nome']);
console.log(meusDados['sobrenome']);

function retornaDdoPessoal(dadoPessoal) {
    return(meusDados[dadoPessoal]);
}

console.log(retornaDdoPessoal('sobrenome'));
console.log(retornaDdoPessoal('moraNoBrasil'));
console.log(retornaDdoPessoal('idade'));
