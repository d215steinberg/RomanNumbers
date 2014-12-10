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

function getWholeSymbolForPowerOfTen(exponent) {
    return symbolsForPowersOfTen[exponent].whole;
}

function getHalfSymbolForPowerOfTen(exponent) {
    return symbolsForPowersOfTen[exponent].half;
}

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

    function substituteRepeatingSymbolsForWholePowersOfTen() {
        substituteRepeatingSymbolsForValues(getWholeSymbolForPowerOfTen(exponent), getWholePowerOfTen(exponent));
    }

    function substituteSymbolForAlmostWholePowerOfTen() {
        substituteSymbolForValue(getAlmostWholeSymbolForPowerOfTen(exponent), getAlmostWholePowerOfTen(exponent));
    }

    function substituteSymbolForHalfPowerOfTen() {
        substituteSymbolForValue(getHalfSymbolForPowerOfTen(exponent), getHalfPowerOfTen(exponent));
    }

    function substituteSymbolForAlmostHalfPowerOfTen() {
        substituteSymbolForValue(getAlmostHalfSymbolForPowerOfTen(exponent), getAlmostHalfPowerOfTen(exponent));
    }

    for (var exponent = 3; exponent >= 1; exponent--) {
        substituteRepeatingSymbolsForWholePowersOfTen(exponent);
        substituteSymbolForAlmostWholePowerOfTen(exponent);
        substituteSymbolForHalfPowerOfTen(exponent);
        substituteSymbolForAlmostHalfPowerOfTen(exponent);
    }
    substituteRepeatingSymbolsForWholePowersOfTen(0);

    return roman;
};
