process.stdin.setEncoding("utf-8");

process.stdin.on("readable",function(){
    var input1 = process.stdin.read();
    var input2 = process.stdin.read();
    if(input1!=null){
        process.stdout.write("i1")
        process.stdout.write(input1)
    }
    if(input2!=null){
        process.stdout.write("i2")
        process.stdout.write(input2)
    }
})
