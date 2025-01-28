var fs = require('fs');

fs.writeFileSync("employees.txt","anushka krithi")

fs.writeFile("payments.txt","10000 15000 300000 5600000",function(a,b){
    console.log("File Created")
    console.log(a)
    console.log(b)
})

fs.promises.writeFile("enquiries.txt","shruthi hasan vijay")
.then((res)=>{console.log(res)})
.catch(err=>console.log(err))

// var dt = fs.readFileSync("students.txt");
// console.log(dt.toString())

// fs.readFile("students.txt",function(err,data){
//     if(err){
//         console.log(err.message)
//     }
//     else{
//         console.log(data.toString())
//     }
// })

// fs.promises.readFile("students.txt")
// .then(function(data){console.log(data)})
// .catch(err=>console.log(err))