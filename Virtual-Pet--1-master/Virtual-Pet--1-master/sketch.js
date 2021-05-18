//Create variables here
var dogImg,dogImg1 ;
var foodS,foodStock;
var database;

function preload()
{
	//load images here
  dog_img = loadImage("./images/dogImg.png")
  happyDog_img = loadImage("./images/dogImg1.png")
}

function setup() {
  database = firebase.database();
	createCanvas(800, 700);

  dog = createSprite(400,350);
  dog.addImage("dogImg",dog_img)
  var foodStock = database.ref('Food')
  foodStock.on("value",readStock)


  
}


function draw() {  

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dogImg.addImage(happyDog_img)
  }

  drawSprites();
  //add styles here
  Text('food remaining',200,100)
  textSize(30);

}

function readStock(data){
  foodS = data.val()
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}


