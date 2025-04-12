alert("Compara dois valores e os traz em ordem Crescente - Desvio Cond. Composto²");
let N1 = parseInt(prompt("Por favor, insira o 1° número: "));
let N2 = parseInt(prompt("Por favor, insira o 2° e último número: "));

if (N1>N2) {
    alert("One bigger! O 1° será último: " + N2 + " e " + N1 + ".");
} else {
    alert("Two bigger! O 2° será último: " + N1 + " e " + N2 + ".");
}

//Desvio Cond. Composto² - 1caminho com duas opções
// 19) Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles. 