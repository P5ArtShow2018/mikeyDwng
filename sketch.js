function setup() {
  createCanvas(windowWidth,windowHeight)
  background (0,200,0)
  frameRate(60)
}

function draw() {
  //noStroke()
  stroke(1,255)
  fill(random(1,255),random(1,255),random(1,255))
  //,random(1,50))
  //line(mouseY,500,100,mouseY)
  ellipse(mouseX,mouseY,mouseX,mouseY)
  ellipse(mouseY,mouseX,mouseY,mouseX)
  ellipse(mouseY,mouseX,mouseX,mouseY)
  ellipse(mouseX,mouseY,mouseY,mouseX)
  //rect(mouseX,mouseY,mouseX,mouseY)

  
}

function mousePressed() {
  background(0,200,0)
}
function windowResized() {
  resizeCanvas(widowWidth, windowHeight);
}
