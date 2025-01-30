var EventEmitter = require('events').EventEmitter;

var channel = new EventEmitter();

channel.on('newvideoEvent',function(a,b){
    console.log("a::",a)
    console.log("b::",b)
})

channel.on('newOffer',function(a,b){
    console.log("a::",a)
    console.log("b::",b)
})

setTimeout(()=>{
    channel.emit('newOffer',99,123)
},5000)

channel.emit('newvideoEvent',12,23)