var day4 = {};

day4.findNorthPoleRoomSectorId = function (input) {
    var lines = require('./get.lines.js')(input);
    var result;

    lines.forEach(line => {
        var encryptedRoomName = line.substring(0, line.indexOf('['));
        encryptedRoomName = day4.replaceDashesWithSpaces(encryptedRoomName);
        var decryptedCharacters = [];

        var sectorId = day4.findNumber(line);

        for (var i = 0; i < encryptedRoomName.length; i++) {
            decryptedCharacters.push(day4.rotateCharacter(encryptedRoomName[i], sectorId));
        }

        var realRoomName = decryptedCharacters.join('');

        if (realRoomName.includes('pole')) {
            result = sectorId;
        }
    });

    return result;
}

day4.rotateCharacter = function (character, number) {
    var code = character.charCodeAt(0);
    if (code < 97 || code > 122) {
        return character;
    }

    var newCode = code + number % 26;
    if (newCode > 122) {
        newCode -= 26;
    }

    return String.fromCharCode(newCode);
}

day4.replaceDashesWithSpaces = function (input) {
    return input.split('-').join(' ');
}

day4.findRealRoomSectorIdsSum = function (input) {
    var lines = require('./get.lines.js')(input);
    var sum = 0;

    lines.forEach(line => {
        var checksum = day4.findStringBetweenSquareBrackets(line);
        var lowercaseCharacters = day4.findLowercaseCharacters(line.substring(0, line.indexOf('[')));
        var charactersCount = day4.mapCharactersToCount(lowercaseCharacters);
        var calculatedChecksum = day4.sortMapKeysByValueAndAlphabetically(charactersCount).substring(0, 5);
        if (calculatedChecksum === checksum) {
            sum += parseInt(day4.findNumber(line));
        }
    });

    return sum;
}

day4.findNumber = function (line) {
    var number = line.match(/\d+/);
    return number;
}

day4.findLowercaseCharacters = function (line) {
    var r = /([a-z])/g;

    var characters = [];

    while ((result = r.exec(line)) != null) {
        characters.push(result[0]);
    }

    return characters;
}

day4.mapCharactersToCount = function (characters) {
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

day4.findStringBetweenSquareBrackets = function (line) {
    var regExp = /\[([^\]]+)\]/;
    var matches = regExp.exec(line);
    return matches[1];
}

day4.sortMapKeysByValueAndAlphabetically = function (map) {
    var keys = [];
    for (var key in map) {
        if (map.hasOwnProperty(key)) {
            keys.push(key);
        }
    }

    keys.sort((a, b) => {
        if (map[a] !== map[b]) {
            return map[b] - map[a];
        } else {
            return a.charCodeAt(0) - b.charCodeAt(0);
        }
    });

    return keys.reduce((a, b) => { return a + b; });
}

module.exports = day4;