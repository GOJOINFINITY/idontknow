function setup() {
  createCanvas(800,400);
 noname= createSprite(400, 200, 50, 50);
 noname123 = createSprite(67,76,87,87);
}

function draw() {
  background(255,255,43); 
  noname.x=mouseX
  noname.y=mouseY
  if(abs(noname.x-noname123.x)<=noname.width/2+noname123.width/2&&
  abs(noname.y-noname123.y)<=noname.height/2+noname123.height/2){
    noname.shapeColor="black"
    noname123.shapeColor="black"
  }else{
    noname.shapeColor="white"
    noname123.shapeColor="blue"
  }
  drawSprites();
}