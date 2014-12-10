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

    substituteSymbolForValue('L', 50);
    substituteSymbolForValue('XL', 40);
    substituteRepeatingSymbolsForValues('X', 10);
    substituteSymbolForValue('IX', 9);
    substituteSymbolForValue('V', 5);
    substituteSymbolForValue('IV', 4);
    substituteRepeatingSymbolsForValues('I', 1);

    return roman;
};
