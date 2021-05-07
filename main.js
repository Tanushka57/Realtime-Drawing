noseX=0;
noseY=0;
leftwristX = 0;
rightwristX = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550 , 500);

    canvas = createCanvas(550 , 500);
    canvas.position(570 , 100);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet is Initialized!');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.X;
        noseY = results[0].pose.nose.Y;
        console.log("noseX = "+noseX +"noseY = "+noseY);

        leftwristX = results[0].pose.leftwrist.X;
        rightwristX = results[0].pose.rightwrist.X;
        difference = floor(leftwristX - rightwristX);

        console.log("leftwristX = "+ leftwristX + "rightwristX + " + rightwristX+ "difference ="+ difference);
    }
}
function draw()
{
    background('#969A97');

    document.getElementById("square_side").innerHTML = "Width and Height of a square will be = " + difference + "px";
    fill('#4DB6AC');
    stroke('#4DB6AC');
    square(noseX ,noseY , difference);
}
