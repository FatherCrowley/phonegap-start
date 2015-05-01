var charLocation; 
var locationID = 0;
var Attack  = 10;
var Defence = 10;
var Tact    = 10;
var Rage    = 10;
var Magic   = 10;
var Mundane = 10;
var Fame    = 10;
var Infamy  = 10;
var CurScene = 0;
var SceneList =  [[]]; 
var TrophyList = [];
//document.addEventListener("deviceready", ReadStory, false);
document.addEventListener('DOMContentLoaded', ReadStory, false);
document.addEventListener('DOMContentLoaded', ReadTrophys, false);
document.addEventListener("deviceready",  WriteTest, false);

function onInitFs(fs) {

  fs.getFile('log.txt', {create: true}, function(fileEntry) {
	alert(fileEntry.fullPath);
    // Create a FileWriter object for our FileEntry (log.txt).
    fileEntry.createWriter(function(fileWriter) {

      fileWriter.onwriteend = function(e) {
        console.log('Write completed.');
      };

      fileWriter.onerror = function(e) {
        console.log('Write failed: ' + e.toString());
      };

      // Create a new Blob and write it to log.txt.
      var blob = new Blob(['Lorem Ipsum'], {type: 'text/plain'});

      fileWriter.write(blob);

    }, errorHandler);

  }, errorHandler);

}

function WriteTest()
{	
	window.resolveLocalFileSystemURL(cordova.file.dataDirectory, onInitFs);
}

function SetEventsLocation(location)
{
	charLocation = location;
	if(location == "Priceton")
	{
		locationID = 2;
		document.getElementById("Priceton").src              = "img/Loc5.png";
		document.getElementById("Golzbergium").src           = "img/Loc2.png";
		document.getElementById("Bowersvile").src           = "img/Loc4.png";
		document.getElementById("TheFieldsOfDevilly").src = "img/Loc1.png";
	}	
	if(location == "Golzbergium")
	{
		locationID = 3;
		document.getElementById("Priceton").src              = "img/Loc3.png";
		document.getElementById("Golzbergium").src           = "img/Loc5.png";
		document.getElementById("Bowersvile").src           = "img/Loc4.png";
		document.getElementById("TheFieldsOfDevilly").src = "img/Loc1.png";
	}
	if(location == "Bowersvile")
	{
		locationID = 0;
		document.getElementById("Priceton").src              = "img/Loc3.png";
		document.getElementById("Golzbergium").src           = "img/Loc2.png";
		document.getElementById("Bowersvile").src           = "img/Loc5.png";
		document.getElementById("TheFieldsOfDevilly").src = "img/Loc1.png";
	}
	if(location == "The Fields Of Devilly")
	{
		locationID = 1;
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

function ReadStory()
{	
	for(var i =0; i<4;i++)
	{
		SceneList[i] = [];
	}
	SetEventsLocation("Bowersvile");
	loadStory("story/Bowersville.txt",locationID);		
}
function ReadTrophys()
{
	var a = ["B6","B7","B8","B9","B10","B11","B12","B13","B14"];
	loadTrophys("Trophy/TrophyList.txt",a);
}


function loadStory(source,locationID)
{
	
	$.ajax
		(
			{
				url: source,
				success: function(data) 
				{
					GenerateScenes(data,locationID);					
				},
				error: function() 
				{	       
					alert("somenthing went wrong");
				},
				complete: function()
				{
					ContinueStory();
				},
				dataType: "text"
			}
		);
}

function loadTrophys(source,HTMLIDList)
{	
	$.ajax
		(
			{
				url: source,
				success: function(data) 
				{
					GenerateTrophys(data,HTMLIDList);					
				},
				error: function() 
				{	       
					alert("somenthing went wrong");
				},
				
				dataType: "text"
			}
		);
}

function GenerateScenes(text,locationID)
{
	var scenes  = text.split("¬");
	SceneList[locationID] = [];
	for (i = 0; i< scenes.length; i++)
	{
		var infoArray = scenes[i].split("|");		
		SceneList[locationID].push(new TextScene(infoArray));
	}	
}

function GenerateTrophys(text,HTMLIDList)
{
	var trophys  = text.split("¬");	
	var tmp;	
	for (i = 0; i< trophys.length; i++)
	{
		var infoArray = trophys[i].split("|");
		tmp = new Trophy(infoArray[0],infoArray[1],infoArray[2],infoArray[3],infoArray[4],HTMLIDList[i]);
		TrophyList.push(tmp);
		tmp.Disable();
	}		
	
}

function ContinueStory()
{
	SceneList[0][0].Display();
	UpdateStats();
	
}

function MakeChoice(choiceID)
{	
	switch(choiceID)
	{
		case 1:
			SceneList[locationID][CurScene].option1.DoTest();
			SceneList[locationID][CurScene].Display();			
		break;
		case 2:
			SceneList[locationID][CurScene].option2.DoTest();
			SceneList[locationID][CurScene].Display();
		break;
		case 3:
			SceneList[locationID][CurScene].option3.DoTest();
			SceneList[locationID][CurScene].Display();
		break;
		case 4:
			SceneList[locationID][CurScene].option4.DoTest();
			SceneList[locationID][CurScene].Display();
		break;		
		
	}
	UpdateStats();
	for (i = 0; i<TrophyList.length; i++)
	{
		if(TrophyList[i].hasTriggered == false)
			TrophyList[i].Test(CurScene);
	}
}

function DisplayTropy(ID)
{
	TrophyList[ID].OnCLick();
}
function UpdateStats()
{
	CalculateSlider("SR1",Attack,Defence);
	CalculateSlider("SR2",Tact,Rage);
	CalculateSlider("SR3",Magic,Mundane);
	CalculateSlider("SR4",Fame,Infamy);
}

function CalculateSlider(ID,Stat1,Stat2)
{	
	//alert(ID);
	document.getElementById(ID).value = ""+((100*Stat1)/(Stat1+Stat2));	
}

function ResetChar()
{
	console.log("You reset Everything! you bastard");
}
