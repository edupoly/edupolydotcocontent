// var buf1 = new Buffer.alloc(10)
// buf1.fill("praveen")
// var buf2 = new Buffer.alloc(10);
// buf2.fill("praveen")
// console.log(buf1.equals(buf2))

var buf3 = new Buffer.alloc(10);
var buf4 = new Buffer.alloc(10);
buf3.fill("praveen gubbala edupoly");
console.log(buf3.toString())
buf3.copy(buf4);
console.log(buf4.toString())