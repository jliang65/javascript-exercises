const fibonacci = function(n) {
    const number = +n;
    if(number < 0){
        return "OOPS";
    }

    if(number === 0){
        return 0;
    }
    if(number === 1 || number === 2){
        return 1;
    }else{
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
