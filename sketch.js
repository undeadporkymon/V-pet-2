var food;
var foodStock;
var time;
function preload()
{
dogImg1 = loadImage("dogImg.png");
dogImg2 = loadImage("dogImg1.png");
milkImg = loadImage("Milk.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
dog = createSprite(250,250,200,200);
dog.addImage(dogImg1);
dog.scale = .2
food = new Food()


feed = createButton("Feed");
feed.position(400,200);
feed.mousePressed(feedDog)

addFood = createButton("Buy Food")
addFood.position(400,150)
addFood.mousePressed(addFoods)
time = new Time()
time.getTime()
}


function draw() {  
background(46,139,87)
  drawSprites();
fill("black")
textSize(40)
food.getFoodStock()
text("food amount:"+ foodStock , 150, 50);
food.display()
textSize(20)
text("last fed:  " + time,150,130)
}


function feedDog(){

food.deduct()
food.updater(foodStock)
time.timeUpdater(hour())
}

function addFoods(){

food.plus()
food.updater(foodStock)

}