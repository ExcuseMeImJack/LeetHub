/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  if (!nums?.length) return []
  if (nums.length === 1) return nums;

  const mid = nums.length >> 1

  const left = sortArray(nums.slice(0, mid))
  const right = sortArray(nums.slice(mid))

  let lit = 0;
  let rit = 0;
  for (let i = 0; i < nums.length; i++) {
    if (rit >= right.length) {
      nums[i] = left[lit++]
    } else if (lit >= left.length) {
      nums[i] = right[rit++]
    } else {
      if (left[lit] > right[rit]) {
        nums[i] = right[rit++]
      } else {
        nums[i] = left[lit++]
      }
    }
  }

  return nums
};