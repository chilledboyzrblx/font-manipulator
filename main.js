leftWrist = 0;
rightWrist = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(50,150);

    canvas = createCanvas(550,500);
    canvas.position(750,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('MODEL HAS LOADED');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = floor(leftWrist-rightWrist);
    }
}

function draw(){
    background('#32a852');
    textSize(difference);
    fill('#ffffff');
    text('Never Gonna Give You Up',50,400);
}