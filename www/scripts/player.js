// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
var playing = false;
var currentTime = 0;
var duration = 0;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '200',
        width: '300',
        videoId: 'bNAeLbEUkfc',
        playerVars: {'playsinline':'1', 'theme':'light','color':'white','modestbranding':1,'rel':0},
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
    });
    updateCurrentTime();
}



$(document).ready(function(){
    playerControls();
})


function playerControls(){
    $(".play-pause").on("click",function(){
        if(!playing){ 
            player.playVideo();
            setTimeout(updateCurrentTime,1500);
            playing = true;
            $(".play-pause .play").hide();
            $(".play-pause .pause").show();
        }else{
            playing = false;
            $(".play-pause .play").show();
            $(".play-pause .pause").hide();  
            updateCurrentTime();
            player.stopVideo();
        }
    })

    $(".forward-15").on("click",function(){
        updateCurrentTime();
        player.seekTo(currentTime+15);
    })

    $(".back-15").on("click",function(){
        updateCurrentTime();
        player.seekTo(currentTime-15);
    })
    
    setInterval(function(){ 
        updateCurrentTime();
    }, 1000);

}

function updateCurrentTime(){
    currentTime = player.getCurrentTime();
    $(".progress-bar").attr("aria-valuenow",Math.floor(currentTime));
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    //event.target.playVideo();
} 

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        duration = player.getDuration();
        $(".progress-bar").attr("aria-valuemax",Math.floor(duration));
        console.log("duration: "+duration);
    }
}
function stopVideo() {
    player.stopVideo();
}