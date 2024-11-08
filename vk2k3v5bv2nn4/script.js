// TODO - add sidebar-hidden if mobile device

const menuButtons = document.querySelectorAll('.menu-button');
const screenOverlay = document.querySelector('.screen-overlay');

menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.body.classList.toggle('sidebar-hidden');
    });
});

screenOverlay.addEventListener('click', () => {
    document.body.classList.toggle('sidebar-hidden');
});

// For large screens, show sidebar-hidden
if (window.innerWidth > 768) {
    document.body.classList.remove('sidebar-hidden');
}