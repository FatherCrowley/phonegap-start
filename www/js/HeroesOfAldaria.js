var xViewPos;
var yViewPos;
var init = false;
var fps =  60 ;
var screenWidth;
var screenHeight;
var panelWidth;
var panelHeight;
var needToScroll;
var scrollSpeed;
var xScroll;
var yScroll;
var startX
var startY
window.addEventListener('load', function() 
	 {
        document.body.addEventListener('touchstart', function(event) 
				{
					//e.preventDefault();
					startX = event.touches[0].pageX;
					startY = event.touches[0].pageY;					                
                }, false);
     }, false);
	 
window.addEventListener('load', function() 
	 {
        document.body.addEventListener('touchmove', function(event) 
				{
					event.preventDefault();
					xViewPos += event.touches[0].pageX - startX;
					yViewPos += event.touches[0].pageY - startY;
					window.scrollTo(xViewPos, yViewPos);                    
                }, false);
     }, false);
	 
function Initialize ()
	{
		xViewPos = 0;
		yViewPos = 0;
		xScroll  = 0;
		yScroll  = 0;
		var body = document.body;
		var html = document.documentElement;
		screenHeight = Math.max( body.scrollHeight, body.offsetHeight,html.clientHeight, html.scrollHeight, html.offsetHeight );
		screenWidth  = Math.max( body.scrollWidth, body.offsetWidth,html.clientWidth, html.scrollWidth, html.offsetWidth );
		panelWidth   = screenWidth / 3;
		panelHeight  = screenHeight /3;
		needToScroll = true;
		scrollSpeed = 10;
		init = true;
	}
function ScrollControl() 
	{
		if(!needToScroll)
		{
			if(xViewPos%panelWidth > panelWidth/2)
				{
					needToScroll = true;
					xScroll = 1;
					yScroll = 0;
				}
		}
		if(needToScroll)
		{
			window.scrollTo(xViewPos+scrollSpeed*xScroll, yViewPos+scrollSpeed*yScroll);
			xViewPos += scrollSpeed*xScroll;
			yViewPos += scrollSpeed*yScroll;	
			if(xViewPos%panelWidth > panelWidth/2)
				{
					xView = (xViewPos/panelWidth)*panelWidth;
					needToScroll = false;
				}
		}
		
	}

var MainLoop = function() 
	{	
		if(!init)
			Initialize();
		ScrollControl();
	};
	setInterval( MainLoop, 1000 /fps );
	
	
	 

