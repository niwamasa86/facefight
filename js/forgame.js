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
var fly=[];
var opfl=[];
let happy=0;
let neutral=1;
let ohappy;
let oneutral;
let flyout=0;
let F=0;
const mypic=document.getElementById("mypic");
const oppic=document.getElementById("oppic");
const predict=document.getElementById('prediction');
context.fillStyle = "rgb(5, 255, 20)";
var hit = new Audio('images/hit.mp3');

// function drawLoop() {
//     requestAnimationFrame(drawLoop);                   
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     c=predict.innerText; 
//     if(happy>0.8){
//         mypic.style.transform = "scale(1,1)";
//         mypic.innerHTML = "<img src='./images/confuse.gif'>";
//     }else if (F>0){
//         if(posX<posOX-100){
//             posX=posX+F;
//         }
//             mypic.style.left = posX+"px";
//             mypic.style.transform = "scale(1,1)";
//             mypic.innerHTML = "<img src='./images/go.gif'>";
//     }else if(F<0){
//         if(posX>0){
//             posX=posX+F;
//         }
//             mypic.style.transform = "scale(1,1)";
//             mypic.style.left = posX+"px";
//             mypic.innerHTML = "<img src='./images/back.gif'>";
//     }else if (neutral>0.5) {
//             mypic.style.transform = "scale(1.1,1.1)";
//             mypic.innerHTML = "<img src='./images/guard.gif'>";
//         } else if (c == 1) {
//             mypic.style.transform = "scale(1,1)";
//             mypic.style.left = posX+"px";
//             mypic.innerHTML = "<img src='./images/iwanage.gif'>";
//         if(fly.length<1){
//             fly.push(["R",posX+50]);
//            }
//         } else if (c == 2) {
//             mypic.style.transform = "scale(1.0,1.0)";
//             mypic.innerHTML = "<img src='./images/shuri.gif'>";
//         if(fly.length<1){
//             fly.push(["S",posX+50]);
//            }
//         } else if (c == 3) {
//             mypic.style.transform = "scale(1.0,1.0)";
//             mypic.innerHTML = "<img src='./images/kick.gif'>";
//         } else if (c == 4) {
//             mypic.style.transform = "scale(1.0,1.0)";
//             mypic.innerHTML = "<img src='./images/panchi.gif'>";
//         } else if (c == 5) {
//             mypic.style.transform = "scale(1.0,1.0)";
//             mypic.innerHTML = "<img src='./images/upper.gif'>";
//     }        
//     if (oF>0){
//          oppic.style.left = posOX+"px";
//          oppic.style.transform = "scale(-1,1)";
//          oppic.innerHTML = "<img src='./images/go.gif'>";
//     }else if(oF<0){
//         oppic.style.transform = "scale(-1,1)";
//         oppic.style.left = posOX+"px";
//         oppic.innerHTML = "<img src='./images/back.gif'>";
//     }else if (ohappy >0.5) {
//         oppic.style.transform = "scale(-1.0,1.0)";
//         oppic.innerHTML = "<img src='./images/confuse.gif'>";
//     } else if (oneutral>0.5) {
//         oppic.style.transform = "scale(-1.1,1.1)";
//         oppic.style.left = posOX+"px";
//         oppic.innerHTML = "<img src='./images/guard.gif'>";
//     }else if (o == 0) {
//         oppic.style.transform = "scale(-1.1,1.1)";
//         oppic.innerHTML = "<img src='./images/guard.gif'>";
//         } else if (o == 1) {
//         oppic.style.transform = "scale(-1,1)";
//         oppic.style.left = posOX+"px";
//         oppic.innerHTML = "<img src='./images/iwanage.gif'>";
//         } else if (o == 2) {
//         oppic.style.transform = "scale(-1.0,1.0)";
//         oppic.innerHTML = "<img src='./images/shuri.gif'>";
//         } else if (o == 3) {
//         oppic.style.transform = "scale(-1.0,1.0)";
//         oppic.innerHTML = "<img src='./images/kick.gif'>";
//         } else if (o == 4) {
//         oppic.style.transform = "scale(-1.0,1.0)";
//         oppic.innerHTML = "<img src='./images/panchi.gif'>";
//         } else if (o == 5) {
//         oppic.style.transform = "scale(-1.0,1.0)";
//         oppic.innerHTML = "<img src='./images/upper.gif'>";
//         }
//     if(fly.length>=1 ||opfl.length>=1){
//         forfly();
//     }else{
//         document.getElementById("fly2").innerText="";
//     }
//     context.fillStyle = "rgb(5, 255, 20)";
//     context.fillRect(20,140,myhp,40);
//     context.fillRect(500,140,ohp,40);
//      if(connected==false){
//         hengaoclass();
//     //   context.drawImage(Imagetop,0,100,1000,600);
//      }

// }
// drawLoop();      

function forfly(){
    if (fly.length>0){
        for(let i=0;i<fly.length;i++){
            var Elem = document.getElementById("fly1");
            if(fly[i][0]=="R"){
            Elem.style.left =fly[i][1]+"px";
            Elem.style.top ="250px";
            Elem.style.width ="20px";
            Elem.style.position ="absolute";
            Elem.style.transform = "scale(0.1,0.1)";
            Elem.innerHTML="<img src='./images/rock.png'>";
            }else if (fly[i][0]=="S"){
            Elem.style.left =fly[i][1]+"px";
            Elem.style.top ="0px";
            Elem.style.width ="20px";
            Elem.style.position ="absolute";
            Elem.style.transform = "scale(0.05,0.05)";
            Elem.innerHTML="<img src='./images/shur.png'>";
            }
            fly[i][1]+=30;
            if(fly[i][1]>=posOX+100){
                console.log(ohp);
                fly.splice(i,1);
                Elem.innerHTML=""; 
                if (ohappy>0.95){
                    hit.play();
                    ohp=ohp-100;
                    if (ohp<0){
                        ohp=0;
                    }
                }else if (oneutral>0.8){
                }else{
                    hit.play();
                    ohp=ohp-10
                    if (ohp<0){
                        ohp=0;
                    }
                }
                console.log(ohp);
            }
         }
    }   
    if(opfl.length>0){
        for(let i=0;i<opfl.length;i++){
            var Elem = document.getElementById("fly2");
            if(opfl[i][0]=="R"){
            Elem.style.left =800-opfl[i][1]+"px";
            Elem.style.top ="250px";
            Elem.style.width ="20px";
            Elem.style.position ="absolute";
            Elem.style.transform = "scale(0.1,0.1)";
            Elem.innerHTML="<img src='./images/rock.png'>";
            }else if (opfl[i][0]=="S"){
            Elem.style.left =800-opfl[i][1]+"px";
            Elem.style.top ="0px";
            Elem.style.width ="20px";
            Elem.style.position ="absolute";
            Elem.style.transform = "scale(0.05,0.05)";
            Elem.innerHTML="<img src='./images/shur.png'>";
            }
         }
    }
  }
let brank=5;
function atack(da){
    if(brank>5){
    if(posOX-posX<100){
      if(oneutral>0.8){
        }else if(ohappy>0.95){
            hit.play();
            ohp=ohp-da*3;
            if(ohp<0){
                ohp=0;
            }
            brank=0;
           
        }else{
            console.log("hey");
            hit.play();
            ohp=ohp-da;
            if(ohp<0){
                ohp=0;
            }
            brank=0;
        }
    }
    }
}

function hengaoclass(){
    if(happy>0.95){
        document.getElementById('face').innerText="笑っています";
        document.getElementById('class0').disabled=true;
        document.getElementById('class1').disabled=true;
        document.getElementById('class2').disabled=true;
        document.getElementById('class3').disabled=true;
        document.getElementById('class4').disabled=true;
        document.getElementById('class5').disabled=true;
    }else if (F>0){
        document.getElementById('face').innerText="傾いています";
        document.getElementById('class0').disabled=true;
        document.getElementById('class1').disabled=true;
        document.getElementById('class2').disabled=true;
        document.getElementById('class3').disabled=true;
        document.getElementById('class4').disabled=true;
        document.getElementById('class5').disabled=true;
    }else if(F<0){
        document.getElementById('face').innerText="傾いています";
        document.getElementById('class0').disabled=true;
        document.getElementById('class1').disabled=true;
        document.getElementById('class2').disabled=true;
        document.getElementById('class3').disabled=true;
        document.getElementById('class4').disabled=true;
        document.getElementById('class5').disabled=true;
    }else if (neutral>0.8) {
        document.getElementById('face').innerText="真顔すぎます";
        document.getElementById('class0').disabled=true;
        document.getElementById('class1').disabled=true;
        document.getElementById('class2').disabled=true;
        document.getElementById('class3').disabled=true;
        document.getElementById('class4').disabled=true;
        document.getElementById('class5').disabled=true;
    }else{
        predict.style.display="";
        document.getElementById('face').innerText="変顔です";
        document.getElementById('class0').disabled=false;
        document.getElementById('class1').disabled=false;
        document.getElementById('class2').disabled=false;
        document.getElementById('class3').disabled=false;
        document.getElementById('class4').disabled=false;
        document.getElementById('class5').disabled=false;
    }
}

