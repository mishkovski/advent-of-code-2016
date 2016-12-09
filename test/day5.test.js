var assert = require('chai').assert;
var readFile = require('../lib/read.file.js');
var printResult = require('./print.result.js');
var day5 = require('../lib/day5.js');

describe.skip('day5', function () {
    this.timeout(50000);

    it('findPassword works', function () {
        assert.equal(day5.findPassword('abc'), '18f47a30');
    });


    it('findPassword works correctly for the puzzle input', function () {
        printResult(day5.findPassword('ojvtpuvg'));
    });

    it('findBetterPassword works', function () {
        assert.equal(day5.findBetterPassword('abc'), '05ace8e3');
    });

    it('findPassword works correctly for the puzzle input', function () {
        printResult(day5.findBetterPassword('ojvtpuvg'));
    });
});