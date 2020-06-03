var wall,thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(1600,600);
  bullet=createSprite(150, 70, 20,10);
  bullet.shapeColor= color ("yellow");
  
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="blue";
  wallthickness=random(22,83);
  bulletspeed=random(223,321);
  bulletweight=random(30,52);
  bullet.velocityX = 5;
}

function draw() {
  background("white");  
 
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(wall.damage>=10)
    {
      bullet.shapeColor=color("red");
      wall.shapeColor = color("red")
    }
   if (wall.damage<10)
   {
     bullet.shapeColor=color("black");
     wall.shapeColor = color("red")
   }
  }
  //wall.isStatic=true;
  //bullet.isStatic=true;
  //bullet.collide(wall);
  drawSprites();
}
function hasCollided(lbullet, lwall)  {
 bulletRightEdge=lbullet.x +lbullet.width;
   wallLeftEdge=lwall.x;
    if (bulletRightEdge>=wallLeftEdge) {
       return true }
        return false;
       }


/*
function hasCollided(lbullet,lwall)
{
  if(lbullet.x - lwall.x <lbullet.width/2 + lwall.width/2
  && lwall.x- lbullet.x <lwall.width/2 +lbullet.width/2
  && lbullet.y - lwall.y <lbullet.height/2 +lwall.height/2
  &&lwall.y - lbullet.y <lwall.height/2 +lbullet.height/2
  )
 {
   return true;
 }
return false;
}
*/