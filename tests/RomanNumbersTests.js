var RomanNumbers = require('../public/javascripts/RomanNumbers.js');
require('should');

describe('Roman Numbers', function() {
    it('should convert an arabic number into a roman number', function() {
        RomanNumbers.arabicToRoman.should.be.type('function');
    });
});