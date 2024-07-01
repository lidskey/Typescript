import readlinesync = require("readline-sync");

//const=casa funções de array = mudar os moveis da casa apenas 



const numeros: Array<number> = new Array<number>(); //new cria um objeto


numeros.push(7);
numeros.push(5);
numeros.push(1);
numeros.push(7);

//numeros.push(readlinesync.questionFloat("Digite um número: ")) //leitura de dados mais simples

numeros.unshift(2.5,3.6,8) //varios dados de uma vez e coloca os dados no começo 

for (let numero of numeros) 
    console.log(numero)

console.log(`\nA posição do elemento 5 é: ${numeros.indexOf(5)}`) //usar indexof no projeto
console.log(`\nA posição do elemento é: ${numeros.indexOf(50)}`) 
console.log(`\nA posição do elemento é: ${numeros.indexOf(7)}`) // traz somente o primeiro 7 (em caso de ter 2 números repetidos)

console.log(`\nExiste no Array o elemento 5?: ${numeros.includes(5)}`)  //dira se existe esse numero no array

numeros[numeros.indexOf(5)] = 10 //para fazer uma atualização no valor do indice: troca o 5 pelo 10, sera usado no projetinho

console.table(numeros);

numeros.splice(numeros.indexOf(10), 1) //para apagar e o 1 indica a quantidade de elementos que será apagado

console.table(numeros);