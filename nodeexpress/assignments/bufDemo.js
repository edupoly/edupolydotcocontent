'use strict'
var buf1 = new Buffer.alloc(10);
buf1.fill("praveen gubbala")
console.log(buf1.toString())
setTimeout((fn,ln)=>{console.log("HI"+fn+ln)},3000,'praveen',"gubbala")