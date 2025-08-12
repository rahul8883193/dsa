// Given an array that may contain nested arrays, return a flat array with all the elements.
// Example:
// flatten([1, [2, [3, 4], 5], 6])
// Output: [1, 2, 3, 4, 5, 6]
let result = [];
function flatten(arr) {
  for (let el of arr) {
    if (Array.isArray(el)) {
      flatten(el);
    } else {
      result.push(el);
    }
  }

  return result;
}

console.log(flatten([1, [2, [3, 4], 5], 6]));

const flatten = (arr) => {
  let result = arr.reduce(
    (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr),
    []
  );
  arr.length = 0;
  arr.push(...result);
  return arr;
};

// node flatArray.js
