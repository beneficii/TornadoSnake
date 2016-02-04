/**
 * Created by arnolds on 16.4.2.
 */
$(document).ready(function() {

    $("#open").click(function(evt) {
        evt.preventDefault();

        var host = $("#host").val();

        // create websocket instance
        ws = new WebSocket("ws://" + host + ":8888/ws");

        // Handle incoming websocket message callback
        ws.onmessage = function(evt) {
            log("Message Received: " + evt.data);
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
});