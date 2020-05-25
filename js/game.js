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
      
      Player.getPlayerInfo();
      player.getCarsAtEnd();
      
      if(allPlayers !== undefined){
        //background(rgb(198,135,103));
        image(track,0,-displayHeight*15,displayWidth,displayHeight*16);
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 175 ;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x +200;
          allPlayers[plr].xdis = x ;
         // player.update();                  
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
          cars[index-1].x = allPlayers[plr].xdis;
          cars[index-1].y = y;
         // console.log(index, player.index)
         //console.log(cars[index-1]);
          console.log(allPlayers[plr].xdis);
          if (index === player.index){
            stroke(10);
            fill("red");
            ellipse(x,y,100,100);
            cars[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y;
            if(allPlayers[plr].xdis<50 ){
             allPlayers[plr].health--;
             player.update();
            console.log(allPlayers[plr].health);
            }
            if(allPlayers[plr].xdis>1250){
             allPlayers[plr].health--;
             player.update();
            }

          }
         
          textSize(15);
          text(allPlayers[plr].health, cars[index-1].x,cars[index-1].y)
        }
  
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
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
      /*if(keyIsDown(DOWN_ARROW) && player.index !== null){
        player.distance -=10
        player.update();
      }*/
  
      if(player.distance > 38600){
        gameState = 2;
        player.rank += 1;
        Player.updateEnd(player.rank);
        textSize(30);
        text("GameOver!      Rank :" +player.rank,displayWidth/2,-displayHeight*4 - 100 );
      }
     
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");
    }
  }
  