/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const xStr = x.toString();
    
    console.log('Check #1')
    if(xStr.includes('-')) return false
    console.log('Check #2')
    if(xStr.length === 2 && xStr[0] === xStr[1]) return true
    console.log('Check #3')
    if(xStr.length === 2 && xStr[0] !== xStr[1]) return false
    else if(xStr.length !== 2){
        console.log('For Loop Check')
        for(let i = 0; i < xStr.length/2; i++){
            console.log(i)
            if(xStr[i] !== xStr[xStr.length - 1 - i]) return false
        }
    }
console.log('Finalizing no case')
return true
};