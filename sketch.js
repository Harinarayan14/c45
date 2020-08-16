
var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var o1,o2;
var f = -1000;
var h = -1300;
var form, player, game;

var cars=[], car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("./images/track2.jpg");
  car1_img = loadImage("./images/car1.png");
  car2_img = loadImage("./images/car2.png");
  car3_img = loadImage("./images/car3.png");
  car4_img = loadImage("./images/car4.png");
  powerupI = loadImage("./images/powerup.png");
  obstacleI = loadImage("./images/obstacle.png")
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  O = new Group();
  Power = new Group();
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    if(frameCount%50===0){
      f-=random(1000,1250);
      o1 = createSprite(random(250,1250),f,150,10);
      o1.addImage(obstacleI);
      O.add(o1);
    }
    console.log(O.maxDepth());
    for(var a =0;a<O.maxDepth();a++){
      var g = O.get(a);
      console.log(g);
      //if(g!=null){
      for(var b =0;b<cars.length;b++){
       if(g!=null && g.isTouching(cars[b])){
        console.log(g);
        player.health-=20;
         g.destroy();
         player.update();
        }
      }
    }
    if(frameCount%70===0){
      h-=random(1000,1250);
      powerup1 = createSprite(random(250,1250),h,150,10);
      powerup1.addImage(powerupI);
      Power.add(powerup1);

    }
    for(var c =0;c<Power.maxDepth();c++){
      var p1 = Power.get(c);
      console.log(p1);
      for(var d =0;d<cars.length;d++){
       if(p1!=null && p1.isTouching(cars[d])){
        console.log(p1);
        player.health+=20;
         p1.destroy();
         player.update();
        }
      }
    }
  }
  if(gameState === 2){
    game.end();
  }
  
}

