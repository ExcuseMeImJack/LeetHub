/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numSet = new Set(nums);
    let longest = 0;
    
    for(let n = 0; n < nums.length; n++){
        if(!numSet.has(nums[n] - 1)){
            let length = 0;
            while(numSet.has(nums[n] + length)){
                length += 1;
            }
            longest = Math.max(length, longest)
        }
    }
    return longest
};