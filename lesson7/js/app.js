const date = new Date();
document.getElementById("current-date").innerHTML = date.toLocaleString('default', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'});

const ul = document.getElementById('nav-list');
const menuItem = document.getElementById('dropdown');

menuItem.addEventListener('click', () => {
    ul.classList.toggle('show');
});

const nav = document.getElementById("nav-list");
const btns = nav.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  const current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// Store
localStorage.setItem("lastVisited", new Date);
// Retrieve
// document.getElementById("last-date").innerHTML = localStorage.getItem("lastVisited");