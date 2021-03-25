var canvas;
var music;
var block_1, block_2, block_3, block_4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block_1    = createSprite(100,590,190,20);
    block_1.shapeColor = "red";
    block_2  = createSprite(300,590,190,20);
    block_2.shapeColor = "green";
    block_3   = createSprite(500,590,190,20);
    block_3.shapeColor = "blue";
    block_4 = createSprite(700,590,190,20);
    block_4.shapeColor = "yellow";

    ball = createSprite(0,50,40,40);
    ball.shapeColor = "white";
    ball.x = random((40,570));

    //create box sprite and give velocity

    ball.velocityX = 7;
    ball.velocityY = 6;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();

    drawSprites();
    //add condition to check if box touching surface and make it box
    if(block_1.isTouching(ball)){
        ball.shapeColor = "red";
    }
    if(block_2.isTouching(ball)){
        ball.shapeColor = "green";
    }
    if(block_3.isTouching(ball)){
        ball.shapeColor = "blue";
    }
    if(block_4.isTouching(ball)){
        ball.shapeColor = "yellow";
    }
    ball.bounceOff(block_1);
    ball.bounceOff(block_2);
    ball.bounceOff(block_3);
    ball.bounceOff(block_4);

    if(ball.x<10){
        music.stop();
        ball.velocityX = 7;
    }else if(ball.x>790){
        music.stop();
        ball.velocityX = -7;
    }else if(ball.y<10){
        music.stop();
        ball.velocityY = 6;
    }
    if(block_1.isTouching(ball) ||
    block_1.isTouching(ball) ||
    block_1.isTouching(ball) ||
    block_1.isTouching(ball)){
        music.play();
    }
}
