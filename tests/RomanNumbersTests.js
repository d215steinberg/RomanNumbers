var RomanNumbers = require('../public/javascripts/RomanNumbers.js');
require('should');

describe('Roman Numbers', function() {
    it('should convert an arabic number into a roman number', function() {
        RomanNumbers.arabicToRoman.should.be.type('function');
    });

    it("should return I for 1", function() {
        RomanNumbers.arabicToRoman(1).should.equal('I');
    });

    it("should return III for 3", function() {
       RomanNumbers.arabicToRoman(3).should.equal('III');
    });
});