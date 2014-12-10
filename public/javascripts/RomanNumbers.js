function getTrailingIs(arabic) {
    var trailingIs = "";
    for (var i = 1; i <= arabic; i++) {
        trailingIs += 'I';
    }
    return trailingIs;
}

module.exports.arabicToRoman = function(arabic) {
    var roman = "";
    if (arabic === 5) {
        return 'V';
    }
    roman = getTrailingIs(arabic, roman);
    return roman;
};
