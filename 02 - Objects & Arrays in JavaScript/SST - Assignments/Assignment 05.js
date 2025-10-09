// =========================================
/*
    Question : 
      Write a function that takes in a string and returns the longest word in that string.
      If there are multiple words with the same length, return the first one you encounter.

      Example:


      Input:

      "JavaScript is a fun programming language"


      Output:

      "programming"
*/
// =========================================

const str = 'JavaScript is a fun programming language';

function findLongestWord(str) {
  // Write your code here
  // return the result
  const words = str.split(' ');
  let longestWord = '';

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) longestWord = words[i];
  }

  return longestWord;
}

console.log(findLongestWord(str));
