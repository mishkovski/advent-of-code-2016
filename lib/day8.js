var day8 = {};

day8.getLitPixelsCount = function (input) {
    var display = getDisplay();

    var lines = require('./get.lines.js')(input);

    var columns = [];

    lines.forEach(function (line) {
        day8.updateDisplay(display, line.trim());
    });

    return getCount(display);
}

day8.printDisplay = function (display, input) {
    var lines = require('./get.lines.js')(input);

    var columns = [];

    lines.forEach(function (line) {
        day8.updateDisplay(display, line.trim());
        console.log(display);
        console.log('\n');
    }); 
}

day8.updateDisplay = function (display, input) {
    if (input.includes('rect')) {
        var rectangle = day8.getRectangle(input);

        for (i = 0; i < rectangle.y; i++) {
            for (j = 0; j < rectangle.x; j++) {
                display[i][j] = 1;
            }
        }
    }
    if (input.includes('column')) {
        var columnRotation = day8.getColumnRotation(input);

        var j = columnRotation.column;

        for (c = 0; c < columnRotation.count; c++) {
            var previous = display[0][j];
            for (i = 1; i < display.length; i++) {
                var temp = display[i][j];
                display[i][j] = previous;
                previous = temp;
            }
            display[0][j] = previous;
        }
    }
    if (input.includes('row')) {
        var rowRotation = day8.getRowRotation(input);

        var i = rowRotation.row;

        for (c = 0; c < rowRotation.count; c++) {
            var previous = display[i][0];
            for (j = 1; j < display[i].length; j++) {
                var temp = display[i][j];
                display[i][j] = previous;
                previous = temp;
            }
            display[i][0] = previous;
        }
    }
    return display;
}

function getCount(display) {
    var count = 0;

    for (i = 0; i < 6; i++) {
        for (j = 0; j < 50; j++) {

            if (display[i][j] === 1) {
                count++;
            }
        }
    }

    return count;
}


function getDisplay() {
    var display = [];

    for (i = 0; i < 6; i++) {
        for (j = 0; j < 50; j++) {
            if (display[i] === undefined) {
                display[i] = [];
            }
            display[i].push(0);
        }
    }
    return display;
}

day8.getRectangle = function (input) {
    var rectangleRegexp = /rect (.*)/;
    var match = rectangleRegexp.exec(input);
    var rectangleArray = match[1].split('x');
    return { x: parseInt(rectangleArray[0]), y: parseInt(rectangleArray[1]) };
}

day8.getColumnRotation = function (input) {
    var columnRegexp = /x=(.*) by/;
    var columnMatch = columnRegexp.exec(input);
    var column = columnMatch[1];

    var countRegexp = /by (.*)/;
    var countMatch = countRegexp.exec(input);
    var count = countMatch[1];

    return { column: parseInt(column), count: parseInt(count) };
}

day8.getRowRotation = function (input) {
    var rowRegexp = /y=(.*) by/;
    var rowMatch = rowRegexp.exec(input);
    var row = rowMatch[1];

    var countRegexp = /by (.*)/;
    var countMatch = countRegexp.exec(input);
    var count = countMatch[1];

    return { row: parseInt(row), count: parseInt(count) };
}

module.exports = day8;
