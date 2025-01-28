var axios = require('axios');
/*
function abc(){
    var p = new Promise((resolve,reject)=>{
        axios.get("http://localhost:4000/products")
        .then((res)=>{
            var simpleList = res.data.map((p)=>{
                return {title:p.title,price:p.price}
            })
            resolve(simpleList)
        })
    })
    return p;
}
*/

async function abc(){
    var res = await axios.get("http://localhost:4000/products")
    var fdata = res.data.map((p)=>{
                    return {title:p.title,price:p.price}
                })
    return fdata
}

abc().then(function(filteredData){
     console.log("filteredData::",filteredData)
}).catch()
console.log("Last line");