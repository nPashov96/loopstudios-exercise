const hamburger = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');
const mobileMenu = document.getElementById('mobile_menu');

function toggleOn() {
    mobileMenu.style.display = 'flex';
}

function toggleOff() {
    mobileMenu.style.display = 'none';
}