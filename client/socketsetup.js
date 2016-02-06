/**
 * Created by arnolds on 16.4.2.
 */
 var HOST = 'localhost';
 var PORT = '8888';

$(document).ready(function() {
    // create websocket instance
    ws = new WebSocket("ws://" + HOST + ":"+PORT+"/ws");

    // Handle incoming websocket message callback
    ws.onmessage = function(evt) {
        getMsg(evt.data);
    };

    // Close Websocket callback
    ws.onclose = function(evt) {
        log("***Connection Closed***");
    };

    // Open Websocket callback
    ws.onopen = function(evt) {
        $("#host").css("background", "#00ff00");
        log("***Connection Opened***");
        init();
    };
});