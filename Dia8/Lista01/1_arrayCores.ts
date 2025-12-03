import readline from 'readline-sync';

const cores: Array<string> = new Array<string>();
let cor;
for (let i = 0; i <= 4; i++){
   cor = readline.question(`Digite a ${i+1}a cor: `)
   cores.push(cor);
}

console.log("\nTodas as cores adicionadas: ")
for (cor of cores){
   console.log(cor);
}
console.log("\nTodas as cores em ordem crescente: ")
for (cor of cores.sort()) {
   console.log(cor);
}

