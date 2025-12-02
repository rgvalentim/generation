// Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, 
// construa um algoritmo que consiga pesquisar dados no vetor, onde o usuário irá 
// digitar um número e o programa deve exibir na tela a posição deste número no 
// vetor. Caso o número não seja encontrado, a mensagem: “Não foi encontrado!” 
// deve ser exibida na tela.

import readline from 'readline-sync';

const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

console.log(`Vetor atual: [${vetor}]`);

const numeroProcurado = readline.questionInt("\nDigite o numero que voce deseja encontrar: ");
const posicao = vetor.indexOf(numeroProcurado);

if (posicao !== -1) {
    console.log(`\nO numero ${numeroProcurado} esta localizado na posicao: ${posicao}`);
} else {
    console.log(`\nO numero ${numeroProcurado} nao foi encontrado!`);
}