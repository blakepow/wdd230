let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};
imagesToLoad.forEach((img) => {
    loadImages(img);
});

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
}
  

const millisecondsToDays = 8640000;

const lastVisit = localStorage.getItem('lastvisit') || Date.now()
let numOfDays = String(Math.abs(((lastVisit - Date.now()) / millisecondsToDays).toFixed(0)))
document.getElementById("last-date").textContent = numOfDays + ' days since last visit';   
localStorage.setItem('lastvisit', Date.now());