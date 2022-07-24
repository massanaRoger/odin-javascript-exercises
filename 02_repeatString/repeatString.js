const repeatString = function(string, n) {
    if (n === 0) {
        return "";
    }
    if (n < 0) {
        return 'ERROR';
    }
    let strResult = string;
    for (let i = 0; i < n - 1 ; i++) {
        strResult += string;
    }
    return strResult;
};

// Do not edit below this line
module.exports = repeatString;
