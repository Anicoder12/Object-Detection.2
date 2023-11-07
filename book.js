img = "";

function preload()
{
img = loadImage("book.jpg");    
}

function setup()
{
canvas = createCanvas(500,300);
canvas.position(460,250);
document.getElementById("Object").innerHTML = "Object status: Object Detected";
document.getElementById("what").innerHTML = "The system identified a book and a receipt.";
}

function draw()
{
image(img, 0, 0, 500, 300);
stroke("red");
noFill();
rect(50, 30, 400, 250);
text("book", 50, 20);

stroke("blue")
noFill()
rect(100,5,200,40);
text("receipt", 110, 8);
}

function back()
{
    window.location = "index.html";
}