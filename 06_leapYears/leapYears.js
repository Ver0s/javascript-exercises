const leapYears = function(year) {
    // if ((year % 4 !== 0) && (year % 400 !== 0)) return false
    // if ((year % 100 === 0) && (year % 400 !== 0)) return false
    // return true

    return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
};


// if year %% 4 === 0 -> true
// dividisble by 100 - false
// by 400 - true

// Do not edit below this line
module.exports = leapYears;
