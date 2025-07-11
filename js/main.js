// main.js
isMainPage = true;

const regionKanto = document.getElementsByClassName('kiqJ8lXv0XRSXSa_ThjML')[2];

regionKanto.addEventListener('click', () => {
  window.location.href = './reviews/map.html';
});

const hashs = document.querySelectorAll('#hash-div p');
const seasons = document.querySelectorAll('#hash-season p');

hashs.forEach((hash, i) => {
  hash.addEventListener('click', () => {
    hashs.forEach((review) => {
      review.classList.remove('active');
    });
    hashs[i].classList.add('active');
  });
});

seasons.forEach((season, i) => {
  season.addEventListener('click', () => {
    seasons.forEach(festival => {
      festival.classList.remove('active');
    });
    seasons[i].classList.add('active');
  });
});