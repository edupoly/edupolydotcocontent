var fs = require('fs');

fs.open("Edupoly.txt","w+",function(err,fd){
    var buf = new Buffer(1023);

    fs.write(fd,"Edupoly for NextJS",(err)=>{
        console.log(err)
    })
    fs.readFile("Edupoly.txt",function(err,data){
        if(err){console.log("err::",err)}
        else{
            console.log(data.toString())
        }
    })
})

console.log('hello')