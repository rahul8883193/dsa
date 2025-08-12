// const numbers = [5, 2, 9, 1, 7];
// const minValue = numbers.reduce(
//   (min, curr) => (curr < min ? curr : min),
//   numbers[0]
// );
// console.log(minValue); // Output: 1

///second

const numbers = [5, 2, 9, 1, 7];
let minValue = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < minValue) {
    minValue = numbers[i];
  }
}

console.log(minValue); // Output: 1
