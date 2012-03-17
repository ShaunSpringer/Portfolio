
/**
 * Module dependencies.
 */

var express = require('express'); 
var app = module.exports = express.createServer();
var stylus = require('stylus');
var nib = require('nib');
var io = require('socket.io');
var socketio = null;

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
	app.use(stylus.middleware({
      src: __dirname + '/public',
      compile: compile
   }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

//get our base url
app.get('/', function(req, res){
  res.render('index', {
    title: 'Shaun Springer // Portfolio'
  });
});

//handle about inquiries
app.get('/about', function(req, res){
  res.render('about', {
    title: 'Shaun Springer // About'
  });
});

// Events

function initSocket(){
	socketio.on('connection', function (socket) {
		
		console.log('Received socket.io connection');
		
		socket.on('navigate', function(id){
			console.log("Navigate Event: " + id);
		});
	});
}
 
// Only listen on $ node app.js
if (!module.parent) {
  app.listen(80);
  console.log("Express server listening on port %d", app.address().port); 
  
  //listen for socket io
  socketio = io.listen(app); 
  console.log("Socket.IO server listening on port %d", app.address().port); 
  
  //listen to our socket events
  initSocket();
}

 /**
  * Handles the compliation of our css through nib
  */ 
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .set('compress', true)
    .use(nib());
}