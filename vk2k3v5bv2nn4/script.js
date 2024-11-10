const wrapper = document.querySelector('.wrapper');
const selectButton = wrapper.querySelector('.select-btn');
const countryText = selectButton.querySelector('span');
const searchInput = wrapper.querySelector('input');

selectButton.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

// Update name
const updateName = (selectedLi) => {
    searchInput.value = "";
    populateCountries(countries, selectedLi.innerText);
    wrapper.classList.remove('active');
    countryText.innerText = selectedLi.innerText;
};

// Filter countries based on search input
searchInput.oninput = () => {
    const seachedValue = searchInput.value.toLowerCase();
    const filtered = countries.filter(country => {
        return country.toLowerCase().startsWith(seachedValue);
    });
    
    populateCountries(filtered);
};