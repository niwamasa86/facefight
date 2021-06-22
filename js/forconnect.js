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
    const dataTrigger = document.getElementById('data-trigger');
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
        dataConnection.on("data", ({opc,X,Y,hp,oF}) => {
            posOX=X;
            posOY=Y;
            o=opc;
            ohp=hp;
            oF=oF;
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
    
    dataTrigger.addEventListener('click',() => {
            const data = {
                opc: c,
                X: posX,
                Y: posY,
                hp: myhp,
                oF:F,
              };
            if(connected){
            dataConnection.send(data)
            }
    });

    callTrigger.addEventListener('click', () => {
        const mediaConnection = peer.call(remoteId.value, localStream);
        connectedId.textContent = mediaConnection.remoteId;
        dataConnection = peer.connect(remoteId.value);
        dataConnection.on('open',()=> {
            });
        connected=true;

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