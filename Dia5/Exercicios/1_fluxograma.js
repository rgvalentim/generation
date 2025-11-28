import readline from 'readline-sync';

let salario = readline.questionFloat('Digite o salario: ');
let abono = readline.questionFloat('Digite o abono: ');
let novoSalario = salario + abono;

console.log(`Novo salario: R$ ${novoSalario}`);