alert("Conceito para a respectiva nota com SWITCH/ESCOLHA")
let nota = parseFloat(prompt("Insira a nota obtida de 1 a 100, please: "));

switch (Math.floor(nota/10)) {
    case 10: // para nota 100
        alert("Classificação: A+")
        break;
    case 9:
        alert("Classificação: A")
        break;
    case 8:
        alert("Classificação: B")
        break;
    case 7:
        alert("Classificação: C")
        break;
    case 6:
        alert("Classificação: D")
        break;
    default:
        alert("Classificação: F")
        break;
}

//ListSwitch03_classificacaoNotas