var canvas = document.getElementById("canvas");  
var context = canvas.getContext("2d");   
var Imagetop= new Image();  
Imagetop.src="images/top.png";
var posX=100;
var posY=500;
var posOX=1000-256;
var posOY=500;
var c=0;
let preC=0;
var o=3;
var preo=2;
var myhp=300;
var ohp=300;
var oF=0;
var fly=[];
var opfl=[];



context.fillStyle = "rgb(5, 255, 20)";
var hit = new Audio('images/hit.mp3');
const Elem1 = document.getElementById("fly1");
const Elem2 = document.getElementById("fly2");

//飛行物体に関する関数
//飛行物体がある時ループ内で呼び出される
function forfly(){
    if (fly.length>0){
        for(let i=0;i<fly.length;i++){
            if(fly[i][0]=="R"){
            Elem1.style.left =fly[i][1]+"px";
            Elem1.style.top ="250px";
            Elem1.style.width ="20px";
            Elem1.style.position ="absolute";
            Elem1.style.transform = "scale(0.1,0.1)";
            Elem1.innerHTML="<img src='./images/rock.png'>";
            }else if (fly[i][0]=="S"){
            Elem1.style.left =fly[i][1]+"px";
            Elem1.style.top ="0px";
            Elem1.style.width ="20px";
            Elem1.style.position ="absolute";
            Elem1.style.transform = "scale(0.05,0.05)";
            Elem1.innerHTML="<img src='./images/shur.png'>";
            }else if (fly[i][0]=="B"){
            Elem1.style.left =fly[i][1]+"px";
            Elem1.style.top ="500px";
            Elem1.style.width ="80px";
            Elem1.style.position ="absolute";
            Elem1.style.transform = "scale(0.5,0.5)";
            Elem1.innerHTML="<img src='./images/hono.gif'>";
            }
            fly[i][1]+=30;
            if(fly[i][1]>=posOX+100){
                fly.splice(i,1);
                Elem1.innerHTML=""; 
                if (o==0){
                    hit.play();
                    aite.src="./images/hit.gif";
                    ohp=ohp-100;
                    if (ohp<0){
                        ohp=0;
                    }
                }else if (o==3){
                }else{
                    hit.play();
                    aite.src="./images/hit.gif";
                    ohp=ohp-10
                    if (ohp<0){
                        ohp=0;
                    }
                }
            }
         }
    }

    if(opfl.length>0){
        for(let i=0;i<opfl.length;i++){
            if(opfl[i][0]=="R"){
            Elem2.style.left =1000-10-opfl[i][1]+"px";
            Elem2.style.top ="250px";
            Elem2.style.width ="20px";
            Elem2.style.position ="absolute";
            Elem2.style.transform = "scale(0.1,0.1)";
            Elem2.innerHTML="<img src='./images/rock.png'>";
            }else if (opfl[i][0]=="S"){
            Elem2.style.left =1000-10-opfl[i][1]+"px";
            Elem2.style.top ="0px";
            Elem2.style.width ="20px";
            Elem2.style.position ="absolute";
            Elem2.style.transform = "scale(0.05,0.05)";
            Elem2.innerHTML="<img src='./images/shur.png'>";
            }else if (opfl[i][0]=="B"){
            Elem2.style.left =1000-10-opfl[i][1]+"px";
            Elem2.style.top ="500px";
            Elem2.style.width ="20px";
            Elem2.style.position ="absolute";
            Elem2.style.transform = "scale(-0.5,0.5)";
            Elem2.innerHTML="<img src='./images/hono.gif'>";
            }
         }
    }else{
        Elem2.innerHTML="";
    }
  }


