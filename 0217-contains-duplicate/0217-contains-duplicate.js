/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const uniqueNums = new Set(nums);
    console.log(uniqueNums.size)
    console.log(nums.length)
    if(uniqueNums.size === nums.length) return false;
    else if(uniqueNums.size !== nums.length) return true;
};