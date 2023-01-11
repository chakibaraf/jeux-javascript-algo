const read = require("readline-sync");

/* caster un string en number
let prixF = +read.question("Quel est le prix de fabrication? ");*/

console.log("---Profit ou Perte---");
let prixF = read.questionFloat("Quel est le prix de fabrication ? ");
let prixV = read.questionFloat("Quel est le prix de vente ? ");
let diff = Math.abs(prixF - prixV);

console.log("prix de fab : " + prixF);
console.log("prix de vente : " + prixV);

if (prixV > prixF) {
  console.log("profit de " + diff + "euro(s)");
} else {
  console.log(`Perte de ${diff} euro(s) `);
}
