class Powerups{
    constructor(){
        this.n = Math.round(random(1,8));
        this.powerup = createSprite(2000,-1100,150,10);
        this.powerup.lifetime = 50;
        this.powerup.depth= cars[0].depth;
        for(var z=0;z<cars.length;z++){
            if(cars[z].isTouching(this.powerup)){
                this.powerup.destroy();
                console.log("h");
                allPlayers[z-1].health+=20;
            }
            }
        if(frameCount%100===0){
        switch(this.n){
            case 1: this.powerup.x = 300
            break;
            case 2: this.powerup.x = 500
            break;
            case 3: this.powerup.x = 700
            break;
            case 4: this.powerup.x = 900
            break;
            case 5: this.powerup.x = 1100
            break;
            case 6: this.powerup.x = 400
            break;
            case 7: this.powerup.x = 800
            break;
            case 8: this.powerup.x = 600
            break;
        }
    }
    this.powerup1 = createSprite(2000,-6000,150,10);
    this.powerup1.lifetime = 50;
    this.powerup1.depth= cars[0].depth;
    for(var z=0;z<cars.length;z++){
        if(cars[z].isTouching(this.powerup1)){
            this.powerup1.destroy();
            allPlayers[z-1].health+=20;
        }
        }
    if(frameCount%100===0 ){
    
    switch(this.n){
        case 1: this.powerup1.x = 300
        break;
        case 2: this.powerup1.x = 500
        break;
        case 3: this.powerup1.x = 700
        break;
        case 4: this.powerup1.x = 900
        break;
        case 5: this.powerup1.x = 1100
        break;
        case 6: this.powerup1.x = 400
        break;
        case 7: this.powerup1.x = 800
        break;
        case 8: this.powerup1.x = 600
        break;
    }
}
this.powerup2 = createSprite(2000,-11000,150,10);
this.powerup2.lifetime = 50;
this.powerup2.depth= cars[0].depth;
for(var z=0;z<cars.length;z++){
    if(cars[z].isTouching(this.powerup2)){
        this.powerup2.destroy();
        allPlayers[z-1].health+=20;
    }
    }
if(frameCount%150===0){

switch(this.n){
    case 1: this.powerup2.x = 300
    break;
    case 2: this.powerup2.x = 500
    break;
    case 3: this.powerup2.x = 700
    break;
    case 4: this.powerup2.x = 900
    break;
    case 5: this.powerup2.x = 1100
    break;
    case 6: this.powerup2.x = 400
    break;
    case 7: this.powerup2.x = 800
    break;
    case 8: this.powerup2.x = 600
    break;
}
}
this.powerup3 = createSprite(2000,-21000,150,10);
this.powerup3.lifetime = 50;
this.powerup3.depth= cars[0].depth;
for(var z=0;z<cars.length;z++){
    if(cars[z].isTouching(this.powerup3)){
        this.powerup3.destroy();
        allPlayers[z-1].health+=20;
    }
    }
        if(frameCount%250===0){

        
        switch(this.n){
            case 1: this.powerup3.x = 300
            break;
            case 2: this.powerup3.x = 500
            break;
            case 3: this.powerup3.x = 700
            break;
            case 4: this.powerup3.x = 900
            break;
            case 5: this.powerup3.x = 1100
            break;
            case 6: this.powerup3.x = 400
            break;
            case 7: this.powerup3.x = 800
            break;
            case 8: this.powerup3.x = 600
            break;
        }
    }
    this.powerup4 = createSprite(10000,-26000,150,10);
    this.powerup4.lifetime = 50;
    for(var z=0;z<cars.length;z++){
        if(cars[z].isTouching(this.powerup4)){
            this.powerup4.destroy();
            allPlayers[z-1].health+=20;
        }
        }
        if(frameCount%300===0){
        
        switch(this.n){
            case 1: this.powerup4.x = 300
            break;
            case 2: this.powerup4.x = 500
            break;
            case 3: this.powerup4.x = 700
            break;
            case 4: this.powerup4.x = 900
            break;
            case 5: this.powerup4.x = 1100
            break;
            case 6: this.powerup4.x = 400
            break;
            case 7: this.powerup4.x = 800
            break;
            case 8: this.powerup4.x = 600
            break;
        }
    }
    this.powerup5 = createSprite(10000,-31000,150,10);
    this.powerup5.lifetime = 50;
    this.powerup5.depth= cars[0].depth;
    for(var z=0;z<cars.length;z++){
        if(cars[z].isTouching(this.powerup5)){
            this.powerup5.destroy();
            allPlayers[z-1].health+=20;
        }
        }
        if(frameCount%350===0){
        
        switch(this.n){
            case 1: this.powerup5.x = 300
            break;
            case 2: this.powerup5.x = 500
            break;
            case 3: this.powerup5.x = 700
            break;
            case 4: this.powerup5.x = 900
            break;
            case 5: this.powerup5.x = 1100
            break;
            case 6: this.powerup5.x = 400
            break;
            case 7: this.powerup5.x = 800
            break;
            case 8: this.powerup5.x = 600
            break;
        }
    }
    this.powerup6 = createSprite(2000,-35000,150,10);
    this.powerup6.lifetime = 50;
    this.powerup6.depth= cars[0].depth;
    for(var z=0;z<cars.length;z++){
        if(cars[z].isTouching(this.powerup6)){
            this.powerup6.destroy();
            allPlayers[z-1].health+=20;
        }
        }
        if(frameCount%400===0){
        
        switch(this.n){
            case 1: this.powerup6.x = 300
            break;
            case 2: this.powerup6.x = 500
            break;
            case 3: this.powerup6.x = 700
            break;
            case 4: this.powerup6.x = 900
            break;
            case 5: this.powerup6.x = 1100
            break;
            case 6: this.powerup6.x = 400
            break;
            case 7: this.powerup6.x = 800
            break;
            case 8: this.powerup6.x = 600
            break;
        }
    }
    
    this.powerup7 = createSprite(2000,-48000,150,10);
    this.powerup7.lifetime = 50;
    this.powerup7.depth= cars[0].depth;
    for(var z=0;z<cars.length;z++){
        if(cars[z].isTouching(this.powerup7)){
            this.powerup7.destroy();
            allPlayers[z-1].health+=20;
        }
        }
        if(frameCount%450===0){
        
        switch(this.n){
            case 1: this.powerup7.x = 300
            break;
            case 2: this.powerup7.x = 500
            break;
            case 3: this.powerup7.x = 700
            break;
            case 4: this.powerup7.x = 900
            break;
            case 5: this.powerup7.x = 1100
            break;
            case 6: this.powerup7.x = 400
            break;
            case 7: this.powerup7.x = 800
            break;
            case 8: this.powerup7.x = 600
            break;
        }
    }
    player.update();
    
}
}
