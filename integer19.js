const prompt = require("prompt-sync")();
let a = Number(prompt("a ="));
let qol = a % 10;
let b = a / 10;
let birnchi = Math.floor(b / 10);
let ikkinchi = Math.round(b % 10);
console.log(birnchi + ikkinchi + qol, birnchi * ikkinchi * qol);
