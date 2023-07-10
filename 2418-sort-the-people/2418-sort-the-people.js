/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let swapped = true;
    while(swapped){
        swapped = false;
        for(let i = 0; i < names.length; i++){
            if(heights[i] > heights[i + 1]){
                let tempHeight = heights[i];
                let tempPerson = names[i];
                
                heights[i] = heights[i + 1];
                names[i] = names[i + 1];
                heights[i + 1] = tempHeight;
                names[i + 1] = tempPerson;
                swapped = true;
            }
        }
        if(!swapped) return names.reverse();
    }
};