// =========================================
/*
    Question : 
        Write a JavaScript function named doubleValues that takes an array of numbers and returns a new array where each number is doubled using the map() method.


        Inputs:
        An array of numbers.

        Outputs:
        An array of numbers where each number is doubled.
*/
// =========================================

numbers = [1, 3, 34, -23, 324, 34, 43, -22];

function doubleValues(numbers) {
  // Write your code here
  // return the result
  return numbers.map((num) => num * 2);
}

console.log(doubleValues(numbers));
