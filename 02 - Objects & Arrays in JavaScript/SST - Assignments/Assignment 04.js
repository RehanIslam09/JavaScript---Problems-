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

const arr = [1, 3, 43, 23, 3, 55, 3, 45, 33, 23, 3, 5, 64];

function sumOfArray(arr) {
  return arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
  });
}

console.log(sumOfArray(arr));

function sumOfArray2(arr) {
  return arr.reduce((total, curr) => (total += curr));
}

console.log(sumOfArray2(arr));
