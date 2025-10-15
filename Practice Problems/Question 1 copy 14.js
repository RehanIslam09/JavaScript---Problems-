/*
  -----------
  Questions : 
  -----------
    Use map to Transform Array:
      Write a function doubleNumbers(nums) that doubles each number in the array using map.
      Example:
      doubleNumbers([1, 2, 3]); // [2, 4, 6]
*/

arr = [1, 2, 3, 45, 34, 23, 234, 213, 12, 23, 43];

function doubleNumbers(nums) {
  return nums.map((num) => num * 2);
}

console.log(doubleNumbers(arr));
