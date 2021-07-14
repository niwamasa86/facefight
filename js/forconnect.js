const Peer = window.Peer;
var dataConnection;
var connected=false;
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
    
    peer.on("connection", dataConnection => {
        dataConnection.on("data", ({ohap,oneu,opc,X,oohp,ooF,flar}) => {
            if(oohp<myhp){
            hit.play();
            }
            ohappy=ohap;
            oneutral=oneu;
            posOX=X;
            o=opc;
            myhp=oohp;
            oF=ooF;
            opfl=flar;
          });
      });
    // document.addEventListener('keydown', (event) => {
    //     var keyName = event.key;
    //     if (keyName=='ArrowRight') {
    //         posX=posX+15;
    //             const data = {
    //                 c: c,
    //                 X: posX,
    //                 Y: posY,
    //                 hp: myhp,
    //               };
    //         if(connected){
    //                   dataConnection.send(data);
    //         }
    //     } else if (keyName=='ArrowLeft') {
    //         posX=posX-15;
    //             const data = {
    //                 opc: c,
    //                 X: posX,
    //                 Y: posY,
    //                 hp: myhp,
    //               };
    //         if(connected){
    //             dataConnection.send(data);
    //             }
    //             }
    //   });
    setInterval(senddata,30);
    function senddata() {
        brank=brank+1;
        c=predict.innerText; 
        context.clearRect(0, 0, canvas.width, canvas.height);
        if(happy>0.95){
            mypic.style.transform = "scale(1,1)";
            mypic.innerHTML = "<img src='./images/confusem.gif'>";
        }else if (F>0){
            if(posX<posOX-100){
                posX=posX+15;
            }
                mypic.style.left = posX+"px";
                mypic.style.transform = "scale(1,1)";
                mypic.innerHTML = "<img src='./images/gom.gif'>";
        }else if(F<0){
            if(posX>0){
                posX=posX-15;
            }
                mypic.style.transform = "scale(1,1)";
                mypic.style.left = posX+"px";
                mypic.innerHTML = "<img src='./images/backm.gif'>";
        }else if (neutral>0.8) {
                mypic.style.transform = "scale(1.1,1.1)";
                mypic.innerHTML = "<img src='./images/guard.gif'>";
            } else if (c == 1) {
                mypic.style.transform = "scale(1,1)";
                mypic.style.left = posX+"px";
                mypic.innerHTML = "<img src='./images/iwanage.gif'>";
                
            if(fly.length<1){
                fly.push(["R",posX+50]);
               }
            } else if (c == 2) {
                mypic.style.transform = "scale(1.0,1.0)";
                mypic.innerHTML = "<img src='./images/shuri.gif'>";
            if(fly.length<1){
                fly.push(["S",posX+50]);
               }
            } else if (c == 3) {
                mypic.style.transform = "scale(1.0,1.0)";
                mypic.innerHTML = "<img src='./images/kick.gif'>";
                atack(20);
            } else if (c == 4) {
                mypic.style.transform = "scale(1.0,1.0)";
                mypic.innerHTML = "<img src='./images/panchi.gif'>";
                atack(20);
            } else if (c == 5) {
                mypic.style.transform = "scale(1.0,1.0)";
                mypic.innerHTML = "<img src='./images/upper.gif'>";
                atack(20);
        }        
        if (oF>0){
             oppic.style.left = posOX+"px";
             oppic.style.transform = "scale(-1,1)";
             oppic.innerHTML = "<img src='./images/gom.gif'>";
        }else if(oF<0){
            oppic.style.transform = "scale(-1,1)";
            oppic.style.left = posOX+"px";
            oppic.innerHTML = "<img src='./images/backm.gif'>";
        }else if (ohappy >0.8) {
            oppic.style.transform = "scale(-1.0,1.0)";
            oppic.innerHTML = "<img src='./images/confusem.gif'>";
        } else if (oneutral>0.8) {
            oppic.style.transform = "scale(-1.1,1.1)";
            oppic.style.left = posOX+"px";
            oppic.innerHTML = "<img src='./images/guard.gif'>";
        }else if (o == 0) {
            oppic.style.transform = "scale(-1.1,1.1)";
            oppic.innerHTML = "<img src='./images/guard.gif'>";
            } else if (o == 1) {
            oppic.style.transform = "scale(-1,1)";
            oppic.style.left = posOX+"px";
            oppic.innerHTML = "<img src='./images/iwanage.gif'>";
            } else if (o == 2) {
            oppic.style.transform = "scale(-1.0,1.0)";
            oppic.innerHTML = "<img src='./images/shuri.gif'>";
            } else if (o == 3) {
            oppic.style.transform = "scale(-1.0,1.0)";
            oppic.innerHTML = "<img src='./images/kick.gif'>";
            } else if (o == 4) {
            oppic.style.transform = "scale(-1.0,1.0)";
            oppic.innerHTML = "<img src='./images/panchi.gif'>";
            } else if (o == 5) {
            oppic.style.transform = "scale(-1.0,1.0)";
            oppic.innerHTML = "<img src='./images/upper.gif'>";
            }
        if(fly.length>=1 ||opfl.length>=1){
            forfly();
        }else{
            document.getElementById("fly2").innerText="";
        }
        context.fillRect(20,140,myhp,40);
        context.fillRect(500,140,ohp,40);
            hengaoclass();
            const data = {
                ohap:happy,
                oneu:neutral,
                opc: c,
                X: 800-posX,
                oohp: ohp,
                ooF:F,
                flar:fly,
              };
            if(connected){
            dataConnection.send(data)
            }
    };

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