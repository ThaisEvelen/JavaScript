function eDediaOuEdeNoite(hora) {
    let periodo = '';
    if(hora <= 18)
        periodo = 'É de dia';
    else 
        periodo = 'É de noite';
    return periodo;
}

console.log(eDediaOuEdeNoite());
console.log(eDediaOuEdeNoite(11));
console.log(eDediaOuEdeNoite(21));

function eMaiorDeIdade(idade) {
    if(idade < 18 )
        console.log('Menor de idade');
    else
        console.log('Maior de idade');
}

eMaiorDeIdade(18);
eMaiorDeIdade('18');
eMaiorDeIdade(2);

function periodoDoDia(hora) {
    if(hora < 12)
        console.log('Manhã');
    else if (hora >= 12 && hora <= 18)
        console.log('Tarde');
    else
        console.log('Noite');
}

periodoDoDia(2);
periodoDoDia(14);
periodoDoDia(20);

function periodoComRegra(hora) {
    if(hora >= 0 && hora <= 24)
        periodoDoDia(hora);
    else
        console.log('Você passou uma hora inexistente')
}

periodoComRegra(3);
periodoComRegra(17);
periodoComRegra(21);
periodoComRegra(-30);
periodoComRegra(42);

function menuEscolha(opcaoDoMenu) {
    switch(opcaoDoMenu) {
        case 1 : 
        console.log('Você escolheu a primeira opção');
        break;

        case 2 :
            console.log('Você escolheu a segunda opção');
            break;
        default:
            console.log('Você não escolheu uma das opções válidas');
    }
}

menuEscolha(1);
menuEscolha(2);
menuEscolha('2');

function eMaiorDeIdadeSimples(idade) {
    let condicaoIdade = idade >= 18 ? 'Maoir de idade' : 'Menor de idade';
    return condicaoIdade;
}
console.log(eMaiorDeIdadeSimples(18));
console.log(eMaiorDeIdadeSimples(3));

function eMaiorDeIdadeUnario(idade) {
    return idade >= 18 && 'Maior de idade';
}

console.log(eMaiorDeIdadeUnario(18));
console.log(eMaiorDeIdadeUnario(3));
