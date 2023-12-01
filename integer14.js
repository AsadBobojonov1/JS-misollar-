const prompt = require("prompt-sync")();
let n = Number(prompt("n= "));
let x = Number(prompt("x= "));
let s = Math.pow(n, x) + Math.pow(6, x);
console.log(s);
