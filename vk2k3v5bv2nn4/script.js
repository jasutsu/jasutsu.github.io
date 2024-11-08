// TODO - add sidebar-hidden if mobile device

const menuButtons = document.querySelectorAll('.menu-button');
menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.body.classList.toggle('sidebar-hidden');
    });
});