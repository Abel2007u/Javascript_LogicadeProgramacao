alert("Estações do ano para o respectivo número com SWITCH/ESCOLHA")
let num = parseFloat(prompt("Insira o número de 1 a 4, please: "));

switch (num) {
    case 1: // para nota 100
        alert("Primavera - esta é a 1ª")
        break;
    case 2:
        alert("Verão - aqui a 2ª")
        break;
    case 3:
        alert("Outono - aqui a 3ª")
        break;
    case 4:
        alert("Inverno - termina o ciclo para recomeçar.")
        break;
    default:
        alert("Não há estação correspondente, tente de novo com 1,2,3 ou 4.")
        break;
}

//5) Verificação de Estação do Ano: Escreva um programa que solicite ao usuário um número de 1 a 4 e exiba
// a estação do ano correspondente (1 para Primavera, 2 para Verão, etc.).