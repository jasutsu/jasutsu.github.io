const themeButton = document.querySelector('.theme-button i');
const menuButton = document.querySelector('.menu-button');

// Toggle dark mode
themeButton.addEventListener('click', () => {
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
menuButton.addEventListener('click', () => {
    document.body.classList.toggle('sidebar-hidden');
});