var day9 = {};

day9.getLength = function (input) {
    var data = day9.getDecompressed(input);
    return data.split(' ').join('').length;
}

day9.getExtraLength = function(input){
    var regExp = /\(([^\)]+)\)/;
    var matches = regExp.exec(input);
    var marker = matches[1];
    console.log(marker);
    var markerValues = marker.split('x');
    var length = markerValues[0];
    var count = markerValues[1];
console.log(length);
    var start = input.indexOf(marker) + marker.length + 1;
    console.log(start);
    console.log(input.substring(start,start + length - 2));
    console.log(input.indexOf(marker)-1);
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