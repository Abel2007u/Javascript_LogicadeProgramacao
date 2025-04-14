alert("A42 - Requerer aposentadoria \n Para estar apto deve-se atender ao menos UMA das condições: \n - Ter no mínimo 65 anos de idade. \n - Ter trabalhado no mínimo 30 anos. \n - Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos");

let codeJob = parseInt(prompt("Insira seu número do empregado/código: "));
let anoAtual = parseInt(prompt("Nos informe o ano atual: "));
let anoNasc = parseInt(prompt("Nos informe seu ano de nascimento: "));
let ingresso = parseInt(prompt("Digite seu ano de ingresso na empresa: "));

let idade = anoAtual - anoNasc;
let timeJob = anoAtual - ingresso;

// Modo 1 - Mais longo
// if (idade == 65) {
//     alert ("Parabéns meu irmão estás APTO para Requerer sua aposentadoria! =D");
    
//     if(timeJob == 30){
//         alert ("Parabéns meu irmão estás APTO para Requerer sua aposentadoria! =D");
//     } 
// } else if (idade == 60 && timeJob == 25) {
//     alert ("Parabéns meu irmão estás APTO para Requerer sua aposentadoria! =D");
// } else {
//     alert ("Infelizmente não será possível requerer sua aposentadoria. =c");
// }

// Modo 2 mais curtoqrápido
if (idade >= 65 || timeJob >= 30 || (idade >= 60 && timeJob >= 25)) {
    alert ("Parabéns, o funcionário portador do código: "+codeJob+" está APTO para Requerer sua aposentadoria! =D");
} else {
    alert ("Infelizmente, o funcionário portador do código: "+codeJob+" NÃO poderá requerer sua aposentadoria. =c");
}

// 42 - Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para
// estar em condições, um dos seguintes requisitos deve ser satisfeito:
//  - Ter no mínimo 65 anos de idade.
//  - Ter trabalhado no mínimo 30 anos.
//  - Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos.
// Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano
// de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo
// de trabalho do empregado e a mensagem 'Requerer aposentadoria' ou 'Não requerer'.

