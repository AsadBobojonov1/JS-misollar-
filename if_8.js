const prompt = require("prompt-sync")();
let a = Number(prompt("a="));
let b = Number(prompt("b="));
let c = Number(prompt("c="));
if (a + b > c && c + b > a && a + c > b) {
  console.log("yes");
} else {
  console.log("no");
}
