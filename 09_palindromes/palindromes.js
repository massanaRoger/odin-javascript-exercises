const palindromes = function (string) {
    const regex = /\p{P}/gu;
    const result = string.replace(regex, "");
    string = result.replace(/\s+/g, '');
    string = string.toLowerCase();
    const reversed = reverseString(string);
    return (string === reversed);

};

function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}

// Do not edit below this line
module.exports = palindromes;
