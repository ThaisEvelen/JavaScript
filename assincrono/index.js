(() => {
    const botaoCarregar = document.getElementById('carrega-devs');
    const inputNome = document.getElementById('nome-dev');
    const botaoGuarda = document.getElementById('guarda');

    async function carregaDevs() {
        const devData = await fetch('https://api.github.com/users');
        const dev = await devData.json();
        return dev;
    }

    async function carregaDevsPorUser(user) {
        const devData = await fetch(`https://api.github.com/users/${user}`);
        const listaDevs = await devData.json();
        return listaDevs;
    }

    function mostraListaDevs(listaDevs) {
        for (let devs of listaDevs) {
            const blocoDev = document.createElement('p')
            blocoDev.innerText = devs.login;
            document.body.appendChild(blocoDev);
        }
    }

    botaoCarregar.addEventListener('click', () => {
        carregaDevs().then((res) => mostraListaDevs(res))
    })

    inputNome.addEventListener('keyup', () => {
        let dadosDev;
        localStorage.setItem('devProcurado', e.target.value)
    })

    botaoGuarda.addEventListener('click', () => {
        const devProcurado = localStorage.getItem('devProcurado')
        carregaDevsPorUser(devProcurado).then(res => localStorage.setItem('devProcurado', JSON.stringify(res)))

        const dadosAtuais = JSON.parse(localStorage.getItem('devProculado'))
        console.log(dadosAtuais)
    })

})()

