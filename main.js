
var name = prompt('Informe seu nome:')
var msg = document.querySelector('.outside__title')
var nameUpper = name.toUpperCase();
msg.innerHTML = `Você tem uma Mensagem, ${nameUpper} !`


const messages = [
    'Feliz aniversário! É com um enorme prazer que venho lhe dar os meus parabéns. Quero lhe desejar grandes bênçãos na sua vida',
    'Feliz aniversário! Que sua vida seja cheia de bons e felizes momentos. Parabéns!',
    'Parabéns pelo seu dia! Desejo que você seja muito feliz e nunca deixe que nenhuma nuvem esconda o sol que brilha no seu peito.',
    'Esta frase é uma caixinha cheia de alegria, embrulhada com carinho, selada com um sorriso e enviada com um beijo. Feliz aniversário!'
]


function openCard() {
    document.getElementById('outside').className = 'openCard';

    var msg = document.getElementById('message')
    var i = Math.floor(4 * Math.random())
    msg.innerHTML = messages[i]
}

function closeCard() {
    document.getElementById('outside').className = '';
}