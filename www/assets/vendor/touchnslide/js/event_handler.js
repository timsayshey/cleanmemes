$(function()
{
	/* the parameter "g1" is the id of the slider in the HTML, in this case
	   <div id="g1" class="slider" data-elem="slider">
	*/
	var slider = TouchNSwipe.getSlider("g1"),
		thumbScroller = TouchNSwipe.getThumbScroller("g1"),
		captionObj = TouchNSwipe.getCaption("g1"),
		eventCtr = 1;
	
	/*
	   When adding an event handler this is the syntax
	   <instance>.on(<event type>, <handler>, <handler parameters array>)
	*/
	
	/*
		for slider, events you can call are 
		ImageSlider.INDEX_CHANGE
		ImageSlider.ZOOM
		ImageSlider.AUTOPLAY
		ImageSlider.DRAG
	*/
	
	slider.on(ImageSlider.INDEX_CHANGE, updateEventLog, ["Image Slider: index change"]);
	slider.on(ImageSlider.ZOOM, updateEventLog, ["Image Slider: zoom"]);
	slider.on(ImageSlider.AUTOPLAY, updateEventLog, ["Image Slider: autoplay"]);
	slider.on(ImageSlider.DRAG, updateEventLog, ["Image Slider: drag"]);
	
	/*
		for thumb scroller, events you can call are 
		PhysicsScroller.INDEX_CHANGE
		PhysicsScroller.TOGGLE
	*/
	
	thumbScroller.on(PhysicsScroller.TOGGLE, updateEventLog, ["Thumb Scroller: toggle thumbs"]);
	
	/*
		for caption, events you can call is Caption.TOGGLE
	*/
	
	captionObj.on(Caption.TOGGLE, updateEventLog, ["Caption: toggle caption"]);
	
	function updateEventLog(val)
	{
		$("#eventLog").prepend(eventCtr + " " + val + "<br>");	
		$('#eventLog').css({scrollTop: $('#eventLog').prop('scrollHeight')});
		console.log($('#eventLog').prop('scrollHeight'));
		eventCtr++;
	}
	
});