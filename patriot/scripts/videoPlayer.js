const video = document.querySelector('.video-jorney');
const toggle = document.querySelector('.video-play');
const start = document.querySelector('.video-start-button');
const progressStart = document.querySelector('.play-played');
const progressVideo = document.querySelectorAll('.video-progress');
const progressVolume = document.querySelector('.video-volume-progress');
const maximizeButon = document.querySelector('.video-maximize');
const videoPlayer = document.querySelector('.video-player');
const videoContainer = document.querySelector('.video-container');
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

video.addEventListener('click', () => {
  togglePlay();
});
toggle.addEventListener('click', () => {
  togglePlay();
});
start.addEventListener('click', () => {
  togglePlay();
});
video.addEventListener('play', () => {
  start.classList.add('played');
  progressStart.classList.add('play-played');
});
video.addEventListener('pause', () => {
  start.classList.remove('played');
  progressStart.classList.remove('play-played');
});

video.addEventListener('timeupdate', () => {
  let progress = (video.currentTime / ( video.duration / 100)).toFixed(1);
  progressVideo.forEach(item => item.style.background = `linear-gradient(to right, #710707 0%, #710707 ${progress}%, #C4C4C4 ${progress}%, #C4C4C4 100%)`);
  progressVideo.forEach(item => item.value = progress);
});

progressVideo.forEach(item => item.addEventListener('input', () => {
  video.currentTime = (item.value * ( video.duration / 100));
}));

progressVolume.addEventListener('input', (e) => {
  video.volume = e.target.value/100;
  if (video.volume == 0) {
    volumeButton.classList.add('muted');
  } else {
    volumeButton.classList.remove('muted');
  }
});

maximizeButon.addEventListener('click', () => {
  videoPlayer.requestFullscreen();
  videoContainer.classList.add('video-container-maximized');
  video.classList.add('video-maximized');
})
