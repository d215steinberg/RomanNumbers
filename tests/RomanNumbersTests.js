var RomanNumbers = require('../public/javascripts/RomanNumbers.js');
require('should');

describe('Roman Numbers', function () {
    it('should convert an arabic number into a roman number', function () {
        RomanNumbers.arabicToRoman.should.be.type('function');
    });

    it("should return I for 1", function () {
        RomanNumbers.arabicToRoman(1).should.equal('I');
    });

    it("should return III for 3", function () {
        RomanNumbers.arabicToRoman(3).should.equal('III');
    });

    it("should return V for 5", function () {
        RomanNumbers.arabicToRoman(5).should.equal('V');
    });

    it("should return VIII for 8", function () {
        RomanNumbers.arabicToRoman(8).should.equal('VIII');
    });

    it('should return IV for 4', function () {
        RomanNumbers.arabicToRoman(4).should.equal('IV');
    });

    it('should return X for 10', function () {
        RomanNumbers.arabicToRoman(10).should.equal('X');
    });

    it('should return XIII for 13', function () {
        RomanNumbers.arabicToRoman(13).should.equal('XIII');
    });

    it('should return XV for 15', function () {
        RomanNumbers.arabicToRoman(15).should.equal('XV');
    });

    it('should return XIV for 14', function () {
        RomanNumbers.arabicToRoman(14).should.equal('XIV');
    });

    it('should return XVIII for 18', function () {
        RomanNumbers.arabicToRoman(18).should.equal('XVIII');
    });

    it('should return XX for 20', function () {
        RomanNumbers.arabicToRoman(20).should.equal('XX');
    });

    it('should return XXX for 30', function () {
        RomanNumbers.arabicToRoman(30).should.equal('XXX');
    });

    it('should return XXII for 22', function () {
        RomanNumbers.arabicToRoman(22).should.equal('XXII');
    });

    it('should return XXXIV for 34', function () {
        RomanNumbers.arabicToRoman(34).should.equal('XXXIV');
    });

    it('should return XXV for 25', function () {
        RomanNumbers.arabicToRoman(25).should.equal('XXV');
    });

    it('should return XXXVIII for 38', function () {
        RomanNumbers.arabicToRoman(38).should.equal('XXXVIII');
    });

    it('should return IX for 9', function () {
        RomanNumbers.arabicToRoman(9).should.equal('IX');
    });

    it('should return XXXIX for 39', function () {
        RomanNumbers.arabicToRoman(39).should.equal('XXXIX');
    });

    it('should return XLI for 41', function () {
        RomanNumbers.arabicToRoman(40).should.equal('XL');
    });

    it('should return XLVIII for 48', function () {
        RomanNumbers.arabicToRoman(48).should.equal('XLVIII');
    });

    it('should return XLIX for 49', function () {
        RomanNumbers.arabicToRoman(49).should.equal('XLIX');
    });

    it('should return LXXXIX for 89', function () {
        RomanNumbers.arabicToRoman(89).should.equal('LXXXIX');
    });

    it('should return CLXXXIX for 189', function () {
        RomanNumbers.arabicToRoman(189).should.equal('CLXXXIX');
    });

    it('should return XCIX for 99', function () {
        RomanNumbers.arabicToRoman(99).should.equal('XCIX');
    });

    it('should return CXCIX for 199', function () {
        RomanNumbers.arabicToRoman(199).should.equal('CXCIX');
    })
});