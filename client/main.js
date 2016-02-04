var myName = Math.random().toString(36).substr(2, 4);
var myDirection = "d";

function init() {
    log("init!!!");
    initCtx();
    log("clearit!!!");
    clearCanvas();
    log("sendit!!!");
    ws.send("n:"+myName);
    log("defineit!!!");
    sendMsg = function () {
        ws.send("d:"+myName+":"+myDirection);
    }

    getMsg = function(data) {
        log("got msg!");
        clearCanvas();
        data = JSON.parse(data);
        log(data);
        $.each(data, function(key, val) {
            drawThing(key, val);
        });
    }
    log("init done!!")
}

function disconnect() {
    //nothing yet
}