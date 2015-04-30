var charLocation; 
var Attack  = 10;
var Defence = 10;
var Tact    = 10;
var Rage    = 10;
var Magic   = 10;
var Mundane = 10;
var Fame    = 10;
var Infamy  = 10;
var CurScene = 0;
var SceneList = [4]; 
var LocationCode = 0;
document.addEventListener("deviceready", ReadStory, false);
//document.addEventListener('DOMContentLoaded', ReadStory, false);

/*<!DOCTYPE html>
<html>
  <head>
    <title>reading file</title>
    <script type="text/javascript">

		var reader = new FileReader();

		function readText(that){

			if(that.files && that.files[0]){
				var reader = new FileReader();
				reader.onload = function (e) {  
					var output=e.target.result;
				
					//process text to show only lines with "@":				
					output=output.split("\n").filter(/./.test, /\@/).join("\n");

					document.getElementById('main').innerHTML= output;
				};//end onload()
				reader.readAsText(that.files[0]);
			}//end if html5 filelist support
		} 
</script>
</head>
<body>
	<input type="file" onchange='readText(this)' />
	<div id="main"></div>
  </body>
</html>
*/
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
	document.getElementById("dynamicText").innerHTML = this.choiceText;
	option1.Display("dynamicButton1");
	option2.Display("dynamicButton2");
	option3.Display("dynamicButton3");
	option4.Display("dynamicButton4");
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

function ReadStory()
{
	// window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
	window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "www/story/Bowersville.txt", GenerateScenes, fail1);
	//LocationCode = 1;
	//window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "www/story/Golzbergium.txt", GenerateScenes, fail);
	//LocationCode = 2;
	//window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "www/story/Priceton.txt", GenerateScenes, fail);
	//LocationCode = 3;
	//window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "www/story/TheFieldsOfDevilly.txt", GenerateScenes, fail);
	//LocationCode = 0;
	//SceneList[0][0].Display();
} 

function gotFS(fileSystem) {
        fileSystem.root.getFile("www/story/Bowersville.txt", {create: false, exclusive: false}, GenerateScenes, fail1);
    }

function fail(e) {
	document.getElementById("dynamicText").innerHTML = "WOPS";
	console.log("FileSystem Error");
	console.dir(e);
}
function fail1(e) {
	document.getElementById("dynamicText").innerHTML = "file fail";
	console.log("FileSystem Error");
	console.dir(e);
}

function GenerateScenes(fileEntry)
{
	fileEntry.file
	(
		function(file) 
		{
			var reader = new FileReader();
			reader.onloadend = function(e) 
			{
				document.getElementById("dynamicText").innerHTML = e.target.result;
				var scenes  = e.target.result.split("¬");
				var a = [];
				for (i = 0; i< scenes.length; i++)
				{
					var infoArray = scenes[i].split("|");					
					a.push(new TextScene(infoArray));				
				}
				SceneList[LocationCode].push(a);
				
			}

			reader.readAsText(file);
		}
	);
}

function ResetChar()
{
	console.log("You reset Everything! you bastard");
}