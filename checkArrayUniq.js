// Check if all elements in an array occur a unique number of times.
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

function uniqueOccurrences(arr) {
  const frequencyMap = {};

  // Count the frequency of each element
  for (const num of arr) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }
  console.log(frequencyMap);
  const frequencyValues = Object.values(frequencyMap);
  const uniqueFrequencies = [...new Set(frequencyValues)];
  console.log(frequencyValues);
  console.log(uniqueFrequencies);
  // If the size of the set is equal to the number of frequencies, all are unique
  return frequencyValues.length === uniqueFrequencies.length;
}

// Example usage:
const arr = [1, 2, 2, 1, 1, 3];
console.log(uniqueOccurrences(arr)); // Output: true
