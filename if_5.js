const prompt = require("prompt-sync")();
let x = Number(prompt("x ="));
let f1;
let f2;
if (x > 0) {
  f1 = 2 * Math.sin(x);
  console.log(f1);
} else {
  f2 = x - 6;
  console.log(f2);
}
