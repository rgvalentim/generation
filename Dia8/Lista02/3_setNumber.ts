import readline from 'readline-sync';

const numeros: Set<number> = new Set<number>();
let numero;
for (let i = 0; i < 10; i++){
   numero = readline.questionInt(`Digite o ${i+1}o numero: `);
   while (numeros.has(numero)){
      console.log(`O numero ${numero} jah foi digitado!`);
      numero = readline.questionInt(`Digite o ${i+1}o numero: `);      
   }
   numeros.add(numero);
}

console.log("\nListar dados do Set:")
for (numero of numeros){
   console.log(numero);   
}
