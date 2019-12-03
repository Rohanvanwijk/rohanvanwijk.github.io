
function setup() {
    var canvas = createCanvas(300, 300);
    canvas.parent('sketch-holder');
    loadPixels();
    pixelDensity(1);
}   

var s = 0;
function draw() {
    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            var index = (x + y * width) * 4;
            pixels[index+0] = y;
            pixels[index+1] = x;
            pixels[index+2] = s;
            pixels[index+3] = 255;
        }
    }
    updatePixels();
    if(s == 255) {
        s = 0;
    }
    s++;
}