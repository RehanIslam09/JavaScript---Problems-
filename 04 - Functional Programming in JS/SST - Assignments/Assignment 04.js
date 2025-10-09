// =========================================
/*
    Question : 
        Write a JavaScript function named allPositive that checks whether all numbers in a given array are positive using the every() method.

        Inputs:
        An array of numbers.

        Outputs:
        A boolean value. Return true if all numbers are positive, otherwise false.
*/
// =========================================

numbers = [1, 3, 34, -23, 324, 34, 43, -22];

function allPositive(numbers) {
  // Write your code here
  // return the result
  return numbers.every((num) => num > 0);
}

console.log(allPositive(numbers));