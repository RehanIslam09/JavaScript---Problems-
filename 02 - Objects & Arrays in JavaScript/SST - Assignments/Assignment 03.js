// =========================================
/*
    Question : 
      Write a function that checks if a given string is a palindrome.
      A palindrome is a word, phrase, number, or other sequences of characters which reads the same backward as forward (ignoring spaces, punctuation, and capitalization).

      Example:

      Input:
      "Madam"

      Output:
      true
*/
// =========================================

const str = "kimmy";
const str2 = "madam";

function isPalindrome(str) {
  // Write your code here
  // return the result
  const reverse = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return reverse.split('').reverse().join('') === reverse;
}

console.log(isPalindrome(str));
console.log(isPalindrome(str2));