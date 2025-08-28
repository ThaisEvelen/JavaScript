const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34];




function iteraSobreOArray() {
for(let i = 0; i < fibonacci.length; i++) {
    console.log(i+1, 'o item', fibonacci[i]);
    }
}
iteraSobreOArray();
console.log('-------------------------------')

function contaAte(numero) {
    for (let conta = 1; conta <= numero; conta++) {
     console.log('Mariana conta', conta);
    }
}

contaAte(10);
console.log('-------------------------------')
contaAte(2);
console.log('-------------------------------')
contaAte(5);
console.log('-------------------------------')


function verificaItemArray(listaDeNumeros) {
    for (let item of listaDeNumeros) {
        console.log(item);
    }
}

verificaItemArray(fibonacci);
console.log('-------------------------------')

function verificaItemPorIndice(listaDeNumeros){
    for(let indice in listaDeNumeros){
        console.log(listaDeNumeros[indice]);
    }
}

verificaItemPorIndice(fibonacci);
console.log('-------------------------------')


function contaPeloMenosUM(numeroLimite) {
    let numero = 0;
     do {  
        numero++;
        console.log(numero);
    } while (numero <= numeroLimite);
}

contaPeloMenosUM(1);
contaPeloMenosUM(0);

function verificaSePodeAte(numeroLimite) {
    let numero = 0;
    while(numero <= numeroLimite) {
        console.log(numero);
        numero++;
    }
}

verificaSePodeAte(1);
verificaSePodeAte(0);
