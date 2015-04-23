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
					if((event.touches[0].pageX - startX) > (event.touches[0].pageY - startY ))
					{
						//limitY = true;
						//limitX = false;
						limitX = true;
						limitY = false;
						console.log("only x");
					}
					else
					{
						limitX = true;
						limitY = false;
						console.log("only y");
					}
					//xViewPos -= event.touches[0].pageX - startX;
					if(!limitX)
					{
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
					}
					
					if(!limitY)
						{
							if(event.touches[0].pageY - startY < 0)
							{
								needToScroll = true;
								dist = 0;
								xScroll = 0;
								yScroll = 1;
							}
							
							if(event.touches[0].pageY - startY > 0)
							{
								needToScroll = true;
								dist = 0;
								xScroll = 0;
								yScroll = -1;
							}
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
				
			if(yScroll == 1)					
				dist += scrollSpeed*yScroll;
				
			if(yScroll == -1)					
				dist += (0 - scrollSpeed)*yScroll;
				
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
						//limitY = false;//tochange
						needToScroll = false;
					}					
					if(xViewPos > panelWidth*2)
					{
						xViewPos = panelWidth*2;
						//limitY = true;
						needToScroll = false;
					}					
					window.scrollTo(xViewPos, yViewPos);
									
				}
				
				if(xScroll = -1)
				{										
					if((xViewPos <= panelWidth)&&(xViewPos > 0))
					{
						xViewPos = panelWidth;
						//limitY = false //tochange
						needToScroll = false;
					}					
					if(xViewPos < 0)
					{
						xViewPos = 0;
						//limitY = true;
						needToScroll = false;
					}					
					window.scrollTo(xViewPos, yViewPos);
									
				}
				
				if(yScroll == 1)
				{										
					if((yViewPos >= panelHeight)&&(yViewPos <= 2*panelHeight))
					{
						yViewPos = panelHeight;
						//limitY = false;//tochange
						//limitX = false;
						needToScroll = false;
					}					
					if(yViewPos > panelHeight*2)
					{
						yViewPos = panelHeight*2;
						//limitX = true;
						needToScroll = false;
					}					
					window.scrollTo(xViewPos, yViewPos);									
				}
				
				if(yScroll = -1)
				{										
					if((yViewPos <= panelHeight)&&(yViewPos > 0))
					{
						yViewPos = panelHeight;
						//limitY = false; //tochange
						//limitX = false;
						needToScroll = false;
					}					
					if(yViewPos < 0)
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

var MainLoop = function() 
	{	
		if(!init)
			Initialize();
		ScrollControl();
	};
	setInterval( MainLoop, 1000 /fps );
	
	
	 

