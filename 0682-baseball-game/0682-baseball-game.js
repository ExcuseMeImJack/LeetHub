/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    
    // Create an empty array to hold all the scores.
    let scores = [];
    
    // For each operation in our operations input array:
    operations.forEach(op => {
        // Check to see if the operation is '+'
        if(op === '+'){
            // If the operation is '+', add the two most recent scores together. Then push it to the scores array.
            scores.push(scores[scores.length - 1] + scores[scores.length - 2])
        // Check to see if the operation is 'D'
        } else if(op === 'D'){
            // If the operation is 'D', double the most recent score. Then push it to the scores array.
            scores.push(scores[scores.length - 1] * 2)
        // Check to see if the operation is 'C'
        } else if(op === 'C'){
            // If the operation is 'C', remove the most recent score from the scores array.
            scores.pop();
        // If none of the above is true OR if the operation is a number:
        } else {
            // Push the parsed score into the scores array.
            scores.push(parseInt(op))
        }
    });
    
    // Create a sum variable set to 0.
    let sum = 0;
    // For each score in the scores array:
    scores.forEach(score => {
        // Add the score to the sum for each score.
        sum += score;
    })
    
    // Return the score.
    return sum;
};