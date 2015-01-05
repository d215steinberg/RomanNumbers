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

function getWholePowerOfTen(exponent) {
    return Math.pow(10, exponent);
}

function getHalfPowerOfTen(exponent) {
    return getWholePowerOfTen(exponent) / 2;
}

module.exports.getWholePowerOfTen = getWholePowerOfTen;
module.exports.getHalfPowerOfTen = getHalfPowerOfTen;

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

module.exports.getAlmostWholePowerOfTen = function(exponent) {
    return getWholePowerOfTen(exponent) - getWholePowerOfTen(exponent - 1);
};

module.exports.getAlmostHalfPowerOfTen = function(exponent) {
    return getHalfPowerOfTen(exponent) - getWholePowerOfTen(exponent - 1);
};