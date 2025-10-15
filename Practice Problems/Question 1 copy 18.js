arr = [1, 2, 3, 45, 34, 23, 234, 213, 12, 23, 43];

function allEven(nums) {
  return arr.every((num) => num % 2 === 0);
}

console.log(allEven(arr));

arr = [2, 34, 234, 12];

function allEven(nums) {
  return arr.every((num) => num % 2 == 0);
}

console.log(allEven(arr));
