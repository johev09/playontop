
function clicked() {
    var videos = document.querySelectorAll("video");
    console.log(videos);
    videos.forEach(function (video) {
        video.play();
    });
}

document.body.addEventListener('click', clicked, true);