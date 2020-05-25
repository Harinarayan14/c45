class Player{
    constructor(){
        this.name = null;
        this.index =0;
        this.distance =0;
        this.rank =0;
        this.health =200;
        this.xdis = 0;

}
getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }
updatePlayerCount(playerCount){
   database.ref("/").update({
       playerCount: playerCount
   })
}
update(){
   var ind = "players/player" + this.index;
   database.ref(ind).update({
       name : this.name,
       distance : this.distance,
       health : this.health,
       xdis:this.xdis
   })
}

static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  static updateEnd(rank){
   database.ref("/").update({
     CarsAtEnd : rank
   })
  }

  getCarsAtEnd(){
    var CarsAtEndref = database.ref("CarsAtEnd");
    CarsAtEndref.on("value",(data)=>{
     this.rank = data.val();
    })
  }
}
