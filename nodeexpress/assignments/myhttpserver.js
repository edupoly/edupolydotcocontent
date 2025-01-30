var http = require("http");
var fs = require('fs');
var path = require('path');
var url = require('url');

http.createServer(function(req,res){
    console.log("Request received ",path.basename(url.parse(req.url).pathname))
    console.log("Query Params::",url.parse(req.url).query)
    res.setHeader('Content-Type','text/html')
    fs.readFile(path.basename(url.parse(req.url).pathname),(err,data)=>{
        if(err){res.write("Some thing went wrong")}
        else{
            res.write(data.toString());
        }
        res.end();
    })
}).listen(4500,function(){console.log("server listening on 4500")})