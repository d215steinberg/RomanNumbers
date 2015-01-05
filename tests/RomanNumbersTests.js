var RomanNumbers = require('../public/javascripts/RomanNumbers.js');
require('should');

describe('Roman Numbers', function () {
    describe('converting arabic to roman', function () {
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
        });

        it('should return CCCXCIX for 399', function () {
            RomanNumbers.arabicToRoman(399).should.equal('CCCXCIX');
        });

        it('should return MMCMXCIX for 2999', function () {
            RomanNumbers.arabicToRoman(2999).should.equal('MMCMXCIX');
        });

        it('should return MMDXL for 2540', function () {
            RomanNumbers.arabicToRoman(2540).should.equal('MMDXL');
        });

        it('should return MMM for 3000', function () {
            RomanNumbers.arabicToRoman(3000).should.equal('MMM');
        });

        it('should return DI for 501', function () {
            RomanNumbers.arabicToRoman(501).should.equal('DI');
        });

        it('should return DL for 550', function () {
            RomanNumbers.arabicToRoman(550).should.equal('DL');
        });

        it('should return DXXX for 530', function () {
            RomanNumbers.arabicToRoman(530).should.equal('DXXX');
        });

        it('should return DCCVII for 707', function () {
            RomanNumbers.arabicToRoman(707).should.equal('DCCVII');
        });

        it('should return DCCCXC for 890', function () {
            RomanNumbers.arabicToRoman(890).should.equal('DCCCXC');
        });

        it('should return MD for 1500', function () {
            RomanNumbers.arabicToRoman(1500).should.equal('MD');
        });

        it('should return MDCCC for 1800', function () {
            RomanNumbers.arabicToRoman(1800).should.equal('MDCCC');
        });

        it('should return CM for 900', function () {
            RomanNumbers.arabicToRoman(900).should.equal('CM');
        });
    });

    describe('converting roman to arabic', function () {
        it('should return 1 for I', function () {
            RomanNumbers.romanToArabic('I').should.equal(1);
        });

        it('should return 3 for III', function() {
            RomanNumbers.romanToArabic('III').should.equal(3);
        });

        it('should return 5 for V', function() {
           RomanNumbers.romanToArabic('V').should.equal(5);
        });

        it('should return 8 for VIII', function() {
           RomanNumbers.romanToArabic('VIII').should.equal(8);
        });

        it('should return 4 for IV', function() {
            RomanNumbers.romanToArabic('IV').should.equal(4);
        });

        it('should return 10 for X', function() {
           RomanNumbers.romanToArabic('X').should.equal(10);
        });

        it('should return 18 for XVIII', function() {
            RomanNumbers.romanToArabic('XVIII').should.equal(18);
        });
    });
});
