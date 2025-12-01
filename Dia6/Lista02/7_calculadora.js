// Com base na tabela abaixo, escreva um algoritmo que simule uma Calculadora 
// simples. O programa deverá ler dois números reais: numero1 e numero2, e na 
// sequência ler o Código da operação matemática (número inteiro entre 1 e 4). 
// A seguir, mostre na tela o resultado da operação entre os 2 números. Caso o 
// número da operação esteja fora do intervalo entre 1 e 4, mostre a mensagem na 
// tela Operação Inválida!

import readline from 'readline-sync';

console.log("Codigo\t\tOperacao");
console.log("1     \t\tSoma");
console.log("2     \t\tSubtracao");
console.log("3     \t\tMultiplicacao");
console.log("4     \t\tDivisao");

const num1 = readline.questionFloat("Digite o primeiro numero: ");
const num2 = readline.questionFloat("Digite o segundo numero: ");
const operacao = readline.questionInt("Digite o codigo da operacao: ")

switch (operacao){
   case 1:
      console.log(`${num1} + ${num2} = ${num1 + num2}`);
      break;
   case 2:
      console.log(`${num1} - ${num2} = ${num1 - num2}`);
      break;
   case 3:
      console.log(`${num1} * ${num2} = ${num1 * num2}`);
      break;
   case 4:
      if (num2 === 0){
         console.log("ERRO: Divisao por zero!");
      } else {
         console.log(`${num1} / ${num2} = ${num1 / num2}`);
      }
      break;
   default:
      console.log("Operacao invalida!");
      break;
}