var assert = require('chai').assert;
var readFile = require('../lib/read.file.js');
var printResult = require('./print.result.js');
var day10 = require('../lib/day10.js');

describe('day10', function () {
    it.skip('getBot works', function () {
        assert.equal(day10.getBot('value 5 goes to bot 2\r\nbot 2 gives low to bot 1 and high to bot 0\r\nvalue 3 goes to bot 1\r\nbot 1 gives low to output 1 and high to bot 0\r\nbot 0 gives low to output 2 and high to output 0\r\nvalue 2 goes to bot 2', 5, 2), 2);
    });


    it('parseLoadLine works', function () {
        assert.deepEqual(day10.parseLoadLine('value 5 goes to bot 2'), { value: 5, bot: 2 });
    });

    it('parseDecisionLine works', function () {
        assert.deepEqual(day10.parseDecisionLine('bot 2 gives low to bot 1 and high to bot 0'),
            { bot: 2, low: { destination: 'bot', number: 1 }, high: { destination: 'bot', number: 0 } });
    });

    it('getBot works', function () {
        var input = readFile('./test/day10.input');
        printResult(day10.getBot(input, 61, 17));
    });
});