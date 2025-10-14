/*
  -----------
  Questions : 
  -----------
Check Palindrome:
  Create a function isPalindrome(str) that checks if a string is a palindrome.
  Example:
  isPalindrome("racecar"); // true
*/

str = 'ILoveMyDarlingKimmy';

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reverse = str.split('').reverse().join('');
  return str === reverse;
}

console.log(isPalindrome(str));
