const prompt = require("prompt-sync")();
let a = prompt("a =");
let b = prompt("b =");
let c = prompt("c =");
let x = a < b && c > b ? true : false;
console.log(x);
