/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    let isFalse;
    const acceptedChars = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    
    const inputArr = s.split('');
    inputArr.forEach(char => {
        if(!acceptedChars.hasOwnProperty(char)){
            stack.push(char);
        } else if(stack.length === 0 || stack[stack.length - 1] !== acceptedChars[char]){
            isFalse = false;
        } else {
            stack.pop()
        }
    })
    if(isFalse === false) return false;
    else return stack.length === 0
};

console.log(isValid("]"))