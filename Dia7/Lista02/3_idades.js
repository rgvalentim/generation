// Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), 
// via teclado e mostre na tela o total de pessoas cuja idade seja menor que 
// 21 anos e o total de pessoas cuja idade, seja maior que 50 anos. A leitura 
// dos dados deve ser finalizada ao digitar uma idade negativa.

import readline from 'readline-sync';

let totalMenores21 = 0;
let totalMaiores50 = 0;

let idade = readline.questionInt("Digite uma idade (ou idade negativa para sair): ");

while (idade >= 0) {
    if (idade < 21) {
        totalMenores21++;
    } else if (idade > 50) {
        totalMaiores50++;
    }
   idade = readline.questionInt("Digite uma idade: ");
}

console.log(`\nTotal de pessoas com menos de 21 anos: ${totalMenores21}`);
console.log(`Total de pessoas com mais de 50 anos: ${totalMaiores50}`);