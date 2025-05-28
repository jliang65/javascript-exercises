const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return (b - a) * -1;
};

const sum = function(arr) {
  let target = 0;
  for(number of arr){
    target += number;
  }
  return target;
};

const multiply = function(arr){
  let product = 1;
  for(number of arr){
    product *= number;
  }
  return product;
};

const power = function(base, pow) {
  return Math.pow(base, pow);
};

const factorial = function(n) {
	if(n === 0 || n === 1){
    return 1;
  }else{
    return n * factorial(n - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
