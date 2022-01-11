const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var cannonBall;
var balls = [];
var boats=[]


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  angle = 20

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);

  cannon = new Cannon(180, 110, 130, 100, angle);
 // cannonBall = new CannonBall(cannon.x, cannon.y);


}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  rect(ground.position.x, ground.position.y, width * 2, 1);
  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();
  showBoats()
for(var i = 0 ; i < balls.length;i++){
  showcannonBalls(balls[i])
}
  cannon.display();
  //cannonBall.display();
//Matter.Body.setVelocity(boat.body,{x:-0.9 , y:0})
  //boat.display()
 
}
function keyReleased(){
  if(keyCode===DOWN_ARROW){
   balls[balls.length-1].shoot()


  }
  
}
function keyPressed(){
  if(keyCode===DOWN_ARROW){
    var cannonBall = new CannonBall(cannon.x,cannon.y)
    balls.push(cannonBall)
  }
}

function showcannonBalls(ball,i){
  if(ball){
    ball.display()
  }
}
function showBoats(){
  if(boats.length>0){
    if(boats[boats.length-1]===undefined||boats[boats.length-1].body.position.x < width -300){
      var positions = [ -40,-60,-70,-20]
      var position = random(positions)
       var boat = new Boat(width,height - 50,100,100,position)
    boats.push(boat)


    }
    for(var i = 0 ; i < boats.length;i++){
      if(boats[i]){
        Matter.Body.setVelocity(boats[i].body,{x : -0.9, y : 0})
        boats[i].display()
      }
    }
    
  }else{
   var boat = new Boat(width,height - 50,100,100,-80)
    boats.push(boat)
  }
}