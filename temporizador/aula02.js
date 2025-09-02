function chamar(segundosDeAtraso) {
    console.log(`Atrasou ${segundosDeAtraso} segundos`);
}
function chamaAtrasado(funcaoDeAtraso, quantidadeAtraso) {
    setTimeout( () => funcaoDeAtraso(quantidadeAtraso), quantidadeAtraso * 1000)
    // setTimeout: atrasar a chamada de uma função
};

chamaAtrasado(chamar, 5);

function chamarComIntervalo(funcaoDeIntervao, intervalo) {
    setInterval(() => funcaoDeIntervao(intervalo), intervalo * 1000)
}

chamarComIntervalo(chamar,2);