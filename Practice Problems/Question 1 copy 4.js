/*
  -----------
  Questions : 
  -----------
    Flatten Nested Arrays:
      Write a function flattenArray(arr) that flattens a nested array into a single-level array.
      Example:
      flattenArray([1, [2, [3, 4]]]); // [1, 2, 3, 4]
*/

// Built-in : short and powerful + simplest 

arr = [[1, [1, 1, [3, 5, 5, 5], 7, [8], 8, 64], 43], 4];

function flattenArray(arr) {
  return arr.flat(Infinity);
}

console.log(flattenArray(arr));
