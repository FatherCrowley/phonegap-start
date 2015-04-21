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
function Initialize ()
	{
		xViewPos = 0;
		yViewPos = 0;
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
		if(needToScroll)
			window.scrollTo(xViewPos+scrollSpeed, yViewPos+scrollSpeed);
		xViewPos += scrollSpeed;
		yViewPos += scrollSpeed;	
	}

var MainLoop = function() 
	{	
		if(!init)
			Initialize();
		ScrollControl();
	};
	setInterval( MainLoop, 1000 /fps );
	
