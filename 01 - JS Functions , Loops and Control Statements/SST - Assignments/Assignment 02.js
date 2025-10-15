// =========================================
/*
    Question : 
        Write a function that takes in a string and returns the count of vowels in that string.
        Consider the vowels to be a, e, i, o, u (both uppercase and lowercase).

        Example:

        Input:
        "Hello World"
        Output:
        3 (Because there are 2 'o's and 1 'e')
*/
// =========================================

const str = 'I love you so so much my darling, Kimmy';

function main(str) {
  let count = 0;
  let vowels = 'aeiouAEIOU';
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(main(str));

function main2(str) {
  let count = 0;
  const vowels = 'aeiouAEIOU';
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

console.log(main2(str));
