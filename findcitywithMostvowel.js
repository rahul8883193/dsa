const countVowel = (str) => {
  let vowelcount = 0;
  let vowel = "AEIOUaeiou";

  for (let char of str) {
    if (/[A-Za-z]/.test(char)) {
      if (vowel.includes(char)) {
        vowelcount++;
      }
    }
  }
  return vowelcount;
};

const cityWithMostVowels = (arr) => {
  let obj = {};
  let max = 0;
  let result = "";

  for (let char of arr) {
    obj[char] = countVowel(char);

    if (obj[char] > max) {
      max = obj[char];
      result = char;
    }
  }
  return result;
};

const cityArray = ["Delhi", "Amsterdam", "Oslo", "Udaipur", "Bangkok"];
console.log(cityWithMostVowels(cityArray)); // Output: "Udaipur"
