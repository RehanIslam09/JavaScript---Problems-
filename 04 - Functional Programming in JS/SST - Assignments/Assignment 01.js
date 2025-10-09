// =========================================
/*
    Question : 
        Write a JavaScript function named sumArray that takes an array of numbers and returns the sum of all the numbers in the array using the reduce() method.

        The tests also check whether the reduce() method has been used.

        Example:

        Input:
        [1, 2, 3, 4]

        Output:
        10
        reduce() is used.
*/
// =========================================

numbers = [1, 3, 34, -23, 324, 34, 43, -22, 233, 211, 324];

function sumArray(numbers) {
    // Write your code here
    // return the result
    return numbers.reduce(function (acc, curr) {
        acc = acc + curr;
        return acc;
    })
}

console.log(sumArray(numbers));