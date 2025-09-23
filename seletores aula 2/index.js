//const verificaSeExisteElemento = (seletor) => {
//const elemento = document.querySelector(seletor);
// return !!elemento

//}



//const contaElementosPorSeletor = (seletor) => {
//    if (verificaSeExisteElemento(seletor)) {
//  const todosOsParagrafos = document.querySelectorAll('seletor')
//      console.log('existem elementos ')
//  } else {
//     console.log(`Não existem elementos com o seletor ${seletor}`)
// }
//}

//contaElementosPorSeletor('li.menu-item')
//contaElementosPorSeletor('li.menu-items')

//const elementoEpecifico = document.querySelectorAll('li')[1]

const elemento = document.getElementsByTagName('ul');
console.log(elemento);

const elementoPorId = document.getElementById('titulo-principal')
console.log(elementoPorId.innerText)

const elementoPorClasse = document.getElementsByClassName(paragrafo)
console.log(elementoPorClasse[0])

const elementoPorNome = document.getElementsByName('meu-botao')
console.log(elementoPorNome[0].innerText)

const verificaSeExisteTag = (elemento) => !!document.getElementsByTagName(elemento)
const verificaSeExisteId = (elemento) => !!document.getElementById(elemento).length > 0
const verificaSeExisteClasse = (elemento) => !!document.getElementsByClassName(elemento).length > 0
const verificaSeExisteName = (elemento) => !!document.getElementsByName(elemento).length > 0


const listaDeElementos = ['header', 'ul', 'meu-botao', 'titulo-principal', 'elemento-que-nao-existe']

const descobreTipoDoElemento = (lista) => {
    if (listaDeElementos.length === 0) {
        console.log('Você não passou uma lista de elementos')
    } else {
        for (let nome of lista) {
            if (verificaSeExisteTag(nome)) {
                console.log(`${nome} é uma tag`)
            }
            else if (verificaSeExisteId(nome)) {
                console.log(`${nome} é um Id`)
            }
            else if (verificaSeExisteClasse(nome)) {
                console.log(`${nome} é uma classe`)
            } else if (verificaSeExisteName(nome)) {
                console.log(`${nome} é um nome`)
            } else {
                console.log(`${nome} não está no DOM`)
            }

        }

    }
}

descobreTipoDoElemento(listaDeElementos)


console.log(verificaSeExisteTag('main'))
console.log(verificaSeExisteId('meu-botao'))
console.log(verificaSeExisteClasse('paragrafo'))
console.log(verificaSeExisteName('meu-botao'))
