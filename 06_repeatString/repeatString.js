const repeatString = function(str, n) {
    if(n < 0){
        return 'ERROR'
    }
    target = "";
    for(let i = 0; i < n; i++){
        target = target.concat(str);
    }
    return target;
};

// Do not edit below this line
module.exports = repeatString;
