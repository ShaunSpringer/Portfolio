(function() { 
	
	//our routing function
 	var route = function(app){ 		
 		//route our index
		app.get('/', function(req, res){
			res.render('index', {
		    title: 'Shaun Springer // Portfolio'
		  });
		});
		
		//route our about section
		app.get('/about/', function(req, res){
		  res.render('about');
		});
	};	
});		
