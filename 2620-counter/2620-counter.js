/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let counter = 0;
    return function() {
        if(counter === 0) {
            counter++;
            return n
        }
        counter++;
        return n + counter - 1
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */