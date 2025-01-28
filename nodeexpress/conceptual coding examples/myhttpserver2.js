var http = require('http');
var fs = require('fs')
var url = require('url')
var path = require('path')
var c =0;
http.createServer(function(req,res){
    console.log("Hello request received",req.url)
    var fileobj = url.parse(req.url);
    console.log(fileobj)
    if(fileobj.ext){
        var respfile = fs.readFileSync(fileobj.pathname);
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200,"ok")
        res.write(respfile.toString())
    }
    else{
        res.write("sorry")
    }
    res.end();
}).listen(8090)