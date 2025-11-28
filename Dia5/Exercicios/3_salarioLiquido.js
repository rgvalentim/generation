import readline from 'readline-sync';

let salarioBruto = readline.questionFloat('Digite o salario bruto: ');
let adicionalNoturno = readline.questionFloat('Digite o valor do adicional noturno: ');
let horasExtras = readline.questionFloat('Digite o valor da hora extra: ');
let qntdhorasExtras = readline.questionFloat('Digite a quantidade de horas extras: ');
let descontos = readline.questionFloat('Digite o valor dos descontos: ');

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * qntdhorasExtras) - descontos;

console.log(`Salário líquido: R$ ${salarioLiquido}`);
