arr = [1, 2, 3, 45, 34, 23, 234, 213, 12, 23, 43];

function sumArray(nums) {
  return nums.reduce((acc, curr) => (acc += curr));
}

console.log(sumArray(arr));

function sumArray2(arr) {
  return arr.reduce((acc, curr) => (acc += curr), 0);
}

console.log(sumArray2(arr));
