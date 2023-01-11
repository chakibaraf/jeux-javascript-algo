const read = require("readline-sync");

console.log("somme d'un entier");

let nb1 = read.questionInt("Saississez un nombre ? ");
let nb2 = nb1;
let texte = nb1

while  (nb1>0)
{
    
    nb1--;
    nb2 = nb2 + nb1;
    texte = texte + " + " + nb1;
};
console.log(texte);
console.log(nb2);
