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
    }
];

function getAlmostWholeSymbolForPowerOfTen(exponent) {
    return symbolsForPowersOfTen[exponent - 1].whole + symbolsForPowersOfTen[exponent].whole;
}

function getAlmostHalfSymbolForPowerOfTen(exponent) {
    return symbolsForPowersOfTen[exponent - 1].whole + symbolsForPowersOfTen[exponent].half;
}

function getWholePowerOfTen(exponent) {
    return Math.pow(10, exponent);
}

function getHalfPowerOfTen(exponent) {
    return getWholePowerOfTen(exponent) / 2;
}

function getAlmostWholePowerOfTen(exponent) {
    return getWholePowerOfTen(exponent) - getWholePowerOfTen(exponent - 1);
}

function getAlmostHalfPowerOfTen(exponent) {
    return getHalfPowerOfTen(exponent) - getWholePowerOfTen(exponent - 1);
}

module.exports.arabicToRoman = function(arabic) {
    var roman = "";

    function substituteRepeatingSymbolsForValues(symbol, value) {
        while (arabic >= value) {
            roman += symbol;
            arabic -= value;
        }
    }

    function substituteSymbolForValue(symbol, value) {
        if (arabic >= value) {
            roman += symbol;
            arabic -= value;
        }
    }

    substituteRepeatingSymbolsForValues(symbolsForPowersOfTen[2].whole, getWholePowerOfTen(2));
    substituteSymbolForValue(getAlmostWholeSymbolForPowerOfTen(2), getAlmostWholePowerOfTen(2));
    substituteSymbolForValue(symbolsForPowersOfTen[2].half, getHalfPowerOfTen(2));
    substituteSymbolForValue(getAlmostHalfSymbolForPowerOfTen(2), getAlmostHalfPowerOfTen(2));
    substituteRepeatingSymbolsForValues(symbolsForPowersOfTen[1].whole, getWholePowerOfTen(1));
    substituteSymbolForValue(getAlmostWholeSymbolForPowerOfTen(1), getAlmostWholePowerOfTen(1));
    substituteSymbolForValue(symbolsForPowersOfTen[1].half, getHalfPowerOfTen(1));
    substituteSymbolForValue(getAlmostHalfSymbolForPowerOfTen(1), getAlmostHalfPowerOfTen(1));
    substituteRepeatingSymbolsForValues(symbolsForPowersOfTen[0].whole, getWholePowerOfTen(0));

    return roman;
};
