var fs = require('fs');
var fsPromise = require('fs/promises')

fsPromise.readFile("employees.txt")
.then(function(data){
    console.log(data.toString())
})
.catch();



// var data = fs.readFileSync("employees.txt")
// consoel.log(data.toString)
// fs.readFile("employees.txt",function(err,res){
//     console.log(res)
// })

