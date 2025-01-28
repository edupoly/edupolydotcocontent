var fs = require('fs');
let position = 0;
var s = fs.statSync("employees.txt");
console.log(s)
// fs.open("employees.txt","r",function(err,fd){
//     for(var i=0;i<=20;i++){
//         var buf1 = new Buffer.alloc(50);
//         fs.read(fd,buf1,0,50,i*50,function(err,data,y){
//             console.log(y.toString())
//         })
//     }
// })