var assert = require('chai').assert;
var getArray = require('../lib/string.to.array.js');

describe('getArray', function () {
  it('returns correct array for 3x11x24\\n27x1x11\\n14x6x11', function () {
    var content = "3x11x24\n27x1x11\n14x6x11";
    var resultArray = getArray(content, /\r?\n/);
    assert.equal(resultArray[0], '3x11x24');
    assert.equal(resultArray[1], '27x1x11');
    assert.equal(resultArray[2], '14x6x11');
  });

  it('returns correct array for 3x11x24', function () {
    var content = '3x11x24';
    var resultArray = getArray(content, 'x');
    assert.equal(resultArray[0], '3');
    assert.equal(resultArray[1], '11');
    assert.equal(resultArray[2], '24');
  });
});
