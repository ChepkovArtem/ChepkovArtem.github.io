let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player', {
    height: '360',
    width: '640',
    videoId: 'uGi68T5IE2I',
    events: {

    }
  });
}