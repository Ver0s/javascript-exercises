const removeFromArray = function(array, ...removedElements) {
    // for (const el of removedElements) {
    //     if (!(array.includes(el))) continue
    //     let index = array.indexOf(el);
    //     array.splice(index,1)
    // }
    // return array;
    return array.filter(el => !removedElements.includes(el))
};

// Do not edit below this line
module.exports = removeFromArray;
