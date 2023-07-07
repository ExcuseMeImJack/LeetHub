/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // Input: An num array
    // Return: An array of the products of nums, excluding nums[i]
    
    // Set the length of the input array to a variable called 'length'.
    const length = nums.length;
    
    // Create an Array the size of the input array but only with the values '1'.
    const res = Array(length).fill(1);
    
    // Create a variable called prefixProduct and suffixProduct
    let prefixProduct = 1;
    let suffixProduct = 1;
    
    // For each number in the array, multiple the current index's value in the res by the prefixProduct.
    // Then multiply the prefixProduct by the current index's value in the nums array.
    for(let i = 0; i < length; i++){
        res[i] *= prefixProduct;
        prefixProduct *= nums[i];
    }
    
    // For each index, excluding the first index, 
    for(let i = length - 1; i >= 0; i--){
        res[i] *= suffixProduct;
        suffixProduct *= nums[i];
    }
    return res;
};