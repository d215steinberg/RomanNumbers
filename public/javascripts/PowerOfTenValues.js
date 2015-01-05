function getWholePowerOfTen(exponent) {
    return Math.pow(10, exponent);
}

function getHalfPowerOfTen(exponent) {
    return getWholePowerOfTen(exponent) / 2;
}

module.exports.getWholePowerOfTen = getWholePowerOfTen;
module.exports.getHalfPowerOfTen = getHalfPowerOfTen;

module.exports.getAlmostWholePowerOfTen = function(exponent) {
    return getWholePowerOfTen(exponent) - getWholePowerOfTen(exponent - 1);
};

module.exports.getAlmostHalfPowerOfTen = function(exponent) {
    return getHalfPowerOfTen(exponent) - getWholePowerOfTen(exponent - 1);
};