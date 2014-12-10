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

    it("should return V for 5", function() {
        RomanNumbers.arabicToRoman(5).should.equal('V');
    });

    it("should return VIII for 8", function() {
       RomanNumbers.arabicToRoman(8).should.equal('VIII');
    });

    it('should return IV for 4', function() {
       RomanNumbers.arabicToRoman(4).should.equal('IV');
    });

    it('should return X for 10', function() {
       RomanNumbers.arabicToRoman(10).should.equal('X');
    });

    it('should return XIII for 13', function() {
       RomanNumbers.arabicToRoman(13).should.equal('XIII');
    });

    it('should return XV for 15', function() {
        RomanNumbers.arabicToRoman(15).should.equal('XV');
    });

    it('should return XIV for 14', function() {
        RomanNumbers.arabicToRoman(14).should.equal('XIV');
    });
});