var _s = require('underscore.string');
var romanSymbols = require('./RomanSymbols.js');
var powerOfTenValues = require('./PowerOfTenValues.js');

function getWholeSymbolForPowerOfTen(exponent) {
    return romanSymbols.getWholeSymbolForPowerOfTen(exponent);
}

function getHalfSymbolForPowerOfTen(exponent) {
    return romanSymbols.getHalfSymbolForPowerOfTen(exponent);
}

function getAlmostWholeSymbolForPowerOfTen(exponent) {
    return romanSymbols.getAlmostWholeSymbolForPowerOfTen(exponent);
}

function getAlmostHalfSymbolForPowerOfTen(exponent) {
    return romanSymbols.getAlmostHalfSymbolForPowerOfTen(exponent);
}

function getWholePowerOfTen(exponent) {
    return powerOfTenValues.getWholePowerOfTen(exponent);
}

function getHalfPowerOfTen(exponent) {
    return powerOfTenValues.getHalfPowerOfTen(exponent);
}

function getAlmostWholePowerOfTen(exponent) {
    return powerOfTenValues.getAlmostWholePowerOfTen(exponent);
}

function getAlmostHalfPowerOfTen(exponent) {
    return powerOfTenValues.getAlmostHalfPowerOfTen(exponent);
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

    function trimLeadingSymbols(symbol) {
        var oldRomanLength = roman.length;
        roman = _s.ltrim(roman, symbol);
        var newRomanLength = roman.length;
        return (oldRomanLength - newRomanLength) / symbol.length;
    }

    function substituteValueForEachInstanceOfLeadingSymbol(symbol, value) {
        if (_s.startsWith(roman, symbol)) {
            var symbolCount = trimLeadingSymbols(symbol);
            arabic += symbolCount * value;
        }
    }

    function substituteValueForTrailingIs() {
        arabic += roman.length;
    }

    for (var exp = 3; exp >= 1; exp--) {
        substituteValueForEachInstanceOfLeadingSymbol(getWholeSymbolForPowerOfTen(exp), getWholePowerOfTen(exp));
        substituteValueForEachInstanceOfLeadingSymbol(getAlmostWholeSymbolForPowerOfTen(exp), getAlmostWholePowerOfTen(exp));
        substituteValueForEachInstanceOfLeadingSymbol(getHalfSymbolForPowerOfTen(exp), getHalfPowerOfTen(exp));
        substituteValueForEachInstanceOfLeadingSymbol(getAlmostHalfSymbolForPowerOfTen(exp), getAlmostHalfPowerOfTen(exp));
    }
    substituteValueForTrailingIs();

    return arabic;
};
