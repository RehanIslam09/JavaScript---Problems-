// =========================================
/*
    Question : 
      Write a function that takes in an array of numbers and returns the maximum value in that array.

      Example:

      Input:
      [1, 4, 2, 7, 5]

      Output:
      7
*/
// =========================================

const arr = [1, 4, 5, 34, 23, 31, 12, 3, 5];

function findMaxValue(arr) {
  return Math.max(...arr);
}

console.log(findMaxValue(arr));

function findMaxValue2(arr) {
  return Math.max(...arr);
}

console.log(findMaxValue2(arr));

/*
-----------------------------------------------------------------------------

💥 What ...arr actually does

... is called the spread operator.

When used like Math.max(...arr), it spreads or expands the array elements as individual arguments to the function.

-----------------------------------------------------------------------------

⚙️ Why this is needed

Math.max() does not accept an array directly:

Math.max([1, 2, 3]); // ❌ NaN


Because it expects separate numbers — not one array.

So we use the spread operator to unpack the array elements:

Math.max(...[1, 2, 3]); // ✅ 3

-----------------------------------------------------------------------------

| Expression           | Meaning                                     |
| -------------------- | ------------------------------------------- |
| `...arr`             | expands array into individual elements      |
| `...obj`             | spreads key-value pairs into another object |
| `[...arr]`           | copies an array                             |
| `[...arr1, ...arr2]` | merges two arrays                           |


-----------------------------------------------------------------------------

*/
