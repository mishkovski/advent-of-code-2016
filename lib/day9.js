var day9 = {};

day9.getLength = function (input) {
    var data = day9.getDecompressed(input);
    return data.split(' ').join('').length;
}

day9.calculateLength = function (input, multiplier) {
    console.log(input + ' ' + multiplier);
    var length = 0;
    var position = 0;

    while (position < input.length) {
        if (input[position] === '(') {
            var marker = day9.findMarker(input.substring(position));
            var substring = day9.findSubstring(marker, input);
            var insideLength = day9.calculateLength(substring, marker.multiplier);
            length += insideLength;
            position = input.indexOf(marker.content) + 1 + marker.content.length + substring.length;
        } else {
            length++;
            position++;
        }
    }

    return multiplier * length;
}

day9.findSubstring = function (marker, input) {
    var start = input.indexOf(marker.content) + marker.content.length + 1;
    var end = start + marker.phraseLength;
    return input.substring(start, end);
}

day9.findMarker = function (input) {
    var marker = { found: false };
    var regExp = /\(([^\)]+)\)/;
    var matches = regExp.exec(input);
    if (matches !== null) {
        marker.found = true;
        marker.content = matches[1];
        var markerValues = marker.content.split('x');
        marker.phraseLength = parseInt(markerValues[0]);
        marker.multiplier = parseInt(markerValues[1]);
    }
    return marker;
}

day9.getDecompressed = function (input) {
    input = input.split(' ').join('');
    var result = '';
    var i = 0;
    while (i < input.length) {
        if (input[i] === '(') {
            i++;
            var length = '';
            var count = '';

            while (input[i] !== 'x') {
                length += input[i];
                i++;
            }

            i++

            while (input[i] !== ')') {
                count += input[i];
                i++;
            }

            length = parseInt(length);

            count = parseInt(count);

            var start = i + 1;
            for (c = 0; c < count; c++) {
                if (length > 1) {
                    result += input.substring(start, start + length);
                } else {
                    result += input[start];
                }
            }
            i = start + length;
        } else {
            result += input[i];
            i++;
        }
    }
    return result;
}

module.exports = day9;