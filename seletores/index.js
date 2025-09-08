const verificaSeExisteElemento = (seletor) => {
    const elemento = document.querySelector(seletor);
    return !!elemento

}



const contaElementosPorSeletor = (seletor) => {
    if (verificaSeExisteElemento(seletor)) {
        const todosOsParagrafos = document.querySelectorAll('seletor')
        console.log('existem elementos ')
    } else {
        console.log(`Não existem elementos com o seletor ${seletor}`)
    }
}

contaElementosPorSeletor('li.menu-item')
contaElementosPorSeletor('li.menu-items')

const elementoEpecifico = document.querySelectorAll('li')[1]
