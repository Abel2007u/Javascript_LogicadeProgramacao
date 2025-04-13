alert("A21 - Duração duma partida de Xadrez (Apenas horas e não minutos)");
let start = parseInt(prompt("Por favor, insira a hora de Início da partida: "));
let end = parseInt(prompt("Certo, insira a hora de Término da partida: "));
let duracao = end - start;

if (isNaN(start)) {
    alert("Insira um valor válido, sendo número inteiro.")
} else if (isNaN(end)) {
    alert("Insira um valor válido, sendo número inteiro.")
} else {
    alert("A duração Total dessa partida foi de: " + duracao + " horas.");
}


// //21) Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os
//minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
//de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.

//horaStart - horaEnd = total de horas jogadas 