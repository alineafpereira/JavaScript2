"use strict"

/*snippet*/
let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();

/* In this case, A is being declared outside of the function as 10 and then being reassigned inside of the 
function as 12, so the output will be 12 */