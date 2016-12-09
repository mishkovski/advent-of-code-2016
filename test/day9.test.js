var assert = require('chai').assert;
var readFile = require('../lib/read.file.js');
var printResult = require('./print.result.js');
var day9 = require('../lib/day9.js');

describe('day9', function () {
    it('someFunction works', function () {
        assert.equal(day9.someFunction('ADVENT'), 'ADVENT');
    });

    

    it('someFunction works correctly for the puzzle input', function () {
        var input = readFile('./test/day9.input');
        printResult(day9.someFunction(input));
    })
});