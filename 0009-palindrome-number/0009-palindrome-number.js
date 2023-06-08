/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const xStr = x.toString();
    
for(let i = 0; i < xStr.length/2; i++){
            console.log(i)
            if(xStr[i] !== xStr[xStr.length - 1 - i]) return false
        }
return true
};