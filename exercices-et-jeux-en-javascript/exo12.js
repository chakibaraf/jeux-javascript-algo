console.log("---Liste des températures---");
let temperatures = [12, 25, 5, 7, 6, -5,-3,3];
console.log(temperatures);
let tempProche = temperatures[0];

for (let index = 0; index < temperatures.length; index++) {
  let temperature = temperatures[index];

  if(
      (Math.abs(temperature) < Math.abs(tempProche))
      ||
      ((Math.abs(temperature) == Math.abs(tempProche))  && temperature<0)
       ) {
    tempProche = temperature;
  }
}
console.log(`La tempétature la plus basse est ${tempProche} °C`);

