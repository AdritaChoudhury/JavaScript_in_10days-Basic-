function setBlack(pixel) {
    pixel.setRed(0);
    pixel.setBlue(0);
    pixel.setGreen(0);
    return pixel;
}

function addBorder(image,thickness) {
    var newWidth = image.getWidth()+2*thickness;
    var newHeight = image.getHeight()+2*thickness;
    var resImg = new SimpleImage(newWidth,newHeight);
    for(var pix of resImg.values()){
        if (pix.getX() <= thickness || pix.getX() > (newWidth-thickness)) {
            pix = setBlack(pix);
        }
        if (pix.getY() <= thickness || pix.getY ()> (newHeight-thickness)) {
            pix = setBlack(pix);
        }
        if (pix.getX() > thickness && pix.getX() < (newWidth-thickness) && pix.getY() > thickness && pix.getY() < (newHeight-thickness)){
            var x = pix.getX() - thickness;
            var y = pix.getY() - thickness;
            resImg.setPixel(pix.getX(),pix.getY(),image.getPixel(x,y));
        }
        
    }
    return resImg;
}

var img = new SimpleImage("smallpanda.png");
var newW = img.getWidth()+20;
var newH = img.getHeight()+20;
var newImg = new SimpleImage(newW,newH);
newImg = addBorder(img,10);
print(newImg);
