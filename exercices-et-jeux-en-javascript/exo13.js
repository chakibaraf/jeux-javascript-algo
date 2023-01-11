console.log("---tri dans ordre croissant d''une liste---")
let list = [12,25,5,7,6,-5];
console.log("Liste avant le tri")
console.log(list)
let list2 = list.sort((a, b) => a - b);
console.log("Liste après le tri")
console.log(list)
