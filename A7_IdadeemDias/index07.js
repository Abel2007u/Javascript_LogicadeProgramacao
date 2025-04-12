alert("Cálculo da Idade em Dias - Versão 1")
let anos = parseInt(prompt("Por favor, insira quantos anos você já viveu: "));
let mes = parseInt(prompt("Quantos meses passaram desde seu birtday/aniversário? "));
let dia = parseFloat(prompt("Certo,  e quantos dias passaram desde seu último mêsversário: "));

let calcula = (anos*365) + (mes*30) + dia;
alert ("Sua idade em dias é: "+calcula+" dias.");
