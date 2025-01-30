var http = require('http');
var fs = require('fs');
var url = require('url')
var path = require('path')
var students = require('./students')
http.createServer(function(req,res){
    if(req.url==='/favicon.ico'){
        res.end("agarababu")
    }
    else{
        if(path.extname(req.url)===''){
            var tb="";
            for(var i=0;i<=students.length-1;i++){
                tb=tb+`<tr>
                            <td>${students[i].firstname}</td>
                            <td>${students[i].lastname}</td>
                            <td>${students[i].age}</td>
                        </tr>`;
            }
            var table = `<table border='2'>${tb}</table>`
            res.end(table)
        }
        else{
            fs.readFile(path.basename(req.url),function(err,data){
                if(err){
                    console.log(err.message)
                    res.setHeader("Content-Type","text/html")
                    res.end("<img src='https://i0.wp.com/evalparticipativa.net/wp-content/uploads/2020/06/Sin-t%C3%ADtulo-3.jpg?fit=898%2C594&ssl=1'>")
                }
                else{
                    res.end(data.toString())
                }
            })
        }

    }
}).listen(4500)