/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxWater = 0
    let left = 0;
    let right = height.length - 1;
    
    while(left < right){
        let shorter = Math.min(height[right], height[left]);
        let area = (right - left) * shorter;
        maxWater = Math.max(maxWater, area);
        
        if(height[left] >= height[right]){
            right -= 1;
        } else {
            left += 1;
        }
    }
    return maxWater;
};