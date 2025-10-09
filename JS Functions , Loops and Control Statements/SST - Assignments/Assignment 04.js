// =========================================
/*
    Question : 
      Write a function that calculates the sum of all numbers in an array.

      Example:

      Input:
      [1, 2, 3, 4]

      Output:
      10
*/
// =========================================

arr = [1, 34, 31, 234, 34, 32, 344, 23];

function sumOfArray(arr) {
  return arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
  }, 0);
}

console.log(sumOfArray(arr));
