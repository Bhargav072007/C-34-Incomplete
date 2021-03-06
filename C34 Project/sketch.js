//Create variables here
var dog, normDog, happyDog, database, foodS, foodStock;


function preload()
{
	//load images here
  normDog = loadImage("images/dog.png");
  normDog.size = 2;
  happyDog = loadImage("images/happyDog.png");
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(250,250,10,10);
  dog.addImage(normDog);

  database = firebase.database();
  
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
  
}


function draw() {
  background(46,139,87);  

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here
  
}

function readStock(data){
  foodS-data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
  x=x-1;
}
  
  database.ref("/").update({
    Food:x
  })
}



