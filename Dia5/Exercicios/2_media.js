import readline from 'readline-sync';

let nota1 = readline.questionFloat('Digite a primeira nota: ');
let nota2 = readline.questionFloat('Digite a segunda nota: ');
let nota3 = readline.questionFloat('Digite a terceira nota: ');
let nota4 = readline.questionFloat('Digite a quarta nota: ');

let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`A media das notas é: ${media}`);