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

window.addEventListener('load', function() 
	 {
        document.body.addEventListener('touchstart', function(event) 
				{
					//e.preventDefault();
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
					if(Math.abs(xSwipeAmount) > Math.abs(ySwipeAmount))
					{
						limitY = true;
						limitX = false;
						//limitX = true;
						//limitY = false;
						console.log("only x");
					}
					else
					{
						//limitY = true;
						//limitX = false;
						limitX = true;
						limitY = false;
						console.log("only y");
					}
					
					//xViewPos -= event.touches[0].pageX - startX;
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
		
		if(needToScroll)
		{
							
			dist += scrollSpeed;				
			xViewPos += scrollSpeed*xScroll;    
			yViewPos += scrollSpeed*yScroll;
			window.scrollTo(xViewPos+scrollSpeed*xScroll, yViewPos+scrollSpeed*yScroll);
			
			console.log(dist);
			if(yScroll == 0)
			{
				if(dist>= panelWidth)////////X axis navigation code;
				{
				
					if(xScroll == 1) // the left
					{										
						if((xViewPos >= panelWidth)&&(xViewPos <= 2*panelWidth)) // panel 2 snapTo
						{
							xViewPos = panelWidth;
							//limitY = false;//tochange
							needToScroll = false;
						}					
						if(xViewPos > panelWidth*2) // panel 3 snapTo
						{
							xViewPos = panelWidth*2;
							//limitY = true;
							needToScroll = false;
						}					
						window.scrollTo(xViewPos, yViewPos);
										
					}
					
					if(xScroll = -1)// to the  right
					{										
						if((xViewPos <= panelWidth)&&(xViewPos > 0)) // panel 2 snapTo
						{
							xViewPos = panelWidth;
							//limitY = false //tochange
							needToScroll = false;
						}					
						if(xViewPos < 0) // panel 3 snapTo
						{
							xViewPos = 0;
							//limitY = true;
							needToScroll = false;
						}					
						window.scrollTo(xViewPos, yViewPos);
										
					}
				}
			}
			
				if(xScroll == 0)
				{
					if(dist>= panelHeight)////////X axis navigation code;
					{
						console.log("wtf");
						//////Y axis navigation
						if(yScroll == 1) // scroll down
						{										
							if((yViewPos >= panelHeight)&&(yViewPos <= 2*panelHeight)) // snap to second panel
							{
								yViewPos = panelHeight;
								//limitY = false;//tochange
								//limitX = false;
								needToScroll = false;
							}					
							
							if(yViewPos > panelHeight*2)  // snap to third panel
							{
								yViewPos = panelHeight*2;
								//limitX = true;
								needToScroll = false;
							}					
							window.scrollTo(xViewPos, yViewPos);									
						}						
						
						if(yScroll = -1) // scroll up
						{										
							if((yViewPos <= panelHeight)&&(yViewPos > 0)) // snap to second pannel
							{
								yViewPos = panelHeight;
								//limitY = false; //tochange
								//limitX = false;
								needToScroll = false;
							}					
							if(yViewPos < 0) // snap to first pannel
							{
								yViewPos = 0;
								//limitX = true;
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
	
	
	 

