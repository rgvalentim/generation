// Escreva um algoritmo, que leia números inteiros via teclado, até que o número 
// zero seja digitado. Ao final, mostre na tela a média de todos os números 
// digitados, que sejam múltiplos de 3.

import readline from 'readline-sync';

let somaMultiplos3 = 0;
let contadorMultiplos3 = 0;
let numeroDigitado;

do {
    numeroDigitado = readline.questionInt("Digite um numero inteiro (ou digite 0 para encerrar): ");

    if (numeroDigitado !== 0 && numeroDigitado % 3 === 0) {
        somaMultiplos3 += numeroDigitado;
        contadorMultiplos3++;
    }

} while (numeroDigitado !== 0);

console.log("\n--- Resultado ---");

if (contadorMultiplos3 > 0) {
    const media = somaMultiplos3 / contadorMultiplos3;
    console.log(`A media dos multiplos de 3 eh: ${media.toFixed(2)}`);
} else {
    console.log("Nenhum numero multiplo de 3 foi digitado.");
}