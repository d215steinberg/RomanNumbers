function getTrailingIs(arabic) {
    var trailingIs = "";
    for (var i = 1; i <= arabic; i++) {
        trailingIs += 'I';
    }
    return trailingIs;
}

module.exports.arabicToRoman = function(arabic) {
    var roman = "";
    if (arabic >= 5) {
        roman = 'V';
        arabic -= 5;
    }
    return roman + getTrailingIs(arabic);
};
