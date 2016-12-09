var day6 = {};

day6.findModifiedMessage = function (input) {

    var lines = require('./get.lines.js')(input);

    var columns = [];

    lines.forEach(function (line) {
        var characters = line.trim().split('');
        var i = 0;
        characters.forEach(character => {
            if(columns[i] === undefined){
                columns[i] = [];         
            }
            columns[i].push(character);
            i++;
        });
    });

    var message = '';

    columns.forEach(column => {
        var mostCommonCharacter = findLeastCommonKey(mapCharactersToCount(column));
        message += mostCommonCharacter;
    });

    return message;
}


day6.findMessage = function (input) {

    var lines = require('./get.lines.js')(input);

    var columns = [];

    lines.forEach(function (line) {
        var characters = line.trim().split('');
        var i = 0;
        characters.forEach(character => {
            if(columns[i] === undefined){
                columns[i] = [];         
            }
            columns[i].push(character);
            i++;
        });
    });

    var message = '';

    columns.forEach(column => {
        var mostCommonCharacter = findMostCommonKey(mapCharactersToCount(column));
        message += mostCommonCharacter;
    });

    return message;
}

function mapCharactersToCount(characters) {
    var map = {};

    characters.forEach(character => {
        if (map[character] != undefined) {
            map[character]++;
        } else {
            map[character] = 1;
        }
    });

    return map;
}

function findMostCommonKey(map) {
    var keys = [];
    for (var key in map) {
        if (map.hasOwnProperty(key)) {
            keys.push(key);
        }
    }

    keys.sort((a, b) => {
        return map[b] - map[a];
    });

    return keys.reduce((a, b) => { return a + b; })[0];
}

function findLeastCommonKey(map) {
    var keys = [];
    for (var key in map) {
        if (map.hasOwnProperty(key)) {
            keys.push(key);
        }
    }

    keys.sort((a, b) => {
        return map[a] - map[b];
    });

    return keys.reduce((a, b) => { return a + b; })[0];
}

module.exports = day6;