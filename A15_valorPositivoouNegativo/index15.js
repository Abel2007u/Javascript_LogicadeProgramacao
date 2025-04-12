alert("Valor Positivo, negativo ou 0 - Desvio Cond. Encadeado³");
let num = parseFloat(prompt("Por favor, insira um valor do seu agrado: "));

if (num>0) {
    alert("MORE - VALOR POSITIVO! +");
} else if (num>-1) {
    alert("NEUTRO - Exatamente 0!");
} else {
    alert("LESS - VALOR NEGATIVO <0 ou - !");
}

//Desvio Cond. Encadeado - três ou + verificações 
// 15) Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo).  