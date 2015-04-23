var xViewPos;
var yViewPos;
var init = false;
var fps =  30 ;
var screenWidth;
var screenHeight;
var panelWidth;
var panelHeight;
var needToScroll;
var scrollSpeed;
var xScroll;
var yScroll;
var startX;
var startY;
var dist;
var limitY;


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
					console.log(needToScroll);
					event.preventDefault();
					if(!needToScroll)
					{					
					//xViewPos -= event.touches[0].pageX - startX;
					if(event.touches[0].pageX - startX < 0)
					{
						needToScroll = true;
						dist = 0;
						xScroll = 1;
						yScroll = 0;
					}
					
					if(event.touches[0].pageX - startX > 0)
					{
						needToScroll = true;
						dist = 0;
						xScroll = -1;
						yScroll = 0;
					}
					
					if(!limitY)
						{
						yViewPos -= event.touches[0].pageY - startY;
						}
					//console.log("event x: "+ event.touches[0].pageX + " startX :" + startX + " Difference: " + (event.touches[0].pageX - startX));
					//console.log("event y: "+ event.touches[0].pageY + " startY :" + startY + " Difference: " + (event.touches[0].pageY - startY));					
					}
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
		panelWidth   = screenWidth /  3;
		panelHeight  = screenHeight / 3;
		needToScroll = false;
		scrollSpeed = 55;
		init = true;
		limitY = true;
		dist = 0;
	}
function ScrollControl() 
	{
		/*
		if(!needToScroll)
		{
			if(xViewPos%panelWidth > (scrollSpeed))
				{
					needToScroll = true;
					xScroll = 1;
					yScroll = 0;
				}
			if(xViewPos%panelWidth > panelWidth-scrollSpeed)
				{
					needToScroll = true;
					xScroll = -1;
					yScroll = 0;
				}
		}
		
		
		if(needToScroll)
		{			
				//console.log(xViewPos%panelWidth);
				if(xScroll == 1)
				{										
					if((xViewPos >= panelWidth)&&(xViewPos <= 2*panelWidth))
					{
						xViewPos = panelWidth;
						limitY = true //tochange
						needToScroll = false;
					}					
					if(xViewPos > panelWidth*2)
					{
						xViewPos = panelWidth*2;
						limitY = true;
						needToScroll = false;
					}					
					window.scrollTo(xViewPos, yViewPos);
									
				}
				
				if(xScroll = -1)
				{										
					if((xViewPos <= panelWidth)&&(xViewPos > 0))
					{
						xViewPos = panelWidth;
						limitY = true //tochange
						needToScroll = false;
					}					
					if(xViewPos < 0)
					{
						xViewPos = 0;
						limitY = true;
						needToScroll = false;
					}					
					window.scrollTo(xViewPos, yViewPos);
									
				}
				
				if(needToScroll)
				{				
					xViewPos += scrollSpeed*xScroll;    
					yViewPos += scrollSpeed*yScroll;
					window.scrollTo(xViewPos+scrollSpeed*xScroll, yViewPos+scrollSpeed*yScroll);				
				}
		}
		*/
		if(needToScroll)
		{
			if(xScroll == 1)					
				dist += scrollSpeed*xScroll;
				
			if(xScroll == -1)					
				dist += (0 - scrollSpeed)*xScroll;
			
			xViewPos += scrollSpeed*xScroll;    
			yViewPos += scrollSpeed*yScroll;
			window.scrollTo(xViewPos+scrollSpeed*xScroll, yViewPos+scrollSpeed*yScroll);
			
			console.log(dist);
			if(dist>= panelWidth)
			{
				if(xScroll == 1)
				{										
					if((xViewPos >= panelWidth)&&(xViewPos <= 2*panelWidth))
					{
						xViewPos = panelWidth;
						limitY = true //tochange
						needToScroll = false;
					}					
					if(xViewPos > panelWidth*2)
					{
						xViewPos = panelWidth*2;
						limitY = true;
						needToScroll = false;
					}					
					window.scrollTo(xViewPos, yViewPos);
									
				}
				
				if(xScroll = -1)
				{										
					if((xViewPos <= panelWidth)&&(xViewPos > 0))
					{
						xViewPos = panelWidth;
						limitY = true //tochange
						needToScroll = false;
					}					
					if(xViewPos < 0)
					{
						xViewPos = 0;
						limitY = true;
						needToScroll = false;
					}					
					window.scrollTo(xViewPos, yViewPos);
									
				}
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
	
	
	 

