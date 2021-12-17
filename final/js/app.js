const mainNavbar = document.getElementById('main-navbar');
const dropdownToggler = document.getElementById('dropdown-opener');

const navToggle = () => {
    mainNavbar.classList.toggle('open')
}

const date = new Date();
document.getElementById("current-date").innerHTML = date.toLocaleString('default', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'});