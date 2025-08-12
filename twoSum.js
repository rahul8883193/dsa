//Two Sum – Find two numbers that add up to a target

function twoSum(nums, target) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (obj[complement] > -1) {
      // return [obj[complement], i];
      return [complement, nums[i]];
    }
    obj[nums[i]] = i;
  }

  return [];
}

console.log(twoSum([2, 5, 11, 8, 7], 9)); // Output: [2, 7]

// console.log("a");

// const func = async () => {
//   setTimeout( () => {
//      console.log("b");
//   }, 0);
// };
// func();
// console.log("c");
// // node twoSum.js
