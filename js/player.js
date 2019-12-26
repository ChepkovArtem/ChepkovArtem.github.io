let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player', {
    height: '360',
    width: '640',
    videoId: 'uGi68T5IE2I',
    events: {

    },
    playerVars: {
      controls: 0,
      disablekb: 0,
      showinfo: 0,
      rel: 0,
      autoplay: 0,
      modestbranding: 0
    }
  });
}

$('.player__start').on("click", e=>{
  const btn = $(e.currentTarget);
  

  if(btn.hasClass('paused')){
    player.pauseVideo();
    btn.removeClass('paused');
  }
  else{
    player.playVideo();
    btn.addClass('paused');
  }
});

const formatTime = timeSec =>{
  const roundTime = Math.round(timeSec);
  const minutes = Math.floor(roundTime / 60);
  const seconds = roundTime - minutes * 60;
  const formattedSeconds = seconds < 10 ? `0${seconds}`:seconds;
  return `${minutes}:${formattedSeconds}`;
};

function onPlayerReady(){
  let interval;
  let durationSec = player.getDuration();

  if(typeof interval !== "undefined"){
    clearInterval(interval);
  }

  interval = setInterval(()=>{
    const compleatedSec = player.getCurrentTime();

    $(".player__duration-completed").text(formatTime(compleatedSec));
  }, 100);

  $(".player__duration-estimate").text(formatTime(durationSec));
}