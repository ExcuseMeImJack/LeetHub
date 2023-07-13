/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxWater = 0
    let left = 0;
    let right = height.length - 1;
    
    while(left < right){
        let heightLeft = height[left];
        let heightRight = height[right];
        let shorter = Math.min(heightRight, heightLeft);
        let area = (right - left) * shorter;
        
        maxWater = Math.max(maxWater, area);
        
        if(heightLeft >= heightRight){
            right -= 1;
        } else {
            left += 1;
        }
    }
    return maxWater;
};