const prompt = require("prompt-sync")();
let r = Number(prompt("r ="));
let n = Number(prompt("n ="));
let a = Number(prompt("a ="));
let b = Number(prompt("b ="));
let s = (1 + r / 100) ** n / Math.sqrt(a ** 2 + b ** 2);
console.log(s);
