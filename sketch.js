var wall,thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(1600,600);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="blue";
  bullet=createSprite(150, 70, 20,10);
  bullet.shapeColor= color ("yellow");
  
  
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX = speed;
}

function draw() {
  background("white");  
 
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(damage>=10)
    {
      bullet.shapeColor=color(9, 247, 239);
      wall.shapeColor = color(97, 234, 18)
    }
   if (damage<10)
   {
     bullet.shapeColor=color(211, 30, 232);
     wall.shapeColor = color(242, 219, 16)
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
       return true ;
      }else{
        return false;
      }
    }


