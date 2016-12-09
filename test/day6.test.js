var assert = require('chai').assert;
var readFile = require('../lib/read.file.js');
var printResult = require('./print.result.js');
var day6 = require('../lib/day6.js');

describe('day6', function () {
    it('findMessage works', function () {
        assert.equal(day6.findMessage('eedadn\r\ndrvtee\r\neandsr\r\nraavrd\r\natevrs\r\ntsrnev\r\nsdttsa\r\nrasrtv\r\nnssdts\r\nntnada\r\nsvetve\r\ntesnvt\r\nvntsnd\r\nvrdear\r\ndvrsen\r\nenarar'), 'easter');
    });
    it('findMessage works correctly for the puzzle input', function () {
        var input = readFile('./test/day6.input');
        printResult(day6.findMessage(input));
    });

    it('findModifiedMessage works', function () {
        assert.equal(day6.findModifiedMessage('eedadn\r\ndrvtee\r\neandsr\r\nraavrd\r\natevrs\r\ntsrnev\r\nsdttsa\r\nrasrtv\r\nnssdts\r\nntnada\r\nsvetve\r\ntesnvt\r\nvntsnd\r\nvrdear\r\ndvrsen\r\nenarar'), 'advent');
    });
    it('findModifiedMessage works correctly for the puzzle input', function () {
        var input = readFile('./test/day6.input');
        printResult(day6.findModifiedMessage(input));
    });

});