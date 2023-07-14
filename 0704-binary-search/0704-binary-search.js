/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // Pointers for the left and right index
    let left = 0; // Left pointer set to 0, aka the start of the array
    let right = nums.length - 1; // Right pointer set to the last index, aka the end of the array
    
    // While the left index is less than or equal to the right index
    while(left <= right){
        // Find the midpoint by adding the left and right indices then split the sum in half.
        // We use Math.floor to round the value down
        let mid = Math.floor((left + right) / 2);
        // If the value at the midpoint is equal to the target
        if(nums[mid] === target){
            // Return the midpoint
            return mid;
        // If the value at the midpoint is less than the target
        } else if(nums[mid] < target){
            // Set the left index to the midpoint plus 1, meaning the target is not to the left
            left = mid + 1;
        // If the value at the midpoint is greater than the target
        } else {
            // Set the right index to the midpoint minus 1, meaning the target is not to the right
            right = mid - 1;
        }
    }
    // If the target does not exist, return -1
    return -1
};