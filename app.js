
/**
 * Module dependencies.
 */

var express = require('express'); 
var app = module.exports = express.createServer();
var stylus = require('stylus');
var nib = require('nib');

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

app.get('/', function(req, res){
  res.render('index', {
    title: 'Shaun Springer // Portfolio'
  });
});

// Only listen on $ node app.js

if (!module.parent) {
  app.listen(9451);
  console.log("Express server listening on port %d", app.address().port);
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