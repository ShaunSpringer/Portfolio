
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
	direct('#scene-2 > .act-3', 'cut', 7250);
	direct('#scene-2 > .act-7', 'action', 7250);
	direct('#scene-2', 'cut', 8250);
	
	//scene 3	
	direct('#scene-3', 'action', 8500);
	direct('#scene-3 > .act-1', 'action-1', 8500);
	direct('#scene-3 > .act-2', 'action-1', 8500);
	direct('#scene-3 > .act-4', 'action-1', 8500);
	direct('#scene-3 > .act-3', 'action', 9000);
	direct('#scene-3 > .act-1', 'action-2', 9000);
	direct('#scene-3 > .act-2', 'action-2', 9000);
	direct('#scene-3 > .act-4', 'action-2', 9000);
	direct('#scene-3 > .act-5', 'action', 9250);
	direct('#scene-3 > .act-6', 'action', 9500);
	direct('#scene-3 > .act-1', 'cut', 10000);
	direct('#scene-3 > .act-2', 'cut', 10000);
	direct('#scene-3 > .act-3', 'cut', 10000);
	direct('#scene-3 > .act-4', 'cut', 10000);
	direct('#scene-3 > .act-5', 'cut', 10000);
	direct('#scene-3 > .act-1', 'fly-out', 10250);
	direct('#scene-3 > .act-2', 'fly-out', 10250);
	direct('#scene-3 > .act-3', 'fly-out', 10250);
	direct('#scene-3 > .act-4', 'fly-out', 10250);
	direct('#scene-3 > .act-5', 'fly-out', 10250);
  direct('#scene-3 > .act-6', 'cut', 10250);
	direct('#scene-3 > .act-6', 'fly-out', 10750);
	direct('#scene-3', 'cut', 11250);
	
	//scene 4
	direct('#scene-4', 'action', 12000);	
	direct('#scene-4 > .act-1', 'action', 12000);
	direct('#scene-4 > .act-2', 'action', 12000);
	direct('#scene-4 > .act-3', 'action', 12000);
	direct('#scene-4 > .act-3', 'cut', 12500);
	direct('#scene-4 > .act-4', 'action', 13000);
	direct('#scene-4 > .act-4', 'cut', 13500);
	direct('#scene-4 > .act-5', 'action', 14000);
	direct('#scene-4 > .act-5', 'cut', 14500);
	direct('#scene-4 > .act-6', 'action', 15000);
	direct('#scene-4 > .act-6', 'cut', 15500);
	direct('#scene-4 > .act-7', 'action', 16000);
	direct('#scene-4 > .act-7', 'cut', 16500);
	direct('#scene-4 > .act-8', 'action', 17000);
	direct('#scene-4 > .act-8', 'cut', 17500);
	direct('#scene-4 > .act-10', 'action', 18000);
	direct('#scene-4 > .act-10', 'cut', 18500);
	direct('#scene-4 > .act-1', 'cut', 19250);
	direct('#scene-4 > .act-2', 'cut', 19750);
	direct('#scene-4', 'cut', 20500);
	/*direct('#scene-4 > .act-9', 'action', 18000);
	direct('#scene-4 > .act-9', 'cut', 18500);
	direct('#scene-4 > .act-10', 'action', 19000);
	direct('#scene-4 > .act-10', 'cut', 19500);
	direct('#scene-4 > .act-1', 'cut', 20250);
	direct('#scene-4 > .act-2', 'cut', 20750);
	direct('#scene-4', 'cut', 21500);*/
	
	//scene 5
	direct('#scene-5', 'action', 20500);	
	direct('#scene-5 > .act-1', 'action-1', 20500);
	direct('#scene-5 > .act-2', 'action-1', 20500);
	direct('#scene-5 > .act-3', 'action-1', 20500);
	direct('#scene-5 > .act-4', 'action-1', 20500);
	direct('#scene-5 > .act-1', 'action-2', 22000);
	direct('#scene-5 > .act-2', 'action-2', 22000);
	direct('#scene-5 > .act-3', 'action-2', 22000);
	direct('#scene-5 > .act-4', 'action-2', 22000);
	direct('#scene-5 > .act-5', 'action', 23000);
	direct('#scene-5 > .act-6', 'action', 23500);
	direct('#scene-5 > .act-7', 'action', 24000);
	direct('#scene-5 > .act-8', 'action', 24500);
	direct('#scene-5 > .act-9', 'action', 25000);
	direct('#scene-5 > .act-10', 'action', 25500);
	direct('#scene-5 > .act-1', 'action', 26500);
	direct('#scene-5 > .act-2', 'action', 26500);
	direct('#scene-5 > .act-3', 'action', 26500);
	direct('#scene-5 > .act-4', 'action', 26500);
	direct('#scene-5 > .act-5', 'action', 26500);
	direct('#scene-5 > .act-6', 'action', 26500);
	direct('#scene-5 > .act-7', 'action', 26500);
	direct('#scene-5 > .act-8', 'action', 26500);
	direct('#scene-5 > .act-9', 'action', 26500);
	direct('#scene-5 > .act-10', 'action', 26500);
});

function direct(what, type, delay)
{
	setTimeout(function()	{
			$(what).addClass(type);
		}, 
		delay
	);
}