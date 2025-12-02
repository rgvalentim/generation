import readline from 'readline-sync';

let nomes = [];
let continuar;
let i = 0;

do {
    let nome = readline.question('Digite um nome: ');
    nomes[i] = nome;
    i++;
    continuar = readline.keyInYNStrict('Deseja adicionar outro nome? ');
} while (continuar);
console.log(`Os nomes digitados foram: ${nomes}`);
