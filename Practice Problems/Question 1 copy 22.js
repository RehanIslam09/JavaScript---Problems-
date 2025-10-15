/*
  -----------
  Questions : 
  -----------
    Hoisting with let and var:
      Write a short code example showing how let and var differ in terms of hoisting.
*/

console.log(a);
var a = 32;

// console.log(b);
// let b = 20;

console.log(`
    In JavaScript, both var and let are hoisted, but they behave differently during the hoisting process. Variables declared with var are hoisted to the top of their scope and initialized with undefined, so you can access them before their actual declaration, although the value will be undefined. On the other hand, variables declared with let are also hoisted, but they are not initialized. They remain in a temporary dead zone (TDZ) from the start of the block until the line where they are declared. Accessing them before declaration results in a ReferenceError.

    Therefore, in the code above, console.log(a) prints undefined because a is hoisted and initialized with undefined, while console.log(b) throws a ReferenceError because b is in the temporal dead zone at that point.
  `);
