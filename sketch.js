//Press numbers from 1 - 5 to change color selection
//The color you selected will be shown on the console
//Press space to place a block
//you can move with WASD to place block in different
//positions

//Press a to turn off stroke
//press d to turn on stroke
//these will be shown on the console as well











//Move the invisible cube with the Arrows

let p1controlx = 300;

let p1controly = 700;

let r;

let g;

let b;

let thick;



function setup() {
  let canvas = createCanvas(800, 800);
  
  canvas.parent('game');
  
  background(r,g,b);
  
}

function draw() {
  
    if(thick == 0){
    noStroke(5);
    }
    if(thick == 1){
      stroke(5);
    }
  
  if(keyCode === 32){
  fill(r, g, b);
  
    
  rect(p1controlx,p1controly,100, 100);
  }
}

function keyPressed(){
  
  if(keyCode === LEFT_ARROW){
    p1controlx = p1controlx - 100;
    
  }
  
   if(keyCode === RIGHT_ARROW){
    p1controlx = p1controlx + 100;
    
  }
  
  if(keyCode === UP_ARROW){
    p1controly = p1controly - 100;
    
  }
  
  if(keyCode === DOWN_ARROW){
    p1controly = p1controly + 100;
  }
  
  
  //red selection
  if(keyCode === 49){
    r = 255;
    g = 0;
    b = 0;
    console.log("Red Color Selected")
  }
  
  //green selection
  if(keyCode === 50){
    r = 72;
    g = 96;
    b = 0;
    console.log("Green Color Selected")
  }
  
  //grey selection
  if(keyCode === 51){
    r = 140;
    g = 140;
    b = 140;
    console.log("Grey Color Selected")
  }
  
  //blue selection
  if(keyCode === 52){
    r = 0;
    g = 34;
    b = 255;
    console.log("Blue Color Selected")
  }
  
  //white selection
  if(keyCode === 53){
    r = 255;
    g = 255;
    b = 255;
    console.log("White Color Selected")
  }
  
  //no stroke
  if(keyCode === 65){
    thick = 0;
    console.log("Stroke is Off")
  }
  
  // stroke
  if(keyCode === 68){
    thick = 1;
    console.log("Stroke is On")
  }
  
    
  
}