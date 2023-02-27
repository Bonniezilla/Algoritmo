var code1;
var valor1;
var uni1;
var code2;
var valor2;
var uni2;


function verificaIPI() {
    let calculoIPI = (valor1*uni1 + valor2*uni2)*(24.75/100);
    let somaValores = (valor1 * uni1 + valor2 * uni2) + (calculoIPI);
    
    console.log("O produto: " + code1 + " tem o valor com " + uni1 + " unidades de: " + (valor1*uni1));
    console.log("O produto: " + code2 + " tem o valor com " + uni2 + " unidades de: " + (valor2*uni2));
    console.log("O valor do IPI com a porcentagem de 24,75 é de: " + somaValores + " para o total de todos os produtos");
}