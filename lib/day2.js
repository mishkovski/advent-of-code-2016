"use strict";

var day2 = {};

var getLines = require('./get.lines.js');

day2.getActualCode = function (input) {
    var inputArray = getLines(input);
    var code = '';
    var key = 5;

    inputArray.forEach((line) => {
        key = getKey(line, key);
        code += key;
    });

    return code;
}

day2.getCode = function (input) {
    var inputArray = getLines(input);
    var code = '';
    var number = 5;

    inputArray.forEach((line) => {
        number = getNumber(line, number);
        code += number;
    });

    return code;
}

function getKey(command, key) {
    var keyMap = [[0, 0, 1, 0, 0],
    [0, 2, 3, 4, 0],
    [5, 6, 7, 8, 9],
    [0, 'A', 'B', 'C', 0],
    [0, 0, 'D', 0, 0]
    ];

    var position = getPosition(keyMap, key);
    var i = position.i;
    var j = position.j;

    for (let character of command) {
        if (character === 'U') {
            if (keyMap[i - 1] != undefined && keyMap[i - 1][j] !== 0 && keyMap[i - 1][j] != undefined) {
                i -= 1;
            }
        }
        if (character === 'D') {
            if (keyMap[i + 1] != undefined && keyMap[i + 1][j] !== 0 && keyMap[i + 1][j] != undefined) {
                i += 1;
            }
        }
        if (character === 'L') {
            if (keyMap[i][j - 1] !== 0 && keyMap[i][j - 1] != undefined) {
                j -= 1;
            }
        }
        if (character === 'R') {
            if (keyMap[i][j + 1] !== 0 && keyMap[i][j + 1] != undefined) {
                j += 1;
            }
        }
    };


    return keyMap[i][j];
}


function getPosition(array, number) {
    var x = 0;

    while (x <= 4) {
            var y = 0;
        while (y <= 4) {
            if (array[x][y] === number) {
                return { i: x, j: y };
            }
            y++;
        }
        x++;
    }
}

function getNumber(command, number) {
    var i = Math.floor((number - 1) / 3);
    var j = (number - 1) % 3;

    for (let character of command) {
        if (character === 'U') {
            if (i > 0) {
                i -= 1;
            }
        }
        if (character === 'D') {
            if (i < 2) {
                i += 1;
            }
        }
        if (character === 'L') {
            if (j > 0) {
                j -= 1;
            }
        }
        if (character === 'R') {
            if (j < 2) {
                j += 1;
            }
        }
    };

    return (i * 3) + j + 1;
}

module.exports = day2;