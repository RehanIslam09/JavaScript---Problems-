// =========================================
/*
    Question : 
        Write a JavaScript function named filterOutOdd that uses the filter() method to filter out odd numbers from an array.

        Example:

        Inputs:
        An array of numbers.

        Outputs:
        An array of numbers without odd numbers.
*/
// =========================================

numbers = [1, 3, 34, -23, 324, 34, 43, -22];

function filterOutOdd(numbers) {
  // Write your code here
  // return the result
  const even = (num) => num % 2 === 0;
  return numbers.filter((num) => even(num));
}

console.log(filterOutOdd(numbers));

function filterOutOdd2(nums) {
  return nums.filter((num) => num % 2 == 0);
}

console.log(filterOutOdd2(numbers));
