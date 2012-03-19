/**
 * Module dependencies.
 */  
var express = require('express'); 
var stylus = require('stylus');
var nib = require('nib');
var io = require('socket.io');
var socketio = null; 
var app = express.createServer();
var blog = require("./app/blog-db.js").BlogDB, blog = new blog();

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

// Only listen on $ node app.js
var hasParent = module.parent;
if (!hasParent) {
  app.listen(80);
  console.log("Express server listening on port %d", app.address().port); 
}

/**
 *  Routes
 */

//route our index
app.get('/', function(req, res){
	res.render('index', {
    title: 'Shaun Springer // Portfolio'
  });
});

//route our about section
app.get('/blog/', function(req, res){
  blog.getAll(function(posts){
  	res.render('partials/blog', {
  		title: 'Shaun Springer // Portfolio',
  		layout: !hasParent,
  		posts: posts
  	});
  });
});


 /**
  * Handles the compliation of our css through nib
  */ 
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .set('compress', true)
    .use(nib());
}