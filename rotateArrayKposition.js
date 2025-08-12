
function rotateArrayLeft(nums, k) {
      let n = nums.length;
      let r = k > n ? k % n : k;
      let a = nums.slice(n - r);
      nums.splice(n - r, r);
      nums.unshift(...a);
      return nums

}


const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
const rotat = rotateArrayLeft(arr, k);
console.log(rotat); // Output: [5, 6, 7, 1, 2, 3, 4]
