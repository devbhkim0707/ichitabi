// review_detail.js

const likeBtn = document.getElementById('like-btn');
const likeCount = document.getElementById('like-count');
let count = 0;

likeBtn.addEventListener('click', () => {
  likeBtn.classList.toggle('on');
  if (likeBtn.classList.contains('on')) {
    likeCount.innerHTML = ++count;
  } else {
    likeCount.innerHTML = --count;
  }
});
