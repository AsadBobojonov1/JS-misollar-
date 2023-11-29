const prompt = require("prompt-sync")();
let n = Number(prompt("n ="));
let b = true;
let cnt = 0;
while (b) {
  n = Math.floor(n / 10);
  cnt++;
  if (n != 0) {
    b = true;
  } else {
    b = false;
  }
}
console.log(cnt);
