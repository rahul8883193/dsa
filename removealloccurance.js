function removeChar(str, charToRemove) {
  return str.split(charToRemove).join("");
}

// Example usage:
const s = "hello world";
const char = "l";
const result = removeChar(s, char);
console.log(result); // Output: "heo word"
