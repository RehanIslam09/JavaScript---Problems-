/*
  -----------
  Questions : 
  -----------
    Temporal Dead Zone:
      Explain the concept of Temporal Dead Zone with an example using let and const.
*/

console.log(`
  The Temporal Dead Zone (TDZ) is the period between the start of a scope (like a block or function) and the point where a variable declared with let or const is initialized. During this period, the variable exists in memory but cannot be accessed, and trying to use it will cause a ReferenceError.
  This happens because let and const are hoisted but not initialized during the creation phase. They remain in the TDZ until their declaration line is executed.

    console.log(a); // ReferenceError
    let a = 10;

    console.log(b); // ReferenceError
    const b = 20;


  Explanation:
  When the JavaScript engine executes this code, it knows that a and b exist (because they’re hoisted), but they are not yet initialized. From the start of the script until their declaration lines, both variables are in the Temporal Dead Zone. Accessing them in this zone immediately throws a ReferenceError.

  Once the declaration lines (let a = 10; and const b = 20;) are reached, the TDZ ends, and both variables can be safely accessed.

  In short, the TDZ prevents you from using let and const variables before they are declared — a safeguard to avoid accessing uninitialized values.
  `);

  