// reviews_list.js
import reviews from '../resources/data/reviews.js'; 

function clickHearts() {
  const hearts = document.querySelectorAll('.favo');
  
  hearts.forEach((heart) => {
    heart.addEventListener('click', () => {
      heart.classList.toggle('on');
    });
  });
}

const moreBtn = document.getElementById('more-btn');
const reviewUlEl = document.getElementById('review-ul');
const listTempEl = document.getElementById('reviews-template');

let currentIndex = 0;
function renderReviews(count) {
  reviewUlEl.innerHTML = '';
  const nextReviews = reviews.slice(0, currentIndex + count);
  nextReviews.map(review => {
    const cloneLi = listTempEl.content.firstElementChild.cloneNode(true);
    cloneLi.querySelector('.photo').src = review.imagePath[0];
    cloneLi.querySelector('.age').textContent = review.age;
    cloneLi.querySelector('.gender').textContent = review.gender === 'm' ? '남성' : '여성';
    cloneLi.querySelector('.title').textContent = review.title;
    cloneLi.querySelector('.place').textContent = review.location;
    cloneLi.querySelector('.hash').textContent = review.hashtag.map(tag => `#${tag}`).join(' ');
    reviewUlEl.appendChild(cloneLi);
  });

  clickHearts();
  
  currentIndex += nextReviews.length;
  
  if (currentIndex >= reviews.length) {
    moreBtn.style.display = 'none';
  }
}

renderReviews(8);

moreBtn.addEventListener('click', () => {
  renderReviews(4);
});