var getArray = require('./string.to.array.js');
var day1 = {};

day1.findShortestPathDistance = function (input) {
  var inputArray = getArray(input, ', ');
  var result = 0;
  var direction = 'N';
  var position = { x: 0, y: 0 };

  inputArray.forEach(element => {
    var turn = element[0];

    direction = day1.getDirection(direction, turn);

    for (i = 1; i <= parseInt(element.slice(1)); i++) {
      position = day1.getPosition(position, direction);
    }

  });

  return day1.getDistance(position);
}

day1.findFirstPositionVisitedTwiceDistance = function (input) {
  var inputArray = getArray(input, ', ');
  var result = 0;
  var direction = 'N';
  var position = { x: 0, y: 0 };
  var positions = [];

  for (i = 0; i < inputArray.length; i++) {
    var element = inputArray[i];
    var turn = element[0];
    direction = day1.getDirection(direction, turn);
    for (j = 1; j <= parseInt(element.slice(1)); j++) {
      var newPosition = day1.getPosition(position, direction);
      position.x = newPosition.x;
      position.y = newPosition.y;
      if (day1.isPositionVisited(positions, position)) {
        return day1.getDistance(position);
      } else {
        positions.push(newPosition);
      }
    }
  }
}

day1.getDirection = function (direction, turn) {
  var directions = ['N', 'E', 'S', 'W'];

  var currentDirectionIndex = directions.indexOf(direction);

  var nextDirectionIndex = currentDirectionIndex;

  if (turn === 'R') {
    nextDirectionIndex += 1;
    if (nextDirectionIndex > 3) {
      nextDirectionIndex -= 4;
    }
  }
  else {
    nextDirectionIndex -= 1;
    if (nextDirectionIndex < 0) {
      nextDirectionIndex += 4;
    }
  }

  return directions[nextDirectionIndex];
}

day1.getPosition = function (position, direction) {
  var newX = position.x;
  var newY = position.y;

  if (direction === 'E') {
    newX += 1;
  }
  if (direction === 'N') {
    newY += 1;
  }
  if (direction === 'W') {
    newX -= 1;
  }
  if (direction === 'S') {
    newY -= 1;
  }
  return { x: newX, y: newY };
}

day1.getDistance = function (position) {
  return Math.abs(position.x) + Math.abs(position.y);
}

day1.isPositionVisited = function (positions, position) {
  if (positions.some(visitedPosition => {
    return visitedPosition.x === position.x
      && visitedPosition.y === position.y;
  })) {
    return true;
  };
  return false;
}

module.exports = day1;

