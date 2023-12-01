const prompt = require("prompt-sync")();
let a = Number(prompt("a ="));
let q = Math.floor(a / 10);
let t = q % 10;
let r = Math.floor(q / 10);
let num = `${t}` + `${r}` + `${e}`;
console.log(num);
