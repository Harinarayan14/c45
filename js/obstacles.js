class Obstacles{
    constructor(){
        this.n = Math.round(random(1,8));
        this.obstacles = createSprite(2000,-1000,150,10);
        this.obstacles.lifetime = 50;
        this.obstacles.depth= cars[0].depth;
        if(frameCount%100===0){
        this.obstacles.shapeColor = "yellow";
        switch(this.n){
            case 1: this.obstacles.x = 300
            break;
            case 2: this.obstacles.x = 500
            break;
            case 3: this.obstacles.x = 700
            break;
            case 4: this.obstacles.x = 900
            break;
            case 5: this.obstacles.x = 1100
            break;
            case 6: this.obstacles.x = 400
            break;
            case 7: this.obstacles.x = 800
            break;
            case 8: this.obstacles.x = 600
            break;
        }
    }
    this.obstacles1 = createSprite(2000,-5000,150,10);
    this.obstacles1.lifetime = 50;
    this.obstacles1.depth= cars[0].depth;
    if(frameCount%100===0 ){
    this.obstacles1.shapeColor = "yellow";
    
    switch(this.n){
        case 1: this.obstacles1.x = 300
        break;
        case 2: this.obstacles1.x = 500
        break;
        case 3: this.obstacles1.x = 700
        break;
        case 4: this.obstacles1.x = 900
        break;
        case 5: this.obstacles1.x = 1100
        break;
        case 6: this.obstacles1.x = 400
        break;
        case 7: this.obstacles1.x = 800
        break;
        case 8: this.obstacles1.x = 600
        break;
    }
}
this.obstacles2 = createSprite(2000,-10000,150,10);
this.obstacles2.lifetime = 50;
this.obstacles2.depth= cars[0].depth;
if(frameCount%150===0){
this.obstacles2.shapeColor = "yellow";

switch(this.n){
    case 1: this.obstacles2.x = 300
    break;
    case 2: this.obstacles2.x = 500
    break;
    case 3: this.obstacles2.x = 700
    break;
    case 4: this.obstacles2.x = 900
    break;
    case 5: this.obstacles2.x = 1100
    break;
    case 6: this.obstacles2.x = 400
    break;
    case 7: this.obstacles2.x = 800
    break;
    case 8: this.obstacles2.x = 600
    break;
}
}
this.obstacles3 = createSprite(2000,-20000,150,10);
this.obstacles3.lifetime = 50;
this.obstacles3.depth= cars[0].depth;
        if(frameCount%250===0){

        this.obstacles3.shapeColor = "yellow";
        
        switch(this.n){
            case 1: this.obstacles3.x = 300
            break;
            case 2: this.obstacles3.x = 500
            break;
            case 3: this.obstacles3.x = 700
            break;
            case 4: this.obstacles3.x = 900
            break;
            case 5: this.obstacles3.x = 1100
            break;
            case 6: this.obstacles3.x = 400
            break;
            case 7: this.obstacles3.x = 800
            break;
            case 8: this.obstacles3.x = 600
            break;
        }
    }
    this.obstacles4 = createSprite(10000,-25000,150,10);
    this.obstacles4.lifetime = 50;
        if(frameCount%300===0){
        this.obstacles4.shapeColor = "yellow";
        
        switch(this.n){
            case 1: this.obstacles4.x = 300
            break;
            case 2: this.obstacles4.x = 500
            break;
            case 3: this.obstacles4.x = 700
            break;
            case 4: this.obstacles4.x = 900
            break;
            case 5: this.obstacles4.x = 1100
            break;
            case 6: this.obstacles4.x = 400
            break;
            case 7: this.obstacles4.x = 800
            break;
            case 8: this.obstacles4.x = 600
            break;
        }
    }
    this.obstacles5 = createSprite(10000,-30000,150,10);
    this.obstacles5.lifetime = 50;
    this.obstacles5.depth= cars[0].depth;
        if(frameCount%350===0){
        this.obstacles5.shapeColor = "yellow";
        
        switch(this.n){
            case 1: this.obstacles5.x = 300
            break;
            case 2: this.obstacles5.x = 500
            break;
            case 3: this.obstacles5.x = 700
            break;
            case 4: this.obstacles5.x = 900
            break;
            case 5: this.obstacles5.x = 1100
            break;
            case 6: this.obstacles5.x = 400
            break;
            case 7: this.obstacles5.x = 800
            break;
            case 8: this.obstacles5.x = 600
            break;
        }
    }
    this.obstacles6 = createSprite(2000,-40000,150,10);
    this.obstacles6.lifetime = 50;
    this.obstacles6.depth= cars[0].depth;
        if(frameCount%400===0){
        this.obstacles6.shapeColor = "yellow";
        
        switch(this.n){
            case 1: this.obstacles6.x = 300
            break;
            case 2: this.obstacles6.x = 500
            break;
            case 3: this.obstacles6.x = 700
            break;
            case 4: this.obstacles6.x = 900
            break;
            case 5: this.obstacles6.x = 1100
            break;
            case 6: this.obstacles6.x = 400
            break;
            case 7: this.obstacles6.x = 800
            break;
            case 8: this.obstacles6.x = 600
            break;
        }
    }
    
    this.obstacles7 = createSprite(2000,-45000,150,10);
    this.obstacles7.lifetime = 50;
    this.obstacles7.depth= cars[0].depth;
        if(frameCount%450===0){
        this.obstacles7.shapeColor = "yellow";
        
        switch(this.n){
            case 1: this.obstacles7.x = 300
            break;
            case 2: this.obstacles7.x = 500
            break;
            case 3: this.obstacles7.x = 700
            break;
            case 4: this.obstacles7.x = 900
            break;
            case 5: this.obstacles7.x = 1100
            break;
            case 6: this.obstacles7.x = 400
            break;
            case 7: this.obstacles7.x = 800
            break;
            case 8: this.obstacles7.x = 600
            break;
        }
    }
    player.update();
    
}
check(){

    for(var z=0;z<cars.length;z++){
        if(cars[z].isTouching(this.obstacles7)){
            this.obstacles7.destroy();
            player.health-=20;
        }
        }
        
    for(var z=0;z<cars.length;z++){
        if(cars[z].isTouching(this.obstacles6)){
            this.obstacles6.destroy();
            player.health-=20;
        }
        }
        for(var z=0;z<cars.length;z++){
            if(cars[z].isTouching(this.obstacles5)){
                this.obstacles5.destroy();
                player.health-=20;
            }
            }
            for(var z=0;z<cars.length;z++){
                if(cars[z].isTouching(this.obstacles4)){
                    this.obstacles4.destroy();
                    player.health-=20;
                }
                }
                
for(var z=0;z<cars.length;z++){
    if(cars[z].isTouching(this.obstacles3)){
        this.obstacles3.destroy();
        player.health-=20;
    }
    }
    for(var z=0;z<cars.length;z++){
        if(cars[z].isTouching(this.obstacles2)){
            this.obstacles2.destroy();
            player.health-=20;
        }
        }
        for(var z=0;z<cars.length;z++){
            if(cars[z].isTouching(this.obstacles1)){
                this.obstacles1.destroy();
                player.health-=20;
            }
            }
            for(var z=0;z<cars.length;z++){
                if(cars[z].isTouching(this.obstacles)){
                    this.obstacles.destroy();
                    console.log("h");
                    player.health-=20;
                }
                }
}
}
