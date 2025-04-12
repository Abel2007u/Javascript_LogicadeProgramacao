alert("Média de 4 Notas com JS");
let N1 = parseFloat(prompt("Por favor, insira a 1ª Nota de Matemática obtida: "));
let N2 = parseFloat(prompt("Por favor, insira a 2ª Nota de Português obtida: "));
let N3 = parseFloat(prompt("Por favor, insira a 3ª Nota de Ciências obtida: "));
let N4 = parseFloat(prompt("Por favor, insira a 4ª Nota de História obtida: "));
let media = (N1+N2+N3+N4)/4;

if (media >= 5) {
    alert ("Nota obtida: "+media.toFixed(2)+" - Você foi aprovado PARABÉNS!");
} else {
    alert ("Nota obtida: "+media.toFixed(2)+" - Nota insuficiente será necessário refazer PERSEVERE!")
}


// c. Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem
// dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5. Se o aluno não
// foi aprovado, indicar uma mensagem informando esta condição. Apresentar junto das mensagens o
// valor da média do aluno para qualquer condição. 