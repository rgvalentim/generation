// Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela 
// uma mensagem indicando se este número é par ou ímpar e se o número é positivo 
// ou negativo.

import readline from 'readline-sync';

const num = readline.questionInt("Digite um numero inteiro: ");

if (num === 0) {
    console.log(`O numero ${num} eh zero.`);
} else {
    const paridade = (num % 2 === 0) ? "par" : "impar";
    const sinal = (num > 0) ? "positivo" : "negativo";
    
    console.log(`\nO numero ${num} eh ${paridade} e ${sinal}.`);
}