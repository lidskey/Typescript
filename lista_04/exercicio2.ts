import readlinesync = require("readline-sync");

const inteiros: Set<number> = new Set<number>();
var i: number;



for (i = 0; i <= 9; i++){
    inteiros.add(readlinesync.questionFloat(`Digite numeros inteiros que não se repita:`));
    
    
} console.log("Listar dados do Set: ")

for (i of inteiros) {
   console.log(i)
}
    

    

   
//console.log(readlinesync.questionFloat("Listar dados do Set: "))



