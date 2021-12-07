const form = document.myForm;

form.addEventListener('submit', e => {
  e.preventDefault();

  window.location.href='./thankyou.html'
  console.log('hi');
})