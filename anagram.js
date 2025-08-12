// function areAnagrams(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   return str1.split("").sort().join("") === str2.split("").sort().join("");
// }




function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  const count = {};

  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }
console.log(count)
  for (let char of str2) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}

console.log(areAnagrams("listen", "silent")); // true
// console.log(areAnagrams("hello", "world"));   // false