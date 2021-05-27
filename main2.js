var canvas = document.getElementById("canvas");  
var context = canvas.getContext("2d");   
var Imageme = new Image();                           
var Imageyou = new Image();   
var posX=100;
var posY=500;
var posOX=100;
var posOY=500;
var c=0;
let preC=0;
var o=0;
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
        
        } else if (c == 4) {
          
        } else if (c == 5) {
          
        }           
    if (o == 0) {
            Imageyou.src="images/guard.png";
        } else if (o == 1) {
            Imageyou.src="images/energy_ha.png";
        } else if (o == 2) {
            Imageyou.src="images/kick.png";
        } else if (o == 3) {
        
        } else if (o == 4) {
            
        } else if (o == 5) {
        
        }
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
}
    drawLoop();                                             // drawLoop 関数をトリガー
function drawchara(x,y,img){
    context.drawImage(img,x,y,200,200);
}