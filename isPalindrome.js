//Check if a string is a palindrome

function isPalindrome(str) {
  let left = 0,
    right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome('racecar'));






// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert to lowercase
//     const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
//     // Check if the string is equal to its reverse
//     return cleanedStr === cleanedStr.split('').reverse().join('');
// }

// // Example usage:
// console.log(isPalindrome("A man, a plan, a canal, Panama"));  // True
// console.log(isPalindrome("race a car"));  // False

// node isPalindrome.js
