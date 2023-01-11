console.log("---Saissisez trois nombres---");

let n1 = read.questionFloat("nombre 1 ? ");
let n2 = read.questionFloat("nombre 2 ? ");
let n3 = read.questionFloat("nombre 3 ? ");
let List = [n1, n2, n3];


if (n1 > n2 && n1 > n3) {
  console.log(`[${List}] --> le nombre ${n1} est le plus grand`);
} else if (n2 > n1 && n2 > n3) {
console.log(`[${List}] --> le nombre ${n2} est le plus grand`);
} else {
console.log(`[${List}] --> le nombre ${n3} est le plus grand`);
}
