const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(args) {
	return +(args.reduce((sum, number) => {
        return sum + number;
    }, 0))
};

const multiply = function(args) {
    return args.reduce((sum, number) => {
      return sum * number;
    }, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
	if (number === 0 || number === 1) return 1;
    return factorial(number - 1) * number;
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
