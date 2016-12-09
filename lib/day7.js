var day7 = {};

day7.countTLSIPs = function (input) {
    var lines = require('./get.lines.js')(input);
    var sum = 0;

    lines.forEach(line => {
        if (day7.containsAbba(line)) {
            sum++;
        }
    });

    return sum;
}

day7.countSSLIPs = function (input) {
    var lines = require('./get.lines.js')(input);
    var sum = 0;

    lines.forEach(line => {
        if (day7.isSSL(line)) {
            sum++;
        }
    });

    return sum;
}

day7.isSSL = function (input) {
    var abas = [];
    var abasInBrackets = [];
    var characters = input.split('');
    var inBrackets = false;

    var i = 0;
    characters.forEach(character => {
        if (characters[i] === '[') {
            inBrackets = true;
        }

        if (characters[i] === ']') {
            inBrackets = false;
        }

        if (i <= characters.length - 3) {
            if (characters[i] == characters[i + 2] && characters[i] != characters[i + 1]) {
                if (inBrackets) {
                    abasInBrackets.push(characters[i] + characters[i + 1] + characters[i + 2]);
                } else {
                    abas.push(characters[i] + characters[i + 1] + characters[i + 2]);
                }
            }
        }
        i++;
    });

    var result = false;

    abas.forEach(aba => {
            if(abasInBrackets.some(abaInBrackets => {
                return abaInBrackets[0] == aba[1] && abaInBrackets[1] == aba[0];
            })){
                result = true;
            }
    });

    return result;
}

day7.containsAbba = function (input) {
    var result = false;
    var characters = input.split('');
    var inBrackets = false;
    var abbaFoundInBrackets = false;

    var i = 0;
    characters.forEach(character => {

        if (characters[i] === '[') {
            inBrackets = true;
        }

        if (characters[i] === ']') {
            inBrackets = false;
        }

        if (i <= characters.length - 4) {
            if (characters[i] == characters[i + 3]
                && characters[i + 1] == characters[i + 2]
                && characters[i] != characters[i + 1]) {
                result = true;
                if (inBrackets) {
                    abbaFoundInBrackets = true;
                }
            }
        }
        i++;
    });


    return result && !abbaFoundInBrackets;
}

module.exports = day7;