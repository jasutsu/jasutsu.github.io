const themeButton = document.querySelector('.theme-button i');
const themeButtonOuter = document.querySelector('.theme-button');
const menuButtons = document.querySelectorAll('.menu-button');
const screenOverlay = document.querySelector('.screen-overlay');

// Toggle dark mode
themeButtonOuter.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    let darkModeStatus = isDarkMode ? 'enabled' : 'disabled';
    if (darkModeStatus === 'enabled') {
        themeButton.classList.replace('uil-moon', 'uil-sun');
    } else {
        themeButton.classList.replace('uil-sun', 'uil-moon');
    }
    localStorage.setItem('dark-mode', darkModeStatus);
});

// Use local storage to get dark mode status
let darkModeStatus = localStorage.getItem('dark-mode');
if (darkModeStatus === 'enabled') {
    document.body.classList.add('dark-mode');
    themeButton.classList.replace('uil-moon', 'uil-sun');
} else {
    document.body.classList.remove('dark-mode');
    themeButton.classList.replace('uil-sun', 'uil-moon');
}

// Show side bar for larger screens
if (window.innerWidth > 768) {
    document.body.classList.remove('sidebar-hidden');
}

// Toggle sidebar
menuButtons.forEach(menuButton => {
    menuButton.addEventListener('click', () => {
        document.body.classList.toggle('sidebar-hidden');
    });
});

screenOverlay.addEventListener('click', () => {
    document.body.classList.toggle('sidebar-hidden');
});