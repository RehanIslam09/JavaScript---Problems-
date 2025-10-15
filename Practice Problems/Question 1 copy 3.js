/*
  -----------
  Questions : 
  -----------
    Sum of Elements:
      Implement sumArray(arr) to return the sum of all elements in an array.
      Example:
      sumArray([1, 2, 3]); // 6
*/

arr = [1, 1, 1, 3, 5, 5, 5, 7, 8, 8, 64, 43, 4];

// Short method :

function sumArray(arr) {
  return arr.reduce((total, current) => total + current, 0);
}

function sumArray(arr) {
  return arr.reduce((total, acc) => (total += acc), 0);
}

// Manual Method :

function sumArrayManual(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray(arr));
console.log(sumArrayManual(arr));
