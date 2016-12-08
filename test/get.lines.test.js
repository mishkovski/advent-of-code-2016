var assert = require('chai').assert;
var getLines = require('../lib/get.lines.js');

describe('getLines', function () {
  it('returns array of lines', function () {
    var input = 'line1\r\nline2\r\nline3';
    assert.deepEqual(getLines(input), ['line1','line2','line3']); 
  });
});