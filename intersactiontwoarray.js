function intersection(arr1, arr2) {
  // Use filter() to find common elements between arr1 and arr2
  return arr1.filter((value) => arr2.includes(value));
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];

const result = intersection(arr1, arr2);
console.log("Intersection of the arrays:", result);
