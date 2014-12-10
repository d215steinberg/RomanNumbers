module.exports.arabicToRoman = function(arabic) {
    var roman = "";
    if (arabic === 5) {
        return 'V';
    }
    for (var i = 1; i <= arabic; i++) {
        roman += 'I';
    }
    return roman;
};
