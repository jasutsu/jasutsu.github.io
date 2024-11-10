const countries = [
    "Australia",
    "India",
    "Colombia",
    "Piltover",
    "Denmark",
    "England",
    "Denmark",
    "Canada",
    "France",
    "Spain",
    "Portugal",
    "United States"
]

const options = document.querySelector('.wrapper .options');
let countriesMarkup = "";
countries.forEach(country => {
    countriesMarkup += `<li>${country}</li>`;
});
options.innerHTML = countriesMarkup;