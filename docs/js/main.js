
Object.defineProperty(HTMLMediaElement.prototype, 'isPlaying', {
    get: function(){
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
})

function userInteracted() {
    console.log("user interacted");
    var videos = document.querySelectorAll("video");
    videos.forEach(function (video) {
        try {
            if(!video.isPlaying) video.play();
        } catch {
            video.play();
        }
    });
}

document.body.addEventListener('click', userInteracted, true);
window.addEventListener('scroll', userInteracted, true);
window.addEventListener('touchmove', userInteracted, true);