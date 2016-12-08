var assert = require('chai').assert;
var readFile = require('../lib/read.file.js');
var printResult = require('./print.result.js');
var day1 = require('../lib/day1.js');
var findShortestPathDistance = day1.findShortestPathDistance;
var getDirection = day1.getDirection;
var getPosition = day1.getPosition;
var getDistance = day1.getDistance;
var findFirstPositionVisitedTwiceDistance = day1.findFirstPositionVisitedTwiceDistance;
var isPositionVisited = day1.isPositionVisited;


describe('day1 - findShortestPathDistance', function () {
  it('for R2, L3 returns 5', function () {
    assert.equal(findShortestPathDistance('R2, L3'), 5);
  });

  it('for R2, R2, R2 returns 2', function () {
    assert.equal(findShortestPathDistance('R2, R2, R2'), 2);
  });

  it('for R5, L5, R5, R3 returns 12', function () {
    assert.equal(findShortestPathDistance('R5, L5, R5, R3'), 12);
  });

  it('works correctly for the puzzle input', function () {
    var input = readFile('./test/day1.input');
    printResult(findShortestPathDistance(input));
  });
});

describe('day1 - findFirstPositionVisitedTwiceDistance', function () {
  it('for R8, R4, R4, R8 returns 4', function () {
    assert.equal(findFirstPositionVisitedTwiceDistance('R8, R4, R4, R8'), 4);
  });

  it('returns for the puzzle input', function () {
    var input = readFile('./test/day1.input');

    printResult(findFirstPositionVisitedTwiceDistance(input));
  });
});

describe('day1 - getDirection', function () {
  it('returns E for direction N and turn R', function () {
    assert.equal(getDirection('N', 'R'), 'E');
  });

  it('returns W for direction N and turn L', function () {
    assert.equal(getDirection('N', 'L'), 'W');
  });

  it('returns W for direction S and turn R', function () {
    assert.equal(getDirection('S', 'R'), 'W');
  });

  it('returns E for direction S and turn L', function () {
    assert.equal(getDirection('S', 'L'), 'E');
  });

  it('returns S for direction E and turn R', function () {
    assert.equal(getDirection('E', 'R'), 'S');
  });

  it('returns N for direction E and turn L', function () {
    assert.equal(getDirection('E', 'L'), 'N');
  });

  it('returns N for direction W and turn R', function () {
    assert.equal(getDirection('W', 'R'), 'N');
  });

  it('returns S for direction W and turn L', function () {
    assert.equal(getDirection('W', 'L'), 'S');
  });
});

describe('day1 - getPosition', function () {
  it('returns (x=1,y=0) for (x=0,y=0) and direction E', function () {
    assert.deepEqual(getPosition({ x: 0, y: 0 }, 'E'), { x: 1, y: 0 });
  });

  it('returns (x=0,y=1) for (x=0,y=0) and direction N', function () {
    assert.deepEqual(getPosition({ x: 0, y: 0 }, 'N'), { x: 0, y: 1 });
  });

  it('returns (x=-1,y=0) for (x=0,y=0) and direction W', function () {
    assert.deepEqual(getPosition({ x: 0, y: 0 }, 'W'), { x: -1, y: 0 });
  });

  it('returns (x=0,y=-1) for (x=0,y=0) and direction S', function () {
    assert.deepEqual(getPosition({ x: 0, y: 0 }, 'S'), { x: 0, y: -1 });
  });

  it('returns (x=10,y=0) for (x=9,y=0) and direction E', function () {
    assert.deepEqual(getPosition({ x: 9, y: 0 }, 'E'), { x: 10, y: 0 });
  });
});

describe('day1 - getDistance', function () {
  it('returns 5 for (x=2,y=3)', function () {
    assert.equal(getDistance({ x: 2, y: 3 }), 5);
  });

  it('returns 5 for (x=2,y=-3)', function () {
    assert.equal(getDistance({ x: 2, y: -3 }), 5);
  });

  it('returns 5 for (x=-2,y=-3)', function () {
    assert.equal(getDistance({ x: -2, y: -3 }), 5);
  });
});

describe('day1 - isPositionVisited', function () {
  it('returns true for [{x:1, y:1}] and {x:1, y:1}', function () {
    assert(isPositionVisited([{ x: 1, y: 1 }], { x: 1, y: 1 }));
  });

  it('returns false for [{x:1, y:1}, {x:2, y:-5}] and {x:0, y:1}', function () {
    assert.equal(isPositionVisited([{ x: 1, y: 1 }, { x: 2, y: -5 }], { x: 0, y: 1 }), false);
  });
});



