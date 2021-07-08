// 2で配置したモデルを読み込む。
Promise.all([
    faceapi.nets.tinyFaceDetector.load('./models'), // 軽い高い顔検出モデル
    faceapi.nets.faceLandmark68Net.load('./models'), // 顔の68個のランドマークの検出モデル
    faceapi.nets.faceExpressionNet.load('./models'),
]).catch((e) => {
    console.log(`face-apiを読み込むことができませんでした。${e}`);
});

// Webカメラの起動
const video = document.getElementById('js-local-video');

// face-apiで顔のランドマークを取得します。
let faceData;

async function getLandMarks(){
    faceData = await faceapi.detectSingleFace(video,new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();

    if(faceData == null) return;
    drawLandMarks(faceData.landmarks.positions);
    neutral=faceData.expressions.neutral;
    happy=faceData.expressions.happy;
}

function drawLandMarks(positions) {
    let kata=(positions[36].y-positions[45].y)/(positions[36].x-positions[45].x);
    if(kata>0.3){
        F=-10;
    }else if(kata<-0.3){
        F=10;
    }else{
        F=0;
    }
}

function render(){
    requestAnimationFrame(render);
    getLandMarks();
}

render();