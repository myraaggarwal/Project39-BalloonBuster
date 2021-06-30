var redballoon,greenbaloon,bluebaloon,pinkbaloon;
var select_baloon;
var backGround;
var bow;
var arrow,arrowGroup;
var score;
var redbGroup,bluebGroup,greenbGroup,pinkbGroup;
var time=0;

function preload(){
  //load your images here 
   
   bowImage= loadImage("bow0.png");
   arrowImage=loadImage("arrow0.png");
  
   redb=loadImage("red.png");
   greenb=loadImage("green.png");
   blueb=loadImage("blue.png");
   pinkb=loadImage("pink.png");
   
  
}

function setup(){
  createCanvas(displayWidth-20,displayHeight-30);


  frameRate(20);
  //add code here
  backGround = createSprite(300,10,displayWidth,displayHeight);
  backGround.shapeColor="lightblue";
  backGround.x = backGround.width/2;
  backGround.velocityX=-4
  backGround.scale=3
   
  bow = createSprite(displayWidth-200,displayHeight/2,50,50);
  bow.addImage("bow",bowImage);
  // add camera
  camera.position.x = bow.x ; 
  camera.position.y = bow.y ;

  score=0
  
  arrowGroup= createGroup();
  redbGroup= createGroup();
  bluebGroup= createGroup();
  greenbGroup= createGroup();
  pinkbGroup= createGroup();
}

function draw(){

  if(time === 150){
    gameState ="over";
    redbGroup.destroyEach();
    bluebGroup.destroyEach();
    greenbGroup.destroyEach();
    pinkbGroup.destroyEach();
    fill("black");
    textSize(25);
    text("Game Over !! ",displayWidth/2 + 400 ,displayHeight/2-100);
  } else {
    gameState = "play";
  }

 if(gameState === "play"){
  var select_baloon= Math.round(random(1,4));
  //console.log(select_baloon);
 // console.log(frameCount);
  if(frameCount % 60==0){
    if(select_baloon==1){
      redBaloon();
      
    } else if(select_baloon==2){
      greenBaloon(); 
      
    } else if(select_baloon==3){
      blueBaloon();
      
    } else{
      pinkBaloon();
      
    }
  }

  bow.y=mouseY
  if (backGround.x < 0){ 
      backGround.x = backGround.width/2;
   }
   
  if(keyDown("space")){
    createArrow();                              
 }
  
  if(arrowGroup.isTouching(redbGroup)){
     score = score + 5;
     arrowGroup.destroyEach();
     redbGroup.destroyEach();
     } 

  if(arrowGroup.isTouching(bluebGroup)){
     score = score + 10;
     arrowGroup.destroyEach();
     bluebGroup.destroyEach();
    }
  
 if(arrowGroup.isTouching(greenbGroup) || arrowGroup.isTouching(pinkbGroup))
   {
    score = score + 5;
    arrowGroup.destroyEach();
    greenbGroup.destroyEach();
    pinkbGroup.destroyEach();
   }

   drawSprites();
   textSize(15); 
  fill("black");
  text("hit the baloons and score until time's up to 150 !!",displayWidth-800,50);
  textSize(20); 
  text("score:"+ score ,displayWidth-50,50);
  text("time:"+ time ,displayWidth-300,50);
  }
}
 
 
function createArrow(){
    arrow= createSprite(bow.x,bow.y,50,50);
    arrow.addImage("arrow",arrowImage);
    arrow.scale=0.4
    arrow.velocityX=-5;  
    arrow.lifetime=570;
    bow.depth=arrow.depth+5;
    //arrow.debug=true;
    arrow.setCollider ("rectangle",0,0,280,30);
    arrowGroup.add(arrow);
}
function redBaloon(){
    redballoon= createSprite(0,Math.round(random(displayHeight,displayHeight-1000)),20,20);
    redballoon.addImage("red",redb);
    redballoon.scale=0.5;
    redballoon.velocityX=3;
    redballoon.lifetime=420; 
    redbGroup.add(redballoon);
    //redballoon.debug=true
    redballoon.setCollider("rectangle",5,5);
    bow.depth=redballoon.depth+5;
    time = time + 5; 
}

function greenBaloon(){
    greenbaloon= createSprite(0,Math.round(random(displayHeight,displayHeight-1000)),20,20);
    greenbaloon.addImage("green",greenb);
    greenbaloon.scale=0.5;
    greenbaloon.velocityX=3; 
    greenbaloon.lifetime=420; 
    greenbGroup.add(greenbaloon);
    //greenbaloon.debug=true;
    bow.depth=greenbaloon.depth+5;
    time = time + 5; 
}

function blueBaloon(){
    bluebaloon= createSprite(0,Math.round(random(displayHeight,displayHeight-1000)),20,20);
    bluebaloon.addImage("blue",blueb);
    bluebaloon.scale=0.5;
    bluebaloon.velocityX=3;
    bluebaloon.lifetime=420; 
    bluebGroup.add(bluebaloon);
   // bluebaloon.debug=true
    bow.depth=bluebaloon.depth+5;
    time = time + 5; 
}

function pinkBaloon(){
    pinkbaloon= createSprite(0,Math.round(random(displayHeight,displayHeight-1000)),20,20);
    pinkbaloon.addImage("pink",pinkb);
    pinkbaloon.scale=0.5;
    pinkbaloon.velocityX=3;
    pinkbaloon.lifetime=420; 
    pinkbGroup.add(pinkbaloon);
    //pinkbaloon.debug=true
    bow.depth=pinkbaloon.depth+5;
    time = time + 5; 
}
