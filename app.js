var express = require('express'),
app = express(),
server = require('http').createServer(app),
io = require('socket.io').listen(server),
mongoose = require('mongoose');

server.listen(3000);

app.get('/scoreboard.html', function(req, res){
	res.sendfile(__dirname + '/scoreboard.html');
});
app.get('/admin.html', function(req, res){
	res.sendfile(__dirname + '/admin.html');
});