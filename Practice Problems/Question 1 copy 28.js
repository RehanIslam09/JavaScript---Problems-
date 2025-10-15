/*
  -----------
  Questions : 
  -----------
  Differences between var, let, and const:
    Write a code snippet that highlights the key differences between these variable declarations.
*/

// Hoisting :

console.log(varVar); //undefined
// console.log(letVar): //ReferenceError
// console.log(constVar): //ReferenceError

var varVar = 'I am var';
let letVar = 'I am let';
const constVar = 'I am const';

// Reassignment :

varVar = 'Var reassigned'; // works
letVar = 'Let reassigned'; // works
// constVar = "Const reassigned"; X Type Error

console.log(varVar, letVar, constVar);

// Scope :

if (true) {
  var varScope = 'Var inside block';
  let letScope = 'Let inside block';
  const constScope = 'Const inside block';
}

console.log(varScope); // ✅ Accessible (function/global scoped)
// console.log(letScope);   // ❌ ReferenceError (block scoped)
// console.log(constScope); // ❌ ReferenceError (block scoped)

console.log(`
  Hoisting:
    var is hoisted and initialized as undefined, so you can access it before declaration.
    let and const are hoisted but remain in the Temporal Dead Zone (TDZ), causing a ReferenceError if accessed before declaration.

  Reassignment:
    var and let can be reassigned.
    const cannot be reassigned once initialized.

  Scope:
    var is function-scoped, so it’s accessible outside blocks.
    let and const are block-scoped, so they only exist inside the block they are declared in.
  `);
