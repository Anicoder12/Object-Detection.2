img = "";

function preload()
{
img = loadImage("desk.jpg");    
}

function setup()
{
canvas = createCanvas(500,300);
canvas.position(460,250);
document.getElementById("Object").innerHTML = "Object status: Object Detected";
document.getElementById("what").innerHTML = "The system identified a desk and a laptop.";
}

function draw()
{
image(img, 0, 0, 500, 300);
stroke("red");
noFill();
rect(50, 30, 432, 250);
text("desk", 50, 20);

stroke("blue")
noFill()
rect(170,80,125,75);
text("laptop", 170, 80);
}

function back()
{
    window.location = "index.html";
}