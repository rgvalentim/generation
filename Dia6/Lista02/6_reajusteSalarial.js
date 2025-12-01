// Com base na tabela abaixo, escreva um algoritmo que leia o Nome do Colaborador
//  (string), o Código do Cargo do Colaborador (número inteiro entre 1 e 6) e o 
//  Salário (número real). A seguir, mostre na tela o Nome do Colaborador, o Cargo
//   e o novo Salário reajustado.

import readline from 'readline-sync';

console.log("Codigo\t\tCargo");
console.log("1     \t\tGerente");
console.log("2     \t\tVendedor");
console.log("3     \t\tSupervisor");
console.log("4     \t\tMotorista");
console.log("5     \t\tEstoquista");
console.log("6     \t\tTécnico de TI");

const nome = readline.question("\nDigite o nome do colaborador: ");
const cod = readline.questionInt("Digite o codigo do cargo do colaborador: ");
const salario = readline.questionFloat("Digite o salario do colaborador: ");
let novoSalario, aumento;

switch (cod) {
   case 1:
      aumento = 1.1;
      novoSalario = salario * aumento;
      console.log(`\n Nome do colaborador: ${nome}`);
      console.log("Cargo: Gerente");
      console.log(`Salario com reajuste: R$ ${novoSalario.toFixed(2)}`);
      break;
   case 2:
      aumento = 1.07;
      novoSalario = salario * aumento;
      console.log(`\n Nome do colaborador: ${nome}`);
      console.log("Cargo: Vendedor");
      console.log(`Salario com reajuste: R$ ${novoSalario.toFixed(2)}`);
      break;
   case 3:
      aumento = 1.09;
      novoSalario = salario * aumento;
      console.log(`\n Nome do colaborador: ${nome}`);
      console.log("Cargo: Supervisor");
      console.log(`Salario com reajuste: R$ ${novoSalario.toFixed(2)}`);
      break;
   case 4:
      aumento = 1.06;
      novoSalario = salario * aumento;
      console.log(`\n Nome do colaborador: ${nome}`);
      console.log("Cargo: Motorista");
      console.log(`Salario com reajuste: R$ ${novoSalario.toFixed(2)}`);
      break;
   case 5:
      aumento = 1.05;
      novoSalario = salario * aumento;
      console.log(`\n Nome do colaborador: ${nome}`);
      console.log("Cargo: Estoquista");
      console.log(`Salario com reajuste: R$ ${novoSalario.toFixed(2)}`);
      break;
   case 6:
      aumento = 1.08
      novoSalario = salario * aumento;
      console.log(`\n Nome do colaborador: ${nome}`);
      console.log("Cargo: Tecnico de TI");
      console.log(`Salario com reajuste: R$ ${novoSalario.toFixed(2)}`);
      break;
   default:
      console.log("\nCodigo invalido!");
}