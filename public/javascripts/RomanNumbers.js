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

    substituteRepeatingSymbolsForValues(symbolsForPowersOfTen[2].whole, 100);
    substituteSymbolForValue(getAlmostWholeSymbolForPowerOfTen(2), 90);
    substituteSymbolForValue(symbolsForPowersOfTen[2].half, 50);
    substituteSymbolForValue('XL', 40);
    substituteRepeatingSymbolsForValues(symbolsForPowersOfTen[1].whole, 10);
    substituteSymbolForValue(getAlmostWholeSymbolForPowerOfTen(1), 9);
    substituteSymbolForValue(symbolsForPowersOfTen[1].half, 5);
    substituteSymbolForValue('IV', 4);
    substituteRepeatingSymbolsForValues(symbolsForPowersOfTen[0].whole, 1);

    return roman;
};
