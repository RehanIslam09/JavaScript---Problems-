// =========================================
/*
    Question : 
        You are given the following JavaScript code:

            console.log(greet());
            console.log(message);

            var message = "Hello World";

            function greet() {
            return "Hi there!";
            }

        Implement a function analyzeExecution() that returns the output of running the above code in order, as an array of values (each value corresponding to a line of output).
*/
// =========================================

function analyzeExecution() {
  const output = [];
  var message;
  function greet() {
    return 'Hi there!';
  }
  output.push(greet());

  output.push(message);
  message = 'Hello World';

  return output;
}
