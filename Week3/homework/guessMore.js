"use strict"

// Snippet
const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
console.log(f1(x));
console.log(x);

// in this first case, X was declared 9 outside of the function.
// as a value in the function, we had 9 + 1 and then the val returned 10.

const y = {x:9};
function f2(val) {
  val.x = val.x + 1;
  return val;
}
console.log(f2(y));
console.log(y);