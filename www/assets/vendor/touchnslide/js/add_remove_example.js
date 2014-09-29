$(function ()
{
	var galleryCtr = 0,
		galleryDivs = [],
		imgArr = [1, 2, 3, 4, 5, 6];
	$("#addGalleryButton").hammer().on("tap", addGallery);
	$("#removeAllButton").hammer().on("tap", removeAll);
	
	/*
		This functions creates a div containing the gallery info with random order of images and initial visibility of thumbs and caption.
	*/
	function addGallery()
	{
		var showCaption = (Math.random() < 0.5),
			showThumbs = (Math.random() < 0.5),
			maxCount = Math.round(3 + (Math.random() * 4)),
			galleryDiv = $("<div id='sc" + galleryCtr + "' class='row-fluid divPad' ><div class='span6 offset3' style='border:1px solid #666; padding:5px'><div class='ratioHolder'><div id='g" + galleryCtr + "' class='sliderHolder'><div class='slider' data-elem='slider'><div class='sliderBg lightGrayBg'></div><div class='slides' data-elem='slides' data-options='preloaderUrl:assets/preloader.gif' ></div><div class='thumbsHolder' data-elem='thumbsHolder'><div class='thumbs blackBgAlpha60' data-elem='thumbs' data-options='space:2; setParentVisibility:true; initShow:" + showThumbs + "; preloaderUrl:assets/preloader.gif' data-show='bottom:0px; position:absolute; display:block' data-hide='bottom:-100%; display:block' ></div></div><div class='captionHolder' data-elem='captionHolder'><div class='caption blackBgAlpha60' data-elem='caption' data-options='initShow:" + showCaption + "; setHolderHeight:true;' data-show='top:0%; display:block; autoAlpha:1;' data-hide='top:-60px; display:none; autoAlpha:0; ease:Power4.easeIn'> </div></div><div class='controlHolder'><div class='autoPlayIcon controlPos1' data-elem='autoPlay' data-on='background-position:-25px 0px;' data-off='background-position:0px 0px;'> </div><div class='prevIcon controlPos2' data-elem='prev' data-on='autoAlpha:1; cursor: pointer;' data-off='autoAlpha:0.5; cursor:default'> </div><div class='nextIcon controlPos3' data-elem='next' data-on='autoAlpha:1; cursor: pointer;' data-off='autoAlpha:0.5; cursor:default'> </div><div class='zoomOutIcon controlPos4' data-elem='zoomOut' data-on='autoAlpha:1; cursor: pointer;' data-off='autoAlpha:0.5; cursor:default'> </div><div class='zoomInIcon controlPos5' data-elem='zoomIn' data-on='autoAlpha:1; cursor: pointer;' data-off='autoAlpha:0.5; cursor:default'> </div><div class='thumbsOnIcon controlPos6' data-elem='thumbsToggle' data-on='background-position:-200px 0px;' data-off='background-position:-225px 0px;'></div><div class='captionOnIcon controlPos7' data-elem='captionToggle' data-on='background-position:-150px 0px;' data-off='background-position:-175px 0px;'></div></div><ul id='ul" + galleryCtr + "' data-elem='items'></ul></div></div></div><div class='text-center' style='padding-top:5px'><input id='removeGallery" + galleryCtr + "' name='removeGallery" + galleryCtr + "' type='button' value='Remove Gallery'></div></div></div>");
		
		$("#galleryContainer").append(galleryDiv);
		
		imgArr = Utils.shuffleArray(imgArr);
		
		maxCount = (maxCount > 6) ? 6 : maxCount;
		for(var i = 0; i < maxCount; i++)
		{
			//add images to ul
			$("#ul" + galleryCtr).append("<li><a href='assets/" + imgArr[i] + ".jpg'><img src='assets/thumbs/" + imgArr[i] + ".jpg' alt='Image " + (i + 1) + "'/></a><div data-elem='imgCaption'><div class='superCaption'>This is <span class='nColor'>image " + (i + 1) + "</span></div></div></li>");	
		}
		
		$("#removeGallery" + galleryCtr).hammer().on("tap", {ctr:galleryCtr}, removeGallery);
		
		// add created div
		galleryDivs.push(galleryDiv);
		
		//process the created div and convert it to an image gallery
		TouchNSwipe.init();
		
		galleryCtr++;
	}
	
	function removeGallery(e)
	{
		var ctr = e.data.ctr;
		TouchNSwipe.remove("g" + ctr);
		$("#sc" + ctr).remove();
	}
	
	function removeAll()
	{
		TouchNSwipe.removeAll();
		
		for(var i = 0; i < galleryDivs.length; i++)
		{
			galleryDivs[i].remove();
		}
	}
	
});