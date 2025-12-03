import readline from 'readline-sync';

const numeros: Array<number> = new Array<number>(0,1,2,3,4,5,6,7,8,9);

let numero = readline.questionInt("Digite um numero inteiro: ");

if (numeros.indexOf(numero) !== -1) {
   console.log(`O numero ${numero} foi encontrado na posição ${numeros.indexOf(numero)}`);
} else {
   console.log(`O numero ${numero} não foi encontrado no array.`)
}
