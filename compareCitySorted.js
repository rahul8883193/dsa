function areCitiesSorted(cities) {
  // Create a sorted copy of the original array
  const sorted = [...cities].sort();
  // Compare original with sorted
  return cities.every((city, i) => city === sorted[i]);
}

// Example usage:
console.log(areCitiesSorted(["Amsterdam", "Berlin", "London"])); // true
console.log(areCitiesSorted(["London", "Berlin", "Amsterdam"])); // false
