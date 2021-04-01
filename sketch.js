var hr,mn,sc,time;
function setup() {
  createCanvas(1000,800);
angleMode(DEGREES);


  

 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  

  textSize(24);
    fill("white");
    text("XII",390,290);

    textSize(24);
    fill("white");
    text("III",520,410);

    textSize(24);
    fill("white");
    text("VI",390,530);

    textSize(24);
    fill("white");
    text("IX",270,410);

  translate(400,400);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();
 
scAngle = map(sc,0,60,0,360);
mnAngle = map(mn,0,60,0,360);
hrAngle = map(hr % 12,0,12,0,360);

push();
rotate(scAngle);
stroke("yellow");
strokeWeight(7);
line(0,0,100,0);
pop();

push();
rotate(mnAngle);
stroke("red");
strokeWeight(7);
line(0,0,75,0);
pop();

push();
rotate(hrAngle);
stroke("green");
strokeWeight(7);
line(0,0,50,0);
pop();

strokeWeight(10);
noFill();

stroke("yellow");
arc(0,0,300,300,0,scAngle);

stroke("red");
arc(0,0,330,330,0,mnAngle);

stroke("green");
arc(0,0,360,360,0,hrAngle);


  drawSprites();
}