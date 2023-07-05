/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    
    const acceptedChars = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    
    const inputArr = s.split('');
    
    for(let i = 0; i < inputArr.length; i++){
        let char = inputArr[i];
        
        // If the character is not in acceptedChars, it's an opener
        if(!acceptedChars[char]){ 
            stack.push(char);
            
        // If the stack is empty or if the top characters doesn't equal the character in acceptedChars
        } else if(stack.length === 0 || stack[stack.length - 1] !== acceptedChars[char]){
            // Then return false
            return false;
        
        // 
        } else {
            stack.pop()
        }
    }

    return stack.length === 0
};
