const VideoProgressBars = document.querySelectorAll('.video-progress');
const VolumeProgressBars = document.querySelector('.video-volume-progress');
const volumeButton = document.querySelector('.video-volume');
let loadVolume = false;
let currectVolume = 0;
let savedVolume = 0;
let videoProgress = 0;

videoProgress = VideoProgressBars[0].value;
for (let item of VideoProgressBars) { 
  console.log(item);
  item.style.background = `linear-gradient(to right, #710707 0%, #710707 ${videoProgress}%, #C4C4C4 ${videoProgress}%, #C4C4C4 100%)`;
}

currectVolume = VolumeProgressBars.value;
VolumeProgressBars.style.background = `linear-gradient(to right, #710707 0%, #710707 ${currectVolume}%, #C4C4C4 ${currectVolume}%, #C4C4C4 100%)`;

function updateVideoPregressBg() {
      videoProgress = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${videoProgress}%, #C4C4C4 ${videoProgress}%, #C4C4C4 100%)`

}

for (let item of VideoProgressBars) {
  item.addEventListener('input', updateVideoPregressBg);
  // item.addEventListener('change', updateVideoPregressBg);
}


VolumeProgressBars.addEventListener('input', function() {
  loadVolume = false;
  currectVolume = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${currectVolume}%, #C4C4C4 ${currectVolume}%, #C4C4C4 100%)`
});

volumeButton.addEventListener('click', function() {
  if (!loadVolume) {
    savedVolume = currectVolume;
    currectVolume = 0;
    video.volume = currectVolume;
    VolumeProgressBars.value = currectVolume;
    VolumeProgressBars.style.background = `linear-gradient(to right, #710707 0%, #710707 ${currectVolume}%, #C4C4C4 ${currectVolume}%, #C4C4C4 100%)`;
  } else {
    currectVolume = savedVolume;
    video.volume = savedVolume/100;
    VolumeProgressBars.value = currectVolume;
    VolumeProgressBars.style.background = `linear-gradient(to right, #710707 0%, #710707 ${currectVolume}%, #C4C4C4 ${currectVolume}%, #C4C4C4 100%)`;
  }
  loadVolume = !loadVolume;
  if (video.volume == 0) {
    volumeButton.classList.add('muted');
  } else {
    volumeButton.classList.remove('muted');
  }
});

