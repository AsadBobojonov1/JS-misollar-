const prompt = require("prompt-sync")();
let a = Number(prompt("a="));
if (a > 0 && Math.abs(a) % 2 == 1) {
  console.log("musbat toq son");
} else if (a > 0 && Math.abs(a) % 2 == 0) {
  console.log("musbat just son");
} else if (a < 0 && Math.abs(a) % 2 == 1) {
  console.log("manfiy toq son");
} else if (a < 0 && Math.abs(a) % 2 == 0) {
  console.log("manfiy just son");
} else {
  console.log("son 0 ga teng");
}
