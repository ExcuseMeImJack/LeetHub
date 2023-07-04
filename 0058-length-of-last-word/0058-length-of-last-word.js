/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = s => {
    let result = [];
    for(let i=[...s].length-1; i>=0;i--){
        if(s[i] !== " "){
            result.push(s[i]);
        }
        else {
            if(result.length === 0){
                continue;
            }
            break;
        }
    }
    return result.length;
    
};