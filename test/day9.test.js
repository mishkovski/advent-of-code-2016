var assert = require('chai').assert;
var readFile = require('../lib/read.file.js');
var printResult = require('./print.result.js');
var day9 = require('../lib/day9.js');

describe('day9', function () {
    it('getLine works for ADVENT', function () {
        assert.equal(day9.getDecompressed('ADVENT'), 'ADVENT');
    });

    it('getLine works for A(1x5)BC', function () {
        assert.equal(day9.getDecompressed('A(1x5)BC'), 'ABBBBBC');
    });

    it('getLine works for (3x3)XYZ', function () {
        assert.equal(day9.getDecompressed('(3x3)XYZ'), 'XYZXYZXYZ');
    });

    it('getLine works for A(2x2)BCD(2x2)EFG', function () {
        assert.equal(day9.getDecompressed('A(2x2)BCD(2x2)EFG'), 'ABCBCDEFEFG');
    });

    it('getLine works for (6x1)(1x3)A', function () {
        assert.equal(day9.getDecompressed('(6x1)(1x3)A'), '(1x3)A');
    });

    it('getLine works for X(8x2) (3x3) ABCY', function () {
        assert.equal(day9.getDecompressed('X(8x2) (3x3) ABCY'), 'X(3x3)ABC(3x3)ABCY');
    });

    it('getLength works correctly for the puzzle input', function () {
        var input = readFile('./test/day9.input');
        printResult(day9.getLength(input));
    })

    it('findMarker works for X(8x2)(3x3)ABCY', function () {
        day9.getExtraLength('X(8x2)(3x3)ABCY');
        //assert.equal(day9.findMarker('X(8x2)(3x3)ABCY'), 20);
    });

    it.only('getExtraLength works for X(8x2)(3x3)ABCY', function () {
        assert.equal(day9.getExtraLength('X(8x2)(3x3)ABCY'), 20);
    });



    it('getExtraLength works correctly for the puzzle input', function () {
        var input = readFile('./test/day9.input');
        printResult(day9.getExtraLength(input));
    })
});