const sumAll = function(numStart, numEnd) {
    if (typeof(numStart) !== 'number' || typeof(numEnd) !== 'number') return 'ERROR';
    if (numStart < 0 || numEnd < 0) return 'ERROR';
    if (numEnd === numStart) return numEnd;
    if (numStart > numEnd) {
        [numStart, numEnd] = [numEnd, numStart]
    }

    // const nums = []
    // for (let i = numEnd; i >= numStart; i--) {
    //     nums.push(i);
    // }

    // let sum = 0;
    // nums.forEach((num) => sum += num);

    let sum = 0
    for (let i = numStart; i <= numEnd; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

// if numEnd smaller than numStart
// just loop backwards until num End equals to numStart
// sum the elements in function body
// add those numbers into an array