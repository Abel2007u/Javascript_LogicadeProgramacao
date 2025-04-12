alert("Pode votar se for Maior de Idade - Desvio Cond. Composto²");
let AnoAtual = parseInt(prompt("Por favor, insira o ano Atual: "));
let AnoNasc = parseInt(prompt("Por favor, insira o ano do seu nascimento: "));
let valida = AnoAtual - AnoNasc;

if (valida>=18) {
    alert("PERMITIDO - vá para sua urna!");
} else {
    alert("Menor de idade - NÃO é permitido ainda!");
}

//Desvio Cond. Composto² - 1caminho com duas opções
// 18) Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). 