process.stdout.write("Hello Edupoly");
console.log("Hello Edupoly")
process.stdin.on("readable",function(){
    var input = process.stdin.read();
    if(input!==null){
        process.stdout.write(input.toString())
    }
})