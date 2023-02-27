var nota1;
var nota2;
var nota3;
var peso1 = 3;
var peso2 = 3;
var peso3 = 4;


var notas = [];

function calcularMediaAritmetica() {
    let soma = 0;

    notas.push(nota1);
    notas.push(nota2);
    notas.push(nota3);

    for (var i = 0; i < notas.length; i++) {
        soma += notas[i];
    }

    console.log(soma / notas.length);
    for (var i = 3; i >= notas.length; i--) {
        notas.shift();
    }
} 

function calcularMediaPonderada() {
    let somaNotas = 0;
    let somaPesos = peso1 + peso2 + peso3;

    let notaComPeso1 = nota1 * peso1;
    let notaComPeso2 = nota2 * peso2;
    let notaComPeso3 = nota3 * peso3;

    notas.push(notaComPeso1);
    notas.push(notaComPeso2);
    notas.push(notaComPeso3);


    for (var i = 0; i < notas.length; i++) {
        somaNotas += notas[i];
    }

    console.log(somaNotas / somaPesos);

    for (var i = 3; i >= notas.length; i--) {
        notas.shift();
    }
}