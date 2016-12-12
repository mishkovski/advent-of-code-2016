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
        assert.deepEqual(day9.findMarker('X(8x2)(3x3)ABCY'),
            { found: true, content: '8x2', phraseLength: 8, miltiplier: 2 });
    });

    it('findMarker works for X(80x20)(3x3)ABCY', function () {
        assert.deepEqual(day9.findMarker('X(80x20)(3x3)ABCY'),
            { found: true, content: '80x20', phraseLength: 80, miltiplier: 20 });
    });

    it('findSubstring works for X(8x2)(3x3)ABCY', function () {
        assert.deepEqual(day9.findSubstring({ found: true, content: '8x2', phraseLength: 8, miltiplier: 2 },
            'X(8x2)(3x3)ABCY'),
            '(3x3)ABC');
    });

    it('findSubstring works for X(9x2)(3x3)ABCY', function () {
        assert.deepEqual(day9.findSubstring({ found: true, content: '9x2', phraseLength: 9, miltiplier: 2 },
            'X(9x2)O(3x3)ABCY'),
            'O(3x3)ABC');
    });

    it('findSubstring works for XZ(10x2)E(3x3)ABCGYO', function () {
        assert.deepEqual(day9.findSubstring({ found: true, content: '9x2', phraseLength: 9, miltiplier: 2 },
            'X(9x2)O(3x3)ABCY'),
            'O(3x3)ABC');
    });

    it('findSubstring works for (25x3)(3x3)ABC(2x3)XY(5x2)PQRSTX(18x9)(3x2)TWO(5x7)SEVEN', function () {
        assert.deepEqual(day9.findSubstring({ found: true, content: '25x3', phraseLength: 25, miltiplier: 3 },
            '(25x3)(3x3)ABC(2x3)XY(5x2)PQRSTX(18x9)(3x2)TWO(5x7)SEVEN'),
            '(3x3)ABC(2x3)XY(5x2)PQRST');
    });

    it('calculateLength works for X(8x2)(3x3)ABCY', function () {
        assert.equal(day9.calculateLength('X(8x2)(3x3)ABCY', 1), 20);
    });

    it('calculateLength works for XZ(10x2)E(3x3)ABCGYO', function () {
        assert.equal(day9.calculateLength('XZ(10x2)E(3x3)ABCGYO', 1), 26);
    });

    it('calculateLength works for (3x3)XYZ', function () {
        assert.equal(day9.calculateLength('(3x3)XYZ', 1), 9);
    });

    it('calculateLength works for (27x12)(20x12)(13x14)(7x10)(1x12)A', function () {
        assert.equal(day9.calculateLength('(27x12)(20x12)(13x14)(7x10)(1x12)A', 1), 241920);
    });

    it.only('calculateLength works for (25x3)(3x3)ABC(2x3)XY(5x2)PQRSTX(18x9)(3x2)TWO(5x7)SEVEN', function () {
        assert.equal(day9.calculateLength('(25x3)(3x3)ABC(2x3)XY(5x2)PQRSTX(18x9)(3x2)TWO(5x7)SEVEN', 1), 445);
    });
});