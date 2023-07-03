/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // Input: number array and target
    // Output: an array of the numbers that pass the target
    const numCount = {};
    const output = [];
    nums.forEach(num => {
       if(num in numCount){
           numCount[num]++;
       } else {
           numCount[num] = 1;
       }
    });
    
    let sortedEntries = Object.entries(numCount).sort((a,b) => b[1]-a[1])
    sortedEntries = sortedEntries.slice(0, k)
    sortedEntries.forEach(entry => {
        output.push(parseInt(entry[0]))
    })
    
    
    
    return output;
};