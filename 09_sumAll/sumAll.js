const sumAll = function(a, b) {
    // Filter out non-numbers
    if(!(typeof(a) === "number" && typeof(b) === "number")){
        return "ERROR";
    }

    // Filter out negative numbers
    if(a < 0 || b < 0){
        return "ERROR";
    }

    //Filter out non-integers
    if(Math.floor(a) != a || Math.floor(b) != b){
        return "ERROR"; 
    }

    let min = a < b ? a : b;
    let max = a > b ? a : b;
    let sum = 0;

    for(let i = min; i <= max; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
