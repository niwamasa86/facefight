var canvas = document.getElementById("canvas");  
var context = canvas.getContext("2d");   
var Imagetop= new Image();  
Imagetop.src="images/top.png";
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
var fly=[];

function drawLoop() {
    requestAnimationFrame(drawLoop);                      // drawLoop 関数を繰り返し実行 
    context.clearRect(0, 0, canvas.width, canvas.height);
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
        document.getElementById('mypic').innerHTML = "<img src='./images/iwanage.gif'>";
        if(fly.length<1){
            fly.push(["R",posX+50]);
           }
        } else if (c == 2) {
        document.getElementById("mypic").style.transform = "scale(1.0,1.0)";
        document.getElementById('mypic').innerHTML = "<img src='./images/shuri.gif'>";
       
        } else if (c == 3) {
        document.getElementById("mypic").style.transform = "scale(1.0,1.0)";
        document.getElementById('mypic').innerHTML = "<img src='./images/kick.gif'>";
        } else if (c == 4) {
        document.getElementById("mypic").style.transform = "scale(1.0,1.0)";
        document.getElementById('mypic').innerHTML = "<img src='./images/panchi.gif'>";
        } else if (c == 5) {
        document.getElementById("mypic").style.transform = "scale(1.0,1.0)";
        document.getElementById('mypic').innerHTML = "<img src='./images/upper.gif'>";
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
        document.getElementById("oppic").style.transform = "scale(-1,1)";
        document.getElementById("oppic").style.left = posOX+"px";
        document.getElementById("oppic").innerHTML = "<img src='./images/iwanage.gif'>";
        } else if (o == 2) {
        document.getElementById("oppic").style.transform = "scale(-1.0,1.0)";
        document.getElementById("oppic").innerHTML = "<img src='./images/shuri.gif'>";
        } else if (o == 3) {
        document.getElementById("oppic").style.transform = "scale(-1.0,1.0)";
        document.getElementById("oppic").innerHTML = "<img src='./images/kick.gif'>";
        } else if (o == 4) {
        document.getElementById("oppic").style.transform = "scale(-1.0,1.0)";
        document.getElementById("oppic").innerHTML = "<img src='./images/panchi.gif'>";
        } else if (o == 5) {
        document.getElementById("oppic").style.transform = "scale(-1.0,1.0)";
        document.getElementById("oppic").innerHTML = "<img src='./images/upper.gif'>";
        }
    if(fly.length>=1){
        for(let i=0;i<fly.length;i++){
            var Elem = document.getElementById("fly"+i);
            if(fly[i][0]=="R"){
            Elem.style.left =fly[i][1]+"px";
            Elem.style.top =(300-100*((fly[i]-posX)/(posOX-posX)))+"px";
            Elem.style.width ="20px";
            Elem.style.position ="absolute";
            Elem.style.transform = "scale(0.1,0.1)";
            Elem.innerHTML="<img src='./images/rock.png'>";
            }
        fly[i][1]+=30;
        if(fly[i][1]>=posOX+100){
            fly.splice(i,1);
            Elem.innerHTML="";
        }
        }
        
    }
    context.fillStyle = "rgb(5, 255, 20)";
    context.fillRect(20,140,myhp,40);
    context.fillRect(500,140,ohp,40);
    clickMe.click();
   　//トップ画面
    // if(connected==false){
    //  context.drawImage(Imagetop,0,100,1000,600);
    // }

}
drawLoop();                                    

