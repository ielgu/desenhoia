noseX=0;
noseY=0;

difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
  video = createCapture(VIDEO);
  video.size(400, 400);
  video.position(20, 70);
  canvas = createCanvas(550, 550);
  canvas.position(470,110);
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}
function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +" noseY = " + noseY);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
  }
}
function draw() {
  background('#d0f4de');
  document.getElementById("square_side").innerHTML = "Largura e altura serão = " + difference +"px";
  fill('#e4c1f9');
  stroke('#ff99c8');
  square(noseX, noseY, difference);
}