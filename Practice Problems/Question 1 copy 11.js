/*
  -----------
  Questions : 
  -----------
  Count Vowels : 
      Write a function countVowels(str) that counts the number of vowels in a string.
      Example:
      countVowels("hello world"); // 3
*/

str = 'ILoveMyDarlingKimmy';

function countVowels() {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

console.log(countVowels(str));

function countVowels() {
  let count = 0;
  vowels = 'AEIOUaeiou';
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

console.log(countVowels(str));
