alert("Área do Trapézio");
let basemenor = parseInt(prompt("Digite o valor da Base menor: "));
let baseMaior = parseInt(prompt("Certo, digite o valor da Base Maior: "));
let alt = parseInt(prompt("Ok, concluindo digite o valor da Altura: "));

let areaTrap = (basemenor+baseMaior)*alt/2;

alert("A área desse Trapézio é: " + areaTrap + " metros;");
alert("Muito obrigado por usar nosso sistema!");

// A = (a + b)⋅h / 2
// Exemplo 8+6*4/2 = 28
//Alt + Shift + F -> Para alinhar o código