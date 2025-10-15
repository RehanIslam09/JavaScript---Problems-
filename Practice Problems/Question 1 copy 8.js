/*
  -----------
  Questions : 
  -----------
    Filter Object by Keys:
      Write a function filterByKeys(obj, keys) that returns a new object containing only the specified keys from the original object.
      Example:
      filterByKeys({a: 1, b: 2, c: 3}, ['a', 'c']); // {a: 1, c: 3}
*/

const obj = { a: 1, b: 2, c: 3 };
const keys = ['a', 'c', 'z'];

// Using reduce :

function filterByKeys(obj, keys) {
  return keys.reduce((acc, key) => {
    if (key in obj) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}

console.log(filterByKeys(obj, keys));

function filterByKeys(obj, keys) {
  return keys.reduce((acc, key) => {
    if (key in obj) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}

console.log(filterByKeys(obj, keys));

function filterByKeys(obj, keys) {
  return keys.reduce((acc, key) => {
    if (key in obj) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}

console.log(filterByKeys(obj, keys));

function filterByKeys(obj, keys) {
  return keys.reduce((obj, key) => {
    if (key in obj) acc[key] = obj[key];
    return acc;
  }, {});
}

function filterByKeys(obj, keys) {
  return keys.reduce((acc, key) => {
    if (key in obj) acc[key] = obj[key];
    return acc;
  }, {});
}

console.log(filterByKeys(obj, keys));
