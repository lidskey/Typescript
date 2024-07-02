import { Queue } from "../interface/Queue";

const fila = new Queue<number>();

for (let i = 1; i <= 10; i++){
    fila.enqueue(i)
}

console.log("\n Exibir todos os Elementos da fila: ")

fila.printQueue();

console.log(`Remover Elemento: ${fila.dequeue()}`)

fila.printQueue();

console.log("\nExibir o Primeiro Elemento da fila: " + fila.peek());

console.log("\nChecar se o Elemento 1 existe na fila? " + fila.contains(1));

fila.clear();

console.log("\nA fila está vazia? " + fila.isEmpty());