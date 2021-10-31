var slider = tns(
  {
    "container": ".welcome-slider",
    "items": 1,
    "slideBy": "page",
    "mouseDrag": true,
    "swipeAngle": false,
    "speed": 400,
    "controls": false,
    "nav": false,  
    "autoplayButtonOutput": false,
    "autoplay": true,

  }
);

const curWelcomeSlide = document.querySelector('.slide-number-cur');

document.querySelector('.slider-left-arrow').onclick = function () {
  slider.goTo('prev');
};
document.querySelector('.slider-right-arrow').onclick = function () {
  slider.goTo('next');

};

function clearSelecter() {
    document.querySelectorAll('.slide-icon').forEach(item => item.classList.remove('slide-icon-active'));
}


for (let i = 1; i <= 5; i++) {
  document.querySelector('.slide-icon' + i).addEventListener('click', (e) => {
    slider.goTo(i - 1);
    clearSelecter();
    e.target.classList.add('slide-icon-active');
  });
}

slider.events.on('indexChanged', () => {
  curWelcomeSlide.innerHTML = '0' + slider.getInfo().displayIndex;
  clearSelecter();
  document.querySelector('.slide-icon' + (slider.getInfo().displayIndex)).classList.add('slide-icon-active');
})