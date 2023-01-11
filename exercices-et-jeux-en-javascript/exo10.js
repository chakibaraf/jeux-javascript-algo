const read = require('readline-sync');
console.log("---true pyramide---")
let val = +read.question("Nombre d'etage de la pyramide:");
let etoile = '';
let espace = "";
let affichage = "";
for(let i= 1; i <= val; i++){
    if(i === 1){
        etoile = "*";
        espace = "    ";
        affichage = espace + etoile;
        console.log(`${affichage}`);
    }else{
        etoile += "**";
        espace = espace.substring(0, espace.length - 1);
        affichage = espace + etoile;
        console.log(`${affichage}`);
    }
}
