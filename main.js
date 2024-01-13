'use strict'

function calculoIMC(peso, altura) {
    altura = altura / 100;
    return (peso / (altura * altura));
}

const formImc = document.getElementById('form')

formImc.addEventListener('submit', function (event) {
    event.preventDefault();

    const peso = document.getElementById('input-peso').value;
    const altura = document.getElementById('input-altura').value;
    let description = '';
    const IMC = document.getElementById('IMC');

    const ImcFinal = calculoIMC(peso, altura);

    if (ImcFinal < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!';
    } else if (ImcFinal >= 18.5 && ImcFinal <= 25) {
        description = "Você está no peso ideal!";
    } else if (ImcFinal > 25 && ImcFinal <= 30) {
        description = "Cuidado! Você está com sobrepeso!";
    } else if (ImcFinal > 30 && ImcFinal <= 35) {
        description = "Cuidado! Você está com obesidade moderada!";
    } else if (ImcFinal > 35 && ImcFinal <= 40) {
        description = "Cuidado! Você está com obesidade severa!";
    } else {
        description = "Cuidado! Você está com obesidade morbida!";
    }

    IMC.innerHTML = parseFloat(ImcFinal).toFixed(2);

    document.getElementById('description').textContent = description;
})
