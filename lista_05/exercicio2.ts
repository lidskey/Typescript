import readlinesync = require("readline-sync")
import { Stack } from "../interface/Stack";

const pilha = new Stack<string>();
let livro: string; 
let opcao: number;

console.log("*****************************\n")
console.log("1 --- Adicionar Livro na Pilha")
console.log("2 --- Listar todos os Livros")
console.log("3 --- Retirar Livro da Pilha")
console.log("0 --- Sair")
console.log("\n******************************")

opcao = readlinesync.questionInt(`Entre com a opcao desejada: `)

while (opcao != 0) {
    switch (opcao) {
        case 1:
            livro=readlinesync.question(`Digite o nome: `)
            pilha.push(livro);    
            break;
        case 2:
            if(pilha.isEmpty()!== true){
                pilha.printStack();
            } else {
                console.log(`Nao há itens na lista.`)
                }
            break;
        case 3:
            pilha.pop()
            break;
        
        default:
            console.log("Opção inválida! ");
    }    
    opcao = readlinesync.questionInt(`Entre com a opcao desejada: `)
}
console.log("Programa Finalizado! ")