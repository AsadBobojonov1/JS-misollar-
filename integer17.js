const prompt = require("prompt-sync")();
let x = Number(prompt("x ="));
let y = Number(prompt("y ="));
let s = Math.pow(x, 4) + 5 * Math.pow(x, 2) + Math.pow(x, 3) * y;
console.log(s);
