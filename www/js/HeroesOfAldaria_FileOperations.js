document.addEventListener('deviceready', ReadStory, false);
document.addEventListener('deviceready', ReadTrophys, false);
document.addEventListener('deviceready', ReadEquipment, false);
document.addEventListener("pause",  WriteSave, false);

//////////////File API Writing
function WriteSave()
{		
	window.resolveLocalFileSystemURL(cordova.file.dataDirectory, onInitFs);
}

function onInitFs(fs) {
	
	fs.getFile('save.txt', {create: true}, function(fileEntry) {
	
    // Create a FileWriter object for our FileEntry (log.txt).
    fileEntry.createWriter(function(fileWriter) {

      fileWriter.onwriteend = function(e) {
        console.log('Write completed.');
      };

      fileWriter.onerror = function(e) {
        console.log('Write failed: ' + e.toString());
      };

      // Create a new Blob and write it to save.txt.
	  var saveText = '';
	  saveText += CurScene;
	  saveText += '¬';
	  saveText += locationID;
	  saveText += '¬';
	  saveText += Attack ;
	  saveText += '|';
	  saveText += Defence ;
	  saveText += '|';
	  saveText += Tact;
	  saveText += '|';
	  saveText += Rage;
	  saveText += '|';
      saveText += Magic;
	  saveText += '|';
	  saveText += Mundane;
	  saveText += '|';
	  saveText += Fame;
	  saveText += '|';
	  saveText += Infamy;
	  saveText += '¬';
	  for (i = 0; i< TrophyList.length; i++)
	  {
		  if(TrophyList[i].hasTriggered == true)
		  {
			 saveText += i;
			 saveText += '|';
		  }
	  }
	  saveText = saveText.substr(0,saveText.length-1);  
      var blob = new Blob([ saveText], {type: 'text/plain'});

      fileWriter.write(blob);

    });

  });

}

//File API Reading 
function ReadSave()
{
	alert (cordova.file.dataDirectory + "save.txt");
	window.resolveLocalFileSystemURL(cordova.file.dataDirectory + "save.txt", LoadSave, fail);
}

function fail(e) 
{
	alert ("Error: " + e.code) ;
}

function LoadSave(fileEntry)
{
	fileEntry.file
	(
		function(file) 
		{
		var reader = new FileReader();
		reader.onloadend = function(e) 
			{
				alert(this.result);
				var aspects  = this.result.split("¬");
				
				if(aspects.length>1)
				{								
					CurScene     = parseInt(aspects[0],10);				
					locationID   = parseInt(aspects[1],10);
					
					
					var data     = aspects[2].split("|");
					Attack  = parseInt(data[0],10);
					Defence = parseInt(data[1],10);
					Tact    = parseInt(data[2],10);
					Rage    = parseInt(data[3],10);
					Magic   = parseInt(data[4],10);
					Mundane = parseInt(data[5],10);
					Fame    = parseInt(data[6],10);
					Infamy  = parseInt(data[7],10);			

					var data     = aspects[3].split("|");				
					for (i = 0; i< data.length; i++)
					{
						TrophyList[parseInt(data[i],10)].Enable();
					}
				}
				
			}
		reader.readAsText(file);
		}
	);
	
}

////Ajax File Reader

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
function ReadEquipment()
{	
	loadEquipment("Equipment/EquipmentList.txt");
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
					alert("Story loading went wrong");
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
					alert("Trophy Loading went wrong");
				},
				
				dataType: "text"
			}
		);
}

function loadEquipment(source)
{	
	$.ajax
		(
			{
				url: source,
				success: function(data) 
				{
					GenerateEquipment(data);					
				},
				error: function() 
				{	       
					alert("Equipment loading went wrong");
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

function GenerateEquipment(text)
{
	var items  = text.split("¬");	
	var tmp;	
	for (i = 0; i< items.length; i++)
	{
		var infoArray = items[i].split("|");
		tmp = new Equipment(infoArray[0],infoArray[1],infoArray[2],infoArray[3],infoArray[4],infoArray[5],infoArray[6]);
		PossibleEquipemnt.push(tmp);		
	}
}