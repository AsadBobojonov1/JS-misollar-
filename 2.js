const prompt = require("prompt-sync")();
let a = Number(prompt("a ="));
let b = Number(prompt("b ="));
let s = ((1 / 6) * Math.sqrt(a) + (1 / 3) * Math.sqrt(b)) ** 2;
console.log(s);
