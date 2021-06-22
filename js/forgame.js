var canvas = document.getElementById("canvas");  
var context = canvas.getContext("2d");   
var Imageme =  new Image();                           
var Imageyou = new Image(); 
var Imagetop= new Image();  
Imagetop.src="images/top.png";
var images = [
    "images/go.gif",
    "images/back.gif"
]
var posX=100;
var posY=500;
var posOX=700;
var posOY=500;
var c=0;
let preC=0;
var o=0;
var myhp=300;
var ohp=300;
var oF=0;
var clickMe = document.getElementById("data-trigger");
window.onload = function(){
    getImages();
}
function drawLoop() {
    requestAnimationFrame(drawLoop);                      // drawLoop 関数を繰り返し実行
    context.clearRect(0, 0, canvas.width, canvas.height); // canvas をクリア   
    c=document.getElementById('prediction').innerText; 
    if (F>0){
        if(posX<posOX-50){
            posX=posX+F;
        }
        document.getElementById("mypic").style.left = posX+"px";
        document.getElementById("mypic").style.transform = "scale(1,1)";
        document.getElementById('mypic').innerHTML = "<img src='./images/go.gif'>";
        
    }else if(F<0){
        if(posX>0){
            posX=posX+F;
        }
        document.getElementById("mypic").style.transform = "scale(1,1)";
        document.getElementById("mypic").style.left = posX+"px";
        document.getElementById('mypic').innerHTML = "<img src='./images/back.gif'>";
    }else if (c == 0) {
        document.getElementById("mypic").style.transform = "scale(1.1,1.1)";
        document.getElementById('mypic').innerHTML = "<img src='./images/guard.gif'>";
        } else if (c == 1) {
        document.getElementById("mypic").style.transform = "scale(1,1)";
        document.getElementById("mypic").style.left = posX+"px";
        document.getElementById('mypic').innerHTML = "<img src='./images/shuri.gif'>";
        } else if (c == 2) {
        document.getElementById("mypic").style.transform = "scale(1.0,1.0)";
        document.getElementById('mypic').innerHTML = "<img src='./images/kick.gif'>";
       
        } else if (c == 3) {
        
        } else if (c == 4) {
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
    if (oF>0){
        document.getElementById("oppic").style.left = posOX+"px";
        document.getElementById("oppic").style.transform = "scale(-1,1)";
        document.getElementById('oppic').innerHTML = "<img src='./images/go.gif'>";
    }else if(oF<0){
        document.getElementById("oppic").style.transform = "scale(-1,1)";
        document.getElementById("oppic").style.left = posOX+"px";
        document.getElementById('oppic').innerHTML = "<img src='./images/back.gif'>";
    }else if (o == 0) {
        document.getElementById("oppic").style.transform = "scale(-1.1,1.1)";
        document.getElementById('oppic').innerHTML = "<img src='./images/guard.gif'>";
        } else if (o == 1) {
            
        } else if (o == 2) {
         
        } else if (o == 3) {
           
        } else if (o == 4) {
            
        } else if (o == 5) {

        }
    context.fillStyle = "rgb(5, 255, 20)";
    context.fillRect(20,140,myhp,40);
    context.fillRect(500,140,ohp,40);
    if(c!==preC |F!==0){
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
    //  context.drawImage(Imagetop,0,100,1000,600);
    }else{
    }
}
    drawLoop();                                    
function drawchara(x,y,img){
    context.drawImage(img,x,y,200,200);
}

function getImages(){
    for (i = 0; i < images.length; i++){
        var img = document.createElement('img');
        img.src = images[i];
    }
}
