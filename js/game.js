class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      car1 = createSprite(100,200);
      car1.addImage("car1",car1_img);
      car2 = createSprite(300,200);
      car2.addImage("car2",car2_img);
      car3 = createSprite(500,200);
      car3.addImage("car3",car3_img);
      car4 = createSprite(700,200);
      car4.addImage("car4",car4_img);
      cars = [car1, car2, car3, car4];
    }
  
    play(){
      form.hide1();
      
      image(track,0,-displayHeight*135,displayWidth,displayHeight*136);
      Player.getPlayerInfo();
      player.getCarsAtEnd();
      var index = 0;
      if(allPlayers !== undefined){
       // var obstacle = new Obstacles();
        //var powerup = new Powerups();
        //obstacle.check();
        //background(rgb(198,135,103));
        //var display_position = 100;
        
        //index of the array
  
        //x and y position of the cars
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction   
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
          cars[index-1].x = allPlayers[plr].xdis;
          cars[index-1].y = y;
         // console.log(index, player.index)
         //console.log(cars[index-1]);
         // console.log(allPlayers[plr].xdis);
          if (index === player.index){
            stroke(10);
            fill("red");
            ellipse(allPlayers[plr].xdis,y,150,150);
            cars[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y;
            textSize(25);
            text("Health : "+ player.health,displayWidth/2,cars[index-1].y -250);
            textSize(20);
            text("Distance Covered : "+ player.distance/1000 +"Km",displayWidth/2,cars[index-1].y -225);
            var dis = 103500 - player.distance;
            textSize(20);
            text("Distance Left : "+ dis/1000 +"Km",displayWidth/2,cars[index-1].y -200);
            console.log(player.health);
      if(cars[index-1].isTouching(o1)){
        o1.destroy();
        player.health-=20;
        player.update();
        //console.log("hello");
      }
            /*fill(255);
            stroke(255);
            textSize(25);
            text(player.health,cars[index-1].x,cars[index-1].y + 100);
            if(allPlayers[plr].xdis<50 ){
             allPlayers[plr].health--;
             player.update();
            console.log(allPlayers[plr].health);
            }
            if(allPlayers[plr].xdis>1250){
             allPlayers[plr].health--;
             player.update();
            }*/
  
          }
         
        }
  
      }
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=25;
        player.update();
     }
     if(keyIsDown(LEFT_ARROW) && player.index !== null){
       player.xdis -=10
       player.update();
    }
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.xdis +=10
      player.update();
   }
   if(player.health<=0){
     gameState=2;
     textSize(50);
     text("You Lose !!!",200,200);
   }
      /*if(keyIsDown(DOWN_ARROW) && player.index !== null){
        player.distance -=10
        player.update();
      }*/
  
      if( player.xdis<125 || player.xdis>1250){
        player.health-=10;
        player.xdis = displayWidth/2 ;
        player.update();
      }
      drawSprites();
      if(player.distance > 103500){
        gameState = 2;
        player.rank += 1;
        Player.updateEnd(player.rank);
        textSize(30);
        text("GameOver!      Rank :" +player.rank,displayWidth/2-50,-displayHeight*134 +10 );
      }
     


  }
  
  
  end(){
    console.log("Game Ended");
  }
}
  