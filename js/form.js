class Form{
constructor(){
    this.input = createInput("Name");
    this.button = createButton("Play");
    this.title= createElement("h1");
    this.greeting = createElement("h3");
    
}
hide1(){
    
    this.input.hide();
    this.button.hide();
    this.title.hide();
    this.greeting.hide();
}
 display(){
     this.input.position(200,300);
     this.button.position(350,400);
     this.title.position(300,100);
     this.title.html("World Car Racing Championship");
     this.button.mousePressed(()=>{
         this.input.hide();
         this.button.hide();
         player.name = this.input.value();
         playerCount++;
         player.index = playerCount;
         player.updatePlayerCount(playerCount);
         player.update();
         this.greeting.html("Hello" + player.name);
         this.greeting.position(displayWidth/3,displayHeight/2);
        

     })
 }

}