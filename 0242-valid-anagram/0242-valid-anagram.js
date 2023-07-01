/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const word = s.split('');
    const anagram = t.split('');
    const fLetters = {};
    const bLetters = {};
    let longerInput;
    
    word.forEach(ltr => {
       if(!Object.keys(fLetters).includes(ltr)){
           fLetters[ltr] = 1;
       } else {
           fLetters[ltr]++;
       }
    });
    
    anagram.forEach(ltr => {
        if(!Object.keys(bLetters).includes(ltr)){
            bLetters[ltr] = 1;
        } else {
            bLetters[ltr]++;
        }
    })
    
    if(word.length > anagram.length){
        longerInput = fLetters;
    } else {
        longerInput = bLetters;
    }
    console.log(longerInput)
    for(let key in longerInput) {
        if(key in bLetters) {
            if(fLetters[key] !== bLetters[key]){
                return false;
            }
        } else {
            return false;
        }
    }
    
    return true;
};