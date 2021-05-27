
let back,energy,go,guard,kick;
let c=0;  
let o=0;
var clickMe = document.getElementById("data-trigger");
let i=0;
let preC;
var capture;
var options = {
  video: {
    optional: [{
      sourceId: 'js-local-video'
    }]
  }
};
function preload() {
  guard = loadImage('./images/guard.png');
  energy = loadImage('./images/energy_ha.png');
  go = loadImage('./images/go.png');
  kick = loadImage('./images/kick.png');
  back =loadImage('./images/back.png');
  hengao=loadImage('./images/hengao.png');
}

function setup() {
  createCanvas(800, 600);
  background(255);
  imageMode(CENTER);
  
  capture = createCapture(options);
  x=width/8;
  x2=-5*width/6;

}

function draw(){
  image(capture, 0, 0, width, width * capture.height / capture.width);
  // fill(0);
  // rect(0,0,width,height);
  // fill(255);
  // scale(-1,1);
  // if (o == 0) {
  //   image(guard, x2,height/2,200,200);
  // } else if (o == 1) {
  //   image(energy, x2,height/2,200,200);
  // } else if (o == 2) {
  //   image(kick, x2,height/2,200,200);
  // } else if (o == 3) {
  //   image(kick,  x2,height/2,200,200);
  // } else if (o == 4) {
  //   image(go,x2,height/2,200,200);
  // } else if (o == 5) {
  //   image(back,x2,height/2,200,200);
  // }
 
  // scale(-1,1);
  // fill(0,255,0);
  // rect(50,50,200,20);
  // rect(500,50,200,20);
  // fill(0);
  // c=document.getElementById('prediction').innerText;
  // if(c!==preC){
  //   clickMe.click();
  //   preC=c;
  //   }
  // if (c == 0) {
  //   image(guard, x,height/2,200,200);
  // } else if (c == 1) {
  //   image(energy, x,height/2,200,200);
  // } else if (c == 2) {
  //   image(kick, x,height/2,200,200);
  // } else if (c == 3) {
  //   image(kick,  x,height/2,200,200);
  // } else if (c == 4) {
  //   image(go,x,height/2,200,200);
  // } else if (c == 5) {
  //   image(back,x,height/2,200,200);
  // }
 
}

