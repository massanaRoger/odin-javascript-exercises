const fibonacci = function(a) {
    // your code here
    if (a < 0) return 'OOPS';
    a = +a;
    if (a === 0 || a === 1) return a;
    return fibonacci(a - 1) + fibonacci(a - 2);
};

// Do not edit below this line
module.exports = fibonacci;
