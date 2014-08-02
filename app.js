var express = require('express'),
app = express(),
server = require('http').createServer(app),
io = require('socket.io').listen(server),
mongoose = require('mongoose');

server.listen(3000);


app.get('/', function(req, res){
	res.sendfile(__dirname + '/scoreboard.html');
});
app.get('/admin.html', function(req, res){
	res.sendfile(__dirname + '/admin.html');
});
app.use(express.static(__dirname + '/public'));

io.sockets.on('connection', function(socket){
	socket.on('send message', function(data){
		io.sockets.emit('new message', data);
	});
});