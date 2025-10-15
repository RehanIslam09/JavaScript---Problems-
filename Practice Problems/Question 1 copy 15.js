/*
  -----------
  Questions : 
  -----------
    Use filter to Remove Falsey Values:
      Create a function filterFalsey(arr) that removes all falsey values from an array using filter.
      Example:
      filterFalsey([0, 1, false, 2, "", 3]); // [1, 2, 3]
*/

arr = [1, 2, 3, 45, '', 34, 23, 234, 213, 12, 23, 43];

function filterFalsey(arr) {
  return arr.filter(Boolean);
}

console.log(filterFalsey(arr));
