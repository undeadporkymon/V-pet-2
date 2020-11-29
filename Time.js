class Time {

    constructor(){

    }

    getTime(){
        var timeRef = database.ref('Time')
        timeRef.on("value",(data)=>{
        time = data.val();
        
          })
        
        }

timeUpdater(cool){
    database.ref('/').update({
        Time: cool
      });
}

}