var votosEmBranco;
var votosNulos;
var votosValidos;

function verificaEleicao() {
    let somaDeVotos = votosEmBranco + votosNulos + votosValidos;
    let porcentagemValidos = (votosValidos / somaDeVotos * (100))
    let porcentagemEmBranco = (votosEmBranco / somaDeVotos * (100))
    let porcentagemNulos = (votosNulos / somaDeVotos * (100))


    console.log("O número de votos total foi: " + 
    somaDeVotos);
    
    console.log("A porcentagem de votos nulos é de: "
    + porcentagemNulos.toFixed(2))
    
    console.log("A porcentagem de votos em branco é de: "
    + porcentagemEmBranco.toFixed(2))
    
    console.log("A porcentagem de votos válidos é de: "
    + porcentagemValidos.toFixed(2))
}