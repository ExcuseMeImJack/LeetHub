/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const quickSort = (nums, start, end) => {
        if(end - start + 1 <= 1) return nums;
        let pivot = nums[end];
        let left = start;
        
        for(let i = start; i <= end; i++){
            if(nums[i] < pivot){
                let temp = nums[left];
                nums[left] = nums[i];
                nums[i] = temp;
                left += 1;
            }
        }
        nums[end] = nums[left];
        nums[left] = pivot;
        quickSort(nums, start, left - 1);
        quickSort(nums, left + 1, end);
        return nums;
    }
    let start = 0;
    let end = nums.length - 1;
    return quickSort(nums, start, end);
};