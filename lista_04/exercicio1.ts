import readlinesync = require("readline-sync");

const numeros: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);
let numero:number;

numero=(readlinesync.questionFloat("Digite o numero que voce deseja encontrar: "))

if (numero <= 9) {
    console.log(`O numero ${numero} está localizado na posição: ${numeros.indexOf(numero)}`)
} else {
    console.log(`O numero ${numero} nao foi encontrado!`)
}