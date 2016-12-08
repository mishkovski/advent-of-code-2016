var assert = require('chai').assert;
var readFile = require('../lib/read.file.js');
var printResult = require('./print.result.js');
var day2 = require('../lib/day2.js');
var getLines = day2.getLines;
var getCode = day2.getCode;
var getActualCode = day2.getActualCode;

describe('day2 - getCode', function () {
  it('for ULL returns 1', function () {
    var input = 'ULL';
    assert.equal(getCode(input), '1'); 
  });
  it('for ULL\r\nRRDDD\r\nLURDL\r\nUUUUD returns 1985', function () {
    var input = 'ULL\r\nRRDDD\r\nLURDL\r\nUUUUD';
    assert.equal(getCode(input), '1985'); 
  });

  it('works correctly for the puzzle input', function () {
    var input = readFile('./test/day2.input');
    printResult(getCode(input));
  });
});

describe('day2 - getActualCode', function () {
  it('for ULL\r\nRRDDD\r\nLURDL\r\nUUUUD returns 5DB3', function () {    
    var input = 'ULL\r\nRRDDD\r\nLURDL\r\nUUUUD';
    assert.equal(getActualCode(input), '5DB3'); 
  });

  it('works correctly for the puzzle input', function () {
    var input = readFile('./test/day2.input');
    printResult(getActualCode(input));
  });
});





