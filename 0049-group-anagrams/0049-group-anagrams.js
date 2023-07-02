/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const res = [];
  const obj = {};
    // console.log('Input: ', strs)
    strs.forEach((word) => {
        // Turn the current word into a string and sort the characters then join it back into a string.
        // console.log('Current Word: ', word)
        const sortedStr = word.split("").sort().join(""); 
        // If the sorted string is in the object;
        // console.log('Sorted Word: ', sortedStr)
        if (sortedStr in obj) { // Checks to see if the sorted string is already an anagram.
            // Push the word into the obj at the sorted string.
            obj[sortedStr].push(word);
            // console.log('Object TRUE: ', obj)
        } else {
            // Set the word into the obj at the sorted string.
            obj[sortedStr] = [word];
            // console.log('Object FALSE: ', obj)
        }
    });
    // For every string in the object
    for (let s in obj) {
        // Push the string into the res array.
        res.push(obj[s]);
    }
  // Return the res array.
  return res;
};