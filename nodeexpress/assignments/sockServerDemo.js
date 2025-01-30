var net = require('net');
var count = 0;
var server = net.createServer(function(socket) {
	socket.write('Echo server');
    console.log(socket)
    count++;
    socket.write("hemshs"+count)
    console.log(socket.listeners());
	socket.pipe(socket);
});

server.listen(55443, '127.0.0.1');