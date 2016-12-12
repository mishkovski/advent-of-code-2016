var assert = require('chai').assert;
var readFile = require('../lib/read.file.js');
var printResult = require('./print.result.js');
var day8 = require('../lib/day8.js');

describe('day8', function () {
    it('getLitPixelsCount works correctly for the puzzle input', function () {
        var input = readFile('./test/day8.input');
        printResult(day8.getLitPixelsCount(input));
    });

    it('printDisplay', function () {
        var display = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
        day8.printDisplay(display, 'rect 3x2\r\nrotate column x=1 by 1\r\nrotate row y=0 by 4\r\nrotate column x=1 by 1');
    });

    it('getRectangle returns {x: 3, y:2} for rect 3x2', function () {
        assert.deepEqual(day8.getRectangle('rect 3x2'), { x: 3, y: 2 });
    });

    it('updateDisplay works for rect 3x2', function () {
        var display = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
        var expectedDisplay = [[1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
        assert.deepEqual(day8.updateDisplay(display, 'rect 3x2'), expectedDisplay);
    });

    it('updateDisplay works for rotate column x=1 by 1', function () {
        var display = [[1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
        var expectedDisplay = [[1, 0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0]];
        assert.deepEqual(day8.updateDisplay(display, 'rotate column x=1 by 1'), expectedDisplay);
    });

    it('updateDisplay works for rotate column x=1 by 2', function () {
        var expectedDisplay = [[1, 1, 1, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0]];
        var display = [[1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
        assert.deepEqual(day8.updateDisplay(display, 'rotate column x=1 by 2'), expectedDisplay);
    });

    it('updateDisplay works for rotate row y=0 by 4', function () {
        var expectedDisplay = [[0, 0, 0, 0, 1, 0, 1], [1, 1, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0]];
        var display = [[1, 0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0]];
        assert.deepEqual(day8.updateDisplay(display, 'rotate row y=0 by 4'), expectedDisplay);
    });

    it('getColumnRotation returns {column: 1, count: 1} for rotate column x=1 by 1', function () {
        assert.deepEqual(day8.getColumnRotation('rotate column x=1 by 1'), { column: 1, count: 1 });
    });

    it('getRowRotation returns {row: 0, count: 4} for rotate row y=0 by 4', function () {
        assert.deepEqual(day8.getRowRotation('rotate row y=0 by 4'), { row: 0, count: 4 });
    });

    it('getLitPixelsCount returns 6 for rect 3x2', function () {
        assert.deepEqual(day8.getLitPixelsCount('rect 3x2'), 6);
    });

    it('getLitPixelsCount returns 6 for rect 3x2', function () {
        assert.deepEqual(day8.getLitPixelsCount('rect 3x2'), 6);
    });
});