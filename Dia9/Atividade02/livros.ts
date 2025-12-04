import { Stack } from "./Stack";
import readline from 'readline-sync';

const pilhaLivros = new Stack<string>();
let opcao: number;

do {
   console.log("===========================================")
   console.log("1 - Adicionar um novo livro na pilha");
   console.log("2 - Listar todos os livros da pilha");
   console.log("3 - Retirar um livro da pilha");
   console.log("0 - Sair");
   console.log("===========================================")
   opcao = readline.questionInt("Digite a opcao desejada: ")
   


   switch (opcao){
      case 1: //Adicionar um novo livro na pilha
         const livro = readline.question("\nInforme o nome do livro: ")
         pilhaLivros.push(livro);
         console.log("\nLivro adicionado ah pilha com sucesso!\n");
         break;

      case 2: //Listar todos os livros da pilha
         if (pilhaLivros.isEmpty()) {
                console.log("\nA Pilha está vazia!\n");
         } else {
            console.log("\nLista de livros na pilha:\n");
            pilhaLivros.printStack();
            console.log("\n")
         }
         break;

      case 3: //retira da fila e chama cliente
         if (pilhaLivros.isEmpty()) {
                console.log("\nA Pilha esta vazia!\n");
         } else {
                const livroRetirado = pilhaLivros.pop();
                console.log(`\nO livro "${livroRetirado}" foi retirado!`);
                console.log("\nPilha atual: ");
                pilhaLivros.printStack();
                console.log("\n");
         }
         break;

      case 0: //sai do laço
         console.log("\nObrigado por utilizar o nosso sistema.")
         break;

      default:
         console.log("\nOpcao inválida!");
         break;
   }
} while(opcao !== 0);