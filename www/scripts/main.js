
$(document).ready(function(){
    setScreenClick();
})

window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    return true;
}

function setScreenActive(screenClass){
    $("."+screenClass).addClass("active");
    setTimeout(function(){
        $(".screen").removeClass("active");
        $("."+screenClass).addClass("active");
    },200)
}


function setScreenClick(){
    $( "[data-screen]" ).on( "click", function () {
        var screen = $(this).data("screen");
        setScreenActive(screen)
    } );
}


// PhoneGap is ready - begin using plugins here
function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
}

function onDeviceReady() {
    
}

function initialize() { 
    //checkConnection();
    // register device ready event - called when PhoneGap is fully loaded
    document.addEventListener("deviceready", onDeviceReady, false);
}
