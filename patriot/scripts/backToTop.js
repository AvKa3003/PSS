const backToTop = document.querySelector('.backToTop');
window.addEventListener('scroll', function(e) {
    if (document.documentElement.scrollTop > 1000) {
        backToTop.classList.remove('backToTopHidden');
    } else {
        backToTop.classList.add('backToTopHidden');
    }
});
  