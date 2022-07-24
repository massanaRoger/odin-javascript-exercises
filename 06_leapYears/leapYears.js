const leapYears = function(year) {
    let leapYear = false;
    if (year % 4 === 0) {
        if (year % 100 === 0)
            leapYear = year % 400 === 0;
        else
            leapYear = true;
    }
    return leapYear
};

// Do not edit below this line
module.exports = leapYears;
