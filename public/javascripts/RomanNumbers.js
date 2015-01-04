var _s = require('underscore.string');

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

    function substituteSymbolForValue(symbol, value) {
        roman += symbol;
        arabic -= value;
    }

    function substituteRepeatingSymbolForEachContainmentOfValue(symbol, value) {
        while (arabic >= value) {
            substituteSymbolForValue(symbol, value);
        }
    }

    function substituteSymbolForValueIfContained(symbol, value) {
        if (arabic >= value) {
            substituteSymbolForValue(symbol, value);
        }
    }

    function substituteRepeatingSymbolForEachWholePowerOfTen(exponent) {
        substituteRepeatingSymbolForEachContainmentOfValue(getWholeSymbolForPowerOfTen(exponent), getWholePowerOfTen(exponent));
    }

    function substituteSymbolForAlmostWholePowerOfTen(exponent) {
        substituteSymbolForValueIfContained(getAlmostWholeSymbolForPowerOfTen(exponent), getAlmostWholePowerOfTen(exponent));
    }

    function substituteSymbolForHalfPowerOfTen(exponent) {
        substituteSymbolForValueIfContained(getHalfSymbolForPowerOfTen(exponent), getHalfPowerOfTen(exponent));
    }

    function substituteSymbolForAlmostHalfPowerOfTen(exponent) {
        substituteSymbolForValueIfContained(getAlmostHalfSymbolForPowerOfTen(exponent), getAlmostHalfPowerOfTen(exponent));
    }

    function addTrailingIs() {
        substituteRepeatingSymbolForEachContainmentOfValue('I', 1);
    }

    for (var exp = 3; exp >= 1; exp--) {
        substituteRepeatingSymbolForEachWholePowerOfTen(exp);
        substituteSymbolForAlmostWholePowerOfTen(exp);
        substituteSymbolForHalfPowerOfTen(exp);
        substituteSymbolForAlmostHalfPowerOfTen(exp);
    }
    addTrailingIs();

    return roman;
};

module.exports.romanToArabic = function(roman) {
    var arabic = 0;

    if (_s.startsWith(roman, 'IV')) {
        arabic += 4;
        roman = _s.ltrim(roman, 'IV');
    }

    if (_s.startsWith(roman, 'V')) {
        arabic += 5;
        roman = _s.ltrim(roman, 'V');
    }

    for (var i = 0; i < roman.length; i++) {
        arabic += 1;
    }
    return arabic;
};
