alert("Diferença do maior pelo menor com 2 valores");
let N1 = parseInt(prompt("Por favor, insira o 1ª valor: "));
let N2 = parseInt(prompt("Certo, por favor, insira o 2ª valor "));
let res;

if (N1>N2) {
    res = N1-N2;
} else {
    res = N2-N1;
}

alert("A diferença do Maior pelo menor é: "+res+".");

    //Tem como - dentro do alert aí não se cria o res.
    // 17) Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever
    // uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o
    // aluno é aprovado). Escrever também a média calculada. 
