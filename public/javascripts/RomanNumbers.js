var _s = require('underscore.string');
var romanSymbols = require('./RomanSymbols.js');
var powerOfTenValues = require('./PowerOfTenValues.js');

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
        substituteRepeatingSymbolForEachContainmentOfValue(romanSymbols.getWholeSymbolForPowerOfTen(exponent),
            powerOfTenValues.getWholePowerOfTen(exponent));
    }

    function substituteSymbolForAlmostWholePowerOfTen(exponent) {
        substituteSymbolForValueIfContained(romanSymbols.getAlmostWholeSymbolForPowerOfTen(exponent),
            powerOfTenValues.getAlmostWholePowerOfTen(exponent));
    }

    function substituteSymbolForHalfPowerOfTen(exponent) {
        substituteSymbolForValueIfContained(romanSymbols.getHalfSymbolForPowerOfTen(exponent),
            powerOfTenValues.getHalfPowerOfTen(exponent));
    }

    function substituteSymbolForAlmostHalfPowerOfTen(exponent) {
        substituteSymbolForValueIfContained(romanSymbols.getAlmostHalfSymbolForPowerOfTen(exponent),
            powerOfTenValues.getAlmostHalfPowerOfTen(exponent));
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
        substituteValueForEachInstanceOfLeadingSymbol(romanSymbols.getWholeSymbolForPowerOfTen(exp),
            powerOfTenValues.getWholePowerOfTen(exp));
        substituteValueForEachInstanceOfLeadingSymbol(romanSymbols.getAlmostWholeSymbolForPowerOfTen(exp),
            powerOfTenValues.getAlmostWholePowerOfTen(exp));
        substituteValueForEachInstanceOfLeadingSymbol(romanSymbols.getHalfSymbolForPowerOfTen(exp),
            powerOfTenValues.getHalfPowerOfTen(exp));
        substituteValueForEachInstanceOfLeadingSymbol(romanSymbols.getAlmostHalfSymbolForPowerOfTen(exp),
            powerOfTenValues.getAlmostHalfPowerOfTen(exp));
    }
    substituteValueForTrailingIs();

    return arabic;
};
