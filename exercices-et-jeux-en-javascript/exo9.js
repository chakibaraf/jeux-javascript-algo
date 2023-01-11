const read = require("readline-sync");

console.log("---pyramide de côté---");

let nb = read.questionFloat("Quel est le nombre de palier de la pyramide ? ");
let stars = "";

for (let i=1; i<=nb;i++)
{
//console.log(i);
stars=stars+"*";
console.log(stars);

}

for (let i=nb; i>1;i--)
{
    stars=stars.slice(0,-1);
    console.log(stars); 
}
