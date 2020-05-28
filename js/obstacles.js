class Obstacles{
    constructor(){
        console.log(this.obstacles);
        this.n = Math.round(random(1,8));
        this.obstacles = null;
        console.log(frameCount);
        if(frameCount%100===0){
        this.obstacles = createSprite(1000,-1000,150,10);
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
    if(frameCount%100===0 ){
    this.obstacles1 = createSprite(1000,-5000,150,10);
    this.obstacles1.shapeColor = "yellow";
    console.log(this.obs);
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
if(frameCount%150===0){
this.obstacles2 = createSprite(1000,-10000,150,10);
this.obstacles2.shapeColor = "yellow";
console.log(this.obs);
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
        if(frameCount%250===0){
        this.obstacles3 = createSprite(1000,-20000,150,10);
        this.obstacles3.shapeColor = "yellow";
        console.log(this.obs);
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
        if(frameCount%300===0){
        this.obstacles4 = createSprite(1000,-25000,150,10);
        this.obstacles4.shapeColor = "yellow";
        console.log(this.obs);
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
        if(frameCount%350===0){
        this.obstacles5 = createSprite(1000,-30000,150,10);
        this.obstacles5.shapeColor = "yellow";
        console.log(this.obs);
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
        if(frameCount%400===0){
        this.obstacles6 = createSprite(1000,-40000,150,10);
        this.obstacles6.shapeColor = "yellow";
        console.log(this.obs);
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
        if(frameCount%450===0){
        this.obstacles7 = createSprite(1000,-45000,150,10);
        this.obstacles7.shapeColor = "yellow";
        console.log(this.obs);
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
    Player.getPlayerInfo();
    if(this.obstacles!==null){
        for(var p =0;p<allPlayers.length;p++){
        if ((allPlayers[p].xdis - this.obstacles.x <= cars[0].width/2 + this.obstacles.width/2 )
        &&(this.obstacles.x - allPlayers[p].xdis <= cars[0].width/2 + this.obstacles.width/2 )
        &&(allPlayers[p].distance - this.obstacles.y <= cars[0].height/2 + this.obstacles.height/2 )
        &&(this.obstacles.y - allPlayers[p].distance <= cars[0].height/2 + this.obstacles.height/2 )
        )
        {
          this.obstacles.destroy();
          allPlayers[p].health-=15;
          allPlayers[p].update();
        }
              }}
}

}