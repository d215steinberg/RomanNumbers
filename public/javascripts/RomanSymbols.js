var symbolsForPowersOfTen = [
    {
        whole: 'I'
    },
    {
        half: 'V',
        whole: 'X'
    },
    {
        half: 'L',
        whole: 'C'
    },
    {
        half: 'D',
        whole: 'M'
    }
];

module.exports.getWholeSymbolForPowerOfTen = function(exponent) {
    return symbolsForPowersOfTen[exponent].whole;
};

module.exports.getHalfSymbolForPowerOfTen = function(exponent) {
    return symbolsForPowersOfTen[exponent].half;
};

module.exports.getAlmostWholeSymbolForPowerOfTen = function(exponent) {
    return symbolsForPowersOfTen[exponent - 1].whole + symbolsForPowersOfTen[exponent].whole;
};

module.exports.getAlmostHalfSymbolForPowerOfTen = function(exponent) {
    return symbolsForPowersOfTen[exponent - 1].whole + symbolsForPowersOfTen[exponent].half;
};