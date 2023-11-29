const prompt = require("prompt-sync")();
let a = Number(prompt("a ="));
let b = Number(prompt("b ="));
if (a == b) {
  console.log(0);
} else if (a > b) {
  console.log(a);
} else {
  console.log(b);
}
