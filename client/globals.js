/**
 * Created by arnolds on 16.4.2.
 */
var ws;     // web socket
var ctx;    // canvas context
var pixelSize = 10;
var canvas_width = 40;
var canvas_height = 40;

// log function
var log = function(data) {
    console.log(data);
};

var sendMsg = function() {log("Warning: socket not initialised!")};
var getMsg = function(msg) {log("Warning:message received before init!")};