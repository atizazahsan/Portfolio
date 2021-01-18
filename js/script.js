const menuIcon = document.querySelector('.mobile');
const menuItem = document.querySelector('.showcase');
const navLink = document.querySelector('.mobile-menu a');
const sideNav = document.querySelector('.mobile-menu');
function displayNav() {
    menuIcon.classList.toggle('active');
    menuItem.classList.toggle('active');    
}

function addLinkEffect() {
    // navLink.style.transform-property = "transform"
    navLink.style.transform = "scale(1.2)"
    navLink.style.transitionProperty= "transform"
    navLink.style.transitionDuration = "2s";
    sideNav.classList.toggle('active')

    // navLink.style.transform-delay = ".3s"
}
menuIcon.addEventListener('click', displayNav)
menuIcon.addEventListener('click', addLinkEffect)