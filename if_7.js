const prompt = require("prompt-sync")();
let x = Number(prompt("x="));
if (x <= 0) {
  console.log(-x);
} else if (x > 0 && x < 2) {
  console.log(x * x);
} else {
  console.log(4);
}
