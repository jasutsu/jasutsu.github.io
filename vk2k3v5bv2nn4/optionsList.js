const countries = [
    "Argentina",
    "Australia",
    "Austria",
    "Belgium",
    "Brazil",
    "Canada",
    "Chile",
    "China",
    "Colombia",
    "Czech Republic",
    "Denmark",
    "Egypt",
    "England",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "Hungary",
    "Iceland",
    "India",
    "Ireland",
    "Italy",
    "Japan",
    "Kenya",
    "Mexico",
    "Netherlands",
    "New Zealand",
    "Nigeria",
    "Norway",
    "Pakistan",
    "Peru",
    "Philippines",
    "Piltover",
    "Poland",
    "Portugal",
    "Russia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sweden",
    "Switzerland",
    "Thailand",
    "Turkey",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Vietnam"
];

const options = document.querySelector('.options');

const populateCountries = (arr, selectedCountry = "") => {
    let countriesMarkup = "";
    arr.forEach(country => {
        const selected = (selectedCountry == country ? "selected" : "");
        countriesMarkup += `<li onclick="updateName(this);" class="${selected}">${country}</li>`;
    });
    options.innerHTML = countriesMarkup;
};

populateCountries(countries);