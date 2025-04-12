alert("A11 Cálculo da Comissão e salário final de um vendedor");
let carVend = parseInt(prompt("Por favor, insira a quantidade de carros vendidos: "));
let VTV = parseInt(prompt("Certo, digite o valor total de suas vendas: "));
let salarioFixo = parseFloat(prompt("Ok, insira seu salário fixo mensal: "));
let comissao = parseFloat(prompt("Concluindo, insira o valor que você recebe por cada carro vendido: "));
let Extra, saldoFinal;

//Check
comissao = carVend*comissao;
Extra = VTV * (5/100);
saldoFinal = salarioFixo+comissao+Extra;
alert("O salário final do vendedor é: "+saldoFinal.toFixed(2)+" Reais.");

// 11 - Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,
// mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele
// efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas
// vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
// vendedor. 
