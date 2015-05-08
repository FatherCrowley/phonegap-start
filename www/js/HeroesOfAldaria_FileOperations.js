document.addEventListener('deviceready', ReadStory, false);
document.addEventListener('deviceready', ReadTrophys, false);
document.addEventListener('deviceready', ReadEquipment, false);
//document.addEventListener('deviceready', ReadSave, false);
document.addEventListener("pause",  WriteSave, false);
var done = 0;

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
        alert('Write completed.');
      };

      fileWriter.onerror = function(e) {
        console.log('Write failed: ' + e.toString());
      };

      // Create a new Blob and write it to save.txt.
	  var saveText = '';
	  saveText += CurSceneArray[0];
	  saveText += '|';
	  saveText += CurSceneArray[1];
	  saveText += '|';
	  saveText += CurSceneArray[2];
	  saveText += '|';
	  saveText += CurSceneArray[3];
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
	  if(saveText[saveText.length] == '|')
		saveText = saveText.substr(0,saveText.length-1);  
	  
	  saveText += '¬';
	  for (i = 0; i< 8; i++)
	  {
		  if(CurEquipment[i].name  != "Nothing")
		  {
			 saveText += CurEquipment[i].name;
			 saveText += '|';
		  }
	  }	
	  if(saveText[saveText.length] == '|')
		saveText = saveText.substr(0,saveText.length-1);  
	  
      var blob = new Blob([ saveText], {type: 'text/plain'});

      fileWriter.write(blob);

    });

  });

}

//File API Reading 
function ReadSave()
{
	//alert (cordova.file.dataDirectory + "save.txt");
	window.resolveLocalFileSystemURL(cordova.file.dataDirectory + "save.txt", LoadSave, failReadSave);
}

function failReadSave(e) 
{
	$.when(WriteSave()		
	).then(function() 
	{  
		ReadSave();
	});
}

function fail(e) 
{
	alert ("Error: " + e.code) ;
}

function LoadSave(fileEntry)
{
	//SceneList[0][0].Display();
	fileEntry.file
	(
		function(file) 
		{
		var reader = new FileReader();
		reader.onloadend = function(e) 
			{
				alert(this.result);				
				var aspects  = this.result.split("¬");
				//alert(aspects.length);
				if(aspects.length>1)
				{								
					var data = aspects[0].split("|");
					
					CurSceneArray[0]= parseInt(data[0],10);	
					CurSceneArray[1]= parseInt(data[1],10);	
					CurSceneArray[2]= parseInt(data[2],10);	
					CurSceneArray[3]= parseInt(data[3],10);		
					
					locationID   = parseInt(aspects[1],10);
					
					alert("hi");
					data    = aspects[2].split("|");
					Attack  = parseInt(data[0],10);
					Defence = parseInt(data[1],10);
					Tact    = parseInt(data[2],10);
					Rage    = parseInt(data[3],10);
					Magic   = parseInt(data[4],10);
					Mundane = parseInt(data[5],10);
					Fame    = parseInt(data[6],10);
					Infamy  = parseInt(data[7],10);			
					
				
					if(aspects[3]!= "")
					{
						data     = aspects[3].split("|");
						for (i = 0; i< data.length; i++)
						{
							TrophyList[parseInt(data[i],10)].Enable();
						}
					}
					
					//alert("hola");					
					
					if(aspects[3]!= "")
					{
						data    = aspects[4].split("|");
						for (i = 0; i< data.length; i++)
						{
							for (j = 0; j< PossibleEquipemnt.length; j++)
							{
								if(PossibleEquipemnt[j].name == data[i])
									PossibleEquipemnt[j].Equip();
							}
						}
					}
					//alert(CurScene);
					//alert(locationID);
					//alert(SceneList[0][0]);
					
					switch(locationID)
					{
						case 0:
						SetEventsLocation("Bowersvile");
						break;
						case 1:
						SetEventsLocation("Priceton");
						break;
						case 2:
						SetEventsLocation("Golzbergium");
						break;
						case 3:
						SetEventsLocation("The Fields Of Devilly");
						break;
					}
					ContinueStory();
					//SceneList[locationID][CurScene].Display();
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
	alert(StoryFileLocations[0]);
	//SetEventsLocation("Bowersvile");
	//loadStory("story/Bowersville.txt",locationID);	
	
	//SetEventsLocation("Priceton");
	//loadStory("story/Princeton.txt",locationID);

	//SetEventsLocation("Golzbergium");
	//loadStory("story/Golzbergium.txt",locationID);
	
	//SetEventsLocation("The Fields Of Devilly");
	//loadStory("story/TheFieldsOfDevilly.txt",locationID);	

	$.when(
		
		SetEventsLocation("Bowersvile"),
		loadStory(StoryFileLocations[0],locationID)		
	).then(function() 
	{  
	   SetEventsLocation("Priceton");
	   loadStory(StoryFileLocations[1],locationID);
	}).then(function() 
	{  
	   SetEventsLocation("Golzbergium");
	   loadStory(StoryFileLocations[2],locationID);
	}).then(function() 
	{  
	   SetEventsLocation("The Fields Of Devilly");
	   loadStory(StoryFileLocations[3],locationID);	
	});
	
	
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
				error: function(xhr, status) 
				{	       
					alert("Story loading went wrong");
					switch (xhr.status) 
					{
						 case 404:
							 alert('File not found');
							 break;
						 case 500:
							 alert('Server error');
							 break;
						 case 0:
							 alert('Request aborted'+locationID);
							 break;
						 default:
							 alert('Unknown error ' + status);
					} 
				},
				complete : function()
				{
					alert(SceneList[locationID]);
				},
				dataType: "text"
			}
		)
	
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