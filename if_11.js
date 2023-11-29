const prompt = require("prompt-sync")();
let a = Number(prompt("a="));
if (a > 9 && a < 100 && a % 2 == 1) {
  console.log("2 xonali toq son");
} else if (a > 9 && a < 100 && a % 2 == 0) {
  console.log("2 xonali juft son");
} else if (a > 99 && a < 1000 && a % 2 == 1) {
  console.log("3 xonali toq son");
} else if (a > 99 && a < 1000 && a % 2 == 0) {
  console.log("3 xonali juft son");
} else {
  console.log("chegaradan chiqdi");
}
