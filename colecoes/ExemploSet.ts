const frutas: Set<string> = new Set<string>();
//set não tem indice
//collection set não repete informações
//set não possui indice e não é possível manipular os dados

frutas.add("Kiwi");
frutas.add("Caqui");
frutas.add("Manga");
frutas.add("Caqui");

console.table(frutas);

console.log(`\nA fruta Caqui existe? ${frutas.has("Caqui")}`) //has verifica se há tal elemento

frutas.delete("Caqui") // para apagar elementos

console.table(frutas);

