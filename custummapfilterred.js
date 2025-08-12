function customMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

// Example:
const nums = [1, 2, 3];
const doubled = customMap(nums, (num,i) => num * 2);
console.log(doubled); // [2, 4, 6]

//fiulter

function customFilter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Example:
// const nums = [1, 2, 3, 4];
const evens = customFilter(nums, (num) => num % 2 === 0);
console.log(evens); // [2, 4]

//reduce
function customReduce(arr, callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : arr[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
}

// Example:
// const nums = [1, 2, 3, 4];
const sum = customReduce(nums, (acc, num) => acc + num, 0);
console.log(sum); // 10
