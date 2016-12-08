var assert = require('chai').assert;
var readFile = require('../lib/read.file.js');
var printResult = require('./print.result.js');
var day3 = require('../lib/day3.js');

describe('day3 - isTriangle', function () {
    it('is defined', function () {
        assert.notEqual(day3.isTriangle, undefined);
    });

    it('returns true for possible triangle', function () {
        assert.equal(day3.isTriangle([5, 10, 10]), true);
    });

    it('returns false for impossible triangle', function () {
        assert.equal(day3.isTriangle([55, 10, 10]), false);
    });

    it('returns false for impossible triangle', function () {
        assert.equal(day3.isTriangle(['34','206','451']), false);
    });
});


describe('day3 - countTriangles', function () {
    it('is defined', function () {
        assert.notEqual(day3.countTriangles, undefined);
    });

    it('returns 1 for 10 5 25\r\n10 5 10', function () {
        assert.equal(day3.countTriangles(' 10 5 25\r\n 10 5 10'), 1);
    });

    it('returns 2 for 10 5 13\r\n10 5 10', function () {
        assert.equal(day3.countTriangles(' 10 5 13\r\n 10 5 10'), 2);
    });

    it('returns 2 for 10 5 13\r\n10 5 18\r\n10 5 10\r\n 10 6 18', function () {
        assert.equal(day3.countTriangles(' 10   5   13\r\n 10  5   10\r\n 10   6 18'), 2);
    });

    it('works correctly for the puzzle input', function () {
        var input = readFile('./test/day3.input');
        printResult(day3.countTriangles(input));
    });
});


describe('day3 - countTrianglesVertically', function () {
    it('works correctly for the puzzle input', function () {
        var input = readFile('./test/day3.input');
        printResult(day3.countTrianglesVertically(input));
    });
});