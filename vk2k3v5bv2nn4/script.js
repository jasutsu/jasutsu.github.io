const menuButtons = document.querySelectorAll('.menu-button');
const screenOverlay = document.querySelector('.screen-overlay');
const themeButton = document.querySelector('.theme-button i');

menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.body.classList.toggle('sidebar-hidden');
    });
});

screenOverlay.addEventListener('click', () => {
    document.body.classList.toggle('sidebar-hidden');
});

themeButton.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
    themeButton.classList.toggle('uil-moon', !isDarkMode);
    themeButton.classList.toggle('uil-sun', isDarkMode);
});

// For large screens, show sidebar-hidden
if (window.innerWidth > 768) {
    document.body.classList.remove('sidebar-hidden');
}

// Retrieve cached dark mode
const darkModeStatus = localStorage.getItem('dark-mode');
if (darkModeStatus === 'enabled') {
    document.body.classList.add('dark-mode');
    themeButton.classList.replace('uil-moon', 'uil-sun');
} else {
    themeButton.classList.replace('uil-sun', 'uil-moon');
}