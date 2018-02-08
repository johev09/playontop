
function userInteracted() {
    console.log("user interacted");
    var videos = document.querySelectorAll("video");
    videos.forEach(function (video) {video.play();
        video.play();
    });
}

document.body.addEventListener('click', userInteracted, true);
window.addEventListener('scroll', userInteracted, true);
window.addEventListener('touchmove', userInteracted, true);