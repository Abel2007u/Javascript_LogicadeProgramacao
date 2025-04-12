alert("Vencedor da partida de Futebol");
let N1 = prompt("Olá, por favor, insira o nome do 1° Time/Casa: ");
let N2 = prompt("Certo, agora insira o nome do 2° Time/Visitante: ");
let G1 = parseInt(prompt("Insira os Gols obtidos pelo "+N1+":"));
let G2 = parseInt(prompt("Certo, insira os Gols obtidos pelo "+N2+":"));

if (G1>G2) {
    alert("WIN! O time: "+N1+" venceu de "+G1+" x "+G2+" : Bela WIN!")
} else if(G1==G2) {
    alert("EMPATE! Grande partida igualada no placar.")
} else {
    alert("WIN! O time: "+N2+" venceu de "+G2+" x "+G1+" : Bela WIN!")
}

    // 32) Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome
    // do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE. 

// Escreva ("Insira o nome do Time da Casa: ")
//    Leia (Nm1)
//    Escreva ("Insira o nome do Time Visitante: ")
//    Leia (Nm2)
//    Escreva ("Quantos gols o time ",Nm1," fez? ")
//    Leia (GoalUm)
//    Escreva ("Certo, e quantos gols o ",Nm2," alcançou? ")
//    Leia (GoalDois)
//    EScreval ("")