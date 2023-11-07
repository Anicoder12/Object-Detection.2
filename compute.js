img = "";

function preload()
{
img = loadImage("compute.jpg");    
}

function setup()
{
canvas = createCanvas(500,300);
canvas.position(460,250);
document.getElementById("Object").innerHTML = "Object status: Object Detected";
document.getElementById("what").innerHTML = "The system identified a computer and a sharpener.";
}

function draw()
{
image(img, 0, 0, 500, 300);
stroke("red");
noFill();
rect(50, 30, 400, 250);
text("computer", 50, 20);

stroke("blue")
noFill()
rect(210,200,50,50);
text("sharpener", 210, 200);
}

function back()
{
    window.location = "index.html";
}