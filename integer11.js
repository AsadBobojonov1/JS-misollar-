const prompt = require("prompt-sync")();
let a = prompt("a =");
let x = a % 10;
let y = Math.floor(a / 10);
let kop = x * y;
let yig = x + y;
console.log(`yigindi:${yig} , kopaytma:${kop}`);
