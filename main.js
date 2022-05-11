img = "";

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();

}

function draw()
{
    image(img, 0, 0, 640, 420 );
    fill('#f542a7');
    text("Dog", 48, 85);
    noFill();
    stroke('#f542a7');
    rect(50, 100, 440,320);
}
