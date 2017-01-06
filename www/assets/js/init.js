GLOBAL = window;
GLOBAL.noACL = true;

$(function() {
	
	window.location="http://www.outerplex.com/memefeed/";

	//dom cache
	var meme_list, new_meme, new_memeCode, parse_log;

	function _initParse()
	{
		$.parse.init();
		
		return true;
	}

	function init()
	{
		GLOBAL.userid = "";
		GLOBAL.errorcnt = 0;
		GLOBAL.sortBy = "-MEMEID";	
		
		// Set useragent		
		if(typeof navigator.userAgent !== 'undefined') 
		{
			GLOBAL.useragent = navigator.userAgent.toLowerCase();
		} else {
			GLOBAL.useragent = false;					
		}
		
		// Set android
		var ua = GLOBAL.useragent;
		
		if(ua.indexOf("Android") >= 0)
		{
			GLOBAL.droidVer = parseFloat(ua.slice(ua.indexOf("Android")+8)); 
			
			if (GLOBAL.droidVer < 2.3)
			{
				// do whatever
			}
			
		} else {
			GLOBAL.droidVer = 0;
		}	

		$.ajax({
			type: "GET",
			url: "http://outerplex.com/apps/memeslurp/memes.json",
			async: false,
			success : function(data) {
				getMemes(data);
			}
		});
	}
	
	var currentPage = 'home';
	
	//doc ready init
	$(init);
});	

function doFail(e) 
{
	try {
		error = jQuery.parseJSON(e.responseText);
	} catch(e) {
		
	}
	
	try {
		if(typeof error.error !== 'undefined')
		{
			error = error.error;
		}
	} catch(e) {
		
	}
	
	if(!error) {		
		console.log("Alert Error: Generic");
		navigator.notification.alert("Oops, there was a problem. Please try again.", function() {}, "Error");
	} else {
		console.log("Alert Error: ", error);
		navigator.notification.alert(error, function() {}, "Error");	
	}
	
}