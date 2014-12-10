module.exports.arabicToRoman = function(arabic) {
    var roman = "";
    while (arabic >= 10) {
        roman += 'X';
        arabic -=10;
    }

    function substituteSymbolForValue(symbol, value) {
        if (arabic >= value) {
            roman += symbol;
            arabic -= value;
        }
    }

    substituteSymbolForValue('IX', 9);
    substituteSymbolForValue('V', 5);
    substituteSymbolForValue('IV', 4);

    while (arabic >= 1) {
        roman += 'I';
        arabic -= 1;
    }

    return roman;
};
