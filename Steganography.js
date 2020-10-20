function chop2hide(image){
    for(var pix of image.values()){
        pix.setRed(Math.floor(pix.getRed()/16)*16);
        pix.setBlue(Math.floor(pix.getBlue()/16)*16);
        pix.setGreen(Math.floor(pix.getGreen()/16)*16);
    }
    return image;
}

function shift(image){
    for(var pix of image.values()){
        pix.setRed(Math.floor(pix.getRed()%16));
        pix.setGreen(Math.floor(pix.getBlue()%16))
        pix.setBlue(Math.floor(pix.getGreen()%16))
    }
    return image;
}

function combine(img1,img2){
    for(var pix of img1.values()){
        pix.setRed(Math.floor(pix.getRed()/16)*16+Math.floor(pix.getRed()/16));
        pix.setBlue(Math.floor(pix.getBlue()/16)*16+Math.floor(pix.getBlue()/16));
        pix.setGreen(Math.floor(pix.getGreen()/16)*16+Math.floor(pix.getGreen()/16));
    }
    return img1;
}

var start = new SimpleImage("usain.jpg");
var hide = new SimpleImage("skyline.jpg");
start = chop2hide(start);
hide = shift(hide);
var stego = combine(start,hide);
print(stego);
