// Desenvolva um algoritmo que simule as operações básicas de uma Conta Bancária. 
// O programa deverá ler o tipo da operação a ser realizada com base na tabela 
// abaixo (número inteiro entre 1 e 3) e o valor a ser depositado ou sacado 
// (somente nas opções 2 e 3). Considere que um saque só pode ser realizado caso 
// haja saldo suficiente. Ao final de cada operação, exiba o novo Saldo na tela. 
// A variável saldo (número real), será inicializada com o valor de R$ 1000.00. 
// Caso o número da operação esteja fora do intervalo entre 1 e 4, mostre a 
// mensagem na tela Operação Inválida!

import readline from 'readline-sync';

let saldo = 1000.00;

console.log("--- Banco Generation ---");
console.log("1 - Ver Saldo");
console.log("2 - Saque");
console.log("3 - Depósito");
console.log("------------------------");

const operacao = readline.questionInt("Digite o codigo da operacao: ");

switch (operacao) {
    case 1:
        console.log("\n--- Consulta de Saldo ---");
        console.log(`Saldo Atual: R$ ${saldo.toFixed(2)}`);
        break;

    case 2:
        console.log("\n--- Saque ---");
        const valorSaque = readline.questionFloat("Digite o valor do saque: R$ ");
        if (valorSaque > saldo) {
            console.log("\nSaldo Insuficiente!");
        } else {
            saldo = saldo - valorSaque;
            console.log(`\nSaque realizado com sucesso!`);
            console.log(`Novo Saldo: R$ ${saldo.toFixed(2)}`);
        }
        break;

    case 3:
        console.log("\n--- Depósito ---");
        const valorDeposito = readline.questionFloat("Digite o valor do deposito: R$ ");
        saldo = saldo + valorDeposito;
        
        console.log(`\nDepósito realizado com sucesso!`);
        console.log(`Novo Saldo: R$ ${saldo.toFixed(2)}`);
        break;

    default:
        console.log("\nOperação Inválida!");
        break;
}