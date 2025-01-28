var fs = require('fs')

fs.readFile("students.txt",(err,data)=>{
    
    setTimeout(()=>{console.log("Set time out")},0)

    setImmediate(()=>{console.log("Set Immediate")})

    console.log(data.toString())
})


