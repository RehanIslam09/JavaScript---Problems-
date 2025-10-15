/*
  -----------
  Questions : 
  -----------
    Variable Shadowing:
      Create an example showing variable shadowing using let and var.
*/

var x = 10;
{
  let x = 20; // shadows the outer 'x'
  console.log("Inside block:", x); // 20
}
console.log("Outside block:", x); // 10

console.log(`
  Variable shadowing occurs when a variable declared inside a local scope (like inside a block or function) has the same name as one declared in an outer scope. The inner variable “shadows” the outer one, meaning it temporarily overrides access to the outer variable within that block.

  Explanation:
    In this example, the outer variable x is declared using var with a value of 10. Inside the block {}, another variable with the same name x is declared using let and assigned the value 20.
    The inner x shadows the outer one only within the block, so:
      Inside the block, x refers to the inner let x = 20.
      Outside the block, x refers back to the outer var x = 10.

  Note:
    If both variables are declared with var, shadowing happens within the same function scope and can lead to accidental overwriting, because var is function-scoped, not block-scoped. For example:
      var y = 5;
      {
        var y = 15; // overwrites outer y
      }
      console.log(y); // 15
    Using let or const prevents such accidental overwriting because they are block-scoped, providing safer shadowing behavior.
  `);

  