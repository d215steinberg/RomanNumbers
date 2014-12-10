function getTrailingIs(arabic) {
    var trailingIs = "";
    for (var i = 1; i <= arabic; i++) {
        trailingIs += 'I';
    }
    return trailingIs;
}

module.exports.arabicToRoman = function(arabic) {
    var roman = "";
    if (arabic >= 10) {
        roman = 'X';
        arabic -=10;
    }
    if (arabic >= 5) {
        roman = 'V';
        arabic -= 5;
    }
    if (arabic === 4) {
        roman = 'IV';
        arabic -= 4;
    }
    return roman + getTrailingIs(arabic);
};
