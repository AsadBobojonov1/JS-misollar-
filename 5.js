const prompt = require("prompt-sync")();
let a = Number(prompt("a ="));
let b = Number(prompt("b ="));
let s = 9 * a ** 2 * b - 27 * a ** 2 * b ** 2 + 15 * b ** 2;
console.log(s.toFixed(2));
