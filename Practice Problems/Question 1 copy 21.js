/*
  -----------
  Questions : 
  -----------
    Hoisting of Functions:
      Predict the output:
      greet();
      function greet() {
          console.log("Hello!");
      }
*/

console.log(`
  In JavaScript, function declarations are fully hoisted to the top of their scope. This means that when the code is executed, the entire function greet() (including its body) is moved to the top of the script before execution starts. Therefore, the function is available to be called even before it appears in the code.

  When the JavaScript engine runs this program, it first hoists the function greet, making it ready to use. Then, when greet(); is called, it successfully executes and prints "Hello!" to the console.

  If the same code were written using a function expression (for example, var greet = function() {...}), it would not work because only the variable name would be hoisted, not the function itself, resulting in a TypeError.

  So, the output "Hello!" occurs because function declarations are fully hoisted and can be called before their definition.
  `);
