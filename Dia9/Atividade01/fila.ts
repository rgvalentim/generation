import { Queue } from "./Queue";
import readline from 'readline-sync';

const filaBanco = new Queue<string>();
let opcao: number;

do {
   console.log("===========================================")
   console.log("1 - Adicionar Cliente na Fila");
   console.log("2 - Listar todos os Clientes");
   console.log("3 - Retirar Cliente da Fila");
   console.log("0 - Sair");
   console.log("===========================================")
   opcao = readline.questionInt("Digite a opcao desejada: ")
   


   switch (opcao){
      case 1: //Adicionar cliente
         const cliente = readline.question("\nInforme o nome do cliente: ")
         filaBanco.enqueue(cliente);
         console.log("\nCliente adicionado com sucesso!\n");
         break;

      case 2: //listar cliente
         console.log("\nLista de Clientes na Fila:\n");
         if (filaBanco.isEmpty()) {
                console.log("A Fila está vazia!\n");
         } else {
            filaBanco.printQueue();
         }
         break;

      case 3: //retira da fila e chama cliente
         if (filaBanco.isEmpty()) {
                console.log("\nA Fila esta vazia!");
         } else {
                const clienteChamado = filaBanco.dequeue();
                console.log(`\nO Cliente ${clienteChamado} foi chamado!`);
                console.log("\nFila atual: ");
                filaBanco.printQueue();
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