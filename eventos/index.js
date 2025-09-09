const botao = document.getElementById('meu-botao');
const innerText = document.getElementById('texto');
const alertaOla = () => console.log('Olá,estudante!');

botao.addEventListener('click', ()=>{
    const titulo = document.getElementById('titulo-principal');
    titulo.innerText = 'Mudou após o click'
})

inputText.addEventListener('keypress', (e) => {
   const titulo = document.getElementsByTagName('h1')[0]
   titulo.innerText = e.target.value
})