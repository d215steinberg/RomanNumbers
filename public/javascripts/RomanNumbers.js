module.exports.arabicToRoman = function(arabic) {
    var roman = "";
    for (var i = 1; i <= arabic; i++) {
        roman += 'I';
    }
    return roman;
};
