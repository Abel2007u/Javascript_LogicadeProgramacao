alert("Número respectivo do mês no ano com SWITCH/ESCOLHA")
let num1 = parseFloat(prompt("Insira um valor de 1 a 12, please: "));

switch (num1) {
    case 1:
        alert("1° first é Janeiro")
        break;
    case 2:
        alert("2° second é Fevereiro")
        break;
    case 3:
        alert("3° third é Março")
        break;
    case 4:
        alert("4° four é Abril")
        break;
    case 5:
        alert("5° five é Maio")
        break;
    case 6:
        alert("6° six é Junho")
        break;
    case 7:
        alert("7° seven é Julho")
        break;
    case 8:
        alert("8° eight é Agosto")
        break;
    case 9:
        alert("9° nine é Setembro")
        break;
    case 10:
        alert("10° ten é Outubro")
        break;
    case 11:
        alert("11° eleven é Novembro")
        break;
    case 12:
        alert("12° twelve é Dezembro")
        break;
    default:
        alert("Não há número correspondente, tente novamente sendo de 1 a 12.")
        break;
}

//ListSwitch02_mesdoAno