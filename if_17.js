const prompt = require("prompt-sync")();
let n = Number(prompt("n ="));
let a = true;
let s;
let array = [];
while (a) {
  s = n % 10;
  n = Math.floor(n / 10);
  array.push(s);
  if (n != 0) {
    a = true;
  } else {
    a = false;
  }
}
let toq_sum = 0;
array.forEach((e) => {
  if (e % 2 == 1) {
    toq_sum += e;
  }
});
console.log(toq_sum);
