$('document').ready(function () {

  var objWarte = document.createElement("audio");
  objWarte.src = "media/audio/warte.mp3";
  objWarte.volume = 1;
  objWarte.autoPlay = false;
  objWarte.preLoad = true;
  objWarte.controls = false;

  $("#playWarte").click(function() {
    if ($("#playWarte").hasClass('playing')) {
      objWarte.pause();
      $("#playWarte").removeClass('playing');
    } else {
      objWarte.play();
      $("#playWarte").addClass('playing');
    }
  });

});
