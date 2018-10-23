var player;
var playing = false;
var currentTime = 0;
var duration = 0;
 
$(document).ready(function(){
    playerControls();
})

function updatePlayer(selectedItem) {
    setScreenActive("player"); 
    if( selectedItem.id != currentItem.id ){   
        console.log("new video")
        if(player!=null){
            player.stopVideo(); 
        }
        currentItem = selectedItem;
        $(".player-wrap").html("<div id='player'></div>");
        player = null;
        playing = false;
    }else {
        return;
    }

    $(".player-thumb").attr("src",currentItem.thumbnailURL)
    player = new YT.Player('player', {
        height: '200',
        width: '300',
        videoId: currentItem.id,
        playerVars: {'start':currentItem.currentTime, 'playsinline':'1', 'theme':'light','color':'white','modestbranding':1,'rel':0},
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
 
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
            player.pauseVideo();
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
    if(player!=null){
        currentTime = player.getCurrentTime();
        $(".progress-bar").attr("aria-valuenow",Math.floor(currentTime));
    }
   // console.log("currentTime: "+currentTime)
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    if(!playing){
        $(".play-pause").trigger("click")
    }
    
    updateCurrentTime();
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
    player.pauseVideo();
}