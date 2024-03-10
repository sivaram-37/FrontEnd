import { add } from "./add.js";
import { sub } from "./sub.js";
import { mul } from "./mul.js";
import { div } from "./div.js";

let a = 10;
let b = 20;
let op = "*";
switch (op) {
  case "+":
    add(a, b);
    break;
  case "-":
    sub(a, b);
    break;
  case "*":
    mul(a, b);
    break;
  case "/":
    div(a, b);
    break;
  default:
    console.log("Invalid Operation !!! Please enter valid operand !");
}
