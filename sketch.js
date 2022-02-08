
function setup() {
  createCanvas(400,400);
  background(51);
  
}

function draw() 
{
  box = createSprite(200,200,30,30);

  // escreva o código para alterar a cor de fundo 
  // para vermelho quando a seta para direita (RIGHT_ARROW) for pressionada
  
  

  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(LEFT_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(UP_ARROW)) 
  {
    background("green");
  }
  
  if (keyIsDown(DOWN_ARROW))
  {
    background("purple");
  }

  drawSprites();
}

