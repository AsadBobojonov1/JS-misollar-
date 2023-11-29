const prompt = require("prompt-sync")();
let x = Number(prompt("x="));
let y = Number(prompt("y="));
if (x > 0 && y > 0) {
  console.log("1-chorak");
} else if (x < 0 && y > 0) {
  console.log("2-chorak");
} else if (x < 0 && y < 0) {
  console.log("3-chorak");
} else {
  console.log("4-chorak");
}
