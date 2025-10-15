/*
  -----------
  Questions : 
  -----------
    Scope Example:
      Write a function checkScope() to demonstrate how let, var, and const behave differently inside a block scope.
*/

function checkScope() {
  if (true) {
    var x = 'I am var';
    let y = 'I am let';
    const z = 'I am const';
  }
  console.log(x);
  console.log(y);
  console.log(z);
}

checkScope();
