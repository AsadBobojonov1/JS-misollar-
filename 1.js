const prompt = require("prompt-sync")();
let a = Number(prompt("a ="));
let b = Number(prompt("b ="));
if (a > 0 && a < 1000 && b > 0 && b < 1000) {
  let s = Math.sqrt(Math.sqrt(a ** 3 - b ** 3 + (a ** 3 + b ** 3)));
  console.log(s);
} else {
  console.log("oraliqdan chiqb ketdi!");
}
