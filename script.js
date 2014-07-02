jQuery(document).ready(function() {
  function stopVideo() {
    $("#videoID").get(0).pause();
    rewindTimeout = setTimeout(rewind, 2000);
  }
  function rewind (){
    document.getElementById("videoID").currentTime = 0;
  }
  pauseTimeout = setTimeout(stopVideo, 5000);
  rewindTimeout = setTimeout(rewind, 10000000);

  $("html").keydown(function(event) {
    if (event.which == 90) {
      $("#videoID").get(0).play();
      clearTimeout(pauseTimeout);
      clearTimeout(rewindTimeout);
      pauseTimeout = setTimeout(stopVideo, 1000);
    }
  });
});