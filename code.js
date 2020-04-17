//Crediting to the resources used in the making of this game:
//Market stall image: https://www.iconexperience.com/_img/v_collection_png/512x512/shadow/market_stand.png
//Chicken boss battle music: Serenity - Epic Games (Unreal Tournament 2004 OST)
//Chicken boss battle background: https://ak6.picdn.net/shutterstock/videos/3083206/thumb/4.jpg?i10c=img.resize(height:160)
//Chicken boss: https://s3.amazonaws.com/files.enjin.com/381916/modules/forum/attachments/4509975_f260_1386891459.jpg
//Locations background: http://sfwallpaper.com/categories/adventure-background.html
//Killer Rabbit: https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1471578112i/20074856.jpg
//Daytime Camp background: http://mailemedicinals.com/content/green-hills-wallpaper-hd.html
//Main Title Intro Music: George Miller - Salamander Man - Nose Flute
//Explore battle background: http://theartmad.com/wp-content/uploads/2015/04/Forest-At-Night-24.jpg
//Leaf enemy: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz39uCMIJep-nWcx1LmVMPSXQdQlFtQqcsgj0S3fz_lCN7WqwCAw
//Nightime camp: https://vidur.net/wp-content/uploads/2017/04/desktop-fun-starry-skies-wallpaper-collection-series-1-starry-sky-wallpaper.jpg
//Pebble enemy: https://img.etsystatic.com/il/3b232c/188362287/il_fullxfull.188362287.jpg?version=0
//Rat enemy: https://www.pestcontrolindia.com/wp-content/uploads/2016/04/GiantSuperRat05.jpg
//Squirrel that's actually a chipmunk: https://previews.123rf.com/images/dimjul/dimjul1511/dimjul151100012/48961418-funny-animal-farmer-squirrel-with-hay-fork-isolated-on-white.jpg
//Demonic Goose: https://i.pinimg.com/originals/e1/da/b5/e1dab5d597782dad69bf0c2ec20b1d95.jpg
//Robot goose: https://geo-media.beatport.com/image_size/250x250/22a8e8db-1f69-4786-a63f-8e1829659aa7.jpg
//Evil chick: http://photos1.blogger.com/blogger/8182/2311/1600/P1015825.jpg
//Stupid rock joke enemy: https://images-na.ssl-images-amazon.com/images/M/MV5BODYzNzg4MjAxMF5BMl5BanBnXkFtZTgwNDEyODQ0MzI@._CR792,139,275,275_UX402_UY402._SY201_SX201_AL_.jpg
//Slug enemy: https://img00.deviantart.net/d5c3/i/2009/175/1/3/imogen__the_evil_slug_by_carninja.jpg
//Maid enemy: https://vignette.wikia.nocookie.net/cookieclicker/images/7/7f/Grandmas2.jpg/revision/latest?cb=20130831080237
//Cockroach enemy: http://cincinnatizoo.org/wp-content/uploads/2013/03/Madagascar-Hissing-Cockroach.pdf
//Vampire enemy: https://i.ytimg.com/vi/7n2kSeUqHeg/hqdefault.jpg
//Cavern background: https://images4.alphacoders.com/106/106574.jpg
//Kitchen Background: https://c1.staticflickr.com/8/7194/6905558475_fa309c005f_b.jpg
//Mansion background: https://i.pinimg.com/originals/87/83/fe/8783fe4632aa9d719b96848d4b4bb58e.jpg
//Lythia background: https://tokyobling.files.wordpress.com/2011/04/onagawa_town_4.jpg
//Cook enemy: http://members.iinet.net.au/~rabbit/butcher.gif
//Rat enemy: http://db4sgowjqfwig.cloudfront.net/campaigns/143296/assets/622790/dire_rat.png?1469995572
//Vegetbal Enemy: https://www.schwans.com/products/product?id=60421
//Wolf enemy: https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/6/6f/Sad-wolf-by-paperdollll-1.jpg/revision/latest?cb=20160601063754
//Fox Enemy: http://i.imgur.com/Nvcek2c.jpg
//Forest background: http://www.nasa.gov/sites/default/files/thumbnails/image/fire-slideshow1-main.jpg
//Elevator battle music: https://www.youtube.com/watch?v=jj0ChLVTpaA (Uploaded by aeiouFU on Jun 12, 2011. No credit is given on video, leaving credit to uploader.)
//End music: (Waterflame, Wingless) http://www.waterflamemusic.com/
//End resource crediting

//Play some menu music
playSound("assets/FilthyFrank.mp3", false);

//Initial Variable assigning and defining
//Data saving stuff
var player = {};
var playerInventory = {};
var worldInv = {};
//Vars for game
var plyHealth = 5;
var plyMaxHealth = 5;
var plyAttack = 1;
var plyDefense = 1;
var plyLevel = 1;
var plyExp = 0;
var plyGold = 0;
var lvlUp = 0;
var lvlCap = (plyLevel * 15); //Xp needed to lvl each time
//Battle Handling Vars that need to be global
var isChicken = 0;
var battleRun = 0;
var clickBattle;
var debugmonsterhealth;
var monsterHealth = 0;
var monsterStance = "Nothing";
var battleOver = 1;
var monsterNameActual = "nothing";
//World vars
var exploreRoll = 0;
var place1Discovered = 0;
var place2Discovered = 0;
var place3Discovered = 0;
var place4Discovered = 0;
var place5Discovered = 0;
var place6Discovered = 0;
var place1 = "Dark Caverns";
var place2 = "Lythia";
var place3 = "Destroyed Mansion";
var place4 = "Decrepit Kitchen";
var place5 = "Corrupted Forest";
var place6 = "Dave's Emporium";
var monsterType =0;
var worldTime = 700; //Sundown is 6 PM (1800) and sunrise is 7AM (0700)
var days = 0; //going to try and use it as a difficulty modifer for the more days the stronger the monsters you find as well as level. Because hardcore.
//Handling initial menu stuffs
onEvent("titleButton", "click", function() {
  setScreen("loginScreen");
  stopSound();
  playSound("assets/category_objects/metal_click.mp3");
});
onEvent("loadBtn", "click", load);
onEvent("newGameBtn", "click", function() {
  player.loginName = getText("inputUsernameNew");
  player.loginPass = getText("inputPasswordNew");
  createRecord("playerData", player, function(record) {
    console.log("Record "+record+" was created");
  });
  setScreen("menuScreen");
});
onEvent("startGameButton", "click", function() {
  campsite();
  playSound("assets/category_objects/metal_click.mp3");
});
//Handling the campsite (day) screen
onEvent("restButton", "click", function() {
  rest();
  playSound("assets/category_objects/metal_click.mp3");
});
onEvent("inventoryButton","click",function () {
  inventory();
  playSound("assets/category_objects/metal_click.mp3");
});
onEvent("locationsButton","click",function () {
  locations();
  playSound("assets/category_objects/metal_click.mp3");
});
onEvent("exploreButton","click",function (){
  explore();
  playSound("assets/category_objects/metal_click.mp3");
});
//Handling the campsite (night) screen
onEvent("nightRestButton", "click", function() {
  sleep();
  playSound("assets/category_objects/metal_click.mp3");
});
onEvent("nightLocationsButton","click",function () {
  locations();
  playSound("assets/category_objects/metal_click.mp3");
});
onEvent("nightInventoryButton","click",function () {
  inventory();
  playSound("assets/category_objects/metal_click.mp3");
});
//Handling the rest screen
onEvent("okayRestButton", "click", function() {
  campsite();
  playSound("assets/category_objects/metal_click.mp3");
});
//Handling the sleep screen
onEvent("okaySleepButton", "click", function() {
  campsite();
  playSound("assets/category_objects/metal_click.mp3");
});
//Handling the location screen
onEvent("locationBack","click", function() {
  campsite();
  playSound("assets/category_objects/metal_click.mp3");
});
onEvent("locationListButton1","click", function() {
  if(place1Discovered == 1) {
    gotoLoc1();
  }
});
onEvent("locationListButton2","click", function() {
  if(place2Discovered == 1) {
    gotoLoc2();
  }
});
onEvent("locationListButton3","click", function() {
  if(place3Discovered == 1) {
    gotoLoc3();
  }
});
onEvent("locationListButton4","click", function() {
  if(place4Discovered == 1) {
    gotoLoc4();
  }
});
onEvent("locationListButton5","click", function() {
  if(place5Discovered == 1) {
    gotoLoc5();
  }
});
onEvent("locationListButton6","click", function() {
  if(place6Discovered == 1) {
    gotoLoc6();
  }
});
//Handling the explore screen
onEvent("exploreNextButton","click",function (){
  campsite();
  playSound("assets/category_objects/metal_click.mp3");
});
//Handling the inventory Screen
onEvent("inventoryBack","click", function (){
  playSound("assets/category_objects/metal_click.mp3");
  campsite();
});
//Handling the battle win screen
onEvent("winBattleBack","click", function() {
  playSound("assets/category_objects/metal_click.mp3");
  campsite();
});
//Dave's shop handling
onEvent("daveShopBack","click", function() {
  playSound("assets/category_objects/metal_click.mp3");
  campsite();
  return;
});
onEvent("daveShopAttack","click",function() {
  if(plyGold >= 250) {
    plyGold = plyGold - 250;
    playSound("assets/category_instrumental/chime.mp3");
    plyAttack++;
    setText("daveShopGold",plyGold);
    return;
  }
  else {
    playSound("assets/category_digital/failure.mp3");
    return;
  }
});
onEvent("daveShopDefense","click",function() {
  if(plyGold >= 300) {
    plyGold = plyGold - 300;
    playSound("assets/category_instrumental/chime.mp3");
    plyDefense++;
    setText("daveShopGold",plyGold);
    return;
  }
  else {
    playSound("assets/category_digital/failure.mp3");
    return;
  }
});
//Lose battle handler
onEvent("battleLoseBack","click", function() {
  campsite();
});


//functions
function campsite() {
  if ((worldTime < 1800) && (worldTime >= 0700)) {
    save();
    setScreen("campScreen");
    checkLevel();
    setText("expLabel","Experience: "+plyExp+" |Needed Exp: "+lvlCap);
    setText("lvlLabel","Level: "+plyLevel);
    setText("clock",worldTime);
    setText("defenseLabel","Defense: "+plyDefense);
    setText("attackLabel","Attack: "+plyAttack);
    setText("goldLabel","Gold: "+plyGold);
    setText("healthLabel","Health: "+plyHealth);
    setText("dayLabel","Day "+days);
    if (lvlUp == 1) {
      setText("lvlUpLabel","You have leveled up!");
      playSound("assets/category_digital/coin_3.mp3", false);
    }
    else if (lvlUp === 0) {
      setText("lvlUpLabel","");
    }
    lvlUp = 0;
  }
  else {
    save();
    setScreen("nightCampScreen");
    checkLevel();
    setText("nightExpLabel","Experience: "+plyExp+" |Needed Exp: "+(plyLevel*50));
    setText("nightLvlLabel","Level: "+plyLevel);
    setText("nightClock",worldTime);
    setText("nightDefenseLabel","Defense: "+plyDefense);
    setText("nightAttackLabel","Attack: "+plyAttack);
    setText("nightGoldLabel","Gold: "+plyGold);
    setText("nightHealthLabel","Health: "+plyHealth);
    setText("nightDayLabel","Day "+days);
    if (lvlUp == 1) {
      setText("nightLvlUpLabel","You have leveled up!");
      playSound("assets/category_digital/coin_3.mp3", false);
    }
    else if (lvlUp === 0) {
      setText("nightLvlUpLabel","");
    }
    lvlUp = 0;
  }
}
//TODO: Finish working with databasing
function load(){
  var userName = getText("inputUsernameLogin");
  var userPass = getText("inputPasswordLogin");
  player.loginName = userName;
  readRecords("playerData", {loginName:userName}, function(records) {
    if (records.length > 0){
     for (var i = 0; i < records.length; i++) {
       if(records[i].loginPass===userPass){
        plyGold = records[i].money;
        plyAttack = records[i].atk;
        plyDefense = records[i].def;
        plyLevel = records[i].level;
        lvlCap = plyLevel * 15;
        plyExp = records[i].exp;
        place1Discovered=records[i].place1;
        place2Discovered=records[i].place2;
        place3Discovered=records[i].place3;
        place4Discovered=records[i].place4;
        place5Discovered=records[i].place5;
        place6Discovered=records[i].place6;
        campsite();
        setText("loginTextScreen","loaded player "+userName);
       }
       else setText("loginTextScreen","Invalid password");
      }
    }
    else setText("loginTextScreen","Player not found");
  });
}

function save() {
  var userName = player.loginName;
  console.log(userName);
  readRecords("playerData", {loginName:userName},function(records){
    if (records.length > 0){
      for (var i =0; i < records.length; i++) {
        console.log("Save start");
        var updatedRecord=records[i];
        updatedRecord.atk=plyAttack;
        updatedRecord.def=plyDefense;
        updatedRecord.exp=plyExp;
        updatedRecord.money=plyGold;
        updatedRecord.place1=place1Discovered;
        updatedRecord.place2=place2Discovered;
        updatedRecord.place3=place3Discovered;
        updatedRecord.place4=place4Discovered;
        updatedRecord.place5=place5Discovered;
        updatedRecord.place6=place6Discovered;
        updatedRecord.level=plyLevel;
        updatedRecord.id=records[i].id;
        console.log(updatedRecord);
        console.log("Save loop end");
        updateRecord("playerData", updatedRecord, function(record, success) {
        console.log("message: "+success+"\n added "+record)});
        console.log("Saving end");
      }
    }
    else console.log("Saving error!");
  });
}

function rest() {
  setScreen("restScreen");
  plyExp = plyExp + 1;
  checkLevel();
  worldTime = worldTime + 500;
  checkTime();
  plyHealth = (plyHealth - plyHealth) + plyMaxHealth;
}

function sleep() {
  setScreen("sleepScreen");
  plyExp = plyExp + 5;
  checkLevel();
  worldTime = 700;
  days++;
  checkTime();
  plyHealth = (plyHealth - plyHealth) + plyMaxHealth;
}
function checkTime() {
  console.log("Checking time");
  if (worldTime > 2400) {
    setScreen("titleScreen");
    worldTime = worldTime - 2400;
    days++;
  }
  else if (worldTime > 4800) {
    console.log("Double Day");
    worldTime = worldTime - 4800;
    days = days + 2;
  }
  return;
}

function checkLevel() {
  var doRun = plyExp / lvlCap;
  while (doRun >= 1) {
    console.log("player leveled up");
    lvlUp = 1;
    plyExp = plyExp - lvlCap;
    plyLevel = plyLevel + 1;
    plyMaxHealth = plyMaxHealth + Math.round(plyLevel*2.25);
    lvlCap = plyLevel * 15;
    plyAttack = plyAttack + 1;
    plyDefense = plyDefense + 1;
    doRun = plyExp / lvlCap;
  }
  return;
}

function dbugInventory(dbugItemName){ //For debugging the inventory in the console
  var dbugItem = {};
  dbugItem.id = 0;
  dbugItem.itemName = dbugItemName;
  createRecord(playerInventory,dbugItem);
}
//TODO: Add Inventory (Saving will be implemented later)
function getInventory(){
  var temp1 = "You have; ";
  var temp2 = "";
  if (playerInventory.length > 0) {
    for (var i = 0; i <= playerInventory.length; i++){
      temp2 = playerInventory[i].itemName;
      temp1 = ""+temp1+"; "+temp2;
    }
    return temp1;
  }
  else {
    return "You have nothing.";
  }
}
//Turned into a joke, because I just don't have the time to make a fleshed out inventory system with item IDs
function inventory() {
  setScreen("inventoryScreen");
  setText("inventoryLabel",getInventory());
}
function locations() {
  setScreen("locationScreen");
  if (place1Discovered == 1) {
    setText("locationListButton1",place1);
    setProperty("locationListButton1","background-color",rgb(0,255,0));
  }
  else if (place1Discovered != 1) {
    setText("locationListButton1","Undiscovered");
    setProperty("locationListButton1","background-color",rgb(255,0,0));
  }
  if (place2Discovered == 1) {
    setText("locationListButton2",place2);
    setProperty("locationListButton2","background-color",rgb(0,255,0));
  }
  else if (place2Discovered != 1) {
    setText("locationListButton2","Undiscovered");
    setProperty("locationListButton2","background-color",rgb(255,0,0));
  }
  if (place3Discovered == 1) {
    setText("locationListButton3",place3);
    setProperty("locationListButton3","background-color",rgb(0,255,0));
  }
  else if (place3Discovered != 1) {
    setText("locationListButton3","Undiscovered");
    setProperty("locationListButton4","background-color",rgb(255,0,0));
  }
  if (place4Discovered == 1) {
    setText("locationListButton4",place4);
    setProperty("locationListButton4","background-color",rgb(0,255,0));
  }
  else if (place4Discovered != 1) {
    setText("locationListButton4","Undiscovered");
    setProperty("locationListButton4","background-color",rgb(255,0,0));
  }
  if (place5Discovered == 1) {
    setText("locationListButton5",place5);
    setProperty("locationListButton5","background-color",rgb(0,255,0));
  }
  else if (place5Discovered != 1) {
    setText("locationListButton5","Undiscovered");
    setProperty("locationListButton5","background-color",rgb(255,0,0));
  }
  if (place6Discovered == 1) {
    setText("locationListButton6",place6);
    setProperty("locationListButton6","background-color",rgb(0,255,0));
  }
  else if (place6Discovered != 1) {
    setText("locationListButton6","Undiscovered");
    setProperty("locationListButton6","background-color",rgb(255,0,0));
  }
}
function explore() {
  setText("explorationOutput","You wandered aimlessly for awhile.");
  worldTime = worldTime + 300;
  exploreRoll = randomNumber(1,50);
  console.log("Rolled "+exploreRoll);
  setScreen("explorationScreen");
  if (exploreRoll > 40) {
    exploreRoll = randomNumber(1,20);
    // exploreRoll = 15; //Debug code
    if (exploreRoll <= 6) {
      if (exploreRoll == 1 && place1Discovered != 1) {
        place1Discovered = 1;
        setText("explorationOutput","You discovered "+place1+"!");
      }
      if (exploreRoll == 2 && place2Discovered != 1) {
        place2Discovered = 1;
        setText("explorationOutput","You discovered "+place2+"!");
      }
      if (exploreRoll == 3 && place3Discovered != 1) {
        place3Discovered = 1;
        setText("explorationOutput","You discovered "+place3+"!");
      }
      if (exploreRoll == 4 && place4Discovered != 1) {
        place4Discovered = 1;
        setText("explorationOutput","You discovered "+place4+"!");
      }
      if (exploreRoll == 5 && place5Discovered != 1) {
        place5Discovered = 1;
        setText("explorationOutput","You discovered "+place5+"!");
      }
      if (exploreRoll == 6 && place6Discovered != 1) {
        place6Discovered = 1;
        setText("explorationOutput","You discovered "+place6+"!");
      }
    }
    else {
      if (exploreRoll == 7) {
      var fallCoin = randomNumber(Math.round(plyLevel * 0.5),Math.round(plyLevel*13));
      setText("explorationOutput","You found a dead body and decide to poke it with a stick."+"\n"+"+fallCoin+"+"falls out of the body.");      
      plyGold = plyGold + fallCoin;
      }
      if (exploreRoll == 8) {
      setText("explorationOutput","Something happened somewhere, and you'll never be able to know what it was or see it.");
      }
      if (exploreRoll == 9) {
        setText("explorationOutput","A note is left on the ground that reads 'The developer of our beloved world, must have grown impatient and given up on the seriousness of his work."); 
      }
      if (exploreRoll == 10) {
        var tomeRNG = randomNumber(1,3);
        if (tomeRNG == 1){
          setText("explorationOutput","You discover a book.");
        }
        if (tomeRNG == 2){
          setText("explorationOutput","You discover a scroll of ultimate power, but it's stuck to the stone. Ah well.");
        }
        if (tomeRNG == 3){
          plyAttack++;
          plyDefense++;
          setText("explorationOutput","You found a book of battle strategies. +1 attack & +1 defense, until you completley forget everything you just read.");
        }
      }
      if (exploreRoll == 11) {
        var stolenGold = randomNumber(1,plyGold);
        if (0 > stolenGold - plyGold) {
          setText("explorationOutput","A robber gave you a pat on the back after finding little of worth on your person.");
        }
        else {
          plyGold = stolenGold - plyGold;
          setText("explorationOutput","You've been robbed. "+"\n"+"- "+stolenGold+"Gold");
        }
      }
      if (exploreRoll == 12) {
        setText("explorationOutput","You sit on a rock and enjoyed the scenery that was beyond words.");
      }
      if (exploreRoll == 13) {
        setText("explorationOutput","A wooden sign painted with a green ogre head and in red letters 'beware' is on your path.");
      }
      if (exploreRoll == 14) {
        setText("explorationOutput","A wooden house village is in the distance, you can faintly see flames emerging. Probably best to stray away.");
      }
      if (exploreRoll == 15) {
        setText("explorationOutput","You pick up a note from the ground:"+ "\n" + "'The chicken is real.'"+"\n"+"The chicken is your path to escape.");
      }
      if (exploreRoll == 16) {
        setText("explorationOutput","It starts to rain chickens, you head back to your camp to seek shelter from the poultry hail.");
      }
      if (exploreRoll == 17) {
        setText("explorationOutput","A wooden sign that reads 'Placeholder' and beyond is merely flat ground for as far as the eye can see. You decide it's probably time to go home.");
      }
      if (exploreRoll == 18) {
        setText("explorationOutput","The ground begins to tremble as a crack in the Earth opens up and a colossal blob of spaghetti with meatballs for eyes emerges and ascends above the sky, which has convienently turned marinara red.");
      }
      if (exploreRoll == 19) {
        setText("explorationOutput","You trip and fall on flat ground. You spend the next hour crying in shame.");
      }
      if (exploreRoll == 20) {
        setText("explorationOutput","You decide to take a quick nap instead.");
      }
    }
    
    //end random events

  }
  else if (exploreRoll <= 30) {
    setText("explorationOutput","A monster has appeared!");
    var extraCheck = 1;
    onEvent("exploreNextButton","click",function() {
      if (extraCheck == 1) {
      exploreEncounter();
      extraCheck = 0;
      }
      else if (extraCheck === 0) {
        campsite();
      }
    });
  }
}
//Location functions
//TODO: Add images to enemies (and source)
function gotoLoc1() {
  //Dark cavern
  var enemyType = randomNumber(1,3);
  if(enemyType == 1) {
    monsterNameActual = "Unimpressed Rock";
    setImageURL("cavernBattleImage","assets/MV5BODYzNzg4MjAxMF5BMl5BanBnXkFtZTgwNDEyODQ0MzI@._CR792,139,275,275_UX402_UY402._SY201_SX201_AL_.jpg");
    battle("cavernBattleScreen","cavernBattleEnemyHealth","cavernBattlePlayerHealth","cavernBattleEnemyTitle",5,2,"cavernBattleAttackButton","cavernBattleDefenseButton","cavernBattleRiskyAttack","cavernBattleOutcome","assets/ElevatorMusic.mp3",true);
    return;
  }
  else if(enemyType == 2) {
    monsterNameActual = "Gnarly Narwhal";
    setImageURL("cavernBattleImage", "assets/1676985_1.jpg");
    battle("cavernBattleScreen","cavernBattleEnemyHealth","cavernBattlePlayerHealth","cavernBattleEnemyTitle",5,2,"cavernBattleAttackButton","cavernBattleDefenseButton","cavernBattleRiskyAttack","cavernBattleOutcome","assets/ElevatorMusic.mp3",true);
    return;
  }
  else if(enemyType == 3) {
    monsterNameActual = "Sadistic Slug";
    setImageURL("cavernBattleImage","assets/imogen__the_evil_slug_by_carninja.jpg");
    battle("cavernBattleScreen","cavernBattleEnemyHealth","cavernBattlePlayerHealth","cavernBattleEnemyTitle",5,2,"cavernBattleAttackButton","cavernBattleDefenseButton","cavernBattleRiskyAttack","cavernBattleOutcome","assets/ElevatorMusic.mp3",true);
    return;
  }
  return;
}
function gotoLoc2() {
  //Lythia
  var enemyType = randomNumber(1,3);
  if(enemyType == 1) {
    monsterNameActual = "Demonic Chick";
    setImageURL("lythiaBattleImage","assets/P1015825.jpg");
    battle("lythiaBattleScreen","lythiaBattleEnemyHealth","lythiaBattlePlayerHealth","lythiaBattleEnemyTitle",40,10,"lythiaBattleAttackButton","lythiaBattleDefenseButton","lythiaBattleRiskyAttack","lythiaBattleOutcome","assets/ElevatorMusic.mp3",true);
    return;
  }
  else if(enemyType == 2) {
    monsterNameActual = "Gruesome Goose";
    setImageURL("lythiaBattleImage","assets/e1dab5d597782dad69bf0c2ec20b1d95.jpg");
    battle("lythiaBattleScreen","lythiaBattleEnemyHealth","lythiaBattlePlayerHealth","lythiaBattleEnemyTitle",40,10,"lythiaBattleAttackButton","lythiaBattleDefenseButton","lythiaBattleRiskyAttack","lythiaBattleOutcome","assets/ElevatorMusic.mp3",true);
    return;
  }
  else {
    var roll2 = (randomNumber(1,10));
    if (roll2 >= 7){
      setScreen("chickenBattleScreen");
      isChicken = 1;
      monsterNameActual = "C H I C K E N";
      setImageURL("chickenBattleImage","assets/4509975_f260_1386891459.jpg");
      battle("chickenBattleScreen","chickenBattleEnemyHealth","chickenBattlePlayerHealth","chickenBattleEnemyTitle",75,100,"chickenBattleAttackButton","chickenBattleDefenseButton","chickenBattleRiskyAttack","chickenBattleOutcome","assets/KR-Serenity.mp3",true);
      return;
    }
    else {
    monsterNameActual = "Mecha Goose";
    setImageURL("lythiaBattleImage","assets/22a8e8db-1f69-4786-a63f-8e1829659aa7.jpg");
    battle("lythiaBattleScreen","lythiaBattleEnemyHealth","lythiaBattlePlayerHealth","lythiaBattleEnemyTitle",35,8,"lythiaBattleAttackButton","lythiaBattleDefenseButton","lythiaBattleRiskyAttack","lythiaBattleOutcome","assets/ElevatorMusic.mp3",true);
    return;
    }
  }
  return;
}
function gotoLoc3() {
  var enemyType = randomNumber(1,3);
  setScreen("mansionBattleScreen");
  if(enemyType == 1) {
    monsterNameActual = "Disgruntled Maid";
    setImageURL("mansionBattleImage","assets/Grandmas2.jpg");
    battle("mansionBattleScreen","mansionBattleEnemyHealth","mansionBattlePlayerHealth","mansionBattleEnemyTitle",10,4,"mansionBattleAttackButton","mansionBattleDefenseButton","mansionBattleRiskyAttack","mansionBattleOutcome","assets/ElevatorMusic.mp3",true);
    return;
  }
  else if(enemyType == 2) {
    monsterNameActual = "Crunchy Cockroach";
    setImageURL("mansionBattleImage","assets/download.jpg");
    battle("mansionBattleScreen","mansionBattleEnemyHealth","mansionBattlePlayerHealth","mansionBattleEnemyTitle",10,4,"mansionBattleAttackButton","mansionBattleDefenseButton","mansionBattleRiskyAttack","mansionBattleOutcome","assets/ElevatorMusic.mp3",true);
    return;
  }
  else {
    monsterNameActual = "Volupscious Vampire";
    setImageURL("mansionBattleImage","assets/hqdefault.jpg");
    battle("mansionBattleScreen","mansionBattleEnemyHealth","mansionBattlePlayerHealth","mansionBattleEnemyTitle",10,4,"mansionBattleAttackButton","mansionBattleDefenseButton","mansionBattleRiskyAttack","mansionBattleOutcome","assets/ElevatorMusic.mp3",true);
    return;
  }
  return;
}
function gotoLoc4() {
  var enemyType = randomNumber(1,3);
  setScreen("kitchenBattleScreen");
  if(enemyType == 1) {
    monsterNameActual = "Colossal Cook";
    setImageURL("kitchenBattleImage","assets/butcher.gif");
    battle("kitchenBattleScreen","kitchenBattleEnemyHealth","kitchenBattlePlayerHealth","kitchenBattleEnemyTitle",20,5,"kitchenBattleAttackButton","kitchenBattleDefenseButton","kitchenBattleRiskyAttack","kitchenBattleOutcome","assets/ElevatorMusic.mp3",true);
    return;
  }
  else if(enemyType == 2) {
    monsterNameActual = "Ravenous Rat";
    setImageURL("kitchenBattleImage","assets/dire_rat.png");
    battle("kitchenBattleScreen","kitchenBattleEnemyHealth","kitchenBattlePlayerHealth","kitchenBattleEnemyTitle",20,5,"kitchenBattleAttackButton","kitchenBattleDefenseButton","kitchenBattleRiskyAttack","kitchenBattleOutcome","assets/ElevatorMusic.mp3",true);
    return;
  }
  else {
    monsterNameActual = "Viscous Vegetable";
    setImageURL("kitchenBattleImage","assets/veggyweggy.jpg");
    battle("kitchenBattleScreen","kitchenBattleEnemyHealth","kitchenBattlePlayerHealth","kitchenBattleEnemyTitle",20,5,"kitchenBattleAttackButton","kitchenBattleDefenseButton","kitchenBattleRiskyAttack","kitchenBattleOutcome","assets/ElevatorMusic.mp3",true);
    return;
  }
  return;
}
function gotoLoc5() {
  var enemyType = randomNumber(1,3);
  setScreen("forestBattleScreen");
  if(enemyType == 1) {
    monsterNameActual = "Woeful Wolf";
    setImageURL("forestBattleImage","assets/Sad-wolf-by-paperdollll-1.jpg");
    battle("forestBattleScreen","forestBattleEnemyHealth","forestBattlePlayerHealth","forestBattleEnemyTitle",30,8,"forestBattleAttackButton","forestBattleDefenseButton","forestBattleRiskyAttack","forestBattleOutcome","assets/UW_Understatement.mp3",true);
    return;
  }
  if(enemyType == 2) {
    monsterNameActual = "Funky Fox";
    setImageURL("forestBattleImage","assets/Nvcek2c.jpg");
    battle("forestBattleScreen","forestBattleEnemyHealth","forestBattlePlayerHealth","forestBattleEnemyTitle",30,8,"forestBattleAttackButton","forestBattleDefenseButton","forestBattleRiskyAttack","forestBattleOutcome","assets/UW_Understatement.mp3",true);
    return;
  }
  else {
    monsterNameActual = "Terrifying Tree";
    setImageURL("forestBattleImage","assets/evil_tree_by_mikithemaus.jpg");
    battle("forestBattleScreen","forestBattleEnemyHealth","forestBattlePlayerHealth","forestBattleEnemyTitle",30,8,"forestBattleAttackButton","forestBattleDefenseButton","forestBattleRiskyAttack","forestBattleOutcome","assets/UW_Understatement.mp3",true);
    return;
  }
  return;
}
function gotoLoc6() {
  playSound("assets/category_objects/metal_click.mp3");
  if (place6Discovered == 1) {
    setScreen("daveShopScreen");
    setText("daveShopGold",plyGold);
  }
}

function exploreEncounter() {
  monsterType = randomNumber(1,5);
  //No chickens were involved in the making of this game.
  if (((monsterType + randomNumber(1,5)) + randomNumber(1,5)) == 15) {
    monsterNameActual = "Not a chicken";
    setImageURL("explorationBattleImage","assets/chicken-main_0.jpg");
    battle("exploreBattleScreen","exploreBattleEnemyHealth","exploreBattlePlayerHealth","explorationBattleEnemyTitle",15,10,"exploreBattleAttackButton","exploreBattleDefenseButton","exploreBattleRiskyAttack","exploreBattleOutcome","assets/ElevatorMusic.mp3",true);
  }
  else if (monsterType == 1) {
    monsterNameActual= "Murderous Squirrel";
    setImageURL("explorationBattleImage", "assets/stock-photo-funny-animal-farmer-squirrel-with-hay-fork-isolated-on-white-342466808.jpg");
    battle("exploreBattleScreen","exploreBattleEnemyHealth","exploreBattlePlayerHealth","explorationBattleEnemyTitle",1,1,"exploreBattleAttackButton","exploreBattleDefenseButton","exploreBattleRiskyAttack","exploreBattleOutcome","assets/ElevatorMusic.mp3",true);
  }
  else if (monsterType == 2) {
    monsterNameActual= "Killer Rabbit";
    setImageURL("explorationBattleImage", "assets/killerRabbit.jpeg");
    battle("exploreBattleScreen","exploreBattleEnemyHealth","exploreBattlePlayerHealth","explorationBattleEnemyTitle",1,1,"exploreBattleAttackButton","exploreBattleDefenseButton","exploreBattleRiskyAttack","exploreBattleOutcome","assets/ElevatorMusic.mp3",true);
  }
  else if (monsterType == 3) {
    monsterNameActual = "Quarrelous Rat";
    setImageURL("explorationBattleImage","assets/ratofdeath.jpg");
    battle("exploreBattleScreen","exploreBattleEnemyHealth","exploreBattlePlayerHealth","explorationBattleEnemyTitle",1,1,"exploreBattleAttackButton","exploreBattleDefenseButton","exploreBattleRiskyAttack","exploreBattleOutcome","assets/ElevatorMusic.mp3",true);
  }
  else if (monsterType == 4) {
    monsterNameActual = "Angry Leaf";
    setImageURL("explorationBattleImage","assets/leaf.jpg");
    battle("exploreBattleScreen","exploreBattleEnemyHealth","exploreBattlePlayerHealth","explorationBattleEnemyTitle",1,1,"exploreBattleAttackButton","exploreBattleDefenseButton","exploreBattleRiskyAttack","exploreBattleOutcome","assets/ElevatorMusic.mp3",true);
  }
  else if (monsterType == 5) {
    monsterNameActual = "Dissatisfied Pebble";
    setImageURL("explorationBattleImage","assets/pebble.jpg");
    battle("exploreBattleScreen","exploreBattleEnemyHealth","exploreBattlePlayerHealth","explorationBattleEnemyTitle",1,1,"exploreBattleAttackButton","exploreBattleDefenseButton","exploreBattleRiskyAttack","exploreBattleOutcome","assets/ElevatorMusic.mp3",true);
  }
  return;
}
//Battle Stuff
var evilOutcome = "O hecc, something borked";
var plyOutcome = "O hecc, something borked"; //Creating string variables, and a family friendly error statement

function battle(screen,healthLabel,playerHealthLabel,nameLabel,minimumLevel,difficulty,attackButton,defendButton,riskButton,battleOutput,music,musicLoop) {
    //Handling the ending of the function
    var battleRunIn = 0;
    battleRun = 0;
    if (!(checkQuality())){
      return;
    }
    //
    playSound(music,musicLoop);
    setScreen(screen);
    //Setting up the battle
    var roll = 0;
    var monsterLevelChance = plyLevel + difficulty + Math.round(days * 0.25);
    var monsterLevel = randomNumber(minimumLevel,monsterLevelChance);
    monsterHealth = randomNumber((minimumLevel*5), monsterLevel*5);
    var monsterAttack = randomNumber(minimumLevel,monsterLevel);
    var monsterDefense = randomNumber(minimumLevel,monsterLevel);
    var monRoundAttack = 0;
    var monRoundDefense = 0;
    var plyStarts = (plyLevel - monsterLevel);
    var monsterName = monsterNameActual+" Lvl. "+monsterLevel;
    var plyRoundDefense = 0;
    var plyRoundAttack = 0;
    var monsterNumStance = 2;
    debugmonsterhealth=monsterHealth;
    update(healthLabel,battleOutput,playerHealthLabel,nameLabel,monsterName,monsterLevel);
    if(isChicken == 1){
      monsterHealth = 1000;
      monsterAttack = 20;
      monsterDefense = 30;
    }    
    
      if (plyStarts >= 0) {
        plyOutcome = "You got first turn!";
        evilOutcome = monsterName+" lost the chance to have first turn!";
      }
      else {
        plyOutcome = "You lost chance at first turn!";
        evilOutcome = monsterName+" has gained first turn!";
        evilRetaliate();
      }
      updateOutcome(battleOutput);
      //Actual battle params
      //Attack button to do standard attack
      onEvent(attackButton,"click",function() {
        if (!(checkQuality())){
          return;
        }
        battleRun++;
        battleRunIn++;
        var dmgDone;
        clickBattle = 1;
        plyRoundDefense = randomNumber(0,Math.round(plyDefense*0.5));
        if (plyAttack == randomNumber(1,100)) {
          dmgDone = plyAttack;
          plyOutcome = "You landed a crit and did "+dmgDone+" damage!";
          monsterHealth = monsterHealth - dmgDone;
        }
        else {
          if ((plyAttack - 5) <= 0) {
           dmgDone = randomNumber(1,plyAttack);
         }
         else if ((plyAttack - 5) > 0) {
            dmgDone = randomNumber((plyAttack - 5),plyAttack);
          }
          else {
           console.log("something broke");
          }
         monsterHealth = monsterHealth - dmgDone;
          plyOutcome = "You did "+dmgDone+" damage!";
      }
        updateOutcome(battleOutput);
        update(healthLabel,battleOutput,playerHealthLabel,nameLabel,monsterName,monsterLevel);
        evilRetaliate();
        return;
      });
      //Button to run a defensive stance
      onEvent(defendButton,"click",function() {
        if (!(checkQuality())){
          return;
        }
        battleRun++;
        battleRunIn++;
        clickBattle = 1;
        plyRoundDefense = plyDefense;
        plyRoundAttack = randomNumber(0,(Math.round(plyAttack*0.75)));
        console.log("player attack roll was "+plyRoundAttack);
        if (plyRoundAttack == randomNumber(0,100)) {
          monsterHealth = monsterHealth - plyRoundAttack;
          plyOutcome = "You got a crit while defending! Dealt "+plyRoundAttack+" damage.";
        }
        else {
          if (plyRoundAttack > monRoundDefense) {
            monsterHealth = plyRoundAttack - monsterHealth;
            plyOutcome = "You landed a hit while defending. Dealt "+plyRoundAttack+" damage.";
          }
          else {
            plyOutcome = "Your hit did nothing.";
          }
        }
        updateOutcome(battleOutput);
        update(healthLabel,battleOutput,playerHealthLabel,nameLabel,monsterName,monsterLevel);
        evilRetaliate();
        return;
      });
      onEvent(riskButton,"click",function(){
        if (!(checkQuality())){
          return;
        }
        battleRun++;
        battleRunIn++;
        clickBattle = 1;
        roll = randomNumber(1,10);
        if (roll == randomNumber(1,10)) {
          plyRoundDefense = randomNumber(1,plyDefense);
          monsterHealth = monsterHealth - plyAttack*2;
          plyOutcome = "You landed a super crit! You did "+(plyAttack*2)+" damage.";
        }
        else {
          plyRoundDefense = 0;
          plyHealth = plyHealth - plyAttack;
          plyOutcome = "You trip while trying to attack. -"+plyAttack+" health.";
        }
        updateOutcome(battleOutput);
        update(healthLabel,battleOutput,playerHealthLabel,nameLabel,monsterName,monsterLevel);
        //All buttons run evil retalition at end
        evilRetaliate();
        return;
      });
      function setMonsterStance() {
        var stance = randomNumber(0,5);
        if (stance > 3) {
          monRoundDefense = monsterDefense;
          monRoundAttack = (Math.round(0.75*monsterAttack));
          monsterStance = monsterName+" chose a defensive stance.";
          monsterNumStance = 0;
        }
        else if (stance <= 3) {
          monRoundDefense = randomNumber(minimumLevel,monsterDefense);
          monRoundAttack = randomNumber((minimumLevel),(monsterAttack+1));
          monsterStance = monsterName+" chose an offensive stance.";
          monsterNumStance = 1;
        }
      }
      function evilRetaliate() {
        if (!(checkQuality())){
          return;
        }
        if (clickBattle !== 0) {
          clickBattle = 0;
          setMonsterStance();
          var dmg = randomNumber(monRoundAttack);
          var attackChance = dmg - plyRoundDefense;
          if (attackChance === randomNumber(minimumLevel,monsterLevel)){
            plyHealth = plyHealth - monRoundAttack;
            evilOutcome = monsterName+" landed a "+dmg+" damage crirtical! OOF.";
            update(healthLabel,battleOutput,playerHealthLabel,nameLabel,monsterName,monsterLevel);
          }
          else if (attackChance > 0) {
            plyHealth = plyHealth - dmg;
            evilOutcome = monsterName+" did "+dmg+" damage";
            update(healthLabel,battleOutput,playerHealthLabel,nameLabel,monsterName,monsterLevel);
          }
          else if (attackChance <= 0) {
            evilOutcome = monsterName+" was stopped by your defense!";
            update(healthLabel,battleOutput,playerHealthLabel,nameLabel,monsterName,monsterLevel);
         }
        }
      }
      //Made to ensure that the function constantly running does not cause problems
      function checkQuality() {
        return battleRun == battleRunIn;
      }
    
}
function updateOutcome(output) {
  setText(output,plyOutcome+ "\n" + monsterStance+ "\n" +evilOutcome);
  return;
}
      function update(hLabel,bOutput,plyHealthLabel,nameLabel,monsterName,monsterLevel) {
        setText(hLabel,monsterHealth);
        setText(plyHealthLabel,plyHealth);
        setText(nameLabel,monsterName);
        updateOutcome(bOutput);
         //Lose
         if (plyHealth <= 0) {
           stopSound();
           console.log("lose ran");
          setScreen("battleLoseScreen");
          var lostPlyExp = Math.round(plyExp*0.10);
          var lostPlyGold = Math.round(plyGold*0.25);
          plyExp = plyExp - lostPlyExp;
          plyGold = plyGold - lostPlyGold;
          setText("loseBattleGoldOut","You lost "+lostPlyGold+" gold");
          setText("loseBattleExpOut","You lost "+lostPlyExp+" XP");
          plyHealth=1;
          isChicken = 0;
          battleOver = 1;
          }
         //Win
          if (monsterHealth <= 0) {
             if (isChicken == 1){
               endGame();
             }
             else {
                console.log("win ran");
                stopSound();
                  var givenPlyExp = (monsterLevel*randomNumber(2,3));
                  var givenPlyGold = (monsterLevel *randomNumber(2,7));
                  plyExp = givenPlyExp + plyExp;
                  plyGold = givenPlyGold + plyGold;
                  setText("winBattleGoldOutput","You gained "+givenPlyGold+" gold");
                  setText("winBattleExpOutput","You gained "+givenPlyExp+" XP");
                  setScreen("battleWinScreen");
                  battleOver = 1;
              }
          }
  return;
}
function endGame() {
  console.log("end game");
  stopSound();
  if (monsterHealth <= 0) {
  setScreen("gameWinScreen");
  playSound();
  battleOver = 1;
  }
}
// Depricated and replaced with the debug login.
// function debugCheat(lvl,gold,discoverLocs) {
//   plyGold += gold;
//   plyExp += lvl*15;
//   checkLevel();
//   if (discoverLocs){
//     place1Discovered = 1;
//     place2Discovered = 1;
//     place3Discovered = 1;
//     place4Discovered = 1;
//     place5Discovered = 1;
//     place6Discovered = 1;
//   }
//   return;
// }
//White space to help with scrolling





                                              






