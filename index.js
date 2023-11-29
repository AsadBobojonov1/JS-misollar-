// *************************************
// 1
// let a = prompt("a =");
// let b = prompt("b =");
// let x = a == b ? true : false;
// alert(x);
// 2
// let x = prompt("b =");
// let a = 7;
// let y = x == a ? true : false;
// alert(y);

// 3
// let b = prompt("b = ");
// let x = b > 0 ? true : false;
// alert(x);

// 4
const prompt = require("prompt-sync")();
// let a = prompt("a = ");
// let x = a < 0 ? true : false;
// console.log(x);

// 5
// let a = prompt("a =");
// let x = a % 2 == 1 ? true : false;
// console.log(x);

//6
// let b = prompt("b = ");
// let x = b % 2 == 0 ? true : false;
// console.log(x);

// 7
// let a = prompt("a =");
// let b = prompt("b =");
// let c = prompt("c =");
// let x = a < b && c > b ? true : false;
// console.log(x);

// 8
// let a = prompt("a =");
// let b = prompt("b =");
// let x = a > 0 && b > 0 ? true : false;
// console.log(x);

//9
// let a = prompt("a =");
// let b = prompt("b =");
// let x = a < 0 && b < 0 ? true : false;
// console.log(x);

//10
// let a = prompt("a =");
// let b = prompt("b =");
// let x = a % 2 == 0 && b % 2 == 0 ? true : false;
// console.log(x);

// integer11
// let a = prompt("a =");
// let x = a % 10;
// let y = Math.floor(a / 10);
// let kop = x * y;
// let yig = x + y;
// console.log(`yigindi:${yig} , kopaytma:${kop}`);

//12
// let n = Number(prompt("n ="));
// let x = 2 * Math.pow(n + 3, 2);
// console.log(x);

// 13
// let n = Number(prompt("n ="));
// let S = Math.pow((3 + n) / 2, 2);
// console.log(S);

// 14
// let n = Number(prompt("n= "));
// let x = Number(prompt("x= "));
// let s = Math.pow(n, x) + Math.pow(6, x);
// console.log(s);

// 15
// let a = Number(prompt("a ="));
// let abs = Math.abs(a);
// console.log(abs);

// 16
// let m = Number(prompt("m ="));
// let yht = m.toFixed(2);
// console.log(yht);

// 17
// let x = Number(prompt("x ="));
// let y = Number(prompt("y ="));
// let s = Math.pow(x, 4) + 5 * Math.pow(x, 2) + Math.pow(x, 3) * y;
// console.log(s);

// 18
// let x = Number(prompt("x ="));
// let y = Number(prompt("y ="));
// let s =
//   6 * Math.pow(x, 3) * Math.pow(y, 5) +
//   4 * Math.pow(x, 4) * Math.pow(y, 3) -
//   24 * x * y;
// console.log(s);

//19
// let a = Number(prompt("a ="));
// let qol = a % 10;
// let b = a / 10;
// let birnchi = Math.floor(b / 10);
// let ikkinchi = Math.round(b % 10);
// console.log(birnchi + ikkinchi + qol, birnchi * ikkinchi * qol);

// 20
// let s = 1 + 2 / 3 - (3 + 1 / 4);
// console.log(Math.floor(Math.abs(s)));

// integer
// 1
// let a = Number(prompt("a ="));
// let b = Number(prompt("b ="));
// if (a > 0 && a < 1000 && b > 0 && b < 1000) {
//   let s = Math.sqrt(Math.sqrt(a ** 3 - b ** 3 + (a ** 3 + b ** 3)));
//   console.log(s);
// } else {
//   console.log("oraliqdan chiqb ketdi!");
// }

// 2
// let a = Number(prompt("a ="));
// let b = Number(prompt("b ="));
// let s = ((1 / 6) * Math.sqrt(a) + (1 / 3) * Math.sqrt(b)) ** 2;
// console.log(s);

//3
// let a = Number(prompt("a ="));
// let q = Math.floor(a / 10);
// let w = q % 10;
// let t = Math.floor(q / 10);
// let u = a % 10;
// let new_num = `${u}` + `${w}` + `${t}`;
// console.log(new_num);

// 4
// let a = Number(prompt("a ="));
// let q = Math.floor(a / 10);
// let t = q % 10;
// let r = Math.floor(q / 10);
// let num = `${t}` + `${r}` + `${e}`;
// console.log(num);

//5
// let a = Number(prompt("a ="));
// let b = Number(prompt("b ="));
// let s = 9 * a ** 2 * b - 27 * a ** 2 * b ** 2 + 15 * b ** 2;
// console.log(s.toFixed(2));

// 6
// let r = Number(prompt("r ="));
// let n = Number(prompt("n ="));
// let a = Number(prompt("a ="));
// let b = Number(prompt("b ="));
// let s = (1 + r / 100) ** n / Math.sqrt(a ** 2 + b ** 2);
// console.log(s);

//7
// let x1 = Number(prompt(" x1 ="));
// let y1 = Number(prompt(" y1 ="));
// let x2 = Number(prompt(" x2 ="));
// let y2 = Number(prompt(" y2 ="));
// let s = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
// console.log(s.toFixed(2));

// 8
// let x1 = Number(prompt(" x1 ="));
// let y1 = Number(prompt(" y1 ="));
// let x2 = Number(prompt(" x2 ="));
// let y2 = Number(prompt(" y2 ="));
// let x3 = Number(prompt(" x3 ="));
// let y3 = Number(prompt(" y3 ="));
// let a = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
// let b = Math.sqrt((x3 - x1) ** 2 + (y3 - y1) ** 2);
// let c = Math.sqrt((x2 - x3) ** 2 + (y2 - y3) ** 2);
// let p = (a + b + c) / 2;
// let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
// console.log(s.toFixed(2), (p * 2).toFixed(2));
// console.log(a);

// 9
// let a = Number(prompt(" a ="));
// let x = Math.sin(a);
// console.log(x);
