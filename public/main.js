//var sceneEl;
//
//AFRAME.registerComponent('heart', {
//  init: function () {
//    console.log('initializing aframe');
//    // Solution for Creating Entities.
//    sceneEl = document.querySelector('a-scene');
//    console.log('heres our scene', sceneEl);
//  }
//});


$(function() {
  setTimeout(function() {
    console.log('registering')
  }, 5000)

  function boxel(){
    var box = document.querySelector( 'a-box' );
    box.setAttribute( 'scale', {
      x: 4,
      y: 1,
      z: 6
    });
    console.log("server said button clicked!");
  }

  var socket = io();
  socket.on('buttonPressed', function () {
    boxel();
  });

});
