const cores = ['Preto', 'Branco']
console.log(cores);
console.log(cores[0]);
console.log(cores[1]);
console.log('Quantidade de elementos', cores.length-1);
console.log(cores.indexOf('Preto'));
console.log(cores.indexOf('Branco'));

cores.push('Vermelho');
console.log(cores);
console.log(cores.length);
console.log(cores.indexOf('Vermelho'));

cores.push('Azul');
console.log(cores.indexOf('Azul'));
console.log(cores.length);

cores.shift();
console.log(cores);

cores.unshift('Preto');
console.log(cores);

cores.pop();
console.log(cores);

function removeCor(nomeDaCor) {
    const posicaoDaCor = cores.indexOf(nomeDaCor);
    if(posicaoDaCor >= 0) {
    cores.splice(posicaoDaCor, 1);
    }
    console.log(cores);
}

removeCor('Branco');
removeCor('Vermelho');
removeCor('Vermelho');
