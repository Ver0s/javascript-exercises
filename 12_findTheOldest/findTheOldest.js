const findTheOldest = function(arr) {
    if (!('yearOfDeath' in arr)) arr.yearOfDeath = new Date().getFullYear();
    return arr.reduce((max, person) => (max.yearOfDeath - max.yearOfBirth) > (person.yearOfDeath - person.yearOfBirth) ? max : person, 0);
};
//https://stackoverflow.com/questions/36941115/return-object-with-highest-value

// Do not edit below this line
module.exports = findTheOldest;
