const prompt = require("prompt-sync")();
let n = Number(prompt("n ="));
let a = n % 10;
let b = Math.floor(n / 10);
let c = Math.floor(`${a}${b}`);
if (n >= c) {
  console.log(true);
} else {
  console.log(false);
}
