const todoMundoVe = 'Todo mundo ve esta variável de escopo global';

function executaEscopoGlobal() {
    console.log(todoMundoVe);
}

function executaEscopoLocal() {
    const visivelEmCscopoLocal= 'Só quem esta dentro do bloco função ve esta variável de escopo local';
    console.log(visivelEmCscopoLocal);

    function chamaDentroDoEscopo() {
        console.log('dentro do escopo =>', visivelEmCscopoLocal)
        const dentroDoLocal = false;
        console.log(dentroDoLocal)
    }
    chamaDentroDoEscopo();
}

executaEscopoGlobal();
executaEscopoLocal();
