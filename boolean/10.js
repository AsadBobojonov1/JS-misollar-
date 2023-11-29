const prompt = require("prompt-sync")();
let a = prompt("a =");
let b = prompt("b =");
let x = a % 2 == 0 && b % 2 == 0 ? true : false;
console.log(x);
