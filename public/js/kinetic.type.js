
//the magic begins
$(window).ready(function(){
	
	//scene 1
	direct('#scene-1', 'action', 1250);
	direct('#scene-1 > .act-1', 'action', 1500);
	direct('#scene-1 > .act-1', 'cut', 2500);
	direct('#scene-1 > .act-2', 'action', 2000);
	direct('#scene-1 > .act-2', 'cut', 2500);
	direct('#scene-1 > .act-3', 'action', 2700);
	direct('#scene-1 > .act-4', 'action', 3000);
	direct('#scene-1', 'cut', 4000);
	
	//scene 2	
	direct('#scene-2', 'action', 4250);
	direct('#scene-2 > .act-1', 'action', 4250);
	direct('#scene-2 > .act-2', 'action', 4500);
	direct('#scene-2 > .act-3', 'action', 4750);
	direct('#scene-2 > .act-4', 'action', 5000);
	direct('#scene-2 > .act-4', 'cut', 6250);
	direct('#scene-2 > .act-5', 'action', 6250);
	direct('#scene-2 > .act-5', 'cut', 7250);
	direct('#scene-2 > .act-6', 'action', 7250);
	direct('#scene-2', 'cut', 8250);
});

function direct(what, type, delay)
{
	setTimeout(function()	{
			$(what).addClass(type);
		}, 
		delay
	);
}