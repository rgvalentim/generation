// Para doar sangue é necessário ter entre 18 e 69 anos. Pessoas com idade entre 
// 60 e 69 anos, só podem doar sangue se não for a sua primeira doação. Escreva um
//  Algoritmo que leia via teclado o nome do doador (string), a idade 
//  (número inteiro) do doador e se já fez outras doações de sangue (boolean). 
//  Conforme as Regras para a doação de sangue citadas acima, mostre na tela 
//  se o doador está Apto ou Não Apto para doar sangue.

import readline from 'readline-sync';

const nome = readline.question("Digite o nome do doador: ");
const idade = readline.questionInt("Digite a idade do doador: ");
const ehPrimeiraDoacao = readline.keyInYN("Primeira doacao? ");

let estaApto = false;

if (idade >= 18 && idade <= 69) {
    estaApto = true;

    if (idade >= 60 && ehPrimeiraDoacao) {
        estaApto = false;
    }

} else {
    estaApto = false;
}

if (estaApto) {
    console.log(`\n${nome} esta apto(a) para doar sangue.`);
} else {
    console.log(`\n${nome} nao esta apto(a) para doar sangue.`);
}