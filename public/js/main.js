$(window).ready(function()
{
	var $header = $('header');
	var $ribbon = $('.ribbon');
	var $navigation = $('navigation');
	var $sectionWrapper = $('sectionwrapper');
	var headerHeight = $header.outerHeight();
	var socket = new io.connect("http://localhost/", {port: 80});
	
	//hide the header and ribbon to start
	$header.hide();
	$ribbon.hide();
	
	//slide header down and fade ribbon in
	$header.slideDown(250);	
	$ribbon.delay(250).fadeIn(1500);		
	$sectionWrapper.css({top: (headerHeight + 10) +  "px", position: 'absolute'});
	
	$('header > navigation').each(function(index, item){
		$(item + " > .line").css({width: 0});
		$(item).click(function(){
			//get the id of the clicked navigation item
			var id = $(this).attr('id');
			
			//emit the navigate event
			console.log('sending emit {navigate: ' + id +'}');	    
	    socket.emit('navigate', id);
	    
	    //roll up the header
	    $header.animate({top: -($navigation.offset().top) + $navigation.outerHeight() - 10});	    
		});
	});
});
