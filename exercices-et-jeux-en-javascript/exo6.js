const read = require("readline-sync");

console.log("---Calculatrice--");

let nb1 = read.questionFloat("Nombre 1 ? ");
let ope = read.question("operation demandee,choix possible (+, -, /ou *) ? ");
let nb2 = read.questionFloat("Nombre 2 ? ");

if (ope === '+')
{
    console.log(`${nb1} ${ope} ${nb2} = ${nb1+nb2}`)
} 
else if (ope === '*')
{
    console.log(`${nb1} ${ope} ${nb2} = ${nb1*nb2}`)
} 
else if (ope === '/')
{
    console.log(`${nb1} ${ope} ${nb2} = ${nb1/nb2}`)
} 
else if (ope === '-')
{
    console.log(`${nb1} ${ope} ${nb2} = ${nb1-nb2}`)
} 
else 
{
    console.log("operation non comprise")
}
