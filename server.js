var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static('public'));



http.listen(3000, function(){
  console.log("hello world");
  var five = require("johnny-five"),
    board, button;
  io.on('connection', function (socket) {
    board = new five.Board();
    board.on("ready", function() {
      button = new five.Button(2);
      board.repl.inject({
        button: button
      });
      // click command
      button.on("down", function() {
        console.log("down");
        socket.broadcast.emit('buttonPressed');
      });
      // "hold" the button is pressed for specified time.
      //        defaults to 500ms (1/2 second)
      //        set
      button.on("hold", function() {
        console.log("hold");
      });
      // "up" the button is released
      button.on("up", function() {
        console.log("up");
      });
    });
  });
});
