$(window).ready(function()
{
	var $header = $('header');
	var $ribbon = $('.ribbon');
	var $headerText = $('header > h1');
	var $subheaderText = $('header > h2');
	var $navigation = $('navigation');
	var $sectionWrapper = $('sectionwrapper');
	var headerHeight = $header.outerHeight();
	var socket = new io.connect("http://localhost/", {port: 80});
	
	//setup our corners on the header 
	$header.css({"border-bottom-left-radius": $header.width() * 0.75, "border-bottom-right-radius": $header.width() * 0.75});
	    
	$('header > navigation').each(function(index, item){
		$(item + " > .line").css({width: 0});
		$(item).click(function(){
			//get the id of the clicked navigation item
			var id = $(this).attr('id');
			
			//emit the navigate event
			console.log('sending emit {navigate: ' + id +'}');	    
	    socket.emit('navigate', id);
	    	    
		});
	});
	
	//listen for socket events
	socket.on('navigate', function(html){
		$sectionWrapper.html(html);
	});
});
