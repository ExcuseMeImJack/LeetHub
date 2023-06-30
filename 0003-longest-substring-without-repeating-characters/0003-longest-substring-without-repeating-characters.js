/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // Input: string of characters
    // Return: the length of the substring
    
    let left = 0;
    let right = 0;
    let max = 0;
    let window = new Set();
    
    while(right < s.length){
        while(window.has(s[right])){
            window.delete(s[left])
            left++;
        }
        max = Math.max(max, right - left + 1);
        window.add(s[right]);
        right++;
    }
    return max;
};