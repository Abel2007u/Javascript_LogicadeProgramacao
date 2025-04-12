alert("Média Ponderada com 3 notas");
let N1 = parseInt(prompt("Por favor, insira a 1ª Nota obtida: "));
let N2 = parseInt(prompt("Por favor, insira a 2ª Nota obtida: "));
let N3 = parseInt(prompt("Por favor, insira a 3ª e última Nota obtida: "));

let media = ((N1*2) + (N2*3) + (N3*5))/10;

    if (media>= 7) {  
        alert ("Nota obtida: "+media); 
        alert ("Parabéns, em recompensa do seu esforço: avançou para o próximo ano.");
    } else {
        alert ("Nota obtida: "+media); 
        alert ("Será necessário mais estudo, infelizmente obteve nota insuficiente."); 
    }

//13) Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
   //Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média
   //final é: PRINCIPAL CÁLCULO - n1 * 2 + n2 * 3 + n3 * 5 /10

//    media<-((n1*2) + (n2*3) + (n3*5))/10

//    se media >= 7 entao
//       Escreva ("Nota obtida: ",media:2:2)
//       Escreval ("")
//       Escreva ("Parabéns, em recompensa do seu esforço: avançou para o próximo ano.")
//    senao
//       Escreva ("Nota obtida: ",media:2:2)
//       Escreval ("")
//       Escreva ("Será necessário mais estudo, infelizmente obteve nota insuficiente.")
//    fimse
