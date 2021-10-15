function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

rightwristx=0;
rightwristy=0;
leftwristx=0;
leftwristy=0;

function gotPoses(results)
{
if(results.length>0)
{
console.log(results);
leftwristx=results[0].pose.leftWrist.x;
leftwristy=results[0].pose.leftWrist.y;
console.log("leftwristx="+leftwristx+"leftwristy="+leftwristy);

rightwristx=results[0].pose.rightWrist.x;
rightwristy=results[0].pose.rightWrist.y;
console.log("rightwristx="+rightwristx+"rightwristy="+rightwristy);
}
}

function modelLoaded()
{
    console.log("modelLoaded");
}


function draw()
{
    image(video,0,0,600,500);
}

song="";


function preload()
{
    song=loadSound("beliver.mp3");  
}

function start()
{
    song.play();
}