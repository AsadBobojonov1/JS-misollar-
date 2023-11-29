const prompt = require("prompt-sync")();
let x = Number(prompt("x="));
let f1;
let f2;
if (x < -2 || x > 2) {
  f1 = 2 * x;
  console.log(f1);
} else {
  f2 = -3 * x;
  console.log(f2);
}
