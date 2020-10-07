var ghost, ghostimage;
var tower, towerimage;
var door, doorimage, doorsGroup;
var climber, climberimage, climbersGroup;

function preload(){

    ghostimage = loadImage("ghost-standing.png");

    towerimage = loadImage("tower.png");

    doorimage = loadImage("door.png");
    doorsGroup = new Group();

    climberimage = loadImage("climber.png");
    climbersGroup = new Group();

}
function setup(){
createCanvas(600,600);

    ghost = createSprite(200,200,50,50);
    ghost.addImage(ghostimage);
    ghost.scale = 0.3;

     tower = createSprite(300,300);
     tower.addImage(towerimage);
     tower.velocityY = 5;
     
     


}
function draw(){
background(0);

if (tower.y > 600){
    tower.y = tower.width/2;
}
if (keyDown("left_arrow")){
    ghost.x = ghost.x -5;
}
if (keyDown("right_arrow")){
    ghost.x = ghost.x +5;
}
if (keyDown("space")){
    ghost.velocityY = -5;
}
ghost.velocityY = ghost.velocityY + 0.8;




spawndoors();

drawSprites();
}
function spawndoors(){
if (frameCount % 100 == 0){
door = createSprite(200,-50);
door.x = Math.round(random(120,400));
climber = createSprite(200,10);
climber.addImage(climberimage);
climber.x = door.x;
climber.velocityY = 5;
climber.lifetime = 120;
door.addImage(doorimage);
door.velocityY = 5;
door.lifetime = 120;
doorsGroup.add(door);
climbersGroup.add(climber);

}


}