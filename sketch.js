const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

//make divisions usinf for loop
  for(var k = 0; k<= width;k = k +80) {
     divisions.push (new Divisions(k, height-divisionHeight/2,10,divisionHeight));
  }

//make plinkos using for loops
    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 15; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

    for (var j = 40; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

    for (var j = 20; j <=width+10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }


   
    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  //display plinkos using a for loop 
  for(var i = 0; i < plinkos.length;i++) {
   plinkos[i].display();
}


   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
   //display particles using a for loop
 for(var j = 0; j < particles.length;j++) {
    particles[j].display();
 }


   //display divisions using a for loop 
   for(var k = 0; k < divisions.length;k++) {
      divisions[k].display();
   }
   
}