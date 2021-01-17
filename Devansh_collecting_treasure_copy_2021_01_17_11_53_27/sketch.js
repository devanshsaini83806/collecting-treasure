var play=1;
var end =0;
var gameState=play;

var path,boy,cash,diamonds,jwellery,sword,ruby;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg,rubyImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup,rubyG;
var outImg;

function preload(){
    pathImg = loadImage("Road.png");
     boyImg = loadAnimation("runner1.png","runner2.png");
    cashImg = loadImage("cash.png");
diamondsImg = loadImage("diamonds.png");
jwelleryImg = loadImage("jwell.png");
   swordImg = loadImage("sword.png");
     endImg =loadImage("gameOver.png");
     boy_die=loadImage("runner1.png");
     rubyImg=loadImage("ruby.png");
     outImg=loadImage("gameOver.png");
}

function setup(){
  
  createCanvas(400,400);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 8;

  //game over


//creating boy running
boy = createSprite(70,330,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
rubyG=new Group();
  

  boy.setCollider("circle",0,0,400)
  boy.debug=false;
}

function draw() {

  background("white");
  boy.x = World.mouseX;
  edges= createEdgeSprites();

 if(gameState===play){
   
    cash();
  diamonds();
  jwellery();
  sword();
  ruby();
   
    //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
       boy.visible=true;
 }
  
  if(gameState===end){
 var out=createSprite(200,200,30,30);
  out.addImage(outImg);
  out.scale=0.9;
    boy.visible=false;
    
    //restart
   
  }
 
  
   

    if (cashG.isTouching(boy)) {
     treasureCollection=treasureCollection+10;
      cashG.destroyEach();
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
           treasureCollection=treasureCollection+20;
      
    }else if(rubyG.isTouching(boy)){
         rubyG.destroyEach();
        treasureCollection=treasureCollection+100;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
           treasureCollection=treasureCollection+50;
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=end;
        over();
    }
  }

 
// object
  drawSprites();
  textSize(20);
  fill("yellow");
  text("Treasure: "+ treasureCollection,150,30);

}




function cash(){
    if (World.frameCount % 25 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 5;
  cash.lifetime = 100;
  cashG.add(cash);
   }

}
  function diamonds(){

  if (World.frameCount % 40 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 5;
  diamonds.lifetime = 100;
  diamondsG.add(diamonds);
}
  }

  function jwellery(){

  if (World.frameCount % 50 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 5;
  jwellery.lifetime = 100;
  jwelleryG.add(jwellery);
  
}
  }
  
  function sword(){

  if (World.frameCount % 75 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 5;
  sword.lifetime = 100;
  swordGroup.add(sword);
   }
  }
  
  function ruby(){

  if (World.frameCount % 65 == 0) {
  var ruby = createSprite(Math.round(random(50, 350),40, 10, 10));
  ruby.addImage(rubyImg);
  ruby.scale=0.08;
  ruby.velocityY = 5;
  ruby.lifetime = 100;
  rubyG.add(ruby); 
}
  
  }

function over(){
  cashG.destroyEach();
 diamondsG.destroyEach();
  rubyG.destroyEach();
  jwelleryG.destroyEach();
  swordGroup.destroyEach();
if(gameState===end){
  path.velocityY=0;
  cashG.destroyEach();
}
}
  
