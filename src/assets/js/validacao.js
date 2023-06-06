function verificaValorChuteValido(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        console.log('Valor invalido');
    }

    if (numeroForMaiorOuMenorQueValorMax(numero)) {
        return `<div>Valor invalido: o numero secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
    }
    if (numero === numeroAleatorio) {
        return document.body.innerHTML = `
            <h2>Você acertou !!!</h2>
            <h3>O numero aleatorio era ${numeroAleatorio}</h3>
        `
    } else if (numero > numeroAleatorio) {
        elementoChute.innerHTML += `<div>O numero secreto e menor <i class="fa-solid fa-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O numero secreto e maior <i class="fa-solid fa-up-long"></i></div>`
    }

}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueValorMax(numero) {
    return numero > maiorValor || numero < menorValor
}