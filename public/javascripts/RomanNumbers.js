function getTrailingIs(arabic) {
    var trailingIs = "";
    for (var i = 1; i <= arabic; i++) {
        trailingIs += 'I';
    }
    return trailingIs;
}

module.exports.arabicToRoman = function(arabic) {
    var roman = "";
    while (arabic >= 10) {
        roman += 'X';
        arabic -=10;
    }

    function substitueSymbolForValue(symbol, value) {
        if (arabic >= value) {
            roman += symbol;
            arabic -= value;
        }
    }

    substitueSymbolForValue('IX', 9);
    substitueSymbolForValue('V', 5);
    substitueSymbolForValue('IV', 4);

    return roman + getTrailingIs(arabic);
};
