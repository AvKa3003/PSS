const form = document.querySelector('.ticket-form');
const buyBtn = document.querySelector('.buy-now');
const close = document.querySelector('.form-close');
const overlay = document.querySelector('.overlay');

buyBtn.addEventListener("click", () => {
  form.classList.remove("form-closed");
  form.classList.add("form-opened");
  overlay.classList.remove("overlay-closed");
  overlay.classList.add("overlay-opened");
});

function closeForm() {
  form.classList.remove("form-opened");
  form.classList.add("form-closed");
  overlay.classList.remove("overlay-opened");
  overlay.classList.add("overlay-closed");
}

close.addEventListener("click", closeForm);

window.onhashchange = function() {
  closeForm();
}   