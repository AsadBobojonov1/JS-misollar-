const prompt = require("prompt-sync")();
let n = Number(prompt("n ="));
let a = true;
let s = 0;
while (a) {
  let e = n % 10;
  n = Math.floor(n / 10);
  s += e;
  if (n != 0) {
    a = true;
  } else {
    a = false;
  }
}
console.log(s);
