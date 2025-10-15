/*
  -----------
  Questions : 
  -----------
    Reverse Array:
      Write a function reverseArray(arr) that takes an array as input and returns a new array with elements in reverse order.
*/

arr = [1, 3, 5, 64, 43, 4];

function reverseArray(arr) {
  return arr.slice().reverse();
}

console.log(reverseArray(arr));

// Manual Method :
