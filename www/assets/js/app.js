function initApp()
{
	$(TouchNSwipe.init); 
	
	$(document).on("click", ".popup", function(e) 
	{		
		window.open($(this).attr("href"), '_blank', 'location=yes');
		e.preventDefault();
		e.stopImmediatePropagation();
	});
}