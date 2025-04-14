alert("Número respectivo na semana com SWITCH/ESCOLHA")
let num1 = parseFloat(prompt("Insira um valor de 1 a 7, please: "));

switch (num1) {
    case 1:
        alert("1° first é Domingo")
        break;
    case 2:
        alert("2° second é Segunda-feira")
        break;
    case 3:
        alert("3° third é Terça-feira")
        break;
    case 4:
        alert("4° four é Quarta-feira")
        break;
    case 5:
        alert("5° five é Quinta-feira")
        break;
    case 6:
        alert("6° six é Sexta-Feira")
        break;
    case 7:
        alert("7° seven é Sábado - Dia do Senhor.")
        break;
    default:
        alert("Não há número correspondente, tente novamente sendo de 1 a 7.")
        break;
}

//ListSwitch01_numIgualDiaSemana