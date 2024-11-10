const selectButton = document.querySelector('.select-btn');
const countryText = selectButton.querySelector('span');
const wrapper = document.querySelector('.wrapper');
const arrowIcon = wrapper.querySelector('.search i');
const searchInput = wrapper.querySelector('.search input');

selectButton.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});