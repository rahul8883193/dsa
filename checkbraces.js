const isValid = (str) => {
  let obj = {
    "[": "]",
    "(": ")",
    "{": "}",
  };
  let stack = [];
  for (let char of str) {
    if (obj[char]) {
      stack.push(char);
    } else if (obj[stack.pop()] != char) {
      return false;
    }
  }

  return stack.length == 0;
};

 console.log(isValid("{{}}}{}}"));
