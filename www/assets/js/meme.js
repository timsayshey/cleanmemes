function getMemes()
{
	$.parse.post('functions/getAllMemes', { "ORDER" : "-MEMEID", "DBNAME" : "memes" },
		function(json) // Success
		{
			var 
				results, 
				html, 
				memeLimit = 200, 
				currCnt = 0;
	
			qMemes = json.result;
			html = "";		
			
			$.each(qMemes, function (i, meme)
			{
				html += tmpl("meme_tmpl", meme);
				
				if(currCnt >= memeLimit)
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
		},
		function(e)  // Fail
		{
			doFail(e);
		}
	);   
}

function _addMemeEvents() 
{	
	// Bind functions to links
	//$(document).off("click", ".memeremove");
	//$(document).on("click", ".memeremove", 	function(e) { _removeMeme(this); });	
}