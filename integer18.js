const prompt = require("prompt-sync")();
let x = Number(prompt("x ="));
let y = Number(prompt("y ="));
let s =
  6 * Math.pow(x, 3) * Math.pow(y, 5) +
  4 * Math.pow(x, 4) * Math.pow(y, 3) -
  24 * x * y;
console.log(s);
