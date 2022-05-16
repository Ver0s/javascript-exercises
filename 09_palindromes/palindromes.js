const palindromes = function (text) {
    text = text.toLowerCase().replace(/\s/g, "");
    const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    text = text.split('');
    textFiltered = text.filter(letter => !punctuation.includes(letter)).join('');
    textFilteredReversed = textFiltered.split('').reverse().join('');
    if (textFiltered !== textFilteredReversed) return false;
    return true;
};

// Do not edit below this line
module.exports = palindromes;
