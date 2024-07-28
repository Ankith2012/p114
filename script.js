function preload() {}
function setup() {
   canvas= createCanvas(300,300)
  canvas.center()
  video = createCapture(VIDEO)
  video.size(300,300)
  video.hide()
  
  poseNet= ml5.poseNet(video, modelLoaded)
  poseNet.on('pose', gotPoses)
  }
  
  function draw() {
  image(video,0,0,300,300)
}

function takescreenshot() {
   save(filterimg.png)
}

function modelLoaded() {
   console.log('!Posenet initialized!')
}

function gotPoses(results) {

   if (results.length>0) {
   noseX=results[0].pose.nose.x
   noseY=results[0].pose.nose.y
   console.log('nose x =' + noseX)
   console.log('nose y =' + noseY)}}



