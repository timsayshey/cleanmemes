function getMemes(json)
{		
	var 
		results, 
		html, 
		memeLimit = 200, 
		currCnt = 0;
	console.log("test",json);
	qMemes = json.result;
	html = "";		
	
	$.each(qMemes, function (i, meme)
	{
		html += tmpl("meme_tmpl", meme);
		
		if(currCnt >= 200)
		{
			return false;
		}
		currCnt++;
	});
	
	$("#meme_list").html(html);	
	
	$("img").error(function () { 
	    //$(this).closest("li").css({'padding':"100px",'background-color': 'red'});				 
		//$('html, body').animate({
	    //    scrollTop: $(this).closest("li").offset().top
	    //}, 10);
		$(this).closest("li").remove();
	});
	
	initApp();
	$(document).on("click", ".toajax", function(event)
	{ 
		event.preventDefault(); 		
		var url = $(this).attr('href');
		$.get(url, function(data) {
			alert("Fixed.");
		});	
	});
		
}

function _addMemeEvents() 
{	
	// Bind functions to links
	//$(document).off("click", ".memeremove");
	//$(document).on("click", ".memeremove", 	function(e) { _removeMeme(this); });	
}