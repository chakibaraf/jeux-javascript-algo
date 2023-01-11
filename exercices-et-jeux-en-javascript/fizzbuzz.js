const read = require("readline-sync");

let nb = read.questionInt("Choississez un nombre entier ? ");

let affichage = "";

for (i = 0; i <= nb; i++) {
  let multiple3 = i / 3;
  let multiple5 = i / 5;
  if (Number.isInteger(multiple3) && Number.isInteger(multiple5) ) {
    affichage = "FIZZBUZZ";
    console.log(affichage);
  } else if (Number.isInteger(multiple3)) {
    affichage = "FIZZ";
    console.log(affichage);
  } else if (Number.isInteger(multiple5)) {
    affichage = "BUZZ";
    console.log(affichage);
  } else {
    console.log(i);
  }
}
