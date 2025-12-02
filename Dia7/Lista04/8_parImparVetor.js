// Elabore um algoritmo que leia 10 números inteiros e armazene em um vetor. 
// Em seguida, mostre na tela:
// Todos os elementos dos índices ímpares do vetor 
// Todos os elementos do vetor que são números pares
// A Soma de todos os elementos do vetor
// A Média de todos os elementos do vetor, armazenada em uma variável do tipo real


import readline from 'readline-sync';

const numeros = [];
let somaTotal = 0;

for (let i = 0; i < 10; i++) {
    const valor = readline.questionInt(`Digite o ${i + 1}o numero: `);
    numeros[i] = valor;
    somaTotal = somaTotal + valor;
}

console.log("\n--- Resultados ---");
console.log("Elementos nos indices impares:");
for (let i = 1; i < 10; i = i + 2) {
    console.log(numeros[i]);
}

console.log("\nElementos pares:");
for (let i = 0; i < 10; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(numeros[i]);
    }
}

console.log(`\nSoma: ${somaTotal}`);
const media = somaTotal / numeros.length;
console.log(`Media: ${media.toFixed(2)}`);