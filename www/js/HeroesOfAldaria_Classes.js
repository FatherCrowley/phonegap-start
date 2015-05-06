
function TextScene(StringArray)
{
	this.choinceID = parseInt(StringArray[0],10);
	this.choiceText = StringArray[1];
	this.option1  = new TextOption(StringArray[2] ,StringArray[3] ,StringArray[4] ,StringArray[5] ,StringArray[6])
	this.option2  = new TextOption(StringArray[7] ,StringArray[8] ,StringArray[9] ,StringArray[10],StringArray[11])
	this.option3  = new TextOption(StringArray[12],StringArray[13],StringArray[14],StringArray[15],StringArray[16])
	this.option4  = new TextOption(StringArray[17],StringArray[18],StringArray[19],StringArray[20],StringArray[21])	
}
TextScene.prototype.Display = function()
{
	document.getElementById("dynamicText").innerHTML = this.choiceText;
	this.option1.Display("dynamicButton1");
	this.option2.Display("dynamicButton2");
	this.option3.Display("dynamicButton3");
	this.option4.Display("dynamicButton4");
}


function TextOption(Text, WinLink, LoseLink, TestStat, TestValue)
{
	this.Text = Text;
	this.WinLink  = parseInt(WinLink,10);
	this.LoseLink = parseInt(LoseLink,10);
	this.TestStat = parseInt(TestStat,10);
	this.TestValue= parseInt(TestValue,10);
}
TextOption.prototype.Display = function(HTMLID)
{
	document.getElementById(HTMLID).innerHTML = this.Text;
}
TextOption.prototype.DoTest = function()
{
	if(this.TestStat>0)
	{
		switch(this.TestStat) 
		{
			case 1:
				if(Attack>=this.TestValue)
					CurScene = this.WinLink;
				else CurScene = this.LoseLink;
				break;
			case 2:
				if(Defence>=this.TestValue)
					CurScene = this.WinLink;
				else CurScene = this.LoseLink;
				break;
			case 3:
				if(Tact>=this.TestValue)
					CurScene = this.WinLink;
				else CurScene = this.LoseLink;
				break;
			case 4:
				if(Rage>=this.TestValue)
					CurScene = this.WinLink;
				else CurScene = this.LoseLink;
				break;
			case 5:
				if(Magic>=this.TestValue)
					CurScene = this.WinLink;
				else CurScene = this.LoseLink;
				break;
			case 6:
				if(Mundane>=this.TestValue)
					CurScene = this.WinLink;
				else CurScene = this.LoseLink;
				break;
			case 7:
				if(Fame>=this.TestValue)
					CurScene = this.WinLink;
				else CurScene = this.LoseLink;
				break;
			case 8:
				if(Infinity>=this.TestValue)
					CurScene = this.WinLink;
				else CurScene = this.LoseLink;
				break;
			default:
				CurScene = this.LoseLink;
		} 
	}
	else 
	{
		switch(this.TestStat) 
		{
			case -1:				
				CurScene = this.WinLink;
				Attack += this.TestValue;
				break;
			case -2:
				CurScene = this.WinLink;
				Defence += this.TestValue;
				break;
			case -3:
				CurScene = this.WinLink;
				Tact += this.TestValue;
				break;
			case -4:
				CurScene = this.WinLink;
				Rage += this.TestValue;
				break;
			case -5:
				CurScene = this.WinLink;
				Magic += this.TestValue;
				break;
			case -6:
				CurScene = this.WinLink;
				Mundane += this.TestValue;
				break;
			case -7:
				CurScene = this.WinLink;
				Fame += this.TestValue;
				break;
			case -8:
				CurScene = this.WinLink;
				Infamy += this.TestValue;
				break;
			default:
				CurScene = this.WinLink;
		} 
	}
		
}

function Trophy(Name,TriggerScene,Description,Stat,Boost,HTMLID)
{
	this.name  = Name;
	this.triggerScene = parseInt(TriggerScene,10);
	this.description = Description;
	this.stat = parseInt(Stat,10);
	this.boost = parseInt(Boost,10);
	this.htmlID = HTMLID;
	this.hasTriggered = false;
}
Trophy.prototype.Test = function(Scene)
{
	if(Scene==this.triggerScene)
	{
		this.Enable();
		this.hasTriggered = true;
	}	
}
Trophy.prototype.Enable = function()
{
	document.getElementById(this.htmlID).disabled = false;
	document.getElementById(this.htmlID).innerHTML= this.name;
	switch(this.stat) 
		{
			case 1:					
				Attack += this.boost;
				break;
			case 2:				
				Defence += this.boost;
				break;
			case 3:				
				Tact += this.boost;
				break;
			case 4:				
				Rage += this.boost;
				break;
			case 5:				
				Magic += this.boost;
				break;
			case 6:				
				Mundane += this.boost;
				break;
			case 7:				
				Fame += this.boost;
				break;
			case 8:				
				Infamy += this.boost;
				break;			
		}
	this.hasTriggered = true;
}
Trophy.prototype.Disable = function()
{	
	document.getElementById(this.htmlID).disabled = true;
	document.getElementById(this.htmlID).innerHTML= this.name;
}
Trophy.prototype.OnCLick = function()
{
	document.getElementById("TrophyText").innerHTML = this.description;
}
