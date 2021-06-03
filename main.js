var canvas = document.getElementById("canvas");  
var context = canvas.getContext("2d");   
var Imageme =  new Image();                           
var Imageyou = new Image(); 
var Imagetop= new Image();  
Imagetop.src="images/top.png";
var posX=100;
var posY=500;
var posOX=100;
var posOY=500;
var c=0;
let preC=0;
var o=0;
var myhp=300;
var ohp=300;
var clickMe = document.getElementById("data-trigger");
function drawLoop() {
    requestAnimationFrame(drawLoop);                      // drawLoop 関数を繰り返し実行
    context.clearRect(0, 0, canvas.width, canvas.height); // canvas をクリア   
    c=document.getElementById('prediction').innerText; 
    if (c == 0) {
          Imageme.src="images/guard.png";
        } else if (c == 1) {
          Imageme.src="images/energy_ha.png";
        } else if (c == 2) {
        　Imageme.src="images/kick.png";
        } else if (c == 3) {
          Imageme.src="images/kick.png";
        } else if (c == 4) {
          Imageme.src="images/out.png";
          if(650-posOX-posX<0){
           
              if(o==2){
                  if(myhp>0){
                      myhp=myhp-20;
                    }else{
                        myhp=0;
                    }
              }else if(o==3){
                if(myhp>0){
                    myhp=myhp-30;
                  }else{
                      myhp=0;
                  }
              }
          }
        } else if (c == 5) {
          Imageme.src="images/out.png";
          if(650-posOX-posX<0){
           
              if(o==2){
                  if(myhp>0){
                      myhp=myhp-20;
                    }else{
                        myhp=0;
                    }
              }else if(o==3){
                if(myhp>0){
                    myhp=myhp-30;
                  }else{
                      myhp=0;
                  }
              }
        }   
    }        
    if (o == 0) {
            Imageyou.src="images/guard.png";
        } else if (o == 1) {
            Imageyou.src="images/energy_ha.png";
        } else if (o == 2) {
            Imageyou.src="images/kick.png";
        } else if (o == 3) {
            Imageme.src="images/kick.png";
        } else if (o == 4) {
            Imageyou.src="images/out.png";
        } else if (o == 5) {
            Imageyou.src="images/out.png";
        }
    context.fillStyle = "rgb(5, 255, 20)";
    context.fillRect(20,140,myhp,40);
    context.fillRect(500,140,ohp,40);
    if(c!==preC){
    clickMe.click();
    preC=c;
    }
    drawchara(posX,posY,Imageme); 
    context.scale(-1,1);  
    context.translate(-canvas.width, 0);
    drawchara(posOX,posOY,Imageyou); 
    context.translate(canvas.width, 0);
    context.scale(-1,1);  
    if(connected==false){
     context.drawImage(Imagetop,0,100,1000,600);
    }else{
    }
}
    drawLoop();                                    
function drawchara(x,y,img){
    context.drawImage(img,x,y,200,200);
}
