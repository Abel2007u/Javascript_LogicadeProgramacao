alert("Número total de eleitores de um município!");
let numTotEleitores = parseInt(prompt("Por favor, insira o número total de eleitores do município: "));
let votBranco = parseInt(prompt("Por favor, insira a quantidade de votos brancos recebidos: "));
let votNulo = parseInt(prompt("Por favor, insira a quantidade votos nulos recebidos: "));
let votVal = parseInt(prompt("Por favor, insira a quantidade votos Válidos obtidos: "));

let branco = (votBranco * 100 / numTotEleitores).toFixed(2);
let nulo = (votNulo * 100 / numTotEleitores).toFixed(2);
let valido = (votVal * 100 / numTotEleitores).toFixed(2);


if (votBranco + votNulo + votVal !== numTotEleitores) {
    alert("Erro! A soma destes votos é diferente do total de eleitores.");
} else if (numTotEleitores === 0) {
    alert("Erro! O número total de eleitores não pode ser zero.");
} else {
    alert(branco + "% dos Eleitores votaram Branco;");
    alert(nulo + "% dos Eleitores votaram Nulo;");
    alert(valido + "% dos Eleitores tiveram seus votos validados.");
    alert("Obrigado por usar nosso sistema!");
}

//8) Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos
//brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total
//de eleitores.
//(parte/total)*100
//BRANCO : em ninguem, não teve alguém que te representasse (Tem o botao para);
//NULO : VOta 14, sabendo que não há nenhum candidato com esse número.
//Não é perfeito pois não considera os anos bissextos, para tal necessita de uma
//maior complexidade

// se (votBranco+votNulo+votValido) <> totalEleitor entao
//            Escreval ("Erro! A soma destes votos é diferente do total de eleitores.")
//       senao
//          branco<- (votBranco*100)/totalEleitor
//          nulo<- (votNulo*100)/totalEleitor
//          valido<- (votValido*100)/totalEleitor
//       Escreval (branco:2:2,"% dos Eleitores votaram Branco;")
//       Escreval (nulo:2:2,"% dos Eleitores votaram Nulo;")
//       Escreval (valido:2:2,"% dos Eleitores tiveram seus votos validados.")
//       fimse