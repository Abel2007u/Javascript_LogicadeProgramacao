alert("A10 Custo Final do Consumidor");
let custFabrica = parseInt(prompt("Por favor, insira o custo total de Fábrica: "));
//Check
let distribuidor = custFabrica * 28/100;
let imposto = custFabrica * 45/100;
let custoFinal = imposto+distribuidor+custFabrica; 
alert("O valor final para o consumidor será de: "+custoFinal.toFixed(2)+" Reais.")

//10) O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do
//distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor
//seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro,
//calcular e escrever o custo final ao consumidor.
