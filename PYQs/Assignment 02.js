// =========================================
/*
    Question : 

*/
// =========================================

const keys = ['name', 'age', 'city', 'country', 'occupation'];
const values = ['Rehan', 18, 'Burdwan', 'India', 'Developer'];

function createObject(keys, values) {
  const result = {};
  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = values[i];
  }
  return result;
}

function createObject(keys, values) {
  const result = {};
  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = values[i];
  }
  return result;
}

console.log(createObject(keys, values));

function createObject2(keys, values) {
  return Object.fromEntries(keys.map((key, index) => [key, values[index]]));
}

function createObject2(keys, values) {
  return Object.fromEntries(keys.map((key, index) => [key, values[index]]));
}

function createObject2(keys, values) {
  return Object.fromEntries(keys.map((key, index) => [key, values[index]]));
}

console.log(createObject2(keys, values));
