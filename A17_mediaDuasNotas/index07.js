alert("Média Aritmética Simples com 2 notas");
let N1 = parseInt(prompt("Por favor, insira a 1ª Nota obtida: "));
let N2 = parseInt(prompt("Certo, por favor, insira a 2ª Nota obtida: "));

let mediaSimples = (N1+N2)/2;

    if (mediaSimples>= 6) {  
        alert ("Nota obtida: "+mediaSimples); 
        alert ("Parabéns, em recompensa do seu esforço: avançou para o próximo ano.");
    } else {
        alert ("Nota obtida: "+mediaSimples); 
        alert ("Será necessário mais estudo, infelizmente obteve nota insuficiente."); 
    }

    // 17) Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever
    // uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o
    // aluno é aprovado). Escrever também a média calculada. 
