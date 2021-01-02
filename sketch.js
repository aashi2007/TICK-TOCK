var hr, min, sec;
var hrAngle, minAngle, secAngle;

function setup() {
  createCanvas(800,600);
  angleMode(DEGREES);
}

function draw() {
  background("white");  
  hr = hour();
  min = minute();
  sec = second();
  textSize(50);
  stroke("Yellow");
  fill("green");
  text(hr +": ", 220, 550);
  text(min +":", 320, 550);
  text(sec + ":", 420, 550);
  secAngle = map(sec,0,60,0,360);
  minAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr%12,0,12,0,360);
  translate(350, 250)
  rotate(-90);
  push();
  rotate(secAngle);
  stroke("red");
  strokeWeight(5)
  line(0,0,150,0);
  pop();
  push();
  rotate(minAngle);
  stroke("green");
  strokeWeight(3)
  line(0,0,120,0);
  pop();
  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(10)
  line(0,0,100,0);
  pop();
  strokeWeight(5);
  noFill()
  stroke("red");
  arc(0,0,400,400,0,secAngle);
  arc(0,0,370,370,0,minAngle);
  arc(0,0,340,340,0,hrAngle);
}