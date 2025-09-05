const verificaSeExisteElemento = (seletor) => {
    const elemento = document.querySelector(seletor);
    return !!elemento
    
}



console.log(todosOsParagrafos);

const contaElementosPorSeletor = (seletor) =>{
    if (verificaSeExisteElemento(seletor)) {
    const todosOsParagrafos = document.querySelectorAll('seletor')
    console.log('existem elementos')
    }
}