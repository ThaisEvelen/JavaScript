
const selecionaTag = (elemento) => document.getElementsByTagName(elemento);
const selecionaId = (elemento) => document.getElementById(elemento);
constselecionaClasse = (elemento) => document.getElementsByClassName(elemento);
const selecionaName = (elemento) => document.getElementsByName(elemento);

const tituloH1= selecionaTag('h1');

tituloH1[0].innerText = 'Mudou titulo';

console.log(tituloH1[0].classList);

const atrasaMudancaDeCor = () => {
    setTimeout(() =>{
        const listaDeClasses = tituloH1[0].classList.value
        tituloH1[0].classList = listaDeClasses + ' alterado-cor-bg'
        tituloH1[0].style.fontFamily = ' Arial';
        tituloH1[0].style.fontSize = ' 80px';
    } ,3000);
}
atrasaMudancaDeCor();
