let arr = ["Paris", "Washington", "Rome", "Amsterdam"];

let obj = {};
let max = 0;
let result = "";
for (let char of arr) {
  obj[char] = char.length;
  if (obj[char] > max) {
    max = obj[char];
    result = char;
  }
}
console.log(result);
