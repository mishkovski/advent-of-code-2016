var getLines = function (input) {
    var stringToArray = require('./string.to.array.js');
    var lines = stringToArray(input, '\r\n');
    return lines;
}

module.exports = getLines;