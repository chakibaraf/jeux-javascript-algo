const read = require("readline-sync");
console.log("---nombre de billets et de pieces---")
let nbr = read.questionFloat("Somme a diviser en billets et pieces ? ")

let monnaies = [
  500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
];

for (let i = 0; i < monnaies.length; i++) {
  let monnaie = monnaies[i];
  if (nbr >= monnaie) {
    let nbrMonnaie = Math.round(nbr / monnaie);
    if (monnaie > 2) {
      console.log(`Nombre de billet de ${monnaie} = ${nbrMonnaie}`);
    }
    else console.log(`Nombre de piece de ${monnaie} = ${nbrMonnaie}`);
    nbr -= nbrMonnaie * monnaie;
  }
}

