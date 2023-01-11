const read = require("readline-sync");

console.log("---starstair---");

let nb = read.questionInt("Quel est le nombre de marche de l'escalier ? ");
let stars = "";

for (let i=1; i<=nb;i++)
{
//console.log(i);
stars=stars+"*";
console.log(stars);

}
