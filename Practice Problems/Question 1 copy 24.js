/*
  -----------
  Questions : 
  -----------
    Reassign let, var, and const:
      Write code that demonstrates reassigning values to let, var, and const, and explain the outcomes.
*/

var a = 10;
a = 20; // ✅ Works fine
console.log(a); // 20

let b = 30;
b = 40; // ✅ Works fine
console.log(b); // 40

const c = 50;
c = 60; // ❌ TypeError
console.log(c);


console.log(`
  Explanation:
var and let variables can be reassigned new values.
In the example, a (declared with var) and b (declared with let) are both successfully updated to new values without any errors.
const, however, stands for constant, meaning its value cannot be changed once assigned.
Attempting to reassign c results in a TypeError: Assignment to constant variable.

In summary:
var → can be redeclared and reassigned.
let → can be reassigned, but not redeclared in the same scope.
const → can be neither redeclared nor reassigned.
  `);