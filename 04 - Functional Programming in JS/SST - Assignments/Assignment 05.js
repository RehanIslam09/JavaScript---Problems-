// =========================================
/*
    Question : 
        Write a JavaScript function named findFirstNegative that finds and returns the first negative number in an array using the find() method.
        return undefined if there are no negative numbers in the array.

        Inputs:
        An array of numbers.

        Outputs:
        A number representing the first negative number in the array or undefined if there are no negative numbers.
*/
// =========================================

numbers = [1, 3, 34, -23, 324, 34, 43, -22];

function findFirstNegative(numbers) {
  // Write your code here
  // return the result
  return numbers.find((num) => num < 0);
}
console.log(findFirstNegative(numbers));
