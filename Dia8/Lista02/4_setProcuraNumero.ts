import readline from 'readline-sync';

const numeros: Set<number> = new Set<number>([0,1,2,3,4,5,6,7,8,9]);
let numero = readline.questionInt("Digite um numero inteiro: ");

if(numeros.has(numero)) {
   console.log(`O numero ${numero} foi encontrado no Set.`);
} else {
   console.log(`O numero ${numero} nao foi encontrado no Set.`);   
}