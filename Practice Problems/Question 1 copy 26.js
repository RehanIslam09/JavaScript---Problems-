/*
  -----------
  Questions : 
  -----------
    Global Scope vs Local Scope:
      Write code to explain the difference between global and local scopes using var, let, and const.
*/

// Global scope :
var globalVar = 'I am global var';
let globalLet = 'I am global let';
const globalConst = 'I am global const';

function testScope() {
  var localVar = 'I am a local var';
  let localLet = 'I am a local let';
  const localConst = 'I am a local const';

  console.log('Inside function:');
  console.log(globalVar); // Accessible
  console.log(globalLet); // Accessible
  console.log(globalConst); // Accessible

  console.log(localVar); // Accessible
  console.log(localLet); // Accessible
  console.log(localConst); // Accessible
}

testScope();

console.log('Outside function:');
console.log(globalVar); // Accessible
console.log(globalLet); // Accessible
console.log(globalConst); // Accessible

console.log(localVar); // ❌ ReferenceError
console.log(localLet); // ❌ ReferenceError
console.log(localConst); // ❌ ReferenceError

console.log(`
  Explanation:
    Global scope:
      Variables declared outside any function or block are global.
      They can be accessed anywhere in the code, both inside and outside functions.
      var, let, and const declared globally are all accessible inside functions.

    Local scope:
      Variables declared inside a function are local to that function.
      They are not accessible outside the function.
      Attempting to access them outside the function throws a ReferenceError.

    Key points:
      var is function-scoped, so a var inside a function is local.
      let and const are block-scoped, so they are also local when declared inside functions or blocks.
      Global variables can be accessed inside local scopes, but local variables cannot be accessed globally.
  `);
