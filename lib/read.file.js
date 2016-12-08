function readFile(filePath){
  var fs = require('fs')
  return fs.readFileSync(filePath).toString();
}

module.exports = readFile;
