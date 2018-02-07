
function userInteracted() {
    var videos = document.querySelectorAll("video");
    console.log(videos);
    videos.forEach(function (video) {
        video.play();
    });
}

document.body.addEventListener('click', userInteracted, true);
document.body.addEventListener('scroll', userInteracted, true);