var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(300,300,20,10);
 
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW))
  {
    box.position.x=box.position.x-4;

 
  }
  if(keyIsDown(DOWN_ARROW))
  {
    box.position.y=box.position.y-6;
  }
  drawSprites();

}




