/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let result = 0; // Holds the result of how many areas of water is trapped
    let left = 0; // Left index to track the left most position of the height array
    let right = height.length - 1; // Right index to track the right most position of the height array
    let leftMax = 0; // Holds the max value of the left side of the array
    let rightMax = 0; // Holds the right value of the right side of the array
    
    // While the left index is less than the right index
    while (left < right) {
        // If the left height value is less than the right height value
        if (height[left] < height[right]) {
            // You want to check to see if the left height value is greater than or equal to the leftMax
            if (height[left] >= leftMax) {
                // If it is greater, set the leftMax to the left height value
                leftMax = height[left];
            // If the left height value is NOT greater than or equal to the leftMax
            } else {
                // Add the difference of the leftMax and the left height value to the preexisting result value
                result += leftMax - height[left];
            }
            // If the left height value is less than the right height value and we did what we had to above, increment the left index
            left++;
        // If the left height value is not less than the than the right height value
        } else {
            // If the right height value is greater than the rightMax
            if (height[right] >= rightMax) {
                // Set the rightMax to the right height value
                rightMax = height[right];
            // If the right height value is not greater than the rightMax
            } else {
                // Add the difference of the rightMax and the right height value to the preexisting result value
                result += rightMax - height[right];
            }
            // If the left height value is not less than the than the right height value and we did what we had to above, decrement the right index
            right--;
        }
    }
    // Return the result after the left index becomes greater than the right index
    return result;
};