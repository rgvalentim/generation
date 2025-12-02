/*Uma empresa desenvolveu uma pesquisa interna para conhecer os colaboradores da área de Desenvolvimento e precisam de um sistema para analisar os dados. Escreva um algoritmo, que leia via teclado as seguintes informações de cada colaborador:
Idade (Número inteiro)
Identidade de Gênero (Número Inteiro): 
1 – Mulher Cis
2 – Homem Cis
3 – Não Binário
4 – Mulher Trans
5 – Homem Trans
6 – Outros
Pessoa Desenvolvedora (Número Inteiro):
1 – Backend
2 – Frontend
3 – Mobile
4 – FullStack
Após digitar o Tipo de Pessoa Desenvolvedora, o sistema deverá perguntar ao usuário se ele deseja continuar a leitura dos dados de um novo colaborador ou não (S/N). Caso seja pressionada a tecla N, mostre na tela:

O número de pessoas desenvolvedoras Backend
O número de Mulheres Cis e Trans desenvolvedoras Frontend
O número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos
O número de Não Binários desenvolvedores FullStack menores de 30 anos
O número total de pessoas que responderam à pesquisa
A média de idade das pessoas que responderam à pesquisa
*/

import readline from 'readline-sync';

let totalBackend = 0;
let totalMulheresFrontend = 0;
let totalHomensMobile40 = 0;
let totalNaoBinariosFullStack30 = 0;
let totalPessoas = 0;
let somaIdades = 0;

let desejaContinuar = true; 

while (desejaContinuar) {

    const idade = readline.questionInt("\nDigite a idade: ");

    console.log("Generos: 1-Mulher Cis, 2-Homem Cis, 3-Nao Binario, 4-Mulher Trans, 5-Homem Trans, 6-Outros");
    const genero = readline.questionInt("Digite a identidade de genero: ");

    console.log("Cargos: 1-Backend, 2-Frontend, 3-Mobile, 4-FullStack");
    const cargo = readline.questionInt("Digite o cargo: ");

    totalPessoas++;
    somaIdades += idade;

    if (cargo === 1) totalBackend++;

    if ((genero === 1 || genero === 4) && cargo === 2) totalMulheresFrontend++;

    if ((genero === 2 || genero === 5) && cargo === 3 && idade > 40) totalHomensMobile40++;

    if (genero === 3 && cargo === 4 && idade < 30) totalNaoBinariosFullStack30++;

    console.log("\n--------------------------------");
    desejaContinuar = readline.keyInYNStrict("Deseja registrar outra pessoa?");
}

// Resultados Finais
console.log("\n__________ Resultados da Pesquisa __________");
console.log(`Total de pessoas Backend: ${totalBackend}`);
console.log(`Total de Mulheres (Cis/Trans) em Frontend: ${totalMulheresFrontend}`);
console.log(`Total de Homens (Cis/Trans) Mobile maiores de 40 anos: ${totalHomensMobile40}`);
console.log(`Total de Nao Binaries FullStack menores de 30 anos: ${totalNaoBinariosFullStack30}`);
console.log(`Numero total de pessoas que responderam: ${totalPessoas}`);

if (totalPessoas > 0) {
    const mediaIdade = somaIdades / totalPessoas;
    console.log(`Media de idade: ${mediaIdade.toFixed(2)} anos`);
} else {
    console.log("Nenhum dado foi registrado.");
}