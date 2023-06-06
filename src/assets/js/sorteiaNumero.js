const menorValor = 1;
const maiorValor = 1000;
const numeroAleatorio = geraNumeroAleatorio();

function geraNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}

console.log(numeroAleatorio);

const elementMenorValor = document.querySelector('#menor');
const elementMaiorValor = document.querySelector('#maior');
elementMenorValor.innerHTML = menorValor;
elementMaiorValor.innerHTML = maiorValor;