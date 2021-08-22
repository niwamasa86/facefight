const Peer = window.Peer;
var dataConnection;
var connected=false;
var canvas = document.getElementById("canvas");  
var context = canvas.getContext("2d");   
const result=document.getElementById("result");
const predict=document.getElementById('prediction');
const mypic=document.getElementById("mypic");
const oppic=document.getElementById("oppic");
let happy=0;
let neutral=1;
let flyout=0;
(async function main() {
    const localVideo = document.getElementById('js-local-video');
    const localId = document.getElementById('js-local-id');
    const remoteVideo = document.getElementById('js-remote-video');
    const remoteId = document.getElementById('js-remote-id');
    const connectedId = document.getElementById('js-connected-id');
    const callTrigger = document.getElementById('js-call-trigger');
    const closeTrigger = document.getElementById('js-close-trigger');
    const localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
    });
    localVideo.srcObject = localStream;

    const peer = new Peer({
        key: 'db321437-d5c4-4b4b-9ed3-d2662adca4fe',
        debug: 0,
    });


    peer.on('open', (id) => {
        localId.textContent = id;
    });

    peer.on('call', mediaConnection => {
        mediaConnection.answer(localStream);
        mediaConnection.on('stream', stream => {
            remoteVideo.srcObject = stream;
        });
        mediaConnection.once('close', () => {
            remoteVideo.srcObject.getTracks().forEach(track => {
                track.stop();
            });
            remoteVideo.srcObject = null;
            connectedId.textContent = '...';
        });

        closeTrigger.addEventListener('click', () => {
            mediaConnection.close(true);
        });

    });

//相手からのデータ受け取り
    peer.on("connection", dataConnection => {
        dataConnection.on("data", ({opc,X,oohp,flar}) => {
            if(oohp<myhp){
            hit.play();
            you.src="./images/hit.gif";
            }
            posOX=X;
            o=opc;
            myhp=oohp;
            opfl=flar;
          });
      });

//ループ処理
//30msに一度描画とデータ送信を行う

    setInterval(senddata,30);

    const you=document.getElementById("you");
    const aite=document.getElementById("aite");
    var classify=0;
    var preclassify=0;
    var finished=false;

    function senddata() {
        if(finished){
            finish();
        }
            gamedraw();
           
            const data = {
                opc:classify,
                X: 1000-190-posX,
                oohp: ohp,
                flar:fly,
              };
            if(connected){
            dataConnection.send(data)
            }
    };
    function gamedraw(){
        oppic.style.left = posOX+"px";
        brank=brank+1;
        c=predict.innerText; 
        context.clearRect(0, 0, canvas.width, canvas.height);
        if(happy>0.95){
            classify=0;
        }else if (F>0){
            if(posX<posOX-100){
                posX=posX+15;
            }
            mypic.style.left = posX+"px";
            classify=1;
        }else if(F<0){
            if(posX>0){
                posX=posX-15;
            }
            mypic.style.transform = "scale(1,1)";
            mypic.style.left = posX+"px";
            classify=2;
        } else if (neutral>0.8) {   
                classify=3;
        } else if (c == 1) {
                classify=4;
    　  } else if (c == 2) {
                classify=5;
        } else if (c == 3) {
                classify=6;
        } else if (c == 4) {
                classify=7;
        } else if (c == 5) {
                classify=8;
        } else if(c == 0){
                classify=9;
        }

        if(classify!=preclassify){
            console.log(preclassify)
        if(classify==0){
            mypic.style.transform = "scale(1,1)";
            you.src="./images/confusem.gif";
        }else if(classify==1){
            mypic.style.transform = "scale(1,1)";
            you.src="./images/gom.gif";
        }else if(classify==2){
            you.src="./images/backm.gif";
        }else if(classify==3){
            you.src="./images/guard.gif";
        }else if(classify==4){
            if(fly.length<1){
                fly.push(["R",posX+50]);
               }
            you.src="./images/iwanage.gif"
        }else if(classify==5){
            mypic.style.transform = "scale(1.0,1.0)";
            you.src="./images/shuri.gif";
          if(fly.length<1){
            fly.push(["S",posX+50]);
           }   
        }else if(classify==6){
            mypic.style.transform = "scale(1.0,1.0)";
            you.src="./images/kick.gif";
            atack(20);
        }else if(classify==7){
            mypic.style.transform = "scale(1.0,1.0)";
            you.src="./images/panchi.gif";
            atack(20);
        }else if(classify==8){
            mypic.style.transform = "scale(1.0,1.0)";
            you.src="./images/upper.gif";
            atack(20);
        }else if (classify==9){
            mypic.style.transform = "scale(1.0,1.0)";
            you.src="./images/beam.png";
          if(fly.length<1){
              if(connected){
            fly.push(["B",posX+50]);
           }  
        }
        }
        preclassify=classify;
    }
    if(o!=preo){
        if (o==0){
             oppic.style.left = posOX+"px";
             oppic.style.transform = "scale(-1,1)";
             aite.src='./images/confusem.gif';
        }else if(o==1){
            oppic.style.transform = "scale(-1,1)";
            aite.src='./images/gom.gif';
        }else if (o==2) {
            oppic.style.transform = "scale(-1.0,1.0)";
            aite.src='./images/backm.gif';
        } else if (o == 3) {
            oppic.style.transform = "scale(-1.0,1.0)";
            aite.src='./images/guard.gif';
        } else if (o == 4) {
            oppic.style.transform = "scale(-1,1)";
            oppic.style.left = posOX+"px";
            aite.src='./images/iwanage.gif';
        } else if (o == 5) {
            oppic.style.transform = "scale(-1.0,1.0)";
            aite.src='./images/shuri.gif';
        } else if (o == 6) {
            oppic.style.transform = "scale(-1.0,1.0)";
            aite.src='./images/kick.gif';
        } else if (o == 7) {
            oppic.style.transform = "scale(-1.0,1.0)";
            aite.src='./images/panchi.gif';
        } else if (o == 8) {
            oppic.style.transform = "scale(-1.0,1.0)";
            aite.src='./images/upper.gif';
        } else if (o == 9){
            oppic.style.transform = "scale(-1,1)";
            oppic.style.left = posOX+"px";
            aite.src='./images/beam.png';
        }
    
            preo=o;
        }
        if(fly.length>=1 ||opfl.length>=1){
            forfly();
        }else{
            document.getElementById("fly1").innerText="";
            document.getElementById("fly2").innerText="";
        }
        context.fillRect(20,140,myhp,40);
        context.fillRect(500,140,ohp,40);
            hengaoclass();
        if(ohp<=0 || myhp<=0){
            finished=true;
        }
    }

    callTrigger.addEventListener('click', () => {
        const mediaConnection = peer.call(remoteId.value, localStream);
        connectedId.textContent = mediaConnection.remoteId;
        dataConnection = peer.connect(remoteId.value);
        dataConnection.on('open',()=> {
            });
        connected=true;
        const UI = document.getElementById('controller');
        UI.style.left="0px";
        UI.style.top="400px";
        UI.style.position="";

        mediaConnection.on('stream', stream => {
            remoteVideo.srcObject = stream;
        });
        mediaConnection.once('close', () => {
            remoteVideo.srcObject.getTracks().forEach(track => {
                track.stop();
            });
            remoteVideo.srcObject = null;
            connectedId.textContent = '...';
        });

        closeTrigger.addEventListener('click', () => {
            mediaConnection.close(true);
        });
    });
    peer.on('error', console.error);
})();


let brank=5;
function atack(da){
    if(brank>5){
    if(posOX-posX<200){
      if(o==3){
        }else if(o==0){
            hit.play();
            aite.src="./images/hit.gif";
            ohp=ohp-da*3;
            if(ohp<0){
                ohp=0;
            }
            brank=0;
        }else{
            hit.play();
            aite.src="./images/hit.gif";
            ohp=ohp-da;
            if(ohp<0){
                ohp=0;
            }
            brank=0;
        }
    }
    }
}

function finish(){
    result.style.top="350px";
    result.style.left="300px";
    if(ohp<=0){
    result.innerHTML="<img src='./images/youwin.jpg'>"
    }else{
　　 result.innerHTML="<img src='./images/youlose.jpg'>"
    }
}

function hengaoclass(){
    if(happy>0.95){
        document.getElementById('face').innerText="笑い";
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
        document.getElementById('face').innerText="真顔";
        document.getElementById('class0').disabled=true;
        document.getElementById('class1').disabled=true;
        document.getElementById('class2').disabled=true;
        document.getElementById('class3').disabled=true;
        document.getElementById('class4').disabled=true;
        document.getElementById('class5').disabled=true;
    }else{
        predict.style.display="";
        document.getElementById('face').innerText="変顔";
        document.getElementById('class0').disabled=false;
        document.getElementById('class1').disabled=false;
        document.getElementById('class2').disabled=false;
        document.getElementById('class3').disabled=false;
        document.getElementById('class4').disabled=false;
        document.getElementById('class5').disabled=false;
    }
}
