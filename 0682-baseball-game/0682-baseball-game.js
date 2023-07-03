/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let scores = [];
    operations.forEach(op => {
        if(op === '+'){
            scores.push(scores[scores.length - 1] + scores[scores.length - 2])
        } else if(op === 'D'){
            scores.push(scores[scores.length - 1] * 2)
        } else if(op === 'C'){
            scores.pop();
        } else {
            scores.push(parseInt(op))
        }
    });
    
    let sum = 0;
    scores.forEach(score => {
        sum += score;
    })
    return sum;
};