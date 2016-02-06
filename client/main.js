var lastpan = 'panright';
var panmap = { "panleft":'a', "panright":'d', "panup":'w', "pandown":'s'}

function init() {
    initCtx();
    clearCanvas();
    sendMsg = function (msg) {
        ws.send(msg);
    }

    getMsg = function(data) {
        clearCanvas();
        data = JSON.parse(data);
        $.each(data, function(key, val) {
            drawThing(key, val);
        });
    }

    hammertime = new Hammer(canvas);
    hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    hammertime.on('panleft panright panup pandown', function(ev) {
        if (ev.type == lastpan) return;
        log(ev.type);
        lastpan = ev.type;
        sendMsg(panmap[ev.type]);
    });
    log("init done!!")
}

function disconnect() {
    //nothing yet
}