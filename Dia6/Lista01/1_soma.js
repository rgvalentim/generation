// Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela 
// se a soma de A + B é maior, menor ou igual a C.


import readline from 'readline-sync';

let A, B, C, somaAB

A = readline.questionInt("Digite o valor de A: ");
B = readline.questionInt("Digite o valor de B: ");
C = readline.questionInt("Digite o valor de C: ");

somaAB = A + B;

if (somaAB > C){
   console.log(`\nA soma de ${A} + ${B} eh maior do que ${C}.`);
} else if (somaAB < C){
   console.log(`\nA soma de ${A} + ${B} eh menor do que ${C}.`);   
} else {
   console.log(`\nA soma de ${A} + ${B} eh igual a ${C}.`);
}