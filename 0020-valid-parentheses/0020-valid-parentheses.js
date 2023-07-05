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
    
    for(let i = 0; i < inputArr.length; i++){
        let char = inputArr[i];
        if(!acceptedChars.hasOwnProperty(char)){
            stack.push(char);
        } else if(stack.length === 0 || stack[stack.length - 1] !== acceptedChars[char]){
            return false;
        } else {
            stack.pop()
        }
    }

    return stack.length === 0
};
