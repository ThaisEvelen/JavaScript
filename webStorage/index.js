(() => {
    const botaoAceitar = document.getElementById('meu-botao');
    const botaoRecusar = document.getElementById('esquecer');

    function chamaPromises(numeroEnviado) {
        return new Promise((resolve, reject) => {
            if (numeroEnviado % 2 === 0) {
                resolve('deu bom');
            } else {
                reject('deu ruim');
            }
        });
    }

    botaoAceitar.addEventListener('click', () => {
        chamaPromises(2).then((res) => console.log(res))
    })



    botaoRecusar.addEventListener('click', () => {
        chamaPromises(1)
    })

})()

