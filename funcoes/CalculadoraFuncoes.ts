import readlinesync = require("readline-sync");

let numero1: number;
let numero2: number;

numero1 = readlinesync.questionFloat("Digite o primeiro numero: ");
numero2 = readlinesync.questionFloat("Digite o segundo numero: ");

console.log(`\nSoma: ${numero1} + ${numero2} = ${somar(numero1,numero2)}`);
console.log(`\nSubtração: ${numero1} - ${numero2} = ${subtrair(numero1, numero2)}`);
console.log(`\nMultiplicação: ${numero1} * ${numero2} = ${multiplicar(numero1, numero2)}`);

let resultadoDivisao = dividir(numero1, numero2);
if(resultadoDivisao!==null){
console.log(`\nDivisão: ${numero1} / ${numero2} = ${dividir(numero1, numero2)}`);
}else {
} console.log("\nNão existe divisão por zero!");


autor();

function somar(numero1: number, numero2: number): number{
    return numero1 + numero2;
}

function subtrair(numero1: number, numero2: number): number{
    return numero1 - numero2
}
function multiplicar(numero1: number, numero2: number): number{
    return numero1 * numero2
}
function dividir(numero1: number, numero2: number): number|null{
    let divisao: number = numero1 / numero2
    return(divisao !== Infinity ? divisao : null)//if ternario
}

function autor(): void{
    console.log("\nFeito por Liara.")
}