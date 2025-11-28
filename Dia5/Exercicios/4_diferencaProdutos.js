import readline from 'readline-sync';

let valor1 = readline.questionInt('Digite o primeiro valor: ');
let valor2 = readline.questionInt('Digite o segundo valor: ');
let valor3 = readline.questionInt('Digite o terceiro valor: ');
let valor4 = readline.questionInt('Digite o quarto valor: ');

let diferenca = (valor1 * valor2) - (valor3 * valor4);

console.log(`A diferença entre o produto dos dois primeiros e o produto dos dois últimos valores é: ${diferenca}`);
