const convertToCelsius = function(farenheit) {
  celsius = ((farenheit - 32) / 1.8);
  if(celsius - Math.floor(celsius) === 0){
    return celsius;
  }
  return +celsius.toFixed(1);
};

const convertToFahrenheit = function(celsius) {
  farenheit = (celsius * 1.8 + 32);
  if(farenheit - Math.floor(farenheit) === 0){
    return farenheit;
  }
  return +farenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
