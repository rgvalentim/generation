// Com base na tabela abaixo, escreva um algoritmo que leia o código de um item 
// (número inteiro entre 1 e 6) e a quantidade comprada deste item
//  (número inteiro). A seguir, mostre na tela o valor total da conta e o nome 
//  do produto que foi comprado.

import readline from 'readline-sync';

console.log("Codigo\t\tProduto");
console.log("1     \t\tCachorro Quente");
console.log("2     \t\tX-Salada");
console.log("3     \t\tX-Bacon");
console.log("4     \t\tX-Bauru");
console.log("5     \t\tRefrigerante");
console.log("6     \t\tSuco de laranja");

const cod = readline.questionInt("\nDigite o codigo do item: ");
const qntd = readline.questionInt("Digite a quantidade comprada deste item: ");

let preco;

switch (cod) {
   case 1:
      preco = qntd * 10.00;
      console.log(`\nProduto: Cachorro Quente`);
      console.log(`Valor Total: R$ ${preco.toFixed(2)}`);
      break;
   case 2:
      preco = qntd * 15.00;
      console.log(`\nProduto: X-Salada`);
      console.log(`Valor Total: R$ ${preco.toFixed(2)}`);
      break;
   case 3:
      preco = qntd * 18.00;
      console.log(`\nProduto: X-Bacon`);
      console.log(`Valor Total: R$ ${preco.toFixed(2)}`);
      break;
   case 4:
      preco = qntd * 12.00;
      console.log(`\nProduto: Bauru`);
      console.log(`Valor Total: R$ ${preco.toFixed(2)}`);
      break;
   case 5:
      preco = qntd * 8.00;
      console.log(`\nProduto: Refrigerante`);
      console.log(`Valor Total: R$ ${preco.toFixed(2)}`);
      break;
   case 6:
      preco = qntd * 13.00;
      console.log(`\nProduto: Suco de laranja`);
      console.log(`Valor Total: R$ ${preco.toFixed(2)}`);
      break;
   default:
      console.log("Opcao invalida!");
      break;
}