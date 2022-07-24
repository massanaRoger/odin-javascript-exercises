const ftoc = function(fahrenheit) {

  let result = (fahrenheit - 32) / 1.8;
  // if (result === 0)
  //   return 0
  return +result.toFixed(1);
};

const ctof = function(celcius) {
  return +((celcius * 9/5) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
