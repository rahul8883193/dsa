const arr = [12, 3, 4, 5, 5, 5, 6, 6, 7, 7, 54, 3, 3, 3];
// const arr=[26, 27, 26, 26, 28, 28, 29, 29, 30]
let obj = {};
let uniq = [];
let duplicate = [];
arr.map((x) => {
  if (!uniq.includes(x)) {
    uniq.push(x);
  }
  obj[x] = (obj[x] || 0) + 1;
  if (obj[x] == 2) {
    duplicate.push(x);
  }
});
console.log(uniq);
console.log(duplicate);

//find uniq withouty inbuild method

const findUniq = (arr) => {
  const uniqueArr = [];
  const seen = {}; // Acts like a hash table

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (seen[item] !== true) {
      seen[item] = true;
      uniqueArr.push(item);
    }
  }

  return uniqueArr;
};

console.log(findUniq([1, 12, 3, 4, 4, 5, 56, 7, 4, 56, 32, 3, 4, 32]));

// // node uniqAndDuplicateVal.js
