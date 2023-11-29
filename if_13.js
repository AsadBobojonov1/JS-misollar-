const prompt = require("prompt-sync")();
let a = Number(prompt("Daftar narxini kiriting:"));
let b = Number(prompt("1 yoki 0 ni kiritning:"));

if (a >= 20 && Boolean(b)) {
  console.log(true);
} else {
  console.log(false);
}
