/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const pairs = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] === target && !pairs.includes(i)) {
        pairs.push(i, j);
      }
    }
  }
  return pairs;
};
