const prompt = require("prompt-sync")();
let temp = Number(prompt("temp="));

if (temp < 0) {
  console.log("Freezing");
} else if (temp > 1 && temp < 10) {
  console.log("very cold");
} else if (temp > 11 && temp < 20) {
  console.log("cold");
} else if (temp > 21 && temp < 30) {
  console.log("normal");
} else if (temp > 31 && temp < 40) {
  console.log("hot");
} else {
  console.log("very hot");
}
