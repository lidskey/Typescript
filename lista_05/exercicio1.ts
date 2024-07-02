import readlinesync = require("readline-sync")
import { Queue } from "../interface/Queue";

const fila = new Queue<String>();
let opcao!:number;
let nome: string;

console.log("*****************************\n")
console.log("1 --- Adicionar Cliente na Fila")
console.log("2 --- Listar todos os Clientes")
console.log("3 --- Retirar Cliente da Fila")
console.log("0 --- Sair")
console.log("\n******************************")

opcao = readlinesync.questionInt(`Entre com a opcao desejada: `)

while (opcao != 0) {
    switch (opcao) {
        case 1:
            nome=readlinesync.question(`Digite o nome: `)
            fila.enqueue(nome);    
            console.log("\nCliente adicionado!\n")
            break;
        case 2:
            console.log("\nLista de Clientes na Fila: \n")
            if(fila.isEmpty()!== true){
                fila.printQueue();
            } else {
                console.log(`\nNao ha itens na lista.\n`)
                }
            break;
        case 3:
            fila.dequeue()
            break;
        
        default:
            console.log("\nOpção inválida!\n");
    }    
    opcao = readlinesync.questionInt(`\nEntre com a opcao desejada: `)
}
console.log("Programa Finalizado! ")