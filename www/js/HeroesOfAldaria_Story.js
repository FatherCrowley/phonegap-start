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
var CurSceneArray = [0,0,0,0];
var SceneList =  [[]]; 
var TrophyList = [];
var CurEquipment = Array(8);
var PossibleEquipemnt = [];

function SetEventsLocation(location)
{
	CurSceneArray[locationID] = CurScene;
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
	CurScene  = CurSceneArray[locationID];
	if(SceneList[locationID][CurScene] != null)
		SceneList[locationID][CurScene].Display();
	console.log("You went to " + location);
}

function ContinueStory()
{
	
var tmp = new Equipment("Nothing", "Just your bear hairy chest", "Armor"      , "/Empty0.png", 1, 0 , CurScene);	
	tmp.Equip();
	tmp = new Equipment("Nothing", "Your hair counts as one with so much product in it", "Helmet"     , "/Empty1.png", 1, 0 , CurScene);
	tmp.Equip();
	tmp = new Equipment("Nothing", "Your right fist, you call him Righty", "RightWeapon", "/Empty2.png", 1, 0 , CurScene);
	tmp.Equip();
	tmp = new Equipment("Nothing", "Your left fist, you call him Lefty", "LeftWeapon" , "/Empty3.png", 1, 0 , CurScene);
	tmp.Equip();
	tmp = new Equipment("Nothing", "Your dont have money for rings", "RightRing"  , "/Empty4.png", 1, 0 , CurScene);
	tmp.Equip();
	tmp = new Equipment("Nothing", "Your dont have money for rings", "LeftRing"   , "/Empty5.png", 1, 0 , CurScene);
	tmp.Equip();
	tmp = new Equipment("Nothing", "Bare feet have their advantages right?", "Boots"      , "/Empty6.png", 1, 0 , CurScene);
	tmp.Equip();
	tmp = new Equipment("Nothing", "Nope, no amulets here", "Amulet"     , "/Empty7.png", 1, 0 , CurScene);
	tmp.Equip();	
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
	
	for (i = 0; i<PossibleEquipemnt.length; i++)
	{
		if(PossibleEquipemnt[i].hasTriggered == false)
			PossibleEquipemnt[i].Test(CurScene);
	}
	
	for (i = 0; i<TrophyList.length; i++)
	{
		if(TrophyList[i].hasTriggered == false)
			TrophyList[i].Test(CurScene);
	}
	UpdateStats();
}

function DisplayTropy(ID)
{
	TrophyList[ID].OnCLick();
}

function DisplayEquipment(ID)
{	
	CurEquipment[ID].Inspect();
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
	document.getElementById(ID).value = ""+((100*Stat1)/(Stat1+Stat2));	
}

function ResetChar()
{
	console.log("You reset Everything! you bastard");
}
