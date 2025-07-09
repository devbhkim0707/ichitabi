// reviews_list.js
const hearts = document.querySelectorAll('.favo');

hearts.forEach((heart) => {
  heart.addEventListener('click', () => {
    heart.classList.toggle('on');
  });
});