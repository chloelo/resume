var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
var htmlplayershow = false;
//videoId: 'SyaQvo80oZg',
function onYouTubeIframeAPIReady() {
    htmlplayershow = false;
    player = new YT.Player('hero01_video', {
        height: '0%',
        width: '100%',
        videoId: 'L3gek2za14A',
        playerVars: {
            'autoplay': '0',
            'showinfo': '0',
            'cc_load_policy': '0',
            'iv_load_policy':'3',
            'rel': '0',
            'modestbranding': '0',
            'enablejsapi': '0',
            'loop':'1',
            'controls': '0'
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
    event.target.setVolume(0);
}

var done = false;
var playing = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        player.playVideo();
    }
    if (event.data == YT.PlayerState.PLAYING && !htmlplayershow) {
        $("#hero01_video").css("height", "100%");
		$("#kv-title").addClass("_show");
        htmlplayershow = true;
    }
}

function stopVideo() {
    player.stopVideo();
}