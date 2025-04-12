alert("3 lados formam um Triângulo?");
let A = parseInt(prompt("Digite o valor do 1° Lado: "));
let B = parseInt(prompt("Digite o valor do 2° Lado: "));
let C = parseInt(prompt("Digite o valor do 3° e último Lado: "));


if (A < B+C && B < A+C && C < A+B) {
    alert("PARABÉNS! Os valores formam um triângulo.");
    alert("Obrigado pelo uso!");
} else {
    alert("EITA *não* forma um triângulo.");
    alert("Obrigado pelo uso!");
}


//A = (b x h) / 2
//Alt + Shift + F -> Para alinhar o código