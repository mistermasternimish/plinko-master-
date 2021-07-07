var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var division = [];

var divisionHeight=300;
var score =0;
var count=0;
var gamestate=start;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("score:"+score,20,40);
  Fill ("white");
  textSize(35)
  text("500",5,550);
  text("500",80,550) ;
  text("500",160,550);
  text("500",240,550);
  text("100",320,550);
  text("100",400,550);
  text("100",480,550);
  text("200",560,550);
  text("200",640,550);
  text("200",720,550);

  Engine.update(engine);
 
}
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
   }
   for (var i = 0; i < plinkos.length; i++) {
     
    
    plinkos[i].display();
   
     if (particles[i].body.position.x<900 && particles[i].body.positin.x>601 && particles[i].body.position.y > 760  ){
      score=scpre+200;
      particles.pop();
     }
     
   }

   else if (particles[i].body.position.x<900 && particles[i].body.positin.x>601 && particles[i].body.position.y > 760  ){
    score=scpre+200;
    particles.pop();

   }
  
    else if (particles[i].body.position.x<900 && particles[i].body.positin.x>601 && particles[i].body.position.y > 760  ){
    score=scpre+200;
    particles.pop();
   }
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();

   }

function mousePressed(){
if(gamestate!=="end"){
counr++;
particles.push(new particle(mouseX,10,10,10));
}
}



