/*
  -----------
  Questions : 
  -----------
    Reverse String:
      Create a function reverseString(str) that returns the reversed version of a given string.
      Example:
      reverseString("hello"); // "olleh"
*/

str = 'ILoveMyDarlingKimmy';

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString(str));
