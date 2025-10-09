// =========================================
/*
    Question : 
        main function will be called with an array of integers as argument.

        Input Format
        Values of an array

        Constraints
        n <= 10 ^ 9

        Output Format
        Logged Integers

        Sample Input 0
        [1, 2, 3]

        Sample Output 0
        2
        4
        6
*/
// =========================================
let arr = [1, 3, 4, 64, 334, 32, 543, 234, 234234, 233, 4345, 454]

function main(arr) {
  // Write your code here
  // Use console.log to output the result
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * 2);
  }
}





