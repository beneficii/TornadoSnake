/**
 * Created by arnolds on 16.4.2.
 */
function initCtx() {
    log("initCtx!!!");
    ctx = $("#myCanvas")[0].getContext('2d');
}

function clearCanvas() {
    ctx.fillStyle = "#555555";
    ctx.fillRect(0,0,canvas_width*pixelSize,canvas_height*pixelSize);
}

function drawPixel(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x*pixelSize, y*pixelSize, pixelSize, pixelSize);
}