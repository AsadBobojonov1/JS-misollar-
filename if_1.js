const prompt = require("prompt-sync")();
let a = Number(prompt("a ="));
let b = Number(prompt("b ="));
let c = Number(prompt("c ="));
const array = [];
array.push(a, b, c);
for (i in array) {
  if (array[0] > array[i]) {
    array[0] = array[i];
  }
}
console.log(array[0]);
