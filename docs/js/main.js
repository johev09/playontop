
var played = false;
function userInteracted() {
    if(played) return;

    console.log("playing all videos");
    var videos = document.querySelectorAll("video");
    videos.forEach(function (video) {video.play();
        video.parentElement.classList.add("play");
        video.play();
    });
    played = true;
}

document.body.addEventListener('click', userInteracted, true);
// window.addEventListener('scroll', userInteracted, true);
// window.addEventListener('touchmove', userInteracted, true);