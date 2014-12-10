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

    for (var exponent = 2; exponent >= 1; exponent--) {
        substituteRepeatingSymbolsForValues(symbolsForPowersOfTen[exponent].whole, getWholePowerOfTen(exponent));
        substituteSymbolForValue(getAlmostWholeSymbolForPowerOfTen(exponent), getAlmostWholePowerOfTen(exponent));
        substituteSymbolForValue(symbolsForPowersOfTen[exponent].half, getHalfPowerOfTen(exponent));
        substituteSymbolForValue(getAlmostHalfSymbolForPowerOfTen(exponent), getAlmostHalfPowerOfTen(exponent));
    }
    substituteRepeatingSymbolsForValues(symbolsForPowersOfTen[0].whole, getWholePowerOfTen(0));

    return roman;
};
