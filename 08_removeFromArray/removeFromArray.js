const removeFromArray = function(arr, ...theRemoved) {
    for(element of theRemoved){
        while(arr.includes(element)){
            arr.splice(arr.indexOf(element), 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
