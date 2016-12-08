var day3 = {};

day3.countTrianglesVertically = function (input) {
    var sum = 0;
    var notTriangleSum = 0;
    var lines = require('./get.lines.js')(input);

    for (i = 0; i < lines.length; i += 3) {
        var row1 = getRowArray(lines[i]);
        var row2 = getRowArray(lines[i + 1]);
        var row3 = getRowArray(lines[i + 2]);
        var column1 = [row1[0], row2[0], row3[0]];
        var column2 = [row1[1], row2[1], row3[1]];
        var column3 = [row1[2], row2[2], row3[2]];

        if (day3.isTriangle(column1)) {
            sum++;
        }
        if (day3.isTriangle(column2)) {
            sum++;
        }
        if (day3.isTriangle(column3)) {
            sum++;
        }
    }

    return sum;
}

function getRowArray(line) {
    return line.trim().split(/\s+/);
}

day3.countTriangles = function (input) {
    var sum = 0;
    var notTriangleSum = 0;
    var lines = require('./get.lines.js')(input);

    lines.forEach(line => {
        var sides = line.trim().split(/\s+/);

        if (day3.isTriangle(sides)) {
            sum++;
        }
    });


    return sum;
}

day3.isTriangle = function (sides) {
    if (sides.some((side, index) => {
        var otherSides = sides.filter((otherSide, otherIndex) => {
            return otherIndex !== index;
        });

        var otherSum = otherSides.reduce((previous, current) => parseInt(previous) + parseInt(current));

        if (parseInt(side) >= otherSum) {

            return true;
        }
    })) {
        return false;
    } else {
        return true;
    }
}

module.exports = day3;