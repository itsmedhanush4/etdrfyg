var player, bluey1,bluey2, greeny1,greeny2, bunker1,bunker2,bunker3,bunker4
var playerImg, blueyImg, bunkerImg, greenyImg,bgImg

function preload(){
    bgImg= loadImage("assets/bgm.jpg")
    playerImg = loadImage("assets/player.png");
    bunkerImg=loadImage("assets/bunker.png")
    blueyImg= loadImage("assets/bluey.png")
    greenyImg=loadImage("assets/greeny.png")

}

function setup (){
    createCanvas(1300,700);

    player=createSprite(650,650,10,20);
    player.addImage(playerImg)
    player.scale=0.5
    //make bunker1, bunker2, bunker3, bunker4 and all images to it
    bunker1=createSprite(200,525,20,40)
    bunker1.addImage(bunkerImg)
    bunker1.scale=0.5

    bunker2=createSprite(500,525,20,40)
    bunker2.addImage(bunkerImg)
    bunker2.scale=0.5

    bunker3=createSprite(800,525,20,40)
    bunker3.addImage(bunkerImg)
    bunker3.scale=0.5

    bunker4=createSprite(1100,525,20,40)
    bunker4.addImage(bunkerImg)
    bunker4.scale=0.5

    
}

function draw(){
    background("black");

   
    
     
    control();
    makeAlien()
    drawSprites();
}

function control(){
     //make player go left if left arrow/ a keys are pressed
     if(keyDown(LEFT_ARROW)){
        player.velocityX = -5;
        console.log("left")
    }


    //make player go right if right arrow/ d keys are pressed
    if(keyDown(RIGHT_ARROW)){
      player.x=player.x+20;
      console.log("right")
    }
}


function makeAlien(){
    
    for(var i = 100; i<1100; i=i+80){
        bluey1= createSprite(i, 50)
        bluey1.addImage(blueyImg);
        bluey1.scale=0.2;

        bluey2= createSprite(i, 150)
        bluey2.addImage(blueyImg);
        bluey2.scale=0.2;

    }

    //another for loop for greeny1 at y =100 and greeny2 y= 200

    for(var i = 180; i<1180; i=i+80){
        greeny1= createSprite(i, 100)
        greeny1.addImage(greenyImg);
        greeny1.scale=0.2;

        greeny2= createSprite(i, 200)
        greeny2.addImage(greenyImg);
        greeny2.scale=0.2;

    }
}