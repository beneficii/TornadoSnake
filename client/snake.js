/**
 * Created by arnolds on 16.4.2.
 */

snakeList = {};

function drawSnake(x, y) {
    drawPixel(x, y, "green");
}

function drawApple() {
    drawPixel(x, y, "red");
}

function drawThing(name, data) {
    if(name == "Food") {
        drawApple(data.x, data.y);
    } else {
        drawSnake(data.x, data.y);
    }
}