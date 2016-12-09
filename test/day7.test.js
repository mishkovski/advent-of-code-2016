var assert = require('chai').assert;
var readFile = require('../lib/read.file.js');
var printResult = require('./print.result.js');
var day7 = require('../lib/day7.js');

describe('day7', function () {
    it('containsAbba works for abba[mnop]qrst', function () {
        assert.equal(day7.containsAbba('abba[mnop]qrst'), true);
    });

    it('containsAbba works for abcd[bddb]xyyx', function () {
        assert.equal(day7.containsAbba('abcd[bddb]xyyx'), false);
    });

    it('containsAbba works for abcd[bddu]xyyx[weew]', function () {
        assert.equal(day7.containsAbba('abcd[bddu]xyyx[weew]'), false);
    });

    it('containsAbba works for abcd[dcdu]xyyx[weew]', function () {
        assert.equal(day7.containsAbba('abcd[dcdu]xyyx[weew]hjhj'), false);
    })

    it('containsAbba works for aaaa[qwer]tyui', function () {
        assert.equal(day7.containsAbba('aaaa[qwer]tyui'), false);
    })

    it('containsAbba works for ioxxoj[asdfgh]zxcvbn', function () {
        assert.equal(day7.containsAbba('ioxxoj[asdfgh]zxcvbn'), true);
    })

    it('countTlsIps works correctly for the puzzle input', function () {
        var input = readFile('./test/day7.input');
        printResult(day7.countTLSIPs(input));
    })

    it('isSSL works for aba[bab]xyz', function () {
        assert.equal(day7.isSSL('aba[bab]xyz'), true);
    })

    it('isSSL works for xyx[xyx]xyx', function () {
        assert.equal(day7.isSSL('xyx[xyx]xyx'), false);
    })

    it('isSSL works for aaa[kek]eke', function () {
        assert.equal(day7.isSSL('aaa[kek]eke'), true);
    })

    it('isSSL works for zazbz[bzb]cdb', function () {
        assert.equal(day7.isSSL('zazbz[bzb]cdb'), true);
    })

    it('countSSLIPs works correctly for the puzzle input', function () {
        var input = readFile('./test/day7.input');
        printResult(day7.countSSLIPs(input));
    });
});