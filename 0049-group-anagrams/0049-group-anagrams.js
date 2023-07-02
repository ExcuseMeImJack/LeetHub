/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const res = [];
  const obj = {};

    strs.forEach((word) => {
        // Turn the current word into a string and sort the characters then join it back into a string.
        const sortedStr = word.split("").sort().join(""); 
        // If the sorted string is in the object;
        if (sortedStr in obj) {
            // Push the word into the obj at the sorted string.
            obj[sortedStr].push(word);
        } else {
            // Set the word into the obj at the sorted string.
            obj[sortedStr] = [word];
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