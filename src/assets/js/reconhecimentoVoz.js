const elementoChute = document.querySelector('#chute')
    // Assim que pagina carregar define esse sistema de reconhecimento de voz.
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
// Cria o objeto para manipular os metodos.
const recognition = new SpeechRecognition();
// Define a linguagem que o sistema vai reconhecer.
console.log(recognition)
recognition.lang = 'pt-Br'
recognition.start();
// adiciona evento, e a função
recognition.addEventListener('result', onSpeak);
// captura o elemento que vem a fala capturada
function onSpeak(e) {
    console.log(e)
    const chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaValorChuteValido(chute)
    console.log(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse:${chute}</div>
    `
}

recognition.addEventListener('end', () => recognition.start())