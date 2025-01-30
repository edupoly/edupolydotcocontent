var events = require('events')

var eventEmitter = new events.EventEmitter();

eventEmitter.on('done',function(){console.log("HIIHHIH")})

function facto(n){
    for(var i=n;i>=1;i--){
        f=f*i;
    }
    eventEmitter.emit('done')
}

facto();
// async function facto(n){
//     var f=1;
//     if(isNaN(n) || (n<0)){
//         return Promise.reject('invalid input')
//     }
//     else{
//         for(var i=n;i>=1;i--){
//             f=f*i;
//         }
//         return f
//     }
// }

// facto(-8)
// .then(function(res){
//     console.log(res)
// })
// .catch(function(err){
//     console.error("Error vachindi pushpa")
// })

// console.log("Last line")

// memory optimation
// suitable for asynchronus function management
// error handling will be easy