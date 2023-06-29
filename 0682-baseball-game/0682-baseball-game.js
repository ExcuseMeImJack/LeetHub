/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const stack = [];
    let sum = 0;
    operations.forEach(op => {
        if(op === '+') stack.push((stack[stack.length - 1]) + (stack[stack.length - 2]));
        else if(op === 'D') stack.push((stack[stack.length - 1]) * 2);
        else if(op === 'C') stack.pop();
        else stack.push(parseInt(op))
    })
    
    stack.forEach(num => {
        sum += num;
    })
    return sum;
};