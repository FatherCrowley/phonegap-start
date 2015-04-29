var charLocation; 

function SetEventsLocation(location)
{
	charLocation = location;
	if(location == "Priceton")
	{
		document.getElementById("Priceton").src              = "img/Loc5.png";
		document.getElementById("Golzbergium").src           = "img/Loc2.png";
		document.getElementById("Bowersvile").src           = "img/Loc4.png";
		document.getElementById("TheFieldsOfDevilly").src = "img/Loc1.png";
	}	
	if(location == "Golzbergium")
	{
		document.getElementById("Priceton").src              = "img/Loc3.png";
		document.getElementById("Golzbergium").src           = "img/Loc5.png";
		document.getElementById("Bowersvile").src           = "img/Loc4.png";
		document.getElementById("TheFieldsOfDevilly").src = "img/Loc1.png";
	}
	if(location == "Bowersvile")
	{
		document.getElementById("Priceton").src              = "img/Loc3.png";
		document.getElementById("Golzbergium").src           = "img/Loc2.png";
		document.getElementById("Bowersvile").src           = "img/Loc5.png";
		document.getElementById("TheFieldsOfDevilly").src = "img/Loc1.png";
	}
	if(location == "The Fields Of Devilly")
	{
		document.getElementById("Priceton").src              = "img/Loc3.png";
		document.getElementById("Golzbergium").src           = "img/Loc2.png";
		document.getElementById("Bowersvile").src           = "img/Loc4.png";
		document.getElementById("TheFieldsOfDevilly").src = "img/Loc5.png";
	}
	console.log("You went to " + location);
}

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
	document.getElementById(HTMLID).innerHTML = this.Text;
}


function TextOption(Text, WinLink, LoseLink, TestStat, TestValue)
{
	this.Text = Text;
	this.WinLink= WinLink;
	this.LoseLink= LoseLink;
	this.TestStat= TestStat;
	this.TestValue= TestValue;
}
TextOption.prototype.Display = function(HTMLID)
{
	document.getElementById(HTMLID).innerHTML = this.Text;
}
function ResetChar()
{
	console.log("You reset Everything! you bastard");
}