var day9 = {};

day9.someFunction = function(input){
    return 'ADVENT';
}

day9.getMarker  = function (input) {
    var rectangleRegexp = /\((.*)\)/;
    var match = rectangleRegexp.exec(input);
    var rectangleArray = match[1].split('x');
    console.log(rectangleArray);
}

module.exports = day9;