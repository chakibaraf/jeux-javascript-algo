let cat = "Catastrophique, il faut tout revoir";
let Ins = "Insuffisant";
let Peu = "Peut mieux faire";
let Bie = "Bien";
let Exc = "Excellent, bon travail";

let notes = [5, 9, 20, 15, 12, 12, 3, 14, 16];

for (let index = 0 ; index < notes.length; index++) {
    console.log(`Note ${index + 1} : ${notes[index]}`);
  if (notes[index ]<= 4) 
  {
    console.log(cat);
  }
  else if (notes[index] >= 5 && notes[index] <= 10)
   {
    console.log(Ins);
  } 
  else if (notes[index] >= 11 && notes[index] <= 14)
   {
    console.log(Peu);
  } 
  else if (notes[index] >= 15 && notes[index] <= 17) 
  {
    console.log(Bie);
  } 
  else {
    console.log(Exc);
  }
};
