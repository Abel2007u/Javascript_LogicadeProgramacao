alert("L02E - Equação de 2° Grau com JS");
let A = parseInt(prompt("Insira o valor de A: "));
let B = parseInt(prompt("OK, Insira o valor de B: "));
let C = parseInt(prompt("Concluindo insira o valor de C: "));
let delta = (B**2) - (4 * A * C); //formula de baskara
let raiz1;
let raiz2;

//Check
if (delta > 0){
    raiz1 = (-(B) + Math.sqrt(delta)) / (2*A);
    raiz2 = (-(B) - Math.sqrt(delta)) / (2*A);
    alert("O valor da 1ª Raíz (+) é: "+raiz1+";");
    alert("O valor da 2ª Raíz (-) é: "+raiz2+".")

} else if (delta == 0) {
    raiz1 = (-(B) + Math.sqrt(delta)) / (2*A);
    alert("O valor da 1ª Raíz (+) é: "+raiz1+";");

} else {
    alert("A Equação não possui valores reais.")
}

// let A,B,C... na criação a vírgula permite
//"ax2+bx+c"
//sqrt é raiz em inglês
// E. Efetuar a leitura de três valores (variáveis A, B e C) e efetuar o cálculo da equação completa de
// segundo grau, apresentando as duas raízes, se para os valores informados for possível efetuar o
// referido cálculo. Lembre-se de que a variável A deve ser diferente de zero. 

//A^2 pois não é o suficiente