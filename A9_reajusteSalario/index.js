alert("A9 - Reajuste para novo salário");
let salAtual = parseFloat(prompt("Por favor, insira seu salário atual: "));
let reajuste = parseFloat(prompt("Por favor, insira o valor percentual do reajuste: "));

let Aumento = (salAtual*reajuste)/100;
let newSal = salAtual+Aumento;

alert ("Seu novo salário com o reajuste será: "+newSal.toFixed(2)+" Reais.");

// 9) Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.
// //Calcular e escrever o valor do novo salário.

// //O percentual de reajuste já é uma porcentagem, então precisamos dividir
// //por 100 e multiplicar pelo salário para obter o valor do aumento.