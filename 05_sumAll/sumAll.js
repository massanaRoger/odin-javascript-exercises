const sumAll = function(a, b) {
    let sum = 0;
    if (a < 0 || b < 0 || !(typeof a === 'number') || !(typeof b === 'number') )
        return 'ERROR';
    if (a > b) {
        const aux = b;
        b = a;
        a = aux;
    }
    for (; a <= b; a++) {
        sum += a;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
