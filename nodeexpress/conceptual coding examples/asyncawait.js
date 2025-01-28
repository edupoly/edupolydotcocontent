var axios = require('axios');
// console.log(axios)
// function getProducts(){
//     var p = new Promise((resolve,reject)=>{
//         axios.get("http://localhost:4000/products")
//         .then((res)=>{
//             resolve(res.data)
//         })
//     })
//     return p
// }

function getProducts(){
    return axios.get("http://localhost:4000/products")
}

getProducts().then((res)=>{
    console.log(res)
})