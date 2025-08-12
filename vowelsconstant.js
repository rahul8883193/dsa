function countVowelsAndConsonants(str) {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;
  let consonantCount = 0;

  for (let char of str) {
    if (/[a-zA-Z]/.test(char)) {
      // check if it's an alphabet
      if (vowels.includes(char)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
  }

  return { vowels: vowelCount, consonants: consonantCount };
}

// Example
const result = countVowelsAndConsonants("Hello World!");
console.log(result); // { vowels: 3, consonants: 7 }
