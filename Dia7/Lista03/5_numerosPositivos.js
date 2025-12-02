// Escreva um algoritmo, que leia números inteiros via teclado, até que o número 
// zero seja digitado. Ao final, mostre na tela a soma de todos os números 
// digitados, que sejam positivos.

import readline from 'readline-sync';

let somaDosPositivos = 0;
let numeroDigitado;

do {
    numeroDigitado = readline.questionInt("Digite um numero inteiro (ou 0 para encerrar): ");

    if (numeroDigitado > 0) {
        somaDosPositivos += numeroDigitado;
    }

} while (numeroDigitado !== 0);

console.log(`\nA soma dos numeros positivos eh: ${somaDosPositivos}`);