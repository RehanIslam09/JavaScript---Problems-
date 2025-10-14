/*
  -----------
  Questions : 
  -----------
    Remove Duplicates:
      Create a function removeDuplicates(arr) that removes duplicate elements from an array and returns a new array.
      Example:
      removeDuplicates([1, 2, 2, 3, 4, 4]); // [1, 2, 3, 4]
*/

arr = [1, 1, 1, 3, 5, 5, 5, 7, 8, 8, 64, 43, 4];

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates(arr));


// Manual Method :

function removeDuplicatesManual(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++){
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeDuplicatesManual(arr));