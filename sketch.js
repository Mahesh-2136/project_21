var canvas;
var music;
var box,pole
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
   
    //create 4 different surfaces
     box = createSprite(100,580,200,40);
     box.shapeColor="red"
     box1 =createSprite(300,580,200,40);
     box1.shapeColor="yellow"
     box2 =createSprite(500,580,200,40);
     box2.shapeColor="blue"
     box3 =createSprite(700,580,200,40);
     box3.shapeColor="purple"

    //create box sprite and give velocity
    pole = createSprite(400,200,40,40);
    pole.shapeColor="pink"
    pole.velocityX=10;
    pole.velocityY=18;
}

function draw() {
    background(0);
    //create edgeSprite
    createEdgeSprites();
   if(pole.x > 795 || pole.x < 5){
       pole.velocityX=-(pole.velocityX)
       
   }
   if(pole.y > 550 || pole.y < 5){
    pole.velocityY=-(pole.velocityY)
    
}



   if(pole.isTouching(box)){
       pole.shapeColor="red"
       pole.velocityX=0
       pole.velocityY=0
   }


  if(pole.isTouching(box1)){
      pole.shapeColor="yellow"
  }


  if(pole.isTouching(box2)){
      pole.shapeColor="blue"
      music.play();
  }


  if(pole.isTouching(box3)){
      pole.shapeColor="purple"
      
  }
    //add condition to check if box touching surface and make it box
  drawSprites();
}


function red(){

}