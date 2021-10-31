var sliderVideo = tns(
  {
    "container": ".video-playlist",
    "items": 3,
    "slideBy": 1,
    //"mouseDrag": true,
    "swipeAngle": false,
    "speed": 400,
    "controls": false,
    "nav": false,  
    "autoplayButtonOutput": false,
    "gutter": '30',
  }
);

// const curWelcomeSlide = document.querySelector('.slide-number-cur');

document.querySelector('.video-slider-left').onclick = function () {
  sliderVideo.goTo('prev');
};
document.querySelector('.video-slider-right').onclick = function () {
  sliderVideo.goTo('next');
};

function clearSelecterVideo() {
    document.querySelectorAll('.video-slider-dot').forEach(item => item.classList.remove('video-slider-dot-active'));
}


for (let i = 1; i <= 5; i++) {
  document.querySelector('.video-slider-dot' + i).addEventListener('click', (e) => {
    sliderVideo.goTo(i - 1);
    clearSelecterVideo();
    e.target.classList.add('video-slider-dot-active');
  });
}

// slider.events.on('indexChanged', () => {
//   curWelcomeSlide.innerHTML = '0' + slider.getInfo().displayIndex;
//   clearSelecter();
//   document.querySelector('.slide-icon' + (slider.getInfo().displayIndex)).classList.add('slide-icon-active');
// })