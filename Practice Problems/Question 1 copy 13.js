/*
  -----------
  Questions : 
  -----------
    Remove Whitespaces:
      Implement removeWhitespaces(str) that removes all spaces from a string.
      Example:
      removeWhitespaces("hello world"); // "helloworld"
*/

str = 'I Love My Darling Kimmy';

function removeWhitespaces() {
  return str.replace(/[^a-zA-Z0-9]/g, '');
}

console.log(removeWhitespaces(str));

function removeWhitespaces2(str) {
  return str.replace(/[^a-zA-Z0-9]/g, '');
}

console.log(removeWhitespaces2(str));
