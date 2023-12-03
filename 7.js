const prompt = require("prompt-sync")();
let x1 = Number(prompt(" x1 ="));
let y1 = Number(prompt(" y1 ="));
let x2 = Number(prompt(" x2 ="));
let y2 = Number(prompt(" y2 ="));
let s = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
console.log(s.toFixed(2));
