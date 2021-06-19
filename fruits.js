img_fruit = "";
status = "";
function preload()
{
    img_fruit = loadImage('fruits.jpg');
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.position(500,205);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_fruits").innerHTML = "Status: Detecting Objects";   
}
function draw()
{
    image(img_fruit, 0, 0, 300, 300);
}
function modelLoaded()
{
    console.log("Model Loaded!!")
    status = true;
    objectDetector.detect(img_fruit, gotResult);
    console.log("CocoSSD Initialised")  
}
function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    console.log(results);
}
function back_fruits()
{
    window.location = "Main_page.html";
}