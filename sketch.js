
var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var o1,o2;
var f = -1000;
var form, player, game;

var cars=[], car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("../images/track2.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  O = createGroup();
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
    if(frameCount%50===0){
      f-=random(1000,1250);
      o1 = createSprite(random(250,1250),f,150,10);
      o1.shapeColor="yellow";
      O.add(o1);

    }
    console.log(O.maxDepth());
    for(var a =0;a<O.maxDepth();a++){
      var g = O.get(a);
      console.log(g);
      if(g!==null){
      for(var b =0;b<cars.length;b++){
       if(g.isTouching(cars[b])){
        console.log(g);
        player.health-=20;
         g.destroy();
        }
      }
    }
  }
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  
}

