img = "";

function preload()
{
img = loadImage("water_bottle.jpg");    
}

function setup()
{
canvas = createCanvas(500,300);
canvas.position(460,250);
document.getElementById("Object").innerHTML = "Object status: Object Detected";
document.getElementById("what").innerHTML = "The system identified a water bottle and a sticker.";
}

function draw()
{
image(img, 0, 0, 500, 300);
stroke("red");
noFill();
rect(50, 30, 400, 250);
text("water bottle", 50, 20);

stroke("blue")
noFill()
rect(80,100,50,50);
text("sticker", 80, 100);
}

function back()
{
    window.location = "index.html";
}