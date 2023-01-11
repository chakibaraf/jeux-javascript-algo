const read = require("readline-sync");

console.log("---Addition de deux nombres---")
let val1 = read.questionInt("Quel est votre premier nombre ? ");
let val2 = read.questionInt("Quel est votre deuxième nombre ? ");

console.log(`${val1} + ${val2} = ${val1+val2}`);
