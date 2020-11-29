class Food {

    constructor(){

    }

getFoodStock(){
var foodRef = database.ref('Food')
foodRef.on("value",(data)=>{
foodStock = data.val();

  })

}
updater(cool){
    database.ref('/').update({
        Food: cool
      });
}
deduct(){
    foodStock = foodStock - 1

}
plus(){
   foodStock =foodStock + 1

}

display(){


var Xpos = 10
var MilkAmt = foodStock; 
for(var i = 0; i < foodStock; i++){
Xpos = Xpos + 15
image(milkImg, Xpos, 400, 20,20);
}


}

}