function chamaPrimeiro () {
    console.log('Chama essa primeiro');
}

function chamaDepois() {
    console.log('Entrou na segunda função');
    chamaPrimeiro();
}

chamaDepois();

function recebePrimeira(primeiraFuncao) {
    primeiraFuncao();
}

recebePrimeira(chamaDepois);