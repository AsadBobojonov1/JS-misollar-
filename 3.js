const prompt = require("prompt-sync")();
let a = Number(prompt("a ="));
let q = Math.floor(a / 10);
let w = q % 10;
let t = Math.floor(q / 10);
let u = a % 10;
let new_num = `${u}` + `${w}` + `${t}`;
console.log(new_num);
