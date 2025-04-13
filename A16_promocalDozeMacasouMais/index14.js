alert("A16 - LOJA DE MAÇAS COM **PROMOÇÃO** \n Na compra individual cada uma custa R$ 1,30 | Mas ao comprar uma dúzia¹² ou mais, cada uma fica 1,00 Reais.");
let macas = parseInt(prompt("Por favor, insira a quantidade de maças desejada: "));

if (macas>=12) {
    let VT = macas*1;
    alert("Promotion, o custo Total a ser pago será de: "+VT.toFixed(2)+" Reais.");
} else {
    let VR = macas*1.30;
    alert("Regular, o custo Total a ser pago será de: "+VR.toFixed(2)+" Reais.");
}

//Se escrever 10 entra no else pois se não é MAIOR ou é  == ou <

// //Desvio Cond. Composto² - duas opções
// 16. As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra.