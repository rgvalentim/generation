// Escreva um algoritmo que leia 3 palavras (string), que definem as 
// características de um tipo de animal, segundo o diagrama abaixo, que deve ser
//  lido da esquerda para a direita.

import readline from 'readline-sync';

console.log("ATENCAO: Digite as palavras em minuscula e sem acentuacao!\n")
const palavra1 = readline.question("Digite a primeira palavra: ");
const palavra2 = readline.question("Digite a segunda palavra: ");
const palavra3 = readline.question("Digite a terceira palavra: ");

if (palavra1 === "vertebrado") {
    if (palavra2 === "ave") {
        if (palavra3 === "carnivoro") {
            console.log("\nResultado: aguia");
        } else {
            console.log("\nResultado: pomba");
        }
    } else {
        if (palavra3 === "onivoro") {
            console.log("\nResultado: homem");
        } else {
            console.log("\nResultado: vaca");
        }
    }

} else {
    if (palavra2 === "inseto") {
        if (palavra3 === "hematofago") {
            console.log("\nResultado: pulga");
        } else {
            console.log("\nResultado: lagarta");
        }

    } else {
        if (palavra3 === "hematofago") {
            console.log("\nResultado: sanguessuga");
        } else {
            console.log("\nResultado: minhoca");
        }
    }
}