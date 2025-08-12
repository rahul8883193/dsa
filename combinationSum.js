function combinationSum(arr, target) {
  arr.sort((a, b) => a - b); // optional: helps in pruning
  const result = [];

  function backtrack(start, path, total) {
    if (total === target) {
      result.push([...path]);
      return;
    }
    if (total > target) return;

    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      backtrack(i, path, total + arr[i]);
      path.pop();
    }
  }

  backtrack(0, [], 0);
  return result;
}

// Example:
const arr = [2, 3, 5];
const target = 8;
console.log(combinationSum(arr, target));
