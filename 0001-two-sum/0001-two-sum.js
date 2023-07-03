/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Input: Array of nums and a target
    // Return: Indices of the two numbers that add up to the target
    
    // Create an empty output array.
    const output = [];
    // Get the length of the nums array.
    const length = nums.length;
    
    // Iterate twice (i & j) one for the current number and one for the next number.
    for(let i = 0; i < length; i++){
        for(let j = i + 1; j < length; j++){
            // Check to see if the values add up to the target.
            if(nums[i] + nums[j] === target){
                // If they do, push them to the output array.
                output.push(i, j)
            }
        }
    }
        
    return output;
};
