//Reverse a String / Array – In-place

function reverseString(str) {
  const arr = str.split("");
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join("");
}

console.log(reverseString("hello"));

//

const str = "Hello from react";

const func = (str) => {
  const arr = str.split(" ");

  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result.join(" ");
};

console.log(func(str)); //react from hello

function reverseWordOrder(sentence) {
  return sentence
    .split(" ") // Split into words
    .reverse() // Reverse the array of words
    .join(" "); // Join back to string
}

let input = "hello from react";
let output = reverseWordOrder(input);
console.log(output); // "react from hello"

const str = "Hello from react";

const revchar = (str) => {
  let rev = "";
  for (let chat of str) {
    rev = chat + rev;
  }
  return rev;
};
const func = (str) => {
  const arr = str.split(" ");

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(revchar(arr[i]));
  }
  return result.join(" ");
};

console.log(func(str)); // "olleh morf tcaer"

// node reverseString.js
