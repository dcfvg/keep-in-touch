jQuery(document).ready(function() {


  var pauseTimeout = setTimeout(stopVideo, 0);
  var rewindTimeout = setTimeout(rewind, 0);

  $("html").keydown(onKeyDown);

  function stopVideo() {
    $("#videoID").get(0).pause();
    rewindTimeout = setTimeout(rewind, 2000);
  }

  function rewind (){
    document.getElementById("videoID").currentTime = 0;
  }

  function onKeyDown(){
    $("#videoID").get(0).play();

    clearTimeout(pauseTimeout);
    clearTimeout(rewindTimeout);

    pauseTimeout = setTimeout(stopVideo, 1000);
  }

});
