class Form{
constructor(){
    this.input = createInput("Name");
    this.button = createButton("Play");
    this.title= createElement("h1");
    this.greeting = createElement("h2");
    this.greeting1 = createElement("h2");
    this.reset = createButton('Reset');
    this.rule = createElement("h2");
    this.rule1 = createElement("h3");
    this.rule2 = createElement("h3");
    this.rule3 = createElement("h3");
    this.rule4 = createElement("h3");
    
}
hide1(){
    
    this.input.hide();
    this.button.hide();
    this.title.hide();
    this.greeting.hide();
    this.greeting1.hide();
    this.rule.hide();
    this.rule1.hide();
    this.rule2.hide();
    this.rule3.hide();
    this.rule4.hide();
}
 display(){
    this.title.position(displayWidth/2 - 250, 0);
    line(400,0,400,displayHeight);
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);
     this.title.html("World Car Racing Championship");
     this.rule.html("Rules");
     this.rule.position(10,displayHeight/4);
     this.rule1.html("Avoid obstacles and Don't go out of the Track.");
     this.rule1.position(10,displayHeight/4 + 75);
     this.rule2.html("Use Arrow Keys to Move");
     this.rule2.position(10,displayHeight/4 + 50);
     this.rule3.html("Use PowerUps to increase health.");
     this.rule3.position(10,displayHeight/4 + 100);
     this.rule4.html("You lose if your health reaches 0.");
     this.rule4.position(10,displayHeight/4 + 125);
     this.button.mousePressed(()=>{
         this.input.hide();
         this.button.hide();
         player.name = this.input.value();
         playerCount++;
         player.index = playerCount;
         player.updatePlayerCount(playerCount);
         switch(player.index){
             case 1 :  player.xdis= 285;
             break;
             case 2 :  player.xdis= 555;
             break;
             case 3 :  player.xdis= 805;
             break;
             case 4 :  player.xdis= 1075;
             break;
         }
         player.update();
         this.greeting.html("Hello " + player.name +"!!!");
         this.greeting.position(displayWidth/3,displayHeight/3);
         this.greeting1.html("Waiting For Other Players");
         this.greeting1.position(displayWidth/3 -50,displayHeight/3 + 100);
        

     })
     
    this.reset.mousePressed(()=>{
        player.updatePlayerCount(0);
        game.update(0);
        Player.updateEnd(0);
        database.ref("/").update({
            players : null
        })
      });
 }

}