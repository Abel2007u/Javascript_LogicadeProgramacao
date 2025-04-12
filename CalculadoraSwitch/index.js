alert("CALCULADORA BÁSICA COM SWITCH/ESCOLHA")
let num1 = parseFloat(prompt("Insira o 1° Valor, please: "));
let num2 = parseFloat(prompt("Insira o 2° Valor, please: "));
let chosen = parseInt(prompt("Digite: \n 1 - Soma;\n 2 - Subtração; \n 3 - Multiplicação; \n 4 - Divisão; \n 5 - Expotenciação."));

let soma = num1+num2;
let menos = num1-num2;
let multi = num1*num2;
let div = num1/num2;
let expo = Math.pow(num1, num2);   //base e expoente

switch (chosen) {
    case 1:
        alert("O resultado dessa Soma é: "+soma+" - Agradecido pelo uso.")
        break;
    case 2:
        alert("O resultado dessa Subtração é: "+menos+" - Agradecido pelo uso.")
        break;
    case 3:
        alert("O resultado dessa Multiplicação é: "+multi+" - Agradecido pelo uso.")
        break;
    case 4:
        alert("O resultado dessa Divisão é: "+div+" - Agradecido pelo uso.")
        break;
    case 5:
        alert("O resultado dessa Potência é: "+expo+" - Agradecido pelo uso.")
        break;
    default:
        alert("Tente novamente inserindo um valor válido! Mas agradecido pelo uso.");
        break;
}
