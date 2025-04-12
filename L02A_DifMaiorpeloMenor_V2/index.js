alert("Diferença do maior pelo menor com 2 valores - Versão 2 | Tente valores =");
let N1 = parseInt(prompt("Por favor, insira o 1ª valor: "));
let N2 = parseInt(prompt("Certo, por favor, insira o 2ª valor "));
let res;

if (N1 == N2) {
    alert("Os valores inseridos são iguais, tente novamente sendo Diferentes.")
} else if (N1 > N2) {
    res = N1 - N2;
    alert("A diferença do Maior pelo menor é: " + res + ".");
}
else {
    res = N2 - N1;
    alert("A diferença do Maior pelo menor é: " + res + ".");
}



//Tem como - dentro do alert aí não se cria o res.
//a. Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor.
