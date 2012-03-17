
/**
 * Module dependencies.
 */

var express = require('express'); 
var stylus = require('stylus');
var nib = require('nib');
var io = require('socket.io');
var socketio = null;
var nodeQuery = require('nodeQuery');
var dnode = require('dnode')();
var expressServer = express.createServer();

// Configuration

expressServer.configure(function(){
  expressServer.set('views', __dirname + '/views');
  expressServer.set('view engine', 'jade');
  expressServer.use(express.bodyParser());
  expressServer.use(express.methodOverride());
	expressServer.use(stylus.middleware({
      src: __dirname + '/public',
      compile: compile
   }));
  expressServer.use(nodeQuery.middleware);
  expressServer.use(expressServer.router);
  expressServer.use(express.static(__dirname + '/public'));
});

expressServer.configure('development', function(){
  expressServer.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

expressServer.configure('production', function(){
  expressServer.use(express.errorHandler()); 
});

// Routes

//get our base url
expressServer.get('/', function(req, res){
  res.render('index', {
    title: 'Shaun Springer // Portfolio'
  });
});

// More Configuration

//wait for dom ready from the main app
var app = function ($) {
  $.on('ready', function () {
    $('body').append('Hello World')
  })
}

//setup nQuery
nodeQuery.use(app);

//setup dnode
dnode.use(nodeQuery.middleware).listen(expressServer);

// Only listen on $ node app.js
if (!module.parent) {
  expressServer.listen(80);
  console.log("Express server listening on port %d", expressServer.address().port); 
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