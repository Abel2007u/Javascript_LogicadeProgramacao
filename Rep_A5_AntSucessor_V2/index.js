alert("Antecessor e Sucessor - Versão 2");
let num = parseInt(prompt("Digite um número do seu agrado: "));
let antecessor = num - 1;
let sucessor = num + 1;

 if (isNaN(num)) {
    alert("O campo não pode estar vazio, preenchendo, tente novamente!")
 } else{
    alert("O antecessor desse número é: " + antecessor + " ;");
    alert("& o sucessor desse número é: " + sucessor + " ;");
    alert("A sequência númerica seria: " + antecessor + " - " + num + " - " + sucessor + " .");
 }

//Alt + Shift + F -> Para alinhar o código