const read = require("readline-sync");
console.log("---JustePrix---")
let maxAleatoire = read.questionInt("Nombre aleatoire entre 0 et :");
let nb = Math.round(maxAleatoire * Math.random());
let nbTours = read.questionInt("Nombre de tours en lequel vous souhaitez resoudre le probleme ? ")

console.log("Determiner le juster prix?");

for (i = 0; i <= nbTours; i++) {
    if (i<nbTours)
    {
  console.log(`${nbTours-i} essais !!`);}
  else if (i=nbTours){
    console.log(`dernier essai !!`);}
  let réponse = read.questionFloat("Nombre ? ");
  if (réponse > nb) {
    console.log("moins");
  } else if (réponse < nb) {
    console.log("plus");
  } else if ((réponse = nb)) {
    console.log("juste prix");
    break;
  }
  // console.log(nb);
}
