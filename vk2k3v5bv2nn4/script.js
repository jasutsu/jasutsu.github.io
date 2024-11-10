const wrapper = document.querySelector('.wrapper');
const selectButton = wrapper.querySelector('.select-btn');
const countryText = selectButton.querySelector('span');

selectButton.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

// Update name
const updateName = (selectedLi) => {
    wrapper.classList.remove('active');
    countryText.innerText = selectedLi.innerText;
};