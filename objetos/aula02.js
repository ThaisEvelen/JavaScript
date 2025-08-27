const meusDados = {
    nome: 'Thais',
    sobrenome: 'Pinto',
    moraNoBrasil: true,
    idade: 33
};


// Verificando se o objeto possui determinado valor

function objetoPossuiValor(valorDaChave) {
    const valoresDoObjeto = Object.values(meusDados);
    console.log(valoresDoObjeto);
    return valoresDoObjeto.includes(valorDaChave);
}

console.log(objetoPossuiValor(33));
console.log(objetoPossuiValor('Thais'));
console.log(objetoPossuiValor('Pinto'));
console.log(objetoPossuiValor(true));

console.log(objetoPossuiValor(22));
console.log(objetoPossuiValor('Fabi'));
console.log(objetoPossuiValor('Rodrigues'));
console.log(objetoPossuiValor(false));


function objetoPossuiChave(nomeDaChave) {
    const valoresDoObjeto = Object.keys(meusDados);
    console.log(objetoPossuiChave());
    //return valoresDoObjeto.includes(valorDaChave);
}
objetoPossuiChave();