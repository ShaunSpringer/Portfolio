$(window).ready(function()
{
	$('header > navigation').each(function(index, item){
		$(item).hover(
			function(){ 
				var id = $(this).attr('id');
				$("section#" + id + " > content > column").removeClass('blurry-text');
			},
			function(){			
				var id = $(this).attr('id');
				$("section#" + id + " > content > column").addClass('blurry-text');
			}
		)		
	});
});
