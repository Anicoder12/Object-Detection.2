img = "";

function preload()
{
img = loadImage("bed.jpg");    
}

function setup()
{
canvas = createCanvas(500,300);
canvas.position(460,250);
document.getElementById("Object").innerHTML = "Object status: Object Detected";
document.getElementById("what").innerHTML = "The system identified a bed and blankets.";
}

function draw()
{
image(img, 0, 0, 500, 300);
stroke("red");
noFill();
rect(50, 30, 400, 250);
text("bed", 50, 20);

stroke("blue")
noFill()
rect(110,80,250,75);
text("blankets", 110, 80);
}

function back()
{
    window.location = "index.html";
}