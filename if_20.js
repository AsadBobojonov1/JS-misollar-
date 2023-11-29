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
let t;
for (i in array) {
  if (array[0] < array[i]) {
    array[0] = array[i];
  }
  t = i;
}
console.log(array[0], t);
// index topilmadi
