var assert = require('chai').assert;
var readFile = require('../lib/read.file.js');
var printResult = require('./print.result.js');
var day4 = require('../lib/day4.js');

describe('day4', function () {


    it('findStringBetweenSquareBrackets works', function () {
        assert.equal(day4.findStringBetweenSquareBrackets('aaaaa-bbb-z-y-x-123[abxyz]'),
            'abxyz');
    });

    it('findLowercaseCharacters works', function () {
        assert.deepEqual(day4.findLowercaseCharacters('a-bb-ze-123'), ['a', 'b', 'b', 'z', 'e']);
    });

    it('mapCharactersToCount works', function () {
        assert.deepEqual(day4.mapCharactersToCount(['a', 'b', 'b', 'z', 'e']),
            { 'a': 1, 'b': 2, 'z': 1, 'e': 1 });
    });

    it('sortMapKeysByValueAndAlphabetically works', function () {
        assert.equal(day4.sortMapKeysByValueAndAlphabetically({ 'a': 2, 'b': 3, 'z': 1, 'e': 1 }),
            'baez');
    });

    it('findNumber works', function () {
        assert.equal(day4.findNumber('aaaaa-bbb-z-y-x-123[zZxZX]'), 123);
    });

    it('findRealRoomSectorIdsSum works', function () {
        assert.equal(day4.findRealRoomSectorIdsSum('aaaaa-bbb-z-y-x-123[abxyz]\r\na-b-c-d-e-f-g-h-987[abcde]\r\nnot-a-real-room-404[oarel]\r\ntotally-real-room-200[decoy]'),
            1514);
    });

    it('findRealRoomSectorIdsSum works correctly for the puzzle input', function () {
        var input = readFile('./test/day4.input');
        printResult(day4.findRealRoomSectorIdsSum(input));
    });

    it('rotateLetter works', function () {
        assert.equal(day4.rotateCharacter('a', 29), 'd');
        assert.equal(day4.rotateCharacter('z', 989), 'a');
    });

    it('replaceDashesWithSpaces works', function () {
        assert.equal(day4.replaceDashesWithSpaces('a-bb-ze-123'), 'a bb ze 123');
    });

    it('replaceDashesWithSpaces works', function () {
        var input = readFile('./test/day4.input');
        printResult(day4.findNorthPoleRoomSectorId(input));
    });

});

