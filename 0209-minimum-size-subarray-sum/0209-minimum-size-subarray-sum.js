/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0;
    let total = 0;
    let minSub = Infinity;
    
    for(let right = 0; right < nums.length; right++){
        total += nums[right];
        
        while(total >= target){
            minSub = Math.min(minSub, right - left + 1);
            total -= nums[left];
            left += 1
        }
    }
    if(minSub == Infinity) return 0
    else return minSub
};