let contador = 15;
alert("Quadrado dos números inteiros de 15 a 200: \n");
let eleva;

do {
    eleva=contador*contador;
    alert("O quadrado(**²) do número: "+contador+" é "+eleva+".");
    contador++;
} while (contador<=200);



    //No JS o repita é : do ... while
    //a) Apresentar os quadrados dos números inteiros de 15 a 200.
    
    /*contador<-15
   Escreval ("Quadrado de 15 a 200 : 2ª condição com repita!")
   Escreval ("")

   repita
   eleva<-contador*contador
   Escreval ("O quadrado(^2) do número: ",contador," é ",eleva,".")
   contador<-contador+1
   ate contador>200*/
