alert("Média de 4 Notas com Recuperação JS");
let M = parseFloat(prompt("Por favor, insira a 1ª Nota de Matemática obtida: "));
let P = parseFloat(prompt("Por favor, insira a 2ª Nota de Português obtida: "));
let C = parseFloat(prompt("Por favor, insira a 3ª Nota de Ciências obtida: "));
let H = parseFloat(prompt("Por favor, insira a 4ª Nota de História obtida: "));

let media = (M + P + C + H) / 4;
let exame;

if (media >= 7) {
    alert("Nota obtida: " + media.toFixed(2) + " - Você foi aprovado PARABÉNS!");
}
else {
    alert("Nota obtida: " + media.toFixed(2) + " - Necessário Recuperação:")
    exame = parseFloat(prompt("No exame de Recuperação, insira a nota obtida: "))
    exame = (media + exame) / 2;
    if (exame >= 5) {
        alert("Nota obtida em Exame: " + exame.toFixed(2) + " - Você foi aprovado na última instância MARCHA!");
    } else {
        alert("Nota obtida em Exame: " + exame.toFixed(2) + " - Nota insuficiente necessário Refazer PERSEVERE!");
    }
}


// d. Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem
// dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 7. Se o valor da
// média for menor que 7, solicitar a nota de exame, somar com o valor da média e obter nova média.
// Se a nova média for maior ou igual a 5, apresentar uma mensagem dizendo que o aluno foi
// aprovado em exame. Se o aluno não foi aprovado, indicar uma mensagem informando esta
// condição. Apresentar com as mensagens o valor da média do aluno, para qualquer condição. 