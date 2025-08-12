function mostFrequentDestination(destinations) {
  const freqMap = {};
  let maxCount = 0;
  let mostFrequent = "";

  for (let city of destinations) {
    freqMap[city] = (freqMap[city] || 0) + 1;

    if (freqMap[city] > maxCount) {
      maxCount = freqMap[city];
      mostFrequent = city;
    }
  }

  return mostFrequent;
}

// Example usage:
const bookings = ["Paris", "London", "Paris", "Delhi", "Paris", "London"];
console.log(mostFrequentDestination(bookings)); // Output: "Paris"
