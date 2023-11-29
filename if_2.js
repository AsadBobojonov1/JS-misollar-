const prompt = require("prompt-sync")();
let a = Number(prompt("a ="));
let b = Number(prompt("b ="));
let c = Number(prompt("c ="));
const array = [];
array.push(a, b, c);
let max = Math.max(...array);
let min = Math.min(...array);
for (i in array) {
  if (min < array[i] && max > array[i]) {
    console.log(array[i]);
  }
}
