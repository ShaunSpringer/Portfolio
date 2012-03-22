
$(document).ready(function(){
	
	//shrink our header
	$('header').animate({top: '-19em'}, 750);
	setTimeout(function(){ $('navigation#play').html("replay demo"); }, 750);
	
});