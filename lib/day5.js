var day5 = {};
var md5 = require('js-md5');

day5.findPassword = function (doorId) {
    var password = '';
    var index = 0;

    while (password.length < 8) {
        var hash = md5.hex(doorId + index);

        if (hash.substring(0, 5) === '00000') {
            password += hash[5];
        }
        index++;
    }

    return password;
}

day5.findBetterPassword = function (doorId) {
    var passwordArray = [];
    var index = 0;
    var filledPositionsCount = 0;

    while (filledPositionsCount < 8) {
        var hash = md5.hex(doorId + index);

        var code = hash[5].charCodeAt(0);

        if (hash.substring(0, 5) === '00000' && code >= 48 && code < 56) {
            if (passwordArray[hash[5]] === undefined) {
                passwordArray[hash[5]] = hash[6];
                filledPositionsCount++;
            }
        }
        index++;
    }
    return passwordArray.join('');
}

module.exports = day5;