var express = require('express'),
app = express(),
server = require('http').createServer(app),
io = require('socket.io').listen(server),
mongoose = require('mongoose');

server.listen(3000);

mongoose.connect('mongodb://localhost/scoreboard', function(err){
	if(err){
		console.log(err);
	}else{
		console.log('Connected to mongodb');
	}
});

var scoreboardShema = mongoose.Schema({ //geen tables zoals sql maar in collections van documents
	tijd: String,
	message: String,
	created: {type: Date, default: Date.now}
});

var scoreboard = mongoose.model('Message', scoreboardShema);//maakt een message colelction

/*var scoreShema = mongoose.Schema({ //geen tables zoals sql maar in collections van documents
	score: String,
	created: {type: Date, default: Date.now}
});

var score = mongoose.model('Scores', scoreShema);//maakt een message colelction*/

app.get('/', function(req, res){
	res.sendfile(__dirname + '/scoreboard.html');
});
app.get('/admin.html', function(req, res){
	res.sendfile(__dirname + '/admin.html');
});
app.use(express.static(__dirname + '/public'));

io.sockets.on('connection', function(socket){  // hier kome alle sockets.on
											
	socket.on('send tijd', function(data){
	socket.tijd = data;
	});	

	socket.on('send message', function(data){
	io.sockets.emit('new message', {message: data, tijd: socket.tijd});

		var newMsg = new scoreboard({message: data, tijd: socket.tijd});
		newMsg.save(function(err){
		if(err) throw err;
				});
	});

	var query = scoreboard.find({});
	query.sort('-created').limit(8).exec(function(err, docs){
		if(err) throw err;
		socket.emit('load old msgs', docs);
	});

	socket.on('click', function(data){
		io.sockets.emit('changeColor',data); 
    });

    socket.on('click2', function(data){
        io.sockets.emit('changeColor2',data); 
    });

    socket.on('click3', function(data){
		io.sockets.emit('changeColor3',data); 
    });

    socket.on('click4', function(data){
        io.sockets.emit('changeColor4',data); 
    });

    socket.on('click5', function(data){
		io.sockets.emit('changeColor5',data); 
    });

    socket.on('click6', function(data){
        io.sockets.emit('changeColor6',data); 
    });

    socket.on('click7', function(data){
		io.sockets.emit('changeColor7',data); 
    });

    socket.on('click8', function(data){
        io.sockets.emit('changeColor8',data); 
    });
    socket.on('click9', function(data){
		io.sockets.emit('changeColor9',data); 
    });

    socket.on('click10', function(data){
        io.sockets.emit('changeColor10',data); 
    });

    socket.on('click11', function(data){
		io.sockets.emit('changeColor11',data); 
    });

    socket.on('click12', function(data){
        io.sockets.emit('changeColor12',data); 
    });
});


