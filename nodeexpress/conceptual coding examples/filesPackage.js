var fs = require("fs");
var fsPromise = require("fs/promises")
//synchronous way of reading file
    // var filedata = fs.readFileSync("students.txt");
    // console.log(filedata.toString())
    // console.log("Last line")

//asynchronous way of reading file
// fs.readFile("students.txt",function(a,b){
//     console.log("a::",a)
//     console.log("b::",b.toString())
// })
// try{
//     fs.readFile("students3.txt","sdfsd",function(err,data){
//         console.log(err)
//         console.log(data.toString())
//     })
// }
// catch(exp){
//     console.log("Please check the syntax")
// }

// console.log("last line")

// asynchronous way of reading file
// fs.promises.readFile("students.txt").then(function(a){
//     console.log("a::",a.toString())
//     // console.log("b::",b.toString())
// });

// asynchronous way of reading file
fsPromise.readFile("students.txt").then(function(a){
    console.log("a::",a.toString())
    // console.log("b::",b.toString())
});
