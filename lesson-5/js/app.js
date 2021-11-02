const date = new Date();
document.getElementById("current-date").innerHTML = date.toLocaleString('default', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'});

const ul = document.getElementById('nav-list');
const menuItem = document.getElementById('dropdown');

menuItem.addEventListener('click', () => {
    ul.classList.toggle('show');
});