var path = require('path')
var fileloc = "/Users/praveen/nem29/edupoly.png";
console.log(path.basename(fileloc))
console.log(path.extname(fileloc))
console.log(path.dirname(fileloc))
// console.log(path.resolve(fileloc))
console.log(path.parse(fileloc))