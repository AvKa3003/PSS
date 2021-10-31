const gostType1 = document.querySelector('.gost-type1');
const gostType2 = document.querySelector('.gost-type2');

const ticketsCount = document.querySelectorAll('.tickets-count');
const ticketsCountForm = document.querySelectorAll('.form-tickets-count');

const ticketNumberChildren = document.querySelector('.ticket-number-children');
const ticketNumberAdult = document.querySelector('.ticket-number-adult');

const changeCountButton = document.querySelectorAll('.change-count-button');
const changeCountButtonForm = document.querySelectorAll('.change-count-button-form');

const formChildCount = document.querySelector('.form-child-count');
const formAdultCount = document.querySelector('.form-adult-count');


const price = document.querySelector('.price');
let childBillets = 0;
let adultBillets = 0;
let totalPrice = 0;

function updatePrice() {
    totalPrice = ticketNumberChildren.value * 40 + ticketNumberAdult.value * 60;
    price.innerHTML = totalPrice;
}

function updatePriceMain() {
    childBillets = ticketNumberChildren.value;
    adultBillets = ticketNumberAdult.value;
    formChildCount.value = childBillets;
    formAdultCount.value = adultBillets;
    updatePrice();
}

function updatePriceForm() {
    childBillets = formChildCount.value;
    adultBillets = formAdultCount.value;
    ticketNumberChildren.value = childBillets;
    ticketNumberAdult.value = adultBillets;
    updatePrice();
}

for (let item of ticketsCount) {
    item.addEventListener('change', updatePriceMain);
}

for (let item of changeCountButton) {
    item.addEventListener('click', updatePriceMain);
}

for (let item of ticketsCountForm) {
    item.addEventListener('change', updatePriceForm);
}

for (let item of changeCountButtonForm) {
    item.addEventListener('click', updatePriceForm);
}