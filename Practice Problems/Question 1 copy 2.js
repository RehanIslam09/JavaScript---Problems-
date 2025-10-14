/*
  -----------
  Questions : 
  -----------
    Find Maximum:
      Write a function findMax(arr) that returns the largest number in an array.
      Example:
      findMax([4, 1, 7, 3]); // 7
*/

arr = [1, 1, 1, 3, 5, 5, 5, 7, 8, 8, 64, 43, 4];

// Built-in Method :

function findMax(arr) {
  return Math.max(...arr);
}


// Manual Method :

function findMaxManual(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++){
    if (max < arr[i]) max = arr[i];
  }
  return max;
}

console.log(findMax(arr));
console.log(findMaxManual(arr));