
// function div(a,b){
//     if(b===0){
//         return Promise.reject('denominator must not zero')
//     }
//     else{
//         return Promise.resolve(a/b)
//     }
// }

function div(a,b){
    var p = new Promise((resolve,reject)=>{
        if(b===0){
            reject("Denominator cannot be zero")
        }
        else{
            resolve(a/b)
        }
    })
    return p;
}
div(+process.argv[2],+process.argv[3])
.then((res)=>{console.log(res)})
.catch((err)=>{console.log(err)})


add(100,200)