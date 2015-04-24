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
var limitX;
var xSwipeAmount;
var ySwipeAmount;
var centerPannel;

window.addEventListener('load', function() 
	 {
        document.body.addEventListener('touchstart', function(event) 
				{					
					startX = event.touches[0].pageX;
					startY = event.touches[0].pageY;
					xSwipeAmount = 0;
					ySwipeAmount = 0;
                }, false);
     }, false);
	 
window.addEventListener('load', function() 
	 {
        document.body.addEventListener('touchmove', function(event) 
				{		
					event.preventDefault();
					xSwipeAmount += (event.touches[0].pageX - startX);
					ySwipeAmount += (event.touches[0].pageY - startY);
					
                }, false);
     }, false);
	 
window.addEventListener('load', function() 
	 {
     document.body.addEventListener('touchend', function(event) 
			{					
				if(!needToScroll)				
				{		
					if(centerPannel)
					{
						if(Math.abs(xSwipeAmount) > Math.abs(ySwipeAmount))
						{
							limitY = true;
							limitX = false;		
						}
						else
						{						
							limitX = true;
							limitY = false;							
						}
					}
					else
					{
						limitX = true;
						limitY = true;
						
						if((Math.abs(xSwipeAmount) > Math.abs(ySwipeAmount))&&(yViewPos == panelHeight))
						{
							limitY = true;
							limitX = false;	
						}	
						
						if((Math.abs(xSwipeAmount) < Math.abs(ySwipeAmount))&&(yViewPos != panelHeight))
						{
							limitX = true;
							limitY = false;							
						}				
					}
					
					if(!limitX)
					{
						if(xSwipeAmount < 0)
						{
							needToScroll = true;
							dist = 0;
							xScroll = 1;
							yScroll = 0;
						}
						
						if(xSwipeAmount> 0)
						{
							needToScroll = true;
							dist = 0;
							xScroll = -1;
							yScroll = 0;
						}
					}
					
					if(!limitY)
						{
							if(ySwipeAmount < 0)
							{
								needToScroll = true;
								dist = 0;
								xScroll = 0;
								yScroll = 1;
							}
							
							if(ySwipeAmount > 0)
							{
								needToScroll = true;
								dist = 0;
								xScroll = 0;
								yScroll = -1;
							}
						}				
				}
				if( needToScroll)
					centerPannel = false;
                }, false);
     }, false);
	 
function Initialize ()
	{
		
		xScroll  = 0;
		yScroll  = 0;
		var body = document.body;
		var html = document.documentElement;
		screenHeight = Math.max( body.scrollHeight, body.offsetHeight,html.clientHeight, html.scrollHeight, html.offsetHeight );
		screenWidth  = Math.max( body.scrollWidth, body.offsetWidth,html.clientWidth, html.scrollWidth, html.offsetWidth );
		panelWidth   = screenWidth /  3;
		panelHeight  = screenHeight / 3;
		xViewPos = panelWidth;
		yViewPos = panelHeight;
		needToScroll = false;
		scrollSpeed = 55;
		init = true;
		limitY = true;
		dist = 0;
		centerPannel = true;
		window.scrollTo(panelWidth,panelHeight);
	}
function ScrollControl() 
	{
		
		if(needToScroll)
		{
							
			dist += scrollSpeed;				
			xViewPos += scrollSpeed*xScroll;    
			yViewPos += scrollSpeed*yScroll;
			window.scrollTo(xViewPos+scrollSpeed*xScroll, yViewPos+scrollSpeed*yScroll);			
			
			if(yScroll == 0)
			{
				if(dist>= panelWidth)////////X axis navigation code;
				{
				
					if(xScroll == 1) // the left
					{										
						if((xViewPos >= panelWidth)&&(xViewPos <= 2*panelWidth)) // panel 2 snapTo
						{
							xViewPos = panelWidth;	
							centerPannel = true;
							needToScroll = false;
						}					
						if(xViewPos > panelWidth*2) // panel 3 snapTo
						{
							xViewPos = panelWidth*2;							
							needToScroll = false;
						}					
						window.scrollTo(xViewPos, yViewPos);
										
					}
					
					if(xScroll = -1)// to the  right
					{										
						if((xViewPos <= panelWidth)&&(xViewPos > 0)) // panel 2 snapTo
						{
							xViewPos = panelWidth;	
							centerPannel = true;
							needToScroll = false;
						}					
						if(xViewPos < 0) // panel 3 snapTo
						{
							xViewPos = 0;							
							needToScroll = false;
						}					
						window.scrollTo(xViewPos, yViewPos);
										
					}
				}
			}
			
				if(xScroll == 0)
				{
					if(dist>= panelHeight)////////Y axis navigation code;
					{						
						if(yScroll == 1) // scroll down
						{										
							if((yViewPos >= panelHeight)&&(yViewPos <= 2*panelHeight)) // snap to second panel
							{
								yViewPos = panelHeight;
								centerPannel = true;
								needToScroll = false;
							}					
							
							if(yViewPos > panelHeight*2)  // snap to third panel
							{
								yViewPos = panelHeight*2;								
								needToScroll = false;
							}					
							window.scrollTo(xViewPos, yViewPos);									
						}						
						
						if(yScroll = -1) // scroll up
						{										
							if((yViewPos <= panelHeight)&&(yViewPos > 0)) // snap to second pannel
							{
								yViewPos = panelHeight;
								centerPannel = true;
								needToScroll = false;
							}					
							if(yViewPos < 0) // snap to first pannel
							{
								yViewPos = 0;								
								needToScroll = false;
							}					
							window.scrollTo(xViewPos, yViewPos);
											
						}
						
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
	
	
	 

