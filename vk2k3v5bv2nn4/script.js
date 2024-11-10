const selectButton = document.querySelector('.select-btn');
const countryText = selectButton.querySelector('span');
const wrapper = document.querySelector('.wrapper');
const arrowIcon = wrapper.querySelector('.search i');
const searchInput = wrapper.querySelector('.search input');

selectButton.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

// Update name on a selection
const updateName = (selectedLi) => {
    const selectedCountry = selectedLi.innerText;
    countryText.innerText = selectedCountry;
    wrapper.classList.remove('active');
    populateCountries(countries, selectedCountry);
    searchInput.value = "";
};

searchInput.oninput = () => {
    const searchedValue = searchInput.value.toLowerCase();
    const arr = countries.filter(country => {
        return country.toLocaleLowerCase().startsWith(searchedValue);
    });
    populateCountries(arr);
};